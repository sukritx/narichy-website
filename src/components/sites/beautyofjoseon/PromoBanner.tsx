/* eslint-disable @next/next/no-img-element */

import { asset, srcUrl } from "./data";

export function PromoBanner() {
  return (
    <section className="boj-promo">
      <div className="boj-promo-text">
        <div className="boj-promo-copy">
          <p className="boj-promo-sub">New</p>
          <h2 className="boj-promo-title">
            Experience the new standard of tinted SPF
          </h2>
          <p className="boj-promo-rte">Tinted Mineral Dayscreen</p>
          <a
            className="boj-promo-btn"
            href={srcUrl("/products/tinted-mineral-dayscreen-spf-30-global")}
          >
            Shop Now
          </a>
        </div>
      </div>
      <div className="boj-promo-image">
        <img
          src={asset("images/promo-tinted.webp")}
          alt="Tinted Mineral Dayscreen SPF 30 wide image"
          loading="lazy"
        />
      </div>
    </section>
  );
}
