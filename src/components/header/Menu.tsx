"use client";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "@/i18n/navigation";

const MenuButton = () => {
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
        <motion.button
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 cursor-pointer p-1 rounded-sm border border-red-600 text-red-600"
        >
          <X className="w-5 h-5" />
        </motion.button>

        <div className="flex flex-col gap-2 items-center text-2xl">
          <Link href={"/home"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default MenuButton;
