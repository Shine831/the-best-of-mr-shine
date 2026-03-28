"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { Send } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center bg-obsidian-950 px-6 overflow-hidden py-40">
      
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
              {/* Animated outer rings (Concentric Orbit) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-white/10 group-hover:border-emerald-500/50 transition-colors duration-1000"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-10 rounded-full border border-white/5 group-hover:border-emerald-400/30 transition-colors duration-700"
              />
              <div className="absolute inset-20 rounded-full border border-white/10" />
              
              {/* Liquid distortion core */}
              <div className="absolute inset-0 rounded-full bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors duration-1000 blur-3xl liquid-filter scale-110" />

              <div className="flex flex-col items-center text-zinc-100 group-hover:text-white transition-colors duration-500 px-8 text-center relative z-10">
                <span className="font-serif text-4xl md:text-6xl uppercase tracking-widest mb-8 leading-tight chromatic-aberration">
                  Déployer<br/><span className="text-emerald-400 group-hover:text-emerald-300">L&apos;Éclat</span>
                </span>
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0 20px rgba(16, 185, 129, 0)",
                      "0 0 40px rgba(16, 185, 129, 0.4)",
                      "0 0 20px rgba(16, 185, 129, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-emerald-500 transition-all duration-700"
                >
                  <Send strokeWidth={1} className="w-8 h-8 md:w-10 md:h-10 text-emerald-400 group-hover:text-white transition-colors duration-500" />
                </motion.div>
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
    </section>
  );
}
