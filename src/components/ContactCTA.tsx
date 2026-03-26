"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { Github, Linkedin, Send } from "lucide-react";

export default function ContactCTA() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-obsidian-950 px-6 overflow-hidden pt-40 pb-20">
      
      {/* Ambient bottom glow with refined intensity */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.08)_0%,transparent_70%)] pointer-events-none mix-blend-screen" />

      {/* Background Kinetic Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none">
        <span className="font-serif text-[30vw] font-black uppercase tracking-tighter block leading-none">
          SHINE
        </span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center w-full z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-20 w-full"
        >
          <div className="space-y-6 text-center">
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.8em" }}
              transition={{ duration: 2, delay: 0.5 }}
              className="font-mono text-[10px] md:text-xs text-emerald-500 uppercase block"
            >
              INITIALISER LA CONNEXION
            </motion.span>
            <h2 className="font-serif text-5xl md:text-8xl lg:text-9xl text-white tracking-tighter uppercase leading-none">
              Prêt pour le <br/> <span className="italic text-zinc-500">Prochain Niveau ?</span>
            </h2>
          </div>

          <MagneticButton strength={30}>
            <a
              href="https://wa.me/237699477055?text=Protocole%20Shine%20activé.%20Je%20souhaite%20discuter%20d'un%20projet%20critique."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter Jean Claude Schimit Baha via WhatsApp"
              className="group relative flex items-center justify-center w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full"
            >
              {/* Animated outer ring */}
              <div className="absolute inset-0 rounded-full border border-white/5 group-hover:border-emerald-500/50 transition-all duration-1000 group-hover:scale-110" />
              <div className="absolute inset-4 rounded-full border border-white/10 group-hover:border-emerald-400/30 transition-all duration-700" />
              
              {/* Liquid distortion background (conceptual via CSS & Framer) */}
              <div className="absolute inset-0 rounded-full bg-emerald-500/0 group-hover:bg-emerald-500/5 transition-colors duration-1000 blur-3xl" />

              <div className="flex flex-col items-center text-zinc-100 group-hover:text-white transition-colors duration-500 px-8 text-center relative z-10">
                <span className="font-serif text-4xl md:text-6xl uppercase tracking-widest mb-8 leading-tight">
                  Déployer<br/><span className="text-emerald-400 group-hover:text-emerald-300">L&apos;Éclat</span>
                </span>
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-emerald-500 group-hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] transition-all duration-700">
                  <Send strokeWidth={1} className="w-8 h-8 md:w-10 md:h-10 text-emerald-400 group-hover:text-white transition-colors duration-500" />
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

      <footer className="w-full max-w-[90rem] flex flex-col md:flex-row items-end justify-between py-12 border-t border-white/5 z-10 gap-12 mt-40">
        <div className="flex flex-col gap-8 w-full md:w-auto">
          <div className="space-y-2">
            <span className="font-serif tracking-[0.3em] text-2xl text-zinc-100 uppercase block">THE BEST OF MR SHINE</span>
            <span className="font-mono text-[9px] tracking-[0.5em] text-zinc-600 uppercase">Architecture de Solutions Critiques</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Localisation</span>
            <span className="font-sans text-sm text-zinc-300">Douala, Cameroun & Remote</span>
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-12 w-full md:w-auto">
          <div className="flex items-center gap-4 md:gap-8">
            <MagneticButton strength={15}>
              <a href="https://github.com/Shine831" target="_blank" rel="noreferrer" className="group flex items-center gap-3 font-mono text-[10px] tracking-[0.4em] text-zinc-500 hover:text-emerald-400 uppercase transition-colors px-4 py-2">
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <span className="hidden md:inline">GitHub Core</span>
              </a>
            </MagneticButton>
            <MagneticButton strength={15}>
              <a href="https://www.linkedin.com/in/jean-claude-schimit-baha" target="_blank" rel="noreferrer" className="group flex items-center gap-3 font-mono text-[10px] tracking-[0.4em] text-zinc-500 hover:text-emerald-400 uppercase transition-colors px-4 py-2">
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <span className="hidden md:inline">LinkedIn</span>
              </a>
            </MagneticButton>
          </div>

          <div className="text-right">
            <span className="font-mono text-[9px] tracking-[0.4em] text-zinc-700 uppercase">
              &copy; {currentYear} &mdash; TOUS DROITS RÉSERVÉS <br/>
              DESIGNÉ & DÉVELOPPÉ PAR MR SHINE
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
}
