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
                {product.sizes && (
                  <select
                    className="boj-size-select"
                    aria-label={`${product.title} size`}
                    defaultValue={product.sizes[0]}
                  >
                    {product.sizes.map((size) => (
                      <option value={size} key={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                )}
                <div className="boj-price-bar">
                  <span>{product.priceLabel}</span>
                  <span>{product.priceStatus}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
