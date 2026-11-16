import type { Metadata } from "next";
import { JsonLd } from "@/components/sites/narichy/JsonLd";
import {
  ProductCollection,
  type CollectionProduct,
} from "@/components/sites/narichy/ProductCollection";
import { allProducts } from "@/components/sites/narichy/data";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "สินค้าทั้งหมด",
  description:
    "เลือกซื้อผลิตภัณฑ์ดูแลจุดซ่อนเร้นและสุขภาพภายในจาก Narichy Thailand ได้ครบทุกชิ้น — Finn Spray, Finn Serum, เครื่องดื่ม Narichy Finn, Cleansing Mousse Foam, Finn Soap และ Narichy Toner",
  alternates: {
    canonical: "/collections/products",
  },
  openGraph: {
    title: "สินค้าทั้งหมด | Narichy Thailand",
    description:
      "สูตรอ่อนโยนที่คำนึงถึงค่า pH สำหรับการดูแลจุดซ่อนเร้นและสุขภาพภายในจาก Narichy Thailand",
    url: "/collections/products",
    images: [
      {
        url: "/seo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ผลิตภัณฑ์จาก Narichy Thailand",
      },
    ],
  },
};

const collectionLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteUrl}/collections/products#collection`,
  url: `${siteUrl}/collections/products`,
  name: "สินค้าทั้งหมด",
  description:
    "ผลิตภัณฑ์ดูแลจุดซ่อนเร้นและสุขภาพภายในทั้งหมดจาก Narichy Thailand",
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
        title="สินค้าทั้งหมด"
        description="สูตรอ่อนโยนและมีประสิทธิภาพสำหรับการดูแลจุดซ่อนเร้น ความสดชื่นในทุกวัน และสุขภาพภายใน เลือกชมสินค้าทั้งหมดจาก Narichy"
        items={allProducts as CollectionProduct[]}
      />
    </>
  );
}
