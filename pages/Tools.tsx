import React from 'react';
import { motion } from 'framer-motion';
import { TOOLS_DATA } from '../constants';
import { Check, X, Minus } from 'lucide-react';
import { cn } from '../lib/utils';

export const Tools: React.FC = () => {
    return (
        <div className="bg-[#18181B] min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-display font-bold text-[#FAFAFA] mb-4"
                    >
                        Enterprise Tool Analysis
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-400 max-w-2xl mx-auto"
                    >
                        A deep dive into the most popular portfolio management and automation tools.
                        Based on real-world implementation experience in large-scale enterprise environments.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-[#27272A] rounded-2xl border border-[rgba(251,146,60,0.2)] overflow-hidden shadow-lg"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#3F3F46] text-zinc-300 text-sm uppercase tracking-wider border-b border-zinc-700">
                                    <th className="p-6 font-medium w-1/4">Tool</th>
                                    <th className="p-6 font-medium w-1/4">AI Capability</th>
                                    <th className="p-6 font-medium w-1/6">Enterprise Fit</th>
                                    <th className="p-6 font-medium w-1/6">Cost</th>
                                    <th className="p-6 font-medium w-1/4">Verdict</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-700 text-zinc-400">
                                {TOOLS_DATA.map((tool, idx) => (
                                    <tr key={idx} className={cn("hover:bg-[#3F3F46] transition-colors", tool.recommended ? 'bg-brand-orange/5' : '')}>
                                        <td className="p-6">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-[#FAFAFA] text-lg flex items-center gap-2">
                                                    {tool.name}
                                                    {tool.recommended && (
                                                        <span className="px-2 py-0.5 rounded-full bg-brand-orange text-white text-[10px] uppercase font-bold">
                                                            Top Pick
                                                        </span>
                                                    )}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="p-6">
                                            <span className="block text-[#FAFAFA] font-medium mb-1">{tool.aiFeatures}</span>
                                        </td>
                                        <td className="p-6">
                                            <span className={cn(
                                                "px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1",
                                                tool.enterprise === 'Excellent' ? 'bg-brand-green/20 text-brand-green' :
                                                    tool.enterprise === 'High' ? 'bg-brand-orange/20 text-brand-orange' : 'bg-yellow-500/20 text-yellow-500'
                                            )}>
                                                {tool.enterprise === 'Excellent' && <Check className="w-3 h-3" />}
                                                {tool.enterprise}
                                            </span>
                                        </td>
                                        <td className="p-6 font-mono text-[#FAFAFA]">{tool.price}</td>
                                        <td className="p-6 text-sm italic border-l border-zinc-700 bg-[#18181B]/50">
                                            "{tool.verdict}"
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                <div className="mt-16 grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#27272A] p-8 rounded-2xl border border-[rgba(251,146,60,0.1)]"
                    >
                        <h3 className="text-xl font-bold text-[#FAFAFA] mb-4">Selection Criteria</h3>
                        <ul className="space-y-3 text-zinc-400">
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                                <span><strong>Scalability:</strong> Can it handle 500+ users and millions in portfolio value?</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                                <span><strong>Security:</strong> Does it meet enterprise compliance standards (SSO, Data Residency)?</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                                <span><strong>Integration:</strong> How easily does it connect with existing legacy systems?</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-[#27272A] to-[#18181B] p-8 rounded-2xl border border-[rgba(251,146,60,0.1)]"
                    >
                        <h3 className="text-xl font-bold text-[#FAFAFA] mb-4">Need a Custom Recommendation?</h3>
                        <p className="text-zinc-400 mb-6">
                            Every organization is unique. I can help you select the right toolstack for your specific maturity level and budget.
                        </p>
                        <a href="#/services" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-brand-orange text-white font-semibold hover:bg-brand-orange/90 transition-colors shadow-[0_0_20px_rgba(251,146,60,0.3)]">
                            Book a Tool Audit
                        </a>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};
