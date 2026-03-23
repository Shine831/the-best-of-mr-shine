"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Philosophy() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [200, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 400]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.9, 1, 1.1]);

  const quote = "La perfection est atteinte, non pas lorsqu'il n'y a plus rien à ajouter, mais lorsqu'il n'y a plus rien à retirer.";

  return (
    <section ref={container} className="relative h-[150vh] flex items-center justify-center bg-obsidian-950 overflow-hidden py-32">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      {/* Background Kinetic Typography */}
      <motion.div style={{ y: y1 }} className="absolute top-1/4 left-0 w-full text-center text-[15vw] md:text-[10vw] font-serif font-bold text-emerald-500/[0.02] uppercase tracking-tighter whitespace-nowrap pointer-events-none select-none z-0">
        L&apos;INGÉNIERIE DE L&apos;ÉCLAT
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute bottom-1/4 left-0 w-full text-center text-[15vw] md:text-[10vw] font-serif font-bold text-white/[0.015] uppercase tracking-tighter whitespace-nowrap pointer-events-none select-none z-0">
        MINIMALISME ABSOLU
      </motion.div>

      <div className="sticky top-0 h-screen flex items-center justify-center w-full">
        <motion.div style={{ opacity, scale }} className="relative z-20 flex flex-col items-center gap-12 max-w-5xl mx-auto px-6">
          <div className="w-px h-24 md:h-32 bg-gradient-to-b from-transparent via-emerald-500 to-transparent" />
          
          <h3 className="font-serif text-3xl md:text-5xl lg:text-7xl text-zinc-100/90 font-light tracking-wide leading-[1.2] text-center max-w-4xl">
            {quote.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
                className="inline-block mr-[0.2em]"
              >
                {word}
              </motion.span>
            ))}
          </h3>
          
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-px bg-emerald-500/30" />
            <p className="font-mono text-[10px] md:text-xs tracking-[0.6em] text-emerald-400 uppercase">
              Antoine de Saint-Exupéry
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
