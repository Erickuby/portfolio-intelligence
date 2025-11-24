import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, DollarSign } from 'lucide-react';

interface EVMResults {
    cv: number; // Cost Variance
    sv: number; // Schedule Variance
    cpi: number; // Cost Performance Index
    spi: number; // Schedule Performance Index
    eac: number; // Estimate at Completion
    etc: number; // Estimate to Complete
    vac: number; // Variance at Completion
    tcpi: number; // To-Complete Performance Index
    status: string;
    healthColor: string;
}

export const EVMCalculator: React.FC = () => {
    const [projectName, setProjectName] = useState('Digital Transformation');
    const [pv, setPv] = useState(250000); // Planned Value
    const [ev, setEv] = useState(200000); // Earned Value
    const [ac, setAc] = useState(220000); // Actual Cost
    const [bac, setBac] = useState(500000); // Budget at Completion
    const [results, setResults] = useState<EVMResults | null>(null);

    const calculateEVM = () => {
        // Cost Variance (CV = EV - AC)
        const cv = ev - ac;

        // Schedule Variance (SV = EV - PV)
        const sv = ev - pv;

        // Cost Performance Index (CPI = EV / AC)
        const cpi = ac > 0 ? ev / ac : 0;

        // Schedule Performance Index (SPI = EV / PV)
        const spi = pv > 0 ? ev / pv : 0;

        // Estimate at Completion (EAC = BAC / CPI)
        const eac = cpi > 0 ? bac / cpi : bac;

        // Estimate to Complete (ETC = EAC - AC)
        const etc = eac - ac;

        // Variance at Completion (VAC = BAC - EAC)
        const vac = bac - eac;

        // To-Complete Performance Index (TCPI = (BAC - EV) / (BAC - AC))
        const tcpi = (bac - ac) > 0 ? (bac - ev) / (bac - ac) : 0;

        // Determine status
        let status: string;
        let healthColor: string;

        if (cpi >= 0.95 && spi >= 0.95) {
            status = 'Healthy - On Track';
            healthColor = 'green';
        } else if (cpi >= 0.85 && spi >= 0.85) {
            status = 'Warning - Monitor Closely';
            healthColor = 'yellow';
        } else {
            status = 'Critical - Intervention Required';
            healthColor = 'red';
        }

        setResults({ cv, sv, cpi, spi, eac, etc, vac, tcpi, status, healthColor });
    };

    const exportReport = () => {
        if (!results) return;

        const report = `
Earned Value Management Analysis
==================================

Project: ${projectName}
Analysis Date: ${new Date().toLocaleDateString()}

Input Values:
- Planned Value (PV): $${pv.toLocaleString()}
- Earned Value (EV): $${ev.toLocaleString()}
- Actual Cost (AC): $${ac.toLocaleString()}
- Budget at Completion (BAC): $${bac.toLocaleString()}

Variance Metrics:
- Cost Variance (CV): $${results.cv.toLocaleString()} ${results.cv >= 0 ? '(Under budget)' : '(Over budget)'}
- Schedule Variance (SV): $${results.sv.toLocaleString()} ${results.sv >= 0 ? '(Ahead)' : '(Behind)'}

Performance Indices:
- Cost Performance Index (CPI): ${results.cpi.toFixed(3)} ${results.cpi >= 1 ? '(Good)' : '(Poor)'}
- Schedule Performance Index (SPI): ${results.spi.toFixed(3)} ${results.spi >= 1 ? '(Good)' : '(Poor)'}

Forecasts:
- Estimate at Completion (EAC): $${results.eac.toLocaleString()}
- Estimate to Complete (ETC): $${results.etc.toLocaleString()}
- Variance at Completion (VAC): $${results.vac.toLocaleString()}
- To-Complete Performance Index (TCPI): ${results.tcpi.toFixed(3)}

Overall Status: ${results.status}
`;

        const blob = new Blob([report], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `evm-analysis-${projectName.replace(/\s+/g, '-').toLowerCase()}.txt`;
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="bg-background min-h-screen py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <Link to="/free-tools" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to all tools
                </Link>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Earned Value Management (EVM) Calculator</h1>
                    <p className="text-lg text-muted-foreground mb-4">
                        Calculate CPI, SPI, EAC, and project forecasts using industry-standard EVM formulas.
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-600 text-sm font-bold rounded-full">Intermediate</span>
                        <span className="text-sm text-muted-foreground">150+ monthly uses</span>
                    </div>
                </motion.div>

                {/* Input Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-card p-8 rounded-2xl border border-border mb-8"
                >
                    <h2 className="text-2xl font-bold text-foreground mb-6">EVM Inputs</h2>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">Project Name</label>
                            <input
                                type="text"
                                value={projectName}
                                onChange={(e) => setProjectName(e.target.value)}
                                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Planned Value (PV) - $
                                </label>
                                <input
                                    type="number"
                                    value={pv}
                                    onChange={(e) => setPv(Number(e.target.value))}
                                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <p className="text-xs text-muted-foreground mt-1">Value of work planned to be done</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Earned Value (EV) - $
                                </label>
                                <input
                                    type="number"
                                    value={ev}
                                    onChange={(e) => setEv(Number(e.target.value))}
                                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <p className="text-xs text-muted-foreground mt-1">Value of work actually completed</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Actual Cost (AC) - $
                                </label>
                                <input
                                    type="number"
                                    value={ac}
                                    onChange={(e) => setAc(Number(e.target.value))}
                                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <p className="text-xs text-muted-foreground mt-1">Actual cost of work completed</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Budget at Completion (BAC) - $
                                </label>
                                <input
                                    type="number"
                                    value={bac}
                                    onChange={(e) => setBac(Number(e.target.value))}
                                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <p className="text-xs text-muted-foreground mt-1">Total project budget</p>
                            </div>
                        </div>

                        <button
                            onClick={calculateEVM}
                            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                        >
                            Calculate EVM Metrics
                        </button>
                    </div>
                </motion.div>

                {/* Results */}
                {results && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">

                        {/* Status */}
                        <div className={`p-6 rounded-xl border-2 ${results.healthColor === 'green' ? 'bg-primary/10 border-primary' :
                            results.healthColor === 'yellow' ? 'bg-yellow-500/10 border-yellow-500' :
                                'bg-red-500/10 border-red-500'
                            }`}>
                            <h3 className="text-xl font-bold text-foreground mb-2">Project Status</h3>
                            <p className="text-foreground text-lg">{results.status}</p>
                        </div>

                        {/* Variance Metrics */}
                        <div className="bg-card p-8 rounded-2xl border border-border">
                            <h3 className="text-xl font-bold text-foreground mb-6">Variance Metrics</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-4 bg-background rounded-lg">
                                    <div className="text-sm text-muted-foreground mb-2">Cost Variance (CV)</div>
                                    <div className={`text-3xl font-bold ${results.cv >= 0 ? 'text-primary' : 'text-red-500'}`}>
                                        ${results.cv.toLocaleString()}
                                    </div>
                                    <div className="text-sm text-muted-foreground mt-1">
                                        {results.cv >= 0 ? 'Under budget' : 'Over budget'}
                                    </div>
                                </div>
                                <div className="p-4 bg-background rounded-lg">
                                    <div className="text-sm text-muted-foreground mb-2">Schedule Variance (SV)</div>
                                    <div className={`text-3xl font-bold ${results.sv >= 0 ? 'text-primary' : 'text-red-500'}`}>
                                        ${results.sv.toLocaleString()}
                                    </div>
                                    <div className="text-sm text-muted-foreground mt-1">
                                        {results.sv >= 0 ? 'Ahead of schedule' : 'Behind schedule'}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Performance Indices */}
                        <div className="bg-card p-8 rounded-2xl border border-border">
                            <h3 className="text-xl font-bold text-foreground mb-6">Performance Indices</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-4 bg-background rounded-lg">
                                    <div className="text-sm text-muted-foreground mb-2">Cost Performance Index (CPI)</div>
                                    <div className={`text-3xl font-bold ${results.cpi >= 1 ? 'text-primary' : 'text-red-500'}`}>
                                        {results.cpi.toFixed(3)}
                                    </div>
                                    <div className="text-sm text-muted-foreground mt-1">
                                        {results.cpi >= 1 ? `Getting $${results.cpi.toFixed(2)} value per $1 spent` : 'Cost efficiency below target'}
                                    </div>
                                </div>
                                <div className="p-4 bg-background rounded-lg">
                                    <div className="text-sm text-muted-foreground mb-2">Schedule Performance Index (SPI)</div>
                                    <div className={`text-3xl font-bold ${results.spi >= 1 ? 'text-primary' : 'text-red-500'}`}>
                                        {results.spi.toFixed(3)}
                                    </div>
                                    <div className="text-sm text-muted-foreground mt-1">
                                        {results.spi >= 1 ? 'Schedule efficiency good' : 'Schedule efficiency below target'}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Forecasts */}
                        <div className="bg-card p-8 rounded-2xl border border-border">
                            <h3 className="text-xl font-bold text-foreground mb-6">Project Forecasts</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                                    <span className="text-muted-foreground">Estimate at Completion (EAC)</span>
                                    <span className="text-2xl font-bold text-foreground">${results.eac.toLocaleString()}</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                                    <span className="text-muted-foreground">Estimate to Complete (ETC)</span>
                                    <span className="text-2xl font-bold text-foreground">${results.etc.toLocaleString()}</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-background rounded-lg border-2 border-primary">
                                    <span className="text-foreground font-semibold">Variance at Completion (VAC)</span>
                                    <span className={`text-2xl font-bold ${results.vac >= 0 ? 'text-primary' : 'text-red-500'}`}>
                                        ${results.vac.toLocaleString()}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                                    <span className="text-muted-foreground">To-Complete Performance Index (TCPI)</span>
                                    <span className="text-2xl font-bold text-foreground">{results.tcpi.toFixed(3)}</span>
                                </div>
                            </div>
                            <div className="mt-6 p-4 bg-primary/10 border border-primary rounded-lg">
                                <p className="text-sm text-foreground">
                                    <strong>TCPI Interpretation:</strong> Need to achieve {results.tcpi.toFixed(3)} efficiency for the remaining work to meet the original budget.
                                    {results.tcpi > 1.1 && ' This is challenging - consider budget revision.'}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={exportReport}
                            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors font-semibold"
                        >
                            <Download className="w-4 h-4" />
                            Export EVM Report
                        </button>
                    </motion.div>
                )}

            </div>
        </div>
    );
};
