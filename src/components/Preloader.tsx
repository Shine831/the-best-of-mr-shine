"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const duration = 2200;

    const animate = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const p = Math.min(elapsed / duration, 1);
      // Apple-style cubic easing
      const eased = 1 - Math.pow(1 - p, 4);
      setProgress(eased * 100);
      if (p < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setTimeout(() => setLoading(false), 400);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-void"
          exit={{
            clipPath: "inset(0 0 100% 0)",
          }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="orb orb-blue animate-orb-1 w-[500px] h-[500px]" style={{ top: "25%", left: "15%" }} />
            <div className="orb orb-purple animate-orb-2 w-[400px] h-[400px]" style={{ bottom: "20%", right: "15%" }} />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Monogram with 3D perspective morph */}
            <motion.div
              initial={{ scale: 0.3, opacity: 0, filter: "blur(30px)", rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)", rotateY: 0 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ perspective: 800 }}
            >
              <motion.div
                className="w-24 h-24 rounded-[1.75rem] liquid-glass flex items-center justify-center"
                animate={{
                  rotateY: [0, 5, -5, 0],
                  rotateX: [0, -3, 3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <span className="text-3xl font-bold font-[var(--font-grotesk)] text-shimmer relative z-10">
                  S
                </span>
              </motion.div>
            </motion.div>

            {/* Portfolio label */}
            <motion.div
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-label-tertiary text-xs tracking-[0.35em] uppercase">
                Portfolio
              </p>

              {/* Animated percentage counter */}
              <motion.p
                className="text-2xl font-mono font-light tabular-nums"
                style={{
                  background: "linear-gradient(135deg, #2997ff, #bf5af2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {Math.round(progress)}%
              </motion.p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="w-48 h-[2px] rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.06)" }}
              initial={{ opacity: 0, scaleX: 0.5 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div
                className="h-full rounded-full transition-none"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #2997ff, #bf5af2, #ff375f)",
                  boxShadow: "0 0 12px rgba(41,151,255,0.5)",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
