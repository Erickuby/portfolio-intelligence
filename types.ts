import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  path: string;
}

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  cta: string;
}

export interface ToolComparison {
  name: string;
  aiFeatures: string;
  enterprise: string;
  price: string;
  verdict: string;
  recommended: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content?: string;
  image?: string;
  author?: string;
  tags?: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export type ProjectStatus = 'On Track' | 'At Risk' | 'Critical';
export type RiskLevel = 'Low' | 'Medium' | 'High';

export interface Project {
  id: string;
  name: string;
  department: string;
  status: ProjectStatus;
  budgetTotal: number;
  budgetUsed: number;
  riskLevel: RiskLevel;
  completion: number;
  lastUpdated: string;
}