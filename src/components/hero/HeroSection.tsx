"use client";

import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import MenuIcon from "./MenuIcon";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  const t = useTranslations("hero");

  const onSocialsBtnClick = () => {
    setOpen(!open); // toggle on parent click
  };

  const socials = [
    {
      label: "Telegram",
      href: "https://t.me/muhammad_abduqayumov",
      icon: (
        <FontAwesomeIcon icon={faTelegram} className="text-2xl text-primary" />
      ),
    },
    {
      label: "Twitter",
      href: "https://twitter.com/muhammad_abduqayumov",
      icon: (
        <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-primary" />
      ),
    },
    {
      label: "Instagram",
      href: "https://instagram.com/muhammad_abduqayumov",
      icon: (
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-2xl text-[#E4405F]"
        />
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-abduqayumov/",
      icon: (
        <FontAwesomeIcon icon={faFacebook} className="text-2xl text-primary" />
      ),
    },
  ];

  return (
    <div className="min-h-screen py-20 flex gap-4">
      {/* text */}
      <div className="flex flex-col items-start justify-center flex-1">
        <p className="text-primary text-base font-medium">Muhammad A.</p>
        <h1 className="text-4xl font-semibold">{t("title")}</h1>
        <h5 className="text-lg opacity-70 font-light w-4/5">
          {t("description")}
        </h5>

        <div className="mt-3 rounded-full border-foreground border pl-2 pr-1 py-1 flex gap-2">
          <div className="my-1 ml-1 text-lg">{t("buttonText")}</div>
          <div className="relative flex">
            <motion.button
              onClick={onSocialsBtnClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 aspect-square border border-background rounded-full bg-foreground cursor-pointer flex items-center justify-center"
            >
              <MenuIcon open={open} setOpen={setOpen} />
            </motion.button>
            <motion.div
              initial={{ left: 0, scaleY: 0, width: "40px" }}
              animate={
                open
                  ? { left: "-2px", scaleY: 1, width: "200px" }
                  : { left: "50%", scaleY: 0.9, width: "0px" }
              }
              transition={{
                duration: 0.3,
                type: "tween",
                delay: open ? 0 : 0.3,
              }}
              className="absolute -top-0.5 h-10 z-0 bg-white rounded-full text-background flex gap-1"
            >
              <AnimatePresence>
                {open &&
                  socials.map(({ href, icon }, index) => (
                    <motion.a
                      href={href}
                      key={index}
                      initial={{
                        x: "calc(0% + 6px)",
                        opacity: 0,
                        scale: 0,
                      }}
                      animate={{
                        x: "calc(100% + 6px)",
                        opacity: 1,
                        scale: 1,
                        transition: { delay: index * 0.1 },
                      }}
                      exit={{
                        x: "calc(50% + 6px)",
                        opacity: 1,
                        scale: 0,
                        transition: {
                          delay: (socials.length - index) * 0.1,
                          duration: 0.1,
                          type: "spring",
                        },
                      }}
                      transition={{ duration: 0.3, type: "tween" }}
                      className="bg-white border translate-y-0.5 w-9 h-9 flex items-center justify-center rounded-full"
                    >
                      {icon}
                    </motion.a>
                  ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      {/* image / video / 3d-object */}
      <div className="flex items-center justify-center flex-1">HeroSection</div>
    </div>
  );
};

export default HeroSection;
