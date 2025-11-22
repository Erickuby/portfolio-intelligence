import React from 'react';
import { motion } from 'framer-motion';

export const Privacy: React.FC = () => {
    return (
        <div className="bg-background min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="prose prose-invert prose-lg mx-auto"
                >
                    <h1 className="text-4xl font-display font-bold text-foreground mb-8">Privacy Policy</h1>
                    <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Introduction</h2>
                    <p className="text-muted-foreground">
                        Welcome to Portfolio Intelligence. We respect your privacy and are committed to protecting your personal data.
                        This privacy policy will inform you as to how we look after your personal data when you visit our website
                        (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Data We Collect</h2>
                    <p className="text-muted-foreground">
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground my-4">
                        <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data</strong> includes email address and telephone number.</li>
                        <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. How We Use Your Data</h2>
                    <p className="text-muted-foreground">
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground my-4">
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                        <li>Where we need to comply with a legal or regulatory obligation.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Data Security</h2>
                    <p className="text-muted-foreground">
                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Contact Us</h2>
                    <p className="text-muted-foreground">
                        If you have any questions about this privacy policy or our privacy practices, please contact us at: support@portfolio-intelligence.com
                    </p>
                </motion.div>
            </div>
        </div>
    );
};
