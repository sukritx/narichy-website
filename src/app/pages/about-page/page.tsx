/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import { AboutIngredientCarousel } from "@/components/sites/narichy/AboutIngredientCarousel";
import { promiseItems } from "@/components/sites/narichy/data";
import { IconArrowRight } from "@/components/sites/narichy/icons";

export const metadata: Metadata = {
  title: "About Us | Narichy Thailand",
  description:
    "Narichy is an award-winning feminine intimate care and beauty brand from Thailand, led by CEO Ning Thannaree Thipthanamonsiri.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="boj-about-hero">
        <picture>
          <source media="(max-width: 749px)" srcSet="/images/hero/hero-slider-2.jpg" />
          <img
            src="/images/hero/hero-slider-1.jpg"
            alt="Narichy Thailand feminine intimate care and beauty products"
          />
        </picture>
      </section>

      <section className="boj-about-split" aria-labelledby="about-who">
        <div className="boj-about-split-inner">
          <div className="boj-about-split-image">
            <img
              src="/images/instagram/narichy-ig-4.jpg"
              alt="The Narichy Thailand team at a brand event"
              loading="lazy"
            />
          </div>
          <div className="boj-about-split-copy">
            <div className="boj-about-split-copy-inner">
              <h2 className="boj-about-title" id="about-who">
                Who Are We?
              </h2>
              <div className="boj-about-rte">
                <p>
                  Narichy began with one simple belief:{" "}
                  <em>
                    intimate care should feel safe, gentle, and completely free
                    of shame
                  </em>
                </p>
                <p className="boj-rte-spacer">&nbsp;</p>
                <p>
                  Led by CEO Ning Thannaree Thipthanamonsiri, Narichy Thailand
                  has grown into a trusted, award-winning name in feminine
                  intimate care and beauty. In 2023 we received the Thailand
                  Health and Beauty Awards (THBA) Rising Star Business of
                  Feminine Care.
                </p>
                <p className="boj-rte-spacer">&nbsp;</p>
                <p>
                  Our brand name, logo, and formulas hold official copyright and
                  trademark approvals, and every product is Thai FDA (อย.)
                  registered. We&apos;re grateful you trust us with a category
                  this personal.
                </p>
              </div>
              <p className="boj-about-signature">The Narichy Team</p>
            </div>
          </div>
        </div>
      </section>

      <section className="boj-about-mission" aria-labelledby="about-mission">
        <div className="boj-about-mission-inner">
          <h2 className="boj-about-title" id="about-mission">
            Our Mission
          </h2>
          <img
            className="boj-about-mission-logo"
            src="/images/logo/narichy-black-logo.png"
            alt="Narichy Thailand"
            width={600}
            height={600}
            loading="lazy"
          />
          <div className="boj-about-rte">
            <p>
              We create gentle, skin-friendly intimate care that helps women feel
              fresh, confident, and comfortable every day. From our hero Finn
              Spray — with over 4,000,000 bottles sold — to our serum, supplements,
              and daily washes, everything is formulated with imported extracts
              like French Alpha Arbutin.
            </p>
            <p>
              Every order ships in discreet packaging, with no product names
              printed on the parcel. Because feeling good should never feel
              awkward.
            </p>
          </div>
        </div>
      </section>

      <section className="boj-about-full">
        <img
          src="/images/promo-bannner/promo-banner-1.jpg"
          alt="Narichy Thailand feminine care and beauty range"
          loading="lazy"
        />
      </section>

      <section className="boj-about-hanbang" aria-labelledby="about-promise">
        <div className="boj-about-mission-inner">
          <h2 className="boj-about-title" id="about-promise">
            Why Narichy?
          </h2>
          <div className="boj-about-rte">
            <p>
              <strong>Award-winning credibility.</strong> Recognised as a Rising
              Star in Feminine Care at THBA 2023, with officially protected brand
              assets and Thai FDA registration.
            </p>
            <p>
              <strong>Proven social proof.</strong> More than 4,000,000 bottles of
              Finn Spray sold — and a community that keeps coming back for more.
            </p>
            <p>
              <strong>Discreet and safe.</strong> Plain parcels, gentle formulas,
              and pH-balanced care designed for sensitive, delicate skin.
            </p>
            <p>
              <strong>Inside-out beauty.</strong> From sprays and serums to
              collagen drinks and daily washes, Narichy cares for you from the
              outside in.
            </p>
          </div>
        </div>
      </section>

      <AboutIngredientCarousel />

      <section className="boj-about-press" aria-labelledby="about-recognition">
        <div className="boj-about-press-inner">
          <h2 className="boj-about-press-title" id="about-recognition">
            The Narichy Promise
          </h2>
          <div className="boj-press-grid">
            {promiseItems.map((item) => (
              <article className="boj-press-card" key={item.title}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <img
                    src={item.image}
                    alt={`${item.title} image`}
                    loading="lazy"
                  />
                </a>
                <p className="boj-press-outlet">{item.outlet}</p>
                <h3 className="boj-press-headline">
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                </h3>
                <a
                  className="boj-press-more"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn more <IconArrowRight />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
