"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import MagneticButton from "./MagneticButton";
import { Send } from "lucide-react";

export default function ContactCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Gravity well effect: pull elements toward mouse
  const pullX = useTransform(springX, [-500, 500], [-30, 30]);
  const pullY = useTransform(springY, [-500, 500], [-30, 30]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-obsidian-pure px-6 overflow-hidden py-40"
    >
      
      {/* Dynamic Gravity Glow */}
      <motion.div
        style={{ x: pullX, y: pullY }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140vw] h-[70vh] bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.1)_0%,transparent_70%)] pointer-events-none mix-blend-screen opacity-60"
      />

      {/* Background Kinetic Text with Gravity Pull */}
      <motion.div
        style={{ x: useTransform(pullX, (v) => v * -0.5), y: useTransform(pullY, (v) => v * -0.5) }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.025] select-none"
      >
        <span className="font-serif text-[35vw] font-black uppercase tracking-tighter block leading-none">
          SHINE
        </span>
      </motion.div>

      <div className="flex-1 flex flex-col items-center justify-center w-full z-10 relative">
        <motion.div
          style={{ x: pullX, y: pullY }}
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-24 w-full"
        >
          <div className="space-y-8 text-center">
            <motion.div
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              whileInView={{ opacity: 1, letterSpacing: "1.2em" }}
              transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
              className="flex items-center justify-center gap-4 mb-4"
            >
               <div className="w-12 h-px bg-emerald-500/40 hidden md:block" />
               <span className="font-mono text-[11px] md:text-sm text-emerald-400 uppercase">
                  INITIALISER LA CONNEXION
               </span>
               <div className="w-12 h-px bg-emerald-500/40 hidden md:block" />
            </motion.div>

            <h2 className="font-serif text-6xl md:text-9xl lg:text-[11rem] text-white tracking-tighter uppercase leading-[0.85]">
              Prêt pour le <br/> <span className="italic text-zinc-500">Prochain Niveau ?</span>
            </h2>
          </div>

          <MagneticButton strength={40}>
            <a
              href="https://wa.me/237699477055?text=Protocole%20Shine%20activé.%20Je%20souhaite%20discuter%20d'un%20projet%20critique."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter Jean Claude Schimit Baha via WhatsApp"
              className="group relative flex items-center justify-center w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full"
            >
              {/* Dynamic gravitational rings */}
              <div className="absolute inset-0 rounded-full border border-white/[0.03] group-hover:border-emerald-500/60 transition-all duration-1000 group-hover:scale-110" />
              <div className="absolute inset-6 rounded-full border border-white/[0.06] group-hover:border-emerald-400/40 transition-all duration-700" />
              <div className="absolute inset-12 rounded-full border border-white/[0.09] group-hover:border-emerald-300/20 transition-all duration-500" />
              
              {/* Core Liquid Glow */}
              <div className="absolute inset-20 rounded-full bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-all duration-1000 blur-[80px]" />

              <div className="flex flex-col items-center text-zinc-100 group-hover:text-white transition-colors duration-700 px-12 text-center relative z-10">
                <span className="font-serif text-5xl md:text-7xl uppercase tracking-widest mb-10 leading-tight">
                  Déployer<br/><span className="text-emerald-400 group-hover:text-emerald-300 transition-colors duration-500">L&apos;Éclat</span>
                </span>
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-400 group-hover:shadow-[0_0_70px_rgba(16,185,129,0.6)] transition-all duration-700">
                  <Send strokeWidth={0.75} className="w-10 h-10 md:w-14 md:h-14 text-emerald-400 group-hover:text-white transition-all duration-500 group-hover:scale-110" />

                  {/* Internal scanning line */}
                  <div className="absolute inset-0 w-full h-full animate-beam bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Gravitational Orbits */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-10 pointer-events-none"
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400/40" />
              </motion.div>
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
