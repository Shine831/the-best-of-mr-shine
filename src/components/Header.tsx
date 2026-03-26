"use client";

import { motion, useScroll, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Projets", href: "#projets" },
  { label: "À Propos", href: "#a-propos" },
  { label: "Expertises", href: "#expertises" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  // Scroll spy
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 2.5 }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-5 transition-all duration-500 ${
          isScrolled
            ? "bg-black/60 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent border-transparent"
        }`}
      >
        <Link
          href="/"
          className="font-serif tracking-[0.2em] text-sm md:text-lg text-zinc-100 hover:text-white transition-colors uppercase z-10"
          aria-label="Retour à l'accueil du portfolio The Best Of Mr Shine"
        >
          MR SHINE
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative font-mono text-[10px] tracking-[0.3em] uppercase transition-colors duration-300 ${
                activeSection === link.href.replace("#", "")
                  ? "text-emerald-400"
                  : "text-zinc-500 hover:text-zinc-200"
              }`}
            >
              {link.label}
              {activeSection === link.href.replace("#", "") && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-emerald-500"
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <MagneticButton strength={30}>
            <a
              href="https://wa.me/237699477055?text=Protocole%20Shine%20activé.%20Je%20souhaite%20discuter%20d'un%20projet%20critique."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter Jean Claude Schimit Baha sur WhatsApp pour un projet"
              className="hidden md:flex relative px-6 py-2 overflow-hidden rounded-full group glass-panel items-center gap-3 transition-colors hover:border-emerald-500/30"
            >
              <span className="absolute inset-0 w-full h-full bg-emerald-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <span className="relative font-mono text-[10px] tracking-[0.2em] font-bold text-zinc-100 uppercase mt-px">
                Engager
              </span>
            </a>
          </MagneticButton>

          {/* Mobile burger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-[60] w-10 h-10 flex items-center justify-center"
            aria-label="Menu de navigation"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-white" strokeWidth={1.5} />
              ) : (
                <Menu className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />
              )}
            </motion.div>
          </button>
        </div>
      </motion.header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[55] bg-black/95 backdrop-blur-2xl flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-serif text-4xl text-zinc-100 hover:text-emerald-400 uppercase tracking-widest transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                href="https://wa.me/237699477055?text=Protocole%20Shine%20activé.%20Je%20souhaite%20discuter%20d'un%20projet%20critique."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="mt-8 px-8 py-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 font-mono text-xs tracking-[0.3em] text-emerald-400 uppercase"
              >
                WhatsApp
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
