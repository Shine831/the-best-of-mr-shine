"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import StaggeredText from "./StaggeredText";

const skills = [
  { label: "MySQL", color: "border-blue-900/50" },
  { label: "React.js", color: "border-cyan-900/50" },
  { label: "Nest.js", color: "border-red-900/50" },
  { label: "Angular", color: "border-rose-900/50" },
  { label: "HTML5", color: "border-orange-900/50" },
  { label: "CSS3", color: "border-blue-900/50" },
  { label: "JavaScript", color: "border-yellow-900/50" },
  { label: "PHP", color: "border-purple-900/50" },
  { label: "GitHub", color: "border-zinc-700/50" },
  { label: "Vercel", color: "border-zinc-700/50" },
  { label: "Firebase Studio", color: "border-yellow-900/50" },
  { label: "Notion", color: "border-zinc-700/50" },
];

function FloatingBadge({
  skill,
  containerRef,
  color,
}: {
  skill: string;
  containerRef: React.RefObject<HTMLDivElement | null>;
  color: string;
}) {
  const badgeRef = useRef<HTMLDivElement>(null);
  // Start at 0/0 on both server and client to avoid hydration mismatch.
  // Random positions are assigned only in useEffect (client-only).
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const floatDurationRef = useRef(3);

  const floatX = useMotionValue(0);
  const floatY = useMotionValue(0);

  const springConfig = { damping: 18, stiffness: 80, mass: 1.2 };
  const repelledX = useSpring(floatX, springConfig);
  const repelledY = useSpring(floatY, springConfig);

  useEffect(() => {
    // Randomize only on the client after hydration
    const initX = (Math.random() - 0.5) * 380;
    const initY = (Math.random() - 0.5) * 220;
    floatDurationRef.current = 2 + Math.random() * 3;
    setPosition({ x: initX, y: initY });
    floatX.set(initX);
    floatY.set(initY);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newX = position.x + (Math.random() - 0.5) * 60;
      const newY = position.y + (Math.random() - 0.5) * 40;
      const boundedX = Math.max(-240, Math.min(240, newX));
      const boundedY = Math.max(-160, Math.min(160, newY));
      setPosition({ x: boundedX, y: boundedY });
      floatX.set(boundedX);
      floatY.set(boundedY);
    }, 3500 + Math.random() * 1000);
    return () => clearInterval(interval);
  }, [position, floatX, floatY]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !badgeRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const badgeRect = badgeRef.current.getBoundingClientRect();
      const mouseX = e.clientX - containerRect.left;
      const mouseY = e.clientY - containerRect.top;
      const badgeCenterX = badgeRect.left - containerRect.left + badgeRect.width / 2;
      const badgeCenterY = badgeRect.top - containerRect.top + badgeRect.height / 2;
      const deltaX = badgeCenterX - mouseX;
      const deltaY = badgeCenterY - mouseY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const repulsionRadius = 200;
      if (distance < repulsionRadius && distance > 0) {
        const force = (repulsionRadius - distance) / repulsionRadius;
        floatX.set(position.x + (deltaX / distance) * force * 160);
        floatY.set(position.y + (deltaY / distance) * force * 120);
      } else {
        floatX.set(position.x);
        floatY.set(position.y);
      }
    };
    const container = containerRef.current;
    if (container) container.addEventListener("mousemove", handleMouseMove);
    return () => {
      if (container) container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [containerRef, position, floatX, floatY]);

  return (
    <motion.div
      ref={badgeRef}
      style={{
        x: repelledX,
        y: repelledY,
        position: "absolute",
        left: "calc(50% - 56px)",
        top: "calc(50% - 20px)",
      }}
      className={`px-5 py-2.5 rounded-full bg-zinc-950 border ${color} text-zinc-300 font-sans text-sm whitespace-nowrap shadow-lg flex items-center justify-center cursor-default hover:text-zinc-50 hover:bg-zinc-900 transition-colors duration-300`}
    >
      <motion.span
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: floatDurationRef.current, repeat: Infinity, ease: "easeInOut" }}
      >
        {skill}
      </motion.span>
    </motion.div>
  );
}

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-24 overflow-hidden flex flex-col items-center justify-center bg-black">
      <div className="z-10 mb-16 text-center space-y-4 px-6">
        <StaggeredText
          text="Arsenal Technique"
          className="font-serif text-4xl md:text-5xl text-zinc-50 font-bold justify-center drop-shadow-md"
        />
        <p className="font-sans text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
          Technologies maîtrisées, réagissant à la physique de l&apos;environnement.
        </p>
      </div>

      {/* Desktop: floating canvas */}
      <div
        ref={containerRef}
        className="relative hidden md:flex w-full max-w-5xl h-[480px] items-center justify-center border border-zinc-900/50 rounded-3xl bg-zinc-950/20 backdrop-blur-sm overflow-hidden mx-auto"
      >
        <div className="absolute w-40 h-40 bg-zinc-800/10 rounded-full blur-[80px] pointer-events-none" />
        {skills.map((s, i) => (
          <FloatingBadge key={i} skill={s.label} color={s.color} containerRef={containerRef} />
        ))}
      </div>

      {/* Mobile: responsive grid */}
      <div className="md:hidden flex flex-wrap gap-3 justify-center max-w-sm mx-auto px-4">
        {skills.map((s, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`px-5 py-2.5 rounded-full bg-zinc-950 border ${s.color} text-zinc-300 font-sans text-sm`}
          >
            {s.label}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
