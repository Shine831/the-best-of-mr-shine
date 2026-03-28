"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX / innerWidth - 0.5);
      mouseY.set(clientY / innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-5, 5]);

  const title = "DIGITAL OBSIDIAN";
  
  return (
    <section ref={container} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-obsidian-950">
      {/* Animated Aurora Background - Multi-layered */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vw] rounded-full bg-emerald-900/20 blur-[150px] animate-aurora mix-blend-screen" />
        <div className="absolute top-[30%] -right-[15%] w-[70vw] h-[70vw] rounded-full bg-emerald-600/10 blur-[120px] animate-aurora mix-blend-screen" style={{ animationDelay: '-4s' }} />
        <div className="absolute bottom-[10%] left-[10%] w-[60vw] h-[60vw] rounded-full bg-zinc-800/20 blur-[100px] animate-aurora mix-blend-overlay" style={{ animationDelay: '-8s' }} />
        <div className="absolute top-[10%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-emerald-500/5 blur-[80px] animate-aurora" style={{ animationDelay: '-12s' }} />
        <div className="absolute bottom-[-10%] right-[20%] w-[50vw] h-[50vw] rounded-full bg-black/40 blur-[130px] animate-aurora" style={{ animationDelay: '-16s' }} />
      </div>

      {/* Interactive spotlight */}
      <motion.div
        className="absolute inset-0 z-[1] pointer-events-none opacity-40"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([x, y]) => `radial-gradient(circle at ${(Number(x) + 0.5) * 100}% ${(Number(y) + 0.5) * 100}%, rgba(16, 185, 129, 0.15) 0%, transparent 40%)`
          )
        }}
      />

      <motion.div
        style={{ y, opacity, rotateX, rotateY, perspective: 1000 }}
        className="relative z-10 flex flex-col items-center text-center px-4 w-full"
      >
        {/* Top specific badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
        >
          <span className="font-mono text-[10px] tracking-[0.4em] text-emerald-400 uppercase">
            Architecte Solutions Critiques
          </span>
        </motion.div>

        {/* Kinetic Title Split with Spring Physics */}
        <h1 className="font-serif text-5xl md:text-8xl lg:text-[11rem] leading-[0.85] tracking-tighter uppercase mb-10 flex flex-wrap justify-center">
          {title.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block overflow-hidden mx-2 lg:mx-6">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  initial={{ y: "110%", rotateX: 90 }}
                  animate={{ y: 0, rotateX: 0 }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                    delay: 0.8 + (wordIndex * 0.1) + (charIndex * 0.05),
                  }}
                  className="inline-block origin-bottom"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.8, ease: "easeOut" }}
          className="font-sans text-sm md:text-xl text-zinc-400 max-w-3xl mx-auto font-light tracking-wide leading-relaxed"
        >
          Ingénierie de précision pour écosystèmes digitaux asymétriques. <br className="hidden md:block"/>
          L&apos;alliance du <span className="text-emerald-400 font-medium">minimalisme absolu</span> et de la performance brute.
        </motion.p>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 hidden md:flex"
      >
        <span className="font-mono text-[9px] tracking-[0.5em] text-zinc-500 uppercase">
          Flux
        </span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-emerald-500/50 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/3 bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.8)]"
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
