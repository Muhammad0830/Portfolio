"use client";
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero/HeroSection";

const Page = () => {
  return (
    <div className="md:px-10 sm:px-6 px-4 min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Header />
      <HeroSection />

      <section className="about" id="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-container">
          <div className="about-card intro">
            <h3>
              Hi, I&apos;m{" "}
              <span className="highlight">Muhammad Abduqayumov</span> —
              Full-Stack Developer with a strong focus on frontend development.
            </h3>

            <div className="buttons">
              <a href="#projects" className="btn primary">
                See my work
              </a>
              <a href="/cv.pdf" className="btn secondary">
                Download CV
              </a>
            </div>

            <div className="stats">
              <div className="stat">
                <span className="number">12+</span>
                <span className="label">Projects</span>
              </div>
              <div className="stat">
                <span className="number">2+</span>
                <span className="label">Years Exp</span>
              </div>
              <div className="stat">
                <span className="number">Remote</span>
                <span className="label">Available</span>
              </div>
            </div>
          </div>

          <div className="about-card nutshell">
            <h4>What I do</h4>
            <ul>
              <li>
                I craft modern, responsive interfaces using
                <strong>React</strong>, <strong>Next.js</strong>,
                <strong>TypeScript</strong> and <strong>TailwindCSS</strong>,
                turning ideas into polished digital experiences.
              </li>
              <li>
                Beyond the frontend, I build scalable backends with
                <strong>Node.js</strong> and <strong>Express.js</strong>, and
                develop cross-platform mobile apps using{" "}
                <strong>React Native</strong> and
                <strong>Expo</strong> — ensuring seamless functionality across
                web and mobile.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
