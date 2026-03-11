"use client";

import { Header } from "@/components/Header";
import Scanline from "@/components/Scanline";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import TerminalFooter from "@/components/TerminalFooter";

const projectData = {
  aeroguard: {
    title: "AeroGuard",
    id: "REPORT_AG_089",
    status: "MISSION_STABLE",
    content: "Système de surveillance périmétrale utilisant des algorithmes prédictifs pour l'identification des menaces en temps réel. Déployé sur clusters haute performance.",
    metrics: [
      { label: "LATENCE", value: "< 2ms" },
      { label: "PRÉCISION", value: "99.98%" },
      { label: "RÉSILIENCE", value: "N+2" },
    ]
  },
  primevault: {
    title: "PrimeVault",
    id: "REPORT_PV_112",
    status: "MISSION_STABLE",
    content: "Solution de coffre-fort numérique ultra-sécurisée. Intègre des protocoles de chiffrement post-quantique et une architecture zéro-trust.",
    metrics: [
      { label: "SÉCURITÉ", value: "AES-512 CUSTOM" },
      { label: "DÉPLOIEMENT", value: "MULTI-CLOUD" },
      { label: "INTÉGRITÉ", value: "CHAÎNE BLOQUÉE" },
    ]
  }
};

export default function ProjectReport() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop() as keyof typeof projectData;
  const project = projectData[slug];

  if (!project) return null;

  return (
    <main className="bg-black min-h-screen text-zinc-100 p-8 pt-32 selection:bg-zinc-800 overflow-x-hidden">
      <Header />
      <Scanline />
      
      <div className="max-w-4xl mx-auto space-y-16">
        <nav className="flex items-center gap-4 text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
          <a href="/archives" className="hover:text-zinc-100 transition-colors">ARCHIVES</a>
          <span>/</span>
          <span className="text-zinc-100">{project.id}</span>
        </nav>

        <header className="space-y-6">
          <div className="flex justify-between items-end border-b border-zinc-900 pb-8">
            <h1 className="font-serif text-5xl md:text-7xl font-light tracking-widest text-zinc-100 uppercase">
              {project.title}
            </h1>
            <div className="text-right hidden sm:block">
              <span className="block font-mono text-[9px] text-zinc-600 tracking-widest">STATUS</span>
              <span className="block font-mono text-xs text-zinc-400 tracking-widest">{project.status}</span>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <h2 className="font-mono text-[10px] tracking-[0.4em] text-zinc-600 uppercase border-l border-zinc-800 pl-4">Résumé Exécutif</h2>
            <p className="font-mono text-xs leading-relaxed text-zinc-400 indent-8">
              {project.content}
            </p>
          </div>
          <div className="space-y-10">
            <h2 className="font-mono text-[10px] tracking-[0.4em] text-zinc-600 uppercase border-l border-zinc-800 pl-4">Spécifications</h2>
            <div className="space-y-6">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <span className="block font-mono text-[9px] text-zinc-600 tracking-[0.2em]">{metric.label}</span>
                  <span className="block font-mono text-sm text-zinc-300 tracking-wider uppercase mt-1">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TerminalFooter />
      </div>
    </main>
  );
}
