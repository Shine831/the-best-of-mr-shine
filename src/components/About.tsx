"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { label: "Années d'Expérience", value: 4, suffix: "+" },
  { label: "Projets Déployés", value: 25, suffix: "+" },
  { label: "Technologies Maîtrisées", value: 18, suffix: "" },
  { label: "Clients Satisfaits", value: 15, suffix: "+" },
];

function AnimatedCounter({
  value,
  suffix,
  isInView,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const bioWords =
    "Jean Claude Schimit Baha — Architecte de Solutions Digitales basé à Douala. Je conçois des systèmes où chaque ligne de code sert un objectif stratégique. De l'ingénierie front-end cinématique à l'orchestration d'agents IA autonomes, mon approche fusionne rigueur technique et obsession du détail.".split(
      " "
    );

  return (
    <section
      id="a-propos"
      ref={ref}
      className="relative py-32 md:py-40 bg-obsidian-950 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(16,185,129,0.04),transparent_60%)] pointer-events-none z-[1]" />

      <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16">
        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-20 md:mb-28"
        >
          <span className="font-mono text-[10px] md:text-xs tracking-[0.6em] text-emerald-500 uppercase flex items-center gap-4">
            <span className="w-8 md:w-12 h-px bg-emerald-500/30" />À Propos
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Identity card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative frame with 3D Video Texture */}
            <div className="relative glass-panel p-8 md:p-12 space-y-8 overflow-hidden group">
              {/* Diegetic Video Background (2026 Trend) */}
              <div 
                className="absolute inset-0 z-0 opacity-20 group-hover:opacity-50 transition-opacity duration-1000 mix-blend-screen pointer-events-none" 
                style={{ 
                  maskImage: "linear-gradient(to bottom right, black 20%, transparent 80%)", 
                  WebkitMaskImage: "linear-gradient(to bottom right, black 20%, transparent 80%)" 
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                >
                  <source src="/videos/about-bg.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Animated corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-emerald-500/30 z-10" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-emerald-500/30 z-10" />

              {/* Initials */}
              <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center backdrop-blur-md">
                <span className="font-serif text-3xl md:text-4xl text-emerald-400 font-light">
                  JC
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl md:text-3xl text-white uppercase tracking-tight">
                  Jean Claude
                  <br />
                  <span className="text-zinc-500 italic">Schimit Baha</span>
                </h3>
                <p className="font-mono text-[10px] tracking-[0.4em] text-emerald-500 uppercase">
                  Architecte Solutions Digitales
                </p>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-emerald-500/20 via-white/5 to-transparent" />

              {/* Quick info pills */}
              <div className="flex flex-wrap gap-2">
                {[
                  "Douala, Cameroun",
                  "Remote Worldwide",
                  "Freelance",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-[10px] font-mono tracking-wider text-zinc-400 bg-white/[0.03] border border-white/[0.06]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Bio text reveal */}
          <div className="space-y-16">
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-zinc-100 font-extralight tracking-tight leading-[1.2]">
              {bioWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.03,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  viewport={{ once: true, margin: "-5%" }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </h3>
          </div>
        </div>

        {/* Animated Counters Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-12 border-t border-white/[0.06]"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2"
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                isInView={isInView}
              />
              <span className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-zinc-500 uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
