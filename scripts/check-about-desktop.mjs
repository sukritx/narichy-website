import { launch, connect, evaluate, close } from "./cdp.mjs";
const proc = await launch();
const { send } = await connect();
await send("Page.enable"); await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
await send("Page.navigate", { url: "http://localhost:3000/pages/about-page" });
await new Promise(r => setTimeout(r, 4000));
console.log(await evaluate(send, `(() => {
  const all=[...document.querySelectorAll('main > section')].map(el=>({cls:el.className,y:Math.round(el.getBoundingClientRect().top),h:Math.round(el.getBoundingClientRect().height)}));
  const copy=document.querySelector('.boj-about-split-copy-inner').getBoundingClientRect();
  const rte=document.querySelector('.boj-about-split .boj-about-rte').getBoundingClientRect();
  return JSON.stringify({all, copy:[Math.round(copy.y),Math.round(copy.height)], rte:[Math.round(rte.y),Math.round(rte.height)], total:document.documentElement.scrollHeight},null,1);
})()`));
close(proc);
