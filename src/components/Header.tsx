"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Archives", href: "/archives" },
    { label: "Lumina", href: "/#hero" },
    { label: "Contact Prioritaire", href: "https://wa.me/237699477055" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-black/50 border-b border-white/5"
    >
      <a href="/" className="font-serif text-lg tracking-[0.2em] font-light text-zinc-100 uppercase hover:text-white transition-colors cursor-pointer">
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[80px] bg-black z-40 flex flex-col items-center justify-center p-8 space-y-12"
          >
            {menuItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs tracking-[0.5em] text-zinc-400 hover:text-zinc-100 uppercase transition-all"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
