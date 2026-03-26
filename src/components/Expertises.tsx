"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Zap, Shield, Cpu } from "lucide-react";

const expertises = [
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
    color: "from-emerald-600/20 to-emerald-950/40"
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
    color: "from-zinc-600/20 to-zinc-950/40"
  },
  {
    id: 3,
    title: "Infrastructures & Workflows",
    year: "SERVERLESS & OPS",
    type: "Automatisation Extreme",
    icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
    description: "Ingénierie de workflows asynchrones complexes avec Zapier et déploiements locaux destructurés (n8n). Architectures backend Java et NestJS.",
    stats: [
      { label: "Uptime", value: "99.99%" },
      { label: "Latence", value: "Zéro-Friction" }
    ],
    color: "from-emerald-500/20 to-black"
  }
];

export default function Expertises() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6%"]);
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section id="expertises" ref={targetRef} className="relative h-[300vh] bg-obsidian-950">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">

        {/* Depth Parallax background text */}
        <motion.div
          style={{ x: backgroundX }}
          className="absolute top-1/2 -translate-y-1/2 font-serif text-[28vw] md:text-[25vw] text-white/[0.015] whitespace-nowrap pointer-events-none uppercase tracking-tighter"
        >
          EXPERTISES ARCHITECTURES EXPERTISES
        </motion.div>

        <motion.div style={{ x }} className="flex gap-8 md:gap-12 px-[5vw] md:px-[15vw]">
          {expertises.map((expertise) => (
            <ProjectCard key={expertise.id} expertise={expertise} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface Expertise {
  id: number;
  title: string;
  year: string;
  type: string;
  icon: React.ReactNode;
  description: string;
  stats: { label: string; value: string }[];
  color: string;
}

function ProjectCard({ expertise }: { expertise: Expertise }) {
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
      className="w-[85vw] md:w-[70vw] lg:w-[60vw] h-[75vh] shrink-0 flex flex-col justify-end p-6 md:p-10 lg:p-12 glass-panel relative overflow-hidden group cursor-none"
    >
      {/* Light-tracking border (Glassmorphism v3) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.1), transparent 40%)`
        }}
      />

      {/* Dynamic Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-tr ${expertise.color} opacity-20 mix-blend-overlay transition-all duration-1000 group-hover:opacity-40 scale-110 group-hover:scale-100`} />

      {/* Dark Scrim for solid text contrast on desktop */}
      <div className="absolute inset-x-0 bottom-0 h-[85%] bg-gradient-to-t from-black/95 via-black/80 to-transparent z-10 pointer-events-none" />

      {/* Dynamic Animated Beam */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left z-20" />

      {/* Year & Icon Badge */}
      <div className="absolute top-0 right-0 p-6 md:p-12 flex flex-col items-end gap-4 z-20">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-3xl group-hover:border-emerald-500/30 transition-colors duration-500">
          <div className="text-emerald-400 group-hover:scale-110 transition-transform duration-500">
            {expertise.icon}
          </div>
        </div>
        <span className="font-mono text-zinc-500 text-[8px] md:text-xs tracking-[0.3em] uppercase">
          {expertise.year}
        </span>
      </div>

      <div className="relative z-20 flex flex-col gap-4 md:gap-6 w-full">
        <div className="space-y-3">
          <motion.span
            className="font-mono text-[9px] md:text-[11px] tracking-[0.4em] text-emerald-500 uppercase flex items-center gap-3"
          >
            <span className="w-6 md:w-8 h-px bg-emerald-500/30" />
            {expertise.type}
          </motion.span>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-[1.1]">
            {expertise.title}
          </h2>
        </div>

        <p className="font-sans text-sm md:text-base lg:text-lg text-zinc-300 font-light max-w-xl leading-relaxed group-hover:text-zinc-100 transition-colors duration-500">
          {expertise.description}
        </p>

        <div className="flex flex-wrap items-center gap-6 md:gap-12 pt-4 md:pt-6 border-t border-white/10 mt-auto">
          {expertise.stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-zinc-500 uppercase">{stat.label}</span>
              <span className="font-serif text-xl md:text-3xl text-zinc-100 group-hover:text-emerald-400 transition-colors duration-500">{stat.value}</span>
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
