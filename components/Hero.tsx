import React from 'react';
import { ArrowRight, ShieldCheck, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-background min-h-[90vh] flex items-center pt-20">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-teal/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-secondary/50 border border-border px-4 py-1.5 rounded-full text-primary text-sm font-medium backdrop-blur-sm"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Trusted by Enterprise Leaders</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] tracking-tight">
              Enterprise Portfolio Management <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-primary">
                That Actually Works
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              AI-powered automation and battle-tested frameworks from experts who have transformed large-scale enterprise delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/toolkit"
                className="inline-flex justify-center items-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold text-lg transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 active:scale-95"
              >
                Get the Free AI Toolkit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex justify-center items-center px-8 py-4 bg-secondary border border-border hover:bg-secondary/80 text-secondary-foreground rounded-lg font-semibold text-lg transition-all active:scale-95"
              >
                <Play className="w-4 h-4 mr-2 fill-current" />
                See Real Examples
              </Link>
            </div>

            <div className="pt-4 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-[10px] font-bold text-muted-foreground">
                    {i}
                  </div>
                ))}
              </div>
              <p>Joined by 500+ Portfolio Leaders</p>
            </div>
          </motion.div>

          {/* Abstract Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="hidden lg:block relative"
          >
            <div className="relative bg-card/50 border border-border rounded-2xl p-6 backdrop-blur-md shadow-2xl">
              {/* Decorative header */}
              <div className="flex items-center gap-2 mb-6 border-b border-border pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-xs text-muted-foreground font-mono">portfolio-automation.n8n.json</div>
              </div>

              {/* Fake Workflow Nodes */}
              <div className="space-y-6 font-mono text-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground border border-border shadow-lg">
                    Jira
                  </div>
                  <div className="h-0.5 w-12 bg-border relative">
                    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-background px-1 text-[10px] text-muted-foreground">FETCH</div>
                  </div>
                  <div className="w-auto px-4 h-12 rounded-lg bg-primary flex items-center justify-center text-primary-foreground border border-primary/50 shadow-lg shadow-primary/20">
                    Standardize Data (GPT-4)
                  </div>
                </div>

                <div className="w-0.5 h-8 bg-border ml-6"></div>

                <div className="flex items-center gap-4 ml-6">
                  <div className="w-0.5 h-12 bg-border absolute -left-6 top-0 rounded-bl-lg border-b border-border w-6"></div>
                  <div className="w-auto px-4 h-12 rounded-lg bg-brand-teal flex items-center justify-center text-white font-bold border border-brand-cyan/50 shadow-lg shadow-brand-teal/20 animate-pulse">
                    Risk Analysis &gt; 80%
                  </div>
                  <div className="h-0.5 w-12 bg-border relative"></div>
                  <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-500 font-bold border border-yellow-500/50 shadow-lg">
                    PBI
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-background rounded-lg p-4 border border-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-green-500 text-xs">● Status: Active</span>
                  <span className="text-muted-foreground text-xs">Exec Time: 1.2s</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  &gt; Processing 1,402 project items...<br />
                  &gt; Normalized dependencies across 4 business units...<br />
                  &gt; <span className="text-brand-cyan">Success: Report generated. 15 hours saved.</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
