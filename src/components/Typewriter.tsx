"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export default function Typewriter({ text, speed = 0.05, className = "" }: { text: string; speed?: number; className?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));
  const [done, setDone] = useState(false);

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: text.length * speed,
      ease: "linear",
      onComplete: () => setDone(true),
    });
    return controls.stop;
  }, [text, speed, count]);

  return (
    <span className={className}>
      <motion.span>{displayText}</motion.span>
      {!done && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-[2px] h-[1em] bg-current ml-1 align-middle"
        />
      )}
    </span>
  );
}
