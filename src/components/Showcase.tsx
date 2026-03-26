"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { Zap, Shield, Cpu, ExternalLink } from "lucide-react";

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
    tags: ["React 19", "Next.js 16", "Tailwind v4"],
    color: "from-emerald-600/20 to-emerald-950/40"
  },
  {
    id: 2,
    title: "Agents IA Autonomes",
    year: "INTEGRATION LLM",
    type: "Intelligence Artificielle",
    icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />,
    description: "Orchestration cognitive avancée. Maîtrise des écosystèmes Anthropic (Claude 3.7), Manus AI, Grok et outils Google pour des systèmes de raisonnement multi-agents.",
    stats: [
      { label: "Capacité", value: "Multi-Agents" },
      { label: "LLMs", value: "SOTA" }
    ],
    tags: ["Anthropic", "Manus AI", "RAG"],
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
    tags: ["Zapier", "n8n", "NestJS"],
    color: "from-emerald-500/20 to-black"
  }
];

export default function Showcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6%"]);
  const xSpring = useSpring(x, { stiffness: 100, damping: 30, mass: 1 });

  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-obsidian-pure">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Depth Parallax background text - Refined opacity */}
        <motion.div 
          style={{ x: backgroundX }}
          className="absolute top-1/2 -translate-y-1/2 font-serif text-[30vw] md:text-[25vw] text-white/[0.012] whitespace-nowrap pointer-events-none uppercase tracking-tighter"
        >
          EXPERTISE ARCHITECTURES EXPERTISE
        </motion.div>

        <motion.div style={{ x: xSpring }} className="flex gap-12 md:gap-24 px-[10vw] md:px-[15vw]">
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
  tags: string[];
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
      className="w-[90vw] md:w-[75vw] lg:w-[65vw] h-[80vh] shrink-0 flex flex-col p-8 md:p-12 lg:p-16 glass-panel-v4 relative overflow-hidden group cursor-none"
    >
      {/* Precision Light-tracking (Glassmorphism v4) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.08), transparent 45%)`
        }}
      />

      {/* Dynamic Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-tr ${expertise.color} opacity-10 mix-blend-overlay transition-all duration-1000 group-hover:opacity-30 scale-110 group-hover:scale-100`} />

      {/* Deep Scrim for contrast */}
      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black/90 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Top Border Beam */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-center z-20" />

      {/* Bento-style Layout */}
      <div className="relative z-20 flex flex-col h-full gap-8">
        <div className="flex justify-between items-start">
          <div className="space-y-4">
            <motion.div
              className="font-mono text-[10px] md:text-xs tracking-[0.5em] text-emerald-500 uppercase flex items-center gap-4"
            >
              <span className="w-8 md:w-12 h-px bg-emerald-500/30" />
              {expertise.type}
            </motion.div>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl text-white tracking-tighter uppercase leading-[0.9]">
              {expertise.title.split(" ").map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h2>
          </div>

          <div className="flex flex-col items-end gap-6">
             <div className="w-12 h-12 md:w-20 md:h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-3xl group-hover:border-emerald-500/40 transition-all duration-500">
              <div className="text-emerald-400 group-hover:scale-125 transition-transform duration-500 group-hover:rotate-12">
                {expertise.icon}
              </div>
            </div>
            <span className="font-mono text-zinc-500 text-[9px] md:text-[11px] tracking-[0.4em] uppercase">
              {expertise.year}
            </span>
          </div>
        </div>

        <div className="mt-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="space-y-8">
            <p className="font-sans text-base md:text-xl text-zinc-300 font-extralight leading-relaxed group-hover:text-zinc-100 transition-colors duration-500 max-w-md">
              {expertise.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {expertise.tags.map((tag, i) => (
                <span key={i} className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 font-mono text-[9px] text-zinc-400 uppercase tracking-widest group-hover:border-emerald-500/20 group-hover:text-emerald-400 transition-all duration-500">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between lg:justify-end gap-12">
            <div className="flex gap-12">
              {expertise.stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] tracking-[0.4em] text-zinc-500 uppercase">{stat.label}</span>
                  <span className="font-serif text-2xl md:text-4xl text-zinc-100 group-hover:text-emerald-400 transition-colors duration-500">{stat.value}</span>
                </div>
              ))}
            </div>

            <div className="group/btn relative w-16 h-16 md:w-24 md:h-24 shrink-0">
               <div className="absolute inset-0 rounded-full border border-white/10 group-hover/btn:scale-110 group-hover/btn:border-emerald-500/50 transition-all duration-500" />
               <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-xl group-hover/btn:bg-white group-hover:rotate-45 transition-all duration-500">
                  <ExternalLink className="w-6 h-6 md:w-8 md:h-8 text-white group-hover/btn:text-black transition-colors" strokeWidth={1} />
               </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
