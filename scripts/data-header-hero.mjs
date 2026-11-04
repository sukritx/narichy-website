import { launch, connect, evaluate, close } from "./cdp.mjs";
import { writeFileSync } from "node:fs";

const proc = await launch();
const { send } = await connect();
await send("Page.enable");
await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
await send("Page.navigate", { url: "https://beautyofjoseon.com/" });
await new Promise((r) => setTimeout(r, 8000));

const data = await evaluate(send, `(() => {
  const abs = (u) => { try { return new URL(u, location.href).href; } catch { return u; } };
  const st = (el) => {
    if (!el) return null;
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return {
      text: (el.innerText || "").replace(/\\s+/g, " ").trim().slice(0, 300),
      rect: { x: +r.x.toFixed(1), y: +r.y.toFixed(1), w: +r.width.toFixed(1), h: +r.height.toFixed(1) },
      font: cs.fontFamily, size: cs.fontSize, weight: cs.fontWeight, lh: cs.lineHeight, ls: cs.letterSpacing,
      color: cs.color, bg: cs.backgroundColor, tt: cs.textTransform, align: cs.textAlign,
      pad: cs.padding, margin: cs.margin, border: cs.border, radius: cs.borderRadius,
    };
  };

  const ann = document.querySelector('.announcement__bar');
  const annText = [...document.querySelectorAll('.announcement__slide')].map(el => el.innerText.trim());
  const header = document.querySelector('header.theme__header');
  const navs = [...document.querySelectorAll('.header__desktop .navlink--toplevel')].map(a => ({ text: a.innerText.trim(), href: a.getAttribute('href'), style: st(a) }));
  const logo = document.querySelector('.header__desktop .logo__img--color img');

  const hero = document.querySelector('.slideshow__slide:not([aria-hidden="true"])') || document.querySelector('.slideshow');
  const slideEls = [...document.querySelectorAll('.slideshow__slide')];
  const slides = slideEls.map((el) => {
    const content = el.querySelector('.hero__content');
    const img = el.querySelector('img');
    const srcs = [...el.querySelectorAll('source')].map(s => ({ media: s.media, srcset: s.srcset.split(',')[0].trim() }));
    return {
      index: el.getAttribute('data-slide-index'),
      hidden: el.getAttribute('aria-hidden'),
      transform: el.style.transform,
      textColor: el.style.getPropertyValue('--text'),
      title: el.querySelector('.hero__title')?.innerText.trim(),
      desc: el.querySelector('.hero__description')?.innerText.trim(),
      btn: el.querySelector('.hero__button a')?.innerText.trim(),
      href: abs(el.querySelector('.hero__button a')?.getAttribute('href') || ''),
      align: el.querySelector('.hero__content__wrapper')?.className,
      img: img ? { src: abs(img.currentSrc || img.src), alt: img.alt, w: img.naturalWidth, h: img.naturalHeight } : null,
      sources: srcs,
      titleStyle: st(el.querySelector('.hero__title')),
      descStyle: st(el.querySelector('.hero__description')),
      btnStyle: st(el.querySelector('.hero__button a')),
      contentStyle: st(content),
    };
  });

  return {
    body: { font: getComputedStyle(document.body).fontFamily, bg: getComputedStyle(document.body).backgroundColor, color: getComputedStyle(document.body).color },
    announcement: { style: st(ann), texts: annText.slice(0, 12), wrapperBg: getComputedStyle(document.querySelector('.announcement__wrapper')).backgroundColor },
    header: { style: st(header), navs, logo: { src: abs(logo.currentSrc), w: logo.naturalWidth, h: logo.naturalHeight, rect: logo.getBoundingClientRect().toJSON() }, logoLinkStyle: st(document.querySelector('.header__desktop .header__logo__link')) },
    hero: { style: st(document.querySelector('.slideshow')), slides, dots: [...document.querySelectorAll('.flickity-page-dot')].length },
    sections: [...document.querySelectorAll('.shopify-section')].map(el => ({ id: el.id, bg: getComputedStyle(el).backgroundColor, rect: el.getBoundingClientRect().toJSON() })),
  };
})()`);

writeFileSync("docs/research/beautyofjoseon/data-header-hero.json", JSON.stringify(data, null, 2));
console.log(JSON.stringify(data.header, null, 2));
console.log(JSON.stringify(data.announcement, null, 2));
console.log(JSON.stringify(data.hero.style, null, 2));
console.log(JSON.stringify(data.hero.slides.map(s => ({ index: s.index, title: s.title, desc: s.desc, btn: s.btn, href: s.href, align: s.align?.replace('hero__content__wrapper frame__item ',''), img: s.img, sources: s.sources, titleStyle: s.titleStyle?.size + ' ' + s.titleStyle?.weight, descStyle: s.descStyle?.size })), null, 2));
close(proc);
