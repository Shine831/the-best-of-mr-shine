"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MessageCircle, Github, Linkedin } from "lucide-react";
import AnimatedText from "./AnimatedText";

const links = [
  { icon: Mail, label: "Email", value: "jcbaha58@gmail.com", href: "mailto:jcbaha58@gmail.com", accent: "#2997ff" },
  { icon: Phone, label: "Téléphone", value: "+237 699 477 055", href: "tel:+237699477055", accent: "#30d158" },
  { icon: MessageCircle, label: "WhatsApp", value: "Discutons", href: "https://wa.me/237699477055", accent: "#30d158" },
  { icon: Linkedin, label: "LinkedIn", value: "Profil LinkedIn", href: "https://www.linkedin.com/in/schmit-claude-bha993b6", accent: "#0a66c2" },
  { icon: Github, label: "GitHub", value: "Shine831", href: "https://github.com/Shine831", accent: "#f5f5f7" },
];

export default function ContactCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1.1, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["30px", "0px"]);

  return (
    <section id="contact" ref={sectionRef} className="section-space relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0" />

      {/* Animated orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="orb orb-blue animate-orb-1 w-[600px] h-[600px]"
          style={{ top: "20%", left: "10%", scale: orbScale }}
        />
        <motion.div
          className="orb orb-purple animate-orb-2 w-[500px] h-[500px]"
          style={{ bottom: "10%", right: "5%", scale: orbScale }}
        />
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, transparent, #000 100%)" }}
      />

      <div className="section-wrap relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <motion.p
            className="text-accent-blue text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Contact
          </motion.p>
          <motion.div style={{ y: textY }}>
            <AnimatedText
              text="Travaillons ensemble."
              tag="h2"
              className="text-[clamp(2.25rem,7vw,5.5rem)] font-display font-bold text-label leading-[1]"
            />
          </motion.div>
          <motion.p
            className="text-label-secondary text-sm sm:text-base mt-5 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Un projet en tête ? Discutons de comment le transformer en réalité.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a href="mailto:jcbaha58@gmail.com" className="btn-apple text-sm gap-2">
            <Mail className="w-4 h-4" />
            Envoyer un email
          </a>
          <a
            href="https://wa.me/237699477055"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-sm gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-4xl mx-auto">
          {links.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glass-card p-4 sm:p-5 flex flex-col items-center text-center gap-2.5 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.08, duration: 0.6 }}
            >
              <div className="absolute top-0 left-0 right-0 h-px z-10" style={{ background: `linear-gradient(90deg, transparent, ${item.accent}30, transparent)` }} />
              <div
                className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${item.accent}12` }}
              >
                <item.icon className="w-4 h-4" style={{ color: item.accent }} strokeWidth={1.5} />
              </div>
              <div className="relative z-10">
                <p className="text-[10px] text-label-tertiary uppercase tracking-wider">{item.label}</p>
                <p className="text-[11px] text-label/70 font-medium mt-0.5">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Location */}
        <motion.p
          className="text-center text-xs text-label-tertiary mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          📍 Ndogpassi III, Douala — Cameroun
        </motion.p>
      </div>
    </section>
  );
}
