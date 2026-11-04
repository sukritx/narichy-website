import { heroSlides } from "./data";

export function HeroSlideshow() {
  const slide = heroSlides[0];

  if (!slide) return null;

  return (
    <section className="boj-hero" aria-label="Featured collection">
      <div className="boj-hero-slide is-active">
        <picture>
          <source media="(max-width: 749px)" srcSet={slide.mobile} />
          <img
            src={slide.desktop}
            alt={slide.imageAlt}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>
    </section>
  );
}
