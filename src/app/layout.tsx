import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import AmbientLight from "@/components/AmbientLight";
import GrainOverlay from "@/components/GrainOverlay";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteConfig = {
  name: "THE BEST OF MR SHINE",
  description: "Portfolio de Jean Claude Schimit Baha - Architecte de Solutions Digitales & Développeur Web Full Stack. Expertise en React, Nest.js, Angular et Java.",
  url: "https://the-best-of-mr-shine.vercel.app", // À mettre à jour après déploiement
  ogImage: "https://the-best-of-mr-shine.vercel.app/og.png",
  links: {
    github: "https://github.com/Shine831",
  },
};

export const viewport: Viewport = {
  themeColor: "#020202",
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Jean Claude Schimit Baha",
    "THE BEST OF MR SHINE",
    "Développeur Web Cameroun",
    "Full Stack Developer",
    "React Developer",
    "NestJS",
    "Next.js Portfolio",
    "Architecte Digital",
    "Solutions Web Haut de Gamme"
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
    creator: "@Shine831", // Optionnel
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
  // Structured Data (JSON-LD) for Person/Portfolio
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jean Claude Schimit Baha",
    "jobTitle": "Architecte de Solutions Digitales & Développeur Web",
    "url": siteConfig.url,
    "sameAs": [
      siteConfig.links.github,
      "https://www.linkedin.com/in/jean-claude-schimit-baha"
    ],
    "description": siteConfig.description,
    "knowsAbout": ["React", "Nest.js", "Angular", "Java", "Next.js", "Full Stack Development"]
  };

  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id=GTM-5FVZRSKR'+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5FVZRSKR');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="bg-black text-zinc-100 antialiased font-sans overflow-x-hidden relative">
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
        <SmoothScroll>
          <GrainOverlay />
          <AmbientLight />
          <div className="relative z-10">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
