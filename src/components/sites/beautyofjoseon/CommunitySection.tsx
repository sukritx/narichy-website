"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import {
  asset,
  communityAccordions,
  communityPosts,
} from "./data";
import { IconHeart, IconLeaf, IconMinus, IconPlus } from "./icons";

export function CommunitySection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="boj-community" aria-labelledby="boj-community-title">
      <div className="boj-community-content">
        <img
          className="boj-community-logo"
          src={asset("images/community-logo.png")}
          alt="Beauty of Joseon"
          loading="lazy"
        />
        <h2 className="boj-community-title" id="boj-community-title">
          Inspired By Hanbang. Connected by Community.
        </h2>

        {communityAccordions.map((item, index) => {
          const isOpen = open === index;
          return (
            <div
              className={`boj-accordion${isOpen ? " is-open" : ""}`}
              key={item.title}
            >
              <button
                type="button"
                className="boj-accordion-summary"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span className="icon-left">
                  {item.icon === "leaf" ? <IconLeaf /> : <IconHeart />}
                </span>
                <span className="summary-text">{item.title}</span>
                {isOpen ? (
                  <IconMinus className="icon-plus" />
                ) : (
                  <IconPlus className="icon-plus" />
                )}
              </button>
              <div className="boj-accordion-body">
                <div className="boj-accordion-body-inner">
                  <p>
                    {item.body}{" "}
                    <a href={item.href}>{item.linkLabel}</a>
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="boj-blog-grid">
          {communityPosts.map((post) => (
            <article className="boj-blog-card" key={post.title}>
              <a href={post.href} aria-label={post.title}>
                <img src={post.image} alt={post.title} loading="lazy" />
              </a>
              <h3 className="boj-blog-title">
                <a href={post.href}>{post.title}</a>
              </h3>
              <a className="boj-blog-more" href={post.href}>
                Read more
              </a>
            </article>
          ))}
        </div>
      </div>
      <div className="boj-community-image">
        <img
          src={asset("images/community-hero.jpg")}
          alt="Tinted Mineral Dayscreen SPF 30 page image"
          loading="lazy"
        />
      </div>
    </section>
  );
}
