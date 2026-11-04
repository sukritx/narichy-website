"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";
import { shades, srcUrl } from "./data";
import {
  IconArrowRight,
  IconChevronLeft,
  IconChevronRight,
  IconClose,
} from "./icons";

export function ShadeCarousel() {
  const [active, setActive] = useState(1);
  const [viewportWidth, setViewportWidth] = useState(1440);
  const [compareOpen, setCompareOpen] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    const update = () => setViewportWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (!compareOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCompareOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [compareOpen]);

  const shade = shades[active];
  const mobile = viewportWidth <= 749;
  const pitch = mobile ? 187.2 : 288;
  const offset = viewportWidth / 2 - pitch / 2 - active * pitch;
  const count = shades.length;

  const go = (direction: 1 | -1) => {
    setActive((current) => (current + direction + count) % count);
  };

  return (
    <section
      className="boj-shade"
      style={{ backgroundColor: shade.background, color: shade.textColor }}
      aria-labelledby="boj-shade-title"
    >
      <h2 className="boj-shade-heading" id="boj-shade-title">
        Find Your Tinted Mineral Dayscreen Shade
      </h2>
      <p className="boj-shade-sub">Explore the shades. Find yours.</p>

      <div
        className="boj-shade-slider"
        ref={sliderRef}
        onTouchStart={(event) => {
          touchStart.current = event.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return;
          const end = event.changedTouches[0]?.clientX ?? touchStart.current;
          const delta = end - touchStart.current;
          if (Math.abs(delta) > 40) go(delta < 0 ? 1 : -1);
          touchStart.current = null;
        }}
      >
        <div
          className="boj-shade-track"
          style={{ transform: `translate3d(${offset}px, 0, 0)` }}
        >
          {shades.map((item, index) => (
            <button
              type="button"
              className={`boj-shade-card${index === active ? " is-active" : ""}`}
              key={item.code}
              aria-label={`Tinted Mineral Dayscreen SPF 30 — ${item.code}`}
              onClick={() => setActive(index)}
            >
              <img
                src={item.image}
                alt={`Tinted Mineral Dayscreen shade ${item.code}`}
                loading={Math.abs(index - active) < 3 ? "eager" : "lazy"}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          className="boj-shade-arrow prev"
          aria-label="Previous shade"
          onClick={() => go(-1)}
        >
          <IconChevronLeft />
        </button>
        <button
          type="button"
          className="boj-shade-arrow next"
          aria-label="Next shade"
          onClick={() => go(1)}
        >
          <IconChevronRight />
        </button>
      </div>

      <div className="boj-shade-details">
        <div className="boj-swatches" role="group" aria-label="Choose a shade">
          {shades.map((item, index) => (
            <button
              type="button"
              className={`boj-swatch${index === active ? " is-active" : ""}`}
              key={item.code}
              aria-label={`Select shade ${item.code}: ${item.description}`}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
            >
              <span
                className="boj-swatch-dot"
                style={{ backgroundColor: item.background }}
              />
            </button>
          ))}
        </div>
        <p className="boj-shade-count">
          {String(active + 1).padStart(2, "0")} / {count}
        </p>
        <h3 className="boj-shade-product-title">
          Tinted Mineral Dayscreen SPF 30 - <strong>Shade {shade.code}</strong>
        </h3>
        <button
          type="button"
          className="boj-shade-compare"
          onClick={() => setCompareOpen(true)}
        >
          Compare shades
        </button>
        <button
          type="button"
          className="boj-shade-add"
          aria-disabled="true"
          title="This shade is sold out"
        >
          <span>Sold Out</span>
          <span>686.00 ฿</span>
        </button>
        <a
          className="boj-shade-view"
          href={srcUrl("/products/tinted-mineral-dayscreen-spf-30-global")}
        >
          View product details <IconArrowRight />
        </a>
      </div>

      {compareOpen && (
        <div
          className="boj-modal-overlay"
          onClick={() => setCompareOpen(false)}
        >
          <div
            className="boj-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="boj-compare-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="boj-modal-close"
              aria-label="Close shade comparison"
              onClick={() => setCompareOpen(false)}
            >
              <IconClose className="h-5 w-5" />
            </button>
            <h2 className="boj-modal-title" id="boj-compare-title">
              Compare Shades
            </h2>
            <p className="boj-modal-sub">
              Tinted Mineral Dayscreen SPF 30 · {count} shades
            </p>
            <div className="boj-compare-grid">
              {shades.map((item, index) => (
                <button
                  type="button"
                  className="boj-compare-row"
                  key={item.code}
                  onClick={() => {
                    setActive(index);
                    setCompareOpen(false);
                  }}
                >
                  <span
                    className="boj-swatch-dot"
                    style={{ backgroundColor: item.background }}
                  />
                  <span className="boj-compare-code">{item.code}</span>
                  <span className="boj-compare-desc">{item.description}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
