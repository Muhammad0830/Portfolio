export interface Skill {
  name: string;
  level: "main" | "good" | "familiar" | "learning";
  category: "frontend" | "backend" | "mobile" | "database" | "other";
}

export interface FiltersProps {
  category: string;
  level: string;
}

export interface Project {
  title: string;
  description: string;
  codeLink: string;
  link: string;
  categories: string[];
  createdAt: string;
  image: string;
}
