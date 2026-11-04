import { BestSellers } from "@/components/sites/narichy/BestSellers";
import { CommunitySection } from "@/components/sites/narichy/CommunitySection";
import { HeroSlideshow } from "@/components/sites/narichy/HeroSlideshow";
import { IngredientCarousel } from "@/components/sites/narichy/IngredientCarousel";
import { InstagramSection } from "@/components/sites/narichy/InstagramSection";
import { PromoBanner } from "@/components/sites/narichy/PromoBanner";
import { RewardsSection } from "@/components/sites/narichy/RewardsSection";
import { ShadeCarousel } from "@/components/sites/narichy/ShadeCarousel";
import { UgcCarousel } from "@/components/sites/narichy/UgcCarousel";
import { srcUrl } from "@/components/sites/narichy/data";

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
      <div className="boj-swap">
        <ShadeCarousel />
        <RewardsSection />
      </div>
      <section className="boj-shade-learn-more">
        <a className="boj-outline-btn" href={srcUrl("/pages/quiz-03-17-2025")}>
          Learn more
        </a>
      </section>
      <section className="boj-heading-section">
        <h2 className="boj-heading-italic-serif">Find Your Perfect Hanbang Match</h2>
      </section>
      <IngredientCarousel />
      <InstagramSection />
      <CommunitySection />
    </main>
  );
}
