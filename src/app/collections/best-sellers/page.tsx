import type { Metadata } from "next";
import { JsonLd } from "@/components/sites/narichy/JsonLd";
import {
  ProductCollection,
  type CollectionProduct,
} from "@/components/sites/narichy/ProductCollection";
import { allProducts } from "@/components/sites/narichy/data";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "สินค้าขายดี",
  description:
    "ผลิตภัณฑ์ยอดนิยมจาก Narichy Thailand — Finn Spray, Finn Serum, เครื่องดื่ม Narichy Finn และ Finn Soap ที่ลูกค้าเลือกใช้ซ้ำ",
  alternates: {
    canonical: "/collections/best-sellers",
  },
  openGraph: {
    title: "สินค้าขายดี | Narichy Thailand",
    description: "ผลิตภัณฑ์จาก Narichy ที่ลูกค้าเลือกใช้ซ้ำแล้วซ้ำอีก",
    url: "/collections/best-sellers",
    images: [
      {
        url: "/seo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "สินค้าขายดีจาก Narichy Thailand",
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
  name: "สินค้าขายดี",
  description: "ผลิตภัณฑ์ดูแลจุดซ่อนเร้นยอดนิยมจาก Narichy Thailand",
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
        eyebrow="สินค้ายอดนิยม"
        title="สินค้าขายดี"
        description="สูตรที่ลูกค้าของเราเลือกใช้ซ้ำแล้วซ้ำอีก — ชื่นชอบความอ่อนโยน ผลลัพธ์ที่มั่นใจ และความสบายในทุกวัน"
        items={bestSellers as CollectionProduct[]}
        showCategoryFilter={false}
      />
    </>
  );
}
