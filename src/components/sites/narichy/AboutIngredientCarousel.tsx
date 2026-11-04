"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";
import { aboutIngredients } from "./data";
import { IconArrowRight, IconChevronLeft, IconChevronRight } from "./icons";

export function AboutIngredientCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const update = () => {
      setEdges({
        start: viewport.scrollLeft <= 1,
        end: viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - 1,
      });
    };
    update();
    viewport.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      viewport.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (direction: 1 | -1) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const card = viewport.querySelector<HTMLElement>(".boj-about-ingredient");
    const amount = (card?.offsetWidth ?? 375) + 32;
    viewport.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <section className="boj-about-ingredients" aria-label="Hanbang ingredients">
      <div className="boj-about-ingredients-stage">
        <div className="boj-about-ingredients-viewport" ref={viewportRef}>
          <div className="boj-about-ingredients-track">
            {aboutIngredients.map((ingredient) => (
              <article className="boj-about-ingredient" key={ingredient.title}>
                <a
                  className="boj-about-ingredient-image"
                  href={ingredient.link}
                  aria-label={ingredient.title}
                >
                  <img
                    src={ingredient.image}
                    alt={`${ingredient.title} image`}
                    width={900}
                    height={900}
                    loading="lazy"
                  />
                </a>
                <h3 className="boj-about-ingredient-title">
                  <a href={ingredient.link}>{ingredient.title}</a>
                </h3>
                <p className="boj-about-ingredient-text">{ingredient.text}</p>
                <a className="boj-about-learn" href={ingredient.link}>
                  Learn more <IconArrowRight />
                </a>
              </article>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="boj-arrow-btn prev"
          aria-label="Previous ingredients"
          onClick={() => scroll(-1)}
          disabled={edges.start}
        >
          <IconChevronLeft />
        </button>
        <button
          type="button"
          className="boj-arrow-btn next"
          aria-label="Next ingredients"
          onClick={() => scroll(1)}
          disabled={edges.end}
        >
          <IconChevronRight />
        </button>
      </div>
    </section>
  );
}
