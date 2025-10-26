"use client";

import { Link } from "@/i18n/navigation";
import LangChangeButton from "./LangChangeButton";
import ThemeSwitchButton from "./ThemeSwitchButton";
import MenuButton from "./Menu";
import { useTranslations } from "next-intl";

interface navLinksProps {
  name: string;
  href: string;
}

const Header = () => {
  const t = useTranslations("header");

  const navLinks: navLinksProps[] = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("projects"), href: "/projects" },
    { name: t("contact"), href: "/contact" },
  ];

  return (
    <div className="absolute top-0 inset-x-0 z-999 w-full md:px-10 sm:px-6 px-4 py-4 flex gap-2 items-center justify-between">
      {/* logo */}
      <div className="flex items-center gap-2">
        <div className="rounded-lg bg-primary p-2 w-10 h-10 flex justify-center items-center text-white">
          <span className="translate-x-px">MD</span>
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
      <MenuButton navLinks={navLinks} />
    </div>
  );
};

export default Header;
