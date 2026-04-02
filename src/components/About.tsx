"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import AnimatedText from "./AnimatedText";

const stats = [
  { value: "10+", label: "Projets livrés", accent: "#2997ff" },
  { value: "15+", label: "Technologies", accent: "#bf5af2" },
  { value: "2+", label: "Ans d'expérience", accent: "#30d158" },
  { value: "100%", label: "Engagement", accent: "#ff375f" },
];

const timeline = [
  {
    period: "Sept. 2023 — Août 2025",
    title: "BTS Génie Informatique",
    org: "Institut Universitaire des Leaders, Douala",
    type: "Formation",
    description: "Spécialité Génie Logiciel — Conception et développement de systèmes informatiques.",
    accent: "#2997ff",
    icon: "🎓",
  },
  {
    period: "Juin 2024 — Août 2025",
    title: "Développeur Web",
    org: "KOZAO AFRICA, Ndogpassi III, Douala",
    type: "Expérience",
    description: "Développement Full Stack sur JJPlatform — Frontend, Backend, revues de code et documentation technique.",
    accent: "#30d158",
    icon: "💼",
  },
  {
    period: "Juil. — Août 2024",
    title: "Stagiaire",
    org: "ASECNA, Aéroport de Douala",
    type: "Stage",
    description: "Projet GMAO — Suivi maintenance instruments météorologiques, modules CRUD, formulaires MySQL.",
    accent: "#bf5af2",
    icon: "✈️",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section id="parcours" ref={sectionRef} className="section-space relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0" />

      {/* Parallax orbs */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: orbY }}>
        <div className="orb orb-teal animate-orb-2 w-[350px] h-[350px]" style={{ top: "15%", left: "-8%", opacity: 0.12 }} />
        <div className="orb orb-pink animate-orb-1 w-[300px] h-[300px]" style={{ bottom: "10%", right: "-5%", opacity: 0.1 }} />
      </motion.div>

      <div className="section-wrap relative z-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <motion.p
            className="text-accent-teal text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            À propos
          </motion.p>
          <AnimatedText
            text="L'histoire derrière le code."
            tag="h2"
            className="text-[clamp(1.75rem,5vw,3.5rem)] font-display font-bold text-label leading-[1.1]"
          />
        </div>

        {/* Bio + Timeline grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
          {/* Bio */}
          <motion.div
            className="lg:col-span-7 glass-card p-6 sm:p-8 md:p-10"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute top-0 left-0 right-0 h-px z-10" style={{ background: "linear-gradient(90deg, rgba(90,200,250,0.4), transparent 60%)" }} />

            <div className="relative z-10 space-y-5 text-sm sm:text-base leading-[1.8]">
              <p className="text-label/90">
                <span className="text-accent-teal font-semibold">Diplômé en BTS Génie Informatique</span>{" "}
                — Spécialité Génie Logiciel, passionné par la création de solutions web qui fusionnent{" "}
                <span className="text-label font-medium">élégance</span> et{" "}
                <span className="text-label font-medium">performance</span>.
              </p>

              <p className="text-label-secondary">
                Chez <span className="text-label/80">KOZAO AFRICA</span>, j&apos;ai développé des applications sur JJPlatform
                — de l&apos;implémentation Frontend/Backend aux revues de code. À l&apos;
                <span className="text-label/80">ASECNA</span>, j&apos;ai contribué au projet GMAO pour la maintenance
                d&apos;instruments météorologiques aéroportuaires.
              </p>

              <p className="text-label-secondary">
                Aujourd&apos;hui, je conçois des{" "}
                <span className="text-gradient-multi font-medium">expériences web premium</span>,
                j&apos;automatise les processus avec{" "}
                <span className="text-accent-purple font-medium">Zapier & n8n</span> et je crée des{" "}
                <span className="text-accent-green font-medium">agents IA autonomes</span> (Gemini, Google AI Studio, Claude). Je maîtrise également 
                l&apos;écosystème Google (Google Tag Manager, GA4) et les dernières IA devs comme Jules et Stitch pour maximiser la qualité et la vélocité.
              </p>
            </div>

            {/* Languages */}
            <div className="grid grid-cols-2 gap-3 mt-7">
              {[
                { lang: "Français", level: "Courant", bars: 5, accent: "#2997ff" },
                { lang: "Anglais", level: "Intermédiaire", bars: 3, accent: "#bf5af2" },
              ].map((l) => (
                <div key={l.lang} className="liquid-glass !rounded-xl p-4">
                  <div className="relative z-10">
                    <p className="text-[10px] text-label-tertiary uppercase tracking-wider mb-1">{l.lang}</p>
                    <p className="text-sm font-semibold text-label">{l.level}</p>
                    <div className="flex gap-1 mt-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className="h-[3px] flex-1 rounded-full"
                          style={{ backgroundColor: i < l.bars ? l.accent : "rgba(255,255,255,0.06)" }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Atouts */}
            <div className="flex flex-wrap gap-2 mt-6">
              {["Perfectionniste", "Créatif", "UI/UX Premium", "Autonome", "Agile"].map((a) => (
                <span key={a} className="text-[10px] sm:text-xs px-3 py-1.5 rounded-full bg-accent-pink/8 text-accent-pink border border-accent-pink/15">
                  {a}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="lg:col-span-5 space-y-3">
            {timeline.map((item, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: "-60px" });
              return (
                <motion.div
                  key={item.title}
                  ref={ref}
                  className="glass-card p-5 sm:p-6"
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px z-10" style={{ background: `linear-gradient(90deg, ${item.accent}40, transparent 50%)` }} />
                  <div className="relative z-10 flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-base"
                      style={{ background: `${item.accent}12` }}
                    >
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-medium uppercase tracking-wider mb-0.5" style={{ color: item.accent }}>
                        {item.type}
                      </p>
                      <h4 className="text-sm font-semibold text-label leading-tight">{item.title}</h4>
                      <p className="text-xs text-label-secondary mt-0.5">{item.org}</p>
                      <p className="text-[11px] text-label-tertiary mt-1.5 leading-relaxed">{item.description}</p>
                      <p className="text-[10px] font-mono mt-2" style={{ color: `${item.accent}99` }}>
                        {item.period}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="liquid-glass mt-10 md:mt-14 p-7 md:p-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute top-0 left-0 right-0 h-px z-10" style={{ background: "linear-gradient(90deg, transparent, rgba(41,151,255,0.25), transparent)" }} />
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <StatItem key={s.label} stat={s} delay={i * 0.1} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({ stat, delay }: { stat: (typeof stats)[number]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState(stat.value);

  useEffect(() => {
    if (!inView) return;

    // Extract numeric part
    const numMatch = stat.value.match(/(\d+)/);
    if (!numMatch) return;

    const target = parseInt(numMatch[1], 10);
    const suffix = stat.value.replace(/\d+/, "");
    const duration = 1800;
    let start: number | null = null;
    let frame: number;

    const animate = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const p = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      const current = Math.round(eased * target);
      setDisplayed(`${current}${suffix}`);
      if (p < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView, stat.value]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tabular-nums" style={{ color: stat.accent }}>
        {displayed}
      </p>
      <p className="text-xs text-label-tertiary mt-1">{stat.label}</p>
    </motion.div>
  );
}
