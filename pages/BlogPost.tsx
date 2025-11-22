import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LATEST_POSTS } from '../constants';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { cn } from '../lib/utils';

export const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const post = LATEST_POSTS.find(p => p.id === id);

    useEffect(() => {
        // SEO: Update page title and meta description
        if (post) {
            document.title = `${post.title} | Portfolio Intelligence`;

            // Update meta description
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', post.excerpt);
            } else {
                const meta = document.createElement('meta');
                meta.name = 'description';
                meta.content = post.excerpt;
                document.head.appendChild(meta);
            }
        }

        // Cleanup: Reset title on unmount
        return () => {
            document.title = 'Portfolio Intelligence';
        };
    }, [post]);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    // Simple markdown parser for blog content
    const renderContent = (content: string) => {
        return content.split('\n').map((line, index) => {
            // Headers
            if (line.startsWith('# ')) {
                return <h1 key={index} className="text-4xl font-bold text-foreground mt-12 mb-6 first:mt-0">{line.slice(2)}</h1>;
            }
            if (line.startsWith('## ')) {
                return <h2 key={index} className="text-3xl font-bold text-foreground mt-10 mb-4">{line.slice(3)}</h2>;
            }
            if (line.startsWith('### ')) {
                return <h3 key={index} className="text-2xl font-bold text-foreground mt-8 mb-3">{line.slice(4)}</h3>;
            }

            // Bold text
            if (line.startsWith('**') && line.endsWith('**')) {
                return <p key={index} className="text-foreground font-bold mt-4 mb-2">{line.slice(2, -2)}</p>;
            }

            // Lists
            if (line.startsWith('- ')) {
                return <li key={index} className="text-muted-foreground ml-6 mb-2 list-disc">{line.slice(2)}</li>;
            }

            // Code blocks
            if (line.startsWith('```')) {
                return null; // Skip code fence markers
            }

            // Empty lines
            if (line.trim() === '') {
                return <div key={index} className="h-4" />;
            }

            // Regular paragraphs
            return <p key={index} className="text-muted-foreground leading-relaxed mb-4">{line}</p>;
        });
    };

    return (
        <div className="bg-background min-h-screen py-20">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Button */}
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to all posts
                </Link>

                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className={cn(
                            "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                            post.category === 'Methodology' ? 'bg-blue-500/20 text-blue-600' :
                                post.category === 'Automation' ? 'bg-purple-500/20 text-purple-600' :
                                    'bg-green-500/20 text-green-600'
                        )}>
                            {post.category}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-6 text-muted-foreground">
                        <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                        </span>
                        {post.author && (
                            <span className="text-foreground font-medium">
                                By {post.author}
                            </span>
                        )}
                    </div>
                </motion.header>

                {/* Featured Image */}
                {post.image && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="mb-12 rounded-2xl overflow-hidden border border-border"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-auto"
                            onError={(e) => {
                                // Fallback if image doesn't exist
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                    </motion.div>
                )}

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="blog-content">
                        {post.content ? renderContent(post.content) : <p className="text-muted-foreground">{post.excerpt}</p>}
                    </div>
                </motion.div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="border-t border-border pt-8"
                    >
                        <div className="flex items-center gap-3 flex-wrap">
                            <Tag className="w-4 h-4 text-muted-foreground" />
                            {post.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 rounded-full bg-secondary text-foreground text-sm font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Related Posts CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 p-8 bg-gradient-to-br from-secondary to-background rounded-2xl border border-border text-center"
                >
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                        Want More Insights?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                        Get the AI-Powered PM Toolkit with 10 workflow templates and 25 GPT prompts.
                    </p>
                    <Link
                        to="/toolkit"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                    >
                        Get Free Toolkit
                    </Link>
                </motion.div>

            </article>
        </div>
    );
};
