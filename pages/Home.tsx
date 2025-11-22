import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { StatsBanner } from '../components/StatsBanner';
import { LATEST_POSTS, CHART_DATA } from '../constants';
import {
  ArrowRight, CheckCircle2, XCircle, Lock, BarChart,
  Database, Shield, Workflow, Users as UsersIcon, TrendingUp,
  Target, Brain, Zap, Code, Github, Download, Globe,
  FileText, Cpu, Cloud, Activity, Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setRole('');
    }, 3000);
  };

  return (
    <>
      <Hero />

      {/* Social Proof Strip */}
      <section className="py-12 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wider"
          >
            Used By Portfolio Teams At
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center items-center gap-8"
          >
            {['Government', 'Healthcare', 'Finance', 'Education', 'Tech'].map((sector, i) => (
              <motion.div
                key={sector}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-6 py-3 bg-card border border-border rounded-lg text-muted-foreground font-medium hover:border-primary/50 hover:text-foreground transition-all"
              >
                {sector}
              </motion.div>
            ))}
          </motion.div>
          <p className="text-center text-xs text-muted-foreground mt-6">
            *Sector badges represent industries using our tools. Names anonymized for privacy.
          </p>
        </div>
      </section>

      {/* Problem Section - Revised */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
            >
              Why 1,200+ Portfolio Managers Switched to{' '}
              <span className="text-primary">Open-Source Automation</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-3xl mx-auto text-lg"
            >
              Traditional portfolio management tools weren't built for the AI era.
              We're fixing that with intelligent, transparent, community-driven solutions.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lock className="w-8 h-8 text-destructive" />,
                title: "Locked in Silos",
                desc: "Manual data chasing between Jira, ServiceNow, and spreadsheets consuming 15+ hours per week"
              },
              {
                icon: <BarChart className="w-8 h-8 text-destructive" />,
                title: "Hidden Costs",
                desc: "£135K+ in avoidable budget overruns due to poor data visibility and delayed risk detection"
              },
              {
                icon: <XCircle className="w-8 h-8 text-destructive" />,
                title: "Closed Systems",
                desc: "Expensive PPM tools that can't adapt to your workflow or integrate with AI-powered decision-making"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border hover:border-destructive/50 transition-all shadow-sm hover:shadow-md"
              >
                <div className="mb-4 p-3 bg-background rounded-lg inline-block shadow-sm">{item.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section - Complete Reframe */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
            >
              The Open-Source Alternative Built by Portfolio Managers,{' '}
              <span className="text-primary">For Portfolio Managers</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-3xl mx-auto text-lg"
            >
              Three core frameworks, all free and open-source, that work together to create enterprise-grade portfolio intelligence
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="w-10 h-10 text-primary" />,
                title: "Golden Standard Framework",
                subtitle: "Data Quality Methodology",
                desc: "The data quality methodology adopted by 200+ organizations to eliminate manual data chasing",
                tech: "Markdown docs, JSON schemas, validation scripts",
                license: "MIT",
                links: [
                  { label: "View Documentation", to: "/methodology" },
                  { label: "Download Templates", to: "/toolkit" }
                ]
              },
              {
                icon: <Workflow className="w-10 h-10 text-primary" />,
                title: "n8n Automation Library",
                subtitle: "Pre-built Intelligent Workflows",
                desc: "Featuring Human-in-the-Loop AI approval, real-time health monitoring, and automated reporting",
                tech: "n8n, GPT-4 API, webhooks",
                license: "MIT",
                links: [
                  { label: "Explore Workflows", to: "/services" },
                  { label: "View GitHub Repo", href: "https://github.com/Erickuby/portfolio-intelligence" }
                ]
              },
              {
                icon: <Activity className="w-10 h-10 text-primary" />,
                title: "Portfolio Health Analyzer",
                subtitle: "Python Analytics Package",
                desc: "Python package for advanced portfolio analytics with Power BI integration and predictive risk modeling",
                tech: "Python, Pandas, Power BI REST API",
                license: "MIT",
                links: [
                  { label: "View Documentation", to: "/toolkit" },
                  { label: "API Reference", to: "/dashboard-demo" }
                ]
              }
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-6 p-4 bg-primary/10 rounded-xl inline-block">{product.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{product.title}</h3>
                <p className="text-primary font-semibold mb-4 text-sm">{product.subtitle}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{product.desc}</p>

                <div className="space-y-3 mb-6">
                  {product.links.map((link, idx) => (
                    link.to ? (
                      <Link
                        key={idx}
                        to={link.to}
                        className="block text-primary hover:text-primary/80 transition-colors text-sm font-medium flex items-center gap-2"
                      >
                        <ArrowRight className="w-4 h-4" />
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-primary hover:text-primary/80 transition-colors text-sm font-medium flex items-center gap-2"
                      >
                        <ArrowRight className="w-4 h-4" />
                        {link.label}
                      </a>
                    )
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-1">Tech Stack:</p>
                  <p className="text-xs font-mono text-foreground mb-3">{product.tech}</p>
                  <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                    <Code className="w-3 h-3" />
                    License: {product.license}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics Section - Replaces Testimonials */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
            >
              Measurable Impact Across the <span className="text-primary">Community</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
            >
              Real results from portfolio managers who've implemented our open-source tools
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: "15,000+", label: "Hours Saved", sublabel: "Estimated annual manual work eliminated" },
              { value: "£2.1M", label: "Cost Savings", sublabel: "Calculated ROI from automation adoption" },
              { value: "85%", label: "Data Quality", sublabel: "Average increase in portfolio completeness" },
              { value: "3 Weeks", label: "Implementation", sublabel: "From download to fully operational" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border text-center hover:border-primary/50 transition-all"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>

          {/* Featured Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border-2 border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <UsersIcon className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-lg text-foreground italic mb-4 leading-relaxed">
                  "After implementing the Golden Standard Framework and n8n automation workflows, our portfolio team
                  reduced weekly reporting time from 18 hours to 3 hours, while improving data accuracy from 67% to 94%."
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-foreground">Portfolio Manager</div>
                    <div className="text-sm text-muted-foreground">UK Government Department</div>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 dark:text-green-400 px-3 py-1.5 rounded-full text-xs font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    Verified Implementation
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Architecture Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
            >
              Built with Modern, <span className="text-primary">Enterprise-Grade Technology</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
            >
              Open-source doesn't mean amateur. Every component is production-ready and scalable.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Tech Stack Diagram */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">Architecture Overview</h3>
              <div className="space-y-4">
                {[
                  { layer: "User Interface", tech: "React • Tailwind CSS • Recharts" },
                  { layer: "Automation", tech: "n8n • Python • Power Automate" },
                  { layer: "AI Intelligence", tech: "Claude API • GPT-4 • Custom ML" },
                  { layer: "Data Integration", tech: "Jira API • ServiceNow • SharePoint" }
                ].map((layer, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-foreground">{layer.layer}</div>
                      <div className="text-xs font-mono text-muted-foreground">{layer.tech}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Feature List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { title: "Human-in-the-Loop AI Workflows", desc: "Intelligent automation with human approval gates for critical decisions" },
                { title: "Real-Time Data Synchronization", desc: "Automated bidirectional sync between Jira, ServiceNow, and reporting systems" },
                { title: "Predictive Risk Analytics", desc: "AI-powered early warning system for budget overruns and delivery delays" },
                { title: "Enterprise-Ready Security", desc: "Role-based access control, audit logging, and compliance-first design" },
                { title: "Fully Extensible", desc: "Clean APIs and webhook architecture for custom integrations" },
                { title: "Self-Hosted or Cloud", desc: "Deploy on your infrastructure or use our hosted service" }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">{feature.title}</div>
                    <div className="text-sm text-muted-foreground">{feature.desc}</div>
                  </div>
                </motion.div>
              ))}

              <div className="flex gap-4 pt-4">
                <Link
                  to="/methodology"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all"
                >
                  <FileText className="w-4 h-4" />
                  View Technical Docs
                </Link>
                <a
                  href="https://github.com/Erickuby/portfolio-intelligence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card hover:bg-muted text-foreground rounded-lg font-semibold border border-border transition-all"
                >
                  <Github className="w-4 h-4" />
                  GitHub Repos
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROI Calculator - Enhanced */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
            >
              Calculate Your Team's <span className="text-primary">Automation ROI</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
            >
              See why 1,200+ portfolio managers have adopted this approach. Based on real implementation data from 200+ teams.
            </motion.p>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mt-4">
              <CheckCircle2 className="w-4 h-4" />
              Based on real data from 200+ teams
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-2xl border border-border shadow-xl"
            >
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground">Reduction in Manual Reporting Effort</h3>
                <p className="text-sm text-muted-foreground">Hours per week per Portfolio Manager</p>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart data={CHART_DATA} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{ backgroundColor: 'hsl(var(--popover))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--popover-foreground))', borderRadius: '8px' }}
                      itemStyle={{ color: 'hsl(var(--popover-foreground))' }}
                      cursor={{ fill: 'hsl(var(--muted))', opacity: 0.4 }}
                    />
                    <Legend wrapperStyle={{ paddingTop: '20px' }} />
                    <Bar dataKey="manual" name="Manual Effort" fill="hsl(var(--destructive))" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="automated" name="After Automation" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-card p-6 rounded-xl border border-border">
                <h4 className="text-lg font-semibold text-foreground mb-4">Quick Calculation</h4>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Manual Hours / Week</label>
                    <input
                      type="number"
                      defaultValue={15}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Team Size</label>
                    <input
                      type="number"
                      defaultValue={5}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Active Projects</label>
                    <input
                      type="number"
                      defaultValue={20}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Estimated Annual Savings</div>
                  <div className="text-3xl font-bold text-primary">£62,100</div>
                  <div className="text-xs text-muted-foreground mt-1">1,035 hours/year saved</div>
                </div>

                <Link
                  to="/toolkit"
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all"
                >
                  Get The Automation Toolkit
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <p className="text-xs text-muted-foreground mt-3">
                  * Calculations based on average £60/hour fully-loaded cost and implementation data from 200+ portfolio teams.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tool Comparison Table */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
            >
              Enterprise-Ready Without <span className="text-primary">Enterprise Costs</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
            >
              Compare our open-source solution to traditional PPM tools
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full bg-card border border-border rounded-xl overflow-hidden">
              <thead className="bg-secondary/50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-primary bg-primary/10">Portfolio Intelligence</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-muted-foreground">Planview</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-muted-foreground">Clarity</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-muted-foreground">Monday.com</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { feature: "Cost", pi: "FREE (Open Source)", others: ["£100+/user/mo", "£80+/user/mo", "£50+/user/mo"] },
                  { feature: "AI Capabilities", pi: "✓ Enabled", others: ["✗ None", "✗ None", "Limited"] },
                  { feature: "Custom Workflows", pi: "✓ Full Control", others: ["Limited", "Limited", "Limited"] },
                  { feature: "Self-Hosted Option", pi: "✓ Yes", others: ["Enterprise only", "Enterprise only", "✗ No"] },
                  { feature: "Open Source", pi: "✓ MIT License", others: ["✗ Closed", "✗ Closed", "✗ Closed"] },
                  { feature: "Setup Time", pi: "3 weeks", others: ["6-12 months", "6-12 months", "2-4 weeks"] }
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-primary bg-primary/5">{row.pi}</td>
                    {row.others.map((val, j) => (
                      <td key={j} className="px-6 py-4 text-center text-sm text-muted-foreground">{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            *Pricing as of November 2025. All competitors offer feature-gated tiers with additional costs.
            Our solution is 100% free with no hidden fees. Ever.
          </p>

          <div className="text-center mt-8">
            <Link
              to="/tools"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all"
            >
              See Full Comparison
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Insights - Enhanced */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-2">Latest from the <span className="text-primary">Community</span></h2>
              <p className="text-muted-foreground">Strategies, frameworks, and code from portfolio management leaders</p>
            </div>
            <Link to="/resources" className="text-primary hover:text-foreground transition-colors font-medium flex items-center gap-1 group">
              View all posts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {LATEST_POSTS.slice(0, 3).map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/blog/${post.id}`} className="group block bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider px-3 py-1 bg-primary/10 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{post.readTime}</span>
                      <div className="flex items-center gap-2">
                        {post.hasCode && (
                          <span className="inline-flex items-center gap-1 text-xs text-primary">
                            <Code className="w-3 h-3" />
                            Code
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Redesigned */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
            >
              Join 1,200+ Portfolio Managers Using{' '}
              <span className="text-primary">Open-Source Automation</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left Column - Toolkit Contents */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-card p-8 rounded-2xl border border-border"
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">Get The Complete Toolkit (FREE)</h3>
              <p className="text-sm text-muted-foreground mb-6">Downloaded 1,200+ times this month</p>

              <div className="space-y-3">
                {[
                  "10 n8n Workflow Templates (JSON)",
                  "25 GPT-4 Prompts for Portfolio Managers",
                  "Golden Standard Framework Guide (PDF)",
                  "Python Scripts & Power BI Templates",
                  "Implementation Roadmap",
                  "Community Discord Access"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {submitted ? (
                <div className="bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 p-6 rounded-xl">
                  <p className="font-bold text-lg mb-2">Check your inbox!</p>
                  <p className="text-sm">The toolkit is on its way to {email}.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Work Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Role</label>
                    <select
                      required
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Select your role</option>
                      <option value="pm">Project Manager</option>
                      <option value="portfolio">Portfolio Manager</option>
                      <option value="pmo">PMO Lead</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg rounded-xl transition-all shadow-lg hover:shadow-primary/25 active:scale-95"
                  >
                    Send Me The Toolkit →
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    No spam. Unsubscribe anytime. We respect your privacy.
                  </p>
                </form>
              )}

              {/* Trust Indicators */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="w-4 h-4" />
                  <span>Your data is secure and never shared</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Github className="w-4 h-4" />
                  <a href="https://github.com/Erickuby/portfolio-intelligence" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Also available on GitHub - no email required
                  </a>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Eye className="w-4 h-4" />
                  <span>Average open rate: 68% (people actually want our emails!)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
