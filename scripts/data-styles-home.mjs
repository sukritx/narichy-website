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
  const S = (el) => {
    if (!el) return null;
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return {
      rect: { x: +r.x.toFixed(1), y: +r.y.toFixed(1), w: +r.width.toFixed(1), h: +r.height.toFixed(1) },
      font: cs.fontFamily, size: cs.fontSize, weight: cs.fontWeight, lh: cs.lineHeight, ls: cs.letterSpacing,
      color: cs.color, bg: cs.backgroundColor, tt: cs.textTransform, align: cs.textAlign, pos: cs.position,
      pad: cs.padding, margin: cs.margin, gap: cs.gap, radius: cs.borderRadius, border: cs.border, opacity: cs.opacity,
    };
  };
  const q = (sel) => document.querySelector(sel);
  const qa = (sel) => [...document.querySelectorAll(sel)];
  const sec = (id) => [...qa('.shopify-section')].find(el => el.id.includes(id));

  const best = sec('section_collection_N8HAfU');
  const promo = sec('section_double_fVUGtQ');
  const ugc = sec('1752070979cca9e2d5');
  const shade = sec('section_tds_shade_carousel');
  const rewards = sec('instant_i2pqhj0');
  const ingHead = sec('403564e5');
  const ing = sec('instant_rrl_ms');
  const galleryHead = sec('1709087910bfcdfa4e');
  const gallery = sec('ss_gallery_3');
  const community = sec('section_double_nWW9HC');
  const footer = q('#shopify-section-sections--29749721596276__footer footer');

  return {
    best: {
      section: S(best.querySelector('section')), headingWrap: S(best.querySelector('.grid__heading-bar')), heading: S(best.querySelector('.grid__heading-title')), grid: S(best.querySelector('.grid')), item: S(best.querySelector('.grid-item')), image: S(best.querySelector('.product-item__image')), info: S(best.querySelector('.product-information')), title: S(best.querySelector('.product-item__title')), cutline: S(best.querySelector('.product-item__cutline')), price: S(best.querySelector('.product-item__price__holder')), rating: S(best.querySelector('.oke-sr-count')), select: S(best.querySelector('select')), priceText: S(best.querySelector('.product-item__price__text')),
    },
    promo: {
      section: S(promo.querySelector('section')), brick: S(promo.querySelector('.brick__section')), imageBlock: S(promo.querySelector('.brick__block--images')), textBlock: S(promo.querySelector('.brick__block--text')), content: S(promo.querySelector('.hero__content')), sub: S(promo.querySelector('.hero__subheading')), title: S(promo.querySelector('.hero__title')), rte: S(promo.querySelector('.hero__rte')), btn: S(promo.querySelector('.btn')),
    },
    ugc: {
      section: S(ugc), widget: S(ugc.querySelector('.reeview-app-widget')),
    },
    shade: {
      section: S(shade.querySelector('.tds-shade-carousel__inner')),
      heading: S(shade.querySelector('.tds-shade-carousel__heading')), subtitle: S(shade.querySelector('.tds-shade-carousel__subtitle')),
      slider: S(shade.querySelector('.tds-shade-carousel__slider')), card: S(shade.querySelector('.tds-shade-carousel__card')), cardActive: S(shade.querySelector('.tds-shade-carousel__card.is-active')),
      imgActive: S(shade.querySelector('.tds-shade-carousel__card.is-active img')), arrows: S(shade.querySelector('.tds-shade-carousel__arrow')),
      details: S(shade.querySelector('.tds-shade-carousel__details')), swatch: S(shade.querySelector('.tds-shade-carousel__swatch')), swatchActive: S(shade.querySelector('.tds-shade-carousel__swatch.is-active')),
      count: S(shade.querySelector('.tds-shade-carousel__count')), productTitle: S(shade.querySelector('.tds-shade-carousel__product-title')), compare: S(shade.querySelector('.tds-shade-carousel__compare-trigger')), add: S(shade.querySelector('.tds-shade-carousel__add')), link: S(shade.querySelector('.tds-shade-carousel__learn-more')),
    },
    rewards: {
      section: S(rewards), bg: S(rewards.querySelector('img.instant-fill')), img: S(rewards.querySelector('.instant-image__main')), link: S(rewards.querySelector('a.iFBlgc7gLRhNreQ3u')), eyebrow: S([...rewards.querySelectorAll('h3')].find(h => h.innerText.includes('Members'))), title: S([...rewards.querySelectorAll('h2')].find(h => h.innerText.includes('Join'))), body: S([...rewards.querySelectorAll('p')].find(p => p.innerText.includes('Redeem'))), btn: S([...rewards.querySelectorAll('a,button')].find(el => /SIGN UP/i.test(el.innerText))),
    },
    ing: {
      headSection: S(ingHead), heading: S(ingHead?.querySelector('h2')),
      section: S(ing), sliderWrap: S(ing.querySelector('.instant-slider-container')), slider: S(ing.querySelector('.instant-slider')), slide: S(ing.querySelector('.instant-slider-slide')), img: S(ing.querySelector('.instant-slider-slide img')), prev: S(ing.querySelector('.instant-slider-button-prev')), next: S(ing.querySelector('.instant-slider-button-next')),
    },
    gallery: { head: S(galleryHead?.querySelector('h2')), section: S(gallery), slide: S(gallery.querySelector('.swiper-slide')), img: S(gallery.querySelector('.swiper-slide img')) },
    community: {
      wrapper: S(community.querySelector('.brick__section')), left: S(community.querySelector('.brick__block--text')), right: S(community.querySelector('.brick__block--images')), content: S(community.querySelector('.hero__content')), title: S(community.querySelector('.hero__title')), accordion: S(community.querySelector('details.accordion')), summary: S(community.querySelector('.accordion__title')), blogGrid: S(community.querySelector('.blog-snippet__grid')), blogItem: S(community.querySelector('.blog-snippet__item')), blogImage: S(community.querySelector('.blog-snippet__image img')), blogTitle: S(community.querySelector('.blog-snippet__title')),
    },
    footer: {
      wrapper: S(footer), inner: S(footer.querySelector('.site-footer')), blocks: S(footer.querySelector('.footer__blocks')), newsletter: S(footer.querySelector('.footer__block--newsletter')), title: S(footer.querySelector('.footer__block__title')), text: S(footer.querySelector('.footer__newsletter__text')), input: S(footer.querySelector('input[type=email]')), button: S(footer.querySelector('button')), consent: S(footer.querySelector('legend')), consentText: S(footer.querySelector('label[for^="Email"]')), menuLinks: qa('#shopify-section-sections--29749721596276__footer .footer__quicklinks a').map(a => S(a)), contact: S(footer.querySelector('.footer__social__text')),
    },
    globals: {
      body: S(document.body), container: S(q('.container')), header: S(q('header.theme__header')), headerStuck: q('.header-sticky') ? S(q('.header-sticky')) : null,
    },
  };
})()`);

writeFileSync("docs/research/beautyofjoseon/data-styles-home.json", JSON.stringify(data, null, 2));
console.log("written");
close(proc);
