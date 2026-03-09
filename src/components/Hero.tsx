"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import StaggeredText from "./StaggeredText";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(63,63,70,0.1)_0%,transparent_50%)]" />

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center space-y-6 sm:space-y-8 text-center max-w-5xl w-full mx-auto"
        style={{ y: y1, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-4 w-full"
        >
          <GlintText>
            <StaggeredText
              text="THE BEST OF MR SHINE"
              className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-zinc-50 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] justify-center leading-tight"
            />
          </GlintText>

          <h2 className="font-sans text-base sm:text-xl md:text-2xl text-zinc-400 font-light tracking-wide max-w-3xl mx-auto">
            Jean Claude Schimit Baha
            <span className="hidden sm:inline"> — </span>
            <br className="sm:hidden" />
            Architecte de Solutions Digitales &amp; Développeur Web.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="font-sans text-zinc-500 text-sm sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed border-l-2 border-zinc-700/50 pl-4 sm:pl-6 text-left italic"
          style={{ y: y2 }}
        >
          &quot;Allier la précision du Génie Logiciel à l&apos;esthétique des interfaces inédites.
          Des solutions élégantes, fonctionnelles et robustes.&quot;
        </motion.p>
      </motion.div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 sm:left-10 w-48 sm:w-64 h-48 sm:h-64 bg-zinc-800/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-zinc-900/40 rounded-full blur-3xl" />
    </section>
  );
}
