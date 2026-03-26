"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Zap, Shield, Cpu } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AeroGuard Nexus",
    year: "2025",
    type: "Système Autonome",
    icon: <Shield className="w-6 h-6" />,
    description: "Intelligence Artificielle de pointe pour une détection et neutralisation des menaces à latence quasi-nulle, pensée pour les périmètres critiques.",
    stats: [
      { label: "Latence", value: "-85%" },
      { label: "Précision", value: "99.98%" }
    ],
    color: "from-emerald-600/20 to-emerald-950/40"
  },
  {
    id: 2,
    title: "PrimeVault Core",
    year: "2026",
    type: "Infrastructure Core",
    icon: <Zap className="w-6 h-6" />,
    description: "Architecture de flux asymétriques et microservices de très haute fréquence. Spécialement conçue pour l'infaillibilité transactionnelle.",
    stats: [
      { label: "RQT/S", value: "100k+" },
      { label: "Uptime", value: "100%" }
    ],
    color: "from-zinc-600/20 to-zinc-950/40"
  },
  {
    id: 3,
    title: "OmniLink AI",
    year: "2025",
    type: "Interface Neuronal",
    icon: <Cpu className="w-6 h-6" />,
    description: "Pont de communication bidirectionnel entre LLMs distribués et systèmes legacy, optimisé pour le raisonnement multi-agents.",
    stats: [
      { label: "Tokens/s", value: "2.4k" },
      { label: "Context", value: "1M+" }
    ],
    color: "from-emerald-500/20 to-black"
  }
];

export default function Showcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6%"]);
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-obsidian-950">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Depth Parallax background text */}
        <motion.div 
          style={{ x: backgroundX }}
          className="absolute top-1/2 -translate-y-1/2 font-serif text-[25vw] text-white/[0.015] whitespace-nowrap pointer-events-none uppercase tracking-tighter"
        >
          SYSTÈMES CRITIQUES SYSTÈMES CRITIQUES
        </motion.div>

        <motion.div style={{ x }} className="flex gap-12 px-[10vw] md:px-[15vw]">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface Project {
  id: number;
  title: string;
  year: string;
  type: string;
  icon: React.ReactNode;
  description: string;
  stats: { label: string; value: string }[];
  color: string;
}

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="w-[85vw] md:w-[70vw] lg:w-[60vw] h-[75vh] shrink-0 flex flex-col justify-end p-8 md:p-16 glass-panel relative overflow-hidden group cursor-none"
    >
      {/* Light-tracking border (Glassmorphism v3) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.1), transparent 40%)`
        }}
      />

      {/* Dynamic Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-20 mix-blend-overlay transition-all duration-1000 group-hover:opacity-40 scale-110 group-hover:scale-100`} />

      {/* Dark Scrim for solid text contrast on desktop */}
      <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-black/95 via-black/60 to-transparent z-10 pointer-events-none" />

      {/* Dynamic Animated Beam */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left z-20" />

      {/* Year & Icon Badge */}
      <div className="absolute top-0 right-0 p-8 md:p-12 flex flex-col items-end gap-4">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-3xl group-hover:border-emerald-500/30 transition-colors duration-500">
          <div className="text-emerald-400 group-hover:scale-110 transition-transform duration-500">
            {project.icon}
          </div>
        </div>
        <span className="font-mono text-zinc-500 text-[10px] md:text-xs tracking-[0.3em] uppercase">
          Edition {project.year}
        </span>
      </div>

      <div className="relative z-20 flex flex-col gap-8 md:gap-12 w-full">
        <div className="space-y-4">
          <motion.span
            className="font-mono text-[10px] md:text-[12px] tracking-[0.4em] text-emerald-500 uppercase flex items-center gap-3"
          >
            <span className="w-8 h-px bg-emerald-500/30" />
            {project.type}
          </motion.span>
          <h2 className="font-serif text-4xl md:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.9]">
            {project.title.split(" ").map((w, i) => (
              <span key={i} className="block">{w}</span>
            ))}
          </h2>
        </div>

        <p className="font-sans text-base md:text-xl text-zinc-400 font-light max-w-xl leading-relaxed group-hover:text-zinc-200 transition-colors duration-500">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-8 md:gap-20 pt-8 md:pt-12 border-t border-white/5 mt-auto">
          {project.stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-500 uppercase">{stat.label}</span>
              <span className="font-serif text-3xl md:text-5xl text-zinc-100 group-hover:text-emerald-400 transition-colors duration-500">{stat.value}</span>
            </div>
          ))}

          <div className="ml-auto">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500 group-hover:rotate-45">
              <ArrowUpRight className="w-6 h-6 text-white group-hover:text-black transition-colors duration-500" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
