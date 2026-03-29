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

  const y = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 60,
        y: (e.clientY / window.innerHeight - 0.5) * 60,
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const springConfig = { stiffness: 100, damping: 30, mass: 0.5 };
  const mouseXSpring = useSpring(mousePosition.x, springConfig);
  const mouseYSpring = useSpring(mousePosition.y, springConfig);

  const title = "DIGITAL OBSIDIAN";
  
  return (
    <section
      ref={container}
      className="relative min-h-[120svh] flex flex-col items-center justify-center overflow-hidden bg-obsidian-950"
      style={{ perspective: "1200px" }}
    >
      {/* Dynamic Digital Portal Background */}
      <motion.div 
        style={{ scale, rotateX }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-[160vw] h-[160vw] md:w-[120vw] md:h-[120vw] max-w-[1600px] max-h-[1600px]">
          <div 
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{ 
              maskImage: "radial-gradient(circle at center, black 10%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(circle at center, black 10%, transparent 70%)"
            }}
          >
            {/* Liquid Background Video with Filter */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen scale-110 liquid-filter"
            >
              <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </video>

            {/* Secondary Aurora Layer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 via-transparent to-zinc-900/40 animate-aurora mix-blend-overlay" />
          </div>
        </div>
      </motion.div>

      {/* Cinematic Precision Grid */}
      <div className="absolute inset-0 z-[1] opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_1000px_at_50%_50%,rgba(16,185,129,0.08),transparent)]" />
      </div>

      {/* Floating Parallax Elements */}
      <motion.div
        style={{ x: mouseXSpring, y: mouseYSpring }}
        className="absolute inset-0 z-[2] overflow-hidden pointer-events-none"
      >
        <div className="absolute top-[15%] left-[15%] w-32 h-32 rounded-full bg-emerald-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-64 h-64 rounded-full bg-zinc-800/20 blur-[100px] animate-kinetic" />
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center text-center px-4 w-full"
      >
        {/* Elite Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 group relative"
        >
          <div className="absolute inset-0 bg-emerald-500/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden glass-panel border-emerald-500/20">
            <div className="absolute inset-0 w-full h-full animate-beam bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent pointer-events-none" />
            <span className="font-mono text-[11px] tracking-[0.5em] text-emerald-400 uppercase font-bold">
              Architecte IA & Ecosystèmes Critiques
            </span>
          </div>
        </motion.div>

        {/* 3D Kinetic Typography */}
        <h1 className="font-serif text-[12vw] md:text-[10vw] lg:text-[11rem] leading-[0.8] tracking-tighter uppercase mb-16 flex flex-wrap justify-center py-8">
          {title.split(" ").map((word, wordIndex) => (
            <div key={wordIndex} className="flex overflow-hidden mx-4 md:mx-8 lg:mx-12">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  initial={{ y: "110%", rotateY: 90, opacity: 0 }}
                  animate={{ y: 0, rotateY: 0, opacity: 1 }}
                  transition={{
                    duration: 1.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 2.0 + (wordIndex * 0.15) + (charIndex * 0.05),
                  }}
                  whileHover={{
                    y: -30,
                    scale: 1.1,
                    color: "#34d399",
                    textShadow: "0 0 30px rgba(16,185,129,0.5)",
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  className="inline-block cursor-default select-none liquid-glass-filter"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          ))}
        </h1>

        {/* High-Impact Vision */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 3.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <p className="font-sans text-xl md:text-3xl text-zinc-400 font-extralight tracking-tight leading-relaxed">
            Ingénierie de précision pour <span className="text-white font-medium italic underline decoration-emerald-500/30 underline-offset-8">l&apos;élite technologique</span>. Agents IA Autonomes & Workflows Haute-Fréquence.
          </p>
          <div className="flex items-center justify-center gap-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-emerald-500/50" />
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_15px_#10b981]" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-emerald-500/50" />
          </div>
        </motion.div>
      </motion.div>

      {/* Cinematic Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 4.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-8"
      >
        <div className="relative w-px h-32 bg-white/5 overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "300%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-emerald-400 to-transparent"
          />
        </div>
        <span className="font-mono text-[10px] tracking-[0.8em] text-zinc-500 uppercase ml-4">
          Ascension
        </span>
      </motion.div>
    </section>
  );
}
