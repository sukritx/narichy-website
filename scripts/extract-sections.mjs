import { launch, connect, evaluate, close } from "./cdp.mjs";
import { writeFileSync, mkdirSync } from "node:fs";

const url = process.argv[2];
const dir = process.argv[3];
mkdirSync(dir, { recursive: true });

const proc = await launch();
const { send } = await connect();
await send("Page.enable");
await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
await send("Page.navigate", { url });
await new Promise((r) => setTimeout(r, 7000));

await evaluate(send, `(() => {
  const kids = [...document.body.children].filter(el => el.innerText && el.innerText.includes('Treat yourself'));
  kids.forEach(el => el.remove());
  document.body.classList.remove('klaviyo-prevent-body-scrolling');
  return true;
})()`);

const total = await evaluate(send, "document.documentElement.scrollHeight");
for (let y = 0; y < total; y += 800) {
  await evaluate(send, `window.scrollTo(0, ${y}); new Promise(r => setTimeout(r, 400))`);
}
await new Promise((r) => setTimeout(r, 1000));

const html = await evaluate(send, `(() => {
  const out = {};
  document.querySelectorAll('.shopify-section').forEach((el, i) => {
    if (el.getBoundingClientRect().width === 0 && el.getBoundingClientRect().height === 0) return;
    const name = (el.id || 'section-' + i).replace(/[^a-zA-Z0-9_-]/g, '_');
    out[name] = el.outerHTML;
  });
  return out;
})()`);
for (const [name, content] of Object.entries(html)) {
  writeFileSync(`${dir}/${name}.html`, content);
  console.log(name, content.length);
}
close(proc);
