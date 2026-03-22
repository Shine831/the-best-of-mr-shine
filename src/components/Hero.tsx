"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const title = "DIGITAL OBSIDIAN";
  
  return (
    <section ref={container} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-emerald-900/10 blur-[120px] animate-aurora mix-blend-screen" />
        <div className="absolute top-[40%] text-right -right-[10%] w-[60vw] h-[60vw] rounded-full bg-zinc-800/20 blur-[120px] animate-aurora mix-blend-screen" style={{ animationDelay: '-5s' }} />
        <div className="absolute -bottom-[20%] left-[20%] w-[80vw] h-[80vw] rounded-full bg-obsidian-900 blur-[150px] animate-aurora" style={{ animationDelay: '-10s' }} />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 flex flex-col items-center text-center px-4 w-full">
        {/* Top specific badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.8, ease: "easeOut" }}
          className="mb-8 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-300 uppercase">
            Architecte Solutions Critiques
          </span>
        </motion.div>

        {/* Kinetic Title Split */}
        <h1 className="font-serif text-5xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-tighter uppercase mb-8 flex flex-wrap justify-center overflow-hidden">
          {title.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block overflow-hidden mr-4 lg:mr-8 last:mr-0">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  initial={{ y: "100%", opacity: 0, rotate: 10 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 2.5 + (wordIndex * 0.1) + (charIndex * 0.03),
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.5, ease: "easeOut" }}
          className="font-sans text-sm md:text-lg text-zinc-400 max-w-2xl mx-auto font-light tracking-wide leading-relaxed"
        >
          Conception d&apos;écosystèmes digitaux asymétriques où l&apos;ingénierie rencontre le minimalisme absolu. <span className="text-zinc-100 font-medium">Spécification 2026.</span>
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 hidden md:flex"
      >
        <span className="font-mono text-[9px] tracking-[0.4em] text-zinc-500 uppercase rotate-90 mb-10 origin-bottom">
          Explorer
        </span>
        <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white/50"
          />
        </div>
      </motion.div>
    </section>
  );
}
