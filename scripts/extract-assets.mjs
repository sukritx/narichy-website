import { launch, connect, evaluate, close } from "./cdp.mjs";
import { writeFileSync } from "node:fs";

const url = process.argv[2];
const out = process.argv[3];
const width = Number(process.argv[4] || 1440);
const height = Number(process.argv[5] || 1000);

const proc = await launch();
const { send } = await connect();
await send("Page.enable");
await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: width < 600 });
await send("Page.navigate", { url });
await new Promise((r) => setTimeout(r, 7000));

await evaluate(send, `(() => {
  const kids = [...document.body.children].filter(el => el.innerText && el.innerText.includes('Treat yourself'));
  kids.forEach(el => el.remove());
  document.body.classList.remove('klaviyo-prevent-body-scrolling');
  return true;
})()`);

const total = await evaluate(send, "document.documentElement.scrollHeight");
for (let y = 0; y < total; y += height) {
  await evaluate(send, `window.scrollTo(0, ${y}); new Promise(r => setTimeout(r, 500))`);
}
await evaluate(send, "window.scrollTo(0, 0); new Promise(r => setTimeout(r, 1000))");

const data = await evaluate(send, `(() => {
  const abs = (u) => { try { return new URL(u, location.href).href; } catch { return u; } };
  const images = [...document.querySelectorAll('img')].map((img) => {
    const r = img.getBoundingClientRect();
    const cs = getComputedStyle(img);
    return {
      src: abs(img.currentSrc || img.src),
      srcAttr: img.getAttribute('src'),
      srcset: img.getAttribute('srcset'),
      alt: img.alt,
      width: img.naturalWidth, height: img.naturalHeight,
      rendered: { w: Math.round(r.width), h: Math.round(r.height) },
      objectFit: cs.objectFit,
      objectPosition: cs.objectPosition,
      section: img.closest('[id^="shopify-section"]')?.id || null,
      cls: img.className,
    };
  });
  const bgs = [...document.querySelectorAll('[id^="shopify-section"] *')].map((el) => {
    const cs = getComputedStyle(el);
    if (cs.backgroundImage && cs.backgroundImage !== 'none' && cs.backgroundImage.includes('url(')) {
      const r = el.getBoundingClientRect();
      if (r.width > 40 && r.height > 40) return { bg: cs.backgroundImage.slice(0, 500), section: el.closest('[id^="shopify-section"]')?.id, cls: (typeof el.className === 'string' ? el.className : '').slice(0, 100), rendered: { w: Math.round(r.width), h: Math.round(r.height) } };
    }
    return null;
  }).filter(Boolean);
  const videos = [...document.querySelectorAll('video')].map(v => ({ src: v.currentSrc || v.src, poster: v.poster, autoplay: v.autoplay, loop: v.loop, muted: v.muted, section: v.closest('[id^="shopify-section"]')?.id, rect: v.getBoundingClientRect().toJSON() }));
  const main = document.querySelector('main') || document.querySelector('.container') || document.body;
  const sectionEls = [...document.querySelectorAll('.shopify-section')];
  const sections = sectionEls.map(el => ({ id: el.id, cls: el.className, html: el.outerHTML.length, text: el.innerText.replace(/\\s+/g,' ').trim().slice(0, 500), rect: el.getBoundingClientRect().toJSON() }));
  return { url: location.href, title: document.title, images, bgs, videos, sections, bodyHeight: document.documentElement.scrollHeight };
})()`);

writeFileSync(out, JSON.stringify(data, null, 2));
console.log(JSON.stringify({ images: data.images.length, bgs: data.bgs.length, videos: data.videos.length, sections: data.sections.length, height: data.bodyHeight }, null, 2));
const seen = new Set();
for (const im of data.images) {
  if (!seen.has(im.src)) { seen.add(im.src); console.log(im.rendered.w + "x" + im.rendered.h, im.section, im.src); }
}
console.log("VIDEOS", JSON.stringify(data.videos, null, 1));
close(proc);
