"use client";

import { useLocale, useTranslations } from "next-intl";
import SectionTitle from "../SectionTitle";

const AboutMeSection = () => {
  const t = useTranslations("about");
  const locale = useLocale();

  const projectNumber = 12;
  const yearsExp = 2;

  return (
    <div className="space-y-10">
      <SectionTitle>{t("section_title")}</SectionTitle>

      <div className="flex md:gap-8 gap-4 lg:w-[90%] mx-auto">
        <div className="flex-1 bg-primary/10 border border-foreground/30 rounded-lg p-4 space-y-4">
          <p className="text-xl">{t("about_me_text")}</p>
          <div className="w-full grid grid-cols-3 lg:gap-4 gap-2">
            <div className="px-4 py-4 flex-col flex gap-1 items-center border rounded-md border-foreground/30 bg-foreground/5">
              <span className="lg:text-xl text-lg font-semibold">{projectNumber}+</span>
              <span className="opacity-70 lg:text-sm text-xs font-normal">
                {t("projects")}
              </span>
            </div>
            <div className="px-4 py-4 flex-col flex gap-1 items-center border rounded-md border-foreground/30 bg-foreground/5">
              <span className="lg:text-xl text-lg font-semibold">{yearsExp}+</span>
              <span className="opacity-70 lg:text-sm text-xs font-normal">
                {t("yearsExp")}
              </span>
            </div>
            <div className="px-4 py-4 flex-col flex gap-1 items-center border rounded-md border-foreground/30 bg-foreground/5">
              <span className="lg:text-xl text-lg font-semibold">{t("remote")}</span>
              <span className="opacity-70 lg:text-sm text-xs font-normal">
                {t("available")}
              </span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <button className="rounded-md border border-primary/60 bg-primary/10 px-4 py-2 cursor-pointer hover:bg-primary/20">
              {t("see_work_btn")}
            </button>
            <button className="rounded-md border border-primary/60 bg-primary/10 px-4 py-2 cursor-pointer hover:bg-primary/20">
              {t("download_cv_btn")}
            </button>
          </div>
        </div>
        <div className="flex-1 bg-primary/10 border border-foreground/30 rounded-lg p-4 space-y-4">
          <p className="text-xl">{t("what_i_do")}</p>
          <div className="flex flex-1 translate-x-3 relative">
            <div className="absolute top-2 -left-3.5 w-1.5 h-1.5 bg-foreground rounded-full" />
            {locale == "en" ? (
              <span>
                I craft modern, responsive interfaces using{" "}
                <span className="font-semibold">React</span>,{" "}
                <span className="font-semibold">Next.js</span>,
                <span className="font-semibold">TypeScript</span> and{" "}
                <span className="font-semibold">TailwindCSS</span>, turning
                ideas into polished digital experiences.
              </span>
            ) : locale === "ru" ? (
              <span>
                Я создаю современные адаптивные интерфейсы, используя{" "}
                <span className="font-semibold">React</span>,{" "}
                <span className="font-semibold">Next.js</span>,{" "}
                <span className="font-semibold">TypeScript</span> и{" "}
                <span className="font-semibold">TailwindCSS</span>, превращая
                идеи в отточенные цифровые решения.
              </span>
            ) : locale === "uz" ? (
              <span>
                Men <span className="font-semibold">React</span>,{" "}
                <span className="font-semibold">Next.js</span>,{" "}
                <span className="font-semibold">TypeScript</span> va{" "}
                <span className="font-semibold">TailwindCSS</span>, yordamida
                zamonaviy, moslashuvchan interfeyslarni yarataman va
                g&apos;oyalarni sayqallangan raqamli tajribalarga aylantiraman.
              </span>
            ) : (
              <span>no proper translation for this text</span>
            )}
          </div>
          <div className="translate-x-3 relative">
            <div className="absolute top-2 -left-3.5 w-1.5 h-1.5 bg-foreground rounded-full" />
            {locale == "en" ? (
              <span>
                Beyond the frontend, I build scalable backends with{" "}
                <span className="font-semibold">Node.js</span> and{" "}
                <span className="font-semibold">Express.js</span>, and develop
                cross-platform mobile apps using{" "}
                <span className="font-semibold">React Native</span> and{" "}
                <span className="font-semibold">Expo</span> — ensuring seamless
                functionality across web and mobile.
              </span>
            ) : locale === "ru" ? (
              <span>
                Помимо фронтенда, я создаю масштабируемые бэкенды с
                использованием <span className="font-semibold">Node.js</span> и{" "}
                <span className="font-semibold">Express.js</span>, а также
                разрабатываю кроссплатформенные мобильные приложения с помощью{" "}
                <span className="font-semibold">React Native</span> и{" "}
                <span className="font-semibold">Expo</span>, обеспечивая
                бесперебойную работу как в веб-версии, так и на мобильных
                устройствах.
              </span>
            ) : locale === "uz" ? (
              <span>
                Frontenddan tashqari, men{" "}
                <span className="font-semibold">Node.js</span> va{" "}
                <span className="font-semibold">Express.js</span>
                yordamida kengaytiriladigan backendlarni yarataman va{" "}
                <span className="font-semibold">React Native</span> va{" "}
                <span className="font-semibold">Expo</span>dan foydalanib,
                platformalararo mobil ilovalarni ishlab chiqaman - bu veb va
                mobil qurilmalarda uzluksiz ishlashni ta&apos;minlaydi.
              </span>
            ) : (
              <span>no proper translation for this text</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
