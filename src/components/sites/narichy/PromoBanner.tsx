/* eslint-disable @next/next/no-img-element */

export function PromoBanner() {
  return (
    <section className="boj-promo">
      <div className="boj-promo-text">
        <div className="boj-promo-copy">
          <p className="boj-promo-sub">Our Specialty</p>
          <h2 className="boj-promo-title">
            Intimate care products and dietary supplements for women.
          </h2>
          <a
            className="boj-promo-btn"
            href="https://shopee.co.th/narichyshop"
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
