import type { Metadata, Viewport } from "next";
import { Playfair_Display, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import SvgFilters from "@/components/SvgFilters";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

const siteConfig = {
  name: "THE BEST OF MR SHINE",
  description: "Ultra-Premium Architectural Web Design & Development",
  url: "https://the-best-of-mr-shine.vercel.app", 
  ogImage: "https://the-best-of-mr-shine.vercel.app/og.png",
  links: {
    github: "https://github.com/Shine831",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: {
    default: "THE BEST OF MR SHINE | Architecte Solutions Critiques",
    template: `%s | ${siteConfig.name}`,
  },
  description: "Architecte de Solutions Digitales & Développeur Web Full Stack. Conception d'écosystèmes asymétriques et microservices de très haute fréquence.",
  keywords: [
    "Jean Claude Schimit Baha",
    "THE BEST OF MR SHINE",
    "Développeur Web Freelance",
    "Architecte Web B2B",
    "Full Stack Developer",
    "Next.js Developer",
    "React Expert",
    "Automatisation IA",
    "Zapier & n8n Expert",
    "Anthropic AI",
    "Manus AI Autonomous Agents",
    "Grok & Google AI",
    "Ingénierie Logicielle",
    "Solutions Web Haut de Gamme",
    "Création site web premium"
  ],
  authors: [
    {
      name: "Jean Claude Schimit Baha",
      url: siteConfig.url,
    },
  ],
  creator: "Jean Claude Schimit Baha",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@Shine831",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for Person/Portfolio & Professional Service
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        "url": siteConfig.url,
        "name": siteConfig.name,
        "description": siteConfig.description,
        "publisher": {
          "@id": `${siteConfig.url}/#person`
        },
        "inLanguage": "fr-FR"
      },
      {
        "@type": ["Person", "ProfessionalService"],
        "@id": `${siteConfig.url}/#person`,
        "name": "Jean Claude Schimit Baha",
        "jobTitle": "Architecte de Solutions Digitales & Développeur Web",
        "url": siteConfig.url,
        "image": siteConfig.ogImage,
        "sameAs": [
          siteConfig.links.github,
          "https://www.linkedin.com/in/jean-claude-schimit-baha"
        ],
        "description": siteConfig.description,
        "priceRange": "$$$",
        "knowsAbout": [
          "React", "Nest.js", "Angular", "Java", "Next.js", 
          "Full Stack Development", "Architecture Logicielle", 
          "Automatisation IA", "Zapier Workflow", "n8n Local Configurations",
          "Anthropic Tools", "Manus AI", "Grok Integration", "Google AI Environment"
        ]
      }
    ]
  };

  return (
    <html lang="fr" className={`${playfair.variable} ${mono.variable} ${grotesk.variable} ${grotesk.className}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id=GTM-5FVZRSKR'+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5FVZRSKR');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="bg-black text-zinc-100 antialiased overflow-x-hidden relative selection:bg-emerald-900/50 selection:text-emerald-200">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5FVZRSKR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End GTM (noscript) */}
        <div className="noise-bg pointer-events-none"></div>
        <SvgFilters />
        <Cursor />
        <SmoothScroll>
          <div className="relative z-10 w-full flex flex-col min-h-screen">
            <main id="main-content">
              {children}
            </main>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
