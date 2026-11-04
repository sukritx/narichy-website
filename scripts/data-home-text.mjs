import { launch, connect, evaluate, close } from "./cdp.mjs";
import { writeFileSync } from "node:fs";
const proc = await launch();
const { send } = await connect();
await send("Page.enable"); await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
await send("Page.navigate", { url: "https://beautyofjoseon.com/" });
await new Promise(r => setTimeout(r, 8000));
const data = await evaluate(send, `(() => {
  const txt = (sel) => { const el = document.querySelector(sel); return el ? el.innerText.replace(/\\s+/g,' ').trim() : null; };
  const allText = (sel) => [...document.querySelectorAll(sel)].map(el => el.innerText.replace(/\\s+/g,' ').trim());
  return {
    promo: { sub: txt('#shopify-section-template--29749638332788__section_double_fVUGtQ .hero__subheading'), title: txt('#shopify-section-template--29749638332788__section_double_fVUGtQ .hero__title'), rte: txt('#shopify-section-template--29749638332788__section_double_fVUGtQ .hero__rte'), btn: txt('#shopify-section-template--29749638332788__section_double_fVUGtQ .btn'), html: document.querySelector('#shopify-section-template--29749638332788__section_double_fVUGtQ .brick__block__image')?.outerHTML.slice(0,3000) },
    rewards: { text: txt('#shopify-section-template--29749638332788__instant_i2pqhj0_ux_gj5t_kem_bUbPGJ'), links: [...document.querySelectorAll('#shopify-section-template--29749638332788__instant_i2pqhj0_ux_gj5t_kem_bUbPGJ a')].map(a => ({text: a.innerText.trim(), href: a.href})) },
    ingredients: { heading: txt('#shopify-section-template--29749638332788__instant_rrl_ms_a0o_cma3_y_vn6_igiGhi h2, #shopify-section-template--29749638332788__instant_rrl_ms_a0o_cma3_y_vn6_igiGhi h3'), labels: [...document.querySelectorAll('#shopify-section-template--29749638332788__instant_rrl_ms_a0o_cma3_y_vn6_igiGhi a')].map(a => a.getAttribute('aria-label')) },
    instagram: { text: txt('#shopify-section-template--29749638332788__403564e5-5813-438b-99d8-8263518c706e'), html: document.querySelector('#shopify-section-template--29749638332788__403564e5-5813-438b-99d8-8263518c706e')?.innerText },
    gallery: { links: [...document.querySelectorAll('#shopify-section-template--29749638332788__ss_gallery_3_fdTCtN a')].map(a => a.href) },
    community: { heading: txt('#shopify-section-template--29749638332788__section_double_nWW9HC .hero__title'), eyebrow: txt('#shopify-section-template--29749638332788__section_double_nWW9HC .hero__media'), acc: allText('#shopify-section-template--29749638332788__section_double_nWW9HC details'), blogs: allText('#shopify-section-template--29749638332788__section_double_nWW9HC .blog-snippet__item'), img: document.querySelector('#shopify-section-template--29749638332788__section_double_nWW9HC .brick__block--images img')?.currentSrc },
    footer: { text: txt('#shopify-section-sections--29749721596276__footer'), links: [...document.querySelectorAll('#shopify-section-sections--29749721596276__footer a')].map(a => ({text: a.innerText.trim(), href: a.href})), html: document.querySelector('#shopify-section-sections--29749721596276__footer')?.outerHTML.slice(0, 9000) },
    mobileCommunity: { text: txt('#shopify-section-template--29749638332788__section_double_Y6mbHF'), html: document.querySelector('#shopify-section-template--29749638332788__section_double_Y6mbHF')?.outerHTML.slice(0,4000) },
  };
})()`);
writeFileSync("docs/research/beautyofjoseon/data-home-text.json", JSON.stringify(data, null, 2));
console.log(JSON.stringify(data, null, 1).slice(0, 12000));
close(proc);
