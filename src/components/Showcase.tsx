"use client";

import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Zap, Shield, Cpu } from "lucide-react";

const expertises = [
  {
    id: 1,
    title: "Architectures Immersives",
    year: "CORE UI/UX",
    type: "Ingénierie Front-end",
    icon: <Cpu className="w-5 h-5 md:w-8 md:h-8" />,
    description: "Conception d'interfaces cinématiques à 120 FPS. Expériences utilisateurs premium orientées conversion avec React 19, Next.js 16 et Tailwind v4.",
    stats: [
      { label: "Performance", value: "Aura 60+" },
      { label: "Rendering", value: "SSR/RSC" }
    ],
    color: "from-emerald-600/30 to-emerald-950/60"
  },
  {
    id: 2,
    title: "Agents IA Autonomes",
    year: "INTEGRATION LLM",
    type: "Intelligence Artificielle",
    icon: <Shield className="w-5 h-5 md:w-8 md:h-8" />,
    description: "Orchestration cognitive avancée. Maîtrise des écosystèmes Anthropic (Claude), Manus AI, Grok et outils Google pour des systèmes de raisonnement multi-agents.",
    stats: [
      { label: "Capacité", value: "Multi-Agents" },
      { label: "LLMs", value: "SOTA" }
    ],
    color: "from-zinc-700/30 to-zinc-950/60"
  },
  {
    id: 3,
    title: "Infrastructures & Workflows",
    year: "SERVERLESS & OPS",
    type: "Automatisation Extreme",
    icon: <Zap className="w-5 h-5 md:w-8 md:h-8" />,
    description: "Ingénierie de workflows asynchrones complexes avec Zapier et déploiements locaux destructurés (n8n). Architectures backend Java et NestJS.",
    stats: [
      { label: "Uptime", value: "99.99%" },
      { label: "Latence", value: "Zéro-Friction" }
    ],
    color: "from-emerald-500/30 to-black"
  }
];

export default function Showcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Smoother horizontal scroll transform
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6%"]);
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section ref={targetRef} className="relative h-[350vh] bg-obsidian-950">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Depth Parallax background text - Refined Perspective */}
        <motion.div 
          style={{ x: backgroundX }}
          className="absolute top-1/2 -translate-y-1/2 font-serif text-[28vw] md:text-[25vw] text-white/[0.015] whitespace-nowrap pointer-events-none uppercase tracking-[-0.05em] select-none"
        >
          EXPERTISE ARCHITECTURES EXPERTISE
        </motion.div>

        <motion.div style={{ x }} className="flex gap-12 md:gap-20 px-[8vw] md:px-[20vw]">
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
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { stiffness: 100, damping: 40, mass: 0.5 };
  const spotlightX = useSpring(0, springConfig);
  const spotlightY = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  const background = useMotionTemplate`radial-gradient(800px circle at ${spotlightX}px ${spotlightY}px, rgba(16, 185, 129, 0.08), transparent 50%)`;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-10%" }}
      className="w-[85vw] md:w-[75vw] lg:w-[65vw] h-[80vh] shrink-0 flex flex-col justify-end p-8 md:p-14 lg:p-20 relative overflow-hidden group cursor-none glass-v4 rounded-[40px]"
    >
      {/* Dynamic Light-tracking Refraction (Glassmorphism v4) */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />

      {/* Surface Sparkle / Micro-textures */}
      <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-1000 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />

      {/* Layered Content Background */}
      <div className={`absolute inset-0 bg-gradient-to-tr ${expertise.color} opacity-20 mix-blend-overlay transition-all duration-1000 group-hover:opacity-50 scale-110 group-hover:scale-100`} />
      <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />

      {/* Interactive Top Border Glow */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent z-20"
        style={{
          width: "100%",
          left: "-100%",
          x: useTransform(spotlightX, [0, 1000], ["0%", "100%"])
        }}
      />

      {/* Expertise Badge & Year */}
      <div className="absolute top-0 right-0 p-8 md:p-14 lg:p-20 flex flex-col items-end gap-6 z-20">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-14 h-14 md:w-20 md:h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-3xl group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 transition-all duration-700"
        >
          <div className="text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">
            {expertise.icon}
          </div>
        </motion.div>
        <span className="font-mono text-zinc-500 text-[10px] md:text-sm tracking-[0.4em] uppercase">
          {expertise.year}
        </span>
      </div>

      <div className="relative z-20 flex flex-col gap-6 md:gap-10 w-full">
        <div className="space-y-4">
          <motion.span
            className="font-mono text-[10px] md:text-[12px] tracking-[0.5em] text-emerald-500 uppercase flex items-center gap-4"
          >
            <span className="w-8 md:w-12 h-px bg-emerald-500/40" />
            {expertise.type}
          </motion.span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl text-white tracking-tighter uppercase leading-[0.9]">
            {expertise.title}
          </h2>
        </div>

        <p className="font-sans text-base md:text-xl lg:text-2xl text-zinc-300 font-extralight max-w-3xl leading-relaxed group-hover:text-zinc-100 transition-colors duration-700">
          {expertise.description}
        </p>

        <div className="flex flex-wrap items-center gap-8 md:gap-16 pt-8 md:pt-12 border-t border-white/5 mt-auto">
          {expertise.stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-zinc-600 uppercase">{stat.label}</span>
              <span className="font-serif text-2xl md:text-4xl text-zinc-100 group-hover:text-emerald-400 transition-colors duration-700">{stat.value}</span>
            </div>
          ))}

          <div className="ml-auto">
            <motion.div
              whileHover={{ scale: 1.15, rotate: 45 }}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-700"
            >
              <ArrowUpRight className="w-8 h-8 text-white group-hover:text-black transition-colors duration-500" strokeWidth={1} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
