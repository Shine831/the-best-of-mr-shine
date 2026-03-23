"use client";

import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef } from "react";

interface Project {
  id: number;
  title: string;
  year: string;
  type: string;
  description: string;
  stats: { label: string; value: string }[];
  color: string;
  parallax: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AeroGuard Nexus",
    year: "2025",
    type: "Système Autonome",
    description: "Intelligence Artificielle de pointe pour une détection et neutralisation des menaces à latence quasi-nulle, pensée pour les périmètres critiques.",
    stats: [
      { label: "Latence", value: "-85%" },
      { label: "Précision", value: "99.98%" }
    ],
    color: "from-emerald-900/40 to-obsidian-950",
    parallax: -50
  },
  {
    id: 2,
    title: "PrimeVault",
    year: "2026",
    type: "Infrastructure Core",
    description: "Architecture de flux asymétriques et microservices de très haute fréquence. Spécialement conçue pour l'infaillibilité transactionnelle.",
    stats: [
      { label: "RQT/S", value: "100k+" },
      { label: "Uptime", value: "100%" }
    ],
    color: "from-zinc-800/40 to-obsidian-950",
    parallax: 50
  }
];

const ProjectCard = ({ project, scrollYProgress }: { project: Project, scrollYProgress: MotionValue<number> }) => {
  const yContent = useTransform(scrollYProgress, [0, 1], [0, project.parallax]);
  const yDesc = useTransform(scrollYProgress, [0, 1], [0, project.parallax * 0.5]);
  const rotateGlare = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div
      className="w-[85vw] md:w-[75vw] lg:w-[65vw] h-[75vh] shrink-0 flex flex-col justify-end p-8 md:p-16 glass-morphism-v2 relative overflow-hidden group"
    >
      {/* Dynamic Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40 mix-blend-screen transition-opacity duration-1000 group-hover:opacity-70 scale-110 group-hover:scale-100 transition-transform`} />

      {/* Dynamic Glare Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ rotate: rotateGlare }}
      />

      {/* Animated corner accent */}
      <div className="absolute top-0 right-0 w-28 h-28 md:w-40 md:h-40 bg-white/5 rounded-bl-[100px] border-l border-b border-white/5 flex items-center justify-center backdrop-blur-3xl z-20">
        <span className="font-mono text-emerald-500/60 text-[10px] md:text-xs tracking-[0.5em]">{project.year}</span>
      </div>

      <div className="relative z-10 flex flex-col gap-8 md:gap-10">
        <motion.div style={{ y: yContent }}>
          <span className="font-mono text-[9px] md:text-[11px] tracking-[0.5em] text-emerald-400/80 uppercase mb-6 block">
            {project.type}
          </span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.9]">
            {project.title}
          </h2>
        </motion.div>

        <motion.p
          className="font-sans text-base md:text-xl text-zinc-400 font-light max-w-2xl leading-relaxed"
          style={{ y: yDesc }}
        >
          {project.description}
        </motion.p>

        <div className="flex items-center gap-12 md:gap-20 pt-10 md:pt-12 border-t border-white/5 mt-auto">
          {project.stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-3">
              <span className="font-mono text-[10px] tracking-[0.4em] text-zinc-500 uppercase">{stat.label}</span>
              <span className="font-serif text-3xl md:text-5xl text-zinc-100">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Showcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const scrollX = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const bgTextX = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-obsidian-950">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Parallax background text */}
        <motion.div 
          style={{ x: bgTextX }}
          className="absolute top-1/2 -translate-y-1/2 font-serif text-[25vw] text-emerald-500/[0.03] whitespace-nowrap pointer-events-none uppercase tracking-tighter"
        >
          Projets Critiques Projets Critiques
        </motion.div>

        <motion.div style={{ x: scrollX }} className="flex gap-12 px-[10vw] md:px-[15vw]">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} scrollYProgress={scrollYProgress} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
