"use client";
import { Project } from "@/types/types";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const SeeMoreCard = ({ projects }: { projects: Project[] }) => {
  const t = useTranslations("projects");
  const projectsToShow = projects.slice(5);

  return (
    <div className="w-full sm:flex hidden h-full p-4 flex-col gap-2 rounded-sm bg-primary/10">
      <div className="grid grid-cols-2 grid-rows-3 gap-2 h-full">
        {projectsToShow.slice(0, 5).map((project, index) => (
          <Link
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            href={project.link}
            className="border border-primary/10 rounded-md flex items-center justify-center bg-section"
          >
            Image
          </Link>
        ))}

        <Link
          href="/projects"
          className="border border-primary rounded-md flex items-center justify-center bg-primary/20 lg:text-2xl text-xl"
        >
          {t("seeMore")}
        </Link>
      </div>
    </div>
  );
};

export default SeeMoreCard;
