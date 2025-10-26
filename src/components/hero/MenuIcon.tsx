"use client";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import React from "react";

const MenuIcon = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => {
        setOpen(!open);
      }}
      className={cn("w-5 h-5 flex flex-col gap-1 justify-center items-center")}
    >
      <motion.div
        initial={{ rotate: 0, y: 0, backgroundColor: "var(--background)" }}
        animate={
          open
            ? { rotate: 45, y: "6px", backgroundColor: "#ff0000" }
            : { rotate: 0, backgroundColor: "var(--background)" }
        }
        className="w-full h-0.5 bg-background rounded-full"
      ></motion.div>
      <motion.div
        initial={{ scaleX: 0, backgroundColor: "var(--background)" }}
        animate={
          open
            ? { scaleX: 0, backgroundColor: "#ff0000" }
            : { scaleX: 1, backgroundColor: "var(--background)" }
        }
        transition={{ duration: 0.15 }}
        className="w-full h-0.5 bg-background rounded-full"
      ></motion.div>
      <motion.div
        initial={{ rotate: 0, y: 0, backgroundColor: "var(--background)" }}
        animate={
          open
            ? { rotate: -45, y: "-6px", backgroundColor: "#ff0000" }
            : { rotate: 0, backgroundColor: "var(--background)" }
        }
        className="w-full h-0.5 bg-background rounded-full"
      ></motion.div>
    </div>
  );
};

export default MenuIcon;
