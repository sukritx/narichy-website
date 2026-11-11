import { BestSellers } from "@/components/sites/narichy/BestSellers";
import { CleanBeauty } from "@/components/sites/narichy/CleanBeauty";
import { CommunitySection } from "@/components/sites/narichy/CommunitySection";
import { HeroSlideshow } from "@/components/sites/narichy/HeroSlideshow";
import { InstagramSection } from "@/components/sites/narichy/InstagramSection";
import { PromoBanner } from "@/components/sites/narichy/PromoBanner";
import { UgcCarousel } from "@/components/sites/narichy/UgcCarousel";

export default function Home() {
  return (
    <main className="boj-home-main">
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
