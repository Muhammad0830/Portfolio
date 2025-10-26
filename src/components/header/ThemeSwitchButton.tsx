"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/cn";

const ThemeSwitchButton = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <button
        onClick={handleToggleTheme}
        className={cn(
          "relative z-10 overflow-hidden cursor-pointer p-1.5 rounded-md border border-foreground/10 hover:border-foreground/20 hover:bg-foreground/10 dark:hover:bg-foreground/15 transition-colors bg-foreground/0",
          className
        )}
      >
        <motion.div
          initial={{ y: "0%", rotate: 0, x: 0 }}
          animate={
            theme === "dark"
              ? { y: "-150%", rotate: 90, x: "-20%" }
              : { y: "0%", rotate: 0, x: "0%" }
          }
          className="relative"
        >
          <Moon className="w-6 h-6 text-black" fill="black" />
        </motion.div>
        <motion.div
          initial={{ y: "0%", rotate: 0, x: 0 }}
          animate={
            theme === "dark"
              ? { y: "0%", rotate: 0, x: "0%" }
              : { y: "150%", rotate: 90, x: "-20%" }
          }
          className="absolute inset-0 flex justify-center items-center"
        >
          <Sun className="w-6 h-6 text-yellow-600" />
        </motion.div>
      </button>
    </div>
  );
};

export default ThemeSwitchButton;
