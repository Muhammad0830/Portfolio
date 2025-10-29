"use client";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import LangChangeButton from "./LangChangeButton";
import ThemeSwitchButton from "./ThemeSwitchButton";

interface navLinksProps {
  name: string;
  href: string;
}

const MenuButton = ({ navLinks }: { navLinks: navLinksProps[] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative sm:hidden flex">
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        className="cursor-pointer border border-foreground/20 p-1 rounded-sm"
      >
        <Menu className="w-5 h-5" />
      </motion.button>

      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={open ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }}
        transition={{ duration: 0.3, type: "tween" }}
        className="p-2 flex flex-col gap-2 justify-center items-center fixed inset-0 bg-background/10 backdrop-blur-md z-999 rounded-sm border border-foreground/20 shadow-lg"
      >
        <div className="absolute top-5 right-5 flex flex-col gap-2">
          <motion.button
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(false)}
            className="cursor-pointer p-1.5 rounded-md border border-red-600 text-red-600"
          >
            <X className="w-6 h-6" />
          </motion.button>

          <ThemeSwitchButton className="bg-foreground/10 border-foreground/20" />
          <LangChangeButton
            className="bg-foreground/10 border-foreground/20"
            transformOrigin="top-right"
            right
          />
        </div>

        <div className="flex flex-col gap-2 items-center text-2xl">
          {navLinks?.map(({ name, href }, index) => (
            <Link key={index} href={href}>
              {name}
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MenuButton;
