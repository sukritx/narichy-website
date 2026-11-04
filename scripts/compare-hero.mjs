import { launch, connect, evaluate, close } from "./cdp.mjs";
import { writeFileSync } from "node:fs";
async function cap(url, file, dotsSel, width, height, mobile) {
  const proc = await launch();
  const { send } = await connect();
  await send("Page.enable"); await send("Runtime.enable");
  await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile });
  await send("Page.navigate", { url });
  await new Promise(r => setTimeout(r, 3500));
  await evaluate(send, `(() => { const kids = [...document.body.children].filter(el => el.innerText && el.innerText.includes('Treat yourself')); kids.forEach(el => el.remove()); document.body.classList.remove('klaviyo-prevent-body-scrolling'); return true; })()`);
  await evaluate(send, `(() => { const dots=[...document.querySelectorAll('${dotsSel}')]; if(dots[2]) dots[2].click(); return dots.length; })()`);
  await new Promise(r => setTimeout(r, 1200));
  await evaluate(send, `window.scrollTo(0,0)`);
  await new Promise(r => setTimeout(r, 300));
  const r = await send("Page.captureScreenshot", { format: "png" });
  writeFileSync(file, Buffer.from(r.data, "base64"));
  close(proc);
}
await cap("https://beautyofjoseon.com/", "docs/design-references/cmp-src-hero3.png", ".flickity-page-dot", 1440, 1000, false);
await cap("http://localhost:3000/", "docs/design-references/cmp-local-hero3.png", ".boj-hero-dot", 1440, 1000, false);
await cap("https://beautyofjoseon.com/", "docs/design-references/cmp-src-hero3-m.png", ".flickity-page-dot", 390, 844, true);
await cap("http://localhost:3000/", "docs/design-references/cmp-local-hero3-m.png", ".boj-hero-dot", 390, 844, true);
