"use client";
import { cn } from "@/lib/cn";
import { FiltersProps, Skill } from "@/types/types";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SkillCard from "./SkillCard";

const Filters = ({
  filters,
  setFilters,
  allSkills,
}: {
  filters: FiltersProps;
  setFilters: React.Dispatch<React.SetStateAction<FiltersProps>>;
  allSkills: Skill[];
}) => {
  const t = useTranslations("skills");
  const [moreIsOpen, setMoreIsOpen] = useState(false);

  const levels = Array.from(new Set(allSkills.map((s) => s.level)));
  const categories = Array.from(new Set(allSkills.map((s) => s.category)));
  const filteredSkills = allSkills.filter((skill) => {
    const matchCategory =
      filters.category === "" || skill.category === filters.category;
    const matchLevel = filters.level === "" || skill.level === filters.level;

    return matchCategory && matchLevel;
  });

  return (
    <div className="w-full flex flex-col gap-4 items-center pb-[1000px]">
      <div className="flex gap-2 items-center">
        <button
          onClick={() => setFilters((prev) => ({ ...prev, category: "" }))}
          className={cn(
            "px-3 py-1 rounded-full bg-primary/5 border border-primary cursor-pointer hover:bg-primary/20 transition-colors duration-150",
            filters.category.length === 0 && "bg-primary/30"
          )}
        >
          {t("all")}
        </button>
        {categories?.map((categ, index) => (
          <button
            onClick={() =>
              setFilters((prev) => ({
                level: prev.level,
                category: prev.category === categ ? "" : categ,
              }))
            }
            className={cn(
              "px-3 py-1 rounded-full bg-primary/5 border border-primary cursor-pointer hover:bg-primary/30 transition-colors duration-150",
              filters.category === categ && "bg-primary/30"
            )}
            key={index}
          >
            {categ}
          </button>
        ))}
        <button
          className={cn(
            "px-3 flex items-center gap-1 py-1 rounded-full bg-primary/5 border border-primary cursor-pointer hover:bg-primary/30 transition-colors duration-150",
            moreIsOpen && "bg-primary/30"
          )}
          onClick={() => setMoreIsOpen(!moreIsOpen)}
        >
          <span>{t("more")}</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
      <AnimatePresence key={"skills container"}>
        {moreIsOpen && (
          <motion.div
            key={1}
            layout
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex gap-2 items-center justify-center"
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
          className="w-full flex lg:gap-4 md:gap-3 gap-2 flex-wrap"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Filters;
