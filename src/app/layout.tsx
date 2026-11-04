import type { Metadata } from "next";
import "./globals.css";
import "@/components/sites/narichy/boj.css";
import { AnnouncementBar } from "@/components/sites/narichy/AnnouncementBar";
import { FloatingWidgets } from "@/components/sites/narichy/FloatingWidgets";
import { SiteFooter } from "@/components/sites/narichy/SiteFooter";
import { SiteHeader } from "@/components/sites/narichy/SiteHeader";
import { StoreProvider } from "@/components/sites/narichy/store";

export const metadata: Metadata = {
  title: "Beauty of Joseon | Hanbang Skincare",
  description:
    "Inspired by Hanbang. Connected by community. Created for your healthiest skin.",
  icons: {
    icon: "/sites/beautyofjoseon/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="boj-body min-h-full">
        <StoreProvider>
          <AnnouncementBar />
          <SiteHeader />
          {children}
          <SiteFooter />
          <FloatingWidgets />
        </StoreProvider>
      </body>
    </html>
  );
}
