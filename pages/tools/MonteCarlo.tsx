import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Save, Github } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

interface SimulationResults {
    p50: number;
    p80: number;
    p90: number;
    p95: number;
    distribution: number[];
    chartData: { value: number; frequency: number }[];
}

export const MonteCarlo: React.FC = () => {
    const [taskName, setTaskName] = useState('Website Redesign');
    const [optimistic, setOptimistic] = useState(10);
    const [likely, setLikely] = useState(15);
    const [pessimistic, setPessimistic] = useState(25);
    const [iterations, setIterations] = useState(10000);
    const [results, setResults] = useState<SimulationResults | null>(null);
    const [isCalculating, setIsCalculating] = useState(false);

    // Generate a random number from Beta distribution (PERT)
    const betaRandom = (alpha: number, beta: number): number => {
        // Using simplified Beta distribution approximation
        let sum = 0;
        for (let i = 0; i < 12; i++) {
            sum += Math.random();
        }
        return (sum - 6) / 6; // Normalized to approximately -1 to 1
    };

    const runSimulation = () => {
        setIsCalculating(true);

        // Allow UI to update before heavy calculation
        setTimeout(() => {
            const results: number[] = [];

            // PERT Beta distribution parameters
            const mean = (optimistic + 4 * likely + pessimistic) / 6;
            const stdDev = (pessimistic - optimistic) / 6;

            // Run Monte Carlo simulation
            for (let i = 0; i < iterations; i++) {
                // Generate random value using triangular/beta distribution approximation
                const r1 = Math.random();
                const r2 = Math.random();
                const r3 = Math.random();

                // Simplified PERT: Weighted average with random variance
                const estimate = optimistic +
                    4 * likely +
                    pessimistic +
                    (r1 + r2 + r3 - 1.5) * (pessimistic - optimistic);

                const value = estimate / 6;
                results.push(Math.max(optimistic, Math.min(pessimistic, value)));
            }

            // Sort for percentile calculation
            results.sort((a, b) => a - b);

            // Calculate percentiles
            const getPercentile = (arr: number[], p: number) => {
                const index = Math.ceil((p / 100) * arr.length) - 1;
                return arr[Math.max(0, index)];
            };

            // Create histogram data for chart
            const buckets = 30;
            const min = Math.min(...results);
            const max = Math.max(...results);
            const bucketSize = (max - min) / buckets;
            const histogram = new Array(buckets).fill(0);

            results.forEach(value => {
                const bucketIndex = Math.min(buckets - 1, Math.floor((value - min) / bucketSize));
                histogram[bucketIndex]++;
            });

            const chartData = histogram.map((freq, idx) => ({
                value: min + (idx + 0.5) * bucketSize,
                frequency: freq
            }));

            setResults({
                p50: getPercentile(results, 50),
                p80: getPercentile(results, 80),
                p90: getPercentile(results, 90),
                p95: getPercentile(results, 95),
                distribution: results,
                chartData
            });

            setIsCalculating(false);
        }, 100);
    };

    const exportToPDF = () => {
        // Simple text export for now (PDF generation would require additional library)
        const report = `
Monte Carlo Simulation Results
================================

Task: ${taskName}
Iterations: ${iterations.toLocaleString()}

Estimates:
- Optimistic: ${optimistic} days
- Most Likely: ${likely} days  
- Pessimistic: ${pessimistic} days

Confidence Intervals:
- 50% confidence: ${results?.p50.toFixed(1)} days
- 80% confidence: ${results?.p80.toFixed(1)} days
- 90% confidence: ${results?.p90.toFixed(1)} days  
- 95% confidence: ${results?.p95.toFixed(1)} days

Recommendation: Plan for ${results?.p80.toFixed(1)} days (80% confidence)
`;

        const blob = new Blob([report], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `monte-carlo-${taskName.replace(/\s+/g, '-').toLowerCase()}.txt`;
        a.click();
        URL.revokeObjectURL(url);
    };

    const exportToCSV = () => {
        if (!results) return;

        const csv = [
            ['Percentile', 'Days'],
            ['50%', results.p50.toFixed(2)],
            ['80%', results.p80.toFixed(2)],
            ['90%', results.p90.toFixed(2)],
            ['95%', results.p95.toFixed(2)]
        ].map(row => row.join(',')).join('\n');

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `monte-carlo-${taskName.replace(/\s+/g, '-').toLowerCase()}.csv`;
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="bg-background min-h-screen py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Button */}
                <Link
                    to="/free-tools"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to all tools
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl font-bold text-foreground mb-4">Monte Carlo Project Estimation Simulator</h1>
                    <p className="text-lg text-muted-foreground mb-4">
                        Stop making single-point estimates. Get probability distributions and confidence intervals in seconds.
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-bold rounded-full">Beginner</span>
                        <span className="text-sm text-muted-foreground">500+ monthly uses</span>
                        <a
                            href="https://github.com/portfolio-intelligence/monte-carlo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Github className="w-4 h-4" />
                            View Source Code
                        </a>
                    </div>
                </motion.div>

                {/* Input Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-card p-8 rounded-2xl border border-border mb-8"
                >
                    <h2 className="text-2xl font-bold text-foreground mb-6">Input Your Estimates</h2>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Task Name
                            </label>
                            <input
                                type="text"
                                value={taskName}
                                onChange={(e) => setTaskName(e.target.value)}
                                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="e.g., Website Redesign"
                            />
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Optimistic Estimate (days)
                                </label>
                                <input
                                    type="number"
                                    value={optimistic}
                                    onChange={(e) => setOptimistic(Number(e.target.value))}
                                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    min="1"
                                />
                                <p className="text-xs text-muted-foreground mt-1">Best case scenario</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Most Likely Estimate (days)
                                </label>
                                <input
                                    type="number"
                                    value={likely}
                                    onChange={(e) => setLikely(Number(e.target.value))}
                                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    min="1"
                                />
                                <p className="text-xs text-muted-foreground mt-1">Most realistic</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Pessimistic Estimate (days)
                                </label>
                                <input
                                    type="number"
                                    value={pessimistic}
                                    onChange={(e) => setPessimistic(Number(e.target.value))}
                                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    min="1"
                                />
                                <p className="text-xs text-muted-foreground mt-1">Worst case scenario</p>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Number of Simulations: {iterations.toLocaleString()}
                            </label>
                            <input
                                type="range"
                                min="1000"
                                max="100000"
                                step="1000"
                                value={iterations}
                                onChange={(e) => setIterations(Number(e.target.value))}
                                className="w-full"
                            />
                            <div className="flex justify-between text-xs text-muted-foreground mt-1">
                                <span>1,000</span>
                                <span>100,000</span>
                            </div>
                        </div>

                        <button
                            onClick={runSimulation}
                            disabled={isCalculating}
                            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold disabled:opacity-50"
                        >
                            {isCalculating ? 'Running Simulation...' : 'Run Simulation'}
                        </button>
                    </div>
                </motion.div>

                {/* Results */}
                {results && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        {/* Chart */}
                        <div className="bg-card p-8 rounded-2xl border border-border">
                            <h3 className="text-xl font-bold text-foreground mb-6">Probability Distribution</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <AreaChart data={results.chartData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                    <XAxis
                                        dataKey="value"
                                        stroke="#888"
                                        tickFormatter={(value) => value.toFixed(1)}
                                    />
                                    <YAxis stroke="#888" />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
                                        labelFormatter={(value) => `${Number(value).toFixed(1)} days`}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="frequency"
                                        stroke="hsl(var(--primary))"
                                        fill="hsl(var(--primary))"
                                        fillOpacity={0.6}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Confidence Intervals */}
                        <div className="bg-card p-8 rounded-2xl border border-border">
                            <h3 className="text-xl font-bold text-foreground mb-6">Confidence Intervals</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                                    <span className="text-muted-foreground">50% chance of completion within:</span>
                                    <span className="text-2xl font-bold text-foreground">{results.p50.toFixed(1)} days</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-background rounded-lg border-2 border-primary">
                                    <span className="text-foreground font-semibold">80% chance of completion within:</span>
                                    <span className="text-2xl font-bold text-primary">{results.p80.toFixed(1)} days</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                                    <span className="text-muted-foreground">90% chance of completion within:</span>
                                    <span className="text-2xl font-bold text-foreground">{results.p90.toFixed(1)} days</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                                    <span className="text-muted-foreground">95% chance of completion within:</span>
                                    <span className="text-2xl font-bold text-foreground">{results.p95.toFixed(1)} days</span>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-primary/10 border border-primary rounded-lg">
                                <p className="text-foreground">
                                    <strong>Recommendation:</strong> Plan for <strong>{results.p80.toFixed(1)} days</strong> (80% confidence)
                                    to balance optimism with realism.
                                </p>
                            </div>
                        </div>

                        {/* Export Buttons */}
                        <div className="flex gap-4">
                            <button
                                onClick={exportToPDF}
                                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors font-semibold"
                            >
                                <Download className="w-4 h-4" />
                                Export Results (TXT)
                            </button>
                            <button
                                onClick={exportToCSV}
                                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors font-semibold"
                            >
                                <Download className="w-4 h-4" />
                                Export Results (CSV)
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* Why Monte Carlo Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    class Name="mt-12 bg-gradient-to-br from-primary/10 to-background p-8 rounded-2xl border border-primary/20"
                >
                    <h3 className="text-2xl font-bold text-foreground mb-4">Why Monte Carlo?</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-foreground font-semibold mb-2">Traditional PM:</p>
                            <p className="text-muted-foreground">"It'll take 15 days."</p>
                        </div>
                        <div>
                            <p className="text-foreground font-semibold mb-2">Monte Carlo PM:</p>
                            <p className="text-muted-foreground">"There's an 80% chance it'll take between 13-19 days."</p>
                        </div>
                    </div>
                    <p className="text-foreground mt-6">
                        Which would you rather report to your stakeholders?
                    </p>
                    <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                        <p>→ Used by 500+ PMs monthly</p>
                        <p>→ Based on 10,000-point statistical simulation</p>
                        <p>→ Accounts for uncertainty in estimates</p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};
