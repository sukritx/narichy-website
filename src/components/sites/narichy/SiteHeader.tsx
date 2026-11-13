"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LINE_OA, SHOPEE, leftNav, rightNav } from "./data";
import {
  IconChevronDown,
  IconChevronRight,
  IconClose,
  IconLine,
  IconMenu,
  IconShopee,
} from "./icons";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(true);

  const overlay = pathname === "/";
  const solid = !overlay || scrolled || mobileOpen;

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
      setShopOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className={`boj-header${solid ? " is-solid" : ""}`}>
        <div className="boj-header-inner">
          <nav className="boj-menu-left" aria-label="Primary">
            {leftNav.map((item) =>
              item.children ? (
                <div
                  className={`boj-nav-item has-children${shopOpen ? " is-open" : ""}`}
                  key={item.label}
                  onMouseEnter={() => setShopOpen(true)}
                  onMouseLeave={() => setShopOpen(false)}
                >
                  <button
                    type="button"
                    className="boj-nav-link boj-nav-toggle"
                    aria-haspopup="true"
                    aria-expanded={shopOpen}
                    onClick={() => setShopOpen((open) => !open)}
                  >
                    {item.label}
                    <IconChevronDown className="boj-nav-caret" />
                    <span className="boj-nav-underline" />
                  </button>
                  <ul className="boj-subnav">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link href={child.href} onClick={() => setShopOpen(false)}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="boj-nav-item" key={item.label}>
                  <Link className="boj-nav-link" href={item.href}>
                    {item.label}
                    <span className="boj-nav-underline" />
                  </Link>
                </div>
              ),
            )}
          </nav>

          <div className="boj-logo">
            <Link href="/" aria-label="Narichy Thailand home">
              <Image
                src="/images/logo/narichy-black-logo.png"
                alt="Narichy Thailand"
                width={2400}
                height={2400}
                priority
              />
            </Link>
          </div>

          <nav className="boj-menu-right" aria-label="Secondary">
            {rightNav.map((item) => (
              <div className="boj-nav-item" key={item.label}>
                {item.href.startsWith("/") ? (
                  <Link className="boj-nav-link" href={item.href}>
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
              src="/images/logo/narichy-black-logo.png"
              alt="Narichy Thailand"
              width={2400}
              height={2400}
              priority
            />
          </Link>
        </div>
      </header>

      {mobileOpen && (
        <div
          className="boj-mobile-menu-overlay"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
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
            {leftNav.map((item) =>
              item.children ? (
                <div className="boj-mobile-menu-group" key={item.label}>
                  <button
                    type="button"
                    className={`boj-mobile-menu-item boj-mobile-menu-parent${
                      mobileShopOpen ? " is-open" : ""
                    }`}
                    aria-expanded={mobileShopOpen}
                    onClick={() => setMobileShopOpen((open) => !open)}
                  >
                    {item.label}
                    <IconChevronRight className="boj-mobile-menu-caret" />
                  </button>
                  {mobileShopOpen && (
                    <div className="boj-mobile-sub">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="boj-mobile-menu-item" key={item.label}>
                  <Link href={item.href} onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                </div>
              ),
            )}
            {rightNav.map((item) => (
              <div className="boj-mobile-menu-item" key={item.label}>
                {item.href.startsWith("/") ? (
                  <Link href={item.href} onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                ) : (
                  <a href={item.href} onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <div className="boj-mobile-menu-item">
              <a
                className="boj-mobile-menu-external"
                href={SHOPEE}
                target="_blank"
                rel="noreferrer"
              >
                <IconShopee className="boj-mobile-menu-icon" />
                SHOP ON SHOPEE
              </a>
            </div>
            <div className="boj-mobile-menu-item">
              <a
                className="boj-mobile-menu-external"
                href={LINE_OA}
                target="_blank"
                rel="noreferrer"
              >
                <IconLine className="boj-mobile-menu-icon" />
                CHAT ON LINE
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
