"use client";
import { cn } from "@/lib/cn";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const LightModeDarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    queueMicrotask(() => setMounted(true));
  }, []);

  if (!mounted) {
    // Return null instead of "loading" to avoid mismatched HTML
    return null;
  }

  const handleToggleTheme = (target: "dark" | "light") => {
    setTheme(target);
  };

  return (
    <div className="flex flex-col gap-1 items-start my-4">
      <button
        onClick={() => handleToggleTheme("dark")}
        className={cn(
          "text-foreground cursor-pointer px-3 py-1.5 rounded-md border",
          theme === "dark" && "bg-foreground/20"
        )}
      >
        Dark
      </button>
      <button
        onClick={() => handleToggleTheme("light")}
        className={cn(
          "cursor-pointer px-3 py-1.5 rounded-md border",
          theme === "light" && "bg-foreground/20"
        )}
      >
        Light
      </button>
    </div>
  );
};

export default LightModeDarkMode;
