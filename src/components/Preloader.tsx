"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const duration = 2500; // 2.5s loading sequence
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.floor(easeOutExpo(currentStep / steps) * 100), 100);
      setProgress(nextProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => setIsLoading(false), 500); // Small pause before exit
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Easing function for smoother counter
  function easeOutExpo(x: number): number {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[1000] bg-[#0a0a0a] text-white flex flex-col justify-end p-8 md:p-16 overflow-hidden"
        >
          <div className="flex justify-between items-end">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
              className="flex flex-col"
            >
              <span className="font-sans text-xs md:text-sm tracking-[0.3em] text-zinc-500 uppercase">
                Initialization
              </span>
              <span className="font-serif text-2xl md:text-4xl tracking-[0.1em] text-zinc-100 mt-2">
                Digital Obsidian
              </span>
            </motion.div>
            
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-mono text-7xl md:text-[12rem] leading-none tracking-tighter text-zinc-100">
                {progress}
              </span>
              <span className="font-mono text-2xl md:text-5xl text-[#10b981] leading-none mt-2 md:mt-6 ml-1">
                %
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
