import { launch, connect, evaluate, close } from "./cdp.mjs";
const proc = await launch();
const { send } = await connect();
await send("Page.enable"); await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
await send("Page.navigate", { url: "http://localhost:3000/" });
await new Promise(r => setTimeout(r, 4000));
console.log(await evaluate(send, `(() => {
  const sec = document.querySelector('.boj-shade');
  const S = (sel) => { const el = sec.querySelector(sel); const r = el?.getBoundingClientRect(); const cs = el?getComputedStyle(el):null; return {rect:r?[Math.round(r.x),Math.round(r.y),Math.round(r.width),Math.round(r.height)]:null, margin:cs?.margin, pad:cs?.padding, size:cs?.fontSize, lh:cs?.lineHeight}; };
  return JSON.stringify({sec:sec.getBoundingClientRect().toJSON(), heading:S('.boj-shade-heading'), sub:S('.boj-shade-sub'), slider:S('.boj-shade-slider'), details:S('.boj-shade-details'), swatches:S('.boj-swatches'), count:S('.boj-shade-count'), title:S('.boj-shade-product-title'), compare:S('.boj-shade-compare'), add:S('.boj-shade-add'), view:S('.boj-shade-view')}, null, 1);
})()`));
close(proc);
