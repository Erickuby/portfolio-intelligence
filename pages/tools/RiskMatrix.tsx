import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Plus, Edit2, Trash2 } from 'lucide-react';

interface Risk {
    id: string;
    name: string;
    impact: number; // 1-5
    probability: number; // 1-5
    description: string;
}

export const RiskMatrix: React.FC = () => {
    const [projectName, setProjectName] = useState('Digital Transformation Program');
    const [risks, setRisks] = useState<Risk[]>([
        { id: '1', name: 'Budget Overrun', impact: 5, probability: 3, description: 'Cost exceeds allocated budget' },
        { id: '2', name: 'Resource Shortage', impact: 4, probability: 4, description: 'Insufficient skilled staff' },
        { id: '3', name: 'Scope Creep', impact: 3, probability: 4, description: 'Uncontrolled scope expansion' },
        { id: '4', name: 'Technical Debt', impact: 3, probability: 3, description: 'Legacy system integration issues' },
        { id: '5', name: 'Stakeholder Misalignment', impact: 4, probability: 2, description: 'Conflicting priorities' }
    ]);
    const [editingRisk, setEditingRisk] = useState<Risk | null>(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const [newRisk, setNewRisk] = useState<Partial<Risk>>({
        name: '',
        impact: 3,
        probability: 3,
        description: ''
    });

    const getRiskColor = (impact: number, probability: number) => {
        const score = impact * probability;
        if (score >= 20) return 'bg-red-500'; // Critical
        if (score >= 15) return 'bg-orange-500'; // High
        if (score >= 10) return 'bg-yellow-500'; // Medium
        if (score >= 5) return 'bg-blue-500'; // Low
        return 'bg-primary'; // Very Low
    };

    const getRiskLevel = (impact: number, probability: number) => {
        const score = impact * probability;
        if (score >= 20) return 'Critical';
        if (score >= 15) return 'High';
        if (score >= 10) return 'Medium';
        if (score >= 5) return 'Low';
        return 'Very Low';
    };

    const addRisk = () => {
        if (newRisk.name && newRisk.impact && newRisk.probability) {
            setRisks([...risks, {
                id: Date.now().toString(),
                name: newRisk.name,
                impact: newRisk.impact,
                probability: newRisk.probability,
                description: newRisk.description || ''
            }]);
            setNewRisk({ name: '', impact: 3, probability: 3, description: '' });
            setShowAddForm(false);
        }
    };

    const updateRisk = (risk: Risk) => {
        setRisks(risks.map(r => r.id === risk.id ? risk : r));
        setEditingRisk(null);
    };

    const deleteRisk = (id: string) => {
        setRisks(risks.filter(r => r.id !== id));
    };

    const exportRiskRegister = () => {
        const csv = [
            ['Risk Name', 'Description', 'Impact (1-5)', 'Probability (1-5)', 'Score', 'Risk Level'],
            ...risks.map(r => [
                r.name,
                r.description,
                r.impact.toString(),
                r.probability.toString(),
                (r.impact * r.probability).toString(),
                getRiskLevel(r.impact, r.probability)
            ])
        ].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `risk-register-${projectName.replace(/\s+/g, '-').toLowerCase()}.csv`;
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="bg-background min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <Link to="/free-tools" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to all tools
                </Link>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Risk Prioritization Matrix</h1>
                    <p className="text-lg text-muted-foreground mb-4">
                        Interactive risk scoring and visualization. Plot risks on an impact × probability matrix to prioritize mitigation efforts.
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-600 text-sm font-bold rounded-full">Intermediate</span>
                        <span className="text-sm text-muted-foreground">210+ monthly uses</span>
                    </div>
                </motion.div>

                {/* Project Name */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-card p-6 rounded-2xl border border-border mb-8"
                >
                    <label className="block text-sm font-medium text-foreground mb-2">Project Name</label>
                    <input
                        type="text"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </motion.div>

                {/* Risk Matrix Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-card p-8 rounded-2xl border border-border mb-8"
                >
                    <h2 className="text-2xl font-bold text-foreground mb-6">Risk Heat Map</h2>

                    <div className="overflow-x-auto">
                        <div className="inline-block min-w-full">
                            {/* Matrix */}
                            <div className="grid grid-cols-6 gap-2">
                                {/* Header row */}
                                <div className="text-center text-sm font-medium text-muted-foreground p-2"></div>
                                {[1, 2, 3, 4, 5].map(prob => (
                                    <div key={prob} className="text-center text-sm font-medium text-foreground p-2">
                                        {prob === 1 ? 'Very Low' : prob === 2 ? 'Low' : prob === 3 ? 'Medium' : prob === 4 ? 'High' : 'Very High'}
                                    </div>
                                ))}

                                {/* Matrix cells (5 rows for impact) */}
                                {[5, 4, 3, 2, 1].map(impact => (
                                    <React.Fragment key={impact}>
                                        <div className="flex items-center justify-center text-sm font-medium text-foreground p-2">
                                            {impact === 5 ? 'Very High' : impact === 4 ? 'High' : impact === 3 ? 'Medium' : impact === 2 ? 'Low' : 'Very Low'}
                                        </div>
                                        {[1, 2, 3, 4, 5].map(prob => {
                                            const cellRisks = risks.filter(r => r.impact === impact && r.probability === prob);
                                            const colorClass = getRiskColor(impact, prob);

                                            return (
                                                <div
                                                    key={`${impact}-${prob}`}
                                                    className={`${colorClass} bg-opacity-20 border-2 ${colorClass.replace('bg-', 'border-')} rounded-lg p-3 min-h-[100px] relative`}
                                                >
                                                    {cellRisks.map(risk => (
                                                        <div
                                                            key={risk.id}
                                                            className="mb-2 p-2 bg-card rounded border border-border text-xs cursor-pointer hover:shadow-lg transition-shadow"
                                                            onClick={() => setEditingRisk(risk)}
                                                        >
                                                            <div className="font-semibold text-foreground truncate">{risk.name}</div>
                                                            <div className="text-muted-foreground text-[10px]">Score: {risk.impact * risk.probability}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            );
                                        })}
                                    </React.Fragment>
                                ))}
                            </div>

                            {/* Legend */}
                            <div className="mt-6 flex items-center gap-6 flex-wrap">
                                <div className="text-sm font-medium text-foreground">Risk Level:</div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                                    <span className="text-sm text-muted-foreground">Critical (20-25)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-orange-500 rounded"></div>
                                    <span className="text-sm text-muted-foreground">High (15-19)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                                    <span className="text-sm text-muted-foreground">Medium (10-14)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                                    <span className="text-sm text-muted-foreground">Low (5-9)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 bg-primary rounded"></div>
                                    <span className="text-sm text-muted-foreground">Very Low (1-4)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                            <strong className="text-foreground">Axes:</strong> Horizontal = Probability (likelihood of occurring), Vertical = Impact (severity of consequences)
                        </p>
                    </div>
                </motion.div>

                {/* Risk List & Management */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-card p-8 rounded-2xl border border-border mb-8"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-foreground">Risk Register</h2>
                        <button
                            onClick={() => setShowAddForm(!showAddForm)}
                            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                        >
                            <Plus className="w-4 h-4" />
                            Add Risk
                        </button>
                    </div>

                    {/* Add Form */}
                    {showAddForm && (
                        <div className="mb-6 p-6 bg-background rounded-lg border border-border">
                            <h3 className="text-lg font-bold text-foreground mb-4">New Risk</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">Risk Name</label>
                                    <input
                                        type="text"
                                        value={newRisk.name}
                                        onChange={(e) => setNewRisk({ ...newRisk, name: e.target.value })}
                                        className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="e.g., Budget Overrun"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">Description</label>
                                    <input
                                        type="text"
                                        value={newRisk.description}
                                        onChange={(e) => setNewRisk({ ...newRisk, description: e.target.value })}
                                        className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Brief description"
                                    />
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Impact (1-5): {newRisk.impact}</label>
                                        <input
                                            type="range"
                                            min="1"
                                            max="5"
                                            value={newRisk.impact}
                                            onChange={(e) => setNewRisk({ ...newRisk, impact: Number(e.target.value) })}
                                            className="w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Probability (1-5): {newRisk.probability}</label>
                                        <input
                                            type="range"
                                            min="1"
                                            max="5"
                                            value={newRisk.probability}
                                            onChange={(e) => setNewRisk({ ...newRisk, probability: Number(e.target.value) })}
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={addRisk}
                                        className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                                    >
                                        Add Risk
                                    </button>
                                    <button
                                        onClick={() => setShowAddForm(false)}
                                        className="px-4 py-2 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Risk Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Risk</th>
                                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Description</th>
                                    <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Impact</th>
                                    <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Probability</th>
                                    <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Score</th>
                                    <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Level</th>
                                    <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {risks.sort((a, b) => (b.impact * b.probability) - (a.impact * a.probability)).map(risk => (
                                    <tr key={risk.id} className="border-b border-border/50">
                                        <td className="py-3 px-4 font-medium text-foreground">{risk.name}</td>
                                        <td className="py-3 px-4 text-sm text-muted-foreground">{risk.description}</td>
                                        <td className="py-3 px-4 text-center text-muted-foreground">{risk.impact}</td>
                                        <td className="py-3 px-4 text-center text-muted-foreground">{risk.probability}</td>
                                        <td className="py-3 px-4 text-center font-bold text-foreground">{risk.impact * risk.probability}</td>
                                        <td className="py-3 px-4 text-center">
                                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${getRiskLevel(risk.impact, risk.probability) === 'Critical' ? 'bg-red-500/20 text-red-500' :
                                                getRiskLevel(risk.impact, risk.probability) === 'High' ? 'bg-orange-500/20 text-orange-500' :
                                                    getRiskLevel(risk.impact, risk.probability) === 'Medium' ? 'bg-yellow-500/20 text-yellow-500' :
                                                        getRiskLevel(risk.impact, risk.probability) === 'Low' ? 'bg-blue-500/20 text-blue-500' :
                                                            'bg-primary/20 text-primary'
                                                }`}>
                                                {getRiskLevel(risk.impact, risk.probability)}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <button
                                                    onClick={() => setEditingRisk(risk)}
                                                    className="p-2 text-primary hover:bg-primary/10 rounded transition-colors"
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => deleteRisk(risk.id)}
                                                    className="p-2 text-red-500 hover:bg-red-500/10 rounded transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Edit Modal */}
                {editingRisk && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                        <div className="bg-card p-8 rounded-2xl border border-border max-w-md w-full">
                            <h3 className="text-xl font-bold text-foreground mb-4">Edit Risk</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">Risk Name</label>
                                    <input
                                        type="text"
                                        value={editingRisk.name}
                                        onChange={(e) => setEditingRisk({ ...editingRisk, name: e.target.value })}
                                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">Description</label>
                                    <input
                                        type="text"
                                        value={editingRisk.description}
                                        onChange={(e) => setEditingRisk({ ...editingRisk, description: e.target.value })}
                                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">Impact (1-5): {editingRisk.impact}</label>
                                    <input
                                        type="range"
                                        min="1"
                                        max="5"
                                        value={editingRisk.impact}
                                        onChange={(e) => setEditingRisk({ ...editingRisk, impact: Number(e.target.value) })}
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">Probability (1-5): {editingRisk.probability}</label>
                                    <input
                                        type="range"
                                        min="1"
                                        max="5"
                                        value={editingRisk.probability}
                                        onChange={(e) => setEditingRisk({ ...editingRisk, probability: Number(e.target.value) })}
                                        className="w-full"
                                    />
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => updateRisk(editingRisk)}
                                        className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => setEditingRisk(null)}
                                        className="px-4 py-2 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <button
                    onClick={exportRiskRegister}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors font-semibold"
                >
                    <Download className="w-4 h-4" />
                    Export Risk Register (CSV)
                </button>

            </div>
        </div>
    );
};
