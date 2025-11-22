import React from 'react';
import { motion } from 'framer-motion';

export const Affiliate: React.FC = () => {
    return (
        <div className="bg-background min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="prose prose-invert prose-lg mx-auto"
                >
                    <h1 className="text-4xl font-display font-bold text-foreground mb-8">Affiliate Disclosure</h1>
                    <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

                    <div className="bg-secondary/20 border border-primary/20 rounded-xl p-6 mb-8">
                        <p className="text-foreground font-medium">
                            <strong>Transparency is important to us.</strong> This page explains how we make money and how it affects you.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What is an Affiliate Link?</h2>
                    <p className="text-muted-foreground">
                        Some of the links on Portfolio Intelligence are "affiliate links", a link with a special tracking code. This means if you click on an affiliate link and purchase the item, we will receive an affiliate commission.
                    </p>
                    <p className="text-muted-foreground mt-4">
                        The price of the item is the same whether it is an affiliate link or not. Regardless, we only recommend products or services we believe will add value to our readers.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Our Commitment</h2>
                    <p className="text-muted-foreground">
                        We are committed to providing honest, unbiased reviews and recommendations. Our reputation is more important than any commission. We have personally used or thoroughly researched every tool and service we recommend on this site.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Amazon Affiliate Disclosure</h2>
                    <p className="text-muted-foreground">
                        Portfolio Intelligence is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and affiliated sites.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Questions?</h2>
                    <p className="text-muted-foreground">
                        If you have any questions regarding the above, please do not hesitate to contact us by using the contact page.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};
