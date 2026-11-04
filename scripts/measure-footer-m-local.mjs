import { launch, connect, evaluate, close } from "./cdp.mjs";
const proc = await launch();
const { send } = await connect();
await send("Page.enable"); await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
await send("Page.navigate", { url: "http://localhost:3000/" });
await new Promise(r => setTimeout(r, 5000));
console.log(await evaluate(send, `(() => {
  const f=document.querySelector('.boj-footer');
  const S=(sel)=>{const el=f.querySelector(sel);const r=el?.getBoundingClientRect();const cs=el?getComputedStyle(el):null;return r?{rect:[Math.round(r.x),Math.round(r.y),Math.round(r.width),Math.round(r.height)],margin:cs.margin,pad:cs.padding}:null};
  return JSON.stringify({footer:[Math.round(f.getBoundingClientRect().y),Math.round(f.getBoundingClientRect().height)], inner:S('.boj-footer-inner'), blocks:S('.boj-footer-blocks'), block1:S('.boj-footer-block'), title:S('.boj-footer-title'), text:S('.boj-footer-text'), form:S('.boj-newsletter-form'), consent:S('.boj-consent'), links:S('.boj-footer-links'), link:S('.boj-footer-links a'), contact:S('.boj-footer-contact')}, null, 1);
})()`));
close(proc);
