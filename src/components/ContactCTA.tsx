"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { Send, ArrowUpRight } from "lucide-react";

export default function ContactCTA() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-obsidian-950 px-6 overflow-hidden pt-32">
      
      {/* Ambient bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[60vh] bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.2)_0%,transparent_60%)] pointer-events-none mix-blend-screen" />

      <div className="flex-1 flex flex-col items-center justify-center w-full z-10 w-full mb-32">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-col items-center space-y-16 md:space-y-20"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-t-2 border-emerald-500 rounded-full opacity-40"
            />
            <span className="font-mono text-[10px] md:text-xs tracking-[0.6em] text-emerald-400 uppercase text-center block max-w-md">
              Prêt à initialiser la prochaine <br className="hidden md:block"/> architecture critique ?
            </span>
          </div>

          <MagneticButton strength={40}>
            <a
              href="https://wa.me/237699477055?text=Protocole%20Shine%20activé.%20Je%20souhaite%20discuter%20d'un%20projet%20critique."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Initier une mission stratégique en contactant Jean Claude Schimit Baha via WhatsApp"
              className="group relative flex items-center justify-center w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-zinc-950/40 backdrop-blur-3xl hover:bg-zinc-900/60 transition-all duration-700 border border-white/5 shadow-2xl overflow-hidden"
            >
              {/* Rotating Border Animation */}
              <div className="absolute inset-0 rounded-full border border-emerald-500/20 scale-105 group-hover:scale-100 transition-transform duration-1000" />
              <motion.div
                className="absolute inset-0 rounded-full border-t-2 border-emerald-500/40 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />

              <div className="absolute inset-0 rounded-full bg-emerald-500/0 group-hover:bg-emerald-500/5 transition-colors duration-700 blur-3xl" />

              <div className="flex flex-col items-center text-zinc-100 group-hover:text-white transition-colors duration-500 px-6">
                <span className="font-serif text-3xl md:text-6xl uppercase tracking-tighter mb-8 block text-center leading-none">
                  DÉPLOYER<br/>L&apos;ARCHITECTURE
                </span>
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-all duration-500 border border-emerald-500/20 group-hover:scale-110 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                  <ArrowUpRight strokeWidth={1} className="w-10 h-10 md:w-12 md:h-12 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-500" />
                </div>
              </div>

              {/* Orbiting element */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-500/50 blur-[2px]" />
              </motion.div>
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      <footer className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between py-12 border-t border-white/5 z-10 text-center md:text-left gap-10 mt-auto">
        <div className="flex flex-col gap-3">
          <span className="font-serif tracking-[0.3em] text-sm md:text-lg text-zinc-100 uppercase">THE BEST OF MR SHINE</span>
          <div className="flex items-center gap-3 justify-center md:justify-start">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
             <span className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] text-zinc-600 uppercase">&copy; {currentYear} TOUS DROITS RÉSERVÉS</span>
          </div>
        </div>
        
        <div className="flex items-center gap-10 md:gap-12">
          <MagneticButton strength={20}>
            <a href="https://github.com/Shine831" target="_blank" rel="noreferrer" className="group flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.5em] text-zinc-500 hover:text-emerald-400 uppercase transition-all px-4 py-2">
              <span className="w-1 h-1 bg-zinc-800 rounded-full group-hover:bg-emerald-500 transition-colors" />
              GitHub Core
            </a>
          </MagneticButton>
          <MagneticButton strength={20}>
            <a href="https://www.linkedin.com/in/jean-claude-schimit-baha" target="_blank" rel="noreferrer" className="group flex items-center gap-3 font-mono text-[10px] md:text-xs tracking-[0.5em] text-zinc-500 hover:text-emerald-400 uppercase transition-all px-4 py-2">
              <span className="w-1 h-1 bg-zinc-800 rounded-full group-hover:bg-emerald-500 transition-colors" />
              LinkedIn
            </a>
          </MagneticButton>
        </div>
      </footer>
    </section>
  );
}
