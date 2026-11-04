import { launch, connect, evaluate, close } from "./cdp.mjs";
const proc = await launch();
const { send } = await connect();
await send("Page.enable"); await send("Runtime.enable");
const urls = [["http://localhost:3000/",390,844],["http://localhost:3000/",1440,1000],["http://localhost:3000/pages/about-page",390,844],["http://localhost:3000/pages/about-page",1440,1000]];
for (const [url,width,height] of urls) {
  await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: width<600 });
  await send("Page.navigate", { url });
  await new Promise(r => setTimeout(r, 3500));
  const res = await evaluate(send, `(() => ({w: innerWidth, sw: document.documentElement.scrollWidth, sh: document.documentElement.scrollHeight, overflow: document.documentElement.scrollWidth > innerWidth}))()`);
  console.log(url, width, res);
}
close(proc);
