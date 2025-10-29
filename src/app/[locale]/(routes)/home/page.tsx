"use client";
import AboutMeSection from "@/components/about/AboutMeSection";
import ContactSection from "@/components/contact/ContactSection";
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero/HeroSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import SkillsSection from "@/components/Skills/SkillsSection";

const Page = () => {
  return (
    <div className="space-y-40 md:px-10 sm:px-6 px-4 min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Header />
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Page;
