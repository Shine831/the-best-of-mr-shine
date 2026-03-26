"use client";

import { motion } from "framer-motion";

const technologies = [
  "NEXT.JS 16", "REACT 19", "TYPESCRIPT", "TAILWIND V4", 
  "N8N LOCAL", "ZAPIER AUTOMATION", "ANTHROPIC AI", "MANUS AI",
  "GROK", "GOOGLE AI ENV", "JAVA ENTERPRISE", "NESTJS",
  "NODE.JS", "POSTGRESQL", "WEBGL", "DOCKER", "SERVERLESS",
];

export default function TechStack() {
  return (
    <section className="py-24 bg-black overflow-hidden relative border-y border-white/[0.02]" aria-label="Technologies et stack technique maítrisées">
      {/* Gradients on edges to fade text */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap items-center w-max"
        >
          {/* Double the array to create infinite loop effect */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div key={index} className="flex items-center">
              <span className="font-mono text-2xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white/[0.03] uppercase select-none px-8 md:px-16 hover:text-white/10 transition-colors duration-500 cursor-default">
                {tech}
              </span>
              {/* Separator dot */}
              <div className="w-1.5 h-1.5 md:w-3 md:h-3 rounded-full bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.3)]" />
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-overlay opacity-20">
        <span className="font-serif text-5xl md:text-[8rem] text-emerald-900/20 uppercase tracking-widest font-black">
          CORE STACK
        </span>
      </div>
    </section>
  );
}
