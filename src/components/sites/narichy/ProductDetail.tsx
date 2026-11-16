"use client";

/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useStore } from "./store";
import type { ProductDetail as ProductDetailType } from "./data";
import {
  IconArrowRight,
  IconChevronRight,
  IconCheck,
  IconHeart,
  IconLeaf,
  IconMinus,
  IconPlus,
  IconShield,
  IconSparkle,
  IconStar,
} from "./icons";

const priceFormatter = new Intl.NumberFormat("th-TH", {
  maximumFractionDigits: 0,
});

type ProductDetailProps = {
  product: ProductDetailType;
  related: ProductDetailType[];
};

export function ProductDetail({ product, related }: ProductDetailProps) {
  const { addToCart } = useStore();
  const [selectedVariantId, setSelectedVariantId] = useState(
    product.variants[0]?.id ?? "",
  );
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const selectedVariant =
    product.variants.find((variant) => variant.id === selectedVariantId) ??
    product.variants[0];

  const labels = {
    details: product.sectionTitles?.details ?? "รายละเอียดผลิตภัณฑ์",
    benefits: product.sectionTitles?.benefits ?? "คุณประโยชน์",
    ingredients: product.sectionTitles?.ingredients ?? "สารสกัดสำคัญ",
    howToUse: product.sectionTitles?.howToUse ?? "วิธีใช้",
    shipping: product.sectionTitles?.shipping ?? "การจัดส่งและคืนสินค้า",
  };

  const selectedImage = product.images[activeImage] ?? product.images[0];

  const selectVariant = (variantId: string) => {
    setSelectedVariantId(variantId);
    const variant = product.variants.find((item) => item.id === variantId);
    if (!variant?.image) return;
    const index = product.images.findIndex((image) => image.src === variant.image);
    if (index >= 0) setActiveImage(index);
  };

  useEffect(() => {
    if (!added) return;
    const timer = window.setTimeout(() => setAdded(false), 2200);
    return () => window.clearTimeout(timer);
  }, [added]);

  useEffect(() => {
    const container = thumbsRef.current;
    if (!container) return;
    const active = container.querySelector<HTMLElement>(".boj-pdp-thumb.is-active");
    active?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  }, [activeImage]);

  const currentPrice = selectedVariant?.price ?? product.price;
  const compareAt = selectedVariant?.compareAt ?? product.compareAt;

  const handleAddToCart = () => {
    if (!selectedVariant) return;
    addToCart(
      {
        title:
          product.variants.length > 1
            ? `${product.title} — ${selectedVariant.label}`
            : product.title,
        price: selectedVariant.price,
        image: selectedVariant.image ?? product.image,
        href: `/products/${product.slug}`,
      },
      quantity,
    );
    setAdded(true);
  };

  return (
    <main className="boj-pdp">
      <nav className="boj-pdp-breadcrumb" aria-label="เส้นทางนำทาง">
        <Link href="/">หน้าแรก</Link>
        <IconChevronRight />
        <Link href="/collections/products">สินค้า</Link>
        <IconChevronRight />
        <span aria-current="page">{product.title}</span>
      </nav>

      <div className="boj-pdp-grid">
        <div className="boj-pdp-gallery">
          <div className="boj-pdp-thumbs" ref={thumbsRef} aria-label="รูปสินค้า">
            {product.images.map((image, index) => (
              <button
                type="button"
                key={`${image.src}-${index}`}
                className={`boj-pdp-thumb${index === activeImage ? " is-active" : ""}`}
                aria-label={`ดูรูปที่ ${index + 1}: ${image.alt}`}
                aria-pressed={index === activeImage}
                onClick={() => setActiveImage(index)}
              >
                <img src={image.src} alt="" width={180} height={180} loading="lazy" />
              </button>
            ))}
          </div>

          <div className="boj-pdp-stage">
            <div className="boj-pdp-main">
              {product.promoRibbon ? (
                <span className="boj-pdp-ribbon">{product.promoRibbon}</span>
              ) : null}
              {product.bestSeller ? (
                <span className="boj-pdp-flag">ขายดี</span>
              ) : null}
              {selectedImage ? (
                <img
                  key={selectedImage.src}
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1100}
                  height={1100}
                  loading="eager"
                />
              ) : null}
            </div>
          </div>
        </div>

        <div className="boj-pdp-info">
          <p className="boj-pdp-vendor">
            {product.vendor} <span aria-hidden="true">·</span> {product.category}
          </p>
          <h1 className="boj-pdp-title">{product.title}</h1>
          <p className="boj-pdp-thai">{product.thaiTitle}</p>

          <div className="boj-pdp-rating">
            {product.reviewCount > 0 ? (
              <>
                <span className="boj-pdp-stars" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, index) => (
                    <IconStar key={index} />
                  ))}
                </span>
                <span>
                  {product.rating} · {product.reviews}
                </span>
              </>
            ) : (
              <span className="boj-pdp-new">{product.reviews}</span>
            )}
            <a href={product.shopee} target="_blank" rel="noreferrer">
              รีวิวบน Shopee
            </a>
          </div>

          <p className="boj-pdp-price">
            ฿{priceFormatter.format(currentPrice)}
            {compareAt ? (
              <span className="boj-pdp-compare">
                ฿{priceFormatter.format(compareAt)}
              </span>
            ) : null}
          </p>
          <p className="boj-pdp-save">
            {compareAt
              ? `ประหยัด ฿${priceFormatter.format(compareAt - currentPrice)}`
              : "มีสินค้าพร้อมส่ง"}
            <span aria-hidden="true"> · </span>
            จัดส่งภายใน 1–2 วันทำการ
          </p>

          <p className="boj-pdp-desc">{product.description}</p>

          <div className="boj-pdp-variant-block">
            <p className="boj-pdp-label">
              {product.variants.length > 1 ? "เลือกขนาด" : "ขนาด"}
            </p>
            {product.variants.length > 1 ? (
              <div className="boj-pdp-variants">
                {product.variants.map((variant) => (
                  <button
                    type="button"
                    key={variant.id}
                    className={`boj-pdp-variant${
                      variant.id === selectedVariant?.id ? " is-active" : ""
                    }`}
                    onClick={() => selectVariant(variant.id)}
                  >
                    <span>{variant.label}</span>
                    <small>
                      ฿{priceFormatter.format(variant.price)}
                      {variant.note ? ` · ${variant.note}` : ""}
                    </small>
                  </button>
                ))}
              </div>
            ) : (
              <p className="boj-pdp-single-variant">
                {selectedVariant?.label}
                {selectedVariant?.note ? ` · ${selectedVariant.note}` : ""}
              </p>
            )}
          </div>

          <div className="boj-pdp-buy-row">
            <div className="boj-pdp-qty" aria-label="จำนวน">
              <button
                type="button"
                aria-label="ลดจำนวน"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                disabled={quantity <= 1}
              >
                <IconMinus />
              </button>
              <span aria-live="polite">{quantity}</span>
              <button
                type="button"
                aria-label="เพิ่มจำนวน"
                onClick={() => setQuantity((value) => Math.min(10, value + 1))}
                disabled={quantity >= 10}
              >
                <IconPlus />
              </button>
            </div>
            <button
              type="button"
              className={`boj-pdp-add${added ? " is-added" : ""}`}
              onClick={handleAddToCart}
            >
              {added ? (
                <>
                  <IconCheck /> เพิ่มลงตะกร้าแล้ว
                </>
              ) : (
                <>เพิ่มลงตะกร้า — ฿{priceFormatter.format(currentPrice * quantity)}</>
              )}
            </button>
          </div>

          <div className="boj-pdp-secondary">
            <a
              className="boj-pdp-market-logo"
              href={product.shopee}
              target="_blank"
              rel="noreferrer"
              aria-label="ซื้อบน Shopee"
            >
              <Image
                src="/images/logo/shopee-logo.png"
                alt="Shopee"
                width={50}
                height={50}
              />
            </a>
            <a
              className="boj-pdp-market-logo"
              href={product.line}
              target="_blank"
              rel="noreferrer"
              aria-label="แชทผ่าน LINE"
            >
              <Image
                src="/images/logo/line-logo.png"
                alt="LINE"
                width={50}
                height={50}
              />
            </a>
          </div>

          <div className="boj-pdp-accordions">
            {product.details?.length ? (
              <details>
                <summary>
                  <span>{labels.details}</span>
                  <span className="boj-pdp-summary-icon" aria-hidden="true" />
                </summary>
                <ul className="boj-pdp-list">
                  {product.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </details>
            ) : null}

            <details>
              <summary>
                <span>{labels.benefits}</span>
                <span className="boj-pdp-summary-icon" aria-hidden="true" />
              </summary>
              <ul className="boj-pdp-list">
                {product.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </details>

            <details>
              <summary>
                <span>{labels.ingredients}</span>
                <span className="boj-pdp-summary-icon" aria-hidden="true" />
              </summary>
              <ul className="boj-pdp-list">
                {product.ingredients.map((ingredient) => {
                  const [name, ...description] = ingredient.split(" — ");
                  return (
                    <li key={ingredient}>
                      {description.length ? (
                        <>
                          <strong>{name}</strong> — {description.join(" — ")}
                        </>
                      ) : (
                        ingredient
                      )}
                    </li>
                  );
                })}
              </ul>
            </details>

            <details>
              <summary>
                <span>{labels.howToUse}</span>
                <span className="boj-pdp-summary-icon" aria-hidden="true" />
              </summary>
              <ol className="boj-pdp-list is-ordered">
                {product.howToUse.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </details>

            <details>
              <summary>
                <span>{labels.shipping}</span>
                <span className="boj-pdp-summary-icon" aria-hidden="true" />
              </summary>
              <div className="boj-pdp-rich">
                <p>
                  คำสั่งซื้อที่ชำระก่อนเวลา 15.00 น. ในวันทำการจะถูกจัดส่งในวันเดียวกัน
                  โดยทั่วไปการจัดส่งภายในประเทศไทยใช้เวลา 1–3 วันทำการ
                </p>
                <p>
                  พัสดุจัดส่งแบบเรียบง่ายไม่ระบุชื่อสินค้าด้านนอก
                  และสามารถขอคืนสินค้าที่ยังไม่เปิดใช้ได้ภายใน 7 วัน
                </p>
              </div>
            </details>
          </div>

          {product.disclaimer ? (
            <p className="boj-pdp-disclaimer">{product.disclaimer}</p>
          ) : null}
        </div>
      </div>

      <section className="boj-pdp-story" aria-labelledby="pdp-story-title">
        <div className="boj-pdp-story-head">
          <p className="boj-shop-eyebrow">เรื่องราวทั้งหมด</p>
          <h2 id="pdp-story-title">{product.tagline}</h2>
          <div className="boj-pdp-badges">
            {product.badges.map((badge) => (
              <span key={badge}>
                <IconSparkle /> {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="boj-pdp-story-copy">
          {product.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <dl className="boj-pdp-specs">
            {product.specs.map((spec) => (
              <div key={spec.label}>
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="boj-pdp-love" aria-labelledby="pdp-love-title">
        <div>
          <p className="boj-shop-eyebrow">ทำไมคุณถึงจะชอบ</p>
          <h2 id="pdp-love-title">ออกแบบมาเพื่อกิจวัตรทุกวันของคุณ</h2>
        </div>
        <div className="boj-pdp-love-grid">
          <article>
            <IconHeart />
            <h3>ใส่ใจความสบายก่อน</h3>
            <p>
              สูตรอ่อนโยนที่คำนึงถึงค่า pH ออกแบบสำหรับผิวแพ้ง่าย
              และความมั่นใจในทุกวัน
            </p>
          </article>
          <article>
            <IconLeaf />
            <h3>ส่วนผสมที่คัดสรร</h3>
            <p>
              สารสกัดจากพฤกษชาติและส่วนผสมที่เหมาะกับผิว
              คัดเลือกมาเพื่อความสบายและประสิทธิภาพ
            </p>
          </article>
          <article>
            <IconShield />
            <h3>ใส่ใจในทุกขั้นตอน</h3>
            <p>
              สูตรที่ผลิตอย่างใส่ใจ พร้อมคำแนะนำการใช้ที่ชัดเจน
              เพื่อความสบายในทุกวัน
            </p>
          </article>
        </div>
      </section>

      <section className="boj-pdp-related" aria-labelledby="pdp-related-title">
        <div className="boj-pdp-related-head">
          <div>
            <p className="boj-shop-eyebrow">เติมเต็มกิจวัตร</p>
            <h2 id="pdp-related-title">สินค้าที่คุณอาจชอบ</h2>
          </div>
          <Link href="/collections/products" className="boj-pdp-related-link">
            ดูสินค้าทั้งหมด <IconArrowRight />
          </Link>
        </div>
        <div className="boj-pdp-related-grid">
          {related.map((item) => (
            <article className="boj-shop-card" key={item.slug}>
              <Link className="boj-shop-media" href={`/products/${item.slug}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  width={900}
                  height={900}
                  loading="lazy"
                />
              </Link>
              <div className="boj-shop-info">
                <p className="boj-shop-vendor">
                  {item.vendor} <span aria-hidden="true">·</span> {item.category}
                </p>
                <h3 className="boj-shop-product-title">
                  <Link href={`/products/${item.slug}`}>{item.title}</Link>
                </h3>
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
      </section>
    </main>
  );
}
