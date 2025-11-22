import React from 'react';
import { motion } from 'framer-motion';
import { LATEST_POSTS } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { cn } from '../lib/utils';

export const Resources: React.FC = () => {
    return (
        <div className="bg-background min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-display font-bold text-foreground mb-4"
                    >
                        Latest Insights
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl mx-auto"
                    >
                        Strategies, frameworks, and code. Real-world insights from enterprise portfolio management and automation.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {LATEST_POSTS.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all group shadow-sm hover:shadow-md"
                        >
                            <Link to={`/blog/${post.id}`} className="block">
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                                        <span className={cn(
                                            "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                                            post.category === 'Methodology' ? 'bg-blue-500/20 text-blue-600' :
                                                post.category === 'Automation' ? 'bg-purple-500/20 text-purple-600' :
                                                    'bg-green-500/20 text-green-600'
                                        )}>
                                            {post.category}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-muted-foreground mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                                        <div className="flex items-center gap-4">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {post.readTime}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                                        Read more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>

            </div>
        </div>
    );
};
