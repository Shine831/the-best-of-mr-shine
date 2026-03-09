"use client";

import { motion } from "framer-motion";

const cards = [
  {
    id: "asecna",
    client: "ASECNA",
    title: "SÉCURITÉ OPÉRATIONNELLE",
    description: "Sécuriser les opérations critiques en architecturant des modules de maintenance pour les instruments météorologiques de l'aéroport de Douala. Garantir une fiabilité absolue des données pour imposer la résilience systémique indispensable à la sécurité des vols.",
  },
  {
    id: "kozao",
    client: "KOZAO AFRICA",
    title: "INGÉNIERIE DE FLUX",
    description: "Orchestrer l'ingénierie de la JPlatform en manipulant des structures logicielles denses et interconnectées. Maîtriser le cycle de développement complet pour dominer les logiques de flux collaboratifs de haute complexité.",
  }
];

export const BentoGrid = () => {
  return (
    <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="font-serif text-3xl md:text-4xl text-zinc-100 mb-2">Archives d’Élite</h2>
        <div className="w-12 h-[1px] bg-zinc-700"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group relative p-10 rounded-2xl bg-white/5 backdrop-blur-lg border border-zinc-800/50 hover:border-zinc-500/50 transition-colors duration-500 overflow-hidden flex flex-col justify-between min-h-[400px]"
          >
            {/* Subtle gradient glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative z-10">
              <span className="text-xs font-medium tracking-widest text-zinc-500 mb-4 block">
                {card.client}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-zinc-100 mb-6">
                {card.title}
              </h3>
            </div>
            
            <div className="relative z-10 mt-auto">
              <p className="font-sans text-sm md:text-base text-zinc-400 leading-relaxed max-w-md">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
