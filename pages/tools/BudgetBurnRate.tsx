import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, AlertTriangle, TrendingUp, TrendingDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface BurnRateResults {
    currentBurnRate: number;
    plannedBurnRate: number;
    variance: number;
    variancePercent: number;
    projectedFinalSpend: number;
    daysRemaining: number;
    projectedOverrun: number;
    status: 'healthy' | 'warning' | 'critical';
    recommendation: string;
    chartData: { day: number; planned: number; actual: number; projected: number }[];
}

export const BudgetBurnRate: React.FC = () => {
    const [projectName, setProjectName] = useState('Infrastructure Upgrade');
    const [totalBudget, setTotalBudget] = useState(500000);
    const [spentToDate, setSpentToDate] = useState(180000);
    const [daysElapsed, setDaysElapsed] = useState(60);
    const [totalDays, setTotalDays] = useState(120);
    const [results, setResults] = useState<BurnRateResults | null>(null);

    const calculateBurnRate = () => {
        // Current burn rate (per day)
        const currentBurnRate = spentToDate / daysElapsed;

        // Planned burn rate
        const plannedBurnRate = totalBudget / totalDays;

        // Variance
        const variance = currentBurnRate - plannedBurnRate;
        const variancePercent = (variance / plannedBurnRate) * 100;

        // Days remaining
        const daysRemaining = totalDays - daysElapsed;

        // Projected final spend
        const projectedFinalSpend = spentToDate + (currentBurnRate * daysRemaining);

        // Projected overrun
        const projectedOverrun = projectedFinalSpend - totalBudget;

        // Status determination
        let status: 'healthy' | 'warning' | 'critical';
        let recommendation: string;

        if (variancePercent <= 5) {
            status = 'healthy';
            recommendation = 'Budget on track. Continue current spending pace.';
        } else if (variancePercent <= 15) {
            status = 'warning';
            recommendation = `Burning ${variancePercent.toFixed(1)}% faster than planned. Review non-essential spending.`;
        } else {
            status = 'critical';
            recommendation = `CRITICAL: Burning ${variancePercent.toFixed(1)}% faster than planned. Immediate cost reduction required.`;
        }

        // Generate chart data
        const chartData = [];
        for (let day = 0; day <= totalDays; day += Math.ceil(totalDays / 20)) {
            chartData.push({
                day,
                planned: plannedBurnRate * day,
                actual: day <= daysElapsed ? (spentToDate / daysElapsed) * day : null,
                projected: day > daysElapsed ? spentToDate + (currentBurnRate * (day - daysElapsed)) : null
            });
        }

        setResults({
            currentBurnRate,
            plannedBurnRate,
            variance,
            variancePercent,
            projectedFinalSpend,
            daysRemaining,
            projectedOverrun,
            status,
            recommendation,
            chartData
        });
    };

    const exportReport = () => {
        if (!results) return;

        const report = `
Budget Burn Rate Analysis
==========================

Project: ${projectName}
Analysis Date: ${new Date().toLocaleDateString()}

Budget Overview:
- Total Budget: $${totalBudget.toLocaleString()}
- Spent to Date: $${spentToDate.toLocaleString()}
- Days Elapsed: ${daysElapsed} of ${totalDays}
- Days Remaining: ${results.daysRemaining}

Burn Rate Analysis:
- Planned Burn Rate: $${results.plannedBurnRate.toFixed(2)}/day
- Current Burn Rate: $${results.currentBurnRate.toFixed(2)}/day
- Variance: $${results.variance.toFixed(2)}/day (${results.variancePercent.toFixed(1)}%)

Projections:
- Projected Final Spend: $${results.projectedFinalSpend.toLocaleString()}
- Projected Overrun: $${results.projectedOverrun.toLocaleString()}

Status: ${results.status.toUpperCase()}
Recommendation: ${results.recommendation}
`;

        const blob = new Blob([report], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `burn-rate-${projectName.replace(/\s+/g, '-').toLowerCase()}.txt`;
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
                    <h1 className="text-4xl font-bold text-foreground mb-4">Budget Burn Rate Analyzer</h1>
                    <p className="text-lg text-muted-foreground mb-4">
                        Predict budget overruns before they happen with real-time burn rate analysis.
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-bold rounded-full">Beginner</span>
                        <span className="text-sm text-muted-foreground">280+ monthly uses</span>
                    </div>
                </motion.div>

                {/* Input Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-card p-8 rounded-2xl border border-border mb-8"
                >
                    <h2 className="text-2xl font-bold text-foreground mb-6">Project Information</h2>

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
                                <label className="block text-sm font-medium text-foreground mb-2">Total Budget ($)</label>
                                <input
                                    type="number"
                                    value={totalBudget}
                                    onChange={(e) => setTotalBudget(Number(e.target.value))}
                                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">Spent to Date ($)</label>
                                <input
                                    type="number"
                                    value={spentToDate}
                                    onChange={(e) => setSpentToDate(Number(e.target.value))}
                                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">Days Elapsed</label>
                                <input
                                    type="number"
                                    value={daysElapsed}
                                    onChange={(e) => setDaysElapsed(Number(e.target.value))}
                                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">Total Project Duration (days)</label>
                                <input
                                    type="number"
                                    value={totalDays}
                                    onChange={(e) => setTotalDays(Number(e.target.value))}
                                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                        </div>

                        <button
                            onClick={calculateBurnRate}
                            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                        >
                            Analyze Burn Rate
                        </button>
                    </div>
                </motion.div>

                {/* Results */}
                {results && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">

                        {/* Status Alert */}
                        <div className={`p-6 rounded-xl border-2 ${results.status === 'healthy' ? 'bg-primary/10 border-primary' :
                            results.status === 'warning' ? 'bg-yellow-500/10 border-yellow-500' :
                                'bg-red-500/10 border-red-500'
                            }`}>
                            <div className="flex items-start gap-4">
                                {results.status === 'critical' && <AlertTriangle className="w-8 h-8 text-red-500 shrink-0" />}
                                {results.status === 'warning' && <AlertTriangle className="w-8 h-8 text-yellow-500 shrink-0" />}
                                {results.status === 'healthy' && <TrendingUp className="w-8 h-8 text-primary shrink-0" />}
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">
                                        {results.status === 'healthy' ? 'Budget Healthy' :
                                            results.status === 'warning' ? 'Warning: Monitor Closely' :
                                                'Critical: Action Required'}
                                    </h3>
                                    <p className="text-foreground">{results.recommendation}</p>
                                </div>
                            </div>
                        </div>

                        {/* Key Metrics */}
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-card p-6 rounded-xl border border-border">
                                <div className="text-sm text-muted-foreground mb-2">Current Burn Rate</div>
                                <div className="text-3xl font-bold text-foreground">
                                    ${results.currentBurnRate.toLocaleString(undefined, { maximumFractionDigits: 0 })}/day
                                </div>
                                <div className={`text-sm mt-2 flex items-center gap-1 ${results.variance > 0 ? 'text-red-500' : 'text-primary'}`}>
                                    {results.variance > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                                    {results.variancePercent.toFixed(1)}% vs planned
                                </div>
                            </div>

                            <div className="bg-card p-6 rounded-xl border border-border">
                                <div className="text-sm text-muted-foreground mb-2">Projected Final Spend</div>
                                <div className="text-3xl font-bold text-foreground">
                                    ${results.projectedFinalSpend.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                </div>
                                <div className="text-sm text-muted-foreground mt-2">
                                    Budget: ${totalBudget.toLocaleString()}
                                </div>
                            </div>

                            <div className="bg-card p-6 rounded-xl border border-border">
                                <div className="text-sm text-muted-foreground mb-2">Projected Over/Under</div>
                                <div className={`text-3xl font-bold ${results.projectedOverrun > 0 ? 'text-red-500' : 'text-primary'}`}>
                                    ${Math.abs(results.projectedOverrun).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                </div>
                                <div className="text-sm text-muted-foreground mt-2">
                                    {results.projectedOverrun > 0 ? 'Over budget' : 'Under budget'}
                                </div>
                            </div>
                        </div>

                        {/* Chart */}
                        <div className="bg-card p-8 rounded-2xl border border-border">
                            <h3 className="text-xl font-bold text-foreground mb-6">Burn Rate Trend</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={results.chartData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                    <XAxis dataKey="day" stroke="#888" label={{ value: 'Days', position: 'insideBottom', offset: -5 }} />
                                    <YAxis stroke="#888" tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
                                        formatter={(value: number) => `$${value.toLocaleString()}`}
                                    />
                                    <Legend />
                                    <Line type="monotone" dataKey="planned" stroke="#888" strokeDasharray="5 5" name="Planned" />
                                    <Line type="monotone" dataKey="actual" stroke="hsl(var(--primary))" strokeWidth={2} name="Actual" />
                                    <Line type="monotone" dataKey="projected" stroke="#F59E0B" strokeWidth={2} strokeDasharray="3 3" name="Projected" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <button
                            onClick={exportReport}
                            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors font-semibold"
                        >
                            <Download className="w-4 h-4" />
                            Export Analysis Report
                        </button>
                    </motion.div>
                )}

            </div>
        </div>
    );
};
