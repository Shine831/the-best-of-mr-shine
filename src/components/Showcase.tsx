"use client";

import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { Cpu, Shield, ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  year: string;
  type: string;
  icon: React.ReactNode;
  description: string;
  stats: { label: string; value: string }[];
  color: string;
  parallax: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Architectures Immersives",
    year: "CORE UI/UX",
    type: "Ingénierie Front-end",
    icon: <Cpu className="w-5 h-5 md:w-6 md:h-6" />,
    description: "Conception d'interfaces cinématiques à 120 FPS. Expériences utilisateurs premium orientées conversion avec React 19, Next.js 16 et Tailwind v4.",
    stats: [
      { label: "Performance", value: "Aura 60+" },
      { label: "Rendering", value: "SSR/RSC" }
    ],
    color: "from-emerald-900/40 to-obsidian-950",
    parallax: -50
  },
  {
    id: 2,
    title: "Agents IA Autonomes",
    year: "INTEGRATION LLM",
    type: "Intelligence Artificielle",
    icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />,
    description: "Orchestration cognitive avancée. Maîtrise des écosystèmes Anthropic (Claude), Manus AI, Grok et outils Google pour des systèmes de raisonnement multi-agents.",
    stats: [
      { label: "Capacité", value: "Multi-Agents" },
      { label: "LLMs", value: "SOTA" }
    ],
    color: "from-zinc-800/40 to-obsidian-950",
    parallax: 50
  }
];

const ProjectCard = ({ project, scrollYProgress }: { project: Project, scrollYProgress: MotionValue<number> }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const yContent = useTransform(scrollYProgress, [0, 1], [0, project.parallax]);
  const yDesc = useTransform(scrollYProgress, [0, 1], [0, project.parallax * 0.5]);
  const rotateGlare = useTransform(scrollYProgress, [0, 1], [0, 45]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="w-[85vw] md:w-[75vw] lg:w-[65vw] h-[75vh] shrink-0 flex flex-col justify-end p-8 md:p-16 glass-morphism-v2 relative overflow-hidden group cursor-none"
    >
      {/* Light-tracking border (Glassmorphism v3) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.1), transparent 40%)`
        }}
      />

      {/* Dynamic Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40 mix-blend-screen transition-opacity duration-1000 group-hover:opacity-70 scale-110 group-hover:scale-100 transition-transform`} />

      {/* Dynamic Glare Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ rotate: rotateGlare }}
      />

      {/* Animated corner accent */}
      <div className="absolute top-0 right-0 w-28 h-28 md:w-40 md:h-40 bg-white/5 rounded-bl-[100px] border-l border-b border-white/5 flex items-center justify-center backdrop-blur-3xl z-20">
        <div className="text-emerald-400 group-hover:scale-110 transition-transform duration-500 mb-2">
          {project.icon}
        </div>
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
          <div className="ml-auto">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500 group-hover:rotate-45">
              <ArrowUpRight className="w-6 h-6 text-white group-hover:text-black transition-colors duration-500" strokeWidth={1.5} />
            </div>
          </div>
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
        
        {/* Depth Parallax background text */}
        <motion.div 
          style={{ x: bgTextX }}
          className="absolute top-1/2 -translate-y-1/2 font-serif text-[25vw] text-emerald-500/[0.03] whitespace-nowrap pointer-events-none uppercase tracking-tighter"
        >
          EXPERTISES ARCHITECTURES EXPERTISES
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
