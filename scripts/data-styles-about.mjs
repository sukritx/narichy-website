import { launch, connect, evaluate, close } from "./cdp.mjs";
import { writeFileSync } from "node:fs";
const proc = await launch();
const { send } = await connect();
await send("Page.enable"); await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
await send("Page.navigate", { url: "https://beautyofjoseon.com/pages/about-page" });
await new Promise(r => setTimeout(r, 8000));
const d = await evaluate(send, `(() => {
  const S = (el) => { if (!el) return null; const cs = getComputedStyle(el); const r = el.getBoundingClientRect(); return {rect:[+r.x.toFixed(1),+r.y.toFixed(1),+r.width.toFixed(1),+r.height.toFixed(1)], font:cs.fontFamily, size:cs.fontSize, weight:cs.fontWeight, lh:cs.lineHeight, ls:cs.letterSpacing, color:cs.color, bg:cs.backgroundColor, tt:cs.textTransform, align:cs.textAlign, pad:cs.padding, margin:cs.margin, border:cs.border, radius:cs.borderRadius}; };
  const sec = (id) => [...document.querySelectorAll('.shopify-section')].find(e => e.id.includes(id));
  const who = sec('section_double_TLVMpt'); const mission = sec('section_rich_text_YELqmQ'); const han = sec('section_rich_text_LNzyt3'); const ing = sec('section_columns_Tz7Xkn'); const press = sec('section_columns_LUUwTX'); const hero = sec('0c6d7da3');
  const ingItem = ing.querySelector('.grid-item'); const pressItem = press.querySelector('.grid-item');
  return JSON.stringify({
    hero: { section: S(hero), htmlClass: hero.className },
    who: { section: S(who), img: S(who.querySelector('.brick__block--images')), content: S(who.querySelector('.hero__content')), title: S(who.querySelector('.hero__title')), rte: S(who.querySelector('.hero__rte')), sub: S(who.querySelector('.hero__subheading')), rteHtml: who.querySelector('.hero__rte')?.innerHTML },
    mission: { section: S(mission), content: S(mission.querySelector('.hero__content')), title: S(mission.querySelector('.hero__title')), media: S(mission.querySelector('.hero__media img')), rte: S(mission.querySelector('.hero__rte')), rteHtml: mission.querySelector('.hero__rte')?.innerHTML },
    han: { section: S(han), content: S(han.querySelector('.hero__content')), title: S(han.querySelector('.hero__title')), rte: S(han.querySelector('.hero__rte')), rteHtml: han.querySelector('.hero__rte')?.innerHTML },
    ing: { section: S(ing), heading: S(ing.querySelector('h2')), grid: S(ing.querySelector('.grid')), item: S(ingItem), image: S(ingItem.querySelector('.column__image')), title: S(ingItem.querySelector('.column__heading')), text: S(ingItem.querySelector('.column__content p')), btn: S(ingItem.querySelector('.btn')), content: S(ingItem.querySelector('.column__content')) },
    press: { section: S(press), heading: S(press.querySelector('.grid__heading')), grid: S(press.querySelector('.grid')), item: S(pressItem), image: S(pressItem.querySelector('.column__image')), sub: S(pressItem.querySelector('.column__subheading')), title: S(pressItem.querySelector('.column__heading')), btn: S(pressItem.querySelector('.column__btn')), btnHtml: pressItem.querySelector('.column__btn')?.innerHTML },
  }, null, 1);
})()`);
writeFileSync("docs/research/beautyofjoseon/data-styles-about.json", d);
console.log(d.slice(0, 12000));
close(proc);
