"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  const [isGlitched, setIsGlitched] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.9) {
        setIsGlitched(true);
        setTimeout(() => setIsGlitched(false), 50 + Math.random() * 100);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  const glitchVariants = {
    normal: { x: 0, y: 0, opacity: 1 },
    glitch: {
      x: [0, -2, 2, -1, 1, 0],
      y: [0, 1, -1, 0],
      opacity: [1, 0.8, 1, 0.9, 1],
      skewX: [0, -10, 10, -5, 5, 0],
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <motion.span
        animate={isGlitched ? "glitch" : "normal"}
        variants={glitchVariants}
        className="relative z-10 block"
      >
        {text}
      </motion.span>
      {isGlitched && (
        <>
          <motion.span
            animate={{ x: [-2, 2, -1], y: [1, -1] }}
            className="absolute top-0 left-0 z-0 text-red-500/50 opacity-50"
          >
            {text}
          </motion.span>
          <motion.span
            animate={{ x: [2, -2, 1], y: [-1, 1] }}
            className="absolute top-0 left-0 z-0 text-blue-500/50 opacity-50"
          >
            {text}
          </motion.span>
        </>
      )}
    </div>
  );
}
