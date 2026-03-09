"use client";

import { motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface LiquidSilverGlintProps {
  children: ReactNode;
  className?: string;
}

export default function LiquidSilverGlint({ children, className = "" }: LiquidSilverGlintProps) {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const startAnimation = async () => {
      // The "flash" happens over 1.5s (or 0.8s if hovered)
      const duration = isHovered ? 0.8 : 1.5;
      
      await controls.start({
        maskPosition: ["200% 0%", "-100% 0%"],
        transition: {
          duration: duration,
          ease: "easeInOut",
        },
      });

      // Reset to start position without animation
      controls.set({ maskPosition: "200% 0%" });

      // Wait for the requested 5s interval (minus animation time)
      // If hovered, it accelerates (effectively shorter interval)
      const waitTime = isHovered ? 2000 : 5000;
      timeout = setTimeout(startAnimation, waitTime);
    };

    startAnimation();

    return () => clearTimeout(timeout);
  }, [controls, isHovered]);

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={controls}
        initial={{ maskPosition: "200% 0%" }}
        style={{
          maskImage: "linear-gradient(45deg, transparent 35%, black 50%, transparent 65%)",
          WebkitMaskImage: "linear-gradient(45deg, transparent 35%, black 50%, transparent 65%)",
          maskSize: "200% 100%",
          WebkitMaskSize: "200% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      >
        {children}
      </motion.div>
      
      {/* Fallback/Base layer to ensure text remains visible even when mask is moving */}
      <div className="absolute inset-0  pointer-events-none opacity-20">
        {children}
      </div>
    </motion.div>
  );
}
