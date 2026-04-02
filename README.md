<div align="center">

# ✦ The Best of Mr Shine

**Portfolio Premium · Apple Liquid Glass 2026**

*Une expérience digitale immersive conçue avec la précision d'un produit Apple.*

[![Déployé sur Vercel](https://img.shields.io/badge/Live-the--best--of--mr--shine.vercel.app-000?style=for-the-badge\&logo=vercel\&logoColor=white)](https://the-best-of-mr-shine.vercel.app)
[![Next.js 16](https://img.shields.io/badge/Next.js-16-000?style=for-the-badge\&logo=next.js)](https://nextjs.org)
[![Three.js](https://img.shields.io/badge/Three.js-r170-000?style=for-the-badge\&logo=three.js)](https://threejs.org)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-000?style=for-the-badge\&logo=framer)](https://motion.dev)

</div>

---

## 🎯 À propos

Portfolio personnel de **Jean Claude Schimit Baha** — Développeur Web Full Stack & Architecte Solutions Digitales basé à Douala, Cameroun. Ce site est bien plus qu'un portfolio : c'est une **déclaration d'intention** qui repousse les limites du web design moderne.

Chaque pixel est intentionnel. Chaque animation a un sens. Chaque interaction raconte une histoire.

---

## ✨ Expériences Premium

### 🔮 Orbe 3D Iridescent
Un shader GLSL personnalisé avec effet Fresnel et dispersion chromatique. La sphère change de couleur (bleu → violet → rose → teal) selon l'angle de vue et **réagit au mouvement du curseur** en temps réel.

### 🖱️ Curseur Custom Intelligent
Curseur à physique spring qui suit la souris avec une inertie naturelle. Il **s'agrandit** et affiche des **labels contextuels** ("Explorer", "Voir", "Contact") en survolant les éléments interactifs. Automatiquement désactivé sur mobile.

### 🧲 Boutons Magnétiques
Les CTA principaux attirent le curseur avec un effet d'aimantation élastique — la signature des sites primés aux Awwwards.

### ✍️ Manifesto Scroll-Reveal
Section émotionnelle où le texte se révèle **mot par mot** en se défloutant au scroll, inspiré directement des pages produits apple.com.

### 🎬 Preloader Cinématique
Monogramme "S" avec oscillation 3D en perspective, compteur de pourcentage gradient, et transition de sortie en **"wipe reveal"** (rideau théâtral).

### 📊 Stats Count-Up
Les chiffres clés s'animent de 0 jusqu'à leur valeur finale avec une courbe d'accélération au moment où ils entrent dans le viewport.

### 📏 Scroll Progress Bar
Fine ligne gradient (bleu → violet → rose) en haut de page qui se remplit en temps réel. La navigation se cache automatiquement au scroll descendant.

### 💡 Glow Tech Pills
Les technologies affichent un halo lumineux au survol, coloré selon leur catégorie.

---

## 🛠️ Stack Technique

| Catégorie | Technologies |
|-----------|-------------|
| **Framework** | Next.js 16 (Turbopack) |
| **3D / WebGL** | Three.js, @react-three/fiber, @react-three/drei, GLSL Shaders |
| **Animations** | Framer Motion (useScroll, useTransform, useSpring, AnimatePresence) |
| **Styling** | Tailwind CSS 4, CSS Custom Properties |
| **Icônes** | Lucide React |
| **Déploiement** | Vercel (Static SSG) |
| **Typo** | Google Fonts (Space Grotesk, Inter) |

---

## 📁 Architecture

```
src/
├── app/
│   ├── globals.css          # Design System (tokens, glassmorphism, animations)
│   ├── layout.tsx           # SEO, fonts, JSON-LD, analytics
│   └── page.tsx             # Composition des sections
│
├── components/
│   ├── Hero.tsx             # Hero section + 3D orb integration
│   ├── HeroOrb.tsx          # Shader GLSL iridescent custom
│   ├── Manifesto.tsx        # Scroll-reveal émotionnel mot par mot
│   ├── CursorFollower.tsx   # Curseur custom à physique spring
│   ├── MagneticButton.tsx   # Boutons à attraction magnétique
│   ├── Preloader.tsx        # Préchargement cinématique
│   ├── Header.tsx           # Navigation floating pill + scroll progress
│   ├── BentoProjects.tsx    # Carousel de projets split-layout
│   ├── TechStack.tsx        # Grille tech avec glow pills
│   ├── About.tsx            # Parcours + stats count-up
│   ├── Services.tsx         # Cartes de services glassmorphism
│   ├── Testimonials.tsx     # Carousel de témoignages
│   ├── ContactCTA.tsx       # Section contact + méthodes
│   ├── Footer.tsx           # Liens sociaux + copyright
│   ├── AnimatedText.tsx     # Utilitaire d'animation de texte
│   └── ScrollReveal.tsx     # Utilitaire de reveal au scroll
│
└── lib/
    └── siteConfig.ts        # Configuration centralisée (liens, SEO)
```

---

## 🚀 Lancement local

```bash
# Cloner le repo
git clone https://github.com/Shine831/the-best-of-mr-shine.git
cd the-best-of-mr-shine

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build production
npm run build
```

Le site sera accessible sur `http://localhost:3000`

---

## 🌐 Liens

| | Lien |
|---|---|
| 🔗 **Portfolio Live** | [the-best-of-mr-shine.vercel.app](https://the-best-of-mr-shine.vercel.app) |
| 💼 **LinkedIn** | [Jean Claude Schimit Baha](https://www.linkedin.com/in/schimit-baha-jean-claude-bba5903ab) |
| 🐙 **GitHub** | [Shine831](https://github.com/Shine831) |
| 📧 **Email** | jcbaha58@gmail.com |

---

<div align="center">

**Conçu avec 🖤 et une obsession pour le détail.**

*© 2026 Jean Claude Schimit Baha. Tous droits réservés.*

</div>
