"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function TerminalFooter() {
  const whatsappUrl = "https://wa.me/237699477055?text=Protocole%20Shine%20activé.%20Je%20souhaite%20discuter%20d'un%20projet%20critique.";

  return (
    <footer className="relative py-24 px-6 border-t border-zinc-900 bg-black overflow-hidden">
      {/* Background ambient glow (Emerald) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-emerald-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-12 relative z-10">
        <div className="space-y-4">
          <h2 className="font-mono text-[10px] tracking-[0.5em] text-zinc-100 uppercase">
            TERMINAL DE COMMUNICATION
          </h2>
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[9px] tracking-[0.3em] text-emerald-500/50 uppercase">
              [ACCÈS DIRECT ARCHITECTE]
            </span>
            <span className="font-mono text-xl md:text-2xl text-zinc-100 tracking-[0.2em]">
              +237 699477055
            </span>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full max-w-lg"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-4 px-8 py-6 bg-black border border-zinc-800 rounded-sm transition-all duration-500 hover:bg-emerald-950/30 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
          >
            <MessageSquare className="w-5 h-5 text-zinc-100 group-hover:text-emerald-400 transition-colors" />
            <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-zinc-100 group-hover:text-emerald-100 uppercase transition-colors">
              Initier un protocole de collaboration via la ligne prioritaire
            </span>
            
            {/* Subtle corner accents */}
            <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-zinc-800 group-hover:border-emerald-500/50 transition-colors" />
            <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-zinc-800 group-hover:border-emerald-500/50 transition-colors" />
            <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-zinc-800 group-hover:border-emerald-500/50 transition-colors" />
            <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-zinc-800 group-hover:border-emerald-500/50 transition-colors" />
          </a>
        </motion.div>

        <div className="pt-12 flex flex-col items-center gap-4 border-t border-zinc-900 w-full opacity-30">
          <span className="font-mono text-[8px] tracking-[0.5em] text-zinc-600 uppercase">
            © {new Date().getFullYear()} THE BEST OF MR SHINE — AGENCY_CORE_V2
          </span>
        </div>
      </div>
    </footer>
  );
}
