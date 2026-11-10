/* eslint-disable @next/next/no-img-element */

import { srcUrl } from "./data";

export function PromoBanner() {
  return (
    <section className="boj-promo">
      <div className="boj-promo-text">
        <div className="boj-promo-copy">
          <p className="boj-promo-sub">Try now</p>
          <h2 className="boj-promo-title">
            ชุ่มชื่น ปรับสมดุลภายใน ลดกลิ่น ลดตกขาว ไร้สารตกค้าง
          </h2>
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
          src="/images/promo-bannner/promo-banner-1.jpg"
          alt="Tinted Mineral Dayscreen SPF 30 wide image"
          loading="lazy"
        />
      </div>
    </section>
  );
}
