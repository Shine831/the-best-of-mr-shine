"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { ArrowUpRight } from "lucide-react";

export default function ContactCTA() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-black px-6 overflow-hidden pt-32">
      
      {/* Ambient bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.15)_0%,transparent_60%)] pointer-events-none mix-blend-screen" />

      <div className="flex-1 flex flex-col items-center justify-center w-full z-10 w-full mb-20">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-20%" }}
          className="flex flex-col items-center space-y-12 md:space-y-16"
        >
          <span className="font-mono text-[10px] md:text-xs tracking-[0.5em] text-zinc-400 uppercase text-center block max-w-md">
            Prêt à initialiser la prochaine <br className="hidden md:block"/> architecture critique ?
          </span>

          <MagneticButton strength={25}>
            <a
              href="https://wa.me/237699477055?text=Protocole%20Shine%20activé.%20Je%20souhaite%20discuter%20d'un%20projet%20critique."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Initier une mission stratégique en contactant Jean Claude Schimit Baha via WhatsApp"
              className="group relative flex items-center justify-center w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full bg-zinc-950/50 backdrop-blur-md hover:bg-zinc-900 transition-colors duration-700 border border-white/5 shadow-2xl"
            >
              <div className="absolute inset-0 rounded-full border border-white/10 scale-105 group-hover:scale-100 transition-transform duration-700 ease-[0.16,1,0.3,1] opacity-50 group-hover:opacity-100" />
              <div className="absolute inset-0 rounded-full bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors duration-700 blur-3xl" />
              
              <div className="flex flex-col items-center text-zinc-100 group-hover:text-white transition-colors duration-500 px-4">
                <span className="font-serif text-3xl md:text-5xl uppercase tracking-widest mb-6 block text-center">
                  Déployer<br/>L&apos;Architecture
                </span>
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/40 transition-colors duration-500">
                  <ArrowUpRight strokeWidth={1} className="w-8 h-8 md:w-10 md:h-10 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-500" />
                </div>
              </div>
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      <footer className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between py-10 border-t border-white/5 z-10 text-center md:text-left gap-8 mt-auto">
        <div className="flex flex-col">
          <span className="font-serif tracking-[0.2em] text-sm md:text-base text-zinc-200 uppercase">THE BEST OF MR SHINE</span>
          <span className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-zinc-600 uppercase mt-2">&copy; {currentYear} TOUS DROITS RÉSERVÉS</span>
        </div>
        
        <div className="flex items-center gap-8">
          <MagneticButton strength={15}>
            <a href="https://github.com/Shine831" target="_blank" rel="noreferrer" className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] text-zinc-500 hover:text-zinc-100 uppercase transition-colors px-4 py-2">
              GitHub Core
            </a>
          </MagneticButton>
          <MagneticButton strength={15}>
            <a href="https://www.linkedin.com/in/jean-claude-schimit-baha" target="_blank" rel="noreferrer" className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] text-zinc-500 hover:text-zinc-100 uppercase transition-colors px-4 py-2">
              LinkedIn
            </a>
          </MagneticButton>
        </div>
      </footer>
    </section>
  );
}
