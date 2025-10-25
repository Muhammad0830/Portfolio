"use client";
import { cn } from "@/lib/cn";
import { useTheme } from "next-themes";
import { useState } from "react";

const LightModeDarkMode = () => {
  const [mounted] = useState(() => typeof window !== "undefined");

  const { theme, setTheme } = useTheme();

  if (!mounted) return null;

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex flex-col gap-1 items-start my-4">
      <button
        onClick={() => handleToggleTheme()}
        className={cn(
          "text-foreground cursor-pointer px-3 py-1.5 rounded-md border",
          theme === "dark" && "bg-foreground/20"
        )}
      >
        Dark
      </button>
      <button
        onClick={() => handleToggleTheme()}
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
