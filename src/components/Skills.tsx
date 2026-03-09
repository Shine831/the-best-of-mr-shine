"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import StaggeredText from "./StaggeredText";
import GlintText from "./GlintText";

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

/**
 * Visual-only component for the badges.
 * Receives position from the central physics coordinator.
 */
function FloatingBadge({
  skill,
  color,
  x,
  y,
}: {
  skill: string;
  color: string;
  x: any;
  y: any;
}) {
  return (
    <motion.div
      style={{
        x,
        y,
        position: "absolute",
        left: "50%",
        top: "50%",
        translateX: "-50%",
        translateY: "-50%",
      }}
      className={`px-5 py-2.5 rounded-full bg-zinc-950/80 border ${color} text-zinc-300 font-sans text-sm whitespace-nowrap shadow-lg flex items-center justify-center cursor-default hover:text-zinc-50 hover:bg-zinc-900 transition-all duration-300 backdrop-blur-md`}
    >
      {skill}
    </motion.div>
  );
}

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create motion values once
  const motionValues = useRef(skills.map(() => ({ x: useMotionValue(0), y: useMotionValue(0) })));
  
  // Physics State (Mutable refs for performance)
  const physics = useRef(skills.map(() => ({
    x: (Math.random() - 0.5) * 400,
    y: (Math.random() - 0.5) * 300,
    vx: 0,
    vy: 0,
    radius: 60 // Approximate radius for collision
  })));

  const mouseRef = useRef({ x: 10000, y: 10000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - (rect.left + rect.width / 2),
        y: e.clientY - (rect.top + rect.height / 2),
      };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useAnimationFrame(() => {
    if (typeof window === "undefined") return;

    const FRICTION = 0.85;
    const MOUSE_REPULSION = 400;
    const MOUSE_RADIUS = 250;
    const COLLISION_REPULSION = 1.2; // 120% as requested
    const MIN_GAP = 25; // 20px gap + padding
    const ORBIT_RADIUS = 300; // Circular boundary

    for (let i = 0; i < physics.current.length; i++) {
      const b = physics.current[i];

      // 1. Mouse Repulsion
      const mdx = b.x - mouseRef.current.x;
      const mdy = b.y - mouseRef.current.y;
      const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
      
      if (mDist < MOUSE_RADIUS && mDist > 1) {
        const force = (MOUSE_REPULSION / mDist) * (1 - mDist / MOUSE_RADIUS);
        b.vx += (mdx / mDist) * force;
        b.vy += (mdy / mDist) * force;
      }

      // 2. Inter-badge Collision (Mutual Repulsion)
      for (let j = i + 1; j < physics.current.length; j++) {
        const b2 = physics.current[j];
        const dx = b2.x - b.x;
        const dy = b2.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const minDist = b.radius + b2.radius + MIN_GAP;

        if (dist < minDist && dist > 1) {
          const overlap = minDist - dist;
          // Apply 120% force to resolve overlap
          const fx = (dx / dist) * overlap * COLLISION_REPULSION * 0.1;
          const fy = (dy / dist) * overlap * COLLISION_REPULSION * 0.1;
          
          b.vx -= fx;
          b.vy -= fy;
          b2.vx += fx;
          b2.vy += fy;
        }
      }

      // 3. Circular Boundary Orbit
      const distFromCenter = Math.sqrt(b.x * b.x + b.y * b.y);
      if (distFromCenter > ORBIT_RADIUS) {
        const cx = -b.x / distFromCenter;
        const cy = -b.y / distFromCenter;
        const pull = (distFromCenter - ORBIT_RADIUS) * 0.2;
        b.vx += cx * pull;
        b.vy += cy * pull;
      }

      // 4. Wander & Physics Integration
      b.vx += (Math.random() - 0.5) * 0.2;
      b.vy += (Math.random() - 0.5) * 0.2;
      
      b.vx *= FRICTION;
      b.vy *= FRICTION;
      
      b.x += b.vx;
      b.y += b.vy;

      // 5. Update Motion Values for Render
      motionValues.current[i].x.set(b.x);
      motionValues.current[i].y.set(b.y);
    }
  });

  return (
    <section className="relative py-24 overflow-hidden flex flex-col items-center justify-center bg-black">
      <div className="z-10 mb-16 text-center space-y-4 px-6">
        <GlintText>
          <StaggeredText
            text="Arsenal Technique"
            className="font-serif text-4xl md:text-5xl text-zinc-50 font-bold justify-center drop-shadow-md"
          />
        </GlintText>
        <p className="font-sans text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
          Technologies maîtrisées, réagissant à la physique de l&apos;environnement.
        </p>
      </div>

      {/* Desktop: Coordinated Floating Canvas */}
      <div
        ref={containerRef}
        className="relative hidden md:flex w-full max-w-5xl h-[600px] items-center justify-center border border-zinc-900/50 rounded-full bg-zinc-950/20 backdrop-blur-sm overflow-hidden mx-auto"
      >
        {/* Invisible orbital guide circle faintly visible */}
        <div className="absolute inset-4 rounded-full border border-zinc-900/10 pointer-events-none" />
        
        {skills.map((s, i) => (
          <FloatingBadge 
            key={i} 
            skill={s.label} 
            color={s.color} 
            x={motionValues.current[i].x} 
            y={motionValues.current[i].y} 
          />
        ))}
      </div>

      {/* Mobile: Static Grid */}
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

