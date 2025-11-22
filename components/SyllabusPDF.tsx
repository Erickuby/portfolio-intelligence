import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontSize: 11,
        fontFamily: 'Helvetica',
    },
    header: {
        marginBottom: 30,
        borderBottom: '3pt solid #3b82f6',
        paddingBottom: 15,
    },
    logo: {
        fontSize: 18,
        color: '#3b82f6',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1e293b',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: '#3b82f6',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    tagline: {
        fontSize: 10,
        color: '#64748b',
        marginTop: 5,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1e293b',
        marginBottom: 10,
    },
    infoBox: {
        backgroundColor: '#f1f5f9',
        padding: 15,
        borderRadius: 5,
        marginBottom: 20,
    },
    infoGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    infoItem: {
        width: '48%',
        marginBottom: 8,
    },
    infoLabel: {
        fontSize: 9,
        color: '#475569',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 3,
    },
    infoValue: {
        fontSize: 10,
        color: '#1e293b',
    },
    module: {
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        borderRadius: 5,
    },
    moduleHeader: {
        backgroundColor: '#3b82f6',
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    moduleNumber: {
        backgroundColor: 'white',
        color: '#3b82f6',
        width: 30,
        height: 30,
        borderRadius: 5,
        textAlign: 'center',
        lineHeight: 30,
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 10,
    },
    moduleTitle: {
        fontSize: 13,
        color: 'white',
        fontWeight: 'bold',
        flex: 1,
    },
    moduleDuration: {
        fontSize: 10,
        color: 'white',
    },
    moduleContent: {
        padding: 12,
    },
    subsectionTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#1e293b',
        textTransform: 'uppercase',
        marginTop: 10,
        marginBottom: 5,
    },
    listItem: {
        fontSize: 9,
        color: '#475569',
        marginBottom: 4,
        paddingLeft: 10,
    },
    outcomeBox: {
        backgroundColor: '#f8fafc',
        padding: 15,
        borderRadius: 5,
        marginBottom: 20,
    },
    outcomeGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    outcomeItem: {
        width: '48%',
        marginBottom: 8,
    },
    outcomeText: {
        fontSize: 9,
        color: '#475569',
    },
    footer: {
        marginTop: 30,
        paddingTop: 15,
        borderTop: '2pt solid #e2e8f0',
        textAlign: 'center',
    },
    footerText: {
        fontSize: 9,
        color: '#64748b',
        marginBottom: 3,
    },
});

interface SyllabusPDFProps {
    modules: Array<{
        number: number;
        title: string;
        duration: string;
        lessons: string[];
        objectives: string[];
    }>;
}

export const SyllabusPDF: React.FC<SyllabusPDFProps> = ({ modules }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.logo}>Portfolio Intelligence</Text>
                <Text style={styles.title}>AI-Powered Portfolio Management</Text>
                <Text style={styles.subtitle}>Masterclass</Text>
                <Text style={styles.tagline}>
                    Transform from traditional portfolio manager to AI-powered portfolio leader
                </Text>
            </View>

            {/* Course Information */}
            <View style={styles.infoBox}>
                <Text style={styles.sectionTitle}>Course Information</Text>
                <View style={styles.infoGrid}>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoLabel}>Duration</Text>
                        <Text style={styles.infoValue}>24 weeks (6 months)</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoLabel}>Format</Text>
                        <Text style={styles.infoValue}>Online, Self-Paced with Live Q&A Sessions</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoLabel}>Level</Text>
                        <Text style={styles.infoValue}>Intermediate to Advanced</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoLabel}>Prerequisites</Text>
                        <Text style={styles.infoValue}>2+ years in project/program management</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.infoLabel}>Certification</Text>
                    <Text style={styles.infoValue}>AI-Powered Portfolio Management Professional Certificate</Text>
                </View>
            </View>

            {/* Learning Outcomes */}
            <View style={styles.outcomeBox}>
                <Text style={styles.sectionTitle}>What You'll Master</Text>
                <View style={styles.outcomeGrid}>
                    <View style={styles.outcomeItem}>
                        <Text style={styles.outcomeText}>
                            • AI & Automation: Leverage AI for predictive analytics and intelligent workflows
                        </Text>
                    </View>
                    <View style={styles.outcomeItem}>
                        <Text style={styles.outcomeText}>
                            • Strategic Leadership: Align portfolios with business strategy
                        </Text>
                    </View>
                    <View style={styles.outcomeItem}>
                        <Text style={styles.outcomeText}>
                            • Risk Management: Implement predictive risk models
                        </Text>
                    </View>
                    <View style={styles.outcomeItem}>
                        <Text style={styles.outcomeText}>
                            • Process Optimization: Eliminate manual work and scale operations
                        </Text>
                    </View>
                    <View style={styles.outcomeItem}>
                        <Text style={styles.outcomeText}>
                            • Data-Driven Decisions: Build dashboards that inform executives
                        </Text>
                    </View>
                    <View style={styles.outcomeItem}>
                        <Text style={styles.outcomeText}>
                            • Stakeholder Management: Gain executive buy-in effectively
                        </Text>
                    </View>
                </View>
            </View>

            {/* Course Curriculum Title */}
            <Text style={[styles.sectionTitle, { marginBottom: 15 }]}>Course Curriculum</Text>
        </Page>

        {/* Modules - each on separate page or continued */}
        {modules.map((module, idx) => (
            <Page key={idx} size="A4" style={styles.page}>
                <View style={styles.module}>
                    <View style={styles.moduleHeader}>
                        <Text style={styles.moduleNumber}>{module.number}</Text>
                        <Text style={styles.moduleTitle}>{module.title}</Text>
                        <Text style={styles.moduleDuration}>{module.duration}</Text>
                    </View>

                    <View style={styles.moduleContent}>
                        <Text style={styles.subsectionTitle}>Lessons</Text>
                        {module.lessons.map((lesson, lessonIdx) => (
                            <Text key={lessonIdx} style={styles.listItem}>
                                • {lesson}
                            </Text>
                        ))}

                        <Text style={styles.subsectionTitle}>Learning Objectives</Text>
                        {module.objectives.map((objective, objIdx) => (
                            <Text key={objIdx} style={styles.listItem}>
                                ✓ {objective}
                            </Text>
                        ))}
                    </View>
                </View>

                {/* Footer on last page */}
                {idx === modules.length - 1 && (
                    <View style={styles.footer}>
                        <Text style={[styles.footerText, { fontWeight: 'bold' }]}>
                            Portfolio Intelligence Enterprise
                        </Text>
                        <Text style={styles.footerText}>
                            For enrollment inquiries, please visit our website or contact us directly.
                        </Text>
                        <Text style={styles.footerText}>
                            © 2024 Portfolio Intelligence. All rights reserved.
                        </Text>
                    </View>
                )}
            </Page>
        ))}
    </Document>
);
