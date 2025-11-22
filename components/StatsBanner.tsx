import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';
import { cn } from '../lib/utils';

export const StatsBanner: React.FC = () => {
  return (
    <div className="border-y border-border bg-card/50 backdrop-blur-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {stat.value}
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
