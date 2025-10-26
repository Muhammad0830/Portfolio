"use client";

import { Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Link, usePathname } from "@/i18n/navigation";
import { usePathname as nextUsePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { useState } from "react";

const LangChangeButton = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const nextPathName = nextUsePathname();

  return (
    <div className="relative flex justify-center items-center">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 z-1 cursor-pointer rounded-md border border-foreground/10 hover:border-foreground/20 hover:bg-foreground/10 dark:hover:bg-foreground/15 transition-colors bg-foreground/0"
      >
        <Globe className="w-5 h-5 text-foreground" />
      </button>

      <motion.div
        initial={{ scale: 1, top: 0, opacity: 1 }}
        animate={
          open
            ? { scale: 1, top: "115%", opacity: 1 }
            : { scale: 0.5, top: "75%", opacity: 0 }
        }
        transition={{ duration: 0.3, type: "spring" }}
        className="absolute p-1 origin-top rounded-sm z-0 flex flex-col gap-0.5 bg-foreground/5 border border-foreground/20"
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
