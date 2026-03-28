"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Un niveau de rigueur technique rare. Mon portfolio est devenu un aimant à clients premium. Le ROI a été immédiat.",
    name: "Chamix",
    role: "Directeur Artistique",
    company: "CHAMIX GRAPHIC",
    accentColor: "#DC143C",
  },
  {
    id: 2,
    quote:
      "La refonte de notre plateforme a transformé notre présence digitale. Chaque détail est pensé pour la performance et l'impact.",
    name: "E-Jarnauld",
    role: "Gérant",
    company: "E-JARNAULD SOFT",
    accentColor: "#EE1C25",
  },
  {
    id: 3,
    quote:
      "L'automatisation de nos workflows a réduit nos coûts opérationnels de 40%. Un architecte qui comprend les enjeux business.",
    name: "Marc Essono",
    role: "CEO",
    company: "NEXAFLOW TECHNOLOGIES",
    accentColor: "#10b981",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-32 md:py-40 bg-obsidian-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.03),transparent_60%)] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-20 md:mb-28 flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
        >
          <div className="space-y-4">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.6em] text-emerald-500 uppercase flex items-center gap-4">
              <span className="w-8 md:w-12 h-px bg-emerald-500/30" />
              Retours clients
            </span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter uppercase leading-none">
              Ce qu&apos;ils<br />
              <span className="italic text-zinc-500">en Disent</span>
            </h2>
          </div>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          {/* Large quote mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute -top-8 -left-4 md:-left-12 z-0"
          >
            <Quote
              className="w-16 h-16 md:w-24 md:h-24 text-emerald-500/10"
              strokeWidth={1}
            />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-8 md:p-12 lg:p-16 relative z-10"
            >
              {/* Accent border top */}
              <div
                className="absolute top-0 left-0 w-full h-px"
                style={{
                  background: `linear-gradient(to right, transparent, ${testimonials[current].accentColor}50, transparent)`,
                }}
              />

              <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-zinc-100 font-extralight leading-relaxed tracking-tight mb-10">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Avatar initial */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center border"
                    style={{
                      borderColor: `${testimonials[current].accentColor}30`,
                      backgroundColor: `${testimonials[current].accentColor}10`,
                    }}
                  >
                    <span
                      className="font-serif text-lg"
                      style={{ color: testimonials[current].accentColor }}
                    >
                      {testimonials[current].name[0]}
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    <p className="font-sans text-sm text-white font-medium">
                      {testimonials[current].name}
                    </p>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
                      {testimonials[current].role} — {testimonials[current].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setCurrent(i)}
                className="group relative p-2"
                aria-label={`Voir le témoignage de ${t.name}`}
              >
                <div
                  className={`w-8 h-1 rounded-full transition-all duration-500 ${
                    i === current
                      ? "bg-emerald-500 w-12"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
