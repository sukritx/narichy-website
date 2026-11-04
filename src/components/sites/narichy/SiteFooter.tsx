"use client";

import { useState, type FormEvent } from "react";
import { footerMenu } from "./data";
import { IconInstagram, IconTikTok } from "./icons";

export function SiteFooter() {
  const [subscribed, setSubscribed] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="boj-footer">
      <div className="boj-footer-inner">
        <div className="boj-footer-blocks">
          <div className="boj-footer-block">
            <h3 className="boj-footer-title">Join Our Community</h3>
            <p className="boj-footer-text">
              Get on the list for K-beauty tips, exclusive deals, and more
              surprises from us.
            </p>
            <form className="boj-newsletter-form" onSubmit={onSubmit}>
              <input
                className="boj-newsletter-input"
                type="email"
                name="email"
                placeholder="Email"
                aria-label="Email"
                required
              />
              <button className="boj-newsletter-btn" type="submit">
                Subscribe
              </button>
            </form>
            <p className="boj-consent-title">Email Marketing Consent</p>
            <label className="boj-consent">
              <input type="checkbox" name="consent" />
              <span>
                I confirm I am 18+ or my country&apos;s age of consent for email
                marketing
              </span>
            </label>
            {subscribed && (
              <p className="boj-newsletter-success" role="status">
                Thanks for subscribing!
              </p>
            )}
          </div>

          <div className="boj-footer-block">
            <h3 className="boj-footer-title">Menu</h3>
            <ul className="boj-footer-links">
              {footerMenu.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="boj-footer-block">
            <h3 className="boj-footer-title">Contact</h3>
            <p className="boj-footer-contact">
              GOODAI GLOBAL INC.
              <br />
              541 Eonju-ro, Gangnam-gu, Seoul, Republic of Korea
              <br />
              Copyright © 2025. All Rights Reserved
            </p>
            <div className="boj-socials">
              <a
                href="https://www.instagram.com/beautyofjoseon_official/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <IconInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@beautyofjoseon"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
              >
                <IconTikTok />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
