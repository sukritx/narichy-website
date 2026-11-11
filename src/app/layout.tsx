import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@/components/sites/narichy/boj.css";
import { AnnouncementBar } from "@/components/sites/narichy/AnnouncementBar";
import { JsonLd } from "@/components/sites/narichy/JsonLd";
import { SiteFooter } from "@/components/sites/narichy/SiteFooter";
import { SiteHeader } from "@/components/sites/narichy/SiteHeader";
import { StoreProvider } from "@/components/sites/narichy/store";
import { siteConfig, siteUrl } from "@/lib/site";

const ogImage = {
  url: "/seo/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Narichy Thailand feminine intimate care and beauty products",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Narichy Thailand | Award-Winning Feminine Intimate Care",
    template: "%s | Narichy Thailand",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "shopping",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: "Narichy Thailand | Award-Winning Feminine Intimate Care",
    description: siteConfig.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Narichy Thailand | Award-Winning Feminine Intimate Care",
    description: siteConfig.description,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/seo/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/seo/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/seo/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fff5f8",
  colorScheme: "light",
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteConfig.name,
  alternateName: ["Narichy", "นาริชชี่"],
  url: siteUrl,
  logo: `${siteUrl}/images/logo/narichy-black-logo.png`,
  description: siteConfig.description,
  founder: {
    "@type": "Person",
    name: siteConfig.founder,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.addressLocality,
    addressCountry: siteConfig.address.addressCountry,
  },
  award:
    "Thailand Health and Beauty Awards (THBA) 2023 - Rising Star Business of Feminine Care",
  sameAs: [
    siteConfig.social.instagram,
    siteConfig.social.tiktok,
    siteConfig.social.shopee,
    siteConfig.social.line,
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: siteConfig.name,
  description: siteConfig.description,
  inLanguage: "th-TH",
  publisher: { "@id": `${siteUrl}/#organization` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="h-full antialiased">
      <body className="boj-body min-h-full">
        <JsonLd data={[organization, website]} />
        <StoreProvider>
          <AnnouncementBar />
          <SiteHeader />
          {children}
          <SiteFooter />
        </StoreProvider>
      </body>
    </html>
  );
}
