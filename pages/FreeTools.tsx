import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Calculator,
    TrendingUp,
    AlertTriangle,
    DollarSign,
    Users,
    Lock,
    ShieldCheck,
    Zap,
    Code,
    Github,
    Bell,
    Search,
    ChevronDown
} from 'lucide-react';

export const FreeTools: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedComplexity, setSelectedComplexity] = useState('All');
    const [showAIOnly, setShowAIOnly] = useState(false);

    const tools = [
        {
            id: 'monte-carlo',
            repoName: 'portfolio-monte-carlo',
            icon: <Calculator className="w-8 h-8" />,
            title: 'Monte Carlo Simulation',
            description: 'Probabilistic project estimation with confidence intervals',
            whatItDoes: [
                'Runs 10,000+ simulations of your estimates',
                'Provides confidence-based completion dates',
                'Eliminates single-point estimate risks'
            ],
            useWhen: 'You need to give realistic timelines with confidence levels',
            category: 'Estimation',
            complexity: 'Beginner',
            monthlyUses: 500,
            githubStars: 12,
            isPopular: true
        },
        {
            id: 'budget-burn-rate',
            repoName: 'portfolio-burn-rate',
            icon: <TrendingUp className="w-8 h-8" />,
            title: 'Budget Burn Rate Analyzer',
            description: 'Predict budget overruns before they happen',
            whatItDoes: [
                'Calculates current vs. planned burn rate',
                'Projects final spend based on trends',
                'Alerts when variance exceeds threshold',
                'Recommends corrective actions'
            ],
            useWhen: 'You need to monitor budget health proactively',
            category: 'Budget',
            complexity: 'Beginner',
            monthlyUses: 280
        },
        {
            id: 'risk-matrix',
            repoName: 'portfolio-risk-matrix',
            icon: <AlertTriangle className="w-8 h-8" />,
            title: 'Risk Prioritization Matrix',
            description: 'Interactive drag-and-drop risk scoring',
            whatItDoes: [
                'Plot risks on impact × probability matrix',
                'Visual heat map showing risk severity',
                'Drag risks to reposition as situation changes',
                'Export prioritized risk register'
            ],
            useWhen: 'You need to prioritize competing risks visually',
            category: 'Risk',
            complexity: 'Intermediate',
            monthlyUses: 210
        },
        {
            id: 'evm-calculator',
            repoName: 'portfolio-evm-calculator',
            icon: <DollarSign className="w-8 h-8" />,
            title: 'EVM Calculator',
            description: 'Calculate CPI, SPI, EAC, and forecasts',
            whatItDoes: [
                'Input PV, EV, AC, BAC',
                'Calculate all EVM metrics automatically',
                'Forecast project completion scenarios',
                'Visual trend analysis'
            ],
            useWhen: 'You need earned value management insights',
            category: 'Budget',
            complexity: 'Intermediate',
            monthlyUses: 150
        },
        {
            id: 'three-point-estimator',
            repoName: 'portfolio-pert-estimator',
            icon: <Calculator className="w-8 h-8" />,
            title: 'Three-Point Estimator (PERT)',
            description: 'Batch estimation for multiple tasks',
            whatItDoes: [
                'Multiple task input with ease',
                'PERT formula calculations',
                'Aggregated project estimate',
                'Export estimation table'
            ],
            useWhen: 'You need to estimate multiple tasks quickly',
            category: 'Estimation',
            complexity: 'Beginner',
            monthlyUses: 180
        },
        {
            id: 'meeting-cost-calculator',
            repoName: 'meeting-cost-calculator',
            icon: <DollarSign className="w-8 h-8 text-primary" />,
            title: 'Meeting Cost Calculator',
            description: 'Calculate the true financial impact of meetings',
            whatItDoes: [
                'Calculates true cost (people × time × rate)',
                'Projects annual cost for recurring meetings',
                'Recommends optimization strategies',
                'Exposes hidden organizational expenses'
            ],
            useWhen: 'Before scheduling any meeting with 3+ people',
            category: 'Productivity',
            complexity: 'Beginner',
            monthlyUses: 350,
            githubStars: 0
        }
    ];

    const filteredTools = tools.filter(tool => {
        const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tool.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
        const matchesComplexity = selectedComplexity === 'All' || tool.complexity === selectedComplexity;
        return matchesSearch && matchesCategory && matchesComplexity;
    });

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-5xl font-display font-bold text-foreground mb-4">
                            Free Portfolio Management Tools
                        </h1>
                        <p className="text-xl text-muted-foreground mb-4">
                            Built for Real PMs, By Real PMs
                        </p>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Production-ready calculators, analyzers, and AI-powered assistants that eliminate manual work.
                            No signup required. No credit card. No data stored. Just results.
                        </p>
                    </motion.div>

                    {/* Stats Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
                    >
                        <div className="bg-card p-6 rounded-xl border border-border text-center">
                            <Calculator className="w-8 h-8 text-primary mx-auto mb-2" />
                            <div className="text-2xl font-bold text-foreground">5</div>
                            <div className="text-sm text-muted-foreground">Tools Available</div>
                        </div>
                        <div className="bg-card p-6 rounded-xl border border-border text-center">
                            <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                            <div className="text-2xl font-bold text-foreground">1,200+</div>
                            <div className="text-sm text-muted-foreground">Monthly Users</div>
                        </div>
                        <div className="bg-card p-6 rounded-xl border border-border text-center">
                            <Github className="w-8 h-8 text-primary mx-auto mb-2" />
                            <div className="text-2xl font-bold text-foreground">100%</div>
                            <div className="text-sm text-muted-foreground">Open Source</div>
                        </div>
                        <div className="bg-card p-6 rounded-xl border border-border text-center">
                            <Lock className="w-8 h-8 text-primary mx-auto mb-2" />
                            <div className="text-2xl font-bold text-foreground">Forever</div>
                            <div className="text-sm text-muted-foreground">Free</div>
                        </div>
                    </motion.div>

                    {/* Value Propositions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        <div className="bg-card p-6 rounded-xl border border-border">
                            <Lock className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-lg font-bold text-foreground mb-2">Privacy First</h3>
                            <p className="text-muted-foreground">
                                All calculations happen in your browser or secure API. We never store your project data.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border border-border">
                            <Zap className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-lg font-bold text-foreground mb-2">Instant Results</h3>
                            <p className="text-muted-foreground">
                                No loading screens. No waiting. Enter data → Get results → Export → Done.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border border-border">
                            <Code className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-lg font-bold text-foreground mb-2">Fully Transparent</h3>
                            <p className="text-muted-foreground">
                                Every tool is open-source. View the code, understand the logic, modify as needed.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Tools Catalog */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-foreground mb-4">Complete Tools Library</h2>
                        <p className="text-lg text-muted-foreground">Choose the tool that solves your immediate problem</p>
                    </div>

                    {/* Filter Bar */}
                    <div className="bg-card p-6 rounded-xl border border-border mb-8 space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <input
                                        type="text"
                                        placeholder="Search tools..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option>All</option>
                                <option>Estimation</option>
                                <option>Budget</option>
                                <option>Risk</option>
                                <option>Productivity</option>
                            </select>
                            <select
                                value={selectedComplexity}
                                onChange={(e) => setSelectedComplexity(e.target.value)}
                                className="px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option>All</option>
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                            </select>
                        </div>
                    </div>

                    {/* Tools Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredTools.map((tool, index) => (
                            <motion.div
                                key={tool.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="text-primary">{tool.icon}</div>
                                    {tool.isPopular && (
                                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-600 text-xs font-bold rounded-full">
                                            Most Popular
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2">{tool.title}</h3>
                                <p className="text-muted-foreground mb-4">{tool.description}</p>

                                <div className="mb-4">
                                    <p className="text-sm font-semibold text-foreground mb-2">What it does:</p>
                                    <ul className="space-y-1">
                                        {tool.whatItDoes.map((item, idx) => (
                                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                                <span className="text-primary mt-1">→</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <p className="text-sm text-muted-foreground mb-4">
                                    <span className="font-semibold text-foreground">Use when:</span> {tool.useWhen}
                                </p>

                                <div className="flex items-center gap-2 mb-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${tool.complexity === 'Beginner' ? 'bg-primary/20 text-primary' :
                                        tool.complexity === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-600' :
                                            'bg-red-500/20 text-red-600'
                                        }`}>
                                        {tool.complexity}
                                    </span>
                                    {tool.monthlyUses && (
                                        <span className="text-xs text-muted-foreground">{tool.monthlyUses}+ monthly uses</span>
                                    )}
                                </div>

                                <div className="flex gap-2">
                                    <Link
                                        to={`/tools/${tool.id}`}
                                        className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-center font-semibold"
                                    >
                                        Use Tool
                                    </Link>
                                    {tool.githubStars !== undefined && (
                                        <a
                                            href={`https://github.com/Erickuby/${tool.repoName}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 border border-border rounded-lg hover:bg-secondary/50 transition-colors flex items-center gap-2"
                                        >
                                            <Github className="w-4 h-4" />
                                            <span className="text-sm">★ {tool.githubStars}</span>
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-secondary/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-foreground mb-4">How Our Tools Work</h2>
                        <p className="text-lg text-muted-foreground">Designed for speed, privacy, and transparency</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                1
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">Choose Your Tool</h3>
                            <p className="text-muted-foreground">
                                Browse the catalog and select the tool that matches your need
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                2
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">Input Your Data</h3>
                            <p className="text-muted-foreground mb-2">
                                Enter your project data: estimates, budgets, risks, or upload CSV
                            </p>
                            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                                <Lock className="w-4 h-4" />
                                All calculations client-side or via encrypted API
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                3
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">Get Instant Results</h3>
                            <p className="text-muted-foreground">
                                View visualizations, download reports, share with stakeholders
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Privacy & Security */}
            <section className="py-20 bg-secondary/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-foreground mb-4">Privacy & Security First</h2>
                        <p className="text-lg text-muted-foreground">Your data stays yours. Period.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-card p-6 rounded-xl border border-border">
                            <Lock className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-lg font-bold text-foreground mb-2">Client-Side Processing</h3>
                            <p className="text-muted-foreground">
                                All calculations happen in your browser. We never see your project data, estimates, budgets, or risks.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border border-border">
                            <ShieldCheck className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-lg font-bold text-foreground mb-2">No Account Required</h3>
                            <p className="text-muted-foreground">
                                No signup, no login, no password. Just open the tool and start working. Leave anytime.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border border-border">
                            <Code className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-lg font-bold text-foreground mb-2">100% Open Source</h3>
                            <p className="text-muted-foreground">
                                Every tool is MIT licensed. Fork, modify, audit the code. No black boxes, no hidden logic.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Impact */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-foreground mb-4">Built for the Community</h2>
                        <p className="text-lg text-muted-foreground">Helping PMs worldwide save time and make better decisions</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        <div className="bg-card p-6 rounded-xl border border-border text-center">
                            <div className="text-4xl font-bold text-primary mb-2">1,200+</div>
                            <div className="text-sm text-muted-foreground">Monthly Active Users</div>
                        </div>
                        <div className="bg-card p-6 rounded-xl border border-border text-center">
                            <div className="text-4xl font-bold text-primary mb-2">8,500+</div>
                            <div className="text-sm text-muted-foreground">Calculations Run</div>
                        </div>
                        <div className="bg-card p-6 rounded-xl border border-border text-center">
                            <div className="text-4xl font-bold text-primary mb-2">350+</div>
                            <div className="text-sm text-muted-foreground">Hours Saved</div>
                        </div>
                        <div className="bg-card p-6 rounded-xl border border-border text-center">
                            <div className="text-4xl font-bold text-primary mb-2">15+</div>
                            <div className="text-sm text-muted-foreground">GitHub Contributors</div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-2xl border border-border">
                        <h3 className="text-xl font-bold text-foreground mb-6">What PMs Are Saying</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-4 bg-background rounded-lg">
                                <p className="text-muted-foreground mb-4">
                                    "The Monte Carlo simulator helped me give my exec team realistic timelines with confidence levels. Game changer."
                                </p>
                                <p className="text-sm text-foreground font-semibold">— Sarah M., Senior PM at Tech Startup</p>
                            </div>
                            <div className="p-4 bg-background rounded-lg">
                                <p className="text-muted-foreground mb-4">
                                    "Finally, EVM calculations that don't require a PhD to understand. The explanations are perfect."
                                </p>
                                <p className="text-sm text-foreground font-semibold">— James K., Portfolio Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Developer Resources */}
            <section className="py-20 bg-secondary/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-foreground mb-4">Developer Resources</h2>
                        <p className="text-lg text-muted-foreground">Build on top of our tools or contribute improvements</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-card p-8 rounded-xl border border-border">
                            <Github className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-xl font-bold text-foreground mb-2">GitHub Repositories</h3>
                            <p className="text-muted-foreground mb-4">
                                Each tool has its own repo with full documentation, tests, and contribution guidelines.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Code className="w-4 h-4 text-primary" />
                                    <span>MIT License - Use freely</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Code className="w-4 h-4 text-primary" />
                                    <span>TypeScript + React</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Code className="w-4 h-4 text-primary" />
                                    <span>Pull requests welcome</span>
                                </li>
                            </ul>
                            <a
                                href="https://github.com/Erickuby"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                            >
                                View on GitHub
                            </a>
                        </div>

                        <div className="bg-card p-8 rounded-xl border border-border">
                            <Code className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-xl font-bold text-foreground mb-2">Technical Documentation</h3>
                            <p className="text-muted-foreground mb-4">
                                Understand the algorithms, formulas, and implementation details behind each tool.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <DollarSign className="w-4 h-4 text-primary" />
                                    <span>Algorithm explanations</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <DollarSign className="w-4 h-4 text-primary" />
                                    <span>Formula breakdowns</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <DollarSign className="w-4 h-4 text-primary" />
                                    <span>API documentation</span>
                                </li>
                            </ul>
                            <Link
                                to="/blog"
                                className="inline-flex px-6 py-3 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors font-semibold"
                            >
                                Read Technical Docs
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-4">
                        <details className="bg-card p-6 rounded-xl border border-border group">
                            <summary className="cursor-pointer font-semibold text-foreground text-lg list-none flex items-center justify-between">
                                Are these tools really free forever?
                                <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="mt-4 text-muted-foreground">
                                Yes. All tools are 100% free with no hidden fees, no premium tiers, and no usage limits.
                                We're committed to keeping PM tools accessible to everyone.
                            </p>
                        </details>

                        <details className="bg-card p-6 rounded-xl border border-border group">
                            <summary className="cursor-pointer font-semibold text-foreground text-lg list-none flex items-center justify-between">
                                Do I need to create an account?
                                <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="mt-4 text-muted-foreground">
                                No. All tools work without signup. Just click, use, and export your results.
                                Your data never leaves your browser.
                            </p>
                        </details>

                        <details className="bg-card p-6 rounded-xl border border-border group">
                            <summary className="cursor-pointer font-semibold text-foreground text-lg list-none flex items-center justify-between">
                                Can I use these for commercial projects?
                                <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="mt-4 text-muted-foreground">
                                Absolutely. All tools are MIT licensed, meaning you can use them for any purpose—personal,
                                commercial, or enterprise—without attribution required.
                            </p>
                        </details>

                        <details className="bg-card p-6 rounded-xl border border-border group">
                            <summary className="cursor-pointer font-semibold text-foreground text-lg list-none flex items-center justify-between">
                                How accurate are the calculations?
                                <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="mt-4 text-muted-foreground">
                                We use industry-standard formulas (PERT, EVM, statistical methods) validated against PMI guidelines.
                                All code is open source for you to audit.
                            </p>
                        </details>

                        <details className="bg-card p-6 rounded-xl border border-border group">
                            <summary className="cursor-pointer font-semibold text-foreground text-lg list-none flex items-center justify-between">
                                Can I contribute or suggest features?
                                <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="mt-4 text-muted-foreground">
                                Yes! We welcome GitHub pull requests, feature suggestions via Issues, and community contributions.
                                Check our GitHub org for contribution guidelines.
                            </p>
                        </details>

                        <details className="bg-card p-6 rounded-xl border border-border group">
                            <summary className="cursor-pointer font-semibold text-foreground text-lg list-none flex items-center justify-between">
                                Do you track my data or usage?
                                <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="mt-4 text-muted-foreground">
                                We use privacy-first Plausible Analytics to track basic page views (not personal data).
                                No cookies, no cross-site tracking, and we never see your project data.
                            </p>
                        </details>
                    </div>
                </div>
            </section>

            {/* Roadmap */}
            <section className="py-20 bg-secondary/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-foreground mb-4">Roadmap</h2>
                        <p className="text-lg text-muted-foreground">What's coming next</p>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-border h-full hidden md:block"></div>

                        <div className="space-y-12">
                            {/* Q4 2025 */}
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-1 md:text-right">
                                    <div className="bg-card p-6 rounded-xl border border-border">
                                        <div className="text-sm font-bold text-primary mb-2">Q4 2025 ✅</div>
                                        <h3 className="text-lg font-bold text-foreground mb-2">Core Tools Launch</h3>
                                        <p className="text-muted-foreground">Monte Carlo, Budget Analyzer, EVM, PERT, Risk Matrix</p>
                                    </div>
                                </div>
                                <div className="w-8 h-8 bg-primary rounded-full shrink-0 border-4 border-background z-10"></div>
                                <div className="flex-1"></div>
                            </div>

                            {/* Q1 2026 */}
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-1"></div>
                                <div className="w-8 h-8 bg-primary rounded-full shrink-0 border-4 border-background z-10"></div>
                                <div className="flex-1">
                                    <div className="bg-card p-6 rounded-xl border border-border">
                                        <div className="text-sm font-bold text-yellow-500 mb-2">Q1 2026 🚧</div>
                                        <h3 className="text-lg font-bold text-foreground mb-2">AI-Powered Tools</h3>
                                        <p className="text-muted-foreground">Risk prediction, automated status reports, smart scheduling</p>
                                    </div>
                                </div>
                            </div>

                            {/* Q2 2026 */}
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-1 md:text-right">
                                    <div className="bg-card p-6 rounded-xl border border-border">
                                        <div className="text-sm font-bold text-muted-foreground mb-2">Q2 2026</div>
                                        <h3 className="text-lg font-bold text-foreground mb-2">Collaboration Features</h3>
                                        <p className="text-muted-foreground">Share results, team workspaces, export to JIRA/Azure</p>
                                    </div>
                                </div>
                                <div className="w-8 h-8 bg-border rounded-full shrink-0 border-4 border-background z-10"></div>
                                <div className="flex-1"></div>
                            </div>

                            {/* Q3 2026 */}
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-1"></div>
                                <div className="w-8 h-8 bg-border rounded-full shrink-0 border-4 border-background z-10"></div>
                                <div className="flex-1">
                                    <div className="bg-card p-6 rounded-xl border border-border">
                                        <div className="text-sm font-bold text-muted-foreground mb-2">Q3 2026</div>
                                        <h3 className="text-lg font-bold text-foreground mb-2">Mobile App</h3>
                                        <p className="text-muted-foreground">iOS and Android native apps for on-the-go analysis</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-muted-foreground mb-4">Have a feature request?</p>
                        <a
                            href="https://github.com/Erickuby"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                        >
                            Suggest a Feature
                        </a>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Eliminate Manual PM Work?</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-card p-8 rounded-xl border border-border text-center">
                            <Calculator className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-foreground mb-2">Use the Tools</h3>
                            <p className="text-muted-foreground mb-6">
                                Start with our most popular tool
                            </p>
                            <Link
                                to="/tools/monte-carlo"
                                className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                            >
                                Try Monte Carlo Simulator
                            </Link>
                        </div>
                        <div className="bg-card p-8 rounded-xl border border-border text-center">
                            <Github className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-foreground mb-2">Explore the Code</h3>
                            <p className="text-muted-foreground mb-6">
                                View source, fork, or contribute
                            </p>
                            <a
                                href="https://github.com/Erickuby"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                            >
                                Browse GitHub Repos
                            </a>
                        </div>
                        <div className="bg-card p-8 rounded-xl border border-border text-center">
                            <Bell className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-foreground mb-2">Get Updates</h3>
                            <p className="text-muted-foreground mb-6">
                                New tools every month
                            </p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">2,000+ subscribers</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
