"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Projets", href: "#projets" },
  { label: "Expertise", href: "#expertise" },
  { label: "Parcours", href: "#parcours" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Show nav after preloader
    const timer = setTimeout(() => setVisible(true), 2400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ─── Apple Floating Pill Navigation ─── */}
      <motion.nav
        className="nav-pill"
        initial={{ y: -80, opacity: 0 }}
        animate={visible ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center justify-center h-9 w-9 rounded-full mr-1"
          style={{ background: "linear-gradient(135deg, rgba(41,151,255,0.15), rgba(191,90,242,0.15))" }}
        >
          <span className="text-[11px] font-bold text-gradient-blue font-[var(--font-grotesk)]">S</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center justify-center h-9 px-4 ml-1 rounded-full text-xs font-semibold text-white"
          style={{
            background: "linear-gradient(135deg, #2997ff, #0071e3)",
            fontSize: "12px",
          }}
        >
          Parlons-en
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col items-center justify-center w-9 h-9 rounded-full gap-[5px] ml-1"
          style={{ background: "rgba(255,255,255,0.06)" }}
          aria-label="Menu"
        >
          <motion.span
            className="block w-4 h-[1.5px] bg-white/70 rounded-full origin-center"
            animate={mobileOpen ? { rotate: 45, y: 3.25 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-4 h-[1.5px] bg-white/70 rounded-full origin-center"
            animate={mobileOpen ? { rotate: -45, y: -3.25 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </motion.nav>

      {/* ─── Mobile Fullscreen Menu ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[199] flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-void/95 backdrop-blur-2xl" />

            {/* Animated orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="orb orb-blue animate-orb-1 w-[300px] h-[300px]" style={{ top: "20%", left: "10%" }} />
              <div className="orb orb-purple animate-orb-2 w-[250px] h-[250px]" style={{ bottom: "15%", right: "10%" }} />
            </div>

            {/* Links */}
            <div className="relative z-10 flex flex-col items-center gap-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-4xl font-display font-bold text-label hover:text-accent-blue transition-colors"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-apple mt-6 text-sm"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6 }}
              >
                Parlons de votre projet
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
