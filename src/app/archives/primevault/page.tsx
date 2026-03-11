"use client";

import { Header } from "@/components/Header";
import Scanline from "@/components/Scanline";
import Typewriter from "@/components/Typewriter";
import GlitchText from "@/components/GlitchText";
import { motion } from "framer-motion";
import TerminalFooter from "@/components/TerminalFooter";

export default function PrimeVaultReport() {
  return (
    <main className="bg-black min-h-screen text-zinc-100 p-8 pt-32 selection:bg-zinc-800 overflow-x-hidden font-mono">
      <Header />
      <Scanline />
      
      <div className="max-w-[700px] mx-auto space-y-16">
        {/* Classification Header */}
        <div className="flex flex-wrap gap-4 pt-10 border-b border-zinc-900 pb-12">
          <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-[9px] tracking-[0.3em] uppercase text-zinc-400">CIBLE : HNWI</span>
          <span className="px-3 py-1 bg-zinc-900 border border-emerald-500/30 text-[9px] tracking-[0.3em] uppercase text-emerald-400">STATUT : AUDITÉ</span>
          <span className="px-3 py-1 bg-white/5 border border-zinc-800 text-[9px] tracking-[0.3em] uppercase text-zinc-500">SÉCURITÉ : SECURE-BY-DESIGN</span>
        </div>

        <header className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-100 uppercase">
            <Typewriter text="PRIMEVAULT" speed={0.04} />
          </h1>
          <p className="text-[10px] tracking-[0.4em] text-zinc-500 uppercase">
            REF_INFRA_PV_112 — ARCHITECTURE ZÉRO-TRUST
          </p>
        </header>

        <section className="space-y-12 text-sm leading-relaxed text-zinc-100">
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-zinc-100 uppercase">RAPPORT D’INGÉNIERIE – ÉTUDE DE CAS PROJET : PRIMEVAULT</h2>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-base font-bold text-zinc-200">1. RÉSUMÉ EXÉCUTIF</h3>
                <p className="indent-8">
                  <span className="text-zinc-100">PRIMEVAULT</span> est une infrastructure de conservation d&apos;actifs numériques de nouvelle génération, conçue spécifiquement pour les individus à très haute valeur nette (<span className="text-zinc-100">HNWI</span>). 
                  L&apos;objectif était de créer un environnement où la sécurité n&apos;est pas une option ajoutée, mais le fondement même de chaque bit de donnée stocké.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-bold text-zinc-200">2. LE CHALLENGE</h3>
                <p className="indent-8">
                  La montée des attaques par force brute assistées par IA et l&apos;imminence de l&apos;informatique quantique rendent caduques les méthodes de chiffrement standard. 
                  Nos clients exigeaient une solution capable de résister non seulement aux menaces actuelles, mais aussi aux vecteurs d&apos;attaque des deux prochaines décennies, tout en maintenant une accessibilité fluide pour les propriétaires légitimes.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-base font-bold text-zinc-200">3. LA SOLUTION</h3>
                
                <div className="space-y-6 pl-4 border-l border-zinc-900">
                  <div className="space-y-2">
                    <GlitchText text="CHIFFREMENT POST-QUANTIQUE" className="text-zinc-200 font-bold text-sm" />
                    <p className="text-xs">
                      Mise en œuvre d&apos;algorithmes de cryptographie sur les réseaux (Lattice-based) pour garantir l&apos;intégrité des données face aux futurs ordinateurs quantiques.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <GlitchText text="ARCHITECTURE AIR-GAP DYNAMIQUE" className="text-zinc-200 font-bold text-sm" />
                    <p className="text-xs">
                      Isolement physique des clés PKI via un système de serveurs rotatifs, minimisant la surface d&apos;attaque réseau à des fenêtres de millisecondes.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <GlitchText text="VÉRIFICATION BIOMÉTRIQUE MULTI-ZONE" className="text-zinc-200 font-bold text-sm" />
                    <p className="text-xs">
                      Authentification à trois facteurs incluant la reconnaissance veineuse et l&apos;analyse comportementale en temps réel.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-bold text-zinc-200">4. AUDIT & CONFORMITÉ</h3>
                <p>Le système a subi un audit indépendant &quot;Red Team&quot; simulant des attaques étatiques :</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-mono">
                  <div className="border border-zinc-900 p-4 bg-zinc-950/20">
                    <span className="block text-[10px] text-zinc-600 tracking-widest uppercase mb-2">Pénétration</span>
                    <span className="text-xl text-emerald-500/80">FAIL_TO_BREACH</span>
                  </div>
                  <div className="border border-zinc-900 p-4 bg-zinc-950/20">
                    <span className="block text-[10px] text-zinc-600 tracking-widest uppercase mb-2">Disponibilité</span>
                    <span className="text-xl text-zinc-200">99.999% UP-TIME</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-bold text-zinc-200">5. CONCLUSION</h3>
                <p className="italic">
                  &quot;PrimeVault redéfinit la confiance numérique. En éliminant le maillon faible — l&apos;erreur humaine — nous avons bâti une forteresse mathématique dont les murs sont faits de code pur et de cryptographie inviolable.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        <TerminalFooter />
      </div>
    </main>
  );
}
