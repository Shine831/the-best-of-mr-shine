"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorType, setCursorType] = useState("default");

  const springConfig = { stiffness: 400, damping: 28, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button") || target.closest(".cursor-pointer")) {
        setIsHovering(true);
        setCursorType("pointer");
      } else if (target.closest("h1") || target.closest("h2") || target.closest("h3")) {
        setIsHovering(true);
        setCursorType("text");
      } else if (target.closest(".glass-panel")) {
        setIsHovering(true);
        setCursorType("glass");
      } else {
        setIsHovering(false);
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block">
      {/* Primary Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-2 h-2 bg-white rounded-full"
      />

      {/* Reactive Outer Ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? (cursorType === "text" ? 8 : 2.5) : 1,
          opacity: isHovering ? 0.5 : 1,
          borderWidth: isHovering ? "1px" : "2px",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        className="absolute w-10 h-10 border border-white rounded-full"
      />

      {/* Dynamic Label */}
      {isHovering && cursorType === "pointer" && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 30 }}
          style={{
            x: cursorX,
            y: cursorY,
          }}
          className="absolute font-mono text-[8px] tracking-widest text-white uppercase whitespace-nowrap"
        >
          Interagir
        </motion.div>
      )}
    </div>
  );
}
