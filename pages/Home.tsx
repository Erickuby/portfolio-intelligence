import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { StatsBanner } from '../components/StatsBanner';
import { LATEST_POSTS, TESTIMONIALS, CHART_DATA } from '../constants';
import { ArrowRight, CheckCircle2, XCircle, BrainCircuit, BarChart, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  return (
    <>
      <Hero />
      <StatsBanner />

      {/* Problem Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
            >
              Traditional Portfolio Management Is <span className="text-destructive">Broken</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
            >
              Stop managing spreadsheets and start managing value. The old way of chasing updates doesn't work at enterprise scale.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <XCircle className="w-8 h-8 text-destructive" />,
                title: "Manual Data Chase",
                desc: "Spending 15+ hours/week just trying to get an accurate picture of what's happening across the portfolio."
              },
              {
                icon: <Lock className="w-8 h-8 text-destructive" />,
                title: "Locked in Silos",
                desc: "Risk registers that are write-once, read-never documents hidden in disconnected folders."
              },
              {
                icon: <BarChart className="w-8 h-8 text-destructive" />,
                title: "Lagging Indicators",
                desc: "Reporting that takes so long to produce, the data is obsolete by the time executives see it."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border hover:border-destructive/50 transition-all shadow-sm hover:shadow-md"
              >
                <div className="mb-4 p-3 bg-background rounded-lg inline-block shadow-sm">{item.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution / Chart Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Intelligent Automation Meets <br /><span className="text-primary">Real-World Expertise</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We don't just teach theory. We implement battle-tested frameworks that have saved thousands of hours in large-scale organizations.
              </p>

              <div className="space-y-6">
                {[
                  "Golden Standard methodology for perfect data quality",
                  "Automated RAID management that scales",
                  "Enterprise-grade workflows compatible with security constraints",
                  "Human-in-the-loop governance models"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link to="/about" className="text-primary font-bold hover:text-primary/80 transition-colors inline-flex items-center group">
                  Learn about the methodology <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-2xl border border-border shadow-xl"
            >
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground">Reduction in Manual Reporting Effort</h3>
                <p className="text-sm text-muted-foreground">Hours per week per Portfolio Manager</p>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart data={CHART_DATA} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{ backgroundColor: 'hsl(var(--popover))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--popover-foreground))', borderRadius: '8px' }}
                      itemStyle={{ color: 'hsl(var(--popover-foreground))' }}
                      cursor={{ fill: 'hsl(var(--muted))', opacity: 0.4 }}
                    />
                    <Legend wrapperStyle={{ paddingTop: '20px' }} />
                    <Bar dataKey="manual" name="Manual Effort" fill="hsl(var(--destructive))" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="automated" name="After Automation" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Authority / Testimonials */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-display font-bold text-foreground mb-12">Trusted by Senior Leaders</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card/60 backdrop-blur-md p-8 rounded-2xl border border-border relative shadow-sm"
              >
                <div className="text-primary text-4xl font-serif absolute top-4 left-4 opacity-20">"</div>
                <p className="text-foreground text-lg italic mb-6 relative z-10">{t.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold border border-border">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{t.author}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Preview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-2">Latest Insights</h2>
              <p className="text-muted-foreground">Strategies, frameworks, and code.</p>
            </div>
            <Link to="/resources" className="text-primary hover:text-foreground transition-colors font-medium flex items-center gap-1 group">
              View all posts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {LATEST_POSTS.slice(0, 3).map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/resources`} className="group block bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">{post.category}</span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="mr-2">Read time:</span>
                      <span className="text-foreground">{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Lead Magnet */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ rotate: -10, scale: 0.9 }}
            whileInView={{ rotate: 3, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary/20 rotate-3"
          >
            <BrainCircuit className="w-8 h-8 text-primary-foreground" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Get the AI-Powered <br />PM Toolkit
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Includes 10 workflow templates, 25 GPT prompts for PMs, and the complete "Golden Standard" data quality framework.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 p-6 rounded-xl max-w-md mx-auto"
            >
              <p className="font-bold text-lg">Check your inbox!</p>
              <p>The toolkit is on its way to {email}.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex flex-col gap-4">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email"
                  className="w-full px-6 py-4 bg-background border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg rounded-xl transition-all shadow-lg hover:shadow-primary/25 active:scale-95"
                >
                  Send Me the Toolkit
                </button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                We respect your inbox. Unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
};
