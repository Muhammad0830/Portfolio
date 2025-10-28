"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FiltersProps, Skill } from "@/types/types";
import SkillCard from "./SkillCard";

interface MoreFiltersAndSkillsProps {
  moreIsOpen: boolean;
  filters: FiltersProps;
  setFilters: React.Dispatch<React.SetStateAction<FiltersProps>>;
  levels: string[];
  filteredSkills: Skill[];
}

const MoreFiltersAndSkills = ({
  moreIsOpen,
  filters,
  setFilters,
  levels,
  filteredSkills,
}: MoreFiltersAndSkillsProps) => {
  const t = useTranslations("skills");

  return (
    <AnimatePresence key={"skills container"}>
      {moreIsOpen && (
        <motion.div
          key={1}
          layout
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="gap-2 items-center justify-center sm:flex hidden"
        >
          <button
            onClick={() => setFilters((prev) => ({ ...prev, level: "" }))}
            className={cn(
              "px-3 py-1 rounded-full bg-primary/5 border border-primary cursor-pointer hover:bg-primary/30 transition-colors duration-150",
              filters.level.length === 0 && "bg-primary/30"
            )}
          >
            {t("all")}
          </button>
          {levels?.map((level, index) => (
            <button
              onClick={() =>
                setFilters((prev) => ({
                  category: prev.category,
                  level: prev.level === level ? "" : level,
                }))
              }
              className={cn(
                "px-3 py-1 rounded-full bg-primary/5 border border-primary cursor-pointer hover:bg-primary/30 transition-colors duration-150",
                filters.level === level && "bg-primary/30"
              )}
              key={index}
            >
              {level.toUpperCase()}
            </button>
          ))}
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        layout
        key={2}
        className="w-full flex lg:gap-4 md:gap-3 gap-2 flex-wrap justify-center"
      >
        <AnimatePresence>
          {filteredSkills.length !== 0 ? (
            filteredSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))
          ) : (
            <div className="flex flex-col gap-1 items-center">
              <p>{t("no_skills_found")}</p>
              <p>{t("try_changing_filters")}</p>
              <button
                onClick={() => setFilters({ category: "", level: "" })}
                className="px-3 py-1.5 bg-red-600/15 hover:bg-red-600/25 border border-red-600 rounded-sm cursor-pointer"
              >
                {t("reset")}
              </button>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default MoreFiltersAndSkills;
