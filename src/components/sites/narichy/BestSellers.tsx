/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { products } from "./data";
import { IconArrowRight, IconStar } from "./icons";

export function BestSellers() {
  return (
    <section className="boj-best" aria-labelledby="boj-best-title">
      <div className="boj-best-inner">
        <div className="boj-best-head-row">
          <h2 className="boj-best-heading" id="boj-best-title">
            Best Sellers
          </h2>
          <Link className="boj-best-view-all" href="/collections/best-sellers">
            View all <IconArrowRight />
          </Link>
        </div>
        <div className="boj-best-grid">
          {products.map((product) => (
            <article className="boj-product" key={product.title}>
              <Link
                className="boj-product-image"
                href={product.href}
                aria-label={product.title}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  width={800}
                  height={800}
                />
              </Link>
              <div className="boj-product-info">
                <div className="boj-rating">
                  <span className="boj-stars" aria-hidden="true">
                    {Array.from({ length: 5 }, (_, index) => (
                      <IconStar key={index} />
                    ))}
                  </span>
                  <span>{product.reviews}</span>
                </div>
                <Link className="boj-product-title" href={product.href}>
                  {product.title}
                </Link>
                <p className="boj-product-cutline">{product.cutline}</p>
                <p className="boj-product-price">฿{product.price.replace(".00", "")}</p>
                <Link className="boj-buy-button" href={product.href}>
                  View product
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
