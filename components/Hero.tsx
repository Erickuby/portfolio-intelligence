import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Globe, Users, Code, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Animated counter component
const AnimatedCounter: React.FC<{ end: number; suffix?: string; duration?: number }> = ({
  end,
  suffix = '',
  duration = 2000
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-background min-h-[90vh] flex items-center pt-20">
      {/* Animated Code Background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full font-mono text-xs text-primary overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: '100vh', opacity: [0, 0.5, 0] }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="absolute"
              style={{ left: `${Math.random() * 100}%` }}
            >
              {`{ "workflow": "automated", "status": "success" }`}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-teal/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="text-center space-y-8 max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-secondary/50 border border-border px-4 py-1.5 rounded-full text-primary text-sm font-medium backdrop-blur-sm"
          >
            <Code className="w-4 h-4" />
            <span>100% Open Source • MIT License</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] tracking-tight"
          >
            Open-Source AI Tools Transforming{' '}
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-primary">
              Enterprise Portfolio Management
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Building intelligent automation frameworks that eliminate manual reporting for 200+ portfolio managers worldwide.
            Free, open-source, and battle-tested in government and enterprise environments.
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto py-8"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-primary/50 transition-all">
              <Download className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">
                <AnimatedCounter end={1200} suffix="+" />
              </div>
              <div className="text-xs text-muted-foreground">Toolkit Downloads</div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-primary/50 transition-all">
              <Globe className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">
                <AnimatedCounter end={45} suffix="+" />
              </div>
              <div className="text-xs text-muted-foreground">Countries</div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-primary/50 transition-all">
              <Users className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <div className="text-xs text-muted-foreground">Active Users</div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-primary/50 transition-all">
              <Code className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div className="text-xs text-muted-foreground">Open Source</div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/toolkit"
              className="inline-flex justify-center items-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold text-lg transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 active:scale-95"
            >
              Get Free Toolkit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="https://github.com/Erickuby/portfolio-intelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-4 bg-card hover:bg-muted text-foreground rounded-xl font-semibold text-lg transition-all border border-border active:scale-95"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-sm text-muted-foreground"
          >
            Join the community of portfolio managers who've automated 15,000+ hours of manual work
          </motion.p>

        </div>
      </div>
    </div>
  );
};
