import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Mail, User, Building2, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
    const [searchParams] = useSearchParams();
    const serviceType = searchParams.get('service') || 'general';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: serviceType === 'discovery' ? 'Book Discovery Session' : serviceType === 'quote' ? 'Request Quote' : 'General Inquiry',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (serviceType === 'discovery') {
            setFormData(prev => ({ ...prev, service: 'Book Discovery Session' }));
        } else if (serviceType === 'quote') {
            setFormData(prev => ({ ...prev, service: 'Request Quote' }));
        }
    }, [serviceType]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setSubmitted(true);
        setIsSubmitting(false);

        // Reset form after 5 seconds
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '',
                email: '',
                company: '',
                service: formData.service,
                message: ''
            });
        }, 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="bg-background min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                        {serviceType === 'discovery' ? 'Book a Discovery Session' :
                            serviceType === 'quote' ? 'Request a Quote' :
                                'Get in Touch'}
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        {serviceType === 'discovery'
                            ? 'Schedule a free 30-minute consultation to discuss your portfolio management challenges and explore how we can help.'
                            : serviceType === 'quote'
                                ? 'Tell us about your project and we\'ll provide a detailed proposal tailored to your needs.'
                                : 'Have questions? We\'re here to help. Fill out the form below and we\'ll get back to you within 24 hours.'}
                    </p>
                </motion.div>

                {submitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-green-500/10 border border-green-500/20 rounded-2xl p-12 text-center"
                    >
                        <CheckCircle2 className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-6" />
                        <h2 className="text-2xl font-bold text-foreground mb-3">Thank You!</h2>
                        <p className="text-muted-foreground text-lg mb-2">
                            We've received your {formData.service.toLowerCase()}.
                        </p>
                        <p className="text-muted-foreground">
                            We'll get back to you at <span className="font-semibold text-foreground">{formData.email}</span> within 24 hours.
                        </p>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                    Full Name *
                                </label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="John Smith"
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                    Work Email *
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="john.smith@company.com"
                                    />
                                </div>
                            </div>

                            {/* Company Field */}
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                                    Company *
                                </label>
                                <div className="relative">
                                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        required
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="Acme Corporation"
                                    />
                                </div>
                            </div>

                            {/* Service Type Dropdown */}
                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                                    Service Type *
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    required
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                >
                                    <option value="Book Discovery Session">Book Discovery Session</option>
                                    <option value="Request Quote">Request Quote</option>
                                    <option value="Strategic Advisory">Strategic Advisory</option>
                                    <option value="Executive Workshop">Executive Workshop</option>
                                    <option value="Custom Automation">Custom Automation</option>
                                    <option value="General Inquiry">General Inquiry</option>
                                </select>
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                    Message *
                                </label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                                        placeholder="Tell us about your portfolio management challenges, team size, current tools, and what you're looking to achieve..."
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg rounded-xl transition-all shadow-lg hover:shadow-primary/25 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </button>

                            <p className="text-sm text-muted-foreground text-center">
                                We respect your privacy. Your information will never be shared with third parties.
                            </p>
                        </form>
                    </motion.div>
                )}

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-12 grid md:grid-cols-3 gap-6"
                >
                    <div className="text-center p-6 bg-card/50 rounded-xl border border-border">
                        <div className="text-3xl font-bold text-primary mb-2">24h</div>
                        <div className="text-sm text-muted-foreground">Response Time</div>
                    </div>
                    <div className="text-center p-6 bg-card/50 rounded-xl border border-border">
                        <div className="text-3xl font-bold text-primary mb-2">Free</div>
                        <div className="text-sm text-muted-foreground">Discovery Session</div>
                    </div>
                    <div className="text-center p-6 bg-card/50 rounded-xl border border-border">
                        <div className="text-3xl font-bold text-primary mb-2">100%</div>
                        <div className="text-sm text-muted-foreground">Confidential</div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};
