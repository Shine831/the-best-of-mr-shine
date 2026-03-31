# THE BEST OF MR SHINE ✦ Liquid Glass 2026

![THE BEST OF MR SHINE Portfolio](https://the-best-of-mr-shine.vercel.app/og.png)

Bienvenue dans le code source de l'expérience numérique ultra-premium de **Jean Claude Schimit Baha**, un portfolio interactif combinant esthétisme cinématographique, animation fluide et performances de pointe.

## 🚀 Le Projet

Ce portfolio a été conçu avec la philosophie **"Mobile-First"** et une identité visuelle d'avant-garde (Apple Liquid Glass 2026). Chaque interaction a été pensée pour captiver l'audience : du chargement initial jusqu'à la visite des projets grâce à un carousel immersif et dynamique.

### 🌟 Fonctionnalités Phares :
- **Orbe 3D Interactif (`Three.js`) :** Un sphère de verre liquide qui distord la lumière et flotte de manière autonome dans le Hero Section.
- **Cinematic Scrollytelling :** Prise en charge native de la physique du scroll (inertie et vélocité) propulsée par `Framer Motion`.
- **Carousel Split-Layout :** Une grille projet repensée en carrousel de type présentation Keynote, gérant des composants fluides avec `AnimatePresence`.
- **Typographie Avancée :** Combinaison des polices de haute lisibilité et de style `Inter`, `Space Grotesk` et `JetBrains Mono`.
- **Mode Sombre Natif :** Fond d'écran profond (`#0a0a0a`), effets de verre borosilicaté (`glassmorphism`) multi-couches, et particules néons (`#2997ff` / `#bf5af2`).
- **SEO & Performances :** Intégration avancée JSON-LD (Schema.org), Google Tag Manager (GTM), GA4, le tout propulsé sur le moteur `Turbopack` de Next.js 16.

## 🛠 L'Écosystème Technologique (Tech Stack)

### **Frontend & Animations**
- **Framework :** [Next.js 16.1.6](https://nextjs.org/) (App Router, Turbopack)
- **Langage :** [TypeScript](https://www.typescriptlang.org/)
- **Style :** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations Magiques :** [Framer Motion](https://www.framer.com/motion/)
- **Moteur 3D :** [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction), [@react-three/drei](https://github.com/pmndrs/drei)
- **Icônes :** [Lucide React](https://lucide.dev/)
- **Scroll Lisse :** [Lenis](https://lenis.studiofreight.com/)

### **Google, Automation & Déploiement**
- **Analytics :** Google Tag Manager, GA4
- **IA & Agents :** Gemini, Google AI Studio, n8n, Zapier
- **Hébergement :** [Vercel](https://vercel.com)

---

## 💻 Démarrage en Local

### Prérequis
Assurez-vous d'avoir [Node.js](https://nodejs.org/) (version 18+ recommandée) et `npm` installés sur votre machine.

### Installation

1. **Cloner le repository :**
    ```bash
    git clone https://github.com/Shine831/the-best-of-mr-shine.git
    cd the-best-of-mr-shine
    ```

2. **Installer les dépendances :**
    ```bash
    npm install
    ```

3. **Lancer le serveur de développement :**
    ```bash
    npm run dev
    # L'application sera disponible sur http://localhost:3000
    ```

## 🏗 Architecture Clé (Composants)
- `/src/components/HeroOrb.tsx` : Moteur de rendu WebGL et shader de distorsion pour l'Orbe de verre.
- `/src/components/BentoProjects.tsx` : L'usine de rendu du nouveau Carousel interactif 16/10.
- `/src/components/TechStack.tsx` : Le chapiteau (Marquee) infini et les cartes de compétence glassmorphism.
- `/src/app/globals.css` : Le cœur atomique du système de design (Tokens d'Apple Liquid Glass & Keyframes d'animations organiques).

---

## 🛡️ À propos de l'Auteur
**Jean Claude Schimit Baha**
> _Développeur Web Full Stack & Architecte Solutions Digitales_
> Expert dans la conception d'interfaces premium, la maîtrise de bases de données, et la domotique algorithmique (Agents IA connectés avec Zapier et n8n). 

- **GitHub :** [@Shine831](https://github.com/Shine831)
- **LinkedIn :** [Schmit Claude Baha](https://www.linkedin.com/in/schimit-baha-jean-claude-bba5903ab)
- **Live Site :** [the-best-of-mr-shine.vercel.app](https://the-best-of-mr-shine.vercel.app)

---
> _Conçu avec passion, performance et un sens maniaque du détail UX._
