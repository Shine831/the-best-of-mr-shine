"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { ArrowUpRight, Zap } from "lucide-react";

export default function ContactCTA() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-obsidian-950 px-6 overflow-hidden pt-32">
      
      {/* Ambient bottom glow with refined intensity */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.1)_0%,transparent_70%)] pointer-events-none mix-blend-screen animate-pulse" />

      <div className="flex-1 flex flex-col items-center justify-center w-full z-10 mb-32 relative">
        {/* Decorative background number */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[40vw] text-white/[0.01] pointer-events-none select-none tracking-tighter">
          01
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-col items-center space-y-16 relative"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 flex items-center justify-center border border-emerald-500/20 rounded-full"
            >
              <Zap className="w-5 h-5 text-emerald-500/50" />
            </motion.div>
            <span className="font-mono text-[10px] md:text-xs tracking-[0.6em] text-zinc-400 uppercase text-center block max-w-lg leading-relaxed">
              Initialiser la prochaine <br className="hidden md:block"/> architecture de rupture
            </span>
          </div>

          <MagneticButton strength={35}>
            <a
              href="https://wa.me/237699477055?text=Protocole%20Shine%20activé.%20Je%20souhaite%20discuter%20d'un%20projet%20critique."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Initier une mission stratégique en contactant Jean Claude Schimit Baha via WhatsApp"
              className="group relative flex items-center justify-center w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-white/[0.01] backdrop-blur-3xl transition-all duration-700 border border-white/5 hover:border-emerald-500/30 shadow-2xl overflow-hidden"
            >
              {/* Data stream effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                <div className="absolute top-0 left-1/2 w-px h-full bg-emerald-500 animate-[float_4s_ease-in-out_infinite]" />
                <div className="absolute top-0 left-1/3 w-px h-full bg-emerald-500 animate-[float_6s_ease-in-out_infinite]" />
                <div className="absolute top-0 right-1/3 w-px h-full bg-emerald-500 animate-[float_5s_ease-in-out_infinite]" />
              </div>

              <div className="absolute inset-0 rounded-full border border-white/5 scale-[1.05] group-hover:scale-100 transition-transform duration-1000 ease-[0.16,1,0.3,1] opacity-50 group-hover:opacity-100" />
              <div className="absolute inset-0 rounded-full bg-emerald-500/0 group-hover:bg-emerald-500/[0.03] transition-colors duration-700" />
              
              <div className="flex flex-col items-center text-zinc-100 group-hover:text-white transition-colors duration-500 px-8">
                <span className="font-serif text-4xl md:text-7xl uppercase tracking-tighter mb-8 block text-center leading-none">
                  Lancer<br/><span className="text-emerald-500 italic">Le Run</span>
                </span>
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:scale-110 transition-all duration-700 ease-[0.16,1,0.3,1] shadow-2xl">
                  <ArrowUpRight strokeWidth={1} className="w-8 h-8 md:w-12 md:h-12 text-zinc-400 group-hover:text-black transition-colors duration-500" />
                </div>
              </div>
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      <footer className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between py-12 border-t border-white/5 z-10 text-center md:text-left gap-10 mt-auto">
        <div className="flex flex-col gap-2">
          <span className="font-serif tracking-[0.3em] text-sm md:text-base text-zinc-200 uppercase font-bold">THE BEST OF MR SHINE</span>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] text-zinc-600 uppercase">&copy; {currentYear} CORE SYSTEM — ALL RIGHTS RESERVED</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 md:gap-12">
          {["GitHub Core", "LinkedIn"].map((label) => (
            <MagneticButton key={label} strength={15}>
              <a
                href={label === "LinkedIn" ? "https://www.linkedin.com/in/jean-claude-schimit-baha" : "https://github.com/Shine831"}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[9px] md:text-[10px] tracking-[0.5em] text-zinc-500 hover:text-emerald-400 uppercase transition-all px-4 py-2 border border-transparent hover:border-white/5 rounded-full"
              >
                {label}
              </a>
            </MagneticButton>
          ))}
        </div>
      </footer>
    </section>
  );
}
