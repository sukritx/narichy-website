"use client";

import { footerMenu } from "./data";
import { IconInstagram, IconTikTok } from "./icons";

export function SiteFooter() {
  return (
    <footer className="boj-footer">
      <div className="boj-footer-inner">
        <div className="boj-footer-blocks">
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
              Narichy Thailand
              <br />
              Bangkok, Thailand
              <br />
              Copyright © 2026. All Rights Reserved
            </p>
            <div className="boj-socials">
              <a
                href="https://www.instagram.com/narichy.thailand/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <IconInstagram />
              </a>
              <a
                href="https://www.tiktok.com/search?q=narichy"
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
