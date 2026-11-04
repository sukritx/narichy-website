/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import { AboutIngredientCarousel } from "@/components/sites/narichy/AboutIngredientCarousel";
import {
  asset,
  pressItems,
  srcUrl,
} from "@/components/sites/narichy/data";
import { IconArrowRight } from "@/components/sites/narichy/icons";

export const metadata: Metadata = {
  title: "About Us | Beauty of Joseon",
  description:
    "Inspired by Hanbang. Connected by community. Created for your healthiest skin.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="boj-about-hero">
        <picture>
          <source media="(max-width: 749px)" srcSet={asset("images/about-hero-mobile.png")} />
          <img
            src={asset("images/about-hero.png")}
            alt="Inspired By Hanbang. Connected By Community. Created For Your Healthiest Skin."
          />
        </picture>
      </section>

      <section className="boj-about-split" aria-labelledby="about-who">
        <div className="boj-about-split-inner">
          <div className="boj-about-split-image">
            <img
              src={asset("images/who-are-we.jpg")}
              alt="Tinted Mineral Dayscreen SPF 30 page image"
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
                  Beauty of Joseon started with a single question:{" "}
                  <em>
                    What if we took the history of Hanbang and transformed it
                    into skincare you’d want to carry everywhere and show all
                    your beauty-obsessed friends
                  </em>
                  ?
                </p>
                <p className="boj-rte-spacer">&nbsp;</p>
                <p>
                  With the launch of our now-iconic{" "}
                  <a
                    href={srcUrl("/products/relief-sun-rice-probiotics")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <u>Relief Sun</u>
                  </a>
                  , we changed the way you thought about sunscreen. Everything
                  we’ve created continues this key philosophy: beauty essentials
                  that are not only easy to use and intriguing, but also deliver
                  the results to back up the hype.
                </p>
                <p className="boj-rte-spacer">&nbsp;</p>
                <p>
                  We’re grateful that you’ve shared our love for elegant, joyful
                  skincare inspired by Hanbang—and we hope you’ll continue
                  joining us on this journey, every step of the way.
                </p>
              </div>
              <p className="boj-about-signature">The Beauty of Joseon Team</p>
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
            src={asset("images/about-mission.jpg")}
            alt="Beauty of Joseon"
            width={600}
            height={375}
            loading="lazy"
          />
          <div className="boj-about-rte">
            <p>
              We create Hanbang-inspired skincare that’s unique to your routine,
              gentle on skin, and always effective. As a cruelty-free brand, we
              develop all of our products without animal testing.
            </p>
            <p>
              We believe healthy skincare habits blended with traditional
              self-care rituals can enrich your daily life.
            </p>
          </div>
        </div>
      </section>

      <section className="boj-about-full">
        <img
          src={asset("images/about-full.png")}
          alt="Beauty of Joseon mission to create gentle, Hanbang-inspired skincare"
          loading="lazy"
        />
      </section>

      <section className="boj-about-hanbang" aria-labelledby="about-hanbang">
        <div className="boj-about-mission-inner">
          <h2 className="boj-about-title" id="about-hanbang">
            What is Hanbang?
          </h2>
          <div className="boj-about-rte">
            <p>
              Hanbang is traditional Korean medicine based on natural
              ingredients with therapeutic properties, a historical practice
              that remains widely known and used in Korea today.
            </p>
            <p>
              Our Hanbang-infused skincare combines these time-honored herbs with
              lab-backed, clinically effective ingredients.
            </p>
            <p>
              Developed from the historical teachings recorded in the{" "}
              <em>Gyuhap Chongseo</em>, a Joseon-era encyclopedia written by
              female scholar Yi Bingheogak. Consciously created to care for all
              skin types.
            </p>
          </div>
        </div>
      </section>

      <AboutIngredientCarousel />

      <section className="boj-about-press" aria-labelledby="about-press">
        <div className="boj-about-press-inner">
          <h2 className="boj-about-press-title" id="about-press">
            Featured in the Press
          </h2>
          <div className="boj-press-grid">
            {pressItems.map((item) => (
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
