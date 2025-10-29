"use client";
import React from "react";
import { useTranslations } from "next-intl";
import SectionTitle from "../SectionTitle";
import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SeeMoreCard from "./SeeMoreCard";
import Link from "next/link";

const ProjectsSection = () => {
  const t = useTranslations("projects");

  return (
    <div className="space-y-10">
      <SectionTitle>{t("title")}</SectionTitle>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 sm:gap-3 gap-2 max-w-[400px] sm:max-w-[800px] mx-auto lg:max-w-[1400px]">
        {projects?.map((project, index) =>
          index < 5 ? <ProjectCard key={index} project={project} /> : null
        )}
        <div className="flex justify-center">
          <SeeMoreCard projects={projects} />
          <Link
            href={"/projects"}
            className="sm:hidden flex px-4 py-2 rounded-md bg-primary/10 border border-primary cursor-pointer mt-4"
          >
            {t("seeMore")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
