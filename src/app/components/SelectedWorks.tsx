import { useState } from "react";
import { motion } from "motion/react";
import { projects } from "../data/content";
import type { Project } from "../data/content";

export function SelectedWorks() {
  return (
    <section id="works" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className="uppercase mb-12 tracking-tighter"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 700,
            lineHeight: 0.95,
          }}
        >
          SELECTED WORKS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isActive, setIsActive] = useState(false);
  const [imageSource, setImageSource] = useState(project.image);

  return (
    <motion.div
      className="relative aspect-[1/1.08] min-h-[20rem] overflow-hidden cursor-pointer group sm:aspect-square sm:min-h-0"
      style={{
        border: isActive ? "1px solid rgba(16, 185, 129, 0.3)" : "1px solid transparent",
        transition: "border-color 0.4s",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      onPointerEnter={() => setIsActive(true)}
      onPointerLeave={() => setIsActive(false)}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      onClick={() => setIsActive((active) => !active)}
    >
      <img
        src={imageSource}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
        style={{
          filter: isActive ? "brightness(0.4) blur(2px)" : "brightness(0.8) blur(0px)",
        }}
        onError={() => setImageSource(project.fallbackImage)}
      />

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center sm:p-6"
        style={{
          background: isActive ? "rgba(26, 29, 35, 0.85)" : "transparent",
          transition: "background 0.4s",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.h3
          className="uppercase tracking-tight mb-2 max-w-full"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "clamp(1.15rem, 6vw, 1.75rem)",
            fontWeight: 600,
            lineHeight: 1.05,
          }}
          initial={{ y: 20 }}
          animate={{ y: isActive ? 0 : 20 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {project.title}
        </motion.h3>
        <motion.p
          className="text-xs opacity-70 mb-5 sm:mb-6"
          initial={{ y: 20 }}
          animate={{ y: isActive ? 0 : 20 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          {project.type}
        </motion.p>
        <motion.a
          href={project.demoLink ?? "#contact"}
          target={project.demoLink ? "_blank" : undefined}
          rel={project.demoLink ? "noreferrer" : undefined}
          className="px-5 py-2 uppercase text-xs tracking-wider transition-all duration-300 sm:px-6"
          style={{
            border: "1px solid rgba(16, 185, 129, 0.5)",
            background: "transparent",
            color: "#10b981",
          }}
          initial={{ y: 20 }}
          animate={{ y: isActive ? 0 : 20 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{
            background: "#10b981",
            color: "#1a1d23",
            boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)",
          }}
        >
          {project.demoLink ? "View Demo" : "View Project"}
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
