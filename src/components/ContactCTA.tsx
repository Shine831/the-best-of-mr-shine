"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { Send } from "lucide-react";
import { useRef } from "react";

export default function ContactCTA() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section
      ref={container}
      id="contact"
      className="relative min-h-[120vh] flex flex-col items-center justify-center bg-obsidian-950 px-6 overflow-hidden py-40 perspective-1000"
    >
      
      {/* Intense Ambient Glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140vw] h-[80vh] bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.12)_0%,transparent_60%)] pointer-events-none mix-blend-screen" />
      <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-900/5 blur-[160px] rounded-full pointer-events-none" />

      {/* Background Kinetic Text - Monumental Scale */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.015] select-none">
        <motion.span
          style={{ scale }}
          className="font-serif text-[45vw] font-black uppercase tracking-[-0.1em] block leading-none"
        >
          SHINE
        </motion.span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center w-full z-10 relative">
        <motion.div
          style={{ opacity, scale }}
          className="flex flex-col items-center space-y-24 w-full"
        >
          <div className="space-y-8 text-center max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="flex items-center justify-center gap-6 mb-12"
            >
               <div className="w-16 h-px bg-emerald-500/30" />
               <span className="font-mono text-xs md:text-sm text-emerald-400 uppercase tracking-[1em]">
                 PROTOCOLE ACTIF
               </span>
               <div className="w-16 h-px bg-emerald-500/30" />
            </motion.div>

            <h2 className="font-serif text-6xl md:text-9xl lg:text-[10rem] text-white tracking-tighter uppercase leading-[0.85] py-4">
              Prêt pour le <br/> <span className="italic text-zinc-600 font-extralight">Niveau SOTA ?</span>
            </h2>
          </div>

          <MagneticButton strength={40}>
            <a
              href="https://wa.me/237699477055?text=Protocole%20Shine%20activé.%20Je%20souhaite%20discuter%20d'un%20projet%20critique."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter Jean Claude Schimit Baha via WhatsApp"
              className="group relative flex items-center justify-center w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full transition-transform duration-700"
            >
              {/* Ultra-Premium Interactive Rings */}
              <div className="absolute inset-0 rounded-full border border-white/5 group-hover:border-emerald-500/60 transition-all duration-1000 group-hover:scale-105" />
              <div className="absolute inset-6 rounded-full border border-white/10 group-hover:border-emerald-400/40 transition-all duration-700 group-hover:scale-110" />
              
              {/* Core Kinetic Circle */}
              <div className="absolute inset-12 rounded-full bg-zinc-900/50 backdrop-blur-3xl border border-white/5 group-hover:bg-emerald-950/20 group-hover:border-emerald-500/30 transition-all duration-700 overflow-hidden glass-v4">
                 <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
                 <div className="absolute -inset-24 animate-aurora bg-emerald-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>

              <div className="flex flex-col items-center text-zinc-100 group-hover:text-white transition-colors duration-500 px-12 text-center relative z-10">
                <span className="font-serif text-5xl md:text-7xl uppercase tracking-tight mb-10 leading-[0.9]">
                  Déployer<br/><span className="text-emerald-400 group-hover:text-emerald-300 italic">L&apos;IA</span>
                </span>

                <div className="relative group/icon">
                   <div className="absolute -inset-8 bg-emerald-500/40 blur-2xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500" />
                   <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-400 group-hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] transition-all duration-700 relative z-10">
                    <Send strokeWidth={1} className="w-10 h-10 md:w-12 md:h-12 text-emerald-400 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12" />
                  </div>
                </div>
              </div>

              {/* Orbiting Satellite Particle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,1)]" />
              </motion.div>
            </a>
          </MagneticButton>

          {/* Subtle CTA Secondary */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex items-center gap-4 text-zinc-500 font-mono text-[10px] tracking-[0.4em] uppercase"
          >
             <div className="w-12 h-px bg-zinc-900" />
             <span>Disponible pour Projets Critiques 2025</span>
             <div className="w-12 h-px bg-zinc-900" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
