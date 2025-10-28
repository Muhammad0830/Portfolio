"use client";

import { useTranslations } from "next-intl";
import SectionTitle from "../SectionTitle";
import Filters from "./Filters";
import { useState } from "react";
import { FiltersProps, Skill } from "@/types/types";

const skills: Skill[] = [
  { name: "HTML", level: "main", category: "frontend" },
  { name: "CSS", level: "main", category: "frontend" },
  { name: "JavaScript", level: "main", category: "frontend" },
  { name: "React", level: "main", category: "frontend" },
  { name: "Tailwind CSS", level: "main", category: "frontend" },
  { name: "Next.js", level: "main", category: "frontend" },
  { name: "TypeScript", level: "main", category: "frontend" },

  { name: "MySQL", level: "good", category: "database" },
  { name: "Node.js", level: "good", category: "backend" },
  { name: "Express.js", level: "good", category: "backend" },
  { name: "Framer Motion", level: "good", category: "frontend" },
  { name: "React Native", level: "good", category: "mobile" },

  { name: "PHP", level: "familiar", category: "backend" },
  { name: "Laravel", level: "familiar", category: "backend" },
  { name: "Python", level: "familiar", category: "backend" },
  { name: "Django", level: "familiar", category: "backend" },
  { name: "MongoDB", level: "familiar", category: "database" },

  { name: "Three.js", level: "learning", category: "frontend" },
];

const SkillsSection = () => {
  const [filters, setFilters] = useState<FiltersProps>({
    category: "",
    level: "",
  });
  const t = useTranslations("skills");
  return (
    <div className="space-y-10">
      <SectionTitle>{t("my_skills")}</SectionTitle>

      {/* filter section */}
      <div className="flex justify-center">
        <Filters allSkills={skills} filters={filters} setFilters={setFilters} />
      </div>
    </div>
  );
};

export default SkillsSection;
