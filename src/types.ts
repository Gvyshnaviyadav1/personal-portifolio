import type { StaticImageData } from "next/image";
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'DevOps & Cloud' | 'Full Stack' | 'Systems / Utilities';
  tags: string[];
  image: string | StaticImageData;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  architectureHighlights?: string[];
  pipelineSteps?: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
  coursework: string[];
  achievements: string[];
}

export interface SkillGroup {
  category: string;
  skills: { name: string; iconName?: string }[];
}

export interface CodeFile {
  path: string;
  folder: string;
  filename: string;
  language: string;
  description: string;
  content: string;
}
