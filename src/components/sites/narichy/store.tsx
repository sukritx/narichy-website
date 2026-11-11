"use client";

/* eslint-disable @next/next/no-img-element */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { SHOPEE } from "./data";
import { IconCart, IconClose } from "./icons";

export type CartLine = {
  title: string;
  price: number;
  image: string;
  href: string;
  quantity: number;
};

type StoreValue = {
  cart: CartLine[];
  cartCount: number;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addToCart: (item: Omit<CartLine, "quantity">) => void;
  removeFromCart: (title: string) => void;
  subtotal: number;
};

const StoreContext = createContext<StoreValue | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = useCallback((item: Omit<CartLine, "quantity">) => {
    setCart((current) => {
      const existing = current.find((line) => line.title === item.title);
      if (existing) {
        return current.map((line) =>
          line.title === item.title
            ? { ...line, quantity: line.quantity + 1 }
            : line,
        );
      }
      return [...current, { ...item, quantity: 1 }];
    });
    setCartOpen(true);
  }, []);

  const removeFromCart = useCallback((title: string) => {
    setCart((current) => current.filter((line) => line.title !== title));
  }, []);

  useEffect(() => {
    document.body.style.overflow = cartOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [cartOpen]);

  const cartCount = useMemo(
    () => cart.reduce((sum, line) => sum + line.quantity, 0),
    [cart],
  );
  const subtotal = useMemo(
    () => cart.reduce((sum, line) => sum + line.price * line.quantity, 0),
    [cart],
  );

  const value = useMemo(
    () => ({
      cart,
      cartCount,
      cartOpen,
      setCartOpen,
      addToCart,
      removeFromCart,
      subtotal,
    }),
    [cart, cartCount, cartOpen, addToCart, removeFromCart, subtotal],
  );

  return (
    <StoreContext.Provider value={value}>
      {children}
      <CartDrawer />
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}

function CartDrawer() {
  const { cart, cartOpen, setCartOpen, removeFromCart, subtotal } = useStore();

  useEffect(() => {
    if (!cartOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCartOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cartOpen, setCartOpen]);

  if (!cartOpen) return null;

  return (
    <>
      <div
        className="boj-overlay"
        onClick={() => setCartOpen(false)}
        aria-hidden="true"
      />
      <aside
        className="boj-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="boj-drawer-head">
          <p className="boj-drawer-title">
            Your Cart{cart.length ? ` (${cart.length})` : ""}
          </p>
          <button
            type="button"
            className="boj-drawer-close"
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
          >
            <IconClose className="h-4 w-4" />
          </button>
        </div>
        <div className="boj-drawer-body">
          {cart.length === 0 ? (
            <div className="boj-empty">
              <IconCart className="mx-auto mb-5 h-8 w-8 opacity-40" />
              <p>Your cart is empty</p>
              <button
                type="button"
                className="boj-btn-black"
                onClick={() => setCartOpen(false)}
              >
                Continue shopping
              </button>
            </div>
          ) : (
            cart.map((line) => (
              <div className="boj-cart-item" key={line.title}>
                <img src={line.image} alt="" />
                <div className="boj-cart-item-info">
                  <p className="boj-cart-item-title">
                    {line.title}
                    {line.quantity > 1 ? ` × ${line.quantity}` : ""}
                  </p>
                  <p className="boj-cart-item-price">
                    {(line.price * line.quantity).toFixed(2)} ฿
                  </p>
                  <button
                    type="button"
                    className="boj-cart-remove"
                    onClick={() => removeFromCart(line.title)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="boj-drawer-foot">
            <div className="boj-subtotal">
              <span>Subtotal</span>
              <span>{subtotal.toFixed(2)} ฿</span>
            </div>
            <a
              className="boj-btn-black"
              href={SHOPEE}
              target="_blank"
              rel="noreferrer"
            >
              Checkout
            </a>
          </div>
        )}
      </aside>
    </>
  );
}
