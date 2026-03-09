"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import StaggeredText from "./StaggeredText";

export default function Contact() {
  const openEmail = () => {
    window.location.href = "mailto:jcbaha58@gmail.com?subject=Collaboration&body=Bonjour Jean Claude,";
  };

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-900/30 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-20 flex flex-col items-center text-center space-y-10 max-w-4xl w-full"
      >
        <div className="space-y-5">
          <StaggeredText
            text="Initiation."
            className="font-serif text-5xl md:text-7xl font-bold text-zinc-50 tracking-tight justify-center"
          />
          <p className="font-sans text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Perfectionniste avec un sens aiguisé des détails.{" "}
            Prêt à architecturer votre prochaine solution digitale.
          </p>
        </div>

        {/* CTA Button — native <a> for reliable mailto */}
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
          <a
            href="mailto:jcbaha58@gmail.com?subject=Collaboration"
            onClick={openEmail}
            className="group relative inline-flex items-center justify-center px-8 sm:px-12 py-5 sm:py-6 font-serif text-base sm:text-xl md:text-2xl font-bold tracking-widest text-black bg-zinc-100 rounded-full overflow-hidden transition-all hover:bg-white cursor-pointer"
          >
            <span className="relative z-10">DÉMARRER UNE COLLABORATION</span>
          </a>
        </motion.div>

        {/* Contact Links */}
        <div className="grid grid-cols-2 md:flex md:flex-row items-center gap-6 pt-10 border-t border-zinc-800/50 w-full justify-center">
          <ContactLink
            href="mailto:jcbaha58@gmail.com"
            icon={<Mail className="w-5 h-5" />}
            label="Email"
          />
          <ContactLink
            href="https://wa.me/237699477055"
            icon={<MessageCircle className="w-5 h-5" />}
            label="WhatsApp"
          />
          <ContactLink
            href="https://github.com/Shine831"
            icon={<Github className="w-5 h-5" />}
            label="GitHub"
          />
          <ContactLink
            href="https://www.linkedin.com/in/jean-claude-schimit-baha"
            icon={<Linkedin className="w-5 h-5" />}
            label="LinkedIn"
          />
        </div>

        <div className="pt-6 text-sm text-zinc-600 font-mono text-center space-y-1">
          <p>Langues : Français (Courant) / Anglais (Technique)</p>
          <p>Référence : Charly Desplay Kuitche (ASECNA)</p>
        </div>
      </motion.div>
    </section>
  );
}

function ContactLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-zinc-400 hover:text-zinc-50 transition-colors font-sans group"
    >
      <div className="p-3 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-zinc-600 transition-colors shrink-0">
        {icon}
      </div>
      <span className="font-medium text-sm md:text-base">{label}</span>
    </a>
  );
}
