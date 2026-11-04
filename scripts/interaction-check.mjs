import { launch, connect, evaluate, close } from "./cdp.mjs";
import { writeFileSync } from "node:fs";

const proc = await launch();
const { send, ws } = await connect();
const errors = [];
ws.addEventListener("message", (event) => {
  const msg = JSON.parse(event.data);
  if (msg.method === "Runtime.exceptionThrown") {
    errors.push(msg.params.exceptionDetails?.text || "exception");
  }
  if (msg.method === "Log.entryAdded" && msg.params.entry.level === "error") {
    errors.push(msg.params.entry.text);
  }
});
await send("Page.enable");
await send("Runtime.enable");
await send("Log.enable");

const shot = async (name) => {
  const res = await send("Page.captureScreenshot", { format: "png" });
  writeFileSync(`docs/design-references/check-${name}.png`, Buffer.from(res.data, "base64"));
};

await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
await send("Page.navigate", { url: "http://localhost:3000/" });
await new Promise((r) => setTimeout(r, 4000));

// Mega menu
const shopRect = await evaluate(send, `(() => { const el=[...document.querySelectorAll('.boj-nav-link')].find(a=>a.innerText.trim()==='SHOP'); const r=el.getBoundingClientRect(); return {x:r.x+10,y:r.y+r.height/2}; })()`);
await send("Input.dispatchMouseEvent", { type: "mouseMoved", x: shopRect.x, y: shopRect.y });
await new Promise((r) => setTimeout(r, 700));
console.log("mega open", await evaluate(send, `!!document.querySelector('.boj-mega')`));
await shot("mega-menu");

// Search
await evaluate(send, `document.querySelector('[aria-label="Search"]').click()`);
await new Promise((r) => setTimeout(r, 400));
await evaluate(send, `(() => { const input=document.querySelector('.boj-search-bar input'); input.value='ginseng'; input.dispatchEvent(new Event('input',{bubbles:true})); return true; })()`);
await new Promise((r) => setTimeout(r, 500));
console.log("search results", await evaluate(send, `[...document.querySelectorAll('.boj-search-result')].map(e=>e.innerText.replace(/\\s+/g,' ').trim())`));
await shot("search");
await evaluate(send, `document.querySelector('.boj-search-close').click()`);

// Shade swatch change + compare modal
await evaluate(send, `window.scrollTo(0, 2400)`);
await new Promise((r) => setTimeout(r, 800));
const before = await evaluate(send, `document.querySelector('.boj-shade').style.backgroundColor`);
await evaluate(send, `document.querySelectorAll('.boj-swatch')[6].click()`);
await new Promise((r) => setTimeout(r, 700));
const after = await evaluate(send, `({bg:document.querySelector('.boj-shade').style.backgroundColor, count:document.querySelector('.boj-shade-count').innerText, title:document.querySelector('.boj-shade-product-title').innerText})`);
console.log("shade change", before, after);
await evaluate(send, `document.querySelector('.boj-shade-compare').click()`);
await new Promise((r) => setTimeout(r, 500));
console.log("compare modal", await evaluate(send, `!!document.querySelector('.boj-modal') && document.querySelectorAll('.boj-compare-row').length`));
await shot("compare");
await evaluate(send, `document.querySelector('.boj-modal-close').click()`);

// Add to cart from UGC
await evaluate(send, `window.scrollTo(0, 1800)`);
await new Promise((r) => setTimeout(r, 600));
await evaluate(send, `document.querySelector('.boj-ugc-add').click()`);
await new Promise((r) => setTimeout(r, 500));
console.log("cart", await evaluate(send, `({open:!!document.querySelector('.boj-drawer'), items:document.querySelectorAll('.boj-cart-item').length, count:document.querySelector('.boj-cart-count')?.innerText})`));
await shot("cart");

// Close cart
await evaluate(send, `document.querySelector('.boj-drawer-close').click()`);

// Accordion
await evaluate(send, `window.scrollTo(0, 4800)`);
await new Promise((r) => setTimeout(r, 600));
await evaluate(send, `document.querySelector('.boj-accordion-summary').click()`);
await new Promise((r) => setTimeout(r, 500));
console.log("accordion open", await evaluate(send, `document.querySelector('.boj-accordion').classList.contains('is-open')`));
await shot("accordion");

// Navigate to about via header
await evaluate(send, `window.scrollTo(0,0)`);
await new Promise((r) => setTimeout(r, 500));
await evaluate(send, `[...document.querySelectorAll('.boj-nav-link')].find(a=>a.innerText.trim()==='ABOUT').click()`);
await new Promise((r) => setTimeout(r, 2500));
console.log("about route", await evaluate(send, `({url: location.pathname, title: document.title, hero: !!document.querySelector('.boj-about-hero')})`));

// Mobile menu + search + cart
await send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
await send("Page.navigate", { url: "http://localhost:3000/" });
await new Promise((r) => setTimeout(r, 3000));
await evaluate(send, `document.querySelector('[aria-label="Open menu"]').click()`);
await new Promise((r) => setTimeout(r, 500));
console.log("mobile menu", await evaluate(send, `!!document.querySelector('.boj-mobile-menu')`));
await shot("mobile-menu");
await evaluate(send, `document.querySelector('[aria-label="Close menu"]').click()`);

console.log("errors", errors);
close(proc);
