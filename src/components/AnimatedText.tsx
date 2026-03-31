"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  splitBy?: "word" | "char";
}

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.04,
  tag: Tag = "h2",
  splitBy = "word",
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const items = splitBy === "word" ? text.split(" ") : text.split("");

  return (
    <Tag ref={ref} className={`${className} overflow-hidden`}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "110%", opacity: 0 }}
          animate={
            isInView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }
          }
          transition={{
            duration: 0.7,
            delay: delay + i * staggerDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {item}
          {splitBy === "word" && i < items.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </Tag>
  );
}
