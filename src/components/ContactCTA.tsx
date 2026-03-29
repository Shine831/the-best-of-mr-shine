"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { Send, Sparkles } from "lucide-react";
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
      id="contact"
      ref={container}
      className="relative min-h-[100svh] flex flex-col items-center justify-center bg-obsidian-950 px-6 overflow-hidden py-40"
    >
      
      {/* Hyper-Refined Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140vw] h-[80vh] bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.12)_0%,transparent_70%)] pointer-events-none mix-blend-screen opacity-50" />

      {/* Background Monolith Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none liquid-filter">
        <span className="font-serif text-[40vw] font-black uppercase tracking-tighter block leading-none italic">
          SHINE
        </span>
      </div>

      <motion.div
        style={{ scale, opacity }}
        className="flex flex-col items-center justify-center w-full z-10 relative"
      >
        <div className="flex flex-col items-center space-y-24 w-full">
          <div className="space-y-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center justify-center gap-4 mb-4"
            >
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span className="font-mono text-xs md:text-sm text-emerald-500 uppercase tracking-[1em] font-bold">
                PRÊT POUR L&apos;ASCENSION ?
              </span>
              <Sparkles className="w-4 h-4 text-emerald-500" />
            </motion.div>

            <h2 className="font-serif text-6xl md:text-9xl lg:text-[11rem] text-white tracking-tighter uppercase leading-[0.85]">
              Déployer<br/> <span className="italic text-emerald-400 liquid-glass-filter">Votre Vision</span>
            </h2>

            <p className="font-sans text-xl md:text-2xl text-zinc-500 font-extralight max-w-2xl mx-auto tracking-wide">
              Collaborons pour construire des infrastructures digitales qui <span className="text-zinc-200">dominent leur marché</span>.
            </p>
          </div>

          <MagneticButton strength={45}>
            <a
              href="https://wa.me/237699477055?text=Protocole%20Shine%20activé.%20Je%20souhaite%20discuter%20d'un%20projet%20critique."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter Jean Claude Schimit Baha via WhatsApp"
              className="group relative flex items-center justify-center w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full transition-transform duration-1000"
            >
              {/* Outer Energy Rings */}
              <div className="absolute inset-0 rounded-full border border-white/5 group-hover:border-emerald-500/40 transition-all duration-1000 group-hover:scale-110 group-hover:rotate-12" />
              <div className="absolute inset-8 rounded-full border border-white/10 group-hover:border-emerald-400/20 transition-all duration-700 group-hover:scale-105 group-hover:-rotate-12" />
              
              {/* Liquid Core Background */}
              <div className="absolute inset-0 rounded-full bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors duration-1000 blur-3xl" />
              <div className="absolute inset-20 rounded-full bg-black/40 backdrop-blur-3xl border border-white/10 group-hover:border-emerald-500/30 transition-all duration-700 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                   <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/40 to-transparent animate-aurora" />
                </div>
              </div>

              <div className="flex flex-col items-center text-zinc-200 group-hover:text-white transition-colors duration-500 px-12 text-center relative z-10">
                <span className="font-serif text-4xl md:text-6xl uppercase tracking-widest mb-10 leading-none">
                  Lancer le<br/><span className="text-emerald-400 italic group-hover:text-emerald-300">Protocole</span>
                </span>
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-400 group-hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] transition-all duration-700">
                  <Send strokeWidth={1} className="w-8 h-8 md:w-12 md:h-12 text-emerald-400 group-hover:text-white transition-colors duration-500" />
                </div>
              </div>

              {/* Orbital Satellite */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_#10b981]" />
              </motion.div>
            </a>
          </MagneticButton>
        </div>
      </motion.div>

      {/* Decorative lines */}
      <div className="absolute left-0 right-0 bottom-20 flex justify-center gap-40 opacity-10 pointer-events-none">
        <div className="w-px h-[30vh] bg-gradient-to-t from-emerald-500 to-transparent" />
        <div className="w-px h-[40vh] bg-gradient-to-t from-emerald-500 to-transparent" />
        <div className="w-px h-[30vh] bg-gradient-to-t from-emerald-500 to-transparent" />
      </div>
    </section>
  );
}
