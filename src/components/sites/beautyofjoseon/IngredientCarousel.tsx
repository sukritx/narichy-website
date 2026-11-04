"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";
import { ingredientCards } from "./data";
import { IconChevronLeft, IconChevronRight } from "./icons";

export function IngredientCarousel() {
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
    const card = viewport.querySelector<HTMLElement>(".boj-ingredient-card");
    const amount = (card?.offsetWidth ?? 267) + 11;
    viewport.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <section className="boj-ingredients" aria-label="Hanbang ingredients">
      <div className="boj-ingredients-stage">
        <div className="boj-ingredients-viewport" ref={viewportRef}>
          <div className="boj-ingredients-track">
            {ingredientCards.map((ingredient) => (
              <a
                className="boj-ingredient-card"
                key={ingredient.name}
                href={ingredient.href}
                aria-label={`${ingredient.name} - ${ingredient.label}`}
              >
                <img
                  className="base"
                  src={ingredient.image}
                  alt={`${ingredient.name} illustration`}
                  loading="lazy"
                />
                <img
                  className="hover"
                  src={ingredient.hover}
                  alt=""
                  loading="lazy"
                  aria-hidden="true"
                />
              </a>
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
