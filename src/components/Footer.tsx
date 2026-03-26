"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUp } from "lucide-react";
import MagneticButton from "./MagneticButton";

const quickLinks = [
  { label: "Projets", href: "#projets" },
  { label: "À Propos", href: "#a-propos" },
  { label: "Expertises", href: "#expertises" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-obsidian-950 border-t border-white/[0.04] overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[30vh] bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.04),transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <span className="font-serif tracking-[0.3em] text-xl text-zinc-100 uppercase block">
              THE BEST OF MR SHINE
            </span>
            <span className="font-mono text-[9px] tracking-[0.5em] text-zinc-600 uppercase block">
              Architecture de Solutions Critiques
            </span>
            <div className="flex flex-col gap-1 pt-4">
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                Localisation
              </span>
              <span className="font-sans text-sm text-zinc-300">
                Douala, Cameroun & Remote
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <span className="font-mono text-[10px] tracking-[0.4em] text-zinc-500 uppercase">
              Navigation
            </span>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-sm text-zinc-400 hover:text-emerald-400 transition-colors duration-300 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social + Back to top */}
          <div className="flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <span className="font-mono text-[10px] tracking-[0.4em] text-zinc-500 uppercase">
                Réseaux
              </span>
              <div className="flex items-center gap-4">
                <MagneticButton strength={15}>
                  <a
                    href="https://github.com/Shine831"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-zinc-500 hover:text-emerald-400 uppercase transition-colors px-3 py-2"
                    aria-label="Profil GitHub de Mr Shine"
                  >
                    <Github
                      className="w-4 h-4 group-hover:scale-110 transition-transform"
                      strokeWidth={1.5}
                    />
                    GitHub
                  </a>
                </MagneticButton>
                <MagneticButton strength={15}>
                  <a
                    href="https://www.linkedin.com/in/jean-claude-schimit-baha"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-zinc-500 hover:text-emerald-400 uppercase transition-colors px-3 py-2"
                    aria-label="Profil LinkedIn de Jean Claude Schimit Baha"
                  >
                    <Linkedin
                      className="w-4 h-4 group-hover:scale-110 transition-transform"
                      strokeWidth={1.5}
                    />
                    LinkedIn
                  </a>
                </MagneticButton>
              </div>
            </div>

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="self-end w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-500 group"
              aria-label="Retour en haut de la page"
            >
              <ArrowUp
                className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors"
                strokeWidth={1.5}
              />
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[9px] tracking-[0.4em] text-zinc-700 uppercase text-center sm:text-left">
            &copy; {currentYear} — Tous droits réservés
          </span>
          <span className="font-mono text-[9px] tracking-[0.4em] text-zinc-700 uppercase">
            Designé & Développé par{" "}
            <span className="text-zinc-500">MR SHINE</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
