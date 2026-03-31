"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import AnimatedText from "./AnimatedText";

const projects = [
  {
    id: 1,
    title: "Chamix Graphic",
    subtitle: "Portfolio Designer",
    description:
      "Portfolio immersif pour un designer graphique. Interface cinématique, animations Framer Motion poussées et une identité visuelle forte pour convertir les visiteurs.",
    image: "/projects/chamix.png",
    tags: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
    link: "https://chamix.vercel.app",
    accent: "#bf5af2",
  },
  {
    id: 2,
    title: "Carington",
    subtitle: "Service Automobile",
    description:
      "Plateforme web complète de services automobiles. Intègre l'authentification sécurisée, une vitrine de services dynamiques, un panneau admin et l'architecture Firebase complète.",
    image: "/projects/carington.png",
    tags: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS"],
    link: "https://carington.vercel.app",
    accent: "#2997ff",
  },
  {
    id: 3,
    title: "AutoFlow AI",
    subtitle: "Automatisation & IA",
    description:
      "Création complète d'un écosystème d'automatisation. Mise en place d'agents IA autonomes connectés à n8n et Zapier pour orchestrer des workflows complexes et améliorer la productivité.",
    image: "/projects/autoflow.png",
    tags: ["Zapier", "n8n", "API REST", "Agents IA"],
    link: null,
    accent: "#30d158",
  },
  {
    id: 4,
    title: "NexGen Dashboard",
    subtitle: "Analytique Data",
    description:
      "Interface métier sous forme de Dashboard analytique en temps réel. Visualisation agnostique des données massives avec KPIs interactifs ultra-réactifs.",
    image: "/projects/nexgen.png",
    tags: ["React", "Node.js", "MySQL", "Chart.js"],
    link: null,
    accent: "#ff375f",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
};

export default function BentoProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Parallax Background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Carousel State
  const [[page, direction], setPage] = useState([0, 0]);

  // JS modulo fix for negative numbers
  const imageIndex = ((page % projects.length) + projects.length) % projects.length;
  const activeProject = projects[imageIndex];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section id="projets" ref={sectionRef} className="section-space relative overflow-hidden">
      {/* Divider */}
      <div className="section-divider absolute top-0 left-0" />

      {/* Parallax bg glow */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="orb orb-indigo animate-orb-2 w-[500px] h-[500px]" style={{ top: "10%", right: "-10%", opacity: 0.15 }} />
        <div className="orb orb-blue animate-orb-3 w-[400px] h-[400px]" style={{ bottom: "20%", left: "-5%", opacity: 0.1 }} />
      </motion.div>

      <div className="section-wrap relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.p
            className="text-accent-blue text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Sélection Exécutive
          </motion.p>
          <AnimatedText
            text="Des expériences qui parlent d'elles-mêmes."
            tag="h2"
            className="text-[clamp(1.75rem,5vw,3.5rem)] font-display font-bold text-label leading-[1.1] max-w-3xl mx-auto"
          />
        </div>

        {/* Carousel Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Content & Controls */}
          <div className="lg:col-span-4 flex flex-col order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={imageIndex}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col"
              >
                {/* ID & Subtitle */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-mono tracking-tighter" style={{ color: `${activeProject.accent}50` }}>
                    0{imageIndex + 1}
                  </span>
                  <div className="h-px w-12" style={{ background: activeProject.accent }} />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: activeProject.accent }}>
                    {activeProject.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-4xl md:text-5xl font-display font-bold text-label mb-6 leading-tight">
                  {activeProject.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] md:text-xs font-mono px-3 py-1.5 rounded-full"
                      style={{
                        background: `${activeProject.accent}12`,
                        color: activeProject.accent,
                        border: `1px solid ${activeProject.accent}25`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-label-secondary leading-relaxed mb-8">
                  {activeProject.description}
                </p>

                {/* Live Link Button */}
                {activeProject.link && (
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 self-start px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                    style={{
                      background: `${activeProject.accent}15`,
                      color: activeProject.accent,
                      border: `1px solid ${activeProject.accent}30`,
                    }}
                  >
                    Voir l'application web
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                )}
                {!activeProject.link && (
                  <div className="inline-flex items-center gap-2 self-start px-6 py-3 rounded-full text-sm font-medium opacity-50 cursor-not-allowed border border-white/5 bg-white/5 text-label-tertiary">
                    Déploiement en cours
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center gap-3 mt-10">
              <button
                onClick={() => paginate(-1)}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-label hover:bg-white/10 transition-colors border-white/10"
                aria-label="Projet précédent"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-label hover:bg-white/10 transition-colors border-white/10"
                aria-label="Projet suivant"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="ml-4 flex gap-1.5">
                {projects.map((_, idx) => (
                  <div
                    key={idx}
                    className="h-1.5 rounded-full transition-all duration-500"
                    style={{
                      width: idx === imageIndex ? "24px" : "6px",
                      background: idx === imageIndex ? activeProject.accent : "rgba(255,255,255,0.15)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Image Carousel */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden glass-card p-1 sm:p-2 border-white/10">
              {/* Image Container with AnimatePresence */}
              <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden bg-void">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={page}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.4 },
                      scale: { duration: 0.4 }
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      priority
                      className="object-cover transition-transform duration-[2s] hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                    
                    {/* Inner shadow overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Edge highlight */}
              <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
