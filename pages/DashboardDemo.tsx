import React, { useState, useMemo, useEffect } from 'react';
import { MOCK_PROJECTS } from '../constants';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line } from 'recharts';
import {
  LayoutDashboard, Filter, AlertTriangle, CheckCircle, Activity, Search,
  Github, Download, Users, Code, Zap, Layers, Bell, Smartphone,
  Database, Server, Cloud, Rocket, Book, Puzzle, MessageSquare,
  ChevronDown, ChevronUp, ExternalLink, Play, Handshake, FileText,
  BarChart2, RefreshCw, Cpu, Globe, Shield, Lock, ArrowRight, Terminal, Grid, Clock, TrendingUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export const DashboardDemo: React.FC = () => {
  const [departmentFilter, setDepartmentFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [liveMode, setLiveMode] = useState(false);
  const [showBenchmarks, setShowBenchmarks] = useState(false);
  const [showAIExplanation, setShowAIExplanation] = useState<string | null>(null);
  const [isExportOpen, setIsExportOpen] = useState(false);

  // Filter logic
  const filteredProjects = useMemo(() => {
    return MOCK_PROJECTS.filter(p => {
      const matchesDept = departmentFilter === 'All' || p.department === departmentFilter;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.id.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDept && matchesSearch;
    });
  }, [departmentFilter, searchQuery]);

  // KPI Calculations
  const totalBudget = filteredProjects.reduce((acc, curr) => acc + curr.budgetTotal, 0);
  const budgetUsed = filteredProjects.reduce((acc, curr) => acc + curr.budgetUsed, 0);
  const criticalCount = filteredProjects.filter(p => p.status === 'Critical').length;
  const atRiskCount = filteredProjects.filter(p => p.status === 'At Risk').length;

  // Chart Data Preparation
  const statusData = [
    { name: 'On Track', value: filteredProjects.filter(p => p.status === 'On Track').length, color: '#22C55E' },
    { name: 'At Risk', value: filteredProjects.filter(p => p.status === 'At Risk').length, color: '#FB923C' },
    { name: 'Critical', value: filteredProjects.filter(p => p.status === 'Critical').length, color: '#EF4444' },
  ].filter(d => d.value > 0);

  const budgetData = filteredProjects.map(p => ({
    name: p.id,
    Total: p.budgetTotal,
    Used: p.budgetUsed,
    Benchmark: p.budgetTotal * 0.85, // Simulated benchmark
    amt: p.budgetTotal
  }));

  const departments = ['All', ...Array.from(new Set(MOCK_PROJECTS.map(p => p.department)))];

  // AI Explanation Content
  const getAIExplanation = (metric: string) => {
    switch (metric) {
      case 'Budget Utilized':
        return {
          title: "Budget Utilization Analysis",
          content: `Your portfolio has utilized ${((budgetUsed / totalBudget) * 100).toFixed(0)}% of allocated budget (£${(budgetUsed / 1000000).toFixed(1)}M of £${(totalBudget / 1000000).toFixed(1)}M). This is healthy for projects at 70% completion. However, 2 projects are showing early overspend indicators (Cloud Migration Alpha, Mobile App Refresh). Recommended: Review these projects' burn rates in detail.`
        };
      case 'Critical Projects':
        return {
          title: "Critical Status Analysis",
          content: `${criticalCount} projects are currently in Critical status. The primary driver is resource contention in the Engineering department. Historical data suggests a 40% probability of schedule slippage if not addressed within 2 weeks.`
        };
      default:
        return { title: "Metric Analysis", content: "AI analysis provides context-aware insights based on historical patterns and current portfolio trajectory." };
    }
  };

  return (
    <div className="bg-background min-h-screen pt-20">

      {/* SECTION 1: Hero Section */}
      <section className="pt-32 pb-20 bg-[#18181B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#27272A] border border-white/10 text-sm font-medium text-white mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
              </span>
              Live Demo Environment
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Portfolio Intelligence <span className="text-brand-orange">Dashboard</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-10">
              Experience the power of automated portfolio analytics. This is a live demonstration of the React components available in the toolkit.
            </p>

            <div className="flex justify-center gap-4">
              <button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_30px_rgba(251,146,60,0.4)] hover:shadow-[0_0_40px_rgba(251,146,60,0.6)]">
                View Live Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Dashboard Mockup */}
      <section className="py-12 bg-[#27272A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#18181B] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            {/* Dashboard Header */}
            <div className="border-b border-white/10 p-6 flex justify-between items-center bg-[#27272A]">
              <div>
                <h2 className="text-2xl font-bold text-[#FAFAFA]">Global Portfolio Overview</h2>
                <p className="text-zinc-400 text-sm">Last updated: Just now</p>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-[#3F3F46] hover:bg-[#52525B] text-white rounded-lg text-sm font-medium transition-colors border border-white/10">
                  Export Report
                </button>
                <button className="px-4 py-2 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-brand-orange/20">
                  + New Project
                </button>
              </div>
            </div>

            <div className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Key Metrics */}
              <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { label: 'Total Portfolio Value', value: '£12.4M', change: '+8.2%', trend: 'up', color: 'text-[#FAFAFA]' },
                  { label: 'Active Projects', value: '24', change: '+2', trend: 'up', color: 'text-[#FAFAFA]' },
                  { label: 'Avg. ROI', value: '142%', change: '+12%', trend: 'up', color: 'text-[#22C55E]' },
                  { label: 'Risk Exposure', value: 'High', change: '+5%', trend: 'down', color: 'text-[#EF4444]' },
                ].map((stat, i) => (
                  <div key={i} className="bg-[#3F3F46] p-4 rounded-xl border border-white/5">
                    <div className="text-zinc-400 text-sm mb-1">{stat.label}</div>
                    <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className={`text-xs mt-2 flex items-center gap-1 ${stat.trend === 'up' ? 'text-[#22C55E]' : 'text-[#EF4444]'}`}>
                      {stat.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                      {stat.change} vs last month
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts Section */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Project Status Chart */}
                <div className="bg-[#3F3F46] p-6 rounded-xl border border-white/5">
                  <h3 className="font-bold text-[#FAFAFA] mb-6">Project Status Distribution</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={statusData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {statusData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} stroke="#27272A" strokeWidth={2} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{ backgroundColor: '#27272A', borderColor: '#52525B', color: '#FAFAFA', borderRadius: '8px' }}
                          itemStyle={{ color: '#FAFAFA' }}
                        />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Bar Chart */}
                <div className="bg-[#3F3F46] p-6 rounded-xl border border-white/5">
                  <h3 className="font-bold text-[#FAFAFA] mb-6">Budget Allocation vs. Actuals</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={budgetData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#52525B" vertical={false} />
                        <XAxis dataKey="name" stroke="#9CA3AF" fontSize={10} tickLine={false} axisLine={false} />
                        <YAxis stroke="#9CA3AF" fontSize={12} tickFormatter={(value) => `£${value / 1000}k`} tickLine={false} axisLine={false} />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#27272A', borderColor: '#52525B', color: '#FAFAFA', borderRadius: '8px' }}
                          itemStyle={{ color: '#FAFAFA' }}
                          formatter={(value: number) => `£${value.toLocaleString()}`}
                        />
                        <Legend />
                        <Bar dataKey="Total" fill="#6B7280" radius={[4, 4, 0, 0]} name="Total Budget" />
                        <Bar dataKey="Used" fill="#FB923C" radius={[4, 4, 0, 0]} name="Utilized" />
                        {showBenchmarks && (
                          <Line type="monotone" dataKey="Benchmark" stroke="#9CA3AF" strokeDasharray="5 5" dot={false} name="Industry Avg" />
                        )}
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Project List */}
              <div className="lg:col-span-1 bg-[#3F3F46] rounded-xl border border-white/5 overflow-hidden flex flex-col">
                <div className="p-4 border-b border-white/5 font-bold text-[#FAFAFA]">Active Projects</div>
                <div className="overflow-y-auto flex-1">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#27272A] text-zinc-400">
                      <tr>
                        <th className="p-3 font-medium">Project</th>
                        <th className="p-3 font-medium">Status</th>
                        <th className="p-3 font-medium text-right">Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredProjects.map((project, i) => (
                        <tr key={project.id} className="hover:bg-[#27272A] transition-colors">
                          <td className="p-3 font-medium text-[#FAFAFA]">{project.name}</td>
                          <td className="p-3">
                            <span className={cn(
                              "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border",
                              project.status === 'On Track' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                                project.status === 'Critical' ? 'bg-red-500/10 text-red-500 border-red-500/20' :
                                  'bg-orange-500/10 text-orange-500 border-orange-500/20'
                            )}>
                              {project.status === 'On Track' && <CheckCircle className="w-3 h-3" />}
                              {project.status === 'Critical' && <AlertTriangle className="w-3 h-3" />}
                              {project.status === 'At Risk' && <Clock className="w-3 h-3" />}
                              {project.status}
                            </span>
                          </td>
                          <td className="p-3 text-right text-zinc-300">£{(project.budgetTotal / 1000).toFixed(0)}k</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-3 border-t border-white/5 bg-[#27272A] text-center">
                  <button className="text-sm text-brand-orange hover:text-brand-orange/80 font-medium">View All Projects →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Feature Highlights */}
      <section className="py-20 bg-secondary/30 dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Makes This Dashboard Different</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">It's not just visualization—it's intelligent, automated, and extensible</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6 text-primary" />,
                title: "AI-Powered Insights",
                desc: "Claude API integration provides natural language explanations of metrics, anomaly detection, and predictive risk scoring.",
                tech: "GPT-4/Claude API, prompt engineering"
              },
              {
                icon: <RefreshCw className="w-6 h-6 text-accent" />,
                title: "Real-Time Sync",
                desc: "Automated data pipelines from Jira, ServiceNow, and SharePoint eliminate manual entry and ensure data freshness.",
                tech: "n8n workflows, REST APIs"
              },
              {
                icon: <Layers className="w-6 h-6 text-teal-500" />,
                title: "Multi-Level Drill-Down",
                desc: "Navigate from portfolio → function → project → task. All connected, all interactive, all real-time.",
                tech: "React state, dynamic routing"
              },
              {
                icon: <Bell className="w-6 h-6 text-red-500" />,
                title: "Intelligent Alerting",
                desc: "Automated notifications when status changes, budget variance exceeds thresholds, or milestones are missed.",
                tech: "Event-driven architecture"
              },
              {
                icon: <Code className="w-6 h-6 text-indigo-500" />,
                title: "Fully Extensible",
                desc: "Open-source means you can modify any visual, add custom data sources, or create views for different stakeholders.",
                tech: "Modular React architecture"
              },
              {
                icon: <Smartphone className="w-6 h-6 text-primary" />,
                title: "Responsive & Accessible",
                desc: "Works on desktop, tablet, and mobile. Meets WCAG 2.1 AA standards for accessibility.",
                tech: "Responsive design, a11y"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white dark:bg-card p-6 rounded-xl border border-slate-200 dark:border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 dark:bg-secondary rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{feature.desc}</p>
                <div className="text-xs font-mono text-muted-foreground pt-4 border-t border-border">
                  Technical: {feature.tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Technical Architecture */}
      <section className="py-20 bg-background border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Under the Hood: Technical Architecture</h2>
            <p className="text-lg text-muted-foreground">Built with modern, production-ready technology stack</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Visual Diagram (Simplified with CSS Grid) */}
            <div className="lg:col-span-3 space-y-4">
              {/* Layer 1 */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg text-center">
                  <div className="text-xs text-primary uppercase tracking-wider mb-1">Data Sources</div>
                  <div className="text-white font-semibold">Jira API</div>
                </div>
                <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg text-center">
                  <div className="text-xs text-primary uppercase tracking-wider mb-1">Data Sources</div>
                  <div className="text-white font-semibold">ServiceNow</div>
                </div>
                <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg text-center">
                  <div className="text-xs text-primary uppercase tracking-wider mb-1">Data Sources</div>
                  <div className="text-white font-semibold">SharePoint</div>
                </div>
              </div>

              <div className="flex justify-center"><ArrowRight className="rotate-90 text-muted-foreground" /></div>

              {/* Layer 2 */}
              <div className="bg-accent/10 border border-accent/30 p-6 rounded-lg text-center relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 text-xs text-accent font-bold tracking-widest">INTEGRATION</div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <RefreshCw className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-white font-bold">n8n Workflows</div>
                    <div className="text-xs text-muted-foreground">Automation & ETL</div>
                  </div>
                  <div>
                    <Database className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-white font-bold">PostgreSQL</div>
                    <div className="text-xs text-muted-foreground">Data Warehouse</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center"><ArrowRight className="rotate-90 text-muted-foreground" /></div>

              {/* Layer 3 */}
              <div className="bg-secondary/20 border border-primary/30 p-6 rounded-lg text-center relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 text-xs text-primary font-bold tracking-widest">INTELLIGENCE</div>
                <div className="flex justify-center gap-12">
                  <div>
                    <Cpu className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-white font-bold">Claude API</div>
                    <div className="text-xs text-muted-foreground">AI Analysis</div>
                  </div>
                  <div>
                    <BarChart2 className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-white font-bold">React Frontend</div>
                    <div className="text-xs text-muted-foreground">Visualization</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Description */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" /> Why React 18?
                </h3>
                <p className="text-muted-foreground text-sm">Component reusability, large ecosystem, and excellent performance for complex interactive dashboards.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-accent" /> Why n8n Automation?
                </h3>
                <p className="text-muted-foreground text-sm">Visual workflow builder with 400+ integrations allows for rapid development of data pipelines without boilerplate code.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-purple-400" /> Why Claude API?
                </h3>
                <p className="text-muted-foreground text-sm">Best-in-class reasoning capabilities for generating context-aware explanations of complex portfolio data.</p>
              </div>

              <div className="pt-6 flex gap-4">
                <button className="px-4 py-2 bg-card hover:bg-secondary text-white rounded-lg text-sm font-medium transition-colors border border-border">
                  View Tech Docs
                </button>
                <button className="px-4 py-2 bg-transparent hover:bg-card text-white rounded-lg text-sm font-medium transition-colors border border-border">
                  API Documentation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Data Model Explained */}
      <section className="py-20 bg-secondary/30 dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Understanding the Data Model</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">How we transform raw project data into strategic portfolio intelligence</p>
          </div>

          {/* Transformation Flow */}
          <div className="mb-16 overflow-x-auto">
            <div className="flex items-center justify-between min-w-[800px] gap-4">
              {[
                { step: "1", title: "Raw Data", desc: "Jira, ServiceNow, SharePoint" },
                { step: "2", title: "Standardization", desc: "Golden Standard Schema" },
                { step: "3", title: "Quality Scoring", desc: "Completeness & Freshness" },
                { step: "4", title: "AI Analysis", desc: "Pattern Detection" },
                { step: "5", title: "Insights", desc: "Executive Dashboard" }
              ].map((item, i) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center text-center w-40">
                    <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary font-bold flex items-center justify-center mb-3 border border-primary/20 dark:border-primary/30">
                      {item.step}
                    </div>
                    <div className="font-bold text-foreground mb-1">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                  {i < 4 && <div className="h-[2px] flex-1 bg-slate-200 dark:bg-border relative top-[-20px]"></div>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Key Metrics Table */}
          <div className="bg-white dark:bg-card rounded-xl border border-slate-200 dark:border-border overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-secondary/50 border-b border-border">
                  <th className="p-4 font-semibold text-foreground">Metric</th>
                  <th className="p-4 font-semibold text-foreground">Calculation</th>
                  <th className="p-4 font-semibold text-foreground">Why It Matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-border">
                {[
                  { metric: "Budget Utilized %", calc: "(Actual Spend / Total Budget) × 100", why: "Indicates burn rate and potential overruns" },
                  { metric: "Project Health Score", calc: "Weighted: 40% schedule, 30% budget, 20% risk, 10% quality", why: "Single metric for executive decision-making" },
                  { metric: "Dependency Risk Score", calc: "Count of at-risk dependencies × criticality rating", why: "Early warning of cascading delays" },
                  { metric: "Data Quality Index", calc: "% of Golden Fields populated × freshness factor", why: "Confidence in portfolio visibility" },
                  { metric: "Predicted Completion", calc: "AI model based on velocity + current status", why: "Realistic delivery forecast vs. plan" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-100/50 dark:hover:bg-secondary/30">
                    <td className="p-4 font-medium text-primary">{row.metric}</td>
                    <td className="p-4 font-mono text-xs text-muted-foreground bg-secondary/30 rounded px-2 py-1 w-fit">{row.calc}</td>
                    <td className="p-4 text-sm text-muted-foreground">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 6: Deployment Options */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Deploy? Choose Your Approach</h2>
            <p className="text-lg text-muted-foreground">Flexible options for every organization size</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Option 1 */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">FREE</div>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Cloud className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Hosted Demo</h3>
              <p className="text-muted-foreground text-sm mb-6">Perfect for testing, evaluation, and proof-of-concept.</p>

              <ul className="space-y-3 mb-8">
                {['Pre-configured instance', 'Sample data loaded', 'Full functionality', 'No installation required'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" /> {item}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold transition-colors">
                Launch Hosted Demo
              </button>
            </div>

            {/* Option 2 */}
            <div className="bg-slate-900 dark:bg-black p-8 rounded-2xl border-2 border-primary shadow-xl relative transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Self-Hosted</h3>
              <p className="text-slate-400 text-sm mb-6">Production use, data sovereignty, and full customization.</p>

              <ul className="space-y-3 mb-8">
                {['Full data control', 'Unlimited customization', 'Connect real data sources', 'No ongoing fees'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-primary" /> {item}
                  </li>
                ))}
              </ul>

              <a href="https://github.com/Erickuby/portfolio-intelligence" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-semibold transition-colors text-center">
                View Installation Guide
              </a>
            </div>

            {/* Option 3 */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Managed Service</h3>
              <p className="text-muted-foreground text-sm mb-6">We handle deployment, security, and maintenance for you.</p>

              <ul className="space-y-3 mb-8">
                {['Dedicated secure instance', 'Automated backups', '99.9% uptime SLA', 'Priority support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-accent" /> {item}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl font-semibold transition-colors">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Integration Guides */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Connect Your Data Sources</h2>
            <p className="text-lg text-muted-foreground">Pre-built integrations for popular portfolio management tools</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Atlassian Jira", icon: <Layers className="w-6 h-6 text-primary" />, time: "30 mins", complexity: "Easy", features: "Issues, epics, versions" },
              { name: "ServiceNow", icon: <Server className="w-6 h-6 text-primary" />, time: "1-2 hours", complexity: "Moderate", features: "Project records, milestones" },
              { name: "Microsoft 365", icon: <Grid className="w-6 h-6 text-primary" />, time: "20 mins", complexity: "Easy", features: "SharePoint, Planner" },
              { name: "Azure DevOps", icon: <Code className="w-6 h-6 text-primary" />, time: "30 mins", complexity: "Easy", features: "Work items, backlogs" },
              { name: "Monday.com", icon: <LayoutDashboard className="w-6 h-6 text-primary" />, time: "15 mins", complexity: "Easy", features: "Boards, items, status" },
              { name: "Custom API", icon: <Terminal className="w-6 h-6 text-slate-500" />, time: "Varies", complexity: "Advanced", features: "REST API, Webhooks" }
            ].map((integration, i) => (
              <div key={i} className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-colors group">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-secondary rounded-lg">{integration.icon}</div>
                  <span className={cn(
                    "text-xs font-medium px-2 py-1 rounded-full",
                    integration.complexity === 'Easy' ? "bg-green-500/10 text-green-500" :
                      integration.complexity === 'Moderate' ? "bg-orange-500/10 text-orange-500" :
                        "bg-red-500/10 text-red-500"
                  )}>{integration.complexity}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{integration.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">Syncs: {integration.features}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Activity className="w-3 h-3" /> {integration.time} setup</span>
                  <span className="text-primary text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">View Guide <ArrowRight className="w-3 h-3" /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Performance Metrics */}
      <section className="py-20 bg-background border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built for Enterprise Scale</h2>
            <p className="text-lg text-slate-400">Performance benchmarks from production deployments</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "< 2s", label: "Load Time", sub: "100+ projects" },
                { value: "500+", label: "Projects", sub: "Supported per instance" },
                { value: "15m", label: "Data Freshness", sub: "Auto-sync interval" },
                { value: "99.9%", label: "Uptime", sub: "Production average" }
              ].map((stat, i) => (
                <div key={i} className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="font-medium text-primary mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-500">{stat.sub}</div>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-xl">
              <h3 className="text-white font-bold mb-6">Dashboard Load Time Comparison</h3>
              <div className="space-y-6">
                {[
                  { name: "Portfolio Intelligence", time: 1.8, color: "bg-primary" },
                  { name: "Clarity PPM", time: 8.2, color: "bg-slate-600" },
                  { name: "Planview", time: 6.5, color: "bg-slate-600" },
                  { name: "Jira Align", time: 5.1, color: "bg-slate-600" }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-300">{item.name}</span>
                      <span className="text-slate-400">{item.time}s</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(item.time / 10) * 100}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className={cn("h-full rounded-full", item.color)}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-xs text-slate-500 italic text-right">
                *Benchmarked with 200-project portfolio on 4G connection
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Community Showcase */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">How Teams Are Using This Dashboard</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Real implementations from the Portfolio Intelligence community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                org: "UK Government Dept",
                stats: "250+ Projects | 40 Delivery Managers",
                result: "Reduced board reporting prep from 8 hours to 45 minutes.",
                tags: ["Jira", "ServiceNow", "SharePoint"]
              },
              {
                org: "Financial Services PMO",
                stats: "80 Projects | £50M Portfolio",
                result: "Prevented 2 major cascading delays through dependency visualization.",
                tags: ["SAP Integration", "Risk Modeling"]
              },
              {
                org: "Healthcare Provider",
                stats: "Multi-Program | Clinical + Digital",
                result: "Improved risk response time from 2 weeks to 48 hours.",
                tags: ["Patient Safety", "Regulatory"]
              }
            ].map((caseStudy, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div className="h-40 bg-slate-200 dark:bg-slate-700 rounded-xl mb-6 flex items-center justify-center text-slate-400">
                  <Users className="w-12 h-12 opacity-50" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{caseStudy.org}</h3>
                <div className="text-xs font-medium text-primary mb-4">{caseStudy.stats}</div>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-6">"{caseStudy.result}"</p>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tags.map((tag, t) => (
                    <span key={t} className="px-2 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded text-xs text-slate-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: Developer Resources */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Built for Developers, by Developers</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Extending the dashboard is as simple as creating a new React component. We provide a comprehensive SDK and documentation.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Component Library", desc: "50+ pre-built UI components for portfolio visualization" },
                  { title: "Data Hooks", desc: "Custom React hooks for fetching and caching project data" },
                  { title: "Theme Provider", desc: "Fully customizable Tailwind configuration" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Code className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">{item.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <button className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
                  <Book className="w-4 h-4" /> Read Documentation
                </button>
                <button className="px-6 py-3 border border-slate-300 dark:border-slate-600 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2 text-slate-900 dark:text-white">
                  <Github className="w-4 h-4" /> View Repo
                </button>
              </div>
            </div>

            <div className="bg-[#1E293B] rounded-xl border border-slate-700 p-6 font-mono text-sm text-slate-300 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-8 bg-slate-800 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs text-slate-500">CustomWidget.tsx</span>
              </div>
              <div className="mt-6 space-y-2">
                <div className="text-purple-400">import <span className="text-white">{`{ usePortfolioData }`}</span> from <span className="text-green-400">'@portfolio/sdk'</span>;</div>
                <div className="text-purple-400">import <span className="text-white">{`{ Card, Chart }`}</span> from <span className="text-green-400">'@portfolio/ui'</span>;</div>
                <br />
                <div className="text-primary">export const <span className="text-white">RiskWidget</span> = () {'=>'} {`{`}</div>
                <div className="pl-4 text-white">const <span className="text-muted-foreground">{`{ data }`}</span> = <span className="text-primary">usePortfolioData</span>();</div>
                <br />
                <div className="pl-4 text-primary">return (</div>
                <div className="pl-8 text-white">{'<Card title="Risk Distribution">'}</div>
                <div className="pl-12 text-white">{'<Chart type="donut" data={data.risks} />'}</div>
                <div className="pl-8 text-white">{'</Card>'}</div>
                <div className="pl-4 text-purple-400">);</div>
                <div className="text-primary">{`}`};</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: Roadmap */}
      <section className="py-20 bg-[#F8F5FF] dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E1B4B] dark:text-white mb-4">Product Roadmap</h2>
            <p className="text-lg text-slate-600 dark:text-muted-foreground max-w-2xl mx-auto">We're just getting started. Here's what's coming next.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { q: "Q4 2025", title: "Advanced AI Agents", desc: "Autonomous risk mitigation agents", status: "In Progress", color: "bg-primary" },
              { q: "Q1 2026", title: "Mobile App", desc: "Native iOS and Android dashboard", status: "Planned", color: "bg-accent" },
              { q: "Q2 2026", title: "Predictive Budgeting", desc: "ML-based forecasting models", status: "Planned", color: "bg-primary" },
              { q: "Q3 2026", title: "Enterprise SSO", desc: "Okta and Azure AD integration", status: "Planned", color: "bg-slate-500" }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-card p-6 rounded-xl border border-slate-200 dark:border-border relative overflow-hidden">
                <div className={cn("absolute top-0 left-0 w-full h-1", item.color)}></div>
                <div className="text-xs font-bold text-slate-500 dark:text-muted-foreground mb-2">{item.q}</div>
                <h3 className="text-lg font-bold text-[#1E1B4B] dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-muted-foreground mb-4">{item.desc}</p>
                <span className="inline-block px-2 py-1 bg-slate-100 dark:bg-secondary rounded text-xs font-medium text-slate-600 dark:text-muted-foreground">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: FAQ */}
      <section className="py-20 bg-background border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "Is this really free?", a: "Yes, the core dashboard is open-source (MIT License). You can host it yourself for free." },
              { q: "Do I need n8n?", a: "We recommend n8n for data syncing, but you can also push data directly to the PostgreSQL database." },
              { q: "Is my data secure?", a: "Absolutely. Data stays in your infrastructure. We don't see anything." },
              { q: "Can I customize the charts?", a: "Yes, it's built with Recharts. You can modify any visualization in the code." }
            ].map((faq, i) => (
              <div key={i} className="bg-secondary/30 border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13: Final CTA */}
      <section className="py-24 bg-card border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Portfolio?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join the community of forward-thinking leaders using AI to drive project success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Get Started Now
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              View Live Demo
            </button>
          </div>
          <p className="mt-6 text-sm text-white/70">No credit card required • Open Source • MIT License</p>
        </div>
      </section>
    </div>
  );
};

export default DashboardDemo;