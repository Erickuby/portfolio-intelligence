import React, { useState } from 'react';
import { CheckSquare, Download, FileText, Workflow, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export const Toolkit: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', role: 'PM' });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xgvqnwyl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          form_type: 'toolkit_access'
        })
      });

      if (response.ok) {
        setStatus('success');
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
    <div className="bg-background min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-border rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid md:grid-cols-2">

            {/* Left: Content */}
            <div className="p-10 md:p-12 bg-secondary/10">
              <span className="text-primary font-bold tracking-wider uppercase text-xs mb-4 block">Free Resource</span>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
                The AI-Powered <br />Portfolio Manager's Toolkit
              </h1>
              <p className="text-muted-foreground mb-8">
                Stop starting from scratch. Get the exact templates and workflows I use to save 15+ hours a week.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: Workflow, text: "10 Workflow Templates (JSON)" },
                  { icon: CheckSquare, text: "25 GPT Prompts for PMs" },
                  { icon: FileText, text: "Golden Standard Framework Guide" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-primary">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Download className="w-4 h-4" />
                <span>Downloaded 1,200+ times this month</span>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-background p-10 md:p-12 flex flex-col justify-center border-l border-border">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">You're all set!</h3>
                  <p className="text-muted-foreground mb-6">Check your email for the download link.</p>
                  <button onClick={() => setStatus('idle')} className="text-primary font-medium underline hover:text-primary/80 transition-colors">
                    Send to another email
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">Get Instant Access</h3>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none text-foreground transition-all"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none text-foreground transition-all"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">Role</label>
                    <select
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none text-foreground transition-all appearance-none"
                      value={formData.role}
                      onChange={e => setFormData({ ...formData, role: e.target.value })}
                    >
                      <option value="PM">Project Manager</option>
                      <option value="Portfolio">Portfolio Lead</option>
                      <option value="Delivery">Delivery Manager</option>
                      <option value="Director">Director/Exec</option>
                    </select>
                  </div>

                  <button type="submit" className="w-full py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg shadow-lg transition-all hover:shadow-primary/25 active:scale-95">
                    Send Me The Toolkit
                  </button>
                </form>
              )}
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};
