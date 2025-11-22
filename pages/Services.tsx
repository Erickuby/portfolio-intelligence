import React from 'react';
import { SERVICES, TOOLS_DATA } from '../constants';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROICalculator } from '../components/ROICalculator';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export const Services: React.FC = () => {
  return (
    <div className="bg-background min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-display font-bold text-foreground mb-4"
          >
            How We Can Work Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Whether you need strategic advice, team training, or a completely done-for-you automation system.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all group flex flex-col shadow-sm hover:shadow-md"
            >
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">{service.description}</p>
              <Link
                to={
                  service.cta === 'Book Discovery' ? '/contact?service=discovery' :
                    service.cta === 'Request Quote' ? '/contact?service=quote' :
                      service.cta === 'View Syllabus' ? '/course-syllabus' :
                        '/contact'
                }
                className="w-full py-3 rounded-lg border border-border text-foreground font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all block text-center"
              >
                {service.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ROI Calculator Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Why Invest in Automation?</h2>
            <p className="text-muted-foreground">Calculate the potential return on investment for your specific team size.</p>
          </div>
          <ROICalculator />
        </motion.div>

        {/* Tools Comparison Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm"
        >
          <div className="p-8 border-b border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Tool Comparison: Enterprise Ready?</h2>
              <p className="text-muted-foreground mt-2">My honest verdict on the tools I've used in enterprise environments.</p>
            </div>
            <Link to="/tools" className="text-primary hover:text-foreground flex items-center font-medium transition-colors group">
              See Full Analysis <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-secondary/50 text-muted-foreground text-sm uppercase tracking-wider">
                  <th className="p-6 font-medium">Tool</th>
                  <th className="p-6 font-medium">AI Capability</th>
                  <th className="p-6 font-medium">Enterprise Fit</th>
                  <th className="p-6 font-medium">Verdict</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                {TOOLS_DATA.map((tool, idx) => (
                  <tr key={idx} className={cn("hover:bg-muted/50 transition-colors", tool.recommended ? 'bg-primary/5' : '')}>
                    <td className="p-6 font-bold text-foreground flex items-center gap-2">
                      {tool.name}
                      {tool.recommended && <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] uppercase font-bold">Top Pick</span>}
                    </td>
                    <td className="p-6">{tool.aiFeatures}</td>
                    <td className="p-6">
                      <span className={cn(
                        "px-2 py-1 rounded text-xs font-bold",
                        tool.enterprise === 'Excellent' ? 'bg-green-500/20 text-green-600' :
                          tool.enterprise === 'High' ? 'bg-blue-500/20 text-blue-600' : 'bg-yellow-500/20 text-yellow-600'
                      )}>
                        {tool.enterprise}
                      </span>
                    </td>
                    <td className="p-6 text-sm text-muted-foreground italic">"{tool.verdict}"</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </div>
  );
};