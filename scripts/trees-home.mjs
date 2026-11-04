import { launch, connect, evaluate, close } from "./cdp.mjs";
import { writeFileSync } from "node:fs";

const proc = await launch();
const { send } = await connect();
await send("Page.enable");
await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
await send("Page.navigate", { url: "https://beautyofjoseon.com/" });
await new Promise((r) => setTimeout(r, 7000));
await evaluate(send, `(() => { const kids = [...document.body.children].filter(el => el.innerText && el.innerText.includes('Treat yourself')); kids.forEach(el => el.remove()); document.body.classList.remove('klaviyo-prevent-body-scrolling'); return true; })()`);

const ids = [
  "section_double_fVUGtQ",
  "section_rich_text_wxFVNw",
  "1752070979cca9e2d5",
  "section_tds_shade_carousel_VjCrcy",
  "instant_i2pqhj0_ux_gj5t_kem_bUbPGJ",
  "instant_rrl_ms_a0o_cma3_y_vn6_igiGhi",
  "ss_gallery_3_fdTCtN",
  "section_double_nWW9HC",
];
const out = {};
for (const id of ids) {
  const tree = await evaluate(send, `(() => {
    const sec = [...document.querySelectorAll('.shopify-section')].find(el => el.id.includes(${JSON.stringify(id)}));
    if (!sec) return 'NOT FOUND';
    const walk = (el, d) => {
      if (d > 7) return '';
      const r = el.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) return '';
      let s = '  '.repeat(d) + el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\\s+/).slice(0,5).join('.') : '') + ' [' + Math.round(r.x) + ',' + Math.round(r.y) + ' ' + Math.round(r.width) + 'x' + Math.round(r.height) + ']';
      if (el.children.length === 0 && el.textContent.trim()) s += ' :: ' + el.textContent.trim().replace(/\\s+/g,' ').slice(0,100);
      if (el.tagName === 'IMG') s += ' SRC=' + (el.currentSrc || el.src).slice(0,130);
      let res = s + '\\n';
      if (el.tagName === 'svg') return res;
      if (el.children.length) for (const c of [...el.children]) res += walk(c, d+1);
      return res;
    };
    return walk(sec, 0);
  })()`);
  out[id] = tree;
}
writeFileSync("docs/research/beautyofjoseon/trees-home.txt", Object.entries(out).map(([k, v]) => `\n\n===== ${k} =====\n${v}`).join(""));
console.log("done");
close(proc);
