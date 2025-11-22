import React from 'react';
import { motion } from 'framer-motion';

export const Terms: React.FC = () => {
    return (
        <div className="bg-background min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="prose prose-invert prose-lg mx-auto"
                >
                    <h1 className="text-4xl font-display font-bold text-foreground mb-8">Terms of Service</h1>
                    <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Agreement to Terms</h2>
                    <p className="text-muted-foreground">
                        By accessing our website at Portfolio Intelligence, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Use License</h2>
                    <p className="text-muted-foreground">
                        Permission is granted to temporarily download one copy of the materials (information or software) on Portfolio Intelligence's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground my-4">
                        <li>modify or copy the materials;</li>
                        <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                        <li>attempt to decompile or reverse engineer any software contained on Portfolio Intelligence's website;</li>
                        <li>remove any copyright or other proprietary notations from the materials; or</li>
                        <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Disclaimer</h2>
                    <p className="text-muted-foreground">
                        The materials on Portfolio Intelligence's website are provided on an 'as is' basis. Portfolio Intelligence makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Limitations</h2>
                    <p className="text-muted-foreground">
                        In no event shall Portfolio Intelligence or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Portfolio Intelligence's website, even if Portfolio Intelligence or a Portfolio Intelligence authorized representative has been notified orally or in writing of the possibility of such damage.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Governing Law</h2>
                    <p className="text-muted-foreground">
                        These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};
