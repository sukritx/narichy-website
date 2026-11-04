import { launch, connect, evaluate, close } from "./cdp.mjs";
import { writeFileSync } from "node:fs";
const proc = await launch();
const { send } = await connect();
await send("Page.enable"); await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
await send("Page.navigate", { url: "https://beautyofjoseon.com/" });
await new Promise(r => setTimeout(r, 7000));
const d = await evaluate(send, `(() => {
  const sec = document.querySelector('#shopify-section-template--29749638332788__section_collection_N8HAfU');
  return JSON.stringify([...sec.querySelectorAll('.grid-item')].map(item => ({
    text: item.innerText.replace(/\\s+/g,' ').trim(),
    title: item.querySelector('.product-item__title')?.innerText.trim(),
    cutline: item.querySelector('.product-item__cutline')?.innerText.trim(),
    stars: item.querySelector('.oke-sr-rating')?.innerText.trim(),
    reviews: item.querySelector('.oke-sr-count')?.innerText.trim(),
    priceText: item.querySelector('.product-item__price__text')?.innerText.trim(),
    priceOther: item.querySelector('.product-item__price__text--right')?.innerText.trim(),
    labels: [...item.querySelectorAll('.product-item__price__holder *')].map(e => e.innerText.trim()).filter(Boolean),
    selectOptions: (() => { const s = item.querySelector('select'); return s ? [...s.options].map(o => o.text) : []; })(),
    href: item.querySelector('a')?.getAttribute('href'),
    img: item.querySelector('img')?.currentSrc,
    saleLabel: [...item.querySelectorAll('*')].filter(e => e.children.length===0 && /Save|SHOP|Sold/.test(e.innerText)).map(e => e.innerText.trim()),
  })), null, 1);
})()`);
writeFileSync("docs/research/beautyofjoseon/data-products.json", d);
console.log(d);
close(proc);
