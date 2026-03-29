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
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <section id="expertises" ref={targetRef} className="relative h-[300vh] bg-obsidian-950">
      <div className="sticky top-0 h-[100svh] flex items-center overflow-hidden" style={{ perspective: "2000px" }}>
        
        {/* Cinematic Parallax Background Text */}
        <motion.div 
          style={{ x: backgroundX }}
          className="absolute top-1/2 -translate-y-1/2 font-serif text-[35vw] md:text-[30vw] text-white/[0.01] whitespace-nowrap pointer-events-none uppercase tracking-tighter italic"
        >
          ENGINEERING ARCHITECTURES PRECISION
        </motion.div>

        <motion.div
          style={{ x, rotateY }}
          className="flex gap-12 md:gap-20 px-[10vw] md:px-[15vw]"
        >
          {expertises.map((expertise) => (
            <ExpertiseCard key={expertise.id} expertise={expertise} />
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

function ExpertiseCard({ expertise }: { expertise: Expertise }) {
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
      className="w-[85vw] md:w-[70vw] lg:w-[65vw] h-[80vh] shrink-0 flex flex-col justify-end p-8 md:p-12 lg:p-16 glass-panel relative overflow-hidden group cursor-none"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* 2026 Micro-Interaction: Liquid Video Texture Reveal */}
      <div 
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-all duration-1000 mix-blend-screen pointer-events-none liquid-filter"
        style={{ 
          maskImage: "radial-gradient(circle at center, black 0%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 0%, transparent 85%)"
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-150 group-hover:scale-110 transition-transform duration-[3s] ease-out"
        >
          <source src="/videos/expertises-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Magnetic Light Tracker */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.15), transparent 40%)`
        }}
      />

      {/* Kinetic Border Beam */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left z-20" />

      {/* Floating Identity Badge */}
      <div className="absolute top-0 right-0 p-8 md:p-16 flex flex-col items-end gap-6 z-20">
        <motion.div
          whileHover={{ rotate: 15, scale: 1.1 }}
          className="w-12 h-12 md:w-20 md:h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-3xl group-hover:border-emerald-500/50 transition-all duration-500 shadow-2xl"
        >
          <div className="text-emerald-400 group-hover:text-emerald-300 transition-colors duration-500">
            {expertise.icon}
          </div>
        </motion.div>
        <span className="font-mono text-zinc-500 text-[9px] md:text-sm tracking-[0.5em] uppercase font-bold">
          {expertise.year}
        </span>
      </div>

      <div className="relative z-20 flex flex-col gap-6 md:gap-10 w-full" style={{ transform: "translateZ(50px)" }}>
        <div className="space-y-4">
          <motion.div
            className="flex items-center gap-4"
          >
            <span className="w-12 md:w-16 h-px bg-emerald-500/40" />
            <span className="font-mono text-[10px] md:text-[12px] tracking-[0.6em] text-emerald-500 uppercase font-black">
              {expertise.type}
            </span>
          </motion.div>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl text-white tracking-tighter uppercase leading-[1.0] group-hover:text-emerald-50 transition-colors duration-700">
            {expertise.title}
          </h2>
        </div>

        <p className="font-sans text-base md:text-xl lg:text-2xl text-zinc-400 font-extralight max-w-2xl leading-relaxed group-hover:text-zinc-200 transition-colors duration-700">
          {expertise.description}
        </p>

        <div className="flex flex-wrap items-center gap-8 md:gap-16 pt-8 md:pt-12 border-t border-white/10 mt-auto">
          {expertise.stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="font-mono text-[10px] md:text-[11px] tracking-[0.4em] text-zinc-500 uppercase font-medium">{stat.label}</span>
              <span className="font-serif text-2xl md:text-4xl text-zinc-100 group-hover:text-emerald-400 transition-colors duration-500">{stat.value}</span>
            </div>
          ))}

          <div className="ml-auto">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 45 }}
              className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-700 shadow-[0_0_40px_rgba(16,185,129,0)] group-hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]"
            >
              <ArrowUpRight className="w-8 h-8 text-white group-hover:text-black transition-colors duration-700" strokeWidth={1.5} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
