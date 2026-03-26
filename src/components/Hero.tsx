"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [0, 10]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 50);
      mouseY.set((clientY / innerHeight - 0.5) * 50);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const springConfig = { stiffness: 80, damping: 25, mass: 0.8 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const title = "DIGITAL OBSIDIAN";
  
  return (
    <section ref={container} className="relative h-[130vh] flex flex-col items-center justify-center overflow-hidden bg-obsidian-pure">
      {/* Cinematic Grid Reveal - More refined */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_1000px_at_50%_50%,rgba(16,185,129,0.08),transparent)]" />
      </div>

      {/* Ultra-Premium Multi-layered Parallax Mesh */}
      <motion.div
        style={{
          x: mouseXSpring,
          y: mouseYSpring,
          scale,
          filter: useMotionTemplate`blur(${blur}px)`
        }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute -top-[20%] -left-[10%] w-[100vw] h-[100vw] rounded-full bg-emerald-900/15 blur-[160px] animate-aurora mix-blend-screen" />
        <div className="absolute top-[20%] -right-[20%] w-[90vw] h-[90vw] rounded-full bg-zinc-800/25 blur-[180px] animate-aurora mix-blend-screen" style={{ animationDelay: '-8s' }} />
        <div className="absolute -bottom-[20%] left-[5%] w-[110vw] h-[110vw] rounded-full bg-emerald-500/10 blur-[200px] animate-aurora" style={{ animationDelay: '-15s' }} />

        {/* Subtle Liquid Distortion Layer */}
        <div className="absolute inset-0 opacity-40 mix-blend-overlay liquid-filter pointer-events-none" />
      </motion.div>

      <motion.div style={{ y, opacity }} className="relative z-10 flex flex-col items-center text-center px-4 w-full">
        {/* Advanced Architectural Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 group relative cursor-pointer"
        >
          <div className="absolute inset-0 bg-emerald-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative px-8 py-3 rounded-full border border-white/5 bg-black/60 backdrop-blur-2xl overflow-hidden transition-all duration-500 group-hover:border-emerald-500/30">
            <div className="absolute inset-0 w-full h-full animate-beam bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
            <span className="font-mono text-[11px] tracking-[0.5em] text-emerald-400 uppercase">
              Architecte IA & Systèmes Critiques
            </span>
          </div>
        </motion.div>

        {/* Ultra-Premium Kinetic Typography */}
        <h1
          style={{ perspective: "1000px" }}
          className="font-serif text-7xl md:text-[10rem] lg:text-[14rem] leading-[0.8] tracking-tighter uppercase mb-16 flex flex-wrap justify-center overflow-hidden py-8"
        >
          {title.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block overflow-hidden mx-6 lg:mx-10">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  initial={{ y: "100%", rotateX: 90, opacity: 0 }}
                  animate={{ y: 0, rotateX: 0, opacity: 1 }}
                  transition={{
                    duration: 1.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.8 + (wordIndex * 0.15) + (charIndex * 0.05),
                  }}
                  whileHover={{
                    y: -30,
                    color: "#34d399",
                    scale: 1.05,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  className="inline-block cursor-default select-none transition-colors"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        {/* High-End Architectural Description */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <p className="font-sans text-xl md:text-3xl text-zinc-400 font-extralight tracking-wider leading-relaxed">
            Conception d&apos;écosystèmes <span className="text-white font-normal italic">autonomes</span>, <br className="hidden md:block"/> Agents IA (Manus, Claude 3.7) & Architectures Micro-services.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-emerald-500/50" />
            <div className="w-2 h-2 rounded-full border border-emerald-500/50" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-emerald-500/50" />
          </div>
        </motion.div>
      </motion.div>

      {/* Architectural Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 3.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-8"
      >
        <div className="relative w-[1px] h-32 bg-white/5 overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "300%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: [0.45, 0.05, 0.55, 0.95] }}
            className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-emerald-400 to-transparent"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] tracking-[0.8em] text-zinc-500 uppercase ml-2">
            Scroll
          </span>
          <div className="w-1 h-1 rounded-full bg-emerald-500/30 animate-pulse" />
        </div>
      </motion.div>

      {/* SVG Filters definitions for liquid distortion */}
      <svg className="hidden">
        <defs>
          <filter id="liquid-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="25" />
          </filter>
        </defs>
      </svg>
    </section>
  );
}
