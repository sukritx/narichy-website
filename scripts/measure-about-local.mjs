import { launch, connect, evaluate, close } from "./cdp.mjs";
const proc = await launch();
const { send } = await connect();
await send("Page.enable"); await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
await send("Page.navigate", { url: "http://localhost:3000/pages/about-page" });
await new Promise(r => setTimeout(r, 4000));
console.log(await evaluate(send, `(() => {
  return JSON.stringify({
    sections: [...document.querySelectorAll('main > section')].map(el => ({cls: el.className, y: Math.round(el.getBoundingClientRect().top), h: Math.round(el.getBoundingClientRect().height)})),
    who: (()=>{const el=document.querySelector('.boj-about-split');return el?{y:el.getBoundingClientRect().top,h:el.getBoundingClientRect().height}:null})(),
    whoInner: (()=>{const el=document.querySelector('.boj-about-split-inner');return el?{y:el.getBoundingClientRect().top,h:el.getBoundingClientRect().height}:null})(),
    whoImage: (()=>{const el=document.querySelector('.boj-about-split-image');return el?{y:el.getBoundingClientRect().top,h:el.getBoundingClientRect().height}:null})(),
    copy: (()=>{const el=document.querySelector('.boj-about-split-copy-inner');return el?{y:el.getBoundingClientRect().top,h:el.getBoundingClientRect().height}:null})(),
    missionInner: (()=>{const el=document.querySelector('.boj-about-mission-inner');return el?{y:el.getBoundingClientRect().top,h:el.getBoundingClientRect().height}:null})(),
    hanbangInner: (()=>{const el=document.querySelector('.boj-about-hanbang .boj-about-mission-inner');return el?{y:el.getBoundingClientRect().top,h:el.getBoundingClientRect().height}:null})(),
    ingCard: (()=>{const el=document.querySelector('.boj-about-ingredient');return el?{y:el.getBoundingClientRect().top,h:el.getBoundingClientRect().height}:null})(),
    pressTitle: (()=>{const el=document.querySelector('.boj-about-press-title');return el?{y:el.getBoundingClientRect().top,h:el.getBoundingClientRect().height}:null})(),
    footer: (()=>{const el=document.querySelector('.boj-footer');return el?{y:el.getBoundingClientRect().top,h:el.getBoundingClientRect().height}:null})(),
    total: document.documentElement.scrollHeight
  }, null, 1);
})()`));
close(proc);
