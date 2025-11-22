import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    CheckCircle2, Shield, Zap, Target, TrendingUp, Users,
    Database, GitBranch, BarChart3, Lock, ArrowRight, Workflow
} from 'lucide-react';

export const Methodology: React.FC = () => {
    const methodologies = [
        {
            icon: Database,
            title: "Golden Standard Methodology",
            subtitle: "Perfect Data Quality",
            description: "Our proprietary framework ensures portfolio data is accurate, consistent, and trustworthy across all systems.",
            features: [
                "Automated data validation and cleansing",
                "Single source of truth for all portfolio metrics",
                "Real-time data quality monitoring",
                "Standardized data models across projects",
                "Audit trails for all data changes"
            ],
            benefits: [
                "95% reduction in data quality issues",
                "Eliminate conflicting reports",
                "Build stakeholder confidence in metrics",
                "Enable data-driven decision making"
            ]
        },
        {
            icon: Shield,
            title: "Automated RAID Management",
            subtitle: "Proactive Risk Mitigation",
            description: "Scale your risk, assumption, issue, and dependency tracking with intelligent automation and predictive analytics.",
            features: [
                "AI-powered risk prediction and scoring",
                "Automated dependency mapping across portfolios",
                "Real-time issue escalation workflows",
                "Cross-portfolio risk aggregation",
                "Monte Carlo simulation for planning"
            ],
            benefits: [
                "Identify risks before they become issues",
                "Reduce manual RAID tracking by 80%",
                "Improve risk response time by 60%",
                "Better visibility into portfolio dependencies"
            ]
        },
        {
            icon: Workflow,
            title: "Enterprise-Grade Workflows",
            subtitle: "Security & Compliance Built-In",
            description: "Workflows designed for regulated environments with security, audit trails, and governance at their core.",
            features: [
                "Role-based access control (RBAC)",
                "Complete audit logging for compliance",
                "Approval workflows for critical changes",
                "Data encryption at rest and in transit",
                "SOC 2 and ISO 27001 aligned processes"
            ],
            benefits: [
                "Meet regulatory compliance requirements",
                "Reduce security risks",
                "Streamline governance processes",
                "Maintain complete audit trails"
            ]
        },
        {
            icon: Users,
            title: "Human-in-the-Loop Governance",
            subtitle: "AI Augments, Humans Decide",
            description: "AI handles the heavy lifting, but critical decisions remain with experienced portfolio leaders.",
            features: [
                "AI-powered insights and recommendations",
                "Human approval for strategic decisions",
                "Explainable AI for transparency",
                "Customizable automation boundaries",
                "Override capabilities for edge cases"
            ],
            benefits: [
                "Maintain strategic control",
                "Leverage AI without losing oversight",
                "Build trust in automated systems",
                "Balance efficiency with governance"
            ]
        }
    ];

    const implementationProcess = [
        {
            phase: "1. Discovery & Assessment",
            duration: "2-4 weeks",
            activities: [
                "Current state analysis of portfolio processes",
                "Data quality assessment",
                "Tool and system inventory",
                "Stakeholder interviews",
                "Gap analysis and recommendations"
            ]
        },
        {
            phase: "2. Framework Design",
            duration: "3-6 weeks",
            activities: [
                "Customize Golden Standard for your data",
                "Design RAID automation workflows",
                "Configure governance models",
                "Define security and compliance requirements",
                "Create implementation roadmap"
            ]
        },
        {
            phase: "3. Implementation & Integration",
            duration: "8-12 weeks",
            activities: [
                "Deploy data quality framework",
                "Implement automated RAID tracking",
                "Integrate with existing tools (Jira, ServiceNow, etc.)",
                "Build custom dashboards and reports",
                "Configure automation workflows"
            ]
        },
        {
            phase: "4. Training & Enablement",
            duration: "4-6 weeks",
            activities: [
                "Train portfolio managers and PMO teams",
                "Create documentation and playbooks",
                "Conduct hands-on workshops",
                "Establish support processes",
                "Build internal champions"
            ]
        },
        {
            phase: "5. Optimization & Scale",
            duration: "Ongoing",
            activities: [
                "Monitor adoption and usage metrics",
                "Gather feedback and iterate",
                "Expand to additional portfolios",
                "Continuous improvement cycles",
                "Advanced automation opportunities"
            ]
        }
    ];

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
                        BATTLE-TESTED FRAMEWORKS
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                        Our <span className="text-primary">Methodology</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                        We don't just teach theory. We implement battle-tested frameworks that have saved
                        thousands of hours in large-scale organizations.
                    </p>
                </motion.div>

                {/* Core Methodologies */}
                <div className="space-y-16 mb-20">
                    {methodologies.map((method, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-card border border-border rounded-2xl overflow-hidden"
                        >
                            <div className="p-8 md:p-12">
                                <div className="flex items-start gap-6 mb-8">
                                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <method.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-foreground mb-2">{method.title}</h2>
                                        <p className="text-primary font-semibold mb-4">{method.subtitle}</p>
                                        <p className="text-muted-foreground text-lg">{method.description}</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Features */}
                                    <div>
                                        <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">
                                            Key Features
                                        </h3>
                                        <ul className="space-y-3">
                                            {method.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                    <span className="text-muted-foreground">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Benefits */}
                                    <div>
                                        <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">
                                            Business Benefits
                                        </h3>
                                        <ul className="space-y-3">
                                            {method.benefits.map((benefit, bIdx) => (
                                                <li key={bIdx} className="flex items-start gap-3">
                                                    <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                    <span className="text-muted-foreground">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Implementation Process */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Implementation Process</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Our proven 5-phase approach ensures successful adoption and measurable results
                        </p>
                    </div>

                    <div className="space-y-6">
                        {implementationProcess.map((phase, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-lg shrink-0">
                                        {idx + 1}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-xl font-bold text-foreground">{phase.phase}</h3>
                                            <span className="text-sm text-muted-foreground">{phase.duration}</span>
                                        </div>
                                        <ul className="grid md:grid-cols-2 gap-2">
                                            {phase.activities.map((activity, aIdx) => (
                                                <li key={aIdx} className="flex items-start gap-2 text-muted-foreground text-sm">
                                                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                                    <span>{activity}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Results Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-12 mb-20"
                >
                    <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Proven Results</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { value: "95%", label: "Reduction in data quality issues" },
                            { value: "80%", label: "Less time on manual RAID tracking" },
                            { value: "60%", label: "Faster risk response time" },
                            { value: "15hrs", label: "Saved per week per PM" }
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Portfolio Management?</h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                        Let's discuss how our methodologies can be customized for your organization
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact?service=discovery"
                            className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl transition-all shadow-lg hover:shadow-primary/25 active:scale-95 inline-flex items-center justify-center gap-2"
                        >
                            Book Discovery Call
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/course-syllabus"
                            className="px-8 py-4 bg-card hover:bg-muted text-foreground font-bold rounded-xl border border-border transition-all inline-flex items-center justify-center"
                        >
                            View Course Syllabus
                        </Link>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};
