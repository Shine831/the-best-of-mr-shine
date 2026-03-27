"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const blur = useTransform(scrollYProgress, [0, 0.5], ["blur(0px)", "blur(20px)"]);

  // Advanced Mouse Tracking for 3D Perspective
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 40 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 40 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX / innerWidth - 0.5);
      mouseY.set(clientY / innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const title = "DIGITAL OBSIDIAN";
  
  return (
    <section ref={container} className="relative h-[130vh] flex flex-col items-center justify-center overflow-hidden bg-obsidian-950 perspective-1000">
      {/* Cinematic Grid Reveal - Enhanced with mask */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none mask-radial">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Multi-layered Parallax Mesh Background - Deeper & More Intense */}
      <motion.div
        style={{ scale, filter: blur }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-[10%] left-[5%] w-[100vw] h-[100vw] rounded-full bg-emerald-900/15 blur-[160px] animate-aurora mix-blend-screen" />
        <div className="absolute top-[40%] right-[-15%] w-[80vw] h-[80vw] rounded-full bg-zinc-900/40 blur-[180px] animate-aurora mix-blend-screen" style={{ animationDelay: '-8s' }} />
        <div className="absolute bottom-[-20%] left-[20%] w-[110vw] h-[110vw] rounded-full bg-emerald-500/5 blur-[200px] animate-aurora" style={{ animationDelay: '-15s' }} />
      </motion.div>

      <motion.div
        style={{
          y,
          opacity,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative z-10 flex flex-col items-center text-center px-4 w-full"
      >
        {/* Advanced Badge with Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 group relative"
        >
          <div className="absolute -inset-4 bg-emerald-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative px-8 py-2.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-2xl overflow-hidden glass-v4">
            <div className="absolute inset-0 w-full h-full animate-beam bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent pointer-events-none" />
            <span className="font-mono text-[10px] md:text-xs tracking-[0.5em] text-emerald-400 uppercase font-medium">
              Architecte IA & Systèmes Critiques
            </span>
          </div>
        </motion.div>

        {/* 3D Kinetic Typography */}
        <div className="relative mb-16 select-none" style={{ transform: "translateZ(50px)" }}>
           <h1 className="font-serif text-6xl md:text-9xl lg:text-[13rem] leading-[0.8] tracking-tighter uppercase flex flex-wrap justify-center py-8">
            {title.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block overflow-hidden mx-4 lg:mx-8">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={{ y: "100%", rotateX: 90, opacity: 0 }}
                    animate={{ y: 0, rotateX: 0, opacity: 1 }}
                    transition={{
                      duration: 1.8,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.8 + (wordIndex * 0.1) + (charIndex * 0.05),
                    }}
                    whileHover={{
                      scale: 1.1,
                      color: "var(--color-emerald-glow)",
                      textShadow: "0 0 30px rgba(16,185,129,0.5)",
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          {/* Subtle reflection below text */}
          <div className="absolute top-full left-0 w-full h-32 bg-gradient-to-b from-emerald-500/5 to-transparent blur-3xl -mt-8 pointer-events-none opacity-50" />
        </div>

        {/* High-End Cinematic Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto space-y-8"
          style={{ transform: "translateZ(30px)" }}
        >
          <p className="font-sans text-xl md:text-3xl text-zinc-400 font-extralight tracking-tight leading-relaxed">
            Ingénierie de systèmes <span className="text-white font-normal italic">ultra-critiques</span>. <br className="hidden md:block" />
            Déploiement d&apos;Agents IA Autonomes & Architectures Front-end SOTA.
          </p>
          <div className="relative w-40 h-px mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-white/10" />
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-emerald-500/60"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Indicator - Refined */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 3 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-8"
      >
        <div className="relative w-[1px] h-32 bg-white/5 overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "300%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-emerald-400 to-transparent"
          />
        </div>
        <span className="font-mono text-[10px] tracking-[0.8em] text-zinc-600 uppercase translate-x-1">
          Scroll
        </span>
      </motion.div>

      {/* SVG Filters for "Liquid" effects on text (optional use) */}
      <svg className="hidden">
        <defs>
          <filter id="liquid-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="25" />
          </filter>
        </defs>
      </svg>
    </section>
  );
}
