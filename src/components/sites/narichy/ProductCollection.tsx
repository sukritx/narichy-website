"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useMemo, useState } from "react";
import { LINE_OA, SHOPEE } from "./data";
import { IconArrowRight, IconStar } from "./icons";

export type CollectionProduct = {
  slug: string;
  title: string;
  thaiTitle: string;
  cutline: string;
  rating: string;
  reviews: string;
  price: number;
  compareAt?: number;
  image: string;
  href: string;
  bestSeller: boolean;
  badges: string[];
  category: string;
};

type SortOption = "featured" | "price-asc" | "price-desc" | "az";

type ProductCollectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: CollectionProduct[];
  showCategoryFilter?: boolean;
};

const priceFormatter = new Intl.NumberFormat("th-TH", {
  maximumFractionDigits: 0,
});

export function ProductCollection({
  eyebrow,
  title,
  description,
  items,
  showCategoryFilter = true,
}: ProductCollectionProps) {
  const [sort, setSort] = useState<SortOption>("featured");
  const [category, setCategory] = useState("all");

  const categories = useMemo(
    () => Array.from(new Set(items.map((item) => item.category))).sort(),
    [items],
  );

  const visibleItems = useMemo(() => {
    const filtered =
      category === "all"
        ? items
        : items.filter((item) => item.category === category);

    return [...filtered].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "az") return a.title.localeCompare(b.title);
      if (a.bestSeller !== b.bestSeller) return a.bestSeller ? -1 : 1;
      return 0;
    });
  }, [category, items, sort]);

  return (
    <main className="boj-shop">
      <header className="boj-shop-head">
        <p className="boj-shop-eyebrow">{eyebrow}</p>
        <h1 className="boj-shop-title">{title}</h1>
        <p className="boj-shop-intro">{description}</p>
      </header>

      <div className="boj-shop-toolbar">
        <p className="boj-shop-count" aria-live="polite">
          {visibleItems.length} {visibleItems.length === 1 ? "product" : "products"}
        </p>
        <div className="boj-shop-controls">
          {showCategoryFilter && categories.length > 1 && (
            <label className="boj-shop-select-wrap">
              <span className="sr-only">Filter by category</span>
              <select
                className="boj-shop-select"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value="all">All categories</option>
                {categories.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          )}
          <label className="boj-shop-select-wrap">
            <span className="sr-only">Sort products</span>
            <select
              className="boj-shop-select"
              value={sort}
              onChange={(event) => setSort(event.target.value as SortOption)}
            >
              <option value="featured">Featured</option>
              <option value="az">Alphabetically, A–Z</option>
              <option value="price-asc">Price, low to high</option>
              <option value="price-desc">Price, high to low</option>
            </select>
          </label>
        </div>
      </div>

      {visibleItems.length === 0 ? (
        <p className="boj-shop-empty">No products match this filter yet.</p>
      ) : (
        <div className="boj-shop-grid">
          {visibleItems.map((item) => (
            <article className="boj-shop-card" key={item.slug}>
              <Link className="boj-shop-media" href={item.href} aria-label={item.title}>
                <img
                  src={item.image}
                  alt={`${item.title} — ${item.cutline}`}
                  width={900}
                  height={900}
                  loading="lazy"
                />
                {item.bestSeller ? (
                  <span className="boj-shop-flag">Best seller</span>
                ) : null}
                <span className="boj-shop-view">
                  View product <IconArrowRight />
                </span>
              </Link>
              <div className="boj-shop-info">
                <p className="boj-shop-vendor">
                  Narichy <span aria-hidden="true">·</span> {item.category}
                </p>
                <h2 className="boj-shop-product-title">
                  <Link href={item.href}>{item.title}</Link>
                </h2>
                <p className="boj-shop-thai">{item.thaiTitle}</p>
                <div className="boj-shop-rating">
                  <span className="boj-shop-stars" aria-hidden="true">
                    {Array.from({ length: 5 }, (_, index) => (
                      <IconStar key={index} />
                    ))}
                  </span>
                  <span>
                    {item.rating} · {item.reviews}
                  </span>
                </div>
                <p className="boj-shop-price">
                  ฿{priceFormatter.format(item.price)}
                  {item.compareAt ? (
                    <span className="boj-shop-compare">
                      ฿{priceFormatter.format(item.compareAt)}
                    </span>
                  ) : null}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="boj-shop-note">
        <p>
          Not sure where to start?{" "}
          <a href={LINE_OA} target="_blank" rel="noreferrer">
            Chat with our team on LINE
          </a>{" "}
          for a discreet recommendation, or{" "}
          <a href={SHOPEE} target="_blank" rel="noreferrer">
            browse our full range on Shopee
          </a>
          .
        </p>
      </div>
    </main>
  );
}
