"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const springMouseX = useSpring(mousePos.x, { stiffness: 50, damping: 20 });
  const springMouseY = useSpring(mousePos.y, { stiffness: 50, damping: 20 });

  const title = "DIGITAL OBSIDIAN";
  
  return (
    <section ref={container} className="relative h-[110vh] flex flex-col items-center justify-center overflow-hidden bg-obsidian-950">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ x: springMouseX, y: springMouseY }}
          className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%]"
        >
          <div className="absolute top-[10%] left-[10%] w-[60vw] h-[60vw] rounded-full bg-emerald-500/10 blur-[120px] animate-aurora-ultra mix-blend-screen" />
          <div className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-zinc-800/20 blur-[120px] animate-aurora-ultra mix-blend-screen" style={{ animationDelay: '-8s' }} />
          <div className="absolute top-[30%] right-[20%] w-[70vw] h-[70vw] rounded-full bg-emerald-950/20 blur-[150px] animate-aurora-ultra" style={{ animationDelay: '-15s' }} />
        </motion.div>

        <div className="absolute inset-0 grain-effect opacity-30 mix-blend-overlay" />
      </div>

      <motion.div style={{ y, opacity, scale }} className="relative z-10 flex flex-col items-center text-center px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 px-6 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-2xl relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <span className="font-mono text-[10px] tracking-[0.4em] text-zinc-400 uppercase relative z-10">
            Architecte Solutions Critiques — <span className="text-emerald-500">v2.0.26</span>
          </span>
        </motion.div>

        <h1 className="font-serif text-6xl md:text-9xl lg:text-[12rem] leading-[0.85] tracking-tighter uppercase mb-12 flex flex-wrap justify-center items-center">
          {title.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block overflow-hidden mr-6 lg:mr-12 last:mr-0 py-4">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  initial={{ y: "110%", rotateX: -90, opacity: 0 }}
                  animate={{ y: 0, rotateX: 0, opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 2.6 + (wordIndex * 0.1) + (charIndex * 0.04),
                  }}
                  whileHover={{
                    y: -20,
                    color: "#10b981",
                    transition: { duration: 0.2 }
                  }}
                  className="inline-block transform-gpu text-gradient-premium"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 text-left">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 3.2 }}
            className="w-12 md:w-24 h-px bg-emerald-500/50 mt-4 origin-left"
          />
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 3.5, ease: "easeOut" }}
            className="font-sans text-base md:text-xl text-zinc-400 font-light tracking-wide leading-relaxed max-w-xl"
          >
            Conception d&apos;écosystèmes digitaux <span className="text-white italic">asymétriques</span> où l&apos;ingénierie de pointe rencontre le minimalisme absolu.
            <br />
            <span className="text-zinc-600 font-mono text-xs mt-4 block tracking-widest uppercase">
              {"// Performance / Latence Nulle / Esthétique Radicale"}
            </span>
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4.5 }}
        className="absolute bottom-16 left-12 flex flex-col items-start gap-4 hidden md:flex"
      >
        <div className="w-px h-24 bg-gradient-to-b from-emerald-500/50 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
        <span className="font-mono text-[9px] tracking-[0.5em] text-zinc-500 uppercase mt-2">
          Vertical Scroll
        </span>
      </motion.div>
    </section>
  );
}
