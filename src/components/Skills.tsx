"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
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
  
  // Velocity and Internal Position tracked for the physics loop
  const velocity = useRef({ x: 0, y: 0 });
  const internalPos = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });
  
  // Motion values for visual update
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const FRICTION = 0.8;
  const ELASTICITY = 0.5;
  const REPULSION_STRENGTH = 400;
  const REPULSION_RADIUS = 250;
  
  // Container boundaries (will be updated on mount/resize)
  const bounds = useRef({ minX: -200, maxX: 200, minY: -150, maxY: 150 });

  useEffect(() => {
    // Initial random position
    internalPos.current = {
      x: (Math.random() - 0.5) * 350,
      y: (Math.random() - 0.5) * 200
    };
    
    const updateBounds = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        bounds.current = {
          minX: -rect.width / 2 + 60,
          maxX: rect.width / 2 - 60,
          minY: -rect.height / 2 + 30,
          maxY: rect.height / 2 - 30,
        };
      }
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mousePos.current = {
          x: e.clientX - (rect.left + rect.width / 2),
          y: e.clientY - (rect.top + rect.height / 2),
        };
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", updateBounds);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [containerRef]);

  useAnimationFrame(() => {
    // 1. Repulsion from mouse
    const dx = internalPos.current.x - mousePos.current.x;
    const dy = internalPos.current.y - mousePos.current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < REPULSION_RADIUS && distance > 1) {
      const force = (REPULSION_STRENGTH / distance) * (1 - distance / REPULSION_RADIUS);
      velocity.current.x += (dx / distance) * force;
      velocity.current.y += (dy / distance) * force;
    }

    // 2. Perpetual "Wander" force (organic movement)
    velocity.current.x += (Math.random() - 0.5) * 0.2;
    velocity.current.y += (Math.random() - 0.5) * 0.2;

    // 3. Apply Friction
    velocity.current.x *= FRICTION;
    velocity.current.y *= FRICTION;

    // 4. Update Position
    internalPos.current.x += velocity.current.x;
    internalPos.current.y += velocity.current.y;

    // 5. Hard Boundaries / Elasticity
    if (internalPos.current.x < bounds.current.minX) {
      internalPos.current.x = bounds.current.minX;
      velocity.current.x *= -ELASTICITY;
    } else if (internalPos.current.x > bounds.current.maxX) {
      internalPos.current.x = bounds.current.maxX;
      velocity.current.x *= -ELASTICITY;
    }

    if (internalPos.current.y < bounds.current.minY) {
      internalPos.current.y = bounds.current.minY;
      velocity.current.y *= -ELASTICITY;
    } else if (internalPos.current.y > bounds.current.maxY) {
      internalPos.current.y = bounds.current.maxY;
      velocity.current.y *= -ELASTICITY;
    }

    // 6. Push to motion values (React sync)
    x.set(internalPos.current.x);
    y.set(internalPos.current.y);
  });

  return (
    <motion.div
      ref={badgeRef}
      style={{
        x,
        y,
        position: "absolute",
        left: "50%",
        top: "50%",
        translateX: "-50%",
        translateY: "-50%",
      }}
      className={`px-5 py-2.5 rounded-full bg-zinc-950/80 border ${color} text-zinc-300 font-sans text-sm whitespace-nowrap shadow-lg flex items-center justify-center cursor-default hover:text-zinc-50 hover:bg-zinc-900 transition-colors duration-300 backdrop-blur-md`}
    >
      {skill}
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
