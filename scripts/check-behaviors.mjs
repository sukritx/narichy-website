import { launch, connect, evaluate, close } from "./cdp.mjs";
const proc = await launch();
const { send } = await connect();
await send("Page.enable"); await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
await send("Page.navigate", { url: "http://localhost:3000/" });
await new Promise(r => setTimeout(r, 3500));
// search typing
await evaluate(send, `document.querySelector('[aria-label="Search"]').click()`);
await new Promise(r=>setTimeout(r,300));
await evaluate(send, `document.querySelector('.boj-search-bar input').focus()`);
await send("Input.insertText", { text: "ginseng" });
await new Promise(r=>setTimeout(r,500));
console.log("search typed", await evaluate(send, `[...document.querySelectorAll('.boj-search-result')].map(e=>e.innerText.replace(/\\s+/g,' ').trim())`));
await evaluate(send, `document.querySelector('.boj-search-close').click()`);
// shade arrows
await evaluate(send, `window.scrollTo(0,2400); new Promise(r=>setTimeout(r,500))`);
const before = await evaluate(send, `document.querySelector('.boj-shade-count').innerText`);
await evaluate(send, `document.querySelector('.boj-shade-arrow.next').click()`);
await new Promise(r=>setTimeout(r,800));
const after = await evaluate(send, `({count:document.querySelector('.boj-shade-count').innerText, bg:document.querySelector('.boj-shade').style.backgroundColor, color:document.querySelector('.boj-shade').style.color})`);
console.log("shade arrow", before, after);
// footer subscribe
await evaluate(send, `window.scrollTo(0, document.body.scrollHeight); new Promise(r=>setTimeout(r,700))`);
await evaluate(send, `(() => { const i=document.querySelector('.boj-newsletter-input'); i.value='test@example.com'; i.dispatchEvent(new Event('input',{bubbles:true})); return true; })()`);
await evaluate(send, `document.querySelector('.boj-newsletter-btn').click()`);
await new Promise(r=>setTimeout(r,400));
console.log("subscribe", await evaluate(send, `document.querySelector('.boj-newsletter-success')?.innerText || null`));
close(proc);
