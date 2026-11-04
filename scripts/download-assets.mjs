/* eslint-disable @typescript-eslint/no-unused-vars */
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";

const root = "public/sites/beautyofjoseon";
const manifest = [];

const add = (src, file) => manifest.push({ src, file: `${root}/${file}` });
const CDN = "https://beautyofjoseon.com/cdn/shop/files/";
const ART = "https://beautyofjoseon.com/cdn/shop/articles/";

const hero = [
  ["tds_main_home_banner_global_pc.png", "hero-01-desktop.png", "tds_main_home_banner_global_mo.png", "hero-01-mobile.png"],
  ["tinted_tds_global_main_pc_0702.webp", "hero-02-desktop.webp", "tinted_tds_global_main_mo_0702.webp", "hero-02-mobile.webp"],
  ["red_bean_pc_us.png", "hero-03-desktop.png", "red_bean_mo_us.png", "hero-03-mobile.png"],
  ["DS_pc.webp", "hero-04-desktop.webp", "DS_mo.webp", "hero-04-mobile.webp"],
  ["19_0818_ReliefSunduo_ROW.jpg", "hero-05-desktop.jpg", "02_0820_ReliefSunduo_ROW.jpg", "hero-05-mobile.jpg"],
  ["pc_aa6c6096-4ce7-4960-994c-073bddf0e1b7.webp", "hero-06-desktop.webp", "mo_7d47ae20-baed-479c-b159-7c9539c6d93e.webp", "hero-06-mobile.webp"],
  ["pc_c8c7892b-6aa2-449b-8230-d58f07a5d661.webp", "hero-07-desktop.webp", "mo_ad641840-f615-4cd9-9ee8-a02116e44f58.webp", "hero-07-mobile.webp"],
  ["pc_e356a8a0-9b3e-4bea-a0c2-178707908db4.webp", "hero-08-desktop.webp", "01_0820_ReliefSun_ROW.jpg", "hero-08-mobile.jpg"],
  ["pc_c3701e9a-2461-4d0f-b10c-411e88aa94a5.webp", "hero-09-desktop.webp", "mo_89750dbc-bef4-433b-b301-194406d5812e.webp", "hero-09-mobile.webp"],
  ["pc.webp", "hero-10-desktop.webp", "mo_e319f4f4-ea6e-4e26-8f7e-3b5dc9c98546.webp", "hero-10-mobile.webp"],
];
for (const [d, dn, m, mn] of hero) {
  add(`${CDN}${d}?width=2000`, `images/${dn}`);
  add(`${CDN}${m}?width=900`, `images/${mn}`);
}

const products = [
  ["revive-ritual-eye-duo-thumbnail-1.jpg", "product-01.jpg"],
  ["Deep-Double-Cleansing-Duo_Beauty-of-Joseon_93963729-52106454434164.jpg", "product-02.jpg"],
  ["Glass-Skin-Duo_Beauty-of-Joseon_97213595-52105526378868.jpg", "product-03.jpg"],
  ["06_0818_GetGlowingRitualSet_ROW.jpg", "product-04.jpg"],
];
for (const [f, n] of products) add(`${CDN}${f}?crop=center&height=800&width=800`, `images/${n}`);

add(`${CDN}tinted_tds_global_wide_pc_0702.webp?width=1921`, "images/promo-tinted.webp");
add(`${CDN}TDS_homeBanner_row_pc.jpg?width=1200`, "images/menu-tinted.jpg");
add(`${CDN}boj-logo-text-default.png?width=480`, "images/logo.png");
add(`${CDN}a6be49d8180ffc3422598e291f74d788ffb4ea9f.png?crop=center&height=306&v=1754260296&width=3242`, "images/community-logo.png");

const shades = ["15C", "17N", "21W", "23N", "25W", "29N", "33N", "39W", "43W", "45N", "47N", "51N", "54N", "59N"];
for (const s of shades) add(`${CDN}global_${s}_TDS_shade.png?width=700`, `images/shade-${s}.png`);

add(`${CDN}boj-main-rewards-banner.webp?width=1200`, "images/rewards-box.webp");
add(`${CDN}2eabe7ee9-1e41-4a3d-99d9-acc319ba1503.jpg?width=1600`, "images/rewards-bg.jpg");

