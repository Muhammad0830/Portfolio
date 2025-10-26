"use client";

import { Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Link, usePathname } from "@/i18n/navigation";
import { usePathname as nextUsePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { useState } from "react";

interface LangChangeButtonProps {
  className?: string;
  transformOrigin?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top-right"
    | "bottom-right"
    | "bottom-left"
    | "top-left";
  right?: boolean;
  left?: boolean;
}

const LangChangeButton = ({
  className,
  transformOrigin,
  right,
  left,
}: LangChangeButtonProps) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const nextPathName = nextUsePathname();

  return (
    <div className="relative flex justify-center items-center">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "p-1.5 z-1 cursor-pointer rounded-md border border-foreground/10 hover:border-foreground/20 hover:bg-foreground/10 dark:hover:bg-foreground/15 transition-colors bg-foreground/0",
          className
        )}
      >
        <Globe className="w-6 h-6 text-foreground" />
      </button>

      <motion.div
        initial={{ scale: 1, top: 0, opacity: 1 }}
        animate={
          open
            ? { scale: 1, top: "115%", opacity: 1 }
            : { scale: 0.5, top: "75%", opacity: 0 }
        }
        transition={{ duration: 0.3, type: "spring" }}
        className={cn(
          "absolute p-1 rounded-sm z-0 flex flex-col gap-0.5 bg-foreground/5 border border-foreground/20",
          transformOrigin ? `origin-${transformOrigin}` : "origin-top",
          right && "right-0",
          left && "left-0"
        )}
      >
        <Link
          href={pathname}
          locale="en"
          className={cn(
            "px-2 py-0.5 rounded-sm bg-foreground/5 hover:bg-foreground/10 transition-colors",
            nextPathName.includes("/en") && "bg-foreground/10"
          )}
        >
          English
        </Link>
        <Link
          href={pathname}
          locale="uz"
          className={cn(
            "px-2 py-0.5 rounded-sm bg-foreground/5 hover:bg-foreground/10 transition-colors",
            nextPathName.includes("/uz") && "bg-foreground/10"
          )}
        >
          O&apos;zbekcha
        </Link>
        <Link
          href={pathname}
          locale="ru"
          className={cn(
            "px-2 py-0.5 rounded-sm bg-foreground/5 hover:bg-foreground/10 transition-colors",
            nextPathName.includes("/ru") && "bg-foreground/10"
          )}
        >
          Русский
        </Link>
      </motion.div>
    </div>
  );
};

export default LangChangeButton;
