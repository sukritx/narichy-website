import { launch, connect, evaluate, close } from "./cdp.mjs";
const proc = await launch();
const { send } = await connect();
await send("Page.enable"); await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
await send("Page.navigate", { url: "http://localhost:3000/" });
await new Promise(r => setTimeout(r, 4000));
console.log(await evaluate(send, `(() => {
  const s = [...document.querySelectorAll('main > section, main > div')].map(el => ({cls: el.className, rect: el.getBoundingClientRect().toJSON()}));
  const best = document.querySelector('.boj-best');
  const loved = document.querySelector('.is-loved h2');
  const shade = document.querySelector('.boj-shade');
  const g = (el) => { const r = el?.getBoundingClientRect(); const cs = el?getComputedStyle(el):null; return r?{rect:[Math.round(r.x),Math.round(r.y),Math.round(r.width),Math.round(r.height)], margin:cs.margin, pad:cs.padding, font:cs.fontFamily, size:cs.fontSize, lh:cs.lineHeight, bg:cs.backgroundColor, color:cs.color}:null; };
  return JSON.stringify({sections:s.map(x=>({cls:x.cls,y:Math.round(x.rect.top),h:Math.round(x.rect.height)})), best:g(best), bestHeading:g(document.querySelector('.boj-best-heading')), loved:g(loved), shade:g(shade), subtitle:g(document.querySelector('.boj-shade-sub')), count:g(document.querySelector('.boj-shade-count')), title:g(document.querySelector('.boj-shade-product-title')), compare:g(document.querySelector('.boj-shade-compare')), add:g(document.querySelector('.boj-shade-add')), view:g(document.querySelector('.boj-shade-view')), ugcAdd:g(document.querySelector('.boj-ugc-add')), footer:g(document.querySelector('.boj-footer')), total:document.documentElement.scrollHeight}, null, 1);
})()`));
close(proc);
