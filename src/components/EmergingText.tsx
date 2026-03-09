"use client";

import { motion } from "framer-motion";

interface EmergingTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function EmergingText({ text, className = "", delay = 0 }: EmergingTextProps) {
  // Split text by lines or manually if specific breaks are needed
  // For simplicity and "birth" effect, we split by sentences or logical breaks if none provided
  const lines = text.split(". ").map((line, i, arr) => (i < arr.length - 1 ? line + "." : line));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // User requested 0.1s delay between lines
        delayChildren: delay,
      },
    },
  };

  const lineVariants = {
    hidden: { 
      opacity: 0, 
      filter: "blur(12px)", 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)", 
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const, // Cinematic ease
      }
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {lines.map((line, index) => (
        <motion.p key={index} variants={lineVariants} className="mb-2">
          {line}
        </motion.p>
      ))}
    </motion.div>
  );
}
