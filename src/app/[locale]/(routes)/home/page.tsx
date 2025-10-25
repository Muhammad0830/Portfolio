"use client";
import LightModeDarkMode from "@/components/header/LightDarkMode";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { useTranslations } from "next-intl";
import { usePathname as nextUsePathname } from "next/navigation";

const Page = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const nextPathname = nextUsePathname();

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <h1>Next app</h1>

      <div className="flex flex-col gap-1 items-start">
        <Link
          className={cn(
            "border px-3 py-1.5 rounded-sm",
            nextPathname.includes("/uz") && "bg-white/20"
          )}
          href={pathname}
          locale="uz"
        >
          O&apos;zbekcha
        </Link>
        <Link
          className={cn(
            "border px-3 py-1.5 rounded-sm",
            nextPathname.includes("/en") && "bg-white/20"
          )}
          href={pathname}
          locale="en"
        >
          English
        </Link>
      </div>

      <LightModeDarkMode />

      <div>{t("hello")}</div>
    </div>
  );
};

export default Page;
