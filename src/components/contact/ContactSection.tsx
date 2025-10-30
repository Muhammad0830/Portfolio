"use client";
import { useTranslations } from "next-intl";
import SectionTitle from "../SectionTitle";
import { motion } from "framer-motion";

const ContactSection = () => {
  const t = useTranslations("contact");

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="space-y-4 py-20 min-h-screen flex flex-col justify-center"
    >
      <SectionTitle>{t("title")}</SectionTitle>

      <div className="flex items-center flex-col gap-1 sm:text-lg text-center">
        <p>{t("description_1")}</p>
        <p>{t("description_2")}</p>
      </div>

      <div className="sm:w-[80vw] sm:max-w-[800px] sm:min-w-[550px] min-[400px]:max-w-[400px] mx-auto md:space-y-5 sm:space-y-4 space-y-3">
        <div className="w-full flex sm:flex-row flex-col items-center md:gap-4 sm:gap-3 gap-2">
          {/* by email */}
          <div className="flex-1 w-full border border-primary rounded-lg bg-primary/5 flex flex-col gap-1 p-3">
            <h3 className="md:text-xl sm:text-lg text-base text-primary font-semibold">
              {t("Email")}
            </h3>
            <p>abduqayumovm1@gmail.com</p>
          </div>

          {/* by phone number */}
          <div className="flex-1 w-full border border-primary rounded-lg bg-primary/5 flex flex-col gap-1 p-3">
            <h3 className="md:text-xl sm:text-lg text-base text-primary font-semibold">
              {t("PhoneNumber")}
            </h3>
            <p>+998944101551</p>
          </div>
        </div>

        {/* writing here */}
        <div className="border border-primary rounded-lg bg-primary/5 flex flex-col gap-3 p-3">
          <div className="flex items-center gap-2 justify-between">
            <h3 className="md:text-xl sm:text-lg text-base text-primary font-semibold">
              {t("WriteHere")}
            </h3>
            <button className="cursor-pointer px-6 py-1.5 rounded-full bg-primary text-white font-semibold">
              {t("Submit")}
            </button>
          </div>
          <textarea
            name="message"
            id="message"
            cols={50}
            rows={10}
            placeholder={t("type_here")}
            className="w-full min-h-[200px] p-3 rounded-md border border-primary placeholder:text-primary/60 bg-linear-90 from-primary/0 to-primary/10"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
