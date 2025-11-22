import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    BookOpen, Clock, Users, Award, CheckCircle2,
    Target, Brain, TrendingUp, Shield, Zap, ArrowRight
} from 'lucide-react';

export const CourseSyllabus: React.FC = () => {
    const modules = [
        {
            number: 1,
            title: "Portfolio Management Fundamentals",
            duration: "3 weeks",
            lessons: [
                "Introduction to Enterprise Portfolio Management",
                "Portfolio vs. Program vs. Project Management",
                "Strategic Alignment and Value Delivery",
                "Portfolio Governance Frameworks",
                "Stakeholder Management at Scale"
            ],
            objectives: [
                "Understand the role of portfolio management in enterprise strategy",
                "Differentiate between portfolio, program, and project management",
                "Establish governance structures for portfolio oversight"
            ]
        },
        {
            number: 2,
            title: "AI and Automation in Portfolio Management",
            duration: "4 weeks",
            lessons: [
                "AI Fundamentals for Portfolio Managers",
                "Automation Opportunities in Portfolio Workflows",
                "Natural Language Processing for Status Reports",
                "Predictive Analytics for Risk Management",
                "Machine Learning for Resource Optimization",
                "Building AI-Powered Dashboards"
            ],
            objectives: [
                "Identify automation opportunities in portfolio processes",
                "Leverage AI for predictive risk management",
                "Build intelligent dashboards using modern tools"
            ]
        },
        {
            number: 3,
            title: "Data Quality and the Golden Standard",
            duration: "2 weeks",
            lessons: [
                "The Cost of Poor Data Quality",
                "Golden Standard Methodology Overview",
                "Data Validation and Cleansing Techniques",
                "Automated Data Quality Checks",
                "Building Trust in Portfolio Data"
            ],
            objectives: [
                "Implement the Golden Standard framework",
                "Establish automated data quality processes",
                "Build stakeholder confidence in portfolio metrics"
            ]
        },
        {
            number: 4,
            title: "RAID Management at Scale",
            duration: "3 weeks",
            lessons: [
                "Risks, Assumptions, Issues, Dependencies Framework",
                "Predictive Risk Management Techniques",
                "Dependency Mapping and Visualization",
                "Automated RAID Tracking Systems",
                "Cross-Portfolio Risk Aggregation",
                "Monte Carlo Simulation for Portfolio Planning"
            ],
            objectives: [
                "Master enterprise-scale RAID management",
                "Implement predictive risk models",
                "Build automated dependency tracking systems"
            ]
        },
        {
            number: 5,
            title: "Resource and Capacity Management",
            duration: "2 weeks",
            lessons: [
                "Resource Allocation Strategies",
                "Capacity Planning Across Portfolios",
                "Skills Matrix and Competency Mapping",
                "AI-Powered Resource Optimization",
                "Managing Resource Conflicts"
            ],
            objectives: [
                "Optimize resource allocation across portfolios",
                "Implement capacity planning frameworks",
                "Resolve resource conflicts systematically"
            ]
        },
        {
            number: 6,
            title: "Portfolio Reporting and Dashboards",
            duration: "3 weeks",
            lessons: [
                "Executive Dashboard Design Principles",
                "Automated Report Generation",
                "Real-Time Portfolio Metrics",
                "Building Interactive Dashboards",
                "Data Visualization Best Practices",
                "Storytelling with Portfolio Data"
            ],
            objectives: [
                "Design executive-ready dashboards",
                "Automate portfolio reporting workflows",
                "Communicate portfolio status effectively"
            ]
        },
        {
            number: 7,
            title: "Tool Selection and Integration",
            duration: "2 weeks",
            lessons: [
                "Enterprise Portfolio Management Tools Comparison",
                "Integration Patterns and APIs",
                "Building Custom Automation with Power Automate/Zapier",
                "Low-Code/No-Code Solutions",
                "Tool Migration Strategies"
            ],
            objectives: [
                "Evaluate and select appropriate PM tools",
                "Integrate tools into cohesive ecosystems",
                "Build custom automations without coding"
            ]
        },
        {
            number: 8,
            title: "Change Management and Adoption",
            duration: "2 weeks",
            lessons: [
                "Driving Portfolio Transformation",
                "Stakeholder Engagement Strategies",
                "Training and Enablement Programs",
                "Measuring Adoption and Success",
                "Overcoming Resistance to Automation"
            ],
            objectives: [
                "Lead successful portfolio transformations",
                "Drive adoption of new processes and tools",
                "Measure and communicate transformation ROI"
            ]
        },
        {
            number: 9,
            title: "Advanced Topics and Case Studies",
            duration: "3 weeks",
            lessons: [
                "Scaling Agile Across Enterprise Portfolios",
                "Building a Portfolio Management Center of Excellence",
                "Real-World Case Studies from Fortune 500 Companies",
                "Emerging Trends: AI, Blockchain, and Portfolio Management",
                "Capstone Project: Portfolio Automation Strategy"
            ],
            objectives: [
                "Apply learnings to real-world scenarios",
                "Develop a comprehensive automation strategy",
                "Prepare for portfolio leadership roles"
            ]
        }
    ];

    const courseInfo = {
        duration: "24 weeks (6 months)",
        format: "Online, Self-Paced with Live Q&A Sessions",
        level: "Intermediate to Advanced",
        prerequisites: "2+ years in project/program management or portfolio leadership role",
        certification: "AI-Powered Portfolio Management Professional Certificate"
    };

    return (
        <div className="bg-background min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">
                        COMPREHENSIVE TRAINING PROGRAM
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                        AI-Powered Portfolio Management
                        <br />
                        <span className="text-primary">Masterclass</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
                        Transform from traditional portfolio manager to AI-powered portfolio leader.
                        Master automation, predictive analytics, and intelligent workflows that scale across enterprise portfolios.
                    </p>

                    {/* Course Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
                        <div className="bg-card border border-border rounded-xl p-4">
                            <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="text-2xl font-bold text-foreground">{courseInfo.duration}</div>
                            <div className="text-xs text-muted-foreground">Duration</div>
                        </div>
                        <div className="bg-card border border-border rounded-xl p-4">
                            <BookOpen className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="text-2xl font-bold text-foreground">9</div>
                            <div className="text-xs text-muted-foreground">Modules</div>
                        </div>
                        <div className="bg-card border border-border rounded-xl p-4">
                            <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="text-2xl font-bold text-foreground">Live</div>
                            <div className="text-xs text-muted-foreground">Q&A Sessions</div>
                        </div>
                        <div className="bg-card border border-border rounded-xl p-4">
                            <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="text-2xl font-bold text-foreground">Certificate</div>
                            <div className="text-xs text-muted-foreground">Upon Completion</div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <Link
                            to="/contact?service=course"
                            className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl transition-all shadow-lg hover:shadow-primary/25 active:scale-95 inline-flex items-center justify-center gap-2"
                        >
                            Enroll Now
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>

                {/* Course Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-card border border-border rounded-2xl p-8 mb-16"
                >
                    <h2 className="text-2xl font-bold text-foreground mb-6">Course Information</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <div className="text-sm text-muted-foreground mb-1">Format</div>
                            <div className="text-foreground font-medium">{courseInfo.format}</div>
                        </div>
                        <div>
                            <div className="text-sm text-muted-foreground mb-1">Level</div>
                            <div className="text-foreground font-medium">{courseInfo.level}</div>
                        </div>
                        <div>
                            <div className="text-sm text-muted-foreground mb-1">Prerequisites</div>
                            <div className="text-foreground font-medium">{courseInfo.prerequisites}</div>
                        </div>
                        <div>
                            <div className="text-sm text-muted-foreground mb-1">Certification</div>
                            <div className="text-foreground font-medium">{courseInfo.certification}</div>
                        </div>
                    </div>
                </motion.div>

                {/* Learning Outcomes */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What You'll Master</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: Brain, title: "AI & Automation", desc: "Leverage AI for predictive analytics, automated reporting, and intelligent workflows" },
                            { icon: TrendingUp, title: "Strategic Leadership", desc: "Align portfolios with business strategy and drive measurable value" },
                            { icon: Shield, title: "Risk Management", desc: "Implement predictive risk models and proactive mitigation strategies" },
                            { icon: Zap, title: "Process Optimization", desc: "Eliminate manual work and scale portfolio operations efficiently" },
                            { icon: Target, title: "Data-Driven Decisions", desc: "Build dashboards and metrics that inform executive decision-making" },
                            { icon: Users, title: "Stakeholder Management", desc: "Communicate portfolio status and gain executive buy-in effectively" }
                        ].map((outcome, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
                            >
                                <outcome.icon className="w-10 h-10 text-primary mb-4" />
                                <h3 className="text-lg font-bold text-foreground mb-2">{outcome.title}</h3>
                                <p className="text-muted-foreground text-sm">{outcome.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Course Modules */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Course Curriculum</h2>
                    <div className="space-y-6">
                        {modules.map((module, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all"
                            >
                                <div className="p-6 bg-secondary/30 border-b border-border">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-bold text-lg shrink-0">
                                                {module.number}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-foreground mb-2">{module.title}</h3>
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <Clock className="w-4 h-4" />
                                                    {module.duration}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="mb-6">
                                        <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">Lessons</h4>
                                        <ul className="space-y-2">
                                            {module.lessons.map((lesson, lessonIdx) => (
                                                <li key={lessonIdx} className="flex items-start gap-2 text-muted-foreground">
                                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                    <span>{lesson}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">Learning Objectives</h4>
                                        <ul className="space-y-2">
                                            {module.objectives.map((objective, objIdx) => (
                                                <li key={objIdx} className="flex items-start gap-2 text-muted-foreground">
                                                    <Target className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                    <span>{objective}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-12 text-center"
                >
                    <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Portfolio Management?</h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Join 250+ portfolio leaders who have mastered AI-powered portfolio management and are driving measurable business value.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact?service=course"
                            className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl transition-all shadow-lg hover:shadow-primary/25 active:scale-95 inline-flex items-center justify-center gap-2"
                        >
                            Enroll Now
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/contact?service=discovery"
                            className="px-8 py-4 bg-card hover:bg-muted text-foreground font-bold rounded-xl border border-border transition-all inline-flex items-center justify-center"
                        >
                            Book Discovery Call
                        </Link>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};
