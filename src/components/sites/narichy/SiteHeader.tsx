"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { asset, leftNav, rightNav, srcUrl } from "./data";
import { IconChevronRight, IconClose, IconMenu } from "./icons";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<"about" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const overlay = pathname === "/";
  const solid = !overlay || scrolled || openMenu !== null || mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMobileOpen(false);
      setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openWithDelay = (menu: "about") => {
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
            <Link href="/" aria-label="Narichy Thailand home">
              <Image
                src="/images/black-logo.png"
                alt="Narichy Thailand"
                width={2400}
                height={2400}
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
          </nav>
        </div>

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
          </div>
          <Link href="/" className="boj-mobile-logo" aria-label="Narichy Thailand home">
            <Image
              src="/images/black-logo.png"
              alt="Narichy Thailand"
              width={2400}
              height={2400}
              priority
            />
          </Link>
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
            {leftNav.map((item) => (
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
    </>
  );
}
