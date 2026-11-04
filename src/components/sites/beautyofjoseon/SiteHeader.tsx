"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  asset,
  ingredientCards,
  leftNav,
  products,
  rightNav,
  srcUrl,
} from "./data";
import {
  IconCart,
  IconChevronRight,
  IconClose,
  IconMenu,
  IconPerson,
  IconSearch,
} from "./icons";
import { useStore } from "./store";

const shopColumns = [
  {
    title: "Shop All",
    href: srcUrl("/collections/shop-all"),
    links: [{ label: "Ingredients", href: srcUrl("/pages/ingredients") }],
  },
  {
    title: "By Product",
    href: srcUrl("/collections/shop-all"),
    links: [
      { label: "Sunscreen", href: srcUrl("/collections/sunscreens") },
      { label: "Cleanser", href: srcUrl("/collections/cleanser") },
      { label: "Exfoliator", href: srcUrl("/collections/exfoliator") },
      { label: "Toner & Essence", href: srcUrl("/collections/toner-essence") },
      { label: "Serum", href: srcUrl("/collections/serum") },
      { label: "Moisturizer", href: srcUrl("/collections/moisturizer") },
      { label: "Mask", href: srcUrl("/collections/mask") },
      { label: "Life Style", href: srcUrl("/collections/all-goods") },
    ],
  },
  {
    title: "By Skin Concern",
    href: srcUrl("/collections/skin-concern"),
    links: [
      { label: "Wrinkles", href: srcUrl("/collections/wrinkles") },
      { label: "Pores & Sebum", href: srcUrl("/collections/pores-sebum") },
      {
        label: "Dullness & Uneven tone",
        href: srcUrl("/collections/dullness-uneven-tone"),
      },
      {
        label: "Sensitivity",
        href: srcUrl("/collections/sensitivity-blemish"),
      },
      { label: "Dryness", href: srcUrl("/collections/dryness") },
    ],
  },
];

