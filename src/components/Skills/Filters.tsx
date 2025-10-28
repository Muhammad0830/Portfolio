"use client";
import { FiltersProps, Skill } from "@/types/types";
import { useState } from "react";
import MobileFilters from "./MobileFilters";
import MainFilters from "./MainFilters";
import MoreFiltersAndSkills from "./MoreFiltersAndSkills";

const Filters = ({
  filters,
  setFilters,
  allSkills,
}: {
  filters: FiltersProps;
  setFilters: React.Dispatch<React.SetStateAction<FiltersProps>>;
  allSkills: Skill[];
}) => {
  const [moreIsOpen, setMoreIsOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const levels = Array.from(new Set(allSkills.map((s) => s.level)));
  const categories = Array.from(new Set(allSkills.map((s) => s.category)));
  const filteredSkills = allSkills.filter((skill) => {
    const matchCategory =
      filters.category === "" || skill.category === filters.category;
    const matchLevel = filters.level === "" || skill.level === filters.level;

    return matchCategory && matchLevel;
  });

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <MainFilters
        filters={filters}
        setFilters={setFilters}
        categories={categories}
        moreIsOpen={moreIsOpen}
        setMoreIsOpen={setMoreIsOpen}
      />

      <MobileFilters
        setMobileFiltersOpen={setMobileFiltersOpen}
        mobileFiltersOpen={mobileFiltersOpen}
        filters={filters}
        categories={categories}
        levels={levels}
        setFilters={setFilters}
      />

      <MoreFiltersAndSkills
        moreIsOpen={moreIsOpen}
        filters={filters}
        setFilters={setFilters}
        levels={levels}
        filteredSkills={filteredSkills}
      />
    </div>
  );
};

export default Filters;
