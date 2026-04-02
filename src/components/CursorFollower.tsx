"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [label, setLabel] = useState("");
  const [isTouchDevice, setIsTouchDevice] = useState(true); // Default true to prevent flash on mobile

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Main cursor spring
  const springConfig = { damping: 28, stiffness: 180, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  // Outer ring spring (must be declared at top level — Rules of Hooks)
  const ringX = useSpring(cursorX, { damping: 45, stiffness: 120, mass: 0.8 });
  const ringY = useSpring(cursorY, { damping: 45, stiffness: 120, mass: 0.8 });

  useEffect(() => {
    // Detect touch devices safely (runs only in browser)
    const isTouch =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    // Detect interactive elements
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest<HTMLElement>(
        "a, button, [data-cursor], input, textarea, select"
      );
      if (interactive) {
        setHovered(true);
        setLabel(interactive.getAttribute("data-cursor") || "");
      }
    };

    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [data-cursor], input, textarea, select"
      );
      if (interactive) {
        setHovered(false);
        setLabel("");
      }
    };

    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, [cursorX, cursorY, visible]);

  // Don't render anything on touch devices
  if (isTouchDevice) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x, y }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovered ? 3.5 : 1,
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { type: "spring", damping: 20, stiffness: 200 },
        }}
      >
        <div
          className="relative flex items-center justify-center"
          style={{
            width: 12,
            height: 12,
            marginLeft: -6,
            marginTop: -6,
            borderRadius: "50%",
            backgroundColor: hovered
              ? "rgba(255,255,255,0.08)"
              : "rgba(255,255,255,0.9)",
            border: hovered ? "1px solid rgba(255,255,255,0.5)" : "none",
            backdropFilter: hovered ? "blur(4px)" : "none",
          }}
        >
          {label && hovered && (
            <span
              className="absolute whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.15em] text-white"
              style={{ mixBlendMode: "difference" }}
            >
              {label}
            </span>
          )}
        </div>
      </motion.div>

      {/* Outer ring — follows with more lag */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: ringX, y: ringY }}
        animate={{
          opacity: visible && !hovered ? 0.4 : 0,
          scale: 1,
        }}
        transition={{ opacity: { duration: 0.3 } }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            marginLeft: -18,
            marginTop: -18,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        />
      </motion.div>
    </>
  );
}
