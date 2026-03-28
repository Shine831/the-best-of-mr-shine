"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Scanline() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ top: "-10%" }}
      animate={{ top: "110%" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed left-0 right-0 h-[2px] bg-zinc-400/50 shadow-[0_0_15px_rgba(255,255,255,0.5)] z-[100] pointer-events-none"
    />
  );
}
