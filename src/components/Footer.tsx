"use client";
import { useTranslations } from "next-intl";
import React from "react";

const Footer = () => {
  const t = useTranslations();
  return (
    <div className="mt-10 space-y-10">
      <div className="md:text-xl text-lg text-center font-semibold">
        {t("lets_make_it_happen")}
      </div>

      <div className="px-4 py-2 w-full bg-foreground/30 flex flex-wrap justify-center items-center sm:text-base text-sm">
        <p className="text-nowrap inline-block mr-1">{t("copyright")}</p>
        <p className="text-nowrap">{t("built_with")}</p>
      </div>
    </div>
  );w
};

export default Footer;
