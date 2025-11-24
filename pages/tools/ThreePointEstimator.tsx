import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Plus, Trash2, Calculator } from 'lucide-react';

interface Task {
    id: string;
    name: string;
    optimistic: number;
    likely: number;
    pessimistic: number;
}

interface TaskEstimate {
    id: string;
    name: string;
    optimistic: number;
    likely: number;
    pessimistic: number;
    pertEstimate: number;
    standardDeviation: number;
}

export const ThreePointEstimator: React.FC = () => {
    const [projectName, setProjectName] = useState('Q1 Feature Release');
    const [tasks, setTasks] = useState<Task[]>([
        { id: '1', name: 'Design System Setup', optimistic: 3, likely: 5, pessimistic: 8 },
        { id: '2', name: 'Backend API Development', optimistic: 10, likely: 15, pessimistic: 25 },
        { id: '3', name: 'Frontend Components', optimistic: 8, likely: 12, pessimistic: 18 }
    ]);
    const [estimates, setEstimates] = useState<TaskEstimate[] | null>(null);

    const addTask = () => {
        setTasks([...tasks, {
            id: Date.now().toString(),
            name: 'New Task',
            optimistic: 1,
            likely: 3,
            pessimistic: 5
        }]);
    };

    const removeTask = (id: string) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    const updateTask = (id: string, field: keyof Task, value: string | number) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, [field]: value } : t));
    };

    const calculateEstimates = () => {
        const taskEstimates: TaskEstimate[] = tasks.map(task => {
            // PERT Formula: (O + 4M + P) / 6
            const pertEstimate = (task.optimistic + (4 * task.likely) + task.pessimistic) / 6;

            // Standard Deviation: (P - O) / 6
            const standardDeviation = (task.pessimistic - task.optimistic) / 6;

            return {
                ...task,
                pertEstimate,
                standardDeviation
            };
        });

        setEstimates(taskEstimates);
    };

    const exportToCSV = () => {
        if (!estimates) return;

        const csv = [
            ['Task Name', 'Optimistic', 'Likely', 'Pessimistic', 'PERT Estimate', 'Std Dev'],
            ...estimates.map(e => [
                e.name,
                e.optimistic,
                e.likely,
                e.pessimistic,
                e.pertEstimate.toFixed(2),
                e.standardDeviation.toFixed(2)
            ]),
            ['', '', '', 'TOTAL:', estimates.reduce((sum, e) => sum + e.pertEstimate, 0).toFixed(2), '']
        ].map(row => row.join(',')).join('\n');

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `pert-estimate-${projectName.replace(/\s+/g, '-').toLowerCase()}.csv`;
        a.click();
        URL.revokeObjectURL(url);
    };

    const totalPertEstimate = estimates?.reduce((sum, e) => sum + e.pertEstimate, 0) || 0;
    const totalOptimistic = tasks.reduce((sum, t) => sum + t.optimistic, 0);
    const totalPessimistic = tasks.reduce((sum, t) => sum + t.pessimistic, 0);

    return (
        <div className="bg-background min-h-screen py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <Link to="/free-tools" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to all tools
                </Link>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Three-Point Estimator (PERT)</h1>
                    <p className="text-lg text-muted-foreground mb-4">
                        Batch estimation for multiple tasks using the proven PERT formula.
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-bold rounded-full">Beginner</span>
                        <span className="text-sm text-muted-foreground">180+ monthly uses</span>
                    </div>
                </motion.div>

                {/* Project Name */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-card p-6 rounded-2xl border border-border mb-6"
                >
                    <label className="block text-sm font-medium text-foreground mb-2">Project Name</label>
                    <input
                        type="text"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </motion.div>

                {/* Tasks Input */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-card p-8 rounded-2xl border border-border mb-8"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-foreground">Tasks to Estimate</h2>
                        <button
                            onClick={addTask}
                            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                        >
                            <Plus className="w-4 h-4" />
                            Add Task
                        </button>
                    </div>

                    <div className="space-y-4">
                        {tasks.map((task, index) => (
                            <div key={task.id} className="grid grid-cols-12 gap-4 items-center p-4 bg-background rounded-lg">
                                <div className="col-span-12 md:col-span-4">
                                    <input
                                        type="text"
                                        value={task.name}
                                        onChange={(e) => updateTask(task.id, 'name', e.target.value)}
                                        className="w-full px-3 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                                        placeholder="Task name"
                                    />
                                </div>
                                <div className="col-span-4 md:col-span-2">
                                    <label className="block text-xs text-muted-foreground mb-1">Optimistic</label>
                                    <input
                                        type="number"
                                        value={task.optimistic}
                                        onChange={(e) => updateTask(task.id, 'optimistic', Number(e.target.value))}
                                        className="w-full px-3 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                                    />
                                </div>
                                <div className="col-span-4 md:col-span-2">
                                    <label className="block text-xs text-muted-foreground mb-1">Likely</label>
                                    <input
                                        type="number"
                                        value={task.likely}
                                        onChange={(e) => updateTask(task.id, 'likely', Number(e.target.value))}
                                        className="w-full px-3 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                                    />
                                </div>
                                <div className="col-span-4 md:col-span-2">
                                    <label className="block text-xs text-muted-foreground mb-1">Pessimistic</label>
                                    <input
                                        type="number"
                                        value={task.pessimistic}
                                        onChange={(e) => updateTask(task.id, 'pessimistic', Number(e.target.value))}
                                        className="w-full px-3 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                                    />
                                </div>
                                <div className="col-span-12 md:col-span-2 flex justify-end">
                                    <button
                                        onClick={() => removeTask(task.id)}
                                        className="px-3 py-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                                        disabled={tasks.length === 1}
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={calculateEstimates}
                        className="w-full mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold flex items-center justify-center gap-2"
                    >
                        <Calculator className="w-4 h-4" />
                        Calculate PERT Estimates
                    </button>
                </motion.div>

                {/* Results */}
                {estimates && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">

                        {/* Summary */}
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-card p-6 rounded-xl border border-border text-center">
                                <div className="text-sm text-muted-foreground mb-2">Best Case (Sum of Optimistic)</div>
                                <div className="text-3xl font-bold text-primary">{totalOptimistic} days</div>
                            </div>
                            <div className="bg-card p-6 rounded-xl border border-border text-center border-2 border-primary">
                                <div className="text-sm text-muted-foreground mb-2">PERT Estimate (Recommended)</div>
                                <div className="text-3xl font-bold text-primary">{totalPertEstimate.toFixed(1)} days</div>
                            </div>
                            <div className="bg-card p-6 rounded-xl border border-border text-center">
                                <div className="text-sm text-muted-foreground mb-2">Worst Case (Sum of Pessimistic)</div>
                                <div className="text-3xl font-bold text-red-500">{totalPessimistic} days</div>
                            </div>
                        </div>

                        {/* Detailed Table */}
                        <div className="bg-card p-8 rounded-2xl border border-border">
                            <h3 className="text-xl font-bold text-foreground mb-6">Detailed Estimates</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-border">
                                            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Task</th>
                                            <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Optimistic</th>
                                            <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Likely</th>
                                            <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Pessimistic</th>
                                            <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">PERT Est.</th>
                                            <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Std Dev</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {estimates.map((task, index) => (
                                            <tr key={task.id} className="border-b border-border/50">
                                                <td className="py-3 px-4 text-foreground">{task.name}</td>
                                                <td className="py-3 px-4 text-right text-muted-foreground">{task.optimistic}d</td>
                                                <td className="py-3 px-4 text-right text-muted-foreground">{task.likely}d</td>
                                                <td className="py-3 px-4 text-right text-muted-foreground">{task.pessimistic}d</td>
                                                <td className="py-3 px-4 text-right font-bold text-primary">{task.pertEstimate.toFixed(1)}d</td>
                                                <td className="py-3 px-4 text-right text-muted-foreground">{task.standardDeviation.toFixed(1)}d</td>
                                            </tr>
                                        ))}
                                        <tr className="border-t-2 border-primary">
                                            <td className="py-4 px-4 font-bold text-foreground">TOTAL</td>
                                            <td className="py-4 px-4 text-right font-semibold text-foreground">{totalOptimistic}d</td>
                                            <td className="py-4 px-4"></td>
                                            <td className="py-4 px-4 text-right font-semibold text-foreground">{totalPessimistic}d</td>
                                            <td className="py-4 px-4 text-right font-bold text-primary text-xl">{totalPertEstimate.toFixed(1)}d</td>
                                            <td className="py-4 px-4"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-primary/10 border border-primary rounded-xl p-6">
                            <h4 className="text-lg font-bold text-foreground mb-2">PERT Formula</h4>
                            <p className="text-foreground">PERT Estimate = (Optimistic + 4 × Likely + Pessimistic) / 6</p>
                            <p className="text-sm text-muted-foreground mt-2">
                                This weighted formula gives more weight to the "most likely" estimate, providing a more realistic project timeline.
                            </p>
                        </div>

                        <button
                            onClick={exportToCSV}
                            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors font-semibold"
                        >
                            <Download className="w-4 h-4" />
                            Export Estimates (CSV)
                        </button>
                    </motion.div>
                )}

            </div>
        </div>
    );
};