const searchIndex = [
  {
    label: "Tinted Mineral Dayscreen SPF 30",
    type: "Product",
    href: srcUrl("/products/tinted-mineral-dayscreen-spf-30-global"),
  },
  ...products.map((product) => ({
    label: product.title,
    type: "Product",
    href: product.href,
  })),
  ...ingredientCards.map((ingredient) => ({
    label: ingredient.name,
    type: "Ingredient",
    href: ingredient.href,
  })),
  { label: "About Us", type: "Page", href: "/pages/about-page" },
  { label: "BOJ Rewards", type: "Page", href: srcUrl("/pages/rewards") },
  { label: "Need Help?", type: "Page", href: srcUrl("/pages/need-help") },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { cartCount, setCartOpen } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<"shop" | "about" | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const [query, setQuery] = useState("");
  const closeTimer = useRef<number | null>(null);

  const overlay = pathname === "/";
  const solid = !overlay || scrolled || openMenu !== null || searchOpen || mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const locked = searchOpen || mobileOpen;
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [searchOpen, mobileOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setSearchOpen(false);
      setMobileOpen(false);
      setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchIndex.slice(0, 6);
    return searchIndex
      .filter(
        (item) =>
          item.label.toLowerCase().includes(q) ||
          item.type.toLowerCase().includes(q),
      )
      .slice(0, 10);
  }, [query]);

  const openWithDelay = (menu: "shop" | "about") => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  };
  const closeWithDelay = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 130);
  };

  return (
    <>
      <header className={`boj-header${solid ? " is-solid" : ""}`}>
        <div className="boj-header-inner">
          <nav className="boj-menu-left" aria-label="Primary">
            {leftNav.map((item) => (
              <div
                className={`boj-nav-item${openMenu === item.menu ? " is-open" : ""}`}
                key={item.label}
                onMouseEnter={() => (item.menu ? openWithDelay(item.menu) : setOpenMenu(null))}
                onMouseLeave={() => item.menu && closeWithDelay()}
                onFocus={() => item.menu && openWithDelay(item.menu)}
              >
                <a
                  className="boj-nav-link"
                  href={item.href}
                  aria-haspopup={item.menu ? "true" : undefined}
                  aria-expanded={item.menu ? openMenu === item.menu : undefined}
                >
                  {item.label}
                  <span className="boj-nav-underline" />
                </a>
              </div>
            ))}
          </nav>

          <div className="boj-logo">
            <Link href="/" aria-label="Beauty of Joseon home">
              <Image
                src={asset("images/logo.png")}
                alt="Beauty of Joseon"
                width={480}
                height={46}
                priority
              />
            </Link>
          </div>

          <nav className="boj-menu-right" aria-label="Secondary">
            {rightNav.map((item) => (
              <div
                className={`boj-nav-item${openMenu === item.menu ? " is-open" : ""}`}
                key={item.label}
                onMouseEnter={() => (item.menu ? openWithDelay(item.menu) : setOpenMenu(null))}
                onMouseLeave={() => item.menu && closeWithDelay()}
                onFocus={() => item.menu && openWithDelay(item.menu)}
              >
                {item.href.startsWith("/") ? (
                  <Link
                    className="boj-nav-link"
                    href={item.href}
                    onClick={() => setOpenMenu(null)}
                  >
                    {item.label}
                    <span className="boj-nav-underline" />
                  </Link>
                ) : (
                  <a className="boj-nav-link" href={item.href}>
                    {item.label}
                    <span className="boj-nav-underline" />
                  </a>
                )}
              </div>
            ))}
            <div className="boj-icon-buttons">
              <a
                className="boj-icon-btn"
                href={srcUrl("/account")}
                aria-label="Account"
              >
                <IconPerson />
              </a>
              <button
                type="button"
                className="boj-icon-btn"
                aria-label="Search"
                onClick={() => setSearchOpen(true)}
              >
                <IconSearch />
              </button>
              <button
                type="button"
                className="boj-icon-btn"
                aria-label={`Cart, ${cartCount} items`}
                onClick={() => setCartOpen(true)}
              >
                <IconCart />
                <span className="boj-cart-count">{cartCount}</span>
              </button>
            </div>
          </nav>
        </div>

        {openMenu === "shop" && (
          <div
            className="boj-mega"
            onMouseEnter={() => openWithDelay("shop")}
            onMouseLeave={closeWithDelay}
          >
            <div className="boj-mega-inner">
              <div className="boj-mega-links">
                {shopColumns.map((column) => (
                  <div className="boj-mega-col" key={column.title}>
                    <a className="boj-mega-link is-parent" href={column.href}>
                      {column.title}
                    </a>
                    {column.links.map((link) => (
                      <a className="boj-mega-link" href={link.href} key={link.label}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
              <div className="boj-mega-image">
                <a href={srcUrl("/products/tinted-mineral-dayscreen-spf-30-global")}>
                  <Image
                    src={asset("images/menu-tinted.jpg")}
                    alt="A row of tinted mineral dayscreen tubes"
                    width={1200}
                    height={562}
                  />
                </a>
              </div>
            </div>
          </div>
        )}

        {openMenu === "about" && (
          <div
            className="boj-mega boj-mega-about"
            onMouseEnter={() => openWithDelay("about")}
            onMouseLeave={closeWithDelay}
          >
            <div className="boj-mega-inner">
              <div className="boj-mega-links">
                <div className="boj-mega-col">
                  <Link className="boj-mega-link is-parent" href="/pages/about-page">
                    ABOUT US
                  </Link>
                </div>
                <div className="boj-mega-col">
                  <a
                    className="boj-mega-link is-parent"
                    href={srcUrl("/blogs/news")}
                  >
                    BLOG
                  </a>
                </div>
                <div className="boj-mega-col">
                  <a
                    className="boj-mega-link is-parent"
                    href={srcUrl("/pages/quiz-03-17-2025")}
                  >
                    TAKE SKIN QUIZ
                  </a>
                  <a
                    className="boj-mega-link"
                    href={srcUrl("/pages/quiz-03-17-2025")}
                  >
                    Build Your BOJ Routine
                  </a>
                  <a
                    className="boj-mega-link"
                    href={srcUrl("/pages/quiz-03-17-2025")}
                  >
                    Tinted Sunscreen Shade Finder Quiz
                  </a>
                </div>
              </div>
              <div className="boj-mega-image">
                <a href={srcUrl("/products/tinted-mineral-dayscreen-spf-30-global")}>
                  <Image
                    src={asset("images/menu-tinted.jpg")}
                    alt="A row of tinted mineral dayscreen tubes"
                    width={1200}
                    height={562}
                  />
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="boj-mobile-header">
          <div className="boj-mobile-side">
            <button
              type="button"
              className="boj-mobile-icon"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <IconMenu />
            </button>
            <button
              type="button"
              className="boj-mobile-icon"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <IconSearch />
            </button>
          </div>
          <Link href="/" className="boj-mobile-logo" aria-label="Beauty of Joseon home">
            <Image
              src={asset("images/logo.png")}
              alt="Beauty of Joseon"
              width={360}
              height={34}
              priority
            />
          </Link>
          <div className="boj-mobile-side">
            <a className="boj-mobile-icon" href={srcUrl("/account")} aria-label="Account">
              <IconPerson />
            </a>
            <button
              type="button"
              className="boj-mobile-icon"
              aria-label={`Cart, ${cartCount} items`}
              onClick={() => setCartOpen(true)}
            >
              <IconCart />
              <span className="boj-cart-count">{cartCount}</span>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="boj-mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="boj-mobile-menu-head">
            <p className="boj-mobile-menu-title">Menu</p>
            <button
              type="button"
              className="boj-drawer-close"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <IconClose className="h-4 w-4" />
            </button>
          </div>
          <nav className="boj-mobile-menu-list" aria-label="Mobile navigation">
            <div className="boj-mobile-menu-item">
              <button
                type="button"
                aria-expanded={mobileShopOpen}
                onClick={() => setMobileShopOpen((open) => !open)}
              >
                SHOP
                <IconChevronRight
                  className={`h-4 w-4 transition-transform${mobileShopOpen ? " rotate-90" : ""}`}
                />
              </button>
              {mobileShopOpen && (
                <div className="boj-mobile-sub">
                  <a href={srcUrl("/collections/shop-all")}>Shop All</a>
                  <a href={srcUrl("/pages/ingredients")}>Ingredients</a>
                  <a href={srcUrl("/collections/sunscreens")}>Sunscreen</a>
                  <a href={srcUrl("/collections/cleanser")}>Cleanser</a>
                  <a href={srcUrl("/collections/serum")}>Serum</a>
                  <a href={srcUrl("/collections/moisturizer")}>Moisturizer</a>
                  <a href={srcUrl("/collections/mask")}>Mask</a>
                </div>
              )}
            </div>
            {leftNav.slice(1).map((item) => (
              <div className="boj-mobile-menu-item" key={item.label}>
                <a href={item.href} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </a>
              </div>
            ))}
            {rightNav.map((item) => (
              <div className="boj-mobile-menu-item" key={item.label}>
                {item.href.startsWith("/") ? (
                  <Link href={item.href} onClick={() => setMobileOpen(false)}>
                    {item.label}
                    {item.label === "ABOUT" && <IconChevronRight className="h-4 w-4" />}
                  </Link>
                ) : (
                  <a href={item.href} onClick={() => setMobileOpen(false)}>
                    {item.label}
                    {item.label === "ABOUT" && <IconChevronRight className="h-4 w-4" />}
                  </a>
                )}
              </div>
            ))}
          </nav>
          <div className="boj-mobile-menu-image">
            <Image
              src={asset("images/menu-tinted.jpg")}
              alt="Tinted Mineral Dayscreen SPF 30"
              width={1200}
              height={562}
            />
          </div>
        </div>
      )}

      {searchOpen && (
        <div className="boj-search" role="dialog" aria-modal="true" aria-label="Search">
          <button
            type="button"
            className="boj-search-close"
            onClick={() => setSearchOpen(false)}
            aria-label="Close search"
          >
            <IconClose className="h-5 w-5" />
          </button>
          <div className="boj-search-inner">
            <div className="boj-search-bar">
              <IconSearch className="h-6 w-6 shrink-0" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search products, ingredients..."
                aria-label="Search"
              />
            </div>
            <div className="boj-search-results">
              {filtered.length === 0 ? (
                <p className="py-6 text-sm text-[#636262]">
                  No results for “{query}”.
                </p>
              ) : (
                filtered.map((item) =>
                  item.href.startsWith("/") ? (
                    <Link
                      href={item.href}
                      className="boj-search-result"
                      key={`${item.type}-${item.label}`}
                      onClick={() => setSearchOpen(false)}
                    >
                      <span>{item.label}</span>
                      <span className="boj-search-type">{item.type}</span>
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="boj-search-result"
                      key={`${item.type}-${item.label}`}
                    >
                      <span>{item.label}</span>
                      <span className="boj-search-type">{item.type}</span>
                    </a>
                  ),
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
