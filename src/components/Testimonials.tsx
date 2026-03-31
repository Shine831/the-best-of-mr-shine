"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "./AnimatedText";

const testimonials = [
  {
    quote:
      "Jean Claude a transformé notre vision en une expérience digitale exceptionnelle. Son attention aux détails et sa maîtrise technique sont impressionnantes.",
    name: "Marc Tientcheu",
    role: "CEO, Startup Fintech",
    initials: "MT",
    accent: "#2997ff",
  },
  {
    quote:
      "Les automatisations Zapier et n8n mises en place nous ont fait gagner plus de 20h par semaine. Un vrai game-changer pour notre productivité.",
    name: "Sandrine Mbella",
    role: "Directrice Opérations",
    initials: "SM",
    accent: "#30d158",
  },
  {
    quote:
      "Un travail premium de bout en bout. La web app livrée dépasse nos attentes tant en design qu'en performances techniques.",
    name: "Paul Fotso",
    role: "Fondateur, Agence Digitale",
    initials: "PF",
    accent: "#bf5af2",
  },
  {
    quote:
      "Collaborer avec Shine, c'est la garantie d'un résultat exceptionnel. Son approche créative et sa rigueur font toute la différence.",
    name: "Aminata Diallo",
    role: "Product Manager",
    initials: "AD",
    accent: "#ff375f",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((p) => (p + 1) % testimonials.length);
  }, []);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[active];

  return (
    <section className="section-space relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-indigo animate-orb-2 w-[350px] h-[350px]" style={{ top: "20%", left: "-8%", opacity: 0.1 }} />
      </div>

      <div className="section-wrap relative z-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <motion.p
            className="text-accent-pink text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Témoignages
          </motion.p>
          <AnimatedText
            text="Ils m'ont fait confiance."
            tag="h2"
            className="text-[clamp(1.75rem,5vw,3.5rem)] font-display font-bold text-label leading-[1.1]"
          />
        </div>

        {/* Carousel */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="liquid-glass p-8 sm:p-10 md:p-12 min-h-[260px] flex flex-col justify-center">
            {/* Dynamic accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-px z-10 transition-all duration-700"
              style={{ background: `linear-gradient(90deg, transparent, ${t.accent}40, transparent)` }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(6px)" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col items-center text-center gap-6"
              >
                {/* Quote mark */}
                <span className="text-3xl opacity-20 leading-none">&ldquo;</span>

                <p className="text-sm sm:text-base md:text-lg text-label/85 leading-relaxed max-w-xl">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: `${t.accent}18`, color: t.accent }}
                  >
                    {t.initials}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-label">{t.name}</p>
                    <p className="text-[11px] text-label-tertiary">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-6">
            {testimonials.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="relative p-1.5"
                aria-label={`Témoignage ${i + 1}`}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full transition-all duration-500"
                  style={{
                    background: i === active ? item.accent : "rgba(255,255,255,0.12)",
                    transform: i === active ? "scale(1.6)" : "scale(1)",
                    boxShadow: i === active ? `0 0 8px ${item.accent}50` : "none",
                  }}
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
