"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
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
    color: "from-emerald-900/20 to-emerald-500/10"
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
    color: "from-zinc-800/20 to-zinc-500/10"
  },
  {
    id: 3,
    title: "Quantum Ledger",
    year: "2027",
    type: "Cryptographie Post-Q",
    description: "Couche de sécurité immuable résiliente aux attaques quantiques, déployée sur des noeuds distribués à travers 4 continents.",
    stats: [
      { label: "Sécurité", value: "Lvl 5" },
      { label: "Noeuds", value: "4096" }
    ],
    color: "from-blue-900/20 to-emerald-500/10"
  }
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: y * -10, y: x * 10 });
  };

  const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

  const springRotateX = useSpring(rotate.x, { stiffness: 150, damping: 15 });
  const springRotateY = useSpring(rotate.y, { stiffness: 150, damping: 15 });

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        perspective: 1000
      }}
      className="w-[85vw] md:w-[70vw] lg:w-[50vw] h-[65vh] shrink-0 flex flex-col justify-end p-8 md:p-14 glass-morphism-v3 relative overflow-hidden group transform-gpu"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 mix-blend-screen transition-opacity duration-700 group-hover:opacity-40 group-hover:liquid-filter`} />

      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

      <div className="absolute top-10 right-10 flex flex-col items-end">
        <span className="font-mono text-emerald-500 text-[10px] tracking-[0.5em] uppercase mb-2">Deployed</span>
        <span className="font-serif text-2xl text-white/20 group-hover:text-white/40 transition-colors">{project.year}</span>
      </div>

      <div className="relative z-10 flex flex-col gap-6">
        <div>
          <span className="font-mono text-[10px] tracking-[0.4em] text-zinc-500 uppercase mb-4 block">
            {project.type}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter uppercase leading-none group-hover:text-emerald-400 transition-colors duration-500">
            {project.title}
          </h2>
        </div>

        <p className="font-sans text-sm md:text-lg text-zinc-400 font-light max-w-lg leading-relaxed group-hover:text-zinc-200 transition-colors">
          {project.description}
        </p>

        <div className="flex items-center gap-8 md:gap-16 pt-8 border-t border-white/5 mt-6">
          {project.stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-1">
              <span className="font-mono text-[9px] tracking-[0.3em] text-zinc-600 uppercase">{stat.label}</span>
              <span className="font-serif text-xl md:text-3xl text-zinc-100">{stat.value}</span>
            </div>
          ))}
          <div className="ml-auto">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all duration-500">
              <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Showcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${((projects.length - 1) / projects.length) * 100}%`]);
  const backgroundTextX = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-obsidian-950">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        <motion.div 
          style={{ x: backgroundTextX }}
          className="absolute top-1/2 -translate-y-1/2 font-serif text-[25vw] text-white/[0.01] whitespace-nowrap pointer-events-none uppercase tracking-tighter select-none"
        >
          Architectures Critiques Architectures Critiques
        </motion.div>

        <motion.div
          style={{ x }}
          className="flex gap-12 px-[10vw] md:px-[15vw]"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <div className="absolute bottom-20 left-[15vw] right-[15vw] h-px bg-white/5">
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="absolute inset-0 bg-emerald-500/50 origin-left"
          />
        </div>
      </div>
    </section>
  );
}
