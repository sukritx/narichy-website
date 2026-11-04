import { launch, connect, evaluate, close } from "./cdp.mjs";
import { writeFileSync } from "node:fs";

const proc = await launch();
const { send } = await connect();
await send("Page.enable");
await send("Runtime.enable");

const url = process.argv[2];
const width = Number(process.argv[3] || 1440);
const height = Number(process.argv[4] || 1000);
const mobile = process.argv[5] === "mobile";
const prefix = process.argv[6] || "shot";

await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile });
await send("Page.navigate", { url });
await new Promise((r) => setTimeout(r, 8000));

await evaluate(send, `(() => {
  const kids = [...document.body.children].filter(el => el.innerText && el.innerText.includes('Treat yourself'));
  kids.forEach(el => el.remove());
  document.body.classList.remove('klaviyo-prevent-body-scrolling');
  return true;
})()`);
await new Promise((r) => setTimeout(r, 1000));

const initial = await evaluate(send, "document.documentElement.scrollHeight");
for (let y = 0; y < initial; y += height) {
  await evaluate(send, `window.scrollTo(0, ${y}); new Promise(r => setTimeout(r, 350))`);
}
await evaluate(send, "window.scrollTo(0, document.documentElement.scrollHeight); new Promise(r => setTimeout(r, 1200))");
await evaluate(send, "window.scrollTo(0, 0); new Promise(r => setTimeout(r, 800))");

const total = await evaluate(send, "document.documentElement.scrollHeight");
const steps = Math.ceil(total / height);
for (let i = 0; i < steps; i++) {
  const y = i * height;
  await evaluate(send, `window.scrollTo(0, ${y}); new Promise(r => setTimeout(r, 1400))`);
  const r = await send("Page.captureScreenshot", { format: "png" });
  writeFileSync(`docs/design-references/${prefix}-${String(i).padStart(2, "0")}.png`, Buffer.from(r.data, "base64"));
  const at = await evaluate(send, "window.scrollY");
  console.log(i, y, at);
}
await evaluate(send, "window.scrollTo(0,0)");
console.log("total", total);
close(proc);
