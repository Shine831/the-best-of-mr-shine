"use client";

import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/237699477055?text=Protocole%20Shine%20activé.%20Je%20souhaite%20discuter%20d'un%20projet%20critique.";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        scale: 1.1, 
        borderColor: "rgba(16, 185, 129, 0.5)",
        boxShadow: "0 0 15px rgba(16, 185, 129, 0.2)"
      }}
      className="fixed bottom-8 right-8 z-[100] w-10 h-10 flex items-center justify-center bg-black border border-zinc-900 rounded-full text-zinc-500 hover:text-emerald-400 transition-all duration-300 group"
    >
      <span className="font-mono text-xs tracking-tighter font-bold">W</span>
      
      {/* Tooltip */}
      <span className="absolute right-12 top-1/2 -translate-y-1/2 px-3 py-1 bg-zinc-950 border border-zinc-900 text-[8px] tracking-[0.2em] text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase">
        Ligne Prioritaire
      </span>
    </motion.a>
  );
}
