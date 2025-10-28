"use client";
import { cn } from "@/lib/utils";
import { FiltersProps } from "@/types/types";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

interface MainFiltersProps {
  filters: FiltersProps;
  setFilters: React.Dispatch<React.SetStateAction<FiltersProps>>;
  categories: string[];
  moreIsOpen: boolean;
  setMoreIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainFilters = ({
  filters,
  setFilters,
  categories,
  moreIsOpen,
  setMoreIsOpen,
}: MainFiltersProps) => {
  const t = useTranslations("skills");

  return (
    <div className="gap-2 items-center sm:flex hidden">
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
  );
};

export default MainFilters;
