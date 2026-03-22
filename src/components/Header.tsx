"use client";

import { motion, useScroll } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { useEffect, useState } from "react";
import Link from "next/link";

export const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 2.5 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 transition-all duration-500 ${
        isScrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/5" : "bg-transparent border-transparent"
      }`}
    >
      <Link href="/" className="font-serif tracking-[0.2em] text-sm md:text-lg text-zinc-100 hover:text-white transition-colors uppercase z-10">
        THE BEST OF MR SHINE
      </Link>

      <MagneticButton strength={30}>
        <a
          href="https://wa.me/237699477055?text=Protocole%20Shine%20activé.%20Je%20souhaite%20discuter%20d'un%20projet%20critique."
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-6 py-2 overflow-hidden rounded-full group glass-panel flex items-center gap-3 transition-colors hover:border-emerald-500/30"
        >
          <span className="absolute inset-0 w-full h-full bg-emerald-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          <span className="relative font-mono text-[10px] tracking-[0.3em] font-medium text-zinc-100 uppercase mt-px">
            Liaison
          </span>
        </a>
      </MagneticButton>
    </motion.header>
  );
};
