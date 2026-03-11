"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlintTextProps {
  children: ReactNode;
  className?: string;
}

export default function GlintText({ children, className = "" }: GlintTextProps) {
  const glintVariants = {
    initial: { backgroundPosition: "-200% 0" },
    animate: {
      backgroundPosition: ["200% 0", "-200% 0"],
      transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1] as const, // Sharp, cinematic ease
      },
    },
  };

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      initial="initial"
      whileHover="animate"
      whileInView="animate"
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.span
        variants={glintVariants}
        style={{
          backgroundImage: "linear-gradient(120deg, transparent 45%, rgba(255,255,255,0.8) 50%, transparent 55%)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "inherit",
          display: "inline-block",
        }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
}
