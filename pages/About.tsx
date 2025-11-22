import React from 'react';
import { Briefcase, Award, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
   return (
      <div className="bg-background min-h-screen">
         {/* Header */}
         <div className="py-20 bg-card border-b border-border">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
               >
                  The Problem I Lived
               </motion.h1>
               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl text-muted-foreground leading-relaxed"
               >
                  I spent years watching brilliant project managers drown in administrative work. Here is the story of how we fixed it at enterprise scale.
               </motion.p>
            </div>
         </div>

         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Narrative */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="prose prose-invert prose-lg mx-auto"
            >
               <p className="text-muted-foreground">
                  In my role leading digital portfolios, I saw a recurring pattern across multi-million pound enterprise transformations.
                  PMs were spending 15+ hours a week chasing updates, fixing data quality issues, and producing reports that were out of date before they were read.
               </p>

               <h3 className="text-primary font-bold text-2xl mt-8 mb-4">The Turning Point: Golden Standard</h3>
               <p className="text-muted-foreground">
                  We launched the "Golden Standard" initiative to solve the data quality crisis. It wasn't just about new tools; it was about
                  governance-first automation.
               </p>
               <ul className="space-y-2 text-muted-foreground my-6 list-none pl-0">
                  <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> We identified the critical data points that actually drive decisions.</li>
                  <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> We built automated workflows to sanitize and sync this data automatically.</li>
                  <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> We trained 20+ senior stakeholders in Week 1 alone.</li>
               </ul>

               <h3 className="text-primary font-bold text-2xl mt-8 mb-4">Why This Site Exists</h3>
               <p className="text-muted-foreground">
                  I created this resource because most portfolio management content is either too theoretical or too sales-focused.
                  I share what actually works in complex, regulated, enterprise environments—with the code, templates, and frameworks to implement it yourself.
               </p>
            </motion.div>

            {/* Credentials Grid */}
            <div className="mt-16 grid md:grid-cols-2 gap-6">
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-card p-6 rounded-xl border border-border shadow-sm"
               >
                  <div className="flex items-center gap-3 mb-4">
                     <Briefcase className="text-primary w-6 h-6" />
                     <h4 className="font-bold text-foreground">Experience</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                     <li className="flex justify-between">
                        <span>Digital Portfolio Manager</span>
                        <span className="text-muted-foreground/70">Enterprise Tech</span>
                     </li>
                     <li className="flex justify-between">
                        <span>Lead Product Owner</span>
                        <span className="text-muted-foreground/70">FinTech Sector</span>
                     </li>
                  </ul>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-card p-6 rounded-xl border border-border shadow-sm"
               >
                  <div className="flex items-center gap-3 mb-4">
                     <Award className="text-primary w-6 h-6" />
                     <h4 className="font-bold text-foreground">Certifications</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                     <li>Certified Scrum Product Owner (CSPO)</li>
                     <li>Registered Scrum Master</li>
                     <li>Enterprise Agile Frameworks</li>
                  </ul>
               </motion.div>
            </div>

            {/* Stats Row */}
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
               {[
                  { value: "15+", label: "Years Exp" },
                  { value: "Exec", label: "Stakeholders" },
                  { value: "100%", label: "Adoption" }
               ].map((stat, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.4 + (i * 0.1) }}
                     className="bg-card p-4 rounded-xl border border-border shadow-sm"
                  >
                     <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                     <div className="text-xs text-muted-foreground uppercase mt-1">{stat.label}</div>
                  </motion.div>
               ))}
            </div>

         </div>
      </div>
   );
};
