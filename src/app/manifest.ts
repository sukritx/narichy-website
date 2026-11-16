import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#e50914",
    icons: [
      {
        src: "/seo/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/seo/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/seo/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
