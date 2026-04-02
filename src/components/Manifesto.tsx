"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

/**
 * ScrollRevealText — Apple-style cinematic text reveal.
 * Each word fades + de-blurs as the user scrolls through the section.
 */
function ScrollWord({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.08, 1]);
  const blur = useTransform(progress, range, [6, 0]);
  const y = useTransform(progress, range, [8, 0]);
  const filterBlur = useTransform(blur, (v: number) => `blur(${v}px)`);

  return (
    <motion.span
      className="inline-block mr-[0.3em]"
      style={{ opacity, y }}
    >
      <motion.span style={{ filter: filterBlur }}>
        {word}
      </motion.span>
    </motion.span>
  );
}

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.4"],
  });

  const accentOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);
  const accentScale = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

  const phrases = [
    {
      text: "Je ne construis pas de simples sites web.",
      className: "text-label/50 text-lg sm:text-xl md:text-2xl",
    },
    {
      text: "Je crée des expériences qui font ressentir quelque chose.",
      className:
        "text-[clamp(1.5rem,4vw,3.5rem)] font-display font-bold text-label leading-[1.15]",
    },
    {
      text: "Chaque pixel est intentionnel. Chaque animation a un sens. Chaque interaction raconte une histoire.",
      className: "text-label-secondary text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl",
    },
  ];

  // Count total words for progress distribution
  const totalWords = phrases.reduce((acc, p) => acc + p.text.split(" ").length, 0);

  let wordIndex = 0;

  return (
    <section
      ref={containerRef}
      className="relative py-32 md:py-48 lg:py-56 overflow-hidden"
    >
      {/* Background depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="orb orb-purple animate-orb-2 w-[500px] h-[500px]"
          style={{ top: "30%", left: "-15%", opacity: 0.08 }}
        />
        <div
          className="orb orb-blue animate-orb-1 w-[400px] h-[400px]"
          style={{ bottom: "20%", right: "-10%", opacity: 0.06 }}
        />
      </div>

      <div className="section-wrap relative z-10 flex flex-col items-center text-center gap-6 md:gap-10">
        {phrases.map((phrase, pIdx) => {
          const words = phrase.text.split(" ");
          const start = wordIndex;
          wordIndex += words.length;

          return (
            <p key={pIdx} className={phrase.className} style={{ lineHeight: 1.4 }}>
              {words.map((word, wIdx) => {
                const globalIdx = start + wIdx;
                const wordStart = globalIdx / totalWords;
                const wordEnd = Math.min((globalIdx + 3) / totalWords, 1);

                return (
                  <ScrollWord
                    key={`${pIdx}-${wIdx}`}
                    word={word}
                    progress={scrollYProgress}
                    range={[wordStart, wordEnd]}
                  />
                );
              })}
            </p>
          );
        })}

        {/* Decorative accent line */}
        <motion.div
          className="w-16 h-[2px] rounded-full mt-4"
          style={{
            background: "linear-gradient(90deg, #2997ff, #bf5af2)",
            opacity: accentOpacity,
            scaleX: accentScale,
          }}
        />
      </div>
    </section>
  );
}
