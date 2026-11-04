# Beauty of Joseon — clone brief

Source origin: `https://beautyofjoseon.com` (Shopify, Broadcast theme + Instant page sections + Videowise UGC widget).

## Routes

| Source | Local | Notes |
| --- | --- | --- |
| `/` | `/` | Home page. Replaces the untouched template homepage. |
| `/pages/about-page` | `/pages/about-page` | About page, preserved pathname. |

Everything else (products, collections, rewards, quizzes, editorial, account, cart checkout) is out of scope and links back to the source origin.

## Files

- `src/app/page.tsx`, `src/app/pages/about-page/page.tsx` — route composition.
- `src/components/sites/beautyofjoseon/` — all site components, data, icons, cart store, and scoped styles (`boj.css`).
- `public/sites/beautyofjoseon/` — downloaded production images, videos, and fonts.
- `docs/research/beautyofjoseon/` — extraction JSON, section HTML, UGC JSON, and asset manifest.
- `docs/design-references/` — source and local screenshots at desktop/mobile with labelled scroll positions.

## Design tokens

- Body: Inter 400/500, 16 px desktop, 14 px mobile; `#212121` on `#fcfbf9`.
- Serif headings: Proxima Sera Regular / Medium. Hero overlay titles use the same family.
- Accent sections: beige `#dfc7a8` / shade-derived `#e7c8b0`; rewards and community `#fff5f8`; footer `#f8e4e9`.
- Buttons: Figtree, uppercase, 0.1em tracking, square 1 px black border.
- Announcement: 37 px black ticker. Header: 87 px desktop / 70 px mobile, sticky, transparent over the home hero and solid cream after scroll.

## Page structure

Home (desktop): announcement → header → hero slideshow (10 slides, 6 s autoplay, dots, hover arrows, touch swipe) → Best Sellers (4 static cards) → tinted promo split → UGC heading + 10-card shoppable video carousel → shade carousel (14 shades, live background/text colour, swatches, compare modal) → rewards split → Hanbang ingredients carousel → Instagram gallery → community/accordion/blog panel → footer.

Home (mobile): same content but rewards appears before the shade carousel (source renders a mobile rewards hero), the shade section is followed by a mobile-only Learn More panel, and ingredient cards show the uncropped 2:3 artwork. UGC is a centered, swipeable card carousel.

About: desktop and mobile both have hero banner → Who Are We? → Our Mission → full-bleed image → What is Hanbang? → ingredient carousel → Featured in the Press → footer. Mobile swaps in the portrait hero artwork, stacks Who Are We? text above the group image, and uses single-card horizontal carousels.

## Interactions

- Mega menu with real source destinations, About dropdown, mobile pink drawer with image.
- Header search overlay with client-side product/ingredient filtering.
- Cart drawer + header count; UGC Add to cart opens the drawer.
- Hero autoplay/swipe/dots; shade carousel arrows/swatches/compare modal; ingredient and press horizontal scrolling; community accordions; newsletter confirmation.
- All primary outbound links preserve their real source destinations.
