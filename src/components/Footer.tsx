"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: Github, href: "https://github.com/Shine831", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/schmit-claude-bha993b6", label: "LinkedIn" },
  { icon: Mail, href: "mailto:jcbaha58@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative">
      <div className="section-divider" />

      <div className="section-wrap py-10 md:py-14">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <div className="flex items-center gap-2.5">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(41,151,255,0.12), rgba(191,90,242,0.12))",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span className="text-[9px] font-bold text-gradient-blue font-[var(--font-grotesk)]">S</span>
              </div>
              <span className="text-xs font-medium text-label/60">
                The Best of Mr Shine
              </span>
            </div>
            <p className="text-[10px] text-label-tertiary/50">
              Développeur Web Full Stack & Architecte Solutions Digitales
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-separator hover:border-glass-border-hover hover:bg-fill transition-all duration-300 group"
                aria-label={s.label}
              >
                <s.icon className="w-3.5 h-3.5 text-label-tertiary group-hover:text-label transition-colors" strokeWidth={1.5} />
              </a>
            ))}

            {/* Back to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-9 h-9 rounded-xl flex items-center justify-center border border-separator hover:border-glass-border-hover hover:bg-fill transition-all duration-300 group ml-2"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-3.5 h-3.5 text-label-tertiary group-hover:text-label transition-colors" strokeWidth={1.5} />
            </button>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="text-[10px] text-label-tertiary/40">
              © {new Date().getFullYear()} Jean Claude Schimit Baha
            </p>
            <p className="text-[9px] text-label-tertiary/25">
              Conçu avec passion à Douala 🇨🇲
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
