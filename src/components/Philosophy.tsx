"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Philosophy() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [300, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-200, 400]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  const quote = "La perfection est atteinte, non pas lorsqu'il n'y a plus rien à ajouter, mais lorsqu'il n'y a plus rien à retirer.";

  return (
    <section
      ref={container}
      className="relative min-h-screen flex items-center justify-center bg-obsidian-950 overflow-hidden py-60"
      style={{ perspective: "1500px" }}
    >
      {/* Cinematic Background Ambience */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      {/* Liquid Glass Overlay */}
      <div className="absolute inset-0 z-[1] liquid-glass-filter opacity-30 pointer-events-none" />

      <div className="relative z-10 text-center flex flex-col items-center max-w-7xl mx-auto px-6">
        {/* Kinetic Depth Background Text */}
        <motion.div
          style={{ y: y1, rotate }}
          className="absolute -top-40 left-0 text-[20vw] font-serif font-black text-white/[0.015] uppercase tracking-[1em] whitespace-nowrap pointer-events-none select-none mask-radial italic"
        >
          ESSENCE
        </motion.div>
        
        <motion.div
          style={{ y: y2, rotate: -rotate }}
          className="absolute -bottom-40 right-0 text-[20vw] font-serif font-black text-white/[0.01] uppercase tracking-[1em] whitespace-nowrap pointer-events-none select-none mask-radial italic"
        >
          RIGUEUR
        </motion.div>

        <div className="relative z-20 flex flex-col items-center gap-24">
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: "120px", opacity: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="w-px bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent"
          />
          
          <div className="max-w-5xl space-y-16">
            <h3 className="font-serif text-5xl md:text-7xl lg:text-8xl text-zinc-100 font-extralight tracking-tight leading-[1.0] text-center">
              {quote.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, filter: "blur(20px)", y: 40, rotateX: 45 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0, rotateX: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  viewport={{ once: true, margin: "-10%" }}
                  className="inline-block mr-[0.3em] origin-bottom liquid-glass-filter"
                >
                  {word}
                </motion.span>
              ))}
            </h3>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-8"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-emerald-500/40" />
                <div className="w-3 h-3 rounded-full border border-emerald-500/50 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-emerald-500/40" />
              </div>
              <div className="space-y-2">
                <p className="font-mono text-xs md:text-sm tracking-[0.8em] text-emerald-400 uppercase font-bold">
                  Antoine de Saint-Exupéry
                </p>
                <p className="font-mono text-[9px] tracking-[0.4em] text-zinc-600 uppercase">
                  Philosophie du Design Minimaliste & Radical
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: "120px", opacity: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 1 }}
            className="w-px bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
