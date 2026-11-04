"use client";

import { srcUrl } from "./data";
import { IconCart, IconDiamond } from "./icons";
import { useStore } from "./store";

export function FloatingWidgets() {
  const { setCartOpen, cartCount } = useStore();

  return (
    <>
      <a
        className="boj-rewards-pill"
        href={srcUrl("/pages/rewards")}
        target="_blank"
        rel="noreferrer"
      >
        <IconDiamond />
        <span>Rewards</span>
      </a>
      <button
        type="button"
        className="boj-cart-bubble"
        onClick={() => setCartOpen(true)}
        aria-label={`Open cart, ${cartCount} items`}
      >
        <IconCart />
      </button>
    </>
  );
}
