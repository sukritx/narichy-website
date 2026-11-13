import type { Metadata } from "next";
import { JsonLd } from "@/components/sites/narichy/JsonLd";
import {
  ProductCollection,
  type CollectionProduct,
} from "@/components/sites/narichy/ProductCollection";
import { allProducts } from "@/components/sites/narichy/data";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Best Sellers",
  description:
    "The most-loved Narichy Thailand products — Finn Spray, Finn Serum, Narichy Finn drink and Finn Soap, chosen by our community.",
  alternates: {
    canonical: "/collections/best-sellers",
  },
  openGraph: {
    title: "Best Sellers | Narichy Thailand",
    description: "The Narichy products our community reaches for again and again.",
    url: "/collections/best-sellers",
    images: [
      {
        url: "/seo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Narichy Thailand best sellers",
      },
    ],
  },
};

const bestSellers = allProducts.filter((product) => product.bestSeller);

const collectionLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteUrl}/collections/best-sellers#collection`,
  url: `${siteUrl}/collections/best-sellers`,
  name: "Best Sellers",
  description: "Narichy Thailand's most-loved feminine care products.",
  inLanguage: "th-TH",
  isPartOf: { "@id": `${siteUrl}/#website` },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: bestSellers.length,
    itemListElement: bestSellers.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}${product.href}`,
      name: product.title,
    })),
  },
};

export default function BestSellersPage() {
  return (
    <>
      <JsonLd data={collectionLd} />
      <ProductCollection
        eyebrow="Community favourites"
        title="Best Sellers"
        description="The formulas our customers reach for again and again — loved for their gentle feel, discreet results and everyday comfort."
        items={bestSellers as CollectionProduct[]}
        showCategoryFilter={false}
      />
    </>
  );
}
