import type { Metadata } from "next";
import { JsonLd } from "@/components/sites/narichy/JsonLd";
import {
  ProductCollection,
  type CollectionProduct,
} from "@/components/sites/narichy/ProductCollection";
import { allProducts } from "@/components/sites/narichy/data";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "All Products",
  description:
    "Shop every Narichy Thailand feminine care and inner-wellness product in one place — Finn Spray, Finn Serum, Narichy Finn drink, Cleansing Mousse Foam, Finn Soap and Finy Secret.",
  alternates: {
    canonical: "/collections/products",
  },
  openGraph: {
    title: "All Products | Narichy Thailand",
    description:
      "Gentle, pH-minded intimate care and inner wellness from Narichy Thailand.",
    url: "/collections/products",
    images: [
      {
        url: "/seo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Narichy Thailand product range",
      },
    ],
  },
};

const collectionLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteUrl}/collections/products#collection`,
  url: `${siteUrl}/collections/products`,
  name: "All Products",
  description:
    "The complete Narichy Thailand range of feminine intimate care and inner-wellness products.",
  inLanguage: "th-TH",
  isPartOf: { "@id": `${siteUrl}/#website` },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: allProducts.length,
    itemListElement: allProducts.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}${product.href}`,
      name: product.title,
    })),
  },
};

export default function AllProductsPage() {
  return (
    <>
      <JsonLd data={collectionLd} />
      <ProductCollection
        eyebrow="Narichy Thailand"
        title="All Products"
        description="Gentle, effective formulas for intimate care, daily freshness and inner wellness. Explore the complete Narichy collection."
        items={allProducts as CollectionProduct[]}
      />
    </>
  );
}
