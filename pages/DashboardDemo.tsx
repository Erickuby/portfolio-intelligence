import React, { useState, useMemo } from 'react';
import { MOCK_PROJECTS } from '../constants';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { LayoutDashboard, Filter, AlertTriangle, CheckCircle, Activity, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export const DashboardDemo: React.FC = () => {
  const [departmentFilter, setDepartmentFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

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
    { name: 'On Track', value: filteredProjects.filter(p => p.status === 'On Track').length, color: 'hsl(var(--primary))' }, // Primary Green-ish
    { name: 'At Risk', value: filteredProjects.filter(p => p.status === 'At Risk').length, color: '#F59E0B' }, // Amber
    { name: 'Critical', value: filteredProjects.filter(p => p.status === 'Critical').length, color: 'hsl(var(--destructive))' }, // Red
  ].filter(d => d.value > 0);

  const budgetData = filteredProjects.map(p => ({
    name: p.id,
    Total: p.budgetTotal,
    Used: p.budgetUsed,
    amt: p.budgetTotal
  }));

  const departments = ['All', ...Array.from(new Set(MOCK_PROJECTS.map(p => p.department)))];

  return (
    <div className="bg-background min-h-screen pb-20 pt-20">
      {/* Dashboard Header */}
      <div className="bg-card border-b border-border pt-8 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-primary/10 rounded text-primary">
                  <LayoutDashboard className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-primary uppercase tracking-wider">Live Interactive Demo</span>
              </div>
              <h1 className="text-3xl font-display font-bold text-foreground">Portfolio Health Dashboard</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex gap-3 w-full md:w-auto"
            >
              <div className="relative flex-grow md:flex-grow-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-full md:w-64 pl-9 pr-4 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:border-primary outline-none transition-colors"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <select
                  className="pl-9 pr-8 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:border-primary outline-none appearance-none cursor-pointer transition-colors"
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: "Total Budget", value: `£${(totalBudget / 1000000).toFixed(1)}M`, sub: `Across ${filteredProjects.length} projects`, icon: <span className="text-primary bg-primary/10 p-1 rounded text-xs font-bold">GBP</span> },
            { label: "Budget Utilized", value: `${((budgetUsed / totalBudget) * 100).toFixed(0)}%`, sub: null, icon: <Activity className="w-4 h-4 text-blue-400" />, progress: (budgetUsed / totalBudget) * 100 },
            { label: "Critical Projects", value: criticalCount, sub: "Requires immediate attention", icon: <AlertTriangle className="w-4 h-4 text-destructive" />, color: "text-destructive" },
            { label: "Projects At Risk", value: atRiskCount, sub: "Trending negative", icon: <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div> }
          ].map((kpi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-muted-foreground text-sm">{kpi.label}</span>
                {kpi.icon}
              </div>
              <div className="text-2xl font-bold text-foreground">{kpi.value}</div>
              {kpi.sub && <div className={cn("text-xs mt-1", kpi.color ? "text-destructive/80" : "text-muted-foreground")}>{kpi.sub}</div>}
              {kpi.progress !== undefined && (
                <div className="w-full bg-secondary h-1.5 mt-3 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full transition-all duration-1000" style={{ width: `${kpi.progress}%` }}></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Visualizations */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Pie Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-card border border-border p-6 rounded-xl col-span-1 shadow-sm"
          >
            <h3 className="text-foreground font-bold mb-6">Project Status Distribution</h3>
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
                    contentStyle={{ backgroundColor: 'hsl(var(--popover))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--popover-foreground))', borderRadius: '8px' }}
                    itemStyle={{ color: 'hsl(var(--popover-foreground))' }}
                  />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Bar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-card border border-border p-6 rounded-xl col-span-1 md:col-span-2 shadow-sm"
          >
            <h3 className="text-foreground font-bold mb-6">Budget Allocation vs. Actuals</h3>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={budgetData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(value) => `£${value / 1000}k`} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{ backgroundColor: 'hsl(var(--popover))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--popover-foreground))', borderRadius: '8px' }}
                    itemStyle={{ color: 'hsl(var(--popover-foreground))' }}
                    formatter={(value: number) => `£${value.toLocaleString()}`}
                  />
                  <Legend />
                  <Bar dataKey="Total" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Used" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Data Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-card border border-border rounded-xl overflow-hidden shadow-sm"
        >
          <div className="p-6 border-b border-border">
            <h3 className="text-foreground font-bold">Active Portfolio Grid</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary/50 text-muted-foreground uppercase tracking-wider font-medium">
                <tr>
                  <th className="p-4 pl-6">Project Name</th>
                  <th className="p-4">Dept</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Risk Level</th>
                  <th className="p-4">Progress</th>
                  <th className="p-4 text-right pr-6">Budget Used</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                {filteredProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 pl-6 font-medium text-foreground">
                      <div className="flex flex-col">
                        <span>{project.name}</span>
                        <span className="text-xs text-muted-foreground">{project.id}</span>
                      </div>
                    </td>
                    <td className="p-4">{project.department}</td>
                    <td className="p-4">
                      <span className={cn(
                        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border",
                        project.status === 'On Track' ? 'bg-green-500/10 text-green-600 border-green-500/20' :
                          project.status === 'Critical' ? 'bg-red-500/10 text-red-600 border-red-500/20' :
                            'bg-amber-500/10 text-amber-600 border-amber-500/20'
                      )}>
                        {project.status === 'On Track' && <CheckCircle className="w-3 h-3" />}
                        {project.status === 'Critical' && <AlertTriangle className="w-3 h-3" />}
                        {project.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={cn(
                        "font-medium",
                        project.riskLevel === 'High' ? 'text-destructive' :
                          project.riskLevel === 'Medium' ? 'text-amber-500' : 'text-muted-foreground'
                      )}>
                        {project.riskLevel}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="w-24 bg-secondary rounded-full h-1.5 mb-1">
                        <div className="bg-primary h-full rounded-full" style={{ width: `${project.completion}%` }}></div>
                      </div>
                      <span className="text-xs text-muted-foreground">{project.completion}%</span>
                    </td>
                    <td className="p-4 text-right pr-6 tabular-nums">
                      <div className="text-foreground">£{project.budgetUsed.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">of £{project.budgetTotal.toLocaleString()}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredProjects.length === 0 && (
              <div className="p-12 text-center text-muted-foreground">
                No projects found matching your filters.
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};