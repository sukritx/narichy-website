import { BestSellers } from "@/components/sites/narichy/BestSellers";
import { CleanBeauty } from "@/components/sites/narichy/CleanBeauty";
import { CommunitySection } from "@/components/sites/narichy/CommunitySection";
import { HeroSlideshow } from "@/components/sites/narichy/HeroSlideshow";
import { InstagramSection } from "@/components/sites/narichy/InstagramSection";
import { JsonLd } from "@/components/sites/narichy/JsonLd";
import { PromoBanner } from "@/components/sites/narichy/PromoBanner";
import { UgcCarousel } from "@/components/sites/narichy/UgcCarousel";
import { products } from "@/components/sites/narichy/data";
import { siteUrl } from "@/lib/site";

const productList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Narichy Thailand Best Sellers",
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: product.title,
      image: `${siteUrl}${product.image}`,
      description: product.cutline,
      brand: {
        "@type": "Brand",
        name: "Narichy",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: product.rating,
        reviewCount: Number(product.reviews.replace(/[^0-9]/g, "")),
      },
      offers: {
        "@type": "Offer",
        url: product.href,
        price: product.price,
        priceCurrency: "THB",
        availability: "https://schema.org/InStock",
      },
    },
  })),
};

export default function Home() {
  return (
    <main className="boj-home-main">
      <JsonLd data={productList} />
      <h1 className="sr-only">
        Narichy Thailand feminine intimate care and beauty
      </h1>
      <HeroSlideshow />
      <BestSellers />
      <PromoBanner />
      <section className="boj-heading-section is-loved">
        <h2 className="boj-heading-serif">Loved by the Community</h2>
      </section>
      <UgcCarousel />
      <CleanBeauty />
      <InstagramSection />
      <CommunitySection />
    </main>
  );
}
