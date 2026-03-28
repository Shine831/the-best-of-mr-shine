"use client";

import { Header } from "@/components/Header";
import { motion } from "framer-motion";
import Scanline from "@/components/Scanline";
import GlintText from "@/components/GlintText";
import StaggeredText from "@/components/StaggeredText";
import TerminalFooter from "@/components/TerminalFooter";

const reports = [
  {
    slug: "aeroguard",
    title: "AeroGuard",
    description: "Système de surveillance et de défense périmétrale autonome. Optimisation de la latence critique.",
    id: "REPORT_AG_089",
  },
  {
    slug: "primevault",
    title: "PrimeVault",
    description: "Infrastructure de stockage sécurisée à haute résilience. Chiffrement post-quantique.",
    id: "REPORT_PV_112",
  },
];

export default function Archives() {
  return (
    <main className="bg-black min-h-screen text-zinc-100 p-8 pt-32 selection:bg-zinc-800">
      <Header />
      <Scanline />
      
      <div className="max-w-5xl mx-auto space-y-20">
        <header className="space-y-4">
          <GlintText>
            <StaggeredText 
              text="ARCHIVES TECHNIQUES" 
              className="font-serif text-4xl md:text-5xl font-light tracking-[0.2em] uppercase" 
            />
          </GlintText>
          <p className="font-mono text-[10px] tracking-[0.3em] text-zinc-100 uppercase">
            Rapports de déploiement — Solutions Critiques
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reports.map((report) => (
            <motion.a
              key={report.slug}
              href={`/archives/${report.slug}`}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.02)" }}
              className="group block border border-zinc-900 p-8 space-y-6 transition-all duration-500"
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] text-zinc-100 tracking-widest">{report.id}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-zinc-100 transition-colors" />
              </div>
              
              <h3 className="font-serif text-3xl font-light tracking-wider text-zinc-300 group-hover:text-zinc-100 transition-colors">
                {report.title}
              </h3>
              
              <p className="font-mono text-[11px] leading-relaxed text-zinc-100 group-hover:text-white transition-colors">
                {report.description}
              </p>

              <div className="pt-4 flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-500">
                <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-zinc-100 group-hover:text-white">DÉTAILS DU RAPPORT</span>
                <div className="h-px w-8 bg-zinc-700 group-hover:bg-zinc-100 transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      <TerminalFooter />
    </main>
  );
}
