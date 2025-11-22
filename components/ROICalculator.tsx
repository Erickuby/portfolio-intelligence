import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, Clock, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export const ROICalculator: React.FC = () => {
  const [manualHours, setManualHours] = useState(10);
  const [teamSize, setTeamSize] = useState(5);
  const [projectCount, setProjectCount] = useState(10);

  // Constants for calculation
  const HOURLY_RATE = 60; // Assumed £60/hr fully loaded cost for PMs
  const WEEKS_PER_YEAR = 46; // Accounting for leave/holidays
  const AUTOMATION_EFFICIENCY = 0.45; // 45% reduction in manual effort

  const [savings, setSavings] = useState({
    hoursPerYear: 0,
    moneyPerYear: 0,
    roiMultiplier: 0
  });

  useEffect(() => {
    const totalManualHoursYearly = manualHours * teamSize * WEEKS_PER_YEAR;
    const savedHours = Math.round(totalManualHoursYearly * AUTOMATION_EFFICIENCY);
    const savedMoney = Math.round(savedHours * HOURLY_RATE);

    // ROI Multiplier assumption: Implementation cost is ~10% of the problem cost
    const implementationCost = (totalManualHoursYearly * HOURLY_RATE) * 0.10;
    const multiplier = (savedMoney / (implementationCost || 1)).toFixed(1);

    setSavings({
      hoursPerYear: savedHours,
      moneyPerYear: savedMoney,
      roiMultiplier: Number(multiplier)
    });
  }, [manualHours, teamSize, projectCount]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-3xl border border-border overflow-hidden shadow-2xl"
    >
      <div className="grid lg:grid-cols-2">

        {/* Input Section */}
        <div className="p-8 md:p-12 space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Calculator className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">ROI Calculator</h3>
          </div>

          <div className="space-y-6">
            {/* Input 1 */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-muted-foreground font-medium flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Manual Hours / Week
                </label>
                <span className="text-primary font-bold">{manualHours} hrs</span>
              </div>
              <input
                type="range"
                min="1"
                max="40"
                value={manualHours}
                onChange={(e) => setManualHours(parseInt(e.target.value))}
                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <p className="text-xs text-muted-foreground mt-1">Per team member spent on data entry, reporting, chasing updates.</p>
            </div>

            {/* Input 2 */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-muted-foreground font-medium flex items-center gap-2">
                  <Users className="w-4 h-4" /> Team Size
                </label>
                <span className="text-primary font-bold">{teamSize} people</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={teamSize}
                onChange={(e) => setTeamSize(parseInt(e.target.value))}
                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            {/* Input 3 */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-muted-foreground font-medium flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" /> Active Projects
                </label>
                <span className="text-primary font-bold">{projectCount} projects</span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={projectCount}
                onChange={(e) => setProjectCount(parseInt(e.target.value))}
                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-secondary/30 p-8 md:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border">
          <h4 className="text-muted-foreground uppercase tracking-wider font-bold text-sm mb-8">Potential Annual Impact</h4>

          <div className="space-y-8 mb-10">
            <div className="group">
              <p className="text-muted-foreground text-sm mb-1">Time Reclaimed</p>
              <div className="text-4xl md:text-5xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                {savings.hoursPerYear.toLocaleString()} <span className="text-lg text-muted-foreground font-sans font-normal">hours/year</span>
              </div>
            </div>

            <div className="group">
              <p className="text-muted-foreground text-sm mb-1">Cost Savings (Est.)</p>
              <div className="text-4xl md:text-5xl font-display font-bold text-primary">
                £{savings.moneyPerYear.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground mt-2">*Based on avg. Enterprise PM rates</p>
            </div>
          </div>

          <Link
            to="/toolkit"
            className="w-full py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            Get The Automation Toolkit <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};