const ingredients = [
  ["fYc3vsR3y2QpoSJJ/10002layer-comp-3.jpg", "boj-main-ingredients-hover-ginseng.webp", "ing-ginseng", "Ginseng"],
  ["1U7v0m2gTQ0wj6L1/10001layer-comp-2.jpg", "boj-main-ingredients-hover-rice.webp", "ing-rice", "Rice"],
  ["8Q6t0m8gTQ0wj6L1/10000layer-comp-1.jpg", "boj-main-ingredients-hover-green_tea.webp", "ing-green-tea", "Green Tea"],
  ["9Q6t0m8gTQ0wj6L1/10003layer-comp-4.jpg", "boj-main-ingredients-hover-red_bean.webp", "ing-red-bean", "Red Bean"],
  ["5Q6t0m8gTQ0wj6L1/50000layer-comp-1.jpg", "boj-main-ingredients-hover-propolis.webp", "ing-propolis", "Propolis"],
  ["6Q6t0m8gTQ0wj6L1/50004layer-comp-5.jpg", "boj-main-ingredients-hover-green_plum.webp", "ing-green-plum", "Green Plum"],
  ["7Q6t0m8gTQ0wj6L1/50002layer-comp-3.jpg", "boj-main-ingredients-hover-centella.webp", "ing-centella", "Centella"],
];
// exact main URLs are read from extracted home-assets.json below

const homeAssets = JSON.parse(
  (await import("node:fs")).readFileSync("docs/research/beautyofjoseon/home-assets.json", "utf8"),
);
const mainIng = homeAssets.images.filter((i) => i.section?.includes("instant_rrl_ms") && /comp-\d/.test(i.src.split("/").pop() || "") && !/hover/.test(i.src));
const ingNames = ["ing-ginseng", "ing-rice", "ing-green-tea", "ing-red-bean", "ing-propolis", "ing-green-plum", "ing-centella"];
const seenMain = new Set();
let idx = 0;
for (const im of mainIng) {
  const base = im.src.split("/").pop().split("?")[0];
  if (seenMain.has(base) || idx >= ingNames.length) continue;
  seenMain.add(base);
  add(im.src.replace(/\?.*$/, "") + "?width=1080", `images/${ingNames[idx]}.jpg`);
  idx++;
}
const hoverFiles = [
  ["boj-main-ingredients-hover-ginseng.webp", "ing-ginseng-hover.webp"],
  ["boj-main-ingredients-hover-rice.webp", "ing-rice-hover.webp"],
  ["boj-main-ingredients-hover-green_tea.webp", "ing-green-tea-hover.webp"],
  ["boj-main-ingredients-hover-red_bean.webp", "ing-red-bean-hover.webp"],
  ["boj-main-ingredients-hover-propolis.webp", "ing-propolis-hover.webp"],
  ["boj-main-ingredients-hover-green_plum.webp", "ing-green-plum-hover.webp"],
  ["boj-main-ingredients-hover-centella.webp", "ing-centella-hover.webp"],
];
for (const [f, n] of hoverFiles) add(`https://cdn.shopify.com/s/files/1/0558/4135/7989/files/${f}?width=1080`, `images/${n}`);

const ig = ["1", "2", "3", "4", "5", "6"].map((n) => [`boj-ig-mar-${n}.webp`, `ig-${n}.webp`]);
for (const [f, n] of ig) add(`${CDN}${f}?width=800`, `images/${n}`);

add(`${CDN}tinted_tds_global_page_0702.jpg?width=1440`, "images/community-hero.jpg");
add(`${CDN}tinted_tds_global_page_0702.jpg?width=900`, "images/who-are-we.jpg");
add(`${ART}20251016_BOJ_2057-F_316b92df-3d4c-4940-b856-7a90734c705a_360x.png?v=1773128363`, "images/blog-revive.png");
add(`${ART}cleanser_3_360x.jpg?v=1749114585`, "images/blog-cleansing.jpg");

// About page
add(`${CDN}head-banner_d299a21f-0e11-499b-bc7a-5783f4102713.png?width=2400`, "images/about-hero.png");
add(`${CDN}02_0723___logo_600x375_dea7bce7-f051-4dbf-9abf-f0e116ff329f.jpg?width=600`, "images/about-mission.jpg");
add(`${CDN}4ca9da5421c7a0527fe1939d0bb1c156.png?width=2000`, "images/about-full.png");
const aboutIng = [
  ["3_27d52df9-bfc7-4d17-819f-f2cfc703fb6a.png", "about-ing-ginseng.png"],
  ["6_bb281d61-9703-4d8f-a371-cb995fc671ea.png", "about-ing-rice.png"],
  ["7_9451909f-2719-4e92-ba80-5bfa6c8e95be.png", "about-ing-green-plum.png"],
  ["10_3ac3be24-f2fb-450e-9bcf-03d5c11e99bb.png", "about-ing-propolis.png"],
  ["9_fd0c8d2b-bdc1-4260-8d5e-2640ace97160.png", "about-ing-green-tea.png"],
  ["8_d1379f20-c6dc-4587-b751-d15e12123712.png", "about-ing-centella.png"],
  ["2_8f3f0e9f-3b65-43e4-9ef7-1c8b6c1e1c58.png", "about-ing-red-bean.png"],
  ["5_8f3f0e9f-3b65-43e4-9ef7-1c8b6c1e1c58.png", "about-ing-green-plum-2.png"],
];
// pull exact about ingredient and press URLs from extracted data
const aboutData = JSON.parse((await import("node:fs")).readFileSync("docs/research/beautyofjoseon/data-about.json", "utf8"));
for (const [i, col] of aboutData.ingredients.columns.entries()) {
  const url = col.img?.src;
  if (url) add(url.replace(/\?.*$/, "") + "?width=900", `images/about-ingredient-${i + 1}.png`);
}
for (const [i, col] of aboutData.press.columns.entries()) {
  const url = col.img?.src;
  if (url) add(url.replace(/\?.*$/, "") + "?width=600", `images/about-press-${i + 1}.png`);
}

