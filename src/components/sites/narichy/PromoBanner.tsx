/* eslint-disable @next/next/no-img-element */

export function PromoBanner() {
  return (
    <section className="boj-promo">
      <div className="boj-promo-text">
        <div className="boj-promo-copy">
          <p className="boj-promo-sub">จุดเด่นของเรา</p>
          <h2 className="boj-promo-title">
            ผลิตภัณฑ์ดูแลจุดซ่อนเร้นและอาหารเสริมสำหรับผู้หญิง
          </h2>
          <a
            className="boj-promo-btn"
            href="https://shopee.co.th/narichyshop"
          >
            ช้อปเลย
          </a>
        </div>
      </div>
      <div className="boj-promo-image">
        <img
          src="/images/promo-bannner/promo-banner-1.jpg"
          alt="ผลิตภัณฑ์ดูแลจุดซ่อนเร้นและอาหารเสริมจาก Narichy Thailand"
          loading="lazy"
        />
      </div>
    </section>
  );
}
