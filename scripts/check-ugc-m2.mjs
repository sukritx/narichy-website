import { launch, connect, evaluate, close } from "./cdp.mjs";
const proc=await launch(); const {send}=await connect();
await send("Page.enable"); await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride",{width:390,height:844,deviceScaleFactor:1,mobile:true});
await send("Page.navigate",{url:"http://localhost:3000/"});
await new Promise(r=>setTimeout(r,2500));
console.log(await evaluate(send,`(() => { const card=document.querySelector('.boj-ugc-card'); const sec=document.querySelector('.boj-ugc'); const info=document.querySelector('.boj-ugc-info'); return JSON.stringify({card:card.getBoundingClientRect().toJSON(), info:info.getBoundingClientRect().toJSON(), sec:sec.getBoundingClientRect().toJSON()},null,1); })()`));
close(proc);
