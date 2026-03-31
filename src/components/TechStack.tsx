"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import AnimatedText from "./AnimatedText";

const techGroups = [
  {
    title: "Frontend",
    icon: "🎨",
    accent: "#2997ff",
    items: ["React", "Next.js", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    accent: "#30d158",
    items: ["Java", "PHP", "Node.js", "MySQL", "API REST", "Firebase"],
  },
  {
    title: "Outils & DevOps",
    icon: "🚀",
    accent: "#bf5af2",
    items: ["Git", "GitHub", "Vercel", "Firebase Studio", "Notion", "Three.js"],
  },
  {
    title: "Automatisation & IA",
    icon: "🤖",
    accent: "#ff375f",
    items: ["Zapier", "n8n", "Agents IA", "Prompt Engineering", "Workflows Automatisés"],
  },
  {
    title: "Google Ecosystem",
    icon: "🔍",
    accent: "#5ac8fa",
    items: ["Google AI Studio", "Gemini", "Jules", "Stitch", "GTM", "GA4", "Google Cloud"],
  },
];

function TechGroupCard({ group, index }: { group: (typeof techGroups)[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="glass-card p-6 sm:p-7 md:p-8 h-full"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Accent top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px z-10"
        style={{ background: `linear-gradient(90deg, ${group.accent}50, transparent 70%)` }}
      />

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <span className="text-lg">{group.icon}</span>
        <h3 className="text-base font-display font-semibold text-label">{group.title}</h3>
      </div>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-2">
        {group.items.map((item, i) => (
          <motion.span
            key={item}
            className="text-[11px] sm:text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 cursor-default"
            style={{
              background: `${group.accent}08`,
              color: `${group.accent}cc`,
              border: `1px solid ${group.accent}18`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.12 + i * 0.04, duration: 0.5 }}
            whileHover={{
              background: `${group.accent}20`,
              borderColor: `${group.accent}40`,
              scale: 1.05,
            }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="expertise" ref={sectionRef} className="section-space relative overflow-hidden">
      {/* Divider */}
      <div className="section-divider absolute top-0 left-0" />

      {/* Parallax orb */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: orbY }}>
        <div className="orb orb-purple animate-orb-1 w-[400px] h-[400px]" style={{ bottom: "0%", left: "-8%", opacity: 0.15 }} />
        <div className="orb orb-teal animate-orb-3 w-[300px] h-[300px]" style={{ top: "10%", right: "-5%", opacity: 0.12 }} />
      </motion.div>

      <div className="section-wrap relative z-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <motion.p
            className="text-accent-purple text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Expertise technique
          </motion.p>
          <AnimatedText
            text="Les outils de ma créativité."
            tag="h2"
            className="text-[clamp(1.75rem,5vw,3.5rem)] font-display font-bold text-label leading-[1.1]"
          />
        </div>

        {/* Cards Grid — 2 cols, last card spans full on odd count */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {techGroups.map((group, i) => (
            <div key={group.title} className={i === techGroups.length - 1 && techGroups.length % 2 !== 0 ? "md:col-span-2" : ""}>
              <TechGroupCard group={group} index={i} />
            </div>
          ))}
        </div>

        {/* Infinite Marquee */}
        <motion.div
          className="relative overflow-hidden mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-void to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-void to-transparent z-10" />
          <div className="animate-marquee whitespace-nowrap flex items-center gap-10 py-4">
            {[
              "React", "•", "Next.js", "•", "Angular", "•", "TypeScript", "•", "Java", "•", "PHP", "•",
              "Node.js", "•", "MySQL", "•", "Zapier", "•", "n8n", "•", "Firebase", "•", "Vercel", "•",
              "Git", "•", "Tailwind CSS", "•", "Gemini", "•", "Jules", "•", "GTM", "•", "GA4", "•",
              "Stitch", "•", "Google AI Studio", "•", "Three.js", "•", "Framer Motion", "•",
              "React", "•", "Next.js", "•", "Angular", "•", "TypeScript", "•", "Java", "•", "PHP", "•",
              "Node.js", "•", "MySQL", "•", "Zapier", "•", "n8n", "•", "Firebase", "•", "Vercel", "•",
              "Git", "•", "Tailwind CSS", "•", "Gemini", "•", "Jules", "•", "GTM", "•", "GA4", "•",
              "Stitch", "•", "Google AI Studio", "•", "Three.js", "•", "Framer Motion", "•",
            ].map((t, i) => (
              <span
                key={i}
                className={`whitespace-nowrap ${t === "•" ? "text-label-tertiary/30 text-[8px]" : "text-xs font-mono text-label-tertiary/40"}`}
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
