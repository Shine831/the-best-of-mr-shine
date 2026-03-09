"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import StaggeredText from "./StaggeredText";
import EmergingText from "./EmergingText";

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
        <StaggeredText text="Fondations" className="font-serif text-4xl text-zinc-50 font-bold tracking-wide justify-center" />
        <EmergingText 
          text="Parcours académique et bases structurelles. L'origine de la précision logicielle." 
          className="font-sans text-zinc-400" 
        />
      </motion.div>

      <div className="space-y-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative flex items-start gap-6 rounded-2xl p-6 transition-colors hover:bg-zinc-900/40"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-zinc-800 bg-black text-zinc-500 transition-colors group-hover:border-zinc-500 group-hover:text-zinc-100">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-semibold text-zinc-400 transition-colors group-hover:text-zinc-50">
              BTS Génie Informatique (Génie Logiciel)
            </h3>
            <p className="font-sans font-medium text-zinc-500 transition-colors group-hover:text-zinc-300">
              Institut Universitaire des Leaders, Douala
            </p>
            <p className="text-sm font-mono text-zinc-600 transition-colors group-hover:text-zinc-400">
              2023 RECRUITMENT — 2025 DEPLOYMENT
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group relative flex items-start gap-6 rounded-2xl p-6 transition-colors hover:bg-zinc-900/40"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-zinc-800 bg-black text-zinc-500 transition-colors group-hover:border-zinc-500 group-hover:text-zinc-100">
            <Award className="h-5 w-5" />
          </div>
          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-semibold text-zinc-400 transition-colors group-hover:text-zinc-50">
              GCE A LEVEL
            </h3>
            <p className="font-sans font-medium text-zinc-500 transition-colors group-hover:text-zinc-300">
              Lycée Bilingue de Nyalla
            </p>
            <p className="text-sm font-mono text-zinc-600 transition-colors group-hover:text-zinc-400">
              2022 — 2023
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
