"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const springConfig = { stiffness: 100, damping: 30, mass: 0.5 };
  const mouseXSpring = useSpring(mousePosition.x, springConfig);
  const mouseYSpring = useSpring(mousePosition.y, springConfig);

  const title = "DIGITAL OBSIDIAN";
  
  return (
    <section ref={container} className="relative h-[120vh] flex flex-col items-center justify-center overflow-hidden bg-obsidian-950">
      {/* Cinematic Grid Reveal */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(16,185,129,0.05),transparent)]" />
      </div>

      {/* Multi-layered Parallax Mesh Background */}
      <motion.div
        style={{ x: mouseXSpring, y: mouseYSpring, scale }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute -top-[10%] -left-[10%] w-[80vw] h-[80vw] rounded-full bg-emerald-900/10 blur-[140px] animate-aurora mix-blend-screen" />
        <div className="absolute top-[30%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-zinc-800/20 blur-[140px] animate-aurora mix-blend-screen" style={{ animationDelay: '-7s' }} />
        <div className="absolute -bottom-[10%] left-[10%] w-[90vw] h-[90vw] rounded-full bg-emerald-500/5 blur-[160px] animate-aurora" style={{ animationDelay: '-14s' }} />
      </motion.div>

      <motion.div style={{ y, opacity }} className="relative z-10 flex flex-col items-center text-center px-4 w-full">
        {/* Advanced Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 group relative"
        >
          <div className="absolute inset-0 bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative px-6 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden">
            <div className="absolute inset-0 w-full h-full animate-beam bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
            <span className="font-mono text-[10px] tracking-[0.4em] text-emerald-400 uppercase">
              Spécification Core v.2026
            </span>
          </div>
        </motion.div>

        {/* Fluid Kinetic Typography */}
        <h1 className="font-serif text-6xl md:text-9xl lg:text-[12rem] leading-[0.85] tracking-tighter uppercase mb-12 flex flex-wrap justify-center overflow-hidden py-4">
          {title.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block overflow-hidden mx-4 lg:mx-8">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  initial={{ y: "110%", rotate: 15, opacity: 0 }}
                  animate={{ y: 0, rotate: 0, opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 2.5 + (wordIndex * 0.1) + (charIndex * 0.04),
                  }}
                  whileHover={{
                    y: -20,
                    color: "#10b981",
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="inline-block cursor-default select-none"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        {/* High-End Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 3.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <p className="font-sans text-lg md:text-2xl text-zinc-400 font-light tracking-wide leading-relaxed">
            Ingénierie de systèmes <span className="text-white font-medium italic">ultra-critiques</span> et design d&apos;interfaces cinématiques à haute fréquence.
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mx-auto" />
        </motion.div>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 4.5 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
      >
        <div className="relative w-[1px] h-24 bg-white/5 overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "300%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-emerald-400 to-transparent"
          />
        </div>
        <span className="font-mono text-[9px] tracking-[0.6em] text-zinc-500 uppercase ml-2">
          Scroll
        </span>
      </motion.div>

      {/* SVG Filters definitions */}
      <svg className="hidden">
        <defs>
          <filter id="liquid-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" />
          </filter>
        </defs>
      </svg>
    </section>
  );
}
