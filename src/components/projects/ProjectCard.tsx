"use client";
import { Project } from "@/types/types";
import { AnimatePresence, motion } from "framer-motion";
import { Ellipsis } from "lucide-react";
import { useEffect, useState } from "react";
import NextLink from "next/link";
import { Link } from "lucide-react";

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const otherCategories = project.categories.filter(
    (item, index) => index >= 2
  );

  const dropdownVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 10, opacity: 1, transition: { duration: 0.25 } },
    exit: { y: 20, opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <div className="p-4 flex flex-col gap-2 rounded-sm bg-primary/10">
      <NextLink
        target="_blank"
        rel="noopener noreferrer"
        href={project.link}
        className="w-full aspect-video"
      >
        Image
      </NextLink>
      <NextLink target="_blank" rel="noopener noreferrer" href={project.link}>
        <h3 className="md:text-lg text-base font-semibold">{project.title}</h3>
      </NextLink>
      <NextLink target="_blank" rel="noopener noreferrer" href={project.link}>
        <p className="text-sm opacity-80 mb-1">{project.description}</p>
      </NextLink>
      <NextLink
        target="__blank"
        rel="noopener noreferrer"
        href={project.codeLink}
        className="mb-2 flex items-center gap-2"
      >
        <Link className="w-3.5 h-3.5" />
        <span>Github</span>
      </NextLink>

      <div className="flex gap-4 items-center justify-between">
        <div className="flex gap-2 items-center">
          {project.categories.map(
            (categ, index) =>
              index < 2 && (
                <div
                  key={index}
                  className="px-2 py-1 rounded-full border border-primary bg-primary/10"
                >
                  {categ}
                </div>
              )
          )}
          {otherCategories.length > 0 && (
            <div
              className="relative border self-stretch justify-center flex items-center border-primary rounded-full bg-primary/10 px-2 py-1"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={(e) => {
                if (width && width < 768) {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsHovered(!isHovered);
                }
              }}
            >
              <Ellipsis className="w-5 h-5" />

              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    key="dropdown"
                    variants={dropdownVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute top-full z-10 p-1 rounded-[20px] bg-background border border-primary flex flex-col gap-1 items-start"
                  >
                    {/* transparent hover bridge to prevent flicker */}
                    <div className="h-12 absolute bottom-[calc(100%-20px)] inset-x-0 z-0"></div>
                    <div className="absolute inset-0 bg-primary/10 rounded-[20px]"></div>

                    {otherCategories.map((categ, index) => (
                      <div
                        key={index}
                        className="z-10 bg-primary/10 border border-primary rounded-full px-2 py-1 text-nowrap text-center"
                      >
                        {categ}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
        <div className="sm:text-sm text-xs">{project.createdAt}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
