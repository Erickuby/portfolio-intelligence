import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
   MapPin, Building, Calendar, Code, Github, Linkedin, Mail,
   Award, BookOpen, Briefcase, TrendingUp, Users as UsersIcon,
   Download, Globe, CheckCircle2, ArrowRight, Target, Brain,
   Lock, Unlock, UserCheck, Network, Package, Star, Mic,
   FileText, Cpu, Database, Cloud, Activity, Zap, Shield,
   MessageSquare, Video, Sparkles
} from 'lucide-react';

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

// Skill bar component
const SkillBar: React.FC<{ skill: string; level: number }> = ({ skill, level }) => {
   const [isVisible, setIsVisible] = useState(false);

   return (
      <motion.div
         initial={{ opacity: 0, x: -20 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true }}
         onViewportEnter={() => setIsVisible(true)}
         className="mb-6"
      >
         <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-foreground">{skill}</span>
            <span className="text-sm text-muted-foreground">{level}%</span>
         </div>
         <div className="w-full bg-secondary/30 rounded-full h-2 overflow-hidden">
            <motion.div
               initial={{ width: 0 }}
               animate={{ width: isVisible ? `${level}%` : 0 }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
            />
         </div>
      </motion.div>
   );
};

export const About: React.FC = () => {
   return (
      <div className="bg-background min-h-screen">

         {/* SECTION 1: Hero Section */}
         <section className="py-20 bg-secondary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 text-center"
               >
                  From £135K in Avoidable Losses to{' '}
                  <span className="text-primary">Open-Source Innovation Used by 1,200+ PMs</span>
               </motion.h1>

               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl text-muted-foreground text-center max-w-4xl mx-auto mb-16"
               >
                  I'm Eric Nwankwo, and I build AI-powered automation tools that eliminate the manual work drowning portfolio managers.
                  What started as solving my own team's problems is now an open-source movement transforming enterprise portfolio management globally.
               </motion.p>

               <div className="grid lg:grid-cols-5 gap-8 items-start">
                  {/* Left Column - Origin Story */}
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.2 }}
                     className="lg:col-span-3 space-y-6 text-muted-foreground leading-relaxed"
                  >
                     <h2 className="text-2xl font-bold text-foreground mb-4">The Origin Story</h2>

                     <p>
                        In my role leading digital portfolios at DWP Digital, I watched a pattern repeat itself: brilliant delivery managers
                        spending 15+ hours per week chasing data between Jira, ServiceNow, and spreadsheets.
                     </p>

                     <p>
                        We missed critical risks. Budget overruns reached £135K before anyone noticed. Strategic decisions were delayed by
                        weeks because we couldn't trust our data.
                     </p>

                     <p className="font-semibold text-foreground">
                        But here's what made me different: I didn't just complain about the tools. I built better ones.
                     </p>

                     <ul className="space-y-3 my-6">
                        {[
                           "I created the Golden Standard Framework to solve data quality at scale",
                           "I designed intelligent n8n workflows with Human-in-the-Loop AI",
                           "I automated the manual work so teams could focus on decisions, not data entry"
                        ].map((item, i) => (
                           <li key={i} className="flex items-start gap-3">
                              <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <span>{item}</span>
                           </li>
                        ))}
                     </ul>

                     <p>
                        Then something unexpected happened: other portfolio managers started asking for my solutions. Then government departments.
                        Then private sector firms.
                     </p>

                     <p>
                        That's when I realized this wasn't just about fixing my team's problems. It was about changing how the entire industry
                        approaches portfolio management.
                     </p>

                     <p className="text-foreground font-semibold">
                        Today, the open-source tools I built are used by 200+ portfolio managers across 45 countries, eliminating 15,000+ hours
                        of manual work annually and preventing millions in budget overruns.
                     </p>

                     <p className="text-lg text-primary font-semibold italic">
                        This is my mission: make intelligent portfolio management accessible to everyone, not just organizations that can afford
                        £100/user/month PPM tools.
                     </p>
                  </motion.div>

                  {/* Right Column - Cards */}
                  <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.3 }}
                     className="lg:col-span-2 space-y-6"
                  >
                     {/* Quick Stats Card */}
                     <div className="bg-card border border-border rounded-2xl p-6">
                        <div className="flex items-center gap-4 mb-6">
                           <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                              <UsersIcon className="w-8 h-8 text-primary" />
                           </div>
                           <div>
                              <h3 className="text-xl font-bold text-foreground">Eric Nwankwo</h3>
                              <p className="text-sm text-muted-foreground">Digital Portfolio Manager &<br />Open-Source Innovator</p>
                           </div>
                        </div>

                        <div className="space-y-4">
                           <div className="flex items-center gap-3 text-sm">
                              <MapPin className="w-4 h-4 text-primary" />
                              <span className="text-muted-foreground">Newcastle upon Tyne, UK</span>
                           </div>
                           <div className="flex items-center gap-3 text-sm">
                              <Building className="w-4 h-4 text-primary" />
                              <span className="text-muted-foreground">DWP Digital (UK Government)</span>
                           </div>
                           <div className="flex items-center gap-3 text-sm">
                              <Calendar className="w-4 h-4 text-primary" />
                              <span className="text-muted-foreground">6+ Years in Digital Transformation</span>
                           </div>
                           <div className="flex items-center gap-3 text-sm">
                              <Briefcase className="w-4 h-4 text-primary" />
                              <span className="text-muted-foreground">3+ Years in UK Government Digital</span>
                           </div>
                           <div className="flex items-center gap-3 text-sm">
                              <Code className="w-4 h-4 text-primary" />
                              <span className="text-muted-foreground">Active GitHub Contributor<br />MIT License Advocate</span>
                           </div>
                        </div>
                     </div>

                     {/* Impact Metrics Card */}
                     <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-foreground mb-4">Community Impact</h3>
                        <div className="space-y-4">
                           {[
                              { value: 1200, suffix: '+', label: 'Toolkit Downloads/Month' },
                              { value: 200, suffix: '+', label: 'Active Users Globally' },
                              { value: 45, suffix: '+', label: 'Countries Reached' },
                              { value: 15000, suffix: '+', label: 'Hours Saved Annually' }
                           ].map((stat, i) => (
                              <div key={i} className="flex justify-between items-center">
                                 <span className="text-sm text-muted-foreground">{stat.label}</span>
                                 <span className="text-xl font-bold text-primary">
                                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                 </span>
                              </div>
                           ))}
                           <div className="flex justify-between items-center pt-2 border-t border-border">
                              <span className="text-sm text-muted-foreground">Estimated Cost Savings</span>
                              <span className="text-xl font-bold text-primary">£2.1M+</span>
                           </div>
                        </div>
                        <a
                           href="https://github.com/Erickuby"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all"
                        >
                           <Github className="w-4 h-4" />
                           View GitHub Profile
                        </a>
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* SECTION 2: The Turning Point Timeline */}
         <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Moment Everything Changed</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                     When I realized the problem wasn't lack of effort—it was systemic failure of traditional portfolio management approaches
                  </p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                     {
                        period: '2019-2020',
                        title: 'The Problem Phase',
                        icon: Target,
                        points: [
                           'Experienced first major budget overrun (£135K) due to delayed risk visibility',
                           'Observed teams spending 60% of time on data entry, 40% on actual management',
                           'Watched brilliant PMs burn out from administrative burden'
                        ]
                     },
                     {
                        period: '2021-2022',
                        title: 'The Solution Phase',
                        icon: Zap,
                        points: [
                           'Built first automation: Jira → ServiceNow sync reducing manual work by 8 hours/week',
                           'Created "Golden Standard Framework" for data quality governance',
                           'Trained 22+ Senior Civil Servants (G6/G7/SCS) in first cohort'
                        ]
                     },
                     {
                        period: '2023-2024',
                        title: 'The Scaling Phase',
                        icon: TrendingUp,
                        points: [
                           'Launched open-source toolkit on GitHub',
                           'Framework adopted by 200+ organizations',
                           'Automated solutions preventing £2.1M in potential overruns across user base'
                        ]
                     },
                     {
                        period: '2025→',
                        title: 'The Community Phase',
                        icon: Network,
                        points: [
                           'Building global community of portfolio managers',
                           'Speaking at conferences and government events',
                           'Contributing to the future of AI-powered portfolio management'
                        ]
                     }
                  ].map((phase, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all"
                     >
                        <div className="flex items-center gap-3 mb-4">
                           <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                              <phase.icon className="w-6 h-6 text-primary" />
                           </div>
                           <div>
                              <div className="text-xs text-primary font-semibold">{phase.period}</div>
                              <div className="text-sm font-bold text-foreground">{phase.title}</div>
                           </div>
                        </div>
                        <ul className="space-y-2">
                           {phase.points.map((point, j) => (
                              <li key={j} className="text-xs text-muted-foreground flex items-start gap-2">
                                 <ArrowRight className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                                 <span>{point}</span>
                              </li>
                           ))}
                        </ul>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* SECTION 3: Technical Expertise */}
         <section className="py-24 bg-secondary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                     Technical Stack & <span className="text-primary">Expertise</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                     Bridging portfolio management expertise with hands-on software development and AI integration
                  </p>
               </div>

               <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {[
                     {
                        icon: Brain,
                        title: 'AI & Automation',
                        skills: [
                           { category: 'Artificial Intelligence', items: ['GPT-4 API integration & prompt engineering', 'Claude API for intelligent data analysis', 'Custom AI agents with Human-in-the-Loop workflows', 'RAG (Retrieval Augmented Generation) systems', 'ML model integration for predictive analytics'] },
                           { category: 'Automation Platforms', items: ['n8n (Advanced workflows, 500+ hours experience)', 'Power Automate', 'Python scripting for ETL pipelines', 'Webhook architecture & event-driven systems'] }
                        ]
                     },
                     {
                        icon: Code,
                        title: 'Development & Data',
                        skills: [
                           { category: 'Programming Languages', items: ['Python (Pandas, NumPy, Flask, FastAPI)', 'JavaScript/TypeScript (React, Node.js)', 'SQL (PostgreSQL, MSSQL)', 'JSON schema design & validation'] },
                           { category: 'Data Engineering', items: ['Power BI (Advanced DAX, custom visuals)', 'REST API development & integration', 'ETL pipeline design', 'Real-time data synchronization', 'Data quality frameworks'] }
                        ]
                     },
                     {
                        icon: Cloud,
                        title: 'Enterprise Systems',
                        skills: [
                           { category: 'Platform Integration', items: ['ServiceNow (custom workflows, API)', 'Jira/Jira Align (automation, JQL)', 'SharePoint (Modern pages, Power Apps)', 'Microsoft 365 ecosystem', 'GitHub Actions (CI/CD pipelines)'] },
                           { category: 'Cloud & Infrastructure', items: ['Azure (Logic Apps, Functions)', 'Serverless architecture', 'Webhook security & authentication', 'Role-based access control (RBAC)'] }
                        ]
                     }
                  ].map((column, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
                     >
                        <div className="flex items-center gap-3 mb-6">
                           <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                              <column.icon className="w-6 h-6 text-primary" />
                           </div>
                           <h3 className="text-xl font-bold text-foreground">{column.title}</h3>
                        </div>
                        <div className="space-y-6">
                           {column.skills.map((skillGroup, j) => (
                              <div key={j}>
                                 <h4 className="text-sm font-semibold text-foreground mb-3">{skillGroup.category}</h4>
                                 <ul className="space-y-2">
                                    {skillGroup.items.map((item, k) => (
                                       <li key={k} className="flex items-start gap-2 text-xs text-muted-foreground">
                                          <CheckCircle2 className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                                          <span>{item}</span>
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                           ))}
                        </div>
                     </motion.div>
                  ))}
               </div>

               <div className="flex flex-wrap gap-4 justify-center">
                  <a
                     href="https://github.com/Erickuby"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all"
                  >
                     <Github className="w-4 h-4" />
                     View My GitHub Projects
                  </a>
                  <Link
                     to="/resources"
                     className="inline-flex items-center gap-2 px-6 py-3 bg-card hover:bg-muted text-foreground rounded-lg font-semibold border border-border transition-all"
                  >
                     <FileText className="w-4 h-4" />
                     Technical Writing Samples
                  </Link>
               </div>
            </div>
         </section>

         {/* SECTION 4: Certifications & Education */}
         <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                     Formal Credentials & <span className="text-primary">Continuous Learning</span>
                  </h2>
               </div>

               <div className="grid lg:grid-cols-2 gap-12">
                  {/* Certifications */}
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                  >
                     <h3 className="text-2xl font-bold text-foreground mb-8">Professional Certifications</h3>
                     <div className="space-y-6">
                        {[
                           { name: 'Registered Scrum Master', org: 'Agile Education by Scrum Inc.', year: '2022', badge: 'RSM' },
                           { name: 'Registered Product Owner', org: 'Agile Education by Scrum Inc.', year: '2022', badge: 'RPO' },
                           { name: 'ICP Agile Project Management', org: 'ICAgile', year: '2022', badge: 'ICP-APM' },
                           { name: 'Level 3 - Data Analysis', org: 'Skills Network Bootcamp', year: '2025', badge: 'DATA' },
                           { name: 'Frontend Web Development', org: 'edX Skills BootCamp', year: '2023', badge: 'FED' },
                           { name: 'Data Injection with Python', org: 'LinkedIn Learning', year: '2021', badge: 'PY' }
                        ].map((cert, i) => (
                           <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.05 }}
                              className="flex items-start gap-4 bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-all"
                           >
                              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 text-primary">
                                 <span className="text-xs font-bold text-primary">{cert.badge}</span>
                              </div>
                              <div className="flex-1">
                                 <h4 className="font-semibold text-foreground mb-1">{cert.name}</h4>
                                 <p className="text-sm text-muted-foreground">{cert.org} | {cert.year}</p>
                              </div>
                              <Award className="w-5 h-5 text-primary shrink-0" />
                           </motion.div>
                        ))}
                     </div>
                  </motion.div>

                  {/* Education */}
                  <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                  >
                     <h3 className="text-2xl font-bold text-foreground mb-8">Academic Background</h3>
                     <div className="bg-card border border-border rounded-2xl p-6 mb-8">
                        <div className="flex items-start gap-4">
                           <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                              <BookOpen className="w-6 h-6 text-primary" />
                           </div>
                           <div>
                              <h4 className="text-lg font-bold text-foreground mb-2">BSc. Mass Communication</h4>
                              <p className="text-muted-foreground mb-1">Enugu State University of Science and Technology</p>
                              <p className="text-sm text-muted-foreground">Nigeria</p>
                           </div>
                        </div>
                     </div>

                     <h3 className="text-xl font-bold text-foreground mb-6">Continuous Learning (2024-2025)</h3>
                     <div className="space-y-4">
                        {[
                           { title: 'Advanced AI Engineering (Self-taught)', desc: 'Building with GPT-4, Claude, LangChain' },
                           { title: 'Open-Source Contribution Best Practices', desc: 'GitHub collaboration, community management' },
                           { title: 'Speaking & Technical Writing', desc: 'Developing thought leadership in PM automation' }
                        ].map((learning, i) => (
                           <div key={i} className="flex items-start gap-3">
                              <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <div>
                                 <h4 className="font-semibold text-foreground">{learning.title}</h4>
                                 <p className="text-sm text-muted-foreground">{learning.desc}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* SECTION 5: Golden Standard Story */}
         <section className="py-24 bg-secondary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                     Building the Golden Standard: <span className="text-primary">A Case Study in Innovation</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                     How I identified a £135K problem and built an open-source solution now used by 200+ organizations
                  </p>
               </div>

               <div className="space-y-16">
                  {[
                     {
                        step: 1,
                        title: 'The Crisis',
                        content: 'Our H&D portfolio was reporting Green, but we were actually 3 months behind and £135K over budget. Why? Manual data chasing meant our reports were always 2-3 weeks out of date. By the time problems surfaced, they were too big to fix.',
                        align: 'left'
                     },
                     {
                        step: 2,
                        title: 'Root Cause Analysis',
                        content: 'I analyzed our data workflows and found 10+ critical fields were being populated manually. Teams didn\'t understand which fields mattered. There was no clear standard. Every portfolio manager had their own approach.',
                        align: 'right'
                     },
                     {
                        step: 3,
                        title: 'The Solution Architecture',
                        content: 'I designed the "Golden Standard Framework". A comprehensive data quality methodology that defined: exactly which fields drive executive decision-making, what "good" looks like for each field, how data quality maps to strategic risk, and self-service guidance so teams could fix issues themselves.',
                        align: 'left'
                     },
                     {
                        step: 4,
                        title: 'Scaling Across Government',
                        content: 'I trained 22 senior stakeholders (G6/G7/SCS) in Week 1. Created a SharePoint knowledge hub. Built automated workflows to reduce manual effort. Within 8 weeks: Outcome Population: 49% → 94%, Dependency data quality: 30% → 87%, Manual data chasing: 15 hours/week → 3 hours/week.',
                        align: 'right'
                     },
                     {
                        step: 5,
                        title: 'Open-Source Release',
                        content: 'I realized this wasn\'t just a DWP problem. It was an industry problem. So I open-sourced everything: complete framework documentation, implementation templates, training materials, and automation workflows. Today it\'s used by 200+ organizations globally.',
                        align: 'center'
                     }
                  ].map((phase, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`flex ${phase.align === 'center' ? 'justify-center' : phase.align === 'right' ? 'justify-end' : 'justify-start'}`}
                     >
                        <div className={`${phase.align === 'center' ? 'max-w-4xl' : 'max-w-2xl'} ${phase.align === 'center' ? 'bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30' : 'bg-card border border-border'} rounded-2xl p-8`}>
                           <div className="flex items-center gap-4 mb-4">
                              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                                 {phase.step}
                              </div>
                              <h3 className="text-2xl font-bold text-foreground">{phase.title}</h3>
                           </div>
                           <p className="text-muted-foreground leading-relaxed">{phase.content}</p>
                        </div>
                     </motion.div>
                  ))}
               </div>

               <div className="flex flex-wrap gap-4 justify-center mt-12">
                  <Link
                     to="/methodology"
                     className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all"
                  >
                     <Download className="w-4 h-4" />
                     Download the Framework
                  </Link>
                  <Link
                     to="/resources"
                     className="inline-flex items-center gap-2 px-6 py-3 bg-card hover:bg-muted text-foreground rounded-lg font-semibold border border-border transition-all"
                  >
                     <FileText className="w-4 h-4" />
                     Read the Case Study
                  </Link>
               </div>
            </div>
         </section>

         {/* SECTION 6: Community Contributions */}
         <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                     Open-Source Contributions & <span className="text-primary">Community Leadership</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                     Building tools, frameworks, and knowledge that benefit the entire portfolio management community
                  </p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                     {
                        icon: Github,
                        title: 'Active Open-Source Maintainer',
                        stats: ['3 Major Projects on GitHub', '1,200+ Downloads This Month', 'MIT Licensed & Community-Driven'],
                        projects: ['golden-standard-framework', 'n8n-pm-workflows', 'portfolio-health-analyzer'],
                        link: 'https://github.com/Erickuby',
                        linkText: 'View All Repos'
                     },
                     {
                        icon: FileText,
                        title: 'Technical Writing & Education',
                        stats: ['12+ In-Depth Articles Published', '3,000+ Monthly Readers', 'Topics: AI automation, data quality, enterprise PM'],
                        projects: ['Coming Soon: Featured Publications', 'Medium (Portfolio Intelligence)'],
                        link: '/resources',
                        linkText: 'Read My Writing',
                        badge: 'COMING SOON'
                     },
                     {
                        icon: Mic,
                        title: 'Speaking & Knowledge Sharing',
                        stats: ['Training 200+ Portfolio Professionals', '22 Senior Civil Servants (First Cohort)', 'Government-Wide Implementation'],
                        projects: ['Target: Civil Service Live', 'Target: GovTech Summit'],
                        link: '/contact',
                        linkText: 'Speaking Topics',
                        badge: 'COMING SOON'
                     },
                     {
                        icon: UsersIcon,
                        title: 'Community Building',
                        stats: ['200+ Active Users Globally', 'Weekly Office Hours', 'Open Contribution Guidelines'],
                        projects: ['Community Discord (Coming Soon)', 'LinkedIn Group', 'GitHub Discussions'],
                        link: 'https://github.com/Erickuby/portfolio-intelligence/discussions',
                        linkText: 'Join Community'
                     },
                     {
                        icon: Package,
                        title: 'Package Maintainer',
                        stats: ['npm: portfolio-pm-tools', 'PyPI: portfolio-health-analyzer', 'Semantic Versioning', 'Comprehensive Documentation'],
                        projects: ['$ npm install portfolio-pm-tools', '$ pip install portfolio-health-analyzer'],
                        link: '/toolkit',
                        linkText: 'Documentation',
                        badge: 'COMING SOON'
                     },
                     {
                        icon: Star,
                        title: 'Recognition & Impact',
                        stats: ['15,000+ Hours Saved Annually', '£2.1M+ Cost Reduction Across Users', '45+ Countries Reached', 'Industry Methodology Adopted'],
                        projects: ['Target: Civil Service Awards', 'Target: Digital Leaders 100'],
                        link: '/methodology',
                        linkText: 'See Impact Report'
                     }
                  ].map((card, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all relative"
                     >
                        {card.badge && (
                           <div className="absolute top-4 right-4 px-2 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 text-xs font-bold rounded-full">
                              {card.badge}
                           </div>
                        )}
                        <div className="flex items-center gap-3 mb-4">
                           <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <card.icon className="w-5 h-5 text-primary" />
                           </div>
                           <h3 className="text-lg font-bold text-foreground">{card.title}</h3>
                        </div>
                        <div className="space-y-2 mb-4">
                           {card.stats.map((stat, j) => (
                              <p key={j} className="text-sm text-muted-foreground">{stat}</p>
                           ))}
                        </div>
                        <div className="space-y-1 mb-4">
                           {card.projects.map((project, j) => (
                              <p key={j} className="text-xs text-muted-foreground font-mono">{project}</p>
                           ))}
                        </div>
                        {card.link.startsWith('http') ? (
                           <a
                              href={card.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center gap-1"
                           >
                              {card.linkText} <ArrowRight className="w-3 h-3" />
                           </a>
                        ) : (
                           <Link
                              to={card.link}
                              className="text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center gap-1"
                           >
                              {card.linkText} <ArrowRight className="w-3 h-3" />
                           </Link>
                        )}
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* SECTION 7: Philosophy */}
         <section className="py-24 bg-secondary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                     My Philosophy on <span className="text-primary">Portfolio Management & Technology</span>
                  </h2>
               </div>

               <div className="grid md:grid-cols-3 gap-8">
                  {[
                     {
                        icon: Unlock,
                        title: 'Open-Source > Proprietary',
                        content: 'Traditional PPM tools lock organizations into expensive, inflexible systems. Open-source means: Full transparency. You can see exactly how it works. Complete customization. Adapt to your workflow, not vice versa. Community improvement. Benefit from collective intelligence. Zero vendor lock-in. You own your automation forever. The best enterprise tools should be free and accessible to everyone, not just Fortune 500 companies.'
                     },
                     {
                        icon: UserCheck,
                        title: 'Human + AI > Human OR AI',
                        content: 'I don\'t believe in "AI replacing portfolio managers." I believe in AI amplifying their capabilities: AI handles data entry, synchronization, routine checks. Humans handle judgment, stakeholder management, strategic decisions. Human-in-the-Loop workflows keep humans in control. This is why all my automation includes approval gates. AI suggests, humans decide.'
                     },
                     {
                        icon: Network,
                        title: 'Community > Consulting',
                        content: 'I could have built a consulting business around these tools. Instead, I open-sourced everything because: A community of 200 improves the solution faster than any individual. Portfolio managers helping portfolio managers builds better practices. Shared knowledge compounds. Everyone benefits from everyone\'s improvements. This approach has created more value than any consulting engagement ever could.'
                     }
                  ].map((principle, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all"
                     >
                        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                           <principle.icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">{principle.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{principle.content}</p>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* SECTION 8: Career Timeline */}
         <section className="py-24 bg-background">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                     Career Journey: From Delivery Manager to <span className="text-primary">Innovation Leader</span>
                  </h2>
               </div>

               <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>

                  <div className="space-y-12">
                     {[
                        {
                           period: '',
                           title: 'Foundation in Digital Delivery',
                           role: 'Project Manager | Nigeria + UK',
                           points: [
                              'Led digital transformation projects in fintech and healthcare',
                              'First exposure to enterprise portfolio challenges',
                              'Identified gap between PM theory and practical reality'
                           ]
                        },
                        {
                           period: '',
                           title: 'Entering UK Government Digital',
                           role: 'Digital Portfolio Manager | DWP Digital',
                           points: [
                              'Promoted to SEO-level portfolio management role',
                              'First major challenge: £135K budget overrun due to data quality issues',
                              'Began building automation solutions to solve systemic problems'
                           ]
                        },
                        {
                           period: '',
                           title: 'Innovation & Scale',
                           role: 'Lead on Golden Standard Implementation | DWP Digital',
                           points: [
                              'Trained 22+ Senior Civil Servants (G6/G7/SCS)',
                              'Launched Golden Standard Framework across enterprise',
                              'Built n8n automation workflows reducing manual work by 15 hours/week',
                              'Achieved measurable impact: 49%→94% outcome population'
                           ]
                        },
                        {
                           period: '',
                           title: 'Open-Source Leadership',
                           role: 'Community Builder & Technical Innovator | DWP Digital + Open Source',
                           points: [
                              'Open-sourced all frameworks and tools',
                              '1,200+ downloads/month, 200+ active users globally',
                              'Expanded beyond government: private sector adoption',
                              'Building thought leadership: speaking, writing, community engagement'
                           ]
                        },
                        {
                           period: '',
                           title: 'Future Vision',
                           role: 'Scaling Impact',
                           points: [
                              'Scaling community to 1,000+ active contributors',
                              'Speaking at major PM and tech conferences globally',
                              'Continuing to advance AI-powered portfolio management',
                              'Making enterprise PM accessible to organizations of all sizes'
                           ]
                        }
                     ].map((phase, i) => (
                        <motion.div
                           key={i}
                           initial={{ opacity: 0, x: -20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: i * 0.1 }}
                           className="relative pl-20"
                        >
                           <div className="absolute left-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold border-4 border-background">
                              {i + 1}
                           </div>
                           <div className="bg-card border border-border rounded-2xl p-6">
                              <div className="text-xs text-primary font-semibold mb-1">{phase.period}</div>
                              <h3 className="text-xl font-bold text-foreground mb-2">{phase.title}</h3>
                              <p className="text-sm text-muted-foreground mb-4">{phase.role}</p>
                              <ul className="space-y-2">
                                 {phase.points.map((point, j) => (
                                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                                       <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                       <span>{point}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* SECTION 9: Skills Matrix */}
         <section className="py-24 bg-secondary/20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                     Skill Proficiency: Where <span className="text-primary">Technical Meets Strategic</span>
                  </h2>
               </div>

               <div className="bg-card border border-border rounded-2xl p-8">
                  {[
                     { skill: 'Portfolio Management Expertise', level: 95 },
                     { skill: 'AI Integration & Prompt Engineering', level: 90 },
                     { skill: 'Python Development & Automation', level: 85 },
                     { skill: 'Data Engineering & Analytics', level: 85 },
                     { skill: 'Enterprise System Integration (Jira, ServiceNow)', level: 90 },
                     { skill: 'n8n Workflow Development', level: 95 },
                     { skill: 'Power BI & Data Visualization', level: 80 },
                     { skill: 'Stakeholder Management (G6-SCS level)', level: 88 },
                     { skill: 'Technical Writing & Documentation', level: 75 },
                     { skill: 'Public Speaking & Training Delivery', level: 70 }
                  ].map((item, i) => (
                     <SkillBar key={i} skill={item.skill} level={item.level} />
                  ))}

                  <p className="text-xs text-muted-foreground mt-6 text-center">
                     Skill levels based on: Practical project delivery (hours of hands-on work) • Training delivered to others •
                     Community feedback and adoption metrics • Professional certifications
                  </p>
               </div>
            </div>
         </section>

         {/* SECTION 10: Current Projects */}
         <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                     Current Projects & <span className="text-primary">Future Plans</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                     What's next for Portfolio Intelligence and the community
                  </p>
               </div>

               <div className="grid lg:grid-cols-2 gap-8">
                  {/* Active Projects */}
                  <div>
                     <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <Sparkles className="w-6 h-6 text-primary" />
                        In Progress
                     </h3>
                     <div className="space-y-4">
                        {[
                           { title: 'Portfolio Health Analyzer v2.0', desc: 'Advanced predictive analytics using machine learning to forecast budget overruns 3 months in advance', timeline: 'Q1 2025', status: 'Beta Testing', color: 'yellow' },
                           { title: 'Community Discord Server', desc: 'Building central hub for 200+ portfolio managers to share workflows, ask questions, collaborate', timeline: 'December 2024', status: 'Setting Up', color: 'blue' },
                           { title: 'Video Tutorial Series', desc: 'Step-by-step implementation guides for every tool in the toolkit', timeline: 'Ongoing', status: '2 of 10 complete', color: 'blue' },
                           { title: 'Conference Speaking Circuit', desc: 'Targeting: Civil Service Live, GovTech Summit, PMO Conference', timeline: '2025', status: 'Proposals Submitted', color: 'blue' }
                        ].map((project, i) => (
                           <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.05 }}
                              className="bg-card border border-border rounded-xl p-4"
                           >
                              <div className="flex items-start justify-between mb-2">
                                 <h4 className="font-semibold text-foreground">{project.title}</h4>
                                 <span className={`px-2 py-1 text-xs font-medium rounded-full ${project.color === 'yellow' ? 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400' : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'}`}>
                                    {project.status}
                                 </span>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">{project.desc}</p>
                              <p className="text-xs text-muted-foreground">Timeline: {project.timeline}</p>
                           </motion.div>
                        ))}
                     </div>
                  </div>

                  {/* Future Vision */}
                  <div>
                     <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <Target className="w-6 h-6 text-primary" />
                        On the Horizon
                     </h3>
                     <div className="space-y-4">
                        {[
                           { title: 'Enterprise SaaS Version', desc: 'Hosted option for organizations that prefer managed service over self-hosting', timeline: 'Q2 2025' },
                           { title: 'Mobile Companion App', desc: 'Real-time portfolio health monitoring on iOS/Android', timeline: 'Q3 2025' },
                           { title: 'AI Co-Pilot for Portfolio Managers', desc: 'ChatGPT-style interface trained on portfolio management best practices', timeline: 'Research Phase' },
                           { title: 'Certification Program', desc: '"Certified Portfolio Intelligence Professional" training and credential', timeline: '2025-2026' }
                        ].map((project, i) => (
                           <motion.div
                              key={i}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.05 }}
                              className="bg-card border border-border rounded-xl p-4"
                           >
                              <div className="flex items-start justify-between mb-2">
                                 <h4 className="font-semibold text-foreground">{project.title}</h4>
                                 <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-500/10 text-gray-600 dark:text-gray-400">
                                    Planned
                                 </span>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">{project.desc}</p>
                              <p className="text-xs text-muted-foreground">Planned: {project.timeline}</p>
                           </motion.div>
                        ))}
                     </div>
                  </div>
               </div>

               <div className="flex flex-wrap gap-4 justify-center mt-12">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-medium">
                     <CheckCircle2 className="w-4 h-4" />
                     Verified Implementation
                  </div>
                  <Link
                     to="/toolkit"
                     className="inline-flex items-center gap-2 px-6 py-3 bg-card hover:bg-muted text-foreground rounded-lg font-semibold border border-border transition-all"
                  >
                     <Mail className="w-4 h-4" />
                     Subscribe to Newsletter
                  </Link>
               </div>
            </div>
         </section>

         {/* SECTION 11: Mission Statement */}
         <section className="py-24 bg-secondary/20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
               >
                  <h2 className="text-3xl font-bold text-foreground mb-12">My Mission</h2>

                  <blockquote className="text-2xl md:text-3xl font-light text-foreground leading-relaxed mb-8 italic">
                     "To make intelligent, AI-powered portfolio management accessible to every organization, regardless of budget.
                     <br /><br />
                     Portfolio managers shouldn't spend 60% of their time on data entry. They should spend it making strategic decisions.
                     <br /><br />
                     That's why everything I build is open-source, free forever, and designed to be extended by the community.
                     <br /><br />
                     The future of portfolio management is collaborative, transparent, and powered by AI that serves humans, not replaces them."
                  </blockquote>

                  <p className="text-lg text-muted-foreground">
                     Eric Nwankwo<br />
                     <span className="text-sm">Founder, Portfolio Intelligence</span>
                  </p>
               </motion.div>
            </div>
         </section>

         {/* SECTION 12: Let's Connect */}
         <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                     Let's Build the Future of <span className="text-primary">Portfolio Management Together</span>
                  </h2>
               </div>

               <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {[
                     {
                        icon: Code,
                        title: 'Contribute to the Project',
                        desc: 'Whether you\'re a developer, PM, or data analyst. Your contributions help thousands.',
                        links: ['Browse Open Issues', 'Submit a Pull Request', 'Suggest New Features', 'Share Your Workflow'],
                        cta: 'Start Contributing',
                        href: 'https://github.com/Erickuby/portfolio-intelligence'
                     },
                     {
                        icon: Mic,
                        title: 'Speaking & Collaboration',
                        desc: 'I speak at conferences, deliver workshops, and collaborate on research.',
                        links: ['AI-Powered Portfolio Management', 'Government Digital Transformation', 'Open-Source Enterprise Tools'],
                        cta: 'Invite Me to Speak',
                        href: '/contact'
                     },
                     {
                        icon: Mail,
                        title: 'Stay Connected',
                        desc: 'Get weekly insights, tool updates, and automation tips.',
                        links: ['Newsletter (2,000+ subscribers)', 'LinkedIn (Weekly posts)', 'Medium (Monthly articles)', 'GitHub (Daily commits)'],
                        cta: 'Follow My Work',
                        href: '/toolkit'
                     }
                  ].map((column, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all"
                     >
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                           <column.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{column.title}</h3>
                        <p className="text-muted-foreground mb-4">{column.desc}</p>
                        <ul className="space-y-2 mb-6">
                           {column.links.map((link, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                                 <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                 <span>{link}</span>
                              </li>
                           ))}
                        </ul>
                        {column.href.startsWith('http') ? (
                           <a
                              href={column.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all text-sm"
                           >
                              {column.cta} <ArrowRight className="w-4 h-4" />
                           </a>
                        ) : (
                           <Link
                              to={column.href}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all text-sm"
                           >
                              {column.cta} <ArrowRight className="w-4 h-4" />
                           </Link>
                        )}
                     </motion.div>
                  ))}
               </div>

               {/* Social Links */}
               <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-6">Connect With Me</h3>
                  <div className="flex justify-center gap-4">
                     {[
                        { icon: Github, href: 'https://github.com/Erickuby', label: 'GitHub' },
                        { icon: Linkedin, href: 'https://linkedin.com/in/eric-nwankwo', label: 'LinkedIn' },
                        { icon: FileText, href: '/resources', label: 'Blog' },
                        { icon: Mail, href: '/contact', label: 'Email' }
                     ].map((social, i) => (
                        <a
                           key={i}
                           href={social.href}
                           target={social.href.startsWith('http') ? '_blank' : undefined}
                           rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                           className="w-12 h-12 bg-card hover:bg-primary border border-border hover:border-primary rounded-lg flex items-center justify-center transition-all group"
                           aria-label={social.label}
                        >
                           <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                        </a>
                     ))}
                  </div>
               </div>
            </div>
         </section>

      </div>
   );
};
