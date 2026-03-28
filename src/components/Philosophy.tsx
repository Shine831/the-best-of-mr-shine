"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Philosophy() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [400, -400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-200, 400]);
  const z1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const z2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  const quote = "La perfection est atteinte, non pas lorsqu'il n'y a plus rien à ajouter, mais lorsqu'il n'y a plus rien à retirer.";

  return (
    <section ref={container} className="relative min-h-screen flex items-center justify-center bg-obsidian-950 overflow-hidden py-40" style={{ perspective: "1000px" }}>
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      {/* Animated Scanning Beam */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-emerald-500/5 to-transparent animate-beam opacity-20 pointer-events-none" />

      <div className="relative z-10 text-center flex flex-col items-center max-w-7xl mx-auto px-6">
        {/* Kinetic Background Text with Depth */}
        <motion.div
          style={{ y: y1, z: z1, scale: scale1 }}
          className="absolute -top-20 left-0 text-[15vw] font-serif font-black text-white/[0.015] uppercase tracking-[1em] whitespace-nowrap pointer-events-none select-none mask-radial"
        >
          ESSENCE
        </motion.div>
        
        <motion.div
          style={{ y: y2, z: z2 }}
          className="absolute -bottom-20 right-0 text-[15vw] font-serif font-black text-white/[0.01] uppercase tracking-[1em] whitespace-nowrap pointer-events-none select-none mask-radial"
        >
          RIGUEUR
        </motion.div>

        <div className="relative z-20 flex flex-col items-center gap-16">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100px" }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="w-px bg-gradient-to-b from-transparent via-emerald-500 to-transparent"
          />
          
          <div className="max-w-4xl space-y-12">
            <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl text-zinc-100 font-extralight tracking-tight leading-[1.1] text-center">
              {quote.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.05,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                  viewport={{ once: true, margin: "-10%" }}
                  className="inline-block mr-[0.2em]"
                >
                  {word}
                </motion.span>
              ))}
            </h3>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="w-12 h-px bg-emerald-500/50" />
              <div className="space-y-1">
                <p className="font-mono text-[10px] md:text-xs tracking-[0.6em] text-emerald-400 uppercase">
                  Antoine de Saint-Exupéry
                </p>
                <p className="font-mono text-[8px] tracking-[0.3em] text-zinc-600 uppercase">
                  Philosophie du Design Minimaliste
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100px" }}
            transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
            className="w-px bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
