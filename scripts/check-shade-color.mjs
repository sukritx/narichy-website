import { launch, connect, evaluate, close } from "./cdp.mjs";
import { writeFileSync } from "node:fs";
const proc = await launch();
const { send } = await connect();
await send("Page.enable"); await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
await send("Page.navigate", { url: "http://localhost:3000/" });
await new Promise(r => setTimeout(r, 3500));
await evaluate(send, `window.scrollTo(0, 2400); new Promise(r=>setTimeout(r,600))`);
await evaluate(send, `document.querySelectorAll('.boj-swatch')[6].click()`);
await new Promise(r => setTimeout(r, 800));
console.log(await evaluate(send, `(() => {
  const sec=document.querySelector('.boj-shade'); const h=document.querySelector('.boj-shade-heading');
  return JSON.stringify({secColor:getComputedStyle(sec).color, headColor:getComputedStyle(h).color, bg:getComputedStyle(sec).backgroundColor, title:document.querySelector('.boj-shade-product-title').innerText}, null, 1);
})()`));
const r = await send("Page.captureScreenshot", { format: "png" });
writeFileSync("docs/design-references/check-shade-33n.png", Buffer.from(r.data, "base64"));
close(proc);
