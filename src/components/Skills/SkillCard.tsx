"use client";

import { Skill } from "@/types/types";
import { motion } from "framer-motion";

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  return (
    <motion.div
      key={index}
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="relative lg:text-lg text-base min-w-[100px] bg-primary/5 border border-primary rounded-md flex justify-center items-center px-5 py-5"
    >
      {skill.name}
      <div className="absolute top-1 right-1 text-xs px-1.5 bg-primary rounded-sm">
        {skill.level.toUpperCase()}
      </div>
    </motion.div>
  );
};

export default SkillCard;
