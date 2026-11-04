import { launch, connect, evaluate, close } from "./cdp.mjs";
import { writeFileSync } from "node:fs";
const proc = await launch();
const { send } = await connect();
await send("Page.enable"); await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
await send("Page.navigate", { url: "https://beautyofjoseon.com/pages/about-page" });
await new Promise(r => setTimeout(r, 7000));
const ids = ["0c6d7da3","section_double_TLVMpt","section_rich_text_YELqmQ","section_hero_RTgrH8","section_rich_text_LNzyt3","section_columns_Tz7Xkn","section_columns_LUUwTX"];
const out = {};
for (const id of ids) {
  out[id] = await evaluate(send, `(() => {
    const sec = [...document.querySelectorAll('.shopify-section')].find(el => el.id.includes(${JSON.stringify(id)}));
    if (!sec) return 'NOT FOUND';
    const walk = (el, d) => {
      if (d > 7) return '';
      const r = el.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) return '';
      let s = '  '.repeat(d) + el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\\s+/).slice(0,5).join('.') : '') + ' [' + Math.round(r.x) + ',' + Math.round(r.y) + ' ' + Math.round(r.width) + 'x' + Math.round(r.height) + ']';
      if (el.children.length === 0 && el.textContent.trim()) s += ' :: ' + el.textContent.trim().replace(/\\s+/g,' ').slice(0,130);
      if (el.tagName === 'IMG') s += ' SRC=' + (el.currentSrc || el.src).slice(0,130);
      let res = s + '\\n';
      if (el.tagName === 'svg') return res;
      if (el.children.length) for (const c of [...el.children]) res += walk(c, d+1);
      return res;
    };
    return walk(sec, 0);
  })()`);
}
writeFileSync("docs/research/beautyofjoseon/trees-about.txt", Object.entries(out).map(([k,v]) => `\n===== ${k} =====\n${v}`).join(""));
console.log("done");
close(proc);
