"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useState, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "CHAMIX GRAPHIC",
    subtitle: "Portfolio Designer",
    description:
      "Portfolio premium pour un directeur artistique à Douala. Expérience immersive avec preloader cinématique, grille Bento 3D tilt, et animations scroll-triggered.",
    stack: ["Next.js 16", "Framer Motion", "Tailwind v4", "Vercel"],
    image: "/projects/chamix.png",
    liveUrl: "https://chamix.vercel.app",
    githubUrl: null,
    accent: "from-red-600/30 to-red-950/50",
    accentColor: "#DC143C",
    featured: true,
  },
  {
    id: 2,
    title: "E-JARNAULD SOFT",
    subtitle: "IT Services Platform",
    description:
      "Plateforme web pour une entreprise de services informatiques : infogérance, câblage, sécurité et vidéosurveillance. Design Premium Crimson avec catalogue 8 services.",
    stack: ["Next.js", "Firebase", "TypeScript", "Tailwind"],
    image: "/projects/carington.png",
    liveUrl: "https://carington.vercel.app",
    githubUrl: null,
    accent: "from-orange-600/30 to-orange-950/50",
    accentColor: "#EE1C25",
    featured: true,
  },
  {
    id: 3,
    title: "AUTOFLOW AI",
    subtitle: "Automation Dashboard",
    description:
      "Dashboard d'orchestration de workflows IA multi-agents. Pipelines visuels connectant Zapier, n8n et LLMs pour des automatisations zero-friction.",
    stack: ["React 19", "NestJS", "n8n", "Anthropic API"],
    image: "/projects/autoflow.png",
    liveUrl: null,
    githubUrl: null,
    accent: "from-emerald-600/30 to-emerald-950/50",
    accentColor: "#10b981",
    featured: false,
  },
  {
    id: 4,
    title: "LUXE COMMERCE",
    subtitle: "E-Commerce Premium",
    description:
      "Boutique en ligne haut de gamme avec CMS headless, paiements sécurisés et gestion d'inventaire temps réel. Interface luxe dark mode.",
    stack: ["Next.js", "Stripe", "Sanity CMS", "PostgreSQL"],
    image: "/projects/ecommerce.png",
    liveUrl: null,
    githubUrl: null,
    accent: "from-amber-600/30 to-amber-950/50",
    accentColor: "#D4AF37",
    featured: false,
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true, margin: "-10%" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/[0.06] ${
        project.featured ? "md:col-span-1 md:row-span-2" : "md:col-span-1"
      }`}
    >
      {/* Spotlight effect */}
      <div
        className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, ${project.accentColor}10, transparent 40%)`,
        }}
      />

      {/* Image container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} — ${project.subtitle}`}
          fill
          className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Accent gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-30 transition-opacity duration-700 mix-blend-overlay`}
        />

        {/* Live indicator */}
        {project.liveUrl && (
          <div className="absolute top-4 right-4 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-xl border border-white/10">
            <div
              className="w-1.5 h-1.5 rounded-full animate-pulse shadow-[0_0_8px]"
              style={{
                backgroundColor: project.accentColor,
                boxShadow: `0 0 8px ${project.accentColor}80`,
              }}
            />
            <span className="font-mono text-[9px] tracking-[0.3em] text-zinc-300 uppercase">
              Live
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 p-5 md:p-6 lg:p-8 flex flex-col gap-4">
        {/* Category tag */}
        <div className="flex items-center gap-3">
          <span
            className="w-6 h-px"
            style={{ backgroundColor: `${project.accentColor}50` }}
          />
          <span className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] uppercase" style={{ color: project.accentColor }}>
            {project.subtitle}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl md:text-2xl lg:text-3xl text-white tracking-tight uppercase leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-sans text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-500 line-clamp-3">
          {project.description}
        </p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-2 mt-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider text-zinc-400 bg-white/[0.04] border border-white/[0.06] group-hover:border-white/10 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 mt-auto border-t border-white/[0.06]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-zinc-400 hover:text-white uppercase transition-colors duration-300"
            >
              <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
              Voir le site
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-zinc-400 hover:text-white uppercase transition-colors duration-300"
            >
              <Github className="w-3.5 h-3.5" strokeWidth={1.5} />
              Code
            </a>
          )}
          {!project.liveUrl && !project.githubUrl && (
            <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-600 uppercase">
              Projet interne
            </span>
          )}

          <motion.div
            className="ml-auto"
            animate={isHovered ? { rotate: 45, scale: 1.1 } : { rotate: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-all duration-500"
              style={{
                backgroundColor: isHovered ? `${project.accentColor}15` : "transparent",
              }}
            >
              <ArrowUpRight
                className="w-4 h-4 md:w-5 md:h-5 text-zinc-500 group-hover:text-white transition-colors duration-500"
                strokeWidth={1.5}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsGallery() {
  return (
    <section id="projets" className="relative py-32 md:py-40 bg-obsidian-950 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(16,185,129,0.03),transparent_60%)] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-20 md:mb-28 flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
        >
          <div className="space-y-4">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.6em] text-emerald-500 uppercase flex items-center gap-4">
              <span className="w-8 md:w-12 h-px bg-emerald-500/30" />
              Portfolio sélectionné
            </span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter uppercase leading-none">
              Projets<br />
              <span className="italic text-zinc-500">Architecturés</span>
            </h2>
          </div>
          <p className="font-sans text-sm md:text-base text-zinc-500 max-w-md leading-relaxed">
            Chaque projet est une architecture de précision. Du concept au déploiement,
            une obsession pour le détail et la performance.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
