export type ProjectCategory =
  | "Agentic AI"
  | "Responsible AI"
  | "NLP"
  | "Research"
  | "Graph ML"
  | "ML Systems";

export interface Project {
  slug: string;
  title: string;
  eyebrow: string;
  proposition: string;
  summary: string;
  technical: string;
  problem: string;
  solution: string;
  architecture: string[];
  capabilities: string[];
  safeguards: string[];
  technologies: string[];
  methods: string[];
  categories: ProjectCategory[];
  proof: string;
  outcome: string;
  github: string;
  image?: string;
  imageAlt?: string;
  media?: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
  featured: boolean;
}

export interface Experience {
  role: string;
  organisation: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface Certification {
  title: string;
  provider: string;
  category: string;
  issued: string;
  credentialId?: string;
  url?: string;
}

export interface SkillGroup {
  title: string;
  description: string;
  skills: string[];
}
