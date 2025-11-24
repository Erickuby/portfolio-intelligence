import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Calculator,
    Users,
    Clock,
    DollarSign,
    AlertTriangle,
    TrendingDown,
    ArrowRight,
    Share2,
    Download,
    Info,
    CheckCircle2,
    Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const MeetingCost: React.FC = () => {
    // State for inputs
    const [meetingName, setMeetingName] = useState('');
    const [attendees, setAttendees] = useState(8);
    const [durationMinutes, setDurationMinutes] = useState(60);
    const [hourlyRate, setHourlyRate] = useState(75);
    const [currency, setCurrency] = useState('USD');
    const [frequency, setFrequency] = useState('weekly');

    // State for results
    const [results, setResults] = useState({
        costPerMeeting: 0,
        costPerPerson: 0,
        costPerMinute: 0,
        annualCost: 0,
        savingsDuration: 0,
        savingsAttendees: 0,
        savingsAsync: 0
    });

    const currencies = [
        { code: 'USD', symbol: '$' },
        { code: 'GBP', symbol: '£' },
        { code: 'EUR', symbol: '€' },
        { code: 'CAD', symbol: '$' }
    ];

    const getCurrencySymbol = (code: string) => {
        return currencies.find(c => c.code === code)?.symbol || '$';
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(amount);
    };

    // Calculation Logic
    useEffect(() => {
        const durationHours = durationMinutes / 60;
        const costPerMeeting = attendees * hourlyRate * durationHours;
        const costPerPerson = hourlyRate * durationHours;
        const costPerMinute = durationMinutes > 0 ? costPerMeeting / durationMinutes : 0;

        const meetingsPerYear: Record<string, number> = {
            'one-time': 1,
            'daily': 250, // 5 days * 50 weeks
            'weekly': 52,
            'bi-weekly': 26,
            'monthly': 12
        };

        const annualCost = costPerMeeting * (meetingsPerYear[frequency] || 1);

        // Optimization calculations
        const savingsDuration = annualCost * 0.5; // 50% reduction
        const savingsAttendees = annualCost * 0.25; // 25% reduction
        const savingsAsync = annualCost; // 100% reduction (async)

        setResults({
            costPerMeeting,
            costPerPerson,
            costPerMinute,
            annualCost,
            savingsDuration,
            savingsAttendees,
            savingsAsync
        });
    }, [attendees, durationMinutes, hourlyRate, frequency, currency]);

    // Warnings Logic
    const getWarnings = () => {
        const warnings = [];
        if (results.costPerMeeting > 500 && durationMinutes > 60) {
            warnings.push({
                type: 'high-cost',
                title: 'High-Cost Meeting Alert',
                message: 'This meeting exceeds recommended cost-efficiency thresholds.',
                color: 'bg-red-500/10 border-red-500/50 text-red-500'
            });
        }
        if (attendees > 10) {
            warnings.push({
                type: 'large-group',
                title: 'Large Group Meeting',
                message: 'Meetings with 10+ people often have low engagement. Consider breaking into smaller groups.',
                color: 'bg-yellow-500/10 border-yellow-500/50 text-yellow-500'
            });
        }
        if (durationMinutes > 90) {
            warnings.push({
                type: 'long-duration',
                title: 'Long Meeting Duration',
                message: 'Meetings over 90 minutes show diminishing returns. Consider breaks or splitting sessions.',
                color: 'bg-orange-500/10 border-orange-500/50 text-orange-500'
            });
        }
        return warnings;
    };

    // Funding Alternatives Logic
    const getFundingAlternatives = () => {
        if (results.annualCost < 10000) {
            return [
                'Full year of premium PM software (Jira, Asana)',
                '3-4 conference attendance tickets for team',
                'Annual training budget for 5 team members'
            ];
        } else if (results.annualCost < 50000) {
            return [
                'A full-time junior developer\'s salary',
                'Enterprise-wide project management suite',
                'Complete team training & certification program',
                'Annual marketing budget for small product'
            ];
        } else {
            return [
                '1-2 full-time senior developers',
                'Complete digital transformation initiative',
                'Annual infrastructure/cloud costs for medium startup',
                'Your entire team\'s training budget for 5 years'
            ];
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <div className="bg-background text-white py-20 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/free-tools" className="inline-flex items-center text-muted-foreground hover:text-white mb-8 transition-colors">
                        <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                        Back to all tools
                    </Link>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Meeting Cost Calculator</h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            What does that 1-hour standup actually cost your organization? Calculate the true financial impact and identify optimization opportunities.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30">Beginner Friendly</span>
                            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30">350+ monthly uses</span>
                            <a href="https://github.com/Erickuby/meeting-cost-calculator" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-secondary text-muted-foreground rounded-full text-sm font-medium border border-border hover:bg-secondary/80 transition-colors">
                                View Source Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Input Form */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Calculator className="w-6 h-6 text-primary" />
                                Input Details
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Meeting Name (Optional)</label>
                                    <input
                                        type="text"
                                        value={meetingName}
                                        onChange={(e) => setMeetingName(e.target.value)}
                                        placeholder="e.g., Weekly Team Sync"
                                        className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Number of Attendees *</label>
                                    <div className="relative">
                                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <input
                                            type="number"
                                            min="1"
                                            max="500"
                                            value={attendees}
                                            onChange={(e) => setAttendees(Math.max(1, parseInt(e.target.value) || 0))}
                                            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Duration (minutes) *</label>
                                    <div className="relative">
                                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <input
                                            type="number"
                                            min="5"
                                            max="480"
                                            value={durationMinutes}
                                            onChange={(e) => setDurationMinutes(Math.max(5, parseInt(e.target.value) || 0))}
                                            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                        />
                                    </div>
                                    <input
                                        type="range"
                                        min="5"
                                        max="480"
                                        step="5"
                                        value={durationMinutes}
                                        onChange={(e) => setDurationMinutes(parseInt(e.target.value))}
                                        className="w-full mt-2 accent-primary"
                                    />
                                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                                        <span>5 min</span>
                                        <span>8 hours</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                                        Average Hourly Rate *
                                        <div className="group relative">
                                            <Info className="w-4 h-4 text-muted-foreground cursor-help" />
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-2 bg-popover text-popover-foreground text-xs rounded shadow-lg hidden group-hover:block border border-border z-10">
                                                Use blended rate - typical PM/Developer/Manager hourly rate. UK: £50-100, US: $50-150
                                            </div>
                                        </div>
                                    </label>
                                    <div className="relative">
                                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <input
                                            type="number"
                                            min="10"
                                            max="1000"
                                            value={hourlyRate}
                                            onChange={(e) => setHourlyRate(Math.max(0, parseInt(e.target.value) || 0))}
                                            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Currency</label>
                                        <select
                                            value={currency}
                                            onChange={(e) => setCurrency(e.target.value)}
                                            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                        >
                                            {currencies.map(c => (
                                                <option key={c.code} value={c.code}>{c.code} ({c.symbol})</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Frequency *</label>
                                        <select
                                            value={frequency}
                                            onChange={(e) => setFrequency(e.target.value)}
                                            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                        >
                                            <option value="one-time">One-time</option>
                                            <option value="daily">Daily (5/week)</option>
                                            <option value="weekly">Weekly</option>
                                            <option value="bi-weekly">Bi-weekly</option>
                                            <option value="monthly">Monthly</option>
                                        </select>
                                    </div>
                                </div>

                                <button className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                                    Calculate Meeting Cost
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Results */}
                    <div className="lg:col-span-7 space-y-8">

                        {/* Hero Result */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-card border border-border rounded-2xl p-8 text-center shadow-lg relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
                            <h3 className="text-muted-foreground font-medium mb-2">Total Meeting Cost</h3>
                            <div className="text-6xl font-bold text-foreground mb-4 tracking-tight">
                                {formatCurrency(results.costPerMeeting)}
                            </div>
                            <p className="text-muted-foreground">
                                {attendees} people × {formatCurrency(hourlyRate)}/hour × {durationMinutes / 60} hours
                            </p>
                        </motion.div>

                        {/* Breakdown Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-card border border-border rounded-xl p-6">
                                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                                    <Users className="w-4 h-4" />
                                    <span className="text-sm font-medium">Per Person</span>
                                </div>
                                <div className="text-2xl font-bold">{formatCurrency(results.costPerPerson)}</div>
                            </div>
                            <div className="bg-card border border-border rounded-xl p-6">
                                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-sm font-medium">Per Minute</span>
                                </div>
                                <div className="text-2xl font-bold">{formatCurrency(results.costPerMinute)}</div>
                            </div>
                            <div className="bg-card border border-border rounded-xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-2 opacity-10">
                                    <Calendar className="w-12 h-12" />
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                                    <Calendar className="w-4 h-4" />
                                    <span className="text-sm font-medium">Annual Cost</span>
                                </div>
                                <div className="text-2xl font-bold text-primary">{formatCurrency(results.annualCost)}</div>
                                <div className="text-xs text-muted-foreground mt-1">If recurring {frequency}</div>
                            </div>
                        </div>

                        {/* Efficiency Analysis */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                                Efficiency Analysis
                            </h3>
                            {getWarnings().length > 0 ? (
                                getWarnings().map((warning, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`p - 4 rounded - lg border ${warning.color} `}
                                    >
                                        <h4 className="font-bold flex items-center gap-2">
                                            {warning.type === 'high-cost' && <AlertTriangle className="w-4 h-4" />}
                                            {warning.title}
                                        </h4>
                                        <p className="text-sm mt-1 opacity-90">{warning.message}</p>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="p-4 rounded-lg bg-primary/10 border border-primary/50 text-primary flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5" />
                                    <div>
                                        <h4 className="font-bold">Efficient Meeting Structure</h4>
                                        <p className="text-sm opacity-90">This meeting falls within recommended cost and size parameters.</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Optimization Opportunities */}
                        <div>
                            <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                                <TrendingDown className="w-5 h-5 text-primary" />
                                Cost Reduction Opportunities
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-card border border-border rounded-xl p-5 hover:border-green-500/50 transition-colors">
                                    <div className="text-sm text-muted-foreground mb-2">Reduce Duration by 50%</div>
                                    <div className="text-xl font-bold text-primary mb-1">{formatCurrency(results.savingsDuration)}</div>
                                    <div className="text-xs text-muted-foreground">Annual Savings</div>
                                    <div className="mt-3 pt-3 border-t border-border text-xs">
                                        Try {durationMinutes / 2} mins instead of {durationMinutes}
                                    </div>
                                </div>
                                <div className="bg-card border border-border rounded-xl p-5 hover:border-green-500/50 transition-colors">
                                    <div className="text-sm text-muted-foreground mb-2">Reduce Attendees by 25%</div>
                                    <div className="text-xl font-bold text-primary mb-1">{formatCurrency(results.savingsAttendees)}</div>
                                    <div className="text-xs text-muted-foreground">Annual Savings</div>
                                    <div className="mt-3 pt-3 border-t border-border text-xs">
                                        Try {Math.ceil(attendees * 0.75)} people instead of {attendees}
                                    </div>
                                </div>
                                <div className="bg-card border border-border rounded-xl p-5 hover:border-green-500/50 transition-colors">
                                    <div className="text-sm text-muted-foreground mb-2">Make It Asynchronous</div>
                                    <div className="text-xl font-bold text-primary mb-1">{formatCurrency(results.savingsAsync)}</div>
                                    <div className="text-xs text-muted-foreground">Annual Savings</div>
                                    <div className="mt-3 pt-3 border-t border-border text-xs">
                                        Replace with email/Slack
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* What This Could Fund */}
                        <div className="bg-secondary/30 rounded-2xl p-6 border border-border">
                            <h3 className="text-lg font-bold mb-4">📊 What This Annual Cost Could Buy Instead</h3>
                            <ul className="space-y-3">
                                {getFundingAlternatives().map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4">
                            <button className="flex-1 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                                <Download className="w-5 h-5" />
                                Export Cost Report
                            </button>
                            <button className="flex-1 py-3 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2">
                                <Share2 className="w-5 h-5" />
                                Share Results
                            </button>
                        </div>
                    </div>
                </div>

                {/* Educational Section */}
                <div className="mt-20 bg-secondary/20 rounded-3xl p-8 md:p-12">
                    <h2 className="text-3xl font-bold mb-12 text-center">Why Calculate Meeting Costs?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 text-primary">
                                <TrendingDown className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Better Decision Making</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                When you know a meeting costs $600, you ask: "Is this really necessary?" Most meetings become more focused and productive immediately.
                            </p>
                        </div>
                        <div>
                            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-6 text-accent">
                                <DollarSign className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Executive Buy-In</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                CFOs and directors think in budget terms. Showing that meetings cost $300K annually creates urgency for optimization and better time management.
                            </p>
                        </div>
                        <div>
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 text-primary">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Culture Change</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Teams that know meeting costs naturally become more respectful of time. 5-minute delays become "$50 delays" and punctuality improves.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

