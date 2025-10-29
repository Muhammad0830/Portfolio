import AboutMeSection from "@/components/about/AboutMeSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero/HeroSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import SkillsSection from "@/components/Skills/SkillsSection";

const Page = () => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="sm:space-y-40 space-y-20 md:px-10 sm:px-6 px-4">
        <Header />
        <HeroSection />
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
