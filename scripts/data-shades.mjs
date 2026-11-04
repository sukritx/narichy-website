import { readFileSync, writeFileSync } from "node:fs";
const html = readFileSync("docs/research/beautyofjoseon/home-sections/shopify-section-template--29749638332788__section_tds_shade_carousel_VjCrcy.html", "utf8");
const cards = [];
const re = /<a href="([^"]+)" class="tds-shade-carousel__card([^"]*)"[^>]*data-index="(\d+)"[^>]*aria-label="([^"]*)"[\s\S]*?<img src="([^"]+)"[\s\S]*?<script type="application\/json" data-tds-variant="">\s*(\{[\s\S]*?\})\s*<\/script>/g;
let m;
while ((m = re.exec(html))) {
  try {
    const v = JSON.parse(m[6].replace(/&quot;/g, '"'));
    cards.push({ href: m[1], active: m[2].includes('is-active'), index: Number(m[3]), aria: m[4], img: m[5].replace(/&amp;/g, '&'), ...v });
  } catch (e) { console.log("parse err", e.message); }
}
const uniq = [];
const seen = new Set();
for (const c of cards) { if (seen.has(c.id)) continue; seen.add(c.id); uniq.push(c); }
uniq.sort((a,b) => a.index - b.index);
console.log(uniq.length);
console.log(JSON.stringify(uniq, null, 1));
writeFileSync("docs/research/beautyofjoseon/data-shades.json", JSON.stringify(uniq, null, 2));
