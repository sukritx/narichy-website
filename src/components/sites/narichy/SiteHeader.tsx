"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { asset, leftNav, rightNav } from "./data";
import { IconClose, IconMenu } from "./icons";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className={`boj-header${solid ? " is-solid" : ""}`}>
        <div className="boj-header-inner">
          <nav className="boj-menu-left" aria-label="Primary">
            {leftNav.map((item) => (
              <div className="boj-nav-item" key={item.label}>
                <a className="boj-nav-link" href={item.href}>
                  {item.label}
                  <span className="boj-nav-underline" />
                </a>
              </div>
            ))}
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
                  </Link>
                ) : (
                  <a href={item.href} onClick={() => setMobileOpen(false)}>
                    {item.label}
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
