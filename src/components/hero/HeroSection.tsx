"use client";

import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import MenuIcon from "./MenuIcon";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { useInView } from "framer-motion";
import { useRef } from "react";

const HeroSection = ({
  onVisibilityChange,
}: {
  onVisibilityChange: (visible: boolean) => void;
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.5,
  });

  useEffect(() => {
    onVisibilityChange(isInView);
  }, [isInView, onVisibilityChange]);

  const t = useTranslations("hero");

  const onSocialsBtnClick = () => {
    setOpen(!open);
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
    <motion.div
      className="min-h-screen py-20 flex gap-4"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* text */}
      <div className="flex flex-col sm:items-start items-center justify-center flex-1 sm:px-0 px-4 max-sm:text-center">
        <p className="text-primary text-base font-medium">Muhammad A.</p>
        <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold">
          {t("title")}
        </h1>
        <h5 className="text-lg opacity-70 font-light lg:w-4/5">
          {t("description")}
        </h5>

        <div className="relative mt-3 rounded-full border-foreground border pl-2 pr-1 py-1 flex gap-2">
          <div className="my-1 sm:ml-1 sm:text-lg text-sm">
            {t("buttonText")}
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="flex justify-center items-center sm:hidden h-full aspect-square bg-foreground rounded-full"
          >
            <div className="scale-90">
              <MenuIcon open={open} setOpen={setOpen} />
            </div>
          </button>
          <div className="relative sm:flex hidden">
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

          {/* mobile socials menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2, delay: 0.3 } }}
                className="translate-y-3 absolute top-full flex sm:hidden -left-full -right-full gap-2 justify-center place-self-center"
              >
                {socials.map(({ href, icon }, index) => (
                  <motion.a
                    href={href}
                    key={index}
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { delay: index * 0.07 },
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                      transition: {
                        delay: (socials.length - index) * 0.1,
                        duration: 0.1,
                      },
                    }}
                    transition={{ duration: 0.3, type: "tween" }}
                    className="bg-white border w-9! h-9! flex items-center justify-center rounded-full"
                  >
                    {icon}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* image / video / 3d-object */}
      <div
        ref={ref}
        className="sm:flex hidden items-center justify-center flex-1 bg-red-500"
      >
        HeroSection
      </div>
    </motion.div>
  );
};

export default HeroSection;
