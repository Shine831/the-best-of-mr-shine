"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Philosophy() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [150, -250]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 250]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.45, 0.6], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.95, 1, 1.05]);

  return (
    <section ref={container} className="relative h-screen flex items-center justify-center bg-black overflow-hidden py-32">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(24,24,27,0.4)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="relative z-10 text-center flex flex-col items-center max-w-5xl mx-auto px-6">
        <motion.div style={{ y: y1 }} className="absolute text-[12vw] md:text-[8vw] font-serif font-bold text-white/[0.03] uppercase tracking-tighter whitespace-nowrap pointer-events-none select-none">
          L&apos;ingénierie de l&apos;éclat
        </motion.div>
        
        <motion.div style={{ y: y2 }} className="absolute mt-[20vh] text-[12vw] md:text-[8vw] font-serif font-bold text-white/[0.02] uppercase tracking-tighter whitespace-nowrap pointer-events-none select-none">
          Minimalisme Absolu
        </motion.div>

        <motion.div style={{ opacity, scale }} className="relative z-20 flex flex-col items-center gap-10">
          <div className="w-px h-16 md:h-24 bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent" />
          
          <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl text-zinc-100/90 font-light tracking-wide leading-[1.3] text-center max-w-4xl">
            &quot;La perfection est atteinte, non pas lorsqu&apos;il n&apos;y a plus rien à ajouter, mais lorsqu&apos;il n&apos;y a plus rien à retirer.&quot;
          </h3>
          
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-[1px] bg-zinc-700" />
            <p className="font-mono text-[10px] tracking-[0.5em] text-zinc-500 uppercase">
              Antoine de Saint-Exupéry
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
