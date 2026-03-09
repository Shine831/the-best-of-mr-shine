"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";
import StaggeredText from "./StaggeredText";
import EmergingText from "./EmergingText";
import GlintText from "./GlintText";

function EducationItem({ title, institution, period, icon }: { title: string, institution: string, period: string, icon: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (
    <motion.div 
      ref={ref}
      variants={itemVariants}
      style={{ scale, opacity }}
      className="group relative flex items-start gap-6 rounded-2xl p-6 transition-colors hover:bg-zinc-900/40"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-zinc-800 bg-black text-zinc-500 transition-colors group-hover:border-zinc-500 group-hover:text-zinc-100">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="font-serif text-2xl font-semibold text-zinc-400 transition-colors group-hover:text-zinc-50">
          {title}
        </h3>
        <p className="font-sans font-medium text-zinc-500 transition-colors group-hover:text-zinc-300">
          {institution}
        </p>
        <p className="text-sm font-mono text-zinc-600 transition-colors group-hover:text-zinc-400">
          {period}
        </p>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section className="relative py-32 px-6 max-w-4xl mx-auto border-t border-zinc-900/50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 text-center space-y-4"
      >
        <GlintText>
          <StaggeredText text="Fondations" className="font-serif text-4xl text-zinc-50 font-bold tracking-wide justify-center" />
        </GlintText>
        <EmergingText 
          text="Parcours académique et bases structurelles. L'origine de la précision logicielle." 
          className="font-sans text-zinc-400" 
        />
      </motion.div>

      <motion.div 
        className="space-y-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <EducationItem 
          title="BTS Génie Informatique (Génie Logiciel)"
          institution="Institut Universitaire des Leaders, Douala"
          period="2023 RECRUITMENT — 2025 DEPLOYMENT"
          icon={<GraduationCap className="h-5 w-5" />}
        />

        <EducationItem 
          title="GCE A LEVEL"
          institution="Lycée Bilingue de Nyalla"
          period="2022 — 2023"
          icon={<Award className="h-5 w-5" />}
        />
      </motion.div>
    </section>
  );
}
