"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Code2, Zap, Palette, MessagesSquare } from "lucide-react";
import AnimatedText from "./AnimatedText";

const services = [
  {
    icon: Code2,
    title: "Développement Web Full Stack",
    description:
      "Applications web performantes et scalables — des sites vitrine aux plateformes SaaS complexes, conçus avec les technologies les plus modernes.",
    features: ["React / Next.js / Angular", "APIs RESTful & Backend", "Bases de données MySQL", "Déploiement Vercel & Firebase"],
    accent: "#2997ff",
  },
  {
    icon: Zap,
    title: "Automatisation & Agents IA",
    description:
      "Workflows intelligents qui travaillent pour vous 24/7 — connectez vos outils, automatisez vos processus et créez des agents IA autonomes.",
    features: ["Workflows Zapier avancés", "Agents n8n autonomes", "Intégrations multi-services", "Réduction 80% tâches manuelles"],
    accent: "#30d158",
  },
  {
    icon: Palette,
    title: "Design UI/UX Premium",
    description:
      "Interfaces qui convertissent — chaque interaction est pensée pour maximiser l'engagement et créer une expérience mémorable.",
    features: ["Design Systems sur mesure", "Animations cinématiques", "Mobile-first responsive", "Accessibilité intégrée"],
    accent: "#bf5af2",
  },
  {
    icon: MessagesSquare,
    title: "Consultation Technique",
    description:
      "Accompagnement stratégique de A à Z — architecture, choix technologiques, optimisation et déploiement de vos projets digitaux.",
    features: ["Audit & Architecture", "Optimisation performances", "Planification technique", "Gestion de projet Agile"],
    accent: "#ff375f",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="services" ref={sectionRef} className="section-space relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0" />

      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: orbY }}>
        <div className="orb orb-blue animate-orb-3 w-[400px] h-[400px]" style={{ top: "30%", right: "-10%", opacity: 0.12 }} />
      </motion.div>

      <div className="section-wrap relative z-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <motion.p
            className="text-accent-green text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Services
          </motion.p>
          <AnimatedText
            text="Ce que je peux faire pour vous."
            tag="h2"
            className="text-[clamp(1.75rem,5vw,3.5rem)] font-display font-bold text-label leading-[1.1]"
          />
          <motion.p
            className="text-label-secondary text-sm sm:text-base mt-5 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Des solutions concrètes pour transformer vos idées en produits digitaux d&apos;exception.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="glass-card p-6 sm:p-8 md:p-9 h-full group"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px z-10"
        style={{ background: `linear-gradient(90deg, ${service.accent}50, transparent 60%)` }}
      />

      {/* Hover glow */}
      <div
        className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl z-0"
        style={{ background: `${service.accent}10` }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110"
          style={{ background: `${service.accent}12` }}
        >
          <service.icon className="w-5 h-5" style={{ color: service.accent }} strokeWidth={1.5} />
        </div>

        {/* Content */}
        <h3 className="text-lg font-display font-semibold text-label mb-2.5">{service.title}</h3>
        <p className="text-xs sm:text-sm text-label-secondary leading-relaxed mb-5">{service.description}</p>

        {/* Features */}
        <div className="space-y-2.5">
          {service.features.map((f) => (
            <div key={f} className="flex items-center gap-2.5">
              <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: service.accent }} />
              <span className="text-[11px] sm:text-xs text-label-tertiary">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
