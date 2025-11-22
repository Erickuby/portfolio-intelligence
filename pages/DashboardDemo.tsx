import React, { useState, useMemo, useEffect } from 'react';
import { MOCK_PROJECTS } from '../constants';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line } from 'recharts';
import {
  LayoutDashboard, Filter, AlertTriangle, CheckCircle, Activity, Search,
  Github, Download, Users, Code, Zap, Layers, Bell, Smartphone,
  Database, Server, Cloud, Rocket, Book, Puzzle, MessageSquare,
  ChevronDown, ChevronUp, ExternalLink, Play, Handshake, FileText,
  BarChart2, RefreshCw, Cpu, Globe, Shield, Lock, ArrowRight, Terminal, Grid
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
    { name: 'On Track', value: filteredProjects.filter(p => p.status === 'On Track').length, color: 'hsl(var(--primary))' },
    { name: 'At Risk', value: filteredProjects.filter(p => p.status === 'At Risk').length, color: '#F59E0B' },
    { name: 'Critical', value: filteredProjects.filter(p => p.status === 'Critical').length, color: 'hsl(var(--destructive))' },
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
      <section className="bg-[#0B1120] border-b border-white/10 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-blue-400 text-xs font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Live Interactive Demo
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight"
            >
              Interactive Portfolio <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Health Dashboard</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 max-w-2xl mx-auto mb-8"
            >
              Experience the real-time portfolio intelligence system used by 200+ teams.
              Fully interactive, open-source, and ready to deploy in your organization.
            </motion.p>

            {/* Info Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
            >
              <a href="https://github.com/Erickuby/portfolio-intelligence" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 p-4 rounded-xl flex items-center gap-4 transition-all group text-left">
                <div className="p-2 bg-slate-700/50 rounded-lg group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-semibold">Open Source</div>
                  <div className="text-xs text-slate-400 flex items-center gap-1">
                    MIT Licensed <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </a>

              <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl flex items-center gap-4 text-left">
                <div className="p-2 bg-slate-700/50 rounded-lg text-teal-400">
                  <Download className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-semibold">1,200+ Downloads</div>
                  <div className="text-xs text-slate-400">Ready to Deploy</div>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl flex items-center gap-4 text-left">
                <div className="p-2 bg-slate-700/50 rounded-lg text-purple-400">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-semibold">200+ Organizations</div>
                  <div className="text-xs text-slate-400">Production-Tested</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tech Stack Banner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 text-xs font-mono text-slate-500 border-t border-white/5 pt-8"
          >
            <span className="px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700">React 18</span>
            <span className="px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700">TypeScript</span>
            <span className="px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700">Tailwind CSS</span>
            <span className="px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700">Recharts</span>
            <span className="px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700">n8n Workflows</span>
            <span className="px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700">Claude API</span>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: The Interactive Dashboard */}
      <section className="py-12 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Dashboard Controls & Feature Callouts */}
          <div className="mb-6 flex flex-col lg:flex-row justify-between items-end gap-4">
            <div className="text-slate-400 text-sm flex items-center gap-4">
              <span className="flex items-center gap-1.5"><Filter className="w-4 h-4 text-teal-400" /> Filter by Dept</span>
              <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
              <span className="flex items-center gap-1.5"><Search className="w-4 h-4 text-teal-400" /> Search Projects</span>
              <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
              <span className="flex items-center gap-1.5"><Activity className="w-4 h-4 text-teal-400" /> Drill Down</span>
            </div>

            <div className="flex items-center gap-3">
              {/* Live Mode Toggle */}
              <button
                onClick={() => setLiveMode(!liveMode)}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all",
                  liveMode
                    ? "bg-green-500/10 border-green-500/30 text-green-400"
                    : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600"
                )}
              >
                <div className={cn("w-2 h-2 rounded-full", liveMode ? "bg-green-500 animate-pulse" : "bg-slate-500")} />
                {liveMode ? "Live Data Sync: ON" : "Live Data Sync: OFF"}
              </button>

              {/* Benchmark Toggle */}
              <button
                onClick={() => setShowBenchmarks(!showBenchmarks)}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all",
                  showBenchmarks
                    ? "bg-blue-500/10 border-blue-500/30 text-blue-400"
                    : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600"
                )}
              >
                <BarChart2 className="w-3.5 h-3.5" />
                Benchmarks
              </button>

              {/* Export Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsExportOpen(!isExportOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium hover:bg-slate-700 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  Export
                  <ChevronDown className="w-3 h-3" />
                </button>
                {isExportOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-50 py-1">
                    <button className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white">Export to PDF</button>
                    <button className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white">Export to PowerPoint</button>
                    <button className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white">Export CSV (Raw)</button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Dashboard Container */}
          <div className="bg-[#1E293B] border border-slate-700 rounded-xl p-6 shadow-2xl relative overflow-hidden">
            {/* Dashboard Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 border-b border-slate-700 pb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Portfolio Overview</h2>
                <p className="text-slate-400 text-sm">Real-time visibility across all active programs</p>
              </div>

              <div className="flex gap-3 w-full md:w-auto">
                <div className="relative flex-grow md:flex-grow-0">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    className="w-full md:w-64 pl-9 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-sm text-white focus:border-blue-500 outline-none transition-colors"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <select
                    className="pl-9 pr-8 py-2 bg-slate-800 border border-slate-600 rounded-lg text-sm text-white focus:border-blue-500 outline-none appearance-none cursor-pointer transition-colors"
                    value={departmentFilter}
                    onChange={(e) => setDepartmentFilter(e.target.value)}
                  >
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Total Budget", value: `£${(totalBudget / 1000000).toFixed(1)}M`, sub: `Across ${filteredProjects.length} projects`, icon: <span className="text-blue-400 bg-blue-500/10 p-1 rounded text-xs font-bold">GBP</span> },
                { label: "Budget Utilized", value: `${((budgetUsed / totalBudget) * 100).toFixed(0)}%`, sub: null, icon: <Activity className="w-4 h-4 text-teal-400" />, progress: (budgetUsed / totalBudget) * 100 },
                { label: "Critical Projects", value: criticalCount, sub: "Requires immediate attention", icon: <AlertTriangle className="w-4 h-4 text-red-500" />, color: "text-red-500" },
                { label: "Projects At Risk", value: atRiskCount, sub: "Trending negative", icon: <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div> }
              ].map((kpi, i) => (
                <div key={i} className="bg-slate-800/50 border border-slate-700 p-5 rounded-xl relative group">
                  <button
                    onClick={() => setShowAIExplanation(kpi.label)}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-slate-700 rounded text-purple-400"
                    title="Ask AI to explain this metric"
                  >
                    <Zap className="w-3 h-3" />
                  </button>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-slate-400 text-sm">{kpi.label}</span>
                    {kpi.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{kpi.value}</div>
                  {kpi.sub && <div className={cn("text-xs mt-1", kpi.color ? "text-red-400" : "text-slate-500")}>{kpi.sub}</div>}
                  {kpi.progress !== undefined && (
                    <div className="w-full bg-slate-700 h-1.5 mt-3 rounded-full overflow-hidden">
                      <div className="bg-teal-500 h-full transition-all duration-1000" style={{ width: `${kpi.progress}%` }}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Visualizations */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Pie Chart */}
              <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl col-span-1">
                <h3 className="text-white font-bold mb-6">Project Status Distribution</h3>
                <div className="h-[250px] w-full">
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
                          <Cell key={`cell-${index}`} fill={entry.color} stroke="rgba(0,0,0,0)" />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{ backgroundColor: '#1E293B', borderColor: '#334155', color: '#F8FAFC', borderRadius: '8px' }}
                        itemStyle={{ color: '#F8FAFC' }}
                      />
                      <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Bar Chart */}
              <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl col-span-1 md:col-span-2">
                <h3 className="text-white font-bold mb-6">Budget Allocation vs. Actuals</h3>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={budgetData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                      <XAxis dataKey="name" stroke="#94A3B8" fontSize={10} tickLine={false} axisLine={false} />
                      <YAxis stroke="#94A3B8" fontSize={12} tickFormatter={(value) => `£${value / 1000}k`} tickLine={false} axisLine={false} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#1E293B', borderColor: '#334155', color: '#F8FAFC', borderRadius: '8px' }}
                        itemStyle={{ color: '#F8FAFC' }}
                        formatter={(value: number) => `£${value.toLocaleString()}`}
                      />
                      <Legend />
                      <Bar dataKey="Total" fill="#0078D4" radius={[4, 4, 0, 0]} name="Total Budget" />
                      <Bar dataKey="Used" fill="#00A499" radius={[4, 4, 0, 0]} name="Utilized" />
                      {showBenchmarks && (
                        <Line type="monotone" dataKey="Benchmark" stroke="#94A3B8" strokeDasharray="5 5" dot={false} name="Industry Avg" />
                      )}
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Data Grid */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-slate-700">
                <h3 className="text-white font-bold">Active Portfolio Grid</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-900/50 text-slate-400 uppercase tracking-wider font-medium">
                    <tr>
                      <th className="p-4 pl-6">Project Name</th>
                      <th className="p-4">Dept</th>
                      <th className="p-4">Status</th>
                      <th className="p-4">Risk Level</th>
                      <th className="p-4">Progress</th>
                      <th className="p-4 text-right pr-6">Budget Used</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700 text-slate-400">
                    {filteredProjects.map((project) => (
                      <tr key={project.id} className="hover:bg-slate-700/30 transition-colors">
                        <td className="p-4 pl-6 font-medium text-white">
                          <div className="flex flex-col">
                            <span>{project.name}</span>
                            <span className="text-xs text-slate-500">{project.id}</span>
                          </div>
                        </td>
                        <td className="p-4">{project.department}</td>
                        <td className="p-4">
                          <span className={cn(
                            "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border",
                            project.status === 'On Track' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                              project.status === 'Critical' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                                'bg-amber-500/10 text-amber-400 border-amber-500/20'
                          )}>
                            {project.status === 'On Track' && <CheckCircle className="w-3 h-3" />}
                            {project.status === 'Critical' && <AlertTriangle className="w-3 h-3" />}
                            {project.status}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className={cn(
                            "font-medium",
                            project.riskLevel === 'High' ? 'text-red-400' :
                              project.riskLevel === 'Medium' ? 'text-amber-400' : 'text-slate-400'
                          )}>
                            {project.riskLevel}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="w-24 bg-slate-700 rounded-full h-1.5 mb-1">
                            <div className="bg-blue-500 h-full rounded-full" style={{ width: `${project.completion}%` }}></div>
                          </div>
                          <span className="text-xs text-slate-500">{project.completion}%</span>
                        </td>
                        <td className="p-4 text-right pr-6 tabular-nums">
                          <div className="text-white">£{project.budgetUsed.toLocaleString()}</div>
                          <div className="text-xs text-slate-500">of £{project.budgetTotal.toLocaleString()}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Explanation Modal (Simulated) */}
      <AnimatePresence>
        {showAIExplanation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowAIExplanation(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#1E293B] border border-slate-700 rounded-xl p-6 max-w-md w-full shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 mb-4 text-purple-400">
                <Zap className="w-5 h-5" />
                <span className="font-bold text-sm uppercase tracking-wider">AI Insight</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{getAIExplanation(showAIExplanation).title}</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                {getAIExplanation(showAIExplanation).content}
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => setShowAIExplanation(null)}
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECTION 3: Feature Highlights */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">What Makes This Dashboard Different</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">It's not just visualization—it's intelligent, automated, and extensible</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6 text-purple-500" />,
                title: "AI-Powered Insights",
                desc: "Claude API integration provides natural language explanations of metrics, anomaly detection, and predictive risk scoring.",
                tech: "GPT-4/Claude API, prompt engineering"
              },
              {
                icon: <RefreshCw className="w-6 h-6 text-blue-500" />,
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
                icon: <Smartphone className="w-6 h-6 text-green-500" />,
                title: "Responsive & Accessible",
                desc: "Works on desktop, tablet, and mobile. Meets WCAG 2.1 AA standards for accessibility.",
                tech: "Responsive design, a11y"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{feature.desc}</p>
                <div className="text-xs font-mono text-slate-500 pt-4 border-t border-slate-200 dark:border-slate-700">
                  Technical: {feature.tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Technical Architecture */}
      <section className="py-20 bg-[#0B1120] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Under the Hood: Technical Architecture</h2>
            <p className="text-lg text-slate-400">Built with modern, production-ready technology stack</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Visual Diagram (Simplified with CSS Grid) */}
            <div className="lg:col-span-3 space-y-4">
              {/* Layer 1 */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg text-center">
                  <div className="text-xs text-blue-400 uppercase tracking-wider mb-1">Data Sources</div>
                  <div className="text-white font-semibold">Jira API</div>
                </div>
                <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg text-center">
                  <div className="text-xs text-blue-400 uppercase tracking-wider mb-1">Data Sources</div>
                  <div className="text-white font-semibold">ServiceNow</div>
                </div>
                <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg text-center">
                  <div className="text-xs text-blue-400 uppercase tracking-wider mb-1">Data Sources</div>
                  <div className="text-white font-semibold">SharePoint</div>
                </div>
              </div>

              <div className="flex justify-center"><ArrowRight className="rotate-90 text-slate-600" /></div>

              {/* Layer 2 */}
              <div className="bg-teal-900/20 border border-teal-500/30 p-6 rounded-lg text-center relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 text-xs text-teal-500 font-bold tracking-widest">INTEGRATION</div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <RefreshCw className="w-8 h-8 text-teal-500 mx-auto mb-2" />
                    <div className="text-white font-bold">n8n Workflows</div>
                    <div className="text-xs text-slate-400">Automation & ETL</div>
                  </div>
                  <div>
                    <Database className="w-8 h-8 text-teal-500 mx-auto mb-2" />
                    <div className="text-white font-bold">PostgreSQL</div>
                    <div className="text-xs text-slate-400">Data Warehouse</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center"><ArrowRight className="rotate-90 text-slate-600" /></div>

              {/* Layer 3 */}
              <div className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-lg text-center relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 text-xs text-purple-500 font-bold tracking-widest">INTELLIGENCE</div>
                <div className="flex justify-center gap-12">
                  <div>
                    <Cpu className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                    <div className="text-white font-bold">Claude API</div>
                    <div className="text-xs text-slate-400">AI Analysis</div>
                  </div>
                  <div>
                    <BarChart2 className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                    <div className="text-white font-bold">React Frontend</div>
                    <div className="text-xs text-slate-400">Visualization</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Description */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-400" /> Why React 18?
                </h3>
                <p className="text-slate-400 text-sm">Component reusability, large ecosystem, and excellent performance for complex interactive dashboards.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-teal-400" /> Why n8n Automation?
                </h3>
                <p className="text-slate-400 text-sm">Visual workflow builder with 400+ integrations allows for rapid development of data pipelines without boilerplate code.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-purple-400" /> Why Claude API?
                </h3>
                <p className="text-slate-400 text-sm">Best-in-class reasoning capabilities for generating context-aware explanations of complex portfolio data.</p>
              </div>

              <div className="pt-6 flex gap-4">
                <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition-colors border border-slate-700">
                  View Tech Docs
                </button>
                <button className="px-4 py-2 bg-transparent hover:bg-slate-800 text-white rounded-lg text-sm font-medium transition-colors border border-slate-700">
                  API Documentation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Data Model Explained */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Understanding the Data Model</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">How we transform raw project data into strategic portfolio intelligence</p>
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
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-center mb-3 border border-blue-200 dark:border-blue-800">
                      {item.step}
                    </div>
                    <div className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</div>
                  </div>
                  {i < 4 && <div className="h-[2px] flex-1 bg-slate-200 dark:bg-slate-700 relative top-[-20px]"></div>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Key Metrics Table */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                  <th className="p-4 font-semibold text-slate-900 dark:text-white">Metric</th>
                  <th className="p-4 font-semibold text-slate-900 dark:text-white">Calculation</th>
                  <th className="p-4 font-semibold text-slate-900 dark:text-white">Why It Matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {[
                  { metric: "Budget Utilized %", calc: "(Actual Spend / Total Budget) × 100", why: "Indicates burn rate and potential overruns" },
                  { metric: "Project Health Score", calc: "Weighted: 40% schedule, 30% budget, 20% risk, 10% quality", why: "Single metric for executive decision-making" },
                  { metric: "Dependency Risk Score", calc: "Count of at-risk dependencies × criticality rating", why: "Early warning of cascading delays" },
                  { metric: "Data Quality Index", calc: "% of Golden Fields populated × freshness factor", why: "Confidence in portfolio visibility" },
                  { metric: "Predicted Completion", calc: "AI model based on velocity + current status", why: "Realistic delivery forecast vs. plan" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-100/50 dark:hover:bg-slate-700/30">
                    <td className="p-4 font-medium text-blue-600 dark:text-blue-400">{row.metric}</td>
                    <td className="p-4 font-mono text-xs text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/30 rounded px-2 py-1 w-fit">{row.calc}</td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-400">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 6: Deployment Options */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Ready to Deploy? Choose Your Approach</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Flexible options for every organization size</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Option 1 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">FREE</div>
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                <Cloud className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Hosted Demo</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Perfect for testing, evaluation, and proof-of-concept.</p>

              <ul className="space-y-3 mb-8">
                {['Pre-configured instance', 'Sample data loaded', 'Full functionality', 'No installation required'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-500" /> {item}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors">
                Launch Hosted Demo
              </button>
            </div>

            {/* Option 2 */}
            <div className="bg-slate-900 dark:bg-black p-8 rounded-2xl border-2 border-blue-500 shadow-xl relative transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Self-Hosted</h3>
              <p className="text-slate-400 text-sm mb-6">Production use, data sovereignty, and full customization.</p>

              <ul className="space-y-3 mb-8">
                {['Full data control', 'Unlimited customization', 'Connect real data sources', 'No ongoing fees'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-blue-400" /> {item}
                  </li>
                ))}
              </ul>

              <a href="https://github.com/Erickuby/portfolio-intelligence" target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-semibold transition-colors text-center">
                View Installation Guide
              </a>
            </div>

            {/* Option 3 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Managed Service</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">We handle deployment, security, and maintenance for you.</p>

              <ul className="space-y-3 mb-8">
                {['Dedicated secure instance', 'Automated backups', '99.9% uptime SLA', 'Priority support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-purple-500" /> {item}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition-colors">
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Connect Your Data Sources</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Pre-built integrations for popular portfolio management tools</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Atlassian Jira", icon: <Layers className="w-6 h-6 text-blue-600" />, time: "30 mins", complexity: "Easy", features: "Issues, epics, versions" },
              { name: "ServiceNow", icon: <Server className="w-6 h-6 text-green-600" />, time: "1-2 hours", complexity: "Moderate", features: "Project records, milestones" },
              { name: "Microsoft 365", icon: <Grid className="w-6 h-6 text-blue-500" />, time: "20 mins", complexity: "Easy", features: "SharePoint, Planner" },
              { name: "Azure DevOps", icon: <Code className="w-6 h-6 text-blue-700" />, time: "30 mins", complexity: "Easy", features: "Work items, backlogs" },
              { name: "Monday.com", icon: <LayoutDashboard className="w-6 h-6 text-amber-500" />, time: "15 mins", complexity: "Easy", features: "Boards, items, status" },
              { name: "Custom API", icon: <Terminal className="w-6 h-6 text-slate-600" />, time: "Varies", complexity: "Advanced", features: "REST API, Webhooks" }
            ].map((integration, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-colors group">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">{integration.icon}</div>
                  <span className={cn(
                    "text-xs font-medium px-2 py-1 rounded-full",
                    integration.complexity === 'Easy' ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                      integration.complexity === 'Moderate' ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" :
                        "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                  )}>{integration.complexity}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{integration.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Syncs: {integration.features}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs text-slate-500 flex items-center gap-1"><Activity className="w-3 h-3" /> {integration.time} setup</span>
                  <span className="text-blue-600 dark:text-blue-400 text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">View Guide <ArrowRight className="w-3 h-3" /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Performance Metrics */}
      <section className="py-20 bg-[#0B1120] border-t border-white/10">
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
                  <div className="font-medium text-blue-400 mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-500">{stat.sub}</div>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/30 border border-slate-700 p-8 rounded-xl">
              <h3 className="text-white font-bold mb-6">Dashboard Load Time Comparison</h3>
              <div className="space-y-6">
                {[
                  { name: "Portfolio Intelligence", time: 1.8, color: "bg-teal-500" },
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
      <section className="py-20 bg-white dark:bg-slate-900">
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
                <div className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-4">{caseStudy.stats}</div>
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
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
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
                <div className="text-blue-400">export const <span className="text-yellow-400">RiskWidget</span> = () ={'>'} {`{`}</div>
                <div className="pl-4 text-white">const <span className="text-blue-300">{`{ data }`}</span> = <span className="text-yellow-400">usePortfolioData</span>();</div>
                <br />
                <div className="pl-4 text-purple-400">return (</div>
                <div className="pl-8 text-white">{'<Card title="Risk Distribution">'}</div>
                <div className="pl-12 text-white">{'<Chart type="donut" data={data.risks} />'}</div>
                <div className="pl-8 text-white">{'</Card>'}</div>
                <div className="pl-4 text-purple-400">);</div>
                <div className="text-blue-400">{`}`};</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: Roadmap */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Roadmap & Future Features</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">We're constantly improving based on community feedback</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quarter: "Q3 2025", title: "Advanced Forecasting", items: ["Monte Carlo simulations", "Resource capacity planning", "Scenario modeling"], status: "In Progress" },
              { quarter: "Q4 2025", title: "Mobile App", items: ["iOS & Android native apps", "Offline mode", "Push notifications"], status: "Planned" },
              { quarter: "Q1 2026", title: "AI Agents", items: ["Autonomous risk mitigation", "Automated status reporting", "Meeting summarization"], status: "Research" }
            ].map((roadmap, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 px-4 py-1 bg-slate-200 dark:bg-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 rounded-bl-xl">
                  {roadmap.status}
                </div>
                <div className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2">{roadmap.quarter}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{roadmap.title}</h3>
                <ul className="space-y-3">
                  {roadmap.items.map((item, t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: FAQ */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              { q: "Is this really free to use?", a: "Yes, the core dashboard is open-source (MIT License) and free for commercial use. You can host it yourself without paying a penny." },
              { q: "How secure is my data?", a: "Your data never leaves your infrastructure. The dashboard connects directly to your internal tools (Jira, etc.) and runs within your firewall." },
              { q: "Do I need a developer to set this up?", a: "For the self-hosted version, basic knowledge of Docker/Node.js is recommended. However, we offer a Managed Service if you prefer a hands-off approach." },
              { q: "Can I customize the charts?", a: "Absolutely. The dashboard is built with Recharts and React, so you can modify any visualization or add new ones using standard React components." }
            ].map((faq, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13: Final CTA */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Ready to Transform Your Portfolio Reporting?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <button className="flex flex-col items-center p-8 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all group text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Try It Now</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Launch hosted demo instantly. No signup required.</p>
              <span className="text-blue-600 dark:text-blue-400 font-medium text-sm flex items-center gap-1">Launch Demo <ArrowRight className="w-4 h-4" /></span>
            </button>

            <a href="https://github.com/Erickuby/portfolio-intelligence" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-8 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-teal-500 transition-all group text-center">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Download className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Deploy It Yourself</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Get the source code and deploy on your infrastructure.</p>
              <span className="text-teal-600 dark:text-teal-400 font-medium text-sm flex items-center gap-1">Get Source Code <ArrowRight className="w-4 h-4" /></span>
            </a>

            <button className="flex flex-col items-center p-8 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-purple-500 transition-all group text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Handshake className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Get Help</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Let us deploy, configure, and maintain it for you.</p>
              <span className="text-purple-600 dark:text-purple-400 font-medium text-sm flex items-center gap-1">Request Quote <ArrowRight className="w-4 h-4" /></span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};