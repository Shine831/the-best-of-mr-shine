"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import StaggeredText from "./StaggeredText";
import EmergingText from "./EmergingText";

const experiences = [
  {
    role: "Développeur WEB Java",
    company: "KOZAO AFRICA",
    period: "Juin - Août 2025",
    description:
      "Développement d'applications sur JPlatform, implémentation Front/Back, revues de code, tests et documentation technique stricte.",
  },
  {
    role: "Ingénierie de GMAO",
    company: "ASECNA",
    period: "Juillet - Août 2024",
    description:
      "Conception de modules CRUD pour la maintenance d'instruments météorologiques, tests et sécurisation via sauvegardes MySQL.",
  },
];

function ReflectionCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useSpring(useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]));
  const rotateY = useSpring(useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]));

  // Workaround for useTransform needing a string interpolation
  const background = useMotionTemplate`radial-gradient(400px circle at ${useTransform(mouseXSpring, (v) => `${(v + 0.5) * 100}%`)} ${useTransform(mouseYSpring, (v) => `${(v + 0.5) * 100}%`)}, rgba(255,255,255,0.1), transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full max-w-xl rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition-colors hover:border-zinc-700"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          background,
        }}
      />
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}


export default function Experience() {
  return (
    <section className="relative min-h-screen py-32 px-6 flex flex-col items-center justify-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-zinc-800" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="mb-20 text-center space-y-4"
      >
        <StaggeredText text="Archives Opérationnelles" className="font-serif text-4xl md:text-5xl text-zinc-50 font-bold justify-center" />
        <EmergingText 
          text="Chronologie des déploiements et ingénierie de pointe. Chaque projet est un jalon de résilience." 
          className="font-sans text-zinc-400" 
        />
      </motion.div>

      <div className="flex flex-col gap-12 relative w-full items-center">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-zinc-800 pointer-events-none hidden md:block" />

        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`w-full flex ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"} relative z-10 md:w-[800px]`}
          >
            {/* Timeline dot */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-zinc-800 border-2 border-zinc-950 hidden md:block z-20" />
            
            <div className="w-full md:w-[calc(50%-2rem)]">
              <ReflectionCard>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-sans text-2xl font-semibold text-zinc-100">{exp.role}</h3>
                    <div className="flex items-center justify-between text-zinc-400 text-sm font-medium">
                      <span className="text-zinc-300">{exp.company}</span>
                      <span className="text-zinc-500">{exp.period}</span>
                    </div>
                  </div>
                  <div className="font-sans text-zinc-400 text-sm leading-relaxed border-t border-zinc-800/50 pt-4">
                    <EmergingText text={exp.description} />
                  </div>
                </div>
              </ReflectionCard>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
