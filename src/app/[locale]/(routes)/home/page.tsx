"use client";
import AboutMeSection from "@/components/about/AboutMeSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero/HeroSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import SkillsSection from "@/components/Skills/SkillsSection";
import { useState } from "react";

const Page = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  console.log("isHeroVisible", isHeroVisible);

  return (
    <div
      className="min-h-screen h-screen
        overflow-y-scroll
        snap-y
        snap-mandatory
        scroll-smooth
        bg-white text-black
        dark:bg-black dark:text-white"
    >
      <div className="md:px-10 sm:px-6 px-4 flex flex-col">
        <Header />
        <div className="snap-start">
          <HeroSection onVisibilityChange={setIsHeroVisible} />
        </div>

        <div className="snap-start">
          <AboutMeSection />
        </div>

        <div className="snap-start">
          <SkillsSection />
        </div>

        <div className="snap-start">
          <ProjectsSection />
        </div>

        <div className="snap-start">
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
