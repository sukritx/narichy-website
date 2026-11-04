import { launch, connect, evaluate, close } from "./cdp.mjs";
const proc = await launch();
const { send } = await connect();
await send("Page.enable"); await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
await send("Page.navigate", { url: "http://localhost:3000/" });
await new Promise(r => setTimeout(r, 5000));
console.log(await evaluate(send, `(() => {
  const S = (el) => { if (!el) return null; const r = el.getBoundingClientRect(); const cs = getComputedStyle(el); return {text:(el.innerText||'').replace(/\\s+/g,' ').trim().slice(0,40), rect:[Math.round(r.x),Math.round(r.y),Math.round(r.width),Math.round(r.height)], font:cs.fontFamily, size:cs.fontSize, weight:cs.fontWeight, lh:cs.lineHeight, bg:cs.backgroundColor, color:cs.color, pad:cs.padding, margin:cs.margin, display:cs.display}; };
  const q = (s) => document.querySelector(s);
  const sections = [...document.querySelectorAll('main > section, main > div')].map(el => ({cls: el.className, rect: el.getBoundingClientRect().toJSON()}));
  return JSON.stringify({
    ann: S(q('.boj-announcement')),
    header: S(q('.boj-header')),
    logo: S(q('.boj-logo img')),
    hero: S(q('.boj-hero')),
    heroCopy: S(q('.boj-hero-copy')),
    best: S(q('.boj-best')),
    bestHeading: S(q('.boj-best-heading')),
    bestGrid: S(q('.boj-best-grid')),
    productImg: S(q('.boj-product-image')),
    productPrice: S(q('.boj-price-bar')),
    promo: S(q('.boj-promo')),
    promoCopy: S(q('.boj-promo-copy')),
    headingLoved: S(q('.is-loved')),
    ugc: S(q('.boj-ugc')),
    ugcCard: S(q('.boj-ugc-card')),
    ugcAdd: S(q('.boj-ugc-add')),
    shade: S(q('.boj-shade')),
    shadeHeading: S(q('.boj-shade-heading')),
    shadeSlider: S(q('.boj-shade-slider')),
    shadeActive: S(q('.boj-shade-card.is-active')),
    shadeActiveImg: S(q('.boj-shade-card.is-active img')),
    swatches: S(q('.boj-swatches')),
    shadeTitle: S(q('.boj-shade-product-title')),
    shadeAdd: S(q('.boj-shade-add')),
    shadeView: S(q('.boj-shade-view')),
    rewards: S(q('.boj-rewards')),
    rewardsImg: S(q('.boj-rewards-image')),
    rewardsPanel: S(q('.boj-rewards-panel')),
    ingHeading: S(q('.boj-heading-italic-serif')),
    ing: S(q('.boj-ingredients')),
    ingCard: S(q('.boj-ingredient-card')),
    galleryHead: S(q('.boj-instagram-heading')),
    gallery: S(q('.boj-gallery')),
    community: S(q('.boj-community')),
    footer: S(q('.boj-footer')),
    sections,
  }, null, 1);
})()`));
close(proc);
