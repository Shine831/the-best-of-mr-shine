"use client";

import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-black/50 border-b border-white/5"
    >
      <div className="font-serif text-xl tracking-[0.2em] font-light text-zinc-100 uppercase">
        THE BEST OF MR SHINE
      </div>
      
      <button className="px-6 py-2.5 text-xs font-medium tracking-widest text-zinc-100 border border-zinc-800 rounded-sm hover:bg-zinc-100 hover:text-black transition-all duration-300">
        INITIER UN PROJET
      </button>
    </motion.header>
  );
};
