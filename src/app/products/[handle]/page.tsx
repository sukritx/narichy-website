import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/sites/narichy/JsonLd";
import { ProductDetail } from "@/components/sites/narichy/ProductDetail";
import {
  getProduct,
  getRelatedProducts,
  productDetails,
} from "@/components/sites/narichy/data";
import { siteUrl } from "@/lib/site";

type ProductPageProps = {
  params: Promise<{ handle: string }>;
};

export function generateStaticParams() {
  return productDetails.map((product) => ({ handle: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { handle } = await params;
  const product = getProduct(handle);

  if (!product) {
    return {
      title: "Product not found",
    };
  }

  return {
    title: product.title,
    description: product.description,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.title} | Narichy Thailand`,
      description: product.description,
      url: `/products/${product.slug}`,
      type: "website",
      images: [
        {
          url: product.image,
          alt: product.images[0]?.alt ?? product.title,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params;
  const product = getProduct(handle);

  if (!product) notFound();

  const related = getRelatedProducts(handle);
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${siteUrl}/products/${product.slug}#product`,
    name: product.title,
    alternateName: product.thaiTitle,
    description: product.description,
    image: product.images.map((image) => `${siteUrl}${image.src}`),
    sku: `narichy-${product.slug}`,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: "Narichy",
    },
    manufacturer: { "@id": `${siteUrl}/#organization` },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
    offers: {
      "@type": "Offer",
      url: `${siteUrl}/products/${product.slug}`,
      price: product.price,
      priceCurrency: "THB",
      availability: "https://schema.org/InStock",
      seller: { "@id": `${siteUrl}/#organization` },
      itemCondition: "https://schema.org/NewCondition",
    },
    additionalProperty: product.specs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
  };

  return (
    <>
      <JsonLd data={productLd} />
      <ProductDetail product={product} related={related} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
            {
              "@type": "ListItem",
              position: 2,
              name: "Shop",
              item: `${siteUrl}/collections/products`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: product.title,
              item: `${siteUrl}/products/${product.slug}`,
            },
          ],
        }}
      />
    </>
  );
}
