import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users, GraduationCap, Lightbulb, Download, Calendar, Mail,
  CheckCircle2, ArrowRight, Code, Zap, Network, Unlock,
  Target, Clock, TrendingUp, Shield, FileText, MessageSquare,
  ChevronDown, ChevronUp, AlertCircle, Star, Award, Phone, Activity
} from 'lucide-react';
import { ROICalculator } from '../components/ROICalculator';

export const Services: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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
            Ways to Engage with <span className="text-primary">Portfolio Intelligence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground text-center max-w-4xl mx-auto mb-12"
          >
            From free open-source tools to custom innovation partnerships. Choose the engagement model that fits your organization's needs.
            All paid work directly funds continued development of free community resources.
          </motion.p>

          {/* Community-First Philosophy Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto bg-card border-2 border-brand-teal/30 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-brand-teal" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Community-First Philosophy</h2>
            </div>

            <p className="text-muted-foreground mb-6">Every paid engagement includes:</p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                'Open-source contributions back to the community',
                'Documentation shared publicly',
                'Generic solutions released under MIT license',
                'Knowledge transfer that enables independence'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground italic">
              Revenue from paid work funds: hosting costs, tool development, documentation, and community support. Keeping core tools free forever.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Engagement Models (Three-Tier Structure) */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your <span className="text-primary">Engagement Level</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* TIER 1: Community (FREE) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border-2 border-brand-teal rounded-2xl p-8 relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-teal text-white text-sm font-bold rounded-full">
                FREE FOREVER
              </div>

              <div className="flex items-center gap-3 mb-4 mt-2">
                <div className="w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-brand-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Open-Source Community</h3>
                  <p className="text-sm text-muted-foreground">Free Forever</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                <strong className="text-foreground">Perfect for:</strong> Individual PMs, small teams, DIY organizations
              </p>

              <div className="space-y-3 mb-6">
                <p className="text-sm font-semibold text-foreground">What's Included:</p>
                {[
                  'Complete toolkit (n8n workflows, Python scripts, templates)',
                  'Full documentation and implementation guides',
                  'Community Discord access for peer support',
                  'GitHub issues support (community-answered)',
                  'Weekly automation tips newsletter',
                  'All future updates and new tools',
                  'MIT license - use commercially without restriction'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mb-6 p-4 bg-secondary/30 rounded-lg">
                <p className="text-xs font-semibold text-foreground mb-2">Who This Works For:</p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>→ Portfolio managers implementing tools themselves</li>
                  <li>→ Organizations with technical capability in-house</li>
                  <li>→ Teams wanting maximum flexibility</li>
                  <li>→ Anyone who values open-source and independence</li>
                </ul>
              </div>

              <Link
                to="/toolkit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-teal hover:bg-brand-teal/90 text-white rounded-lg font-semibold transition-all mb-3"
              >
                Get Free Toolkit
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://github.com/Erickuby/portfolio-intelligence/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-card hover:bg-muted text-foreground rounded-lg font-semibold border border-border transition-all text-sm"
              >
                Join Community Discord
              </a>

              <p className="text-xs text-center text-muted-foreground mt-4">
                Current Community: 1,200+ members globally
              </p>
            </motion.div>

            {/* TIER 2: Guided Implementation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border-2 border-primary rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Knowledge Transfer Workshops</h3>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                <strong className="text-foreground">Perfect for:</strong> Teams implementing enterprise-wide, accelerated rollout
              </p>

              <div className="space-y-3 mb-6">
                <p className="text-sm font-semibold text-foreground">What's Included:</p>
                {[
                  'Everything in Community tier',
                  'On-site or virtual training workshops (4-8 hours)',
                  'Tailored to your organization\'s specific context',
                  'Hands-on implementation guidance',
                  'Q&A with expert',
                  '30-day post-workshop support via email',
                  'Custom implementation roadmap for your org',
                  'Access to private workshop alumni group'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mb-6 p-4 bg-secondary/30 rounded-lg">
                <p className="text-xs font-semibold text-foreground mb-2">Workshop Topics:</p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>→ Golden Standard Framework Implementation</li>
                  <li>→ Building AI-Powered Portfolio Automation</li>
                  <li>→ Human-in-the-Loop Workflows for Government</li>
                  <li>→ Power BI Dashboard Development for PMs</li>
                  <li>→ n8n Automation Masterclass</li>
                </ul>
              </div>

              <div className="mb-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-xs font-semibold text-foreground mb-2">Commitment to Community:</p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>→ Generic portions contributed to open-source library</li>
                  <li>→ Anonymized case study shared with community</li>
                  <li>→ Workshop materials become free tutorials after 6 months</li>
                </ul>
              </div>

              <Link
                to="/contact?type=workshop"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all mb-3"
              >
                View Workshop Topics
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact?type=quote"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-card hover:bg-muted text-foreground rounded-lg font-semibold border border-border transition-all text-sm"
              >
                Request Workshop Quote
              </Link>

              <p className="text-xs text-center text-muted-foreground mt-4">
                Organizations Trained: 12+ teams across government and private sector
              </p>
            </motion.div>

            {/* TIER 3: Innovation Partnership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border-2 border-purple-500/50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Custom Innovation Projects</h3>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                <strong className="text-foreground">Perfect for:</strong> Complex problems, novel solutions, advancing the state of the art
              </p>

              <div className="space-y-3 mb-6">
                <p className="text-sm font-semibold text-foreground">What's Included:</p>
                {[
                  'Everything in previous tiers',
                  'Custom solution design and development',
                  'Direct collaboration on your specific challenge',
                  'Integration with your existing systems',
                  'Full source code and IP transfer',
                  'Training your team to maintain the solution',
                  '90-day post-launch support',
                  'Priority feature requests for open-source tools'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mb-6 p-4 bg-secondary/30 rounded-lg">
                <p className="text-xs font-semibold text-foreground mb-2">Example Projects:</p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>→ AI-powered risk prediction models</li>
                  <li>→ Custom integration between legacy systems</li>
                  <li>→ Advanced data quality automation frameworks</li>
                  <li>→ Bespoke portfolio health dashboards</li>
                  <li>→ Intelligent dependency mapping systems</li>
                </ul>
              </div>

              <div className="mb-6 p-4 bg-purple-500/5 border border-purple-500/20 rounded-lg">
                <p className="text-xs font-semibold text-foreground mb-2">Commitment to Community:</p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>→ Generic components released as open-source (70-80% typically)</li>
                  <li>→ Learnings documented and shared publicly</li>
                  <li>→ New patterns/frameworks added to community library</li>
                  <li>→ Your organization credited in documentation (optional)</li>
                </ul>
              </div>

              <Link
                to="/contact?type=innovation"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition-all mb-3"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/resources"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-card hover:bg-muted text-foreground rounded-lg font-semibold border border-border transition-all text-sm"
              >
                See Past Innovation Projects
              </Link>

              <p className="text-xs text-center text-muted-foreground mt-4">
                Innovation Partners: 5+ organizations (government, finance, healthcare)
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Why Organizations Choose Partnership */}
      <section className="py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Organizations Partner with <span className="text-primary">Portfolio Intelligence</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              It's not just about getting solutions. It's about contributing to the future of portfolio management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: 'Deep Expertise from the Frontlines',
                desc: 'Not theoretical consulting. Practical solutions battle-tested in complex government environments managing £5.3M portfolios.',
                points: [
                  '£135K budget overrun prevention',
                  '15 hours/week manual work elimination',
                  'Data quality: 49% → 94% in 8 weeks'
                ]
              },
              {
                icon: Zap,
                title: 'Rapid Implementation',
                desc: 'No 12-month "transformation programs." Get working solutions in weeks, not quarters.',
                points: [
                  'Workshop delivery: 1 day',
                  'Automation pilot: 2-3 weeks',
                  'Full rollout: 6-8 weeks'
                ]
              },
              {
                icon: Network,
                title: 'You Benefit, Community Benefits',
                desc: 'When you work with Portfolio Intelligence, your challenges improve tools for 1,200+ other PMs globally.',
                points: [
                  'Anonymized case studies',
                  'Generic workflow patterns',
                  'Lessons learned documentation',
                  'Real-world testing of new features'
                ]
              },
              {
                icon: Unlock,
                title: 'Enable Independence, Not Dependency',
                desc: 'Unlike traditional consultants, I aim to make you independent. Not dependent on ongoing consulting.',
                points: [
                  'Full source code ownership',
                  'Training to maintain systems yourself',
                  'Documentation for future team members',
                  'Community support after I\'m gone'
                ]
              }
            ].map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground mb-4">{reason.desc}</p>
                <div className="space-y-2">
                  {reason.points.map((point, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 5: ROI Calculator */}
      <section className="py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Calculate Your Organization's <span className="text-primary">Potential Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Based on real implementation data from 200+ portfolio teams who've adopted these tools
            </p>
          </div>

          <ROICalculator />

          <p className="text-xs text-center text-muted-foreground mt-8 max-w-3xl mx-auto">
            * Calculations based on average results from 200+ implementations: Average 70% reduction in manual reporting time •
            Average 85% improvement in data quality • Typical implementation time: 3-6 weeks • Data updated quarterly from community feedback
          </p>
        </div>
      </section>

      {/* SECTION 6: FAQ */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Common Questions About <span className="text-primary">Working Together</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How is this different from hiring a traditional consultant?',
                a: 'Traditional consultants create dependency, lock knowledge in proprietary methods, use hourly billing, and provide black-box solutions. Portfolio Intelligence enables independence, makes everything open-source and documented, uses fixed pricing, provides full transparency and source code access, and ensures the community benefits from your engagement.'
              },
              {
                q: 'What if my organization can\'t afford paid engagement?',
                a: 'Use the free Community tier! It includes: Complete toolkit with all templates • Full documentation • Community support via Discord • Regular updates and new features. 1,200+ organizations use the free tier successfully. Paid engagements are optional acceleration, not requirements.'
              },
              {
                q: 'Can you guarantee specific results?',
                a: 'I guarantee delivery of agreed scope and quality, knowledge transfer enabling independence, and 90 days of post-launch support. I cannot guarantee specific percentage improvements because results depend on your team\'s adoption, organizational culture, and your specific context. That said, typical results are: 60-80% reduction in manual reporting time • 40-60% improvement in data quality • ROI payback in 3-6 weeks.'
              },
              {
                q: 'Who owns the IP and code?',
                a: 'You own 100% of custom work specific to your organization. Generic components (70-80% typically) are dual-licensed: You get proprietary rights + we release open-source. You benefit from community improvements to shared components. We attribute your organization (optional) in documentation. Full IP terms provided in SOW before you commit.'
              },
              {
                q: 'What\'s your availability and timeline?',
                a: 'Current booking: Workshops: 4-6 weeks lead time • Innovation projects: 6-8 weeks lead time. I work with a limited number of partners to maintain quality. If I\'m at capacity, I\'ll recommend trusted community members, suggest starting with free tools + community support, or offer to join waitlist for next availability.'
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-secondary/30 transition-colors"
                >
                  <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                  {expandedFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                  )}
                </button>
                {expandedFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Final CTA */}
      <section className="py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your <span className="text-primary">Portfolio Management?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose your starting point. Free community tools or accelerated partnership
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-brand-teal" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Start with Free Tools</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Perfect if you want to explore at your own pace, have technical capability in-house, prefer DIY implementation, or value maximum flexibility.
              </p>
              <Link
                to="/toolkit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-teal hover:bg-brand-teal/90 text-white rounded-lg font-semibold transition-all w-full mb-3"
              >
                Get Free Toolkit
              </Link>
              <a
                href="https://github.com/Erickuby/portfolio-intelligence/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary/80 font-medium"
              >
                Join Community
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Book a Discovery Call</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Perfect if you want expert guidance, need faster implementation, have specific challenges, or are considering workshop or partnership.
              </p>
              <Link
                to="/contact?type=discovery"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all w-full mb-3"
              >
                Schedule Call
              </Link>
              <a
                href="https://calendly.com/eric-nwankwo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary/80 font-medium"
              >
                See My Calendar
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Stay Connected</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Get weekly insights: Automation case studies • New tool releases • Implementation tips • Community highlights
              </p>
              <div className="flex gap-2 mb-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition-all">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-muted-foreground">2,000+ subscribers</p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};