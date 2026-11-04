import { launch, connect, evaluate, close } from "./cdp.mjs";
const proc = await launch();
const { send } = await connect();
await send("Page.enable"); await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
await send("Page.navigate", { url: "http://localhost:3000/" });
await new Promise(r => setTimeout(r, 3500));
console.log(await evaluate(send, `(() => {
  const items = [...document.querySelectorAll('.boj-nav-link')].map(a => ({text:a.innerText.trim(), r:a.getBoundingClientRect().toJSON()}));
  const groups = ['.boj-menu-left','.boj-menu-right','.boj-logo','.boj-header-inner','.boj-icon-buttons'].map(sel => { const el=document.querySelector(sel); const r=el.getBoundingClientRect(); const cs=getComputedStyle(el); return {sel, r:[r.x,r.y,r.width,r.height], flex:cs.flex, gap:cs.gap, pad:cs.padding}; });
  const icons = [...document.querySelectorAll('.boj-icon-btn')].map(a => ({r:a.getBoundingClientRect().toJSON()}));
  const dots = [...document.querySelectorAll('.boj-hero-dot')].map(a => a.getBoundingClientRect().toJSON());
  return JSON.stringify({items, groups, icons, dots: dots.slice(0,2), dotLast: dots[dots.length-1]}, null, 1);
})()`));
close(proc);
