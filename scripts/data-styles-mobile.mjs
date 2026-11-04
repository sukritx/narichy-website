import { launch, connect, evaluate, close } from "./cdp.mjs";
import { writeFileSync } from "node:fs";

const proc = await launch();
const { send } = await connect();
await send("Page.enable");
await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
await send("Page.navigate", { url: "https://beautyofjoseon.com/" });
await new Promise((r) => setTimeout(r, 8000));

const data = await evaluate(send, `(() => {
  const S = (el) => {
    if (!el) return null;
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return {
      rect: { x: +r.x.toFixed(1), y: +r.y.toFixed(1), w: +r.width.toFixed(1), h: +r.height.toFixed(1) },
      font: cs.fontFamily, size: cs.fontSize, weight: cs.fontWeight, lh: cs.lineHeight, ls: cs.letterSpacing,
      color: cs.color, bg: cs.backgroundColor, tt: cs.textTransform, align: cs.textAlign, pos: cs.position,
      pad: cs.padding, margin: cs.margin, gap: cs.gap, radius: cs.borderRadius, border: cs.border, display: cs.display,
    };
  };
  const q = (sel) => document.querySelector(sel);
  const qa = (sel) => [...document.querySelectorAll(sel)];
  const sec = (id) => [...qa('.shopify-section')].find(el => el.id.includes(id));
  const best = sec('section_collection_N8HAfU');
  const promo = sec('section_double_fVUGtQ');
  const shade = sec('section_tds_shade_carousel');
  const rewards = sec('instant_i2pqhj0');
  const ing = sec('instant_rrl_ms');
  const gallery = sec('ss_gallery_3');
  const footer = q('#shopify-section-sections--29749721596276__footer footer');
  const mob = sec('section_double_Y6mbHF');
  return {
    globals: { body: S(document.body), header: S(q('header.theme__header')), logo: S(q('.header__desktop .logo__img--color img, .header__mobile .logo__img--color img, .logo__img--color img')), nav: S(q('.navlink--toplevel')), menuToggle: S(q('.header__mobile__button--nav')), ann: S(q('.announcement__bar')) },
    hero: { section: S(q('.slideshow')), slide: S(q('.slideshow__slide')), img: S(q('.slideshow__slide img')), dot: S(q('.flickity-page-dot')), arrow: S(q('.flickity-button')) },
    best: { section: S(best.querySelector('section')), heading: S(best.querySelector('.grid__heading-title')), grid: S(best.querySelector('.grid')), item: S(best.querySelector('.grid-item')), image: S(best.querySelector('.product-item__image')), title: S(best.querySelector('.product-item__title')), cutline: S(best.querySelector('.product-item__cutline')), price: S(best.querySelector('.product-item__price__holder')), select: S(best.querySelector('select')), priceText: S(best.querySelector('.product-item__price__text')) },
    promo: { section: S(promo.querySelector('section')), brick: S(promo.querySelector('.brick__section')), imageBlock: S(promo.querySelector('.brick__block--images')), textBlock: S(promo.querySelector('.brick__block--text')), content: S(promo.querySelector('.hero__content')), sub: S(promo.querySelector('.hero__subheading')), title: S(promo.querySelector('.hero__title')), rte: S(promo.querySelector('.hero__rte')), btn: S(promo.querySelector('.btn')) },
    shade: { section: S(shade.querySelector('.tds-shade-carousel')), inner: S(shade.querySelector('.tds-shade-carousel__inner')), heading: S(shade.querySelector('.tds-shade-carousel__heading')), slider: S(shade.querySelector('.tds-shade-carousel__slider')), cardActive: S(shade.querySelector('.tds-shade-carousel__card.is-active')), imgActive: S(shade.querySelector('.tds-shade-carousel__card.is-active img')), details: S(shade.querySelector('.tds-shade-carousel__details')), swatch: S(shade.querySelector('.tds-shade-carousel__swatch')), count: S(shade.querySelector('.tds-shade-carousel__count')), productTitle: S(shade.querySelector('.tds-shade-carousel__product-title')), add: S(shade.querySelector('.tds-shade-carousel__add')), arrow: S(shade.querySelector('.tds-shade-carousel__arrow')) },
    rewards: { section: S(rewards), img: S(rewards.querySelector('.instant-image__main')), link: S(rewards.querySelector('a.iFBlgc7gLRhNreQ3u')), eyebrow: S([...rewards.querySelectorAll('h3')].find(h => h.innerText.includes('Members'))), title: S([...rewards.querySelectorAll('h2')].find(h => h.innerText.includes('Join'))), body: S([...rewards.querySelectorAll('p')].find(p => p.innerText.includes('Redeem'))), full: S([...rewards.querySelectorAll('a,button')].filter(el => /SIGN UP/i.test(el.innerText)).pop()) },
    ing: { section: S(ing.querySelector('.instant-slider-container')), slide: S(ing.querySelector('.instant-slider-slide')), img: S(ing.querySelector('.instant-slider-slide img')), prev: S(ing.querySelector('.instant-slider-button-prev')), next: S(ing.querySelector('.instant-slider-button-next')) },
    gallery: { section: S(gallery), slide: S(gallery.querySelector('.swiper-slide')) },
    community: { section: S(mob), img: S(mob?.querySelector('.brick__block--images img')), content: S(mob?.querySelector('.hero__content')), title: S(mob?.querySelector('.hero__title')), logo: S(mob?.querySelector('.hero__media img')), accordion: S(mob?.querySelector('details.accordion')), blogItem: S(mob?.querySelector('.blog-snippet__item')) },
    footer: { wrapper: S(footer), inner: S(footer.querySelector('.site-footer')), title: S(footer.querySelector('.footer__block__title')), input: S(footer.querySelector('input[type=email]')), button: S(footer.querySelector('button')), quicklink: S(footer.querySelector('.footer__quicklinks a')), blocks: S(footer.querySelector('.footer__blocks')) },
  };
})()`);
writeFileSync("docs/research/beautyofjoseon/data-styles-home-mobile.json", JSON.stringify(data, null, 2));
console.log(JSON.stringify(data, null, 1).slice(0, 12000));
close(proc);
