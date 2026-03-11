"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuItems = [
    { label: "Archives", href: "/archives" },
    { label: "Lumina", href: "/#hero" },
    { label: "Contact Prioritaire", href: "https://wa.me/237699477055" },
  ];

  return (
    <>
      <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-black/50 border-b border-white/5"
    >
      <a href="/" className="font-serif text-sm md:text-lg tracking-[0.1em] md:tracking-[0.2em] font-light text-zinc-100 uppercase hover:text-white transition-colors cursor-pointer truncate max-w-[60%] md:max-w-none">
        THE BEST OF MR SHINE
      </a>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <a href="/#hero" className="text-[10px] tracking-[0.3em] text-zinc-400 hover:text-zinc-100 transition-colors uppercase">Lumina Demo</a>
        <a href="/archives" className="text-[10px] tracking-[0.3em] text-zinc-400 hover:text-zinc-100 transition-colors uppercase">Archives Techniques</a>
      </nav>

      <motion.a 
        href="https://wa.me/237699477055?text=Protocole%20Shine%20activé.%20Je%20souhaite%20initier%20un%20projet%20critique."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:block px-6 py-2.5 text-[10px] font-medium tracking-[0.3em] text-zinc-100 border border-zinc-800 rounded-sm hover:bg-zinc-100 hover:text-black transition-all duration-300 uppercase cursor-pointer"
      >
        INITIER UN PROJET
      </motion.a>

      {/* Mobile Burger Toggle */}
      <button 
        className="md:hidden text-zinc-100 p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      </motion.header>

      {/* Mobile Menu Overlay - Moved outside header container for absolute stacking */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 min-h-screen w-screen bg-black z-[100] flex flex-col items-center justify-center p-8 space-y-12 overflow-hidden"
            style={{ backgroundColor: "#000000" }}
          >
            {/* Subtle background vibe */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.02)_0%,_transparent_70%)] pointer-events-none" />
            
            {/* Mobile Menu Header */}
            <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center bg-black/80 backdrop-blur-xl border-b border-white/5">
              <span className="font-serif text-lg tracking-[0.2em] font-light text-zinc-100 uppercase">MENU</span>
              <button 
                className="text-zinc-100 p-3 border border-zinc-800 rounded-full hover:bg-zinc-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <nav className="relative z-10 flex flex-col items-center space-y-8">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="text-2xl tracking-[0.3em] font-light text-zinc-100 hover:text-white uppercase transition-all"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            {/* Footer-like status in menu */}
            <div className="absolute bottom-12 left-0 right-0 text-center opacity-20">
              <span className="font-mono text-[8px] tracking-[0.5em] text-zinc-500 uppercase">
                PROTOCOLE_SHINE_ACTIF
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
