/* eslint-disable @next/next/no-img-element */

import { products } from "./data";
import { IconStar } from "./icons";

export function BestSellers() {
  return (
    <section className="boj-best" aria-labelledby="boj-best-title">
      <div className="boj-best-inner">
        <h2 className="boj-best-heading" id="boj-best-title">
          Best Sellers
        </h2>
        <div className="boj-best-grid">
          {products.map((product) => (
            <article className="boj-product" key={product.title}>
              <a
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
              </a>
              <div className="boj-product-info">
                <div className="boj-rating">
                  <span className="boj-stars" aria-hidden="true">
                    {Array.from({ length: 5 }, (_, index) => (
                      <IconStar key={index} />
                    ))}
                  </span>
                  <span>{product.reviews}</span>
                </div>
                <a className="boj-product-title" href={product.href}>
                  {product.title}
                </a>
                <p className="boj-product-cutline">{product.cutline}</p>
                <a className="boj-buy-button" href={product.href}>
                  Buy now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
