/* eslint-disable @next/next/no-img-element */

import { asset, srcUrl } from "./data";

export function RewardsSection() {
  return (
    <section className="boj-rewards">
      <a
        className="boj-rewards-image"
        href={srcUrl("/pages/rewards")}
        aria-label="Join the BOJ Rewards Program"
      >
        <img
          src={asset("images/rewards-box.webp")}
          alt="A pink BOJ rewards gift box tied with a ribbon"
          loading="lazy"
        />
      </a>
      <a className="boj-rewards-panel" href={srcUrl("/pages/rewards")}>
        <div className="boj-rewards-copy">
          <p className="boj-rewards-eyebrow">Members Only</p>
          <h2 className="boj-rewards-title">Join the BOJ Rewards Program</h2>
          <p className="boj-rewards-body">
            Redeem gems for loyalty exclusive products, free shipping, discounts,
            and special gifts.
          </p>
          <span className="boj-rewards-btn">Sign up or login</span>
        </div>
      </a>
    </section>
  );
}
