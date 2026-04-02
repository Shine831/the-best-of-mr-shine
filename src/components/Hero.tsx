"use client";

import { useRef, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import AnimatedText from "./AnimatedText";
import MagneticButton from "./MagneticButton";

const HeroOrb = dynamic(() => import("./HeroOrb"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 z-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-br from-accent-blue/10 via-accent-purple/5 to-accent-teal/5 blur-3xl animate-orb-1" />
    </div>
  ),
});

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms — content moves up, orb stays
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 md:pt-32"
    >
      {/* ── Three.js Orb ── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: orbScale, opacity: orbOpacity }}
      >
        <Suspense fallback={null}>
          <HeroOrb />
        </Suspense>
      </motion.div>

      {/* ── Ambient CSS orbs (fallback depth) ── */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="orb orb-blue animate-orb-1 w-[600px] h-[600px]" style={{ top: "10%", left: "15%" }} />
        <div className="orb orb-purple animate-orb-2 w-[500px] h-[500px]" style={{ bottom: "5%", right: "5%" }} />
        <div className="orb orb-teal animate-orb-3 w-[300px] h-[300px]" style={{ top: "55%", left: "-5%" }} />
      </div>

      {/* ── Radial vignette ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 55% at 50% 45%, transparent, #000 100%)",
        }}
      />

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 section-wrap text-center flex flex-col items-center gap-5 px-4"
        style={{ y: textY, opacity: textOpacity }}
      >
        {/* Availability badge */}
        <motion.div
          className="liquid-glass !rounded-full px-5 py-2.5 flex items-center gap-2.5"
          initial={{ opacity: 0, y: 25, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
          </span>
          <span className="text-[11px] sm:text-xs text-label-secondary font-medium tracking-wide">
            Disponible pour de nouveaux projets
          </span>
        </motion.div>

        {/* Main headline — cinematic reveal */}
        <div className="space-y-0 max-w-5xl mt-2">
          <AnimatedText
            text="Jean Claude"
            tag="h1"
            className="text-[clamp(2.75rem,8vw,7.5rem)] font-display font-bold tracking-[-0.03em] text-label leading-[0.95]"
            delay={2.4}
            staggerDelay={0.05}
          />
          <AnimatedText
            text="Schimit Baha"
            tag="h1"
            className="text-[clamp(2.75rem,8vw,7.5rem)] font-display font-bold tracking-[-0.03em] text-gradient-hero leading-[0.95]"
            delay={2.7}
            staggerDelay={0.05}
          />
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-label-secondary max-w-lg leading-relaxed"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 3.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Développeur Web Full Stack &{" "}
          <span className="text-gradient-multi font-medium">
            Architecte Solutions Digitales
          </span>
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-3 mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <MagneticButton as="a" href="#projets" className="btn-apple text-sm" data-cursor="Explorer">
            Découvrir mes projets
          </MagneticButton>
          <MagneticButton as="a" href="#contact" className="btn-ghost text-sm" data-cursor="Contact">
            Me contacter
          </MagneticButton>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="mt-12 sm:mt-16 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 4.5, duration: 1.5 }}
        >
          <motion.div
            className="w-[1px] h-12 bg-gradient-to-b from-transparent via-label-tertiary to-transparent"
            animate={{ scaleY: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
