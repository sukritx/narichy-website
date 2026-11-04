import { launch, connect, evaluate, close } from "./cdp.mjs";
import { writeFileSync } from "node:fs";
const proc = await launch();
const { send } = await connect();
await send("Page.enable"); await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
await send("Page.navigate", { url: "https://beautyofjoseon.com/pages/about-page" });
await new Promise(r => setTimeout(r, 8000));
const data = await evaluate(send, `(() => {
  const sec = (id) => [...document.querySelectorAll('.shopify-section')].find(el => el.id.includes(id));
  const txt = (el) => el ? el.innerText.replace(/\\s+/g,' ').trim() : null;
  const abs = (u) => { try { return new URL(u, location.href).href; } catch { return u; } };
  const imgs = (el) => el ? [...el.querySelectorAll('img')].map(img => ({ src: abs(img.currentSrc || img.src), alt: img.alt, w: img.naturalWidth, h: img.naturalHeight, rect: img.getBoundingClientRect().toJSON() })) : [];
  const styles = (el) => { if (!el) return null; const cs = getComputedStyle(el); return { font: cs.fontFamily, size: cs.fontSize, weight: cs.fontWeight, lh: cs.lineHeight, color: cs.color, bg: cs.backgroundColor, pad: cs.padding, tt: cs.textTransform, ls: cs.letterSpacing, align: cs.textAlign, rect: el.getBoundingClientRect().toJSON() }; };
  const hero = sec('0c6d7da3');
  const who = sec('section_double_TLVMpt');
  const mission = sec('section_rich_text_YELqmQ');
  const img2 = sec('section_hero_RTgrH8');
  const hanbang = sec('section_rich_text_LNzyt3');
  const ing = sec('section_columns_Tz7Xkn');
  const press = sec('section_columns_LUUwTX');
  const columns = (s) => [...s.querySelectorAll('.grid-item')].map(item => ({
    text: txt(item),
    img: imgs(item)[0] || null,
    sub: txt(item.querySelector('.column__subheading')),
    heading: txt(item.querySelector('.column__heading, .column__title, h3, h4')),
    title: txt(item.querySelector('.column__content')),
    link: item.querySelector('a')?.href || null,
    btn: txt(item.querySelector('.column__btn, .btn')),
    html: item.outerHTML.length,
  }));
  return {
    hero: { imgs: imgs(hero), style: styles(hero), html: hero?.outerHTML.slice(0,2500) },
    who: { text: txt(who), img: imgs(who)[0], html: who?.outerHTML.slice(0,6000) },
    mission: { text: txt(mission), img: imgs(mission)[0], style: styles(mission?.querySelector('.hero__title')) },
    img2: { imgs: imgs(img2) },
    hanbang: { text: txt(hanbang) },
    ingredients: { heading: txt(ing.querySelector('h2')), columns: columns(ing) },
    press: { heading: txt(press.querySelector('h2')), columns: columns(press) },
    bodyBg: getComputedStyle(document.body).backgroundColor,
    headerBg: getComputedStyle(document.querySelector('header.theme__header')).backgroundColor,
  };
})()`);
writeFileSync("docs/research/beautyofjoseon/data-about.json", JSON.stringify(data, null, 2));
console.log(JSON.stringify({ hero: data.hero, whoText: data.who.text, mission: data.mission, hanbang: data.hanbang, ingredients: data.ingredients, press: data.press, bodyBg: data.bodyBg, headerBg: data.headerBg }, null, 1).slice(0, 12000));
close(proc);
