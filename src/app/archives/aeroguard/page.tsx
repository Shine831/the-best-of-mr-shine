"use client";

import { Header } from "@/components/Header";
import Scanline from "@/components/Scanline";
import Typewriter from "@/components/Typewriter";
import { motion } from "framer-motion";
import TerminalFooter from "@/components/TerminalFooter";

export default function AeroGuardNexus() {
  return (
    <main className="bg-black min-h-screen text-zinc-100 p-8 pt-32 selection:bg-zinc-800 overflow-x-hidden font-mono">
      <Header />
      <Scanline />
      
      <div className="max-w-[700px] mx-auto space-y-16">
        {/* Classification Header */}
        <div className="flex flex-wrap gap-4 pt-10 border-b border-zinc-900 pb-12">
          <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-[9px] tracking-[0.3em] uppercase text-zinc-400">CLASSIFICATION : CONFIDENTIEL</span>
          <span className="px-3 py-1 bg-zinc-900 border border-zinc-500/30 text-[9px] tracking-[0.3em] uppercase text-zinc-100">STATUT : DÉPLOYÉ</span>
          <span className="px-3 py-1 bg-white/5 border border-zinc-800 text-[9px] tracking-[0.3em] uppercase text-zinc-500">SECTEUR : CRITIQUE</span>
        </div>

        <header className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-100 uppercase">
            <Typewriter text="AEROGUARD NEXUS" speed={0.03} />
          </h1>
          <p className="text-[10px] tracking-[0.4em] text-zinc-500 uppercase">
            REF_CASE_STUDY_AG_089 — SOLUTIONS CRITIQUES
          </p>
        </header>

        <section className="space-y-12 text-sm leading-relaxed text-zinc-100">
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-zinc-100 uppercase">RAPPORT D’INGÉNIERIE – ÉTUDE DE CAS PROJET : AEROGUARD NEXUS</h2>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-base font-bold text-zinc-200">1. RÉSUMÉ EXÉCUTIF</h3>
                <p className="indent-8">
                  Le projet <span className="text-zinc-100">AEROGUARD NEXUS</span> représente le summum de l&apos;ingénierie de surveillance autonome développée par <span className="text-zinc-100 uppercase tracking-widest">The Best of Mr Shine</span>. 
                  Conçu pour répondre à des exigences de sécurité périmétrale extrêmes, ce système intègre une intelligence artificielle de pointe capable de détecter, classifier et neutraliser les menaces potentielles avec une latence quasi-nulle.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-bold text-zinc-200">2. LE CHALLENGE</h3>
                <p className="indent-8">
                  Les infrastructures critiques modernes font face à des menaces hybrides, combinant drones furtifs, intrusions physiques coordonnées et cyber-attaques de diversion. 
                  Les systèmes traditionnels souffrent de délais de traitement trop élevés et d&apos;un taux de faux positifs inacceptable dans des zones à haute tension. 
                  La mission était de créer une barrière intelligente capable d&apos;auto-ajustement en temps réel.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-bold text-zinc-200">3. ARCHITECTURE TECHNIQUE</h3>
                <p>L&apos;ossature de <span className="text-zinc-100">AeroGuard Nexus</span> repose sur une topologie en couches hautement résilientes :</p>
                <ul className="space-y-3 list-none pl-4">
                  <li className="flex gap-4">
                    <span className="text-zinc-200">01/</span>
                    <span><strong className="text-white">Couche de Capture (SENSORS)</strong> : Intégration de lidars photoniques et de caméras thermiques à 120fps pour une vision multi-spectrale.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-zinc-200">02/</span>
                    <span><strong className="text-white">Couche de Traitement (NEXUS CORE)</strong> : Inférence IA sur site via clusters FPGA optimisés, éliminant tout besoin de communication cloud pour les décisions critiques.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-zinc-200">03/</span>
                    <span><strong className="text-white">Couche de Réponse (SHIELD)</strong> : Déploiement automatisé de contre-mesures passives et protocoles de verrouillage immédiats.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-bold text-zinc-200">4. RÉSULTATS OPÉRATIONNELS</h3>
                <p>Les métriques de performance après déploiement standard dépassent les prévisions initiales :</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="border border-zinc-900 p-4 bg-zinc-950/20">
                    <span className="block text-[10px] text-zinc-600 tracking-widest uppercase mb-2">Latence d&apos;Analyse</span>
                    <span className="text-xl text-zinc-200">-85% vs INDUSTRIE</span>
                  </div>
                  <div className="border border-zinc-900 p-4 bg-zinc-950/20">
                    <span className="block text-[10px] text-zinc-600 tracking-widest uppercase mb-2">Classification</span>
                    <span className="text-xl text-zinc-200">99.98% PRÉCISION</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-bold text-zinc-200">5. CONCLUSION</h3>
                <p className="italic">
                  &quot;AeroGuard Nexus n&apos;est pas seulement un produit de surveillance, c&apos;est une barrière technologique infranchissable, fruit d&apos;une ingénierie où chaque ligne de code est une couche de protection supplémentaire.&quot;
                </p>
                <div className="pt-10 flex flex-col items-end opacity-50">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Jean Claude Schimit Baha</span>
                  <span className="text-[9px] uppercase tracking-[0.3em]">Chief UI/UX Architect</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TerminalFooter />
      </div>
    </main>
  );
}
