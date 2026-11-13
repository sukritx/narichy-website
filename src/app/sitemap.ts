import type { MetadataRoute } from "next";
import { productDetails } from "@/components/sites/narichy/data";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/collections/products`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/collections/best-sellers`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...productDetails.map((product) => ({
      url: `${siteUrl}/products/${product.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    {
      url: `${siteUrl}/pages/about-page`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
