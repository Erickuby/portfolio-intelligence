import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export const Blog: React.FC = () => {
    const articles = [
        {
            id: 1,
            title: "Why Your Risk Register Is Lying to You",
            excerpt: "Most risk logs are write-once, read-never. Here is how to use automation to turn them into active decision tools.",
            category: "METHODOLOGY",
            date: "Oct 12, 2023",
            readTime: "5 min read",
            color: "blue"
        },
        {
            id: 2,
            title: "Building an AI Portfolio Assistant",
            excerpt: "A step-by-step guide to connecting LLMs to your project tracking software to automate status updates.",
            category: "AUTOMATION",
            date: "Oct 05, 2023",
            readTime: "12 min read",
            color: "purple"
        },
        {
            id: 3,
            title: "The 5 Portfolio Metrics That Actually Matter",
            excerpt: "Stop tracking vanity metrics. These are the signals that Senior Executives actually care about.",
            category: "STRATEGY",
            date: "Sep 28, 2023",
            readTime: "7 min read",
            color: "green"
        },
        {
            id: 4,
            title: "From Excel Hell to Automated Paradise: A Migration Guide",
            excerpt: "How to escape the endless cycle of manual spreadsheet updates and build a modern, automated portfolio management system.",
            category: "AUTOMATION",
            date: "Sep 15, 2023",
            readTime: "10 min read",
            color: "purple"
        },
        {
            id: 5,
            title: "The Hidden Cost of Manual Portfolio Reporting",
            excerpt: "Manual reporting isn't just slow—it's expensive. Here's how to calculate the true cost and build a business case for automation.",
            category: "STRATEGY",
            date: "Sep 01, 2023",
            readTime: "5 min read",
            color: "green"
        },
        {
            id: 6,
            title: "Stakeholder Management in Portfolio Delivery: Getting Executive Buy-In",
            excerpt: "The best portfolio strategy fails without executive support. Here's how to communicate value, manage expectations, and maintain...",
            category: "STRATEGY",
            date: "Aug 18, 2023",
            readTime: "8 min read",
            color: "green"
        },
        {
            id: 7,
            title: "Data Quality: The Foundation of Portfolio Intelligence",
            excerpt: "Garbage in, garbage out. How to establish data quality standards that make your portfolio insights actually trustworthy.",
            category: "METHODOLOGY",
            date: "Aug 05, 2023",
            readTime: "15 min read",
            color: "blue"
        },
        {
            id: 8,
            title: "Scaling Agile Across Enterprise Portfolios",
            excerpt: "Agile works great for single teams. But how do you scale it across 50 projects without losing the benefits? Here's the playbook.",
            category: "METHODOLOGY",
            date: "Jul 22, 2023",
            readTime: "10 min read",
            color: "blue"
        },
        {
            id: 9,
            title: "The ROI of Portfolio Automation: Calculating and Proving Value",
            excerpt: "Your CFO wants numbers, not promises. Here's how to build a bulletproof business case for portfolio automation.",
            category: "AUTOMATION",
            date: "Jul 08, 2023",
            readTime: "3 min read",
            color: "purple"
        },
        {
            id: 10,
            title: "Building a Portfolio Management Center of Excellence",
            excerpt: "How to structure, staff, and scale a Portfolio Management Office that actually adds value instead of bureaucracy.",
            category: "STRATEGY",
            date: "Jun 24, 2023",
            readTime: "12 min read",
            color: "green"
        },
        {
            id: 11,
            title: "Mastering Dependency Management in Complex Portfolios",
            excerpt: "Dependencies are the silent killer of portfolio agility. Learn how to visualize, measure, and manage cross-project dependencies at...",
            category: "METHODOLOGY",
            date: "Jun 10, 2023",
            readTime: "15 min read",
            color: "blue"
        },
        {
            id: 12,
            title: "Enterprise Risk Management: From Reactive to Predictive",
            excerpt: "Stop chasing risks after they materialize. Learn how to build a predictive risk management system that identifies and mitigates portfolio...",
            category: "METHODOLOGY",
            date: "May 27, 2023",
            readTime: "14 min read",
            color: "blue"
        }
    ];

    const getCategoryColor = (color: string) => {
        switch (color) {
            case 'blue': return 'bg-blue-900/30 text-blue-400 border-blue-800';
            case 'purple': return 'bg-purple-900/30 text-purple-400 border-purple-800';
            case 'green': return 'bg-emerald-900/30 text-emerald-400 border-emerald-800';
            default: return 'bg-slate-800 text-slate-400 border-slate-700';
        }
    };

    return (
        <div className="bg-[#0B1120] min-h-screen pt-20">
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold text-white mb-4"
                        >
                            Latest Insights
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-slate-400"
                        >
                            Strategies, frameworks, and code. Real-world insights from enterprise portfolio management and automation.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articles.map((article, index) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors group"
                            >
                                <div className="mb-4">
                                    <span className={cn(
                                        "text-[10px] font-bold px-2 py-1 rounded border uppercase tracking-wider",
                                        getCategoryColor(article.color)
                                    )}>
                                        {article.category}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    <Link to={`/blog/${article.id}`}>{article.title}</Link>
                                </h3>

                                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                                    {article.excerpt}
                                </p>

                                <div className="flex items-center justify-between text-xs text-slate-500">
                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" /> {article.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" /> {article.readTime}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-4 pt-4 border-t border-slate-800">
                                    <Link to={`/blog/${article.id}`} className="text-blue-400 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                                        Read more <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
