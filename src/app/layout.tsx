import type { Metadata, Viewport } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const siteConfig = {
  name: "Jean Claude Schimit Baha",
  title: "THE BEST OF MR SHINE",
  description:
    "Développeur Web Full Stack & Architecte Solutions Digitales — Expériences numériques premium, automatisations IA et applications web performantes.",
  url: "https://portfolio-schimit.vercel.app",
  ogImage: "https://portfolio-schimit.vercel.app/og.png",
  links: {
    github: "https://github.com/Shine831",
    linkedin: "https://www.linkedin.com/in/schmit-claude-bha993b6",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Développeur Web Full Stack`,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: [
    "Jean Claude Schimit Baha",
    "THE BEST OF MR SHINE",
    "Développeur Web Full Stack",
    "Architecte Solutions Digitales",
    "Next.js Developer",
    "React Expert",
    "Angular Developer",
    "Java Developer",
    "Automatisation IA",
    "Zapier Expert",
    "n8n Agent IA",
    "Google AI Studio",
    "Gemini",
    "Jules",
    "Stitch",
    "GTM",
    "GA4",
    "Portfolio Développeur Cameroun",
    "Freelance Web Developer",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: { icon: "/favicon.ico" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        publisher: { "@id": `${siteConfig.url}/#person` },
        inLanguage: "fr-FR",
      },
      {
        "@type": ["Person", "ProfessionalService"],
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        jobTitle: "Développeur Web Full Stack & Architecte Solutions Digitales",
        url: siteConfig.url,
        image: siteConfig.ogImage,
        sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
        description: siteConfig.description,
        knowsAbout: [
          "React", "Next.js", "Angular", "Java", "PHP", "Node.js",
          "TypeScript", "JavaScript", "HTML5", "CSS3", "MySQL",
          "Zapier", "n8n", "Firebase", "Vercel", "Git",
          "Automatisation IA", "Agents IA", "Full Stack Development",
          "Google AI Studio", "Gemini", "Jules", "Stitch", "GTM", "GA4",
        ],
      },
    ],
  };

  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id=GTM-5FVZRSKR'+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5FVZRSKR');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5FVZRSKR" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
        <div className="noise-overlay" aria-hidden="true" />
        <SmoothScroll>
          <div className="relative z-10 w-full flex flex-col min-h-screen">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
