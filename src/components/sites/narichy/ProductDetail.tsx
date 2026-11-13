"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useEffect, useState } from "react";
import { useStore } from "./store";
import type { ProductDetail as ProductDetailType } from "./data";
import {
  IconArrowRight,
  IconChevronRight,
  IconCheck,
  IconHeart,
  IconLeaf,
  IconLine,
  IconMinus,
  IconPackage,
  IconPlus,
  IconShield,
  IconShopee,
  IconSparkle,
  IconStar,
  IconTruck,
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

  const selectedVariant =
    product.variants.find((variant) => variant.id === selectedVariantId) ??
    product.variants[0];

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

  const selectedImage = product.images[activeImage] ?? product.images[0];
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
      <nav className="boj-pdp-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <IconChevronRight />
        <Link href="/collections/products">Shop</Link>
        <IconChevronRight />
        <span aria-current="page">{product.title}</span>
      </nav>

      <div className="boj-pdp-grid">
        <div className="boj-pdp-gallery">
          <div className="boj-pdp-thumbs" aria-label="Product images">
            {product.images.map((image, index) => (
              <button
                type="button"
                key={`${image.src}-${index}`}
                className={`boj-pdp-thumb${index === activeImage ? " is-active" : ""}`}
                aria-label={`Show image ${index + 1}: ${image.alt}`}
                aria-pressed={index === activeImage}
                onClick={() => setActiveImage(index)}
              >
                <img src={image.src} alt="" width={180} height={180} loading="lazy" />
              </button>
            ))}
          </div>

          <div className="boj-pdp-main">
            {product.bestSeller ? (
              <span className="boj-pdp-flag">Best seller</span>
            ) : null}
            <img
              key={selectedImage.src}
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1100}
              height={1100}
            />
          </div>
        </div>

        <div className="boj-pdp-info">
          <p className="boj-pdp-vendor">
            {product.vendor} <span aria-hidden="true">·</span> {product.category}
          </p>
          <h1 className="boj-pdp-title">{product.title}</h1>
          <p className="boj-pdp-thai">{product.thaiTitle}</p>

          <div className="boj-pdp-rating">
            <span className="boj-pdp-stars" aria-hidden="true">
              {Array.from({ length: 5 }, (_, index) => (
                <IconStar key={index} />
              ))}
            </span>
            <span>
              {product.rating} · {product.reviews}
            </span>
            <a href={product.shopee} target="_blank" rel="noreferrer">
              Shopee reviews
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
            {compareAt ? `Save ฿${priceFormatter.format(compareAt - currentPrice)}` : "In stock"}
            <span aria-hidden="true"> · </span>
            Ships within 1–2 business days
          </p>

          <p className="boj-pdp-desc">{product.description}</p>

          <div className="boj-pdp-variant-block">
            <p className="boj-pdp-label">
              {product.variants.length > 1 ? "Choose your size" : "Size"}
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
            <div className="boj-pdp-qty" aria-label="Quantity">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                disabled={quantity <= 1}
              >
                <IconMinus />
              </button>
              <span aria-live="polite">{quantity}</span>
              <button
                type="button"
                aria-label="Increase quantity"
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
                  <IconCheck /> Added to cart
                </>
              ) : (
                <>Add to cart — ฿{priceFormatter.format(currentPrice * quantity)}</>
              )}
            </button>
          </div>

          <div className="boj-pdp-secondary">
            <a
              className="boj-pdp-shopee"
              href={product.shopee}
              target="_blank"
              rel="noreferrer"
            >
              <IconShopee /> Buy on Shopee
            </a>
            <a
              className="boj-pdp-line"
              href={product.line}
              target="_blank"
              rel="noreferrer"
            >
              <IconLine /> Chat on LINE
            </a>
          </div>

          <ul className="boj-pdp-perks">
            <li>
              <IconTruck />
              <span>Free shipping over ฿500</span>
            </li>
            <li>
              <IconPackage />
              <span>Discreet, plain packaging</span>
            </li>
            <li>
              <IconShield />
              <span>Thai FDA registered formulas</span>
            </li>
            <li>
              <IconLeaf />
              <span>Gentle, pH-balanced care</span>
            </li>
          </ul>

          <div className="boj-pdp-accordions">
            <details open>
              <summary>
                <span>Benefits</span>
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
                <span>Key ingredients</span>
                <span className="boj-pdp-summary-icon" aria-hidden="true" />
              </summary>
              <ul className="boj-pdp-list">
                {product.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </details>

            <details>
              <summary>
                <span>How to use</span>
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
                <span>Shipping &amp; returns</span>
                <span className="boj-pdp-summary-icon" aria-hidden="true" />
              </summary>
              <div className="boj-pdp-rich">
                <p>
                  Orders placed before 3 pm on business days are packed the same
                  day. Delivery in Thailand usually takes 1–3 business days.
                </p>
                <p>
                  Parcels are plain and discreet, with no product names on the
                  outside. Unopened products can be returned within 7 days.
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
          <p className="boj-shop-eyebrow">The full story</p>
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
          <p className="boj-shop-eyebrow">Why you&apos;ll love it</p>
          <h2 id="pdp-love-title">Made for your everyday ritual</h2>
        </div>
        <div className="boj-pdp-love-grid">
          <article>
            <IconHeart />
            <h3>Comfort first</h3>
            <p>
              Gentle, pH-minded formulas designed around sensitive skin and
              everyday confidence.
            </p>
          </article>
          <article>
            <IconLeaf />
            <h3>Thoughtful ingredients</h3>
            <p>
              Botanical extracts and skin-friendly actives, chosen for their
              comfort and performance.
            </p>
          </article>
          <article>
            <IconShield />
            <h3>Made with care</h3>
            <p>
              Thai FDA registered formulas, dermatologically tested where noted,
              and packed discreetly.
            </p>
          </article>
        </div>
      </section>

      <section className="boj-pdp-related" aria-labelledby="pdp-related-title">
        <div className="boj-pdp-related-head">
          <div>
            <p className="boj-shop-eyebrow">Complete the ritual</p>
            <h2 id="pdp-related-title">You may also like</h2>
          </div>
          <Link href="/collections/products" className="boj-pdp-related-link">
            View all products <IconArrowRight />
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
