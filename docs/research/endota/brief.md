# Endota reference → Narichy shop build brief

## Source routes observed

- Collection: `https://www.endotathailand.com/collections/products`
- Product: `https://www.endotathailand.com/collections/products/products/avocado-mint-foot-cream-90ml`

The reference is a Shopify "Underground"-style theme: green announcement strip, centered header, a 4-column product grid with category/sort controls, and a product page built as a two-column gallery + details layout. The product page includes a vertical thumbnail rail, title/price, variant selector, a full-width add-to-cart button (the source renders the localized label empty), Shopee/Lazada/LINE links, benefit list, ingredient/how-to-use sections, certification icons, and related products.

## Local routes

| Source | Local | Files |
| --- | --- | --- |
| `/collections/products` | `/collections/products` | `src/app/collections/products/page.tsx`, `ProductCollection.tsx` |
| (nav child) | `/collections/best-sellers` | `src/app/collections/best-sellers/page.tsx` |
| `/collections/products/products/<handle>` | `/products/<handle>` | `src/app/products/[handle]/page.tsx`, `ProductDetail.tsx` |
| legacy product URL | `/collections/products/products/<handle>` → 308 `/products/<handle>` | `src/app/collections/products/products/[handle]/page.tsx` |

## Product handles

- `/products/narichy-finn`
- `/products/finn-spray`
- `/products/finn-serum`
- `/products/cleansing-mousse-foam`
- `/products/finn-soap`
- `/products/finy-secret`

## Design decisions (blend with existing Narichy site)

- Reused `SiteHeader`, `SiteFooter`, announcement marquee, cart drawer, Inter/Amiri fonts, cream background, black CTA language, and Narichy red accents.
- Shop nav replaces the old external "BEST SELLERS" link with a `SHOP` dropdown containing `BEST SELLERS` and `ALL PRODUCTS`, on desktop hover/click and in the mobile drawer.
- Product page layout follows the source structure: sticky gallery with thumbnail rail, detail column, full-width CTA, Shopee/LINE secondary actions, native accordions, story section, and related products.
- No Lazada link anywhere. Shopee shop and LINE OA links are present in the footer, mobile menu, product CTAs, and product detail secondary actions.
- Collection cards expose vendor/category, Thai name, rating, price, compare-at price, and a working sort/category filter.

## Asset map

- Existing local product folders under `public/images/products/`.
- Optimized JPEG copies were created for page use (transparent PNGs flattened onto white so they blend with the card background).
- Cleansing Mousse Foam now uses the proper uploaded product photography (`IMG_4509`, `IMG_4504`, `IMG_4581`, `IMG_4582`, `IMG_4505`) optimized as `mousse-box.jpg`, `mousse-texture.jpg`, `mousse-care.jpg`, `mousse-benefits.jpg`, and `mousse-howto.jpg`. The pack is 100 ml, pH 4.5, alcohol-free and paraben-free.
- `public/images/products/finy-secret/*.svg` are editable brand-matched package renders for Finy Secret, because no Finy Secret photography was present in the supplied folder. They are deliberately code assets, not downloaded screenshots.

## Interactions verified

- Shop dropdown opens and lists both child routes.
- Mobile drawer opens with Shop children expanded, external links aligned, and a dismissible backdrop.
- Collection category/sort selects update the visible cards and count.
- Product variant selection updates the gallery image and price.
- Quantity changes the total on the add-to-cart button.
- Add to cart opens the existing Narichy cart drawer with the selected variant and quantity; checkout points to Shopee.
- All six product routes render with their own copy, specs, gallery, accordion content, and related products.
