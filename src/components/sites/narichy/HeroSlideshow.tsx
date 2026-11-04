"use client";

import { useEffect, useRef, useState } from "react";
import { heroSlides } from "./data";
import { IconChevronLeft, IconChevronRight } from "./icons";

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);
  const count = heroSlides.length;

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [paused, count, index]);

  const go = (next: number) => {
    setIndex((next + count) % count);
  };

  return (
    <section
      className="boj-hero"
      aria-roledescription="carousel"
      aria-label="Featured collections"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(event) => {
        touchStart.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const end = event.changedTouches[0]?.clientX ?? touchStart.current;
        const delta = end - touchStart.current;
        if (Math.abs(delta) > 40) go(index + (delta < 0 ? 1 : -1));
        touchStart.current = null;
      }}
    >
      {heroSlides.map((slide, slideIndex) => (
        <div
          className={`boj-hero-slide${slideIndex === index ? " is-active" : ""}`}
          key={slide.desktop}
          aria-hidden={slideIndex !== index}
        >
          <picture>
            <source media="(max-width: 749px)" srcSet={slide.mobile} />
            <img
              src={slide.desktop}
              alt={slide.imageAlt}
              loading={slideIndex === 0 ? "eager" : "lazy"}
              fetchPriority={slideIndex === 0 ? "high" : "auto"}
              decoding="async"
            />
          </picture>
          {slide.title && (
            <div className={`boj-hero-copy align-${slide.align}`}>
              <h2 className="boj-hero-title">{slide.title}</h2>
              <p className="boj-hero-desc">{slide.description}</p>
              <a
                className="boj-hero-btn"
                href={slide.href}
                tabIndex={slideIndex === index ? 0 : -1}
              >
                Shop Now
              </a>
            </div>
          )}
        </div>
      ))}

      <button
        type="button"
        className="boj-hero-arrow prev"
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
      >
        <IconChevronLeft />
      </button>
      <button
        type="button"
        className="boj-hero-arrow next"
        aria-label="Next slide"
        onClick={() => go(index + 1)}
      >
        <IconChevronRight />
      </button>

      <div className="boj-hero-dots" role="tablist" aria-label="Choose slide">
        {heroSlides.map((slide, dotIndex) => (
          <button
            key={slide.desktop}
            type="button"
            className={`boj-hero-dot${dotIndex === index ? " is-active" : ""}`}
            aria-label={`Go to slide ${dotIndex + 1}`}
            aria-selected={dotIndex === index}
            role="tab"
            onClick={() => go(dotIndex)}
          />
        ))}
      </div>
    </section>
  );
}
