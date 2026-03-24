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
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 300]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.9, 1, 1.1]);
  const rotate = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [-5, 0, 5]);

  return (
    <section ref={container} className="relative h-screen flex items-center justify-center bg-obsidian-950 overflow-hidden py-32">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      {/* Decorative lines */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center max-w-7xl mx-auto px-6">
        <motion.div style={{ y: y1 }} className="absolute text-[15vw] md:text-[10vw] font-serif font-black text-white/[0.02] uppercase tracking-[0.2em] whitespace-nowrap pointer-events-none select-none">
          L&apos;ingénierie du vide
        </motion.div>
        
        <motion.div style={{ y: y2 }} className="absolute mt-[30vh] text-[15vw] md:text-[10vw] font-serif font-black text-emerald-500/[0.01] uppercase tracking-[0.2em] whitespace-nowrap pointer-events-none select-none">
          Minimalisme Radical
        </motion.div>

        <motion.div style={{ opacity, scale, rotate }} className="relative z-20 flex flex-col items-center gap-12 glass-morphism-v3 p-12 md:p-24 border-none shadow-none bg-transparent">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: 96 }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="w-px bg-gradient-to-b from-transparent via-emerald-500 to-transparent"
          />
          
          <h3 className="font-serif text-3xl md:text-6xl lg:text-7xl text-zinc-100 font-light tracking-tight leading-[1.1] text-center max-w-5xl">
            &quot;La <span className="text-emerald-500 italic">perfection</span> est atteinte, non pas lorsqu&apos;il n&apos;y a plus rien à ajouter, mais lorsqu&apos;il n&apos;y a plus rien à <span className="underline decoration-emerald-500/30 underline-offset-8">retirer</span>.&quot;
          </h3>
          
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-px bg-emerald-500/50" />
            <p className="font-mono text-[10px] md:text-xs tracking-[0.8em] text-zinc-500 uppercase">
              Antoine de Saint-Exupéry
            </p>
          </div>

          <div className="absolute -bottom-12 flex gap-4">
             {[1, 2, 3].map((i) => (
               <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4
                }}
                className="w-1.5 h-1.5 rounded-full bg-emerald-500/50"
               />
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
