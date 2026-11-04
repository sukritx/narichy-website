import { launch, connect, evaluate, close } from "./cdp.mjs";
const proc = await launch();
const { send } = await connect();
await send("Page.enable"); await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
await send("Page.navigate", { url: "http://localhost:3000/" });
await new Promise(r => setTimeout(r, 5000));
for (let y = 0; y < 7000; y += 600) { await evaluate(send, `window.scrollTo(0, ${y}); new Promise(r => setTimeout(r, 250))`); }
await new Promise(r => setTimeout(r, 1000));
await evaluate(send, "window.scrollTo(0,0)");
console.log(await evaluate(send, `(() => {
  const sels = ['boj-hero','boj-best','boj-promo','boj-heading-section is-loved','boj-ugc','boj-shade','boj-rewards','boj-heading-section','boj-ingredients','boj-community'];
  const all = [...document.querySelectorAll('main > *')].map(el => ({cls: el.className, y: Math.round(el.getBoundingClientRect().top), h: Math.round(el.getBoundingClientRect().height)}));
  const more = ['.boj-instagram-heading','.boj-gallery','.boj-footer'].map(sel => { const el=document.querySelector(sel); return {sel, y: el?Math.round(el.getBoundingClientRect().top):null, h: el?Math.round(el.getBoundingClientRect().height):null}; });
  return JSON.stringify({all, more, total: document.documentElement.scrollHeight}, null, 1);
})()`));
close(proc);
