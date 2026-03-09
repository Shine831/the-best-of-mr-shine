"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface StaggeredTextProps {
  text: string;
  className?: string;
}

export default function StaggeredText({ text, className }: StaggeredTextProps) {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "inherit" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={twMerge(className)}
    >
      {words.map((word, index) => (
        <span key={index} className="mr-2 sm:mr-3 inline-block whitespace-nowrap">
          {Array.from(word).map((letter, index) => (
            <motion.span variants={child} key={index} className="inline-block">
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
}
