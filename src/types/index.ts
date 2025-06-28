export interface Skill {
  name: string;
  iconPath: string;
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

export interface WorkExperience {
  title: string;
  company: string;
  duration: string;
  type: string;
  description: string[];
} 