// UGC
const ugc = JSON.parse((await import("node:fs")).readFileSync("docs/research/beautyofjoseon/ugc-desktop.json", "utf8"));
const vids = ugc.widgets[0].videos;
for (const [i, v] of vids.entries()) {
  add(v.poster.url, `ugc/poster-${i + 1}.webp`);
  add(v.meta.convertedH264.videoUrl, `ugc/video-${i + 1}.mp4`);
  const c = v.commercials?.[0];
  if (c?.previewImageSrc) add(c.previewImageSrc + "?width=200", `ugc/product-${i + 1}.jpg`);
}

// Fonts
const fonts = [
  ["https://beautyofjoseon.com/cdn/fonts/inter/inter_n4.b2a3f24c19b4de56e8871f609e73ca7f6d2e2bb9.woff2", "inter-400.woff2"],
  ["https://beautyofjoseon.com/cdn/fonts/inter/inter_n5.d7101d5e168594dd06f56f290dd759fba5431d97.woff2", "inter-500.woff2"],
  ["https://beautyofjoseon.com/cdn/fonts/figtree/figtree_n4.3c0838aba1701047e60be6a99a1b0a40ce9b8419.woff2", "figtree-400.woff2"],
  ["https://beautyofjoseon.com/cdn/fonts/amiri/amiri_n4.fee8c3379b68ea3b9c7241a63b8a252071faad52.woff2", "amiri-400.woff2"],
  ["https://beautyofjoseon.com/cdn/fonts/amiri/amiri_n7.18bdf9995a65958ebe1ecc6a8e58369f2e5fde36.woff2", "amiri-700.woff2"],
  ["https://beautyofjoseon.com/cdn/shop/files/proximasera-regular.woff2?v=1752115109", "proxima-sera-regular.woff2"],
  ["https://beautyofjoseon.com/cdn/shop/files/proximasera-medium.woff2?v=1752115109", "proxima-sera-medium.woff2"],
  ["https://beautyofjoseon.com/cdn/shop/files/proximasera-semibold.woff2?v=1752115109", "proxima-sera-semibold.woff2"],
  ["https://assets.instant.so/sites/7f5G0FzudEYbOVGF/assets/oFrIfabrOhqvoPfZ/fontspring-demo-proximasera-medium.woff2", "proxima-sera-demo-medium.woff2"],
  ["https://assets.instant.so/sites/7f5G0FzudEYbOVGF/assets/Hc39CAEYyal5Pcs9/fontspring-demo-proximanova-medium.woff2", "proxima-nova-medium.woff2"],
  ["https://assets.instant.so/sites/7f5G0FzudEYbOVGF/assets/JPkIwHQBOl9jyZjO/fontspring-demo-proximanova-semibold.woff2", "proxima-nova-semibold.woff2"],
  ["https://assets.instant.so/sites/7f5G0FzudEYbOVGF/assets/yQCjPadYPVOjNaNU/fontspring-demo-proximanova-light.woff2", "proxima-nova-light.woff2"],
];
for (const [u, n] of fonts) add(u, `fonts/${n}`);

const results = [];
const queue = [...manifest];
let active = 0;
async function worker() {
  while (queue.length) {
    const item = queue.shift();
    try {
      mkdirSync(dirname(item.file), { recursive: true });
      if (existsSync(item.file)) {
        results.push({ ...item, skipped: true });
        continue;
      }
      const res = await fetch(item.src, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
          Referer: "https://beautyofjoseon.com/",
        },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 200) throw new Error(`too small ${buf.length}`);
      writeFileSync(item.file, buf);
      results.push({ ...item, bytes: buf.length, type: res.headers.get("content-type") });
    } catch (e) {
      results.push({ ...item, error: String(e) });
    }
  }
}
await Promise.all(Array.from({ length: 4 }, worker));
writeFileSync("docs/research/beautyofjoseon/asset-manifest.json", JSON.stringify(results, null, 2));
const errors = results.filter((r) => r.error);
console.log("total", results.length, "errors", errors.length);
for (const e of errors) console.log("ERR", e.src, e.error);
console.log("bytes MB", (results.reduce((a, r) => a + (r.bytes || 0), 0) / 1024 / 1024).toFixed(1));

