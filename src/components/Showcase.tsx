"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
    color: "from-emerald-900/40 to-black"
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
    color: "from-zinc-800/40 to-black"
  }
];

export default function Showcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate layout dynamically, typically 100% per child. Adjust based on number of items.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]); 

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Parallax background text */}
        <motion.div 
          style={{ x: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) }}
          className="absolute top-1/2 -translate-y-1/2 font-serif text-[20vw] text-white/[0.02] whitespace-nowrap pointer-events-none uppercase tracking-tighter"
        >
          Projets Critiques Projets Critiques
        </motion.div>

        <motion.div style={{ x }} className="flex gap-8 px-[10vw] md:px-[15vw]">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="w-[85vw] md:w-[70vw] lg:w-[60vw] h-[70vh] shrink-0 flex flex-col justify-end p-8 md:p-14 glass-panel relative overflow-hidden group"
            >
              {/* Dynamic Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-30 mix-blend-screen transition-opacity duration-700 group-hover:opacity-60 scale-105 group-hover:scale-100 transition-transform`} />
              
              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-bl-[80px] border-l border-b border-white/10 flex items-center justify-center backdrop-blur-3xl">
                <span className="font-mono text-zinc-500 text-[10px] md:text-xs tracking-widest">{project.year}</span>
              </div>

              <div className="relative z-10 flex flex-col gap-6 md:gap-8">
                <div>
                  <span className="font-mono text-[9px] md:text-[11px] tracking-[0.4em] text-emerald-500 uppercase mb-4 block">
                    {project.type}
                  </span>
                  <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-wide uppercase leading-none">
                    {project.title}
                  </h2>
                </div>
                
                <p className="font-sans text-base md:text-xl text-zinc-300 font-light max-w-xl leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-8 md:gap-16 pt-6 md:pt-8 border-t border-white/10 mt-auto">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-500 uppercase">{stat.label}</span>
                      <span className="font-serif text-2xl md:text-4xl text-zinc-100">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
