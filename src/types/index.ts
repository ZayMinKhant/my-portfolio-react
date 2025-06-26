import type { ReactNode } from 'react';

export interface Skill {
  name: string;
  icon: ReactNode;
  level: number;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  color: string;
  features: string[];
}

export interface SectionProps {
  darkMode: boolean;
  isVisible: boolean;
}

export interface VisibilityState {
  [key: string]: boolean;
} 