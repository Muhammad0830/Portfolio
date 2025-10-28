"use client";
import { cn } from "@/lib/utils";
import { FiltersProps } from "@/types/types";
import { useTranslations } from "next-intl";
import React from "react";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";

interface MobileFiltersProps {
  setMobileFiltersOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileFiltersOpen: boolean;
  filters: FiltersProps;
  categories: string[];
  levels: string[];
  setFilters: React.Dispatch<React.SetStateAction<FiltersProps>>;
}

const MobileFilters = ({
  setMobileFiltersOpen,
  mobileFiltersOpen,
  filters,
  categories,
  levels,
  setFilters,
}: MobileFiltersProps) => {
  const t = useTranslations("skills");
  return (
    <div>
      <div className="sm:hidden flex w-full">
        <button
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          className={cn(
            "cursor-pointer mx-auto mb-4 px-4 py-1.5 text-lg rounded-sm border border-primary bg-primary/5 transition-colors duration-150",
            (filters.category.length > 0 || filters.category.length > 0) &&
              "bg-primary/30"
          )}
        >
          {t("Filters")}
        </button>
      </div>

      <Dialog open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
        <DialogContent
          className="p-4 max-w-none! w-auto backdrop-blur-md bg-background/20"
          aria-describedby="filters_dialog"
          aria-description="filters_dialog"
        >
          <DialogTitle>{t("Filters")}</DialogTitle>
          <div className="flex justify-center gap-2">
            <div className="flex-1 flex flex-col gap-2 items-end">
              <button
                onClick={() =>
                  setFilters((prev) => ({ ...prev, category: "" }))
                }
                className={cn(
                  "px-3 py-1 rounded-sm bg-primary/5 border border-primary cursor-pointer hover:bg-primary/20 transition-colors duration-150",
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
                    "px-3 py-1 rounded-sm bg-primary/5 border border-primary cursor-pointer hover:bg-primary/30 transition-colors duration-150",
                    filters.category === categ && "bg-primary/30"
                  )}
                  key={index}
                >
                  {categ}
                </button>
              ))}
            </div>
            <div className="flex-1 flex flex-col gap-2 items-start">
              <button
                onClick={() => setFilters((prev) => ({ ...prev, level: "" }))}
                className={cn(
                  "px-3 py-1 rounded-sm bg-primary/5 border border-primary cursor-pointer hover:bg-primary/30 transition-colors duration-150",
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
                    "px-3 py-1 rounded-sm bg-primary/5 border border-primary cursor-pointer hover:bg-primary/30 transition-colors duration-150",
                    filters.level === level && "bg-primary/30"
                  )}
                  key={index}
                >
                  {level.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MobileFilters;
