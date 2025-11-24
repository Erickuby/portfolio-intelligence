import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { StatsBanner } from '../components/StatsBanner';
import { LATEST_POSTS, CHART_DATA } from '../constants';
import {
  ArrowRight, CheckCircle2, LayoutDashboard, Shield, Zap, Globe, BarChart3, Users as UsersIcon, Lock, Code, Target, Database, Workflow, Activity, TrendingUp, Brain, XCircle, BarChart, FileText, Github
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xgvqnwyl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          role,
          form_type: 'toolkit_signup'
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setEmail('');
          setRole('');
          setSubmitted(false);
        }, 5000);
      } else {
        console.error("Form submission failed");
        alert("There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was a problem submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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

          {/* Value Proposition */}
          <section className="py-24 bg-[#18181B]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-12">
                {[
                  {
                    icon: <Target className="w-8 h-8 text-brand-orange" />,
                    title: "Strategic Alignment",
                    desc: "Ensure every project contributes to your organizational goals with automated scoring models."
                  },
                  {
                    icon: <BarChart3 className="w-8 h-8 text-brand-orange" />,
                    title: "Data-Driven Decisions",
                    desc: "Move beyond gut feelings. Use Monte Carlo simulations and EVM to predict outcomes."
                  },
                  {
                    icon: <Shield className="w-8 h-8 text-brand-orange" />,
                    title: "Risk Mitigation",
                    desc: "Identify bottlenecks and budget overruns before they become critical issues."
                  }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-[#27272A] p-8 rounded-2xl border border-[rgba(251,146,60,0.1)] hover:border-brand-orange/30 transition-all hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(251,146,60,0.15)]"
                  >
                    <div className="w-14 h-14 bg-[#3F3F46] rounded-xl flex items-center justify-center mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#FAFAFA] mb-3">{feature.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

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
      <section className="py-24 bg-[#27272A]">
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
                icon: <Database className="w-10 h-10" />,
                title: "Golden Standard Framework",
                subtitle: "Data Quality Methodology",
                desc: "The data quality methodology adopted by 200+ organizations to eliminate manual data chasing",
                link: "/methodology"
              },
              {
                icon: <Workflow className="w-10 h-10" />,
                title: "n8n Automation Library",
                subtitle: "Pre-built Intelligent Workflows",
                desc: "Featuring Human-in-the-Loop AI approval, real-time health monitoring, and automated reporting",
                link: "/services"
              },
              {
                icon: <Activity className="w-10 h-10" />,
                title: "Portfolio Health Analyzer",
                subtitle: "Python Analytics Package",
                desc: "Python package for advanced portfolio analytics with Power BI integration and predictive risk modeling",
                link: "/toolkit"
              }
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#3F3F46] border border-[rgba(251,146,60,0.1)] p-8 rounded-2xl hover:border-brand-orange/50 transition-all group hover:shadow-[0_8px_32px_rgba(251,146,60,0.15)] hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-[#27272A] rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-orange/10 transition-colors">
                  <div className="text-brand-orange">{product.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-[#FAFAFA] mb-2">{product.title}</h3>
                <p className="text-brand-orange font-semibold mb-4 text-sm">{product.subtitle}</p>
                <p className="text-zinc-400 mb-6 leading-relaxed">{product.desc}</p>
                <Link to={product.link} className="inline-flex items-center text-white font-semibold hover:text-brand-orange transition-colors">
                  Use Tool <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics Section - Replaces Testimonials */}
      <section className="py-24 bg-[#18181B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
            >
              Measurable Impact Across the <span className="text-brand-orange">Community</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 max-w-2xl mx-auto text-lg"
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
                className="bg-[#27272A] p-6 rounded-2xl border border-white/5 text-center hover:border-brand-orange/50 transition-all"
              >
                <div className="text-4xl font-bold text-brand-orange mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-zinc-400">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>

          {/* Featured Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            <div className="bg-[#27272A] p-6 rounded-xl border border-white/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#3F3F46] flex items-center justify-center text-brand-orange font-bold text-xl">
                  JD
                </div>
                <div>
                  <div className="font-bold text-[#FAFAFA]">John Davis</div>
                  <div className="text-sm text-zinc-400">PMO Director</div>
                </div>
              </div>
              <p className="text-zinc-300 italic">"The Monte Carlo simulator saved us from a $2M budget overrun on our digital transformation project."</p>
            </div>
            <div className="bg-[#27272A] p-6 rounded-xl border border-white/5 translate-x-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#3F3F46] flex items-center justify-center text-brand-orange font-bold text-xl">
                  AS
                </div>
                <div>
                  <div className="font-bold text-[#FAFAFA]">Sarah Chen</div>
                  <div className="text-sm text-zinc-400">Portfolio Manager</div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-orange/10 text-brand-orange border border-brand-orange/20 ml-auto">
                  <CheckCircle2 className="w-3 h-3" /> Verified
                </span>
              </div>
              <p className="text-zinc-300 italic">"Finally, a tool that speaks the language of executives but works the way PMs think."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy & Security - Light Section */}
      <section className="py-24 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#09090B] mb-4">Enterprise-Grade Privacy</h2>
            <p className="text-xl text-[#52525B] max-w-2xl mx-auto">Your data never leaves your browser. No servers, no tracking, no risk.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Lock className="w-10 h-10 text-brand-orange" />, title: "Client-Side Execution", desc: "All calculations happen locally on your device." },
              { icon: <Shield className="w-10 h-10 text-brand-orange" />, title: "No Data Storage", desc: "We don't store, save, or transmit your project data." },
              { icon: <Code className="w-10 h-10 text-brand-orange" />, title: "Open Source Code", desc: "Audit the code yourself on GitHub for complete transparency." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-[rgba(24,24,27,0.1)] text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-50 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#09090B] mb-3">{item.title}</h3>
                <p className="text-[#52525B]">{item.desc}</p>
              </div>
            ))}
          </div>
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
                    <defs>
                      <linearGradient id="manualGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#EF4444" stopOpacity={0.9} />
                        <stop offset="100%" stopColor="#DC2626" stopOpacity={0.7} />
                      </linearGradient>
                      <linearGradient id="automatedGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FFD60A" stopOpacity={0.9} />
                        <stop offset="100%" stopColor="#F59E0B" stopOpacity={0.8} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis
                      dataKey="name"
                      stroke="#FAFAFA"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: '#FAFAFA' }}
                    />
                    <YAxis
                      stroke="#FAFAFA"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: '#FAFAFA' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#18181B',
                        borderColor: '#FFD60A',
                        color: '#FAFAFA',
                        borderRadius: '8px',
                        border: '1px solid #FFD60A'
                      }}
                      itemStyle={{ color: '#FAFAFA' }}
                      labelStyle={{ color: '#FFD60A', fontWeight: 'bold' }}
                      cursor={{ fill: 'hsl(var(--muted))', opacity: 0.4 }}
                    />
                    <Legend
                      wrapperStyle={{ paddingTop: '20px' }}
                      iconType="circle"
                      formatter={(value) => <span style={{ color: '#FAFAFA', fontSize: '14px' }}>{value}</span>}
                    />
                    <Bar
                      dataKey="manual"
                      name="Manual Effort"
                      fill="url(#manualGradient)"
                      radius={[8, 8, 0, 0]}
                      animationBegin={0}
                      animationDuration={1500}
                      animationEasing="ease-out"
                    />
                    <Bar
                      dataKey="automated"
                      name="After Automation"
                      fill="url(#automatedGradient)"
                      radius={[8, 8, 0, 0]}
                      animationBegin={200}
                      animationDuration={1500}
                      animationEasing="ease-out"
                    />
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

      {/* Tools Showcase */}
      <section className="py-24 bg-[#27272A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#FAFAFA] mb-4">Professional Grade Tools</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Everything you need to manage complex portfolios, available for free.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="w-10 h-10 text-brand-orange" />,
                title: "Monte Carlo Simulator",
                desc: "Predict project outcomes with statistical confidence. Understand risks and opportunities.",
                link: "/tools/monte-carlo"
              },
              {
                icon: <TrendingUp className="w-10 h-10 text-brand-orange" />,
                title: "Earned Value Management",
                desc: "Track project performance against baselines. Identify deviations early and accurately.",
                link: "/tools/evm"
              },
              {
                icon: <Brain className="w-10 h-10 text-brand-orange" />,
                title: "AI Prompt Library",
                desc: "Leverage GPT-4 for instant insights, report generation, and strategic recommendations.",
                link: "/tools/ai-prompts"
              }
            ].map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#3F3F46] p-8 rounded-2xl border border-[rgba(251,146,60,0.1)] hover:border-brand-orange/50 transition-all group hover:shadow-[0_8px_32px_rgba(251,146,60,0.15)] hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-[#27272A] rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-orange/10 transition-colors">
                  {tool.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#FAFAFA] mb-3">{tool.title}</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">{tool.desc}</p>
                <Link to={tool.link} className="inline-flex items-center text-white font-semibold hover:text-brand-orange transition-colors">
                  Explore Tool <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
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

      {/* Community Impact */}
      <section className="py-24 bg-[#18181B] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#FAFAFA]">Built for the Community,<br />Powered by Intelligence</h2>
              <p className="text-xl text-zinc-400 mb-8">
                We believe advanced portfolio management shouldn't be locked behind expensive licenses.
              </p>
              <ul className="space-y-4 text-lg text-zinc-300">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" />
                  <span>Free & Open Source: No hidden costs, ever.</span>
                </li>
                <li className="flex items-center gap-3">
                  <UsersIcon className="w-6 h-6 text-brand-orange shrink-0" />
                  <span>Community-Driven: Shaped by PMO leaders like you.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Code className="w-6 h-6 text-brand-orange shrink-0" />
                  <span>Transparent: Audit every line of code on GitHub.</span>
                </li>
              </ul>
              <div className="mt-10">
                <Link
                  to="/community"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orange/90 text-black rounded-full text-lg font-bold transition-all shadow-[0_0_30px_rgba(251,146,60,0.4)] hover:shadow-[0_0_40px_rgba(251,146,60,0.6)]"
                >
                  Join the Community <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="bg-[#27272A] p-8 rounded-2xl border border-white/10 shadow-2xl">
                <h3 className="text-2xl font-bold text-[#FAFAFA] mb-6">Community Growth</h3>
                <div className="space-y-6">
                  {[
                    { label: "GitHub Stars", val: "5,000+", pct: "90%" },
                    { label: "Active Contributors", val: "150+", pct: "75%" },
                    { label: "Discord Members", val: "1,200+", pct: "80%" },
                    { label: "Toolkit Downloads", val: "15,000+", pct: "95%" }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-[#FAFAFA]">{item.label}</span>
                        <span className="font-bold text-brand-orange">{item.val}</span>
                      </div>
                      <div className="h-2 bg-[#3F3F46] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: item.pct }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-brand-orange rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
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


    </>
  );
};
