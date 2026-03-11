"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import StaggeredText from "./StaggeredText";
import GlintText from "./GlintText";

const solutions = [
  { label: "AeroGuard", color: "border-zinc-800" },
  { label: "PrimeVault", color: "border-zinc-800" },
  { label: "Engine Alpha", color: "border-zinc-800" },
  { label: "Critical Path", color: "border-zinc-800" },
  { label: "SafeNet", color: "border-zinc-800" },
  { label: "DataShield", color: "border-zinc-800" },
  { label: "Neural Link", color: "border-zinc-800" },
  { label: "Infra Red", color: "border-zinc-800" },
  { label: "Log Trace", color: "border-zinc-800" },
  { label: "Sync Core", color: "border-zinc-800" },
  { label: "Task Force", color: "border-zinc-800" },
  { label: "Edge Node", color: "border-zinc-800" },
];

/**
 * Visual-only component for the badges.
 * Receives position from the central physics coordinator.
 */
function SolutionBadge({
  label,
  color,
  x,
  y,
}: {
  label: string;
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
      className={`px-6 py-2 rounded-sm bg-black border ${color} text-zinc-100 font-mono text-[10px] tracking-[0.2em] whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.05)] flex items-center justify-center cursor-default hover:text-white hover:border-zinc-400 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-all duration-300 uppercase`}
    >
      {label}
    </motion.div>
  );
}

export default function Lumina() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create motion values once
  const motionValues = useRef(solutions.map(() => ({ x: useMotionValue(0), y: useMotionValue(0) })));
  
  // Physics State (Mutable refs for performance)
  const physics = useRef(solutions.map(() => ({
    x: (Math.random() - 0.5) * 600,
    y: (Math.random() - 0.5) * 400,
    vx: 0,
    vy: 0,
    radius: 70 // Approximate radius for collision
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

    const FRICTION = 0.92; // Slightly more fluid
    const MOUSE_REPULSION = 500;
    const MOUSE_RADIUS = 300;
    const COLLISION_REPULSION = 1.4; // Stronger repulsion
    const MIN_GAP = 30; 
    const ORBIT_RADIUS = 350; // Circular boundary

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
          const fx = (dx / dist) * overlap * COLLISION_REPULSION * 0.05;
          const fy = (dy / dist) * overlap * COLLISION_REPULSION * 0.05;
          
          b.vx -= fx;
          b.vy -= fy;
          b2.vx += fx;
          b2.vy += fy;
        }
      }

      // 3. Circular Boundary Orbit (Gravity towards center if too far)
      const distFromCenter = Math.sqrt(b.x * b.x + b.y * b.y);
      if (distFromCenter > ORBIT_RADIUS) {
        const cx = -b.x / distFromCenter;
        const cy = -b.y / distFromCenter;
        const pull = (distFromCenter - ORBIT_RADIUS) * 0.15;
        b.vx += cx * pull;
        b.vy += cy * pull;
      }

      // 4. Wander & Physics Integration
      b.vx += (Math.random() - 0.5) * 0.1;
      b.vy += (Math.random() - 0.5) * 0.1;
      
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
    <section id="hero" className="relative py-32 overflow-hidden flex flex-col items-center justify-center bg-black min-h-[80vh]">
      <div className="z-10 mb-20 text-center space-y-6 px-6">
        <GlintText>
          <StaggeredText
            text="LUMINA DEMO"
            className="font-serif text-3xl md:text-4xl text-zinc-100 font-light tracking-[0.3em] justify-center uppercase"
          />
        </GlintText>
        <p className="font-mono text-zinc-100 max-w-2xl mx-auto text-[10px] tracking-[0.2em] uppercase leading-relaxed">
          Systèmes réactifs &amp; Architectures logicielles fluides.<br/>
          La démonstration de la précision par l&apos;interaction.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative flex w-full max-w-6xl h-[700px] items-center justify-center overflow-hidden mx-auto"
      >
        {/* Orbital visualization */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] border border-zinc-900/30 rounded-full" />
          <div className="absolute w-[400px] h-[400px] border border-zinc-900/10 rounded-full" />
        </div>
        
        {solutions.map((s, i) => (
          <SolutionBadge 
            key={i} 
            label={s.label} 
            color={s.color} 
            x={motionValues.current[i].x} 
            y={motionValues.current[i].y} 
          />
        ))}
      </div>
    </section>
  );
}
