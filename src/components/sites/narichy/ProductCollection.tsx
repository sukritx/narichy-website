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
          {visibleItems.length} สินค้า
        </p>
        <div className="boj-shop-controls">
          {showCategoryFilter && categories.length > 1 && (
            <label className="boj-shop-select-wrap">
              <span className="sr-only">กรองตามหมวดหมู่</span>
              <select
                className="boj-shop-select"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value="all">ทุกหมวดหมู่</option>
                {categories.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          )}
          <label className="boj-shop-select-wrap">
            <span className="sr-only">เรียงลำดับสินค้า</span>
            <select
              className="boj-shop-select"
              value={sort}
              onChange={(event) => setSort(event.target.value as SortOption)}
            >
              <option value="featured">แนะนำ</option>
              <option value="az">ตามตัวอักษร A–Z</option>
              <option value="price-asc">ราคา: ต่ำไปสูง</option>
              <option value="price-desc">ราคา: สูงไปต่ำ</option>
            </select>
          </label>
        </div>
      </div>

      {visibleItems.length === 0 ? (
        <p className="boj-shop-empty">ยังไม่มีสินค้าที่ตรงกับตัวกรองนี้</p>
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
                  <span className="boj-shop-flag">ขายดี</span>
                ) : null}
                <span className="boj-shop-view">
                  ดูสินค้า <IconArrowRight />
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
          ไม่แน่ใจว่าจะเริ่มจากอะไร?{" "}
          <a href={LINE_OA} target="_blank" rel="noreferrer">
            แชทกับทีมงานของเราบน LINE
          </a>{" "}
          เพื่อรับคำแนะนำอย่างเป็นส่วนตัว หรือ{" "}
          <a href={SHOPEE} target="_blank" rel="noreferrer">
            เลือกดูสินค้าทั้งหมดของเราบน Shopee
          </a>
          .
        </p>
      </div>
    </main>
  );
}
