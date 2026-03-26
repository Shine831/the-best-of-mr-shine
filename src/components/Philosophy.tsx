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
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -10]);

  const quote = "La perfection est atteinte, non pas lorsqu'il n'y a plus rien à ajouter, mais lorsqu'il n'y a plus rien à retirer.";

  return (
    <section ref={container} className="relative min-h-screen flex items-center justify-center bg-obsidian-pure overflow-hidden py-40">
      {/* Precision Background Ambience */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.04)_0%,transparent_75%)] pointer-events-none" />
      
      {/* Architectural Scanning Beam */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-emerald-500/10 to-transparent animate-beam opacity-30 pointer-events-none" />

      <div className="relative z-10 text-center flex flex-col items-center max-w-7xl mx-auto px-6">
        {/* Kinetic Background Text with Rotation Parallax */}
        <motion.div
          style={{ y: y1, rotate: rotate1 }}
          className="absolute -top-32 left-0 text-[18vw] font-serif font-black text-white/[0.015] uppercase tracking-[0.8em] whitespace-nowrap pointer-events-none select-none mask-radial origin-left"
        >
          ESSENCE
        </motion.div>
        
        <motion.div
          style={{ y: y2, rotate: rotate2 }}
          className="absolute -bottom-32 right-0 text-[18vw] font-serif font-black text-white/[0.01] uppercase tracking-[0.8em] whitespace-nowrap pointer-events-none select-none mask-radial origin-right"
        >
          RIGUEUR
        </motion.div>

        <div className="relative z-20 flex flex-col items-center gap-20">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "140px" }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-px bg-gradient-to-b from-transparent via-emerald-500 to-transparent"
          />
          
          <div className="max-w-5xl space-y-16">
            <h3 className="font-serif text-5xl md:text-7xl lg:text-8xl text-zinc-100 font-extralight tracking-tighter leading-[1] text-center">
              {quote.split(" ").map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.3em] py-2">
                  <motion.span
                    initial={{ y: "110%", filter: "blur(15px)", opacity: 0 }}
                    whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
                    transition={{
                      duration: 1.2,
                      delay: i * 0.08,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    viewport={{ once: true, margin: "-10%" }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h3>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-8"
            >
              <div className="w-16 h-px bg-emerald-500/60" />
              <div className="space-y-3">
                <p className="font-mono text-[11px] md:text-sm tracking-[0.8em] text-emerald-400 uppercase">
                  Antoine de Saint-Exupéry
                </p>
                <div className="flex items-center justify-center gap-3">
                   <div className="w-1 h-1 rounded-full bg-zinc-800" />
                   <p className="font-mono text-[9px] tracking-[0.4em] text-zinc-600 uppercase">
                    Philosophie de l&apos;Absolu Digital
                   </p>
                   <div className="w-1 h-1 rounded-full bg-zinc-800" />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "140px" }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="w-px bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
