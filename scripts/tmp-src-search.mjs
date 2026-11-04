import { launch, connect, evaluate, close } from "./cdp.mjs";
import { writeFileSync } from "node:fs";
const proc = await launch();
const { send } = await connect();
await send("Page.enable"); await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
await send("Page.navigate", { url: "https://beautyofjoseon.com/" });
await new Promise(r => setTimeout(r, 6000));
await evaluate(send, `(() => { const kids = [...document.body.children].filter(el => el.innerText && el.innerText.includes('Treat yourself')); kids.forEach(el => el.remove()); document.body.classList.remove('klaviyo-prevent-body-scrolling'); return true; })()`);
const btn = await evaluate(send, `(() => { const el=[...document.querySelectorAll('button,a')].find(e=>/search/i.test(e.getAttribute('aria-label')||'')||/header__search/i.test(String(e.className))); if(!el) return null; const r=el.getBoundingClientRect(); return {x:r.x+r.width/2,y:r.y+r.height/2,cls:String(el.className),label:el.getAttribute('aria-label')}; })()`);
console.log(btn);
if(btn){ await send("Input.dispatchMouseEvent",{type:"mouseMoved",x:btn.x,y:btn.y}); await send("Input.dispatchMouseEvent",{type:"mousePressed",x:btn.x,y:btn.y,button:"left",clickCount:1}); await send("Input.dispatchMouseEvent",{type:"mouseReleased",x:btn.x,y:btn.y,button:"left",clickCount:1}); }
await new Promise(r=>setTimeout(r,900));
const r=await send("Page.captureScreenshot",{format:"png"}); writeFileSync("docs/design-references/src-search.png", Buffer.from(r.data,"base64"));
console.log(await evaluate(send, `({text: document.body.innerText.slice(0,300), search: !!document.querySelector('.search-bar, [data-search], .search__container, .search-popdown')})`));
close(proc);
