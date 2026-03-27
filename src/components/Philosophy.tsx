"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Philosophy() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [300, -400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-200, 400]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [5, -5]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  const quote = "La perfection est atteinte, non pas lorsqu'il n'y a plus rien à ajouter, mais lorsqu'il n'y a plus rien à retirer.";

  return (
    <section ref={container} className="relative min-h-[150vh] flex items-center justify-center bg-obsidian-950 overflow-hidden py-40 perspective-1000">
      {/* Background Ambience - Layered Glows */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-900/10 blur-[120px] rounded-full animate-aurora pointer-events-none" />
      
      {/* Animated Scanning Beam - More Intense */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-emerald-500/10 via-emerald-500/5 to-transparent animate-beam opacity-30 pointer-events-none" />

      <div className="relative z-10 text-center flex flex-col items-center max-w-7xl mx-auto px-6">
        {/* Sculptural Kinetic Background Text */}
        <motion.div
          style={{ y: y1, rotate: rotate1 }}
          className="absolute -top-40 left-0 text-[18vw] font-serif font-black text-white/[0.012] uppercase tracking-[0.8em] whitespace-nowrap pointer-events-none select-none mask-radial"
        >
          ESSENCE
        </motion.div>
        
        <motion.div
          style={{ y: y2, rotate: rotate2 }}
          className="absolute -bottom-40 right-0 text-[18vw] font-serif font-black text-white/[0.008] uppercase tracking-[0.8em] whitespace-nowrap pointer-events-none select-none mask-radial"
        >
          RIGUEUR
        </motion.div>

        <div className="relative z-20 flex flex-col items-center gap-24">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "150px" }}
            transition={{ duration: 1.8, ease: "circOut" }}
            className="w-[1px] bg-gradient-to-b from-transparent via-emerald-500/60 to-transparent"
          />
          
          <div className="max-w-5xl space-y-16">
            <h3 className="font-serif text-4xl md:text-6xl lg:text-8xl text-zinc-100 font-extralight tracking-tighter leading-[1] text-center px-4">
              {quote.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, filter: "blur(12px)", y: 40, rotateX: 45 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0, rotateX: 0 }}
                  transition={{
                    duration: 1,
                    delay: i * 0.04,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  viewport={{ once: true, margin: "-15%" }}
                  className="inline-block mr-[0.3em] origin-bottom"
                >
                  {word}
                </motion.span>
              ))}
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.2 }}
              className="flex flex-col items-center gap-8"
            >
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
              <div className="space-y-2">
                <p className="font-mono text-[10px] md:text-sm tracking-[0.7em] text-emerald-400 uppercase font-medium">
                  Antoine de Saint-Exupéry
                </p>
                <div className="flex items-center justify-center gap-4">
                   <div className="w-8 h-px bg-zinc-800" />
                   <p className="font-mono text-[9px] tracking-[0.4em] text-zinc-500 uppercase">
                    Philosophie de l&apos;Absolu
                  </p>
                   <div className="w-8 h-px bg-zinc-800" />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "150px" }}
            transition={{ duration: 1.8, ease: "circOut", delay: 0.8 }}
            className="w-[1px] bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent"
          />
        </div>
      </div>

      {/* Scroll-triggered side lines */}
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block"
      />
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute right-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block"
      />
    </section>
  );
}
