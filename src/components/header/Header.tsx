"use client";

import { Link } from "@/i18n/navigation";
import LangChangeButton from "./LangChangeButton";
import ThemeSwitchButton from "./ThemeSwitchButton";
import MenuButton from "./Menu";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  return (
    <div className="relative w-full md:px-10 sm:px-6 px-4 py-2 flex gap-2 items-center justify-between">
      {/* logo */}
      <div className="flex items-center gap-2">
        <div className="rounded-lg bg-blue-700 p-2 flex justify-center items-center text-white">
          MD
        </div>
        <div className="flex flex-col items-start justify-center md:gap-0 gap-1">
          <p className="md:text-lg/5 text-base/4 font-semibold">MuhammadDev</p>
          <p className="md:text-sm/4 text-xs/3 font-normal opacity-70">
            Frontend/Backend
          </p>
        </div>
      </div>

      {/* nav Links */}
      <div className="lg:absolute lg:left-1/2 lg:translate-x-[-50%] gap-4 items-center sm:flex hidden">
        {navLinks.map((link, index) => (
          <div key={index} className="flex gap-4 items-center">
            {index !== 0 && (
              <div className="md:flex hidden w-1 h-1 bg-foreground rounded-full" />
            )}
            <Link href={link.href} className="lg:text-base text-sm">
              {link.name}
            </Link>
          </div>
        ))}
      </div>

      {/* lang change and theme change buttons */}
      <div className="sm:flex hidden items-center gap-2">
        <LangChangeButton />
        <ThemeSwitchButton />
      </div>

      {/* menu button for mobile */}
      <MenuButton />
    </div>
  );
};

export default Header;
