import { launch, connect, evaluate, close } from "./cdp.mjs";
import { writeFileSync } from "node:fs";

const url = process.argv[2];
const out = process.argv[3];

const proc = await launch();
const { send } = await connect();
await send("Page.enable");
await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
await send("Page.navigate", { url });
await new Promise((r) => setTimeout(r, 6000));

const data = await evaluate(send, `(() => {
  const clean = (s) => (s || "").replace(/\\s+/g, " ").trim().slice(0, 200);
  const info = (el) => {
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return {
      tag: el.tagName.toLowerCase(),
      id: el.id || null,
      cls: (el.className && typeof el.className === "string") ? el.className.slice(0, 200) : null,
      text: clean(el.innerText).slice(0, 120),
      rect: { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) },
      pos: cs.position,
      display: cs.display,
      font: cs.fontFamily.slice(0, 80),
      size: cs.fontSize,
      weight: cs.fontWeight,
      bg: cs.backgroundColor,
      color: cs.color,
    };
  };
  const fixed = [...document.querySelectorAll("body *")].filter((el) => {
    const cs = getComputedStyle(el);
    return (cs.position === "fixed" || cs.position === "sticky") && el.getBoundingClientRect().width > 0;
  }).slice(0, 30).map(info);
  const main = document.querySelector("main") || document.body;
  const sections = [...main.children].map(info);
  const navLinks = [...document.querySelectorAll("header a, nav a")].map((a) => ({ text: clean(a.innerText), href: a.getAttribute("href") })).filter(a => a.text);
  const fonts = [...document.fonts].map((f) => ({ family: f.family, weight: f.weight, style: f.style, status: f.status }));
  const stylesheets = [...document.styleSheets].map((s) => s.href).filter(Boolean);
  return {
    title: document.title,
    bodyFont: getComputedStyle(document.body).fontFamily,
    bodyBg: getComputedStyle(document.body).backgroundColor,
    htmlClass: document.documentElement.className,
    sections, fixed, navLinks, fonts, stylesheets,
    bodyHeight: document.documentElement.scrollHeight,
  };
})()`);

writeFileSync(out, JSON.stringify(data, null, 2));
console.log(JSON.stringify({ title: data.title, bodyHeight: data.bodyHeight, sectionCount: data.sections.length, sections: data.sections.map(s => ({ tag: s.tag, id: s.id, cls: s.cls, text: s.text, rect: s.rect, bg: s.bg })), fixed: data.fixed, navLinks: data.navLinks }, null, 2));
close(proc);
