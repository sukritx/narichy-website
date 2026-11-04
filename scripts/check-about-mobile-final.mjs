import { launch, connect, evaluate, close } from "./cdp.mjs";
const proc=await launch(); const {send}=await connect();
await send("Page.enable"); await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride",{width:390,height:844,deviceScaleFactor:1,mobile:true});
await send("Page.navigate",{url:"http://localhost:3000/pages/about-page"});
await new Promise(r=>setTimeout(r,4000));
for(let y=0;y<4500;y+=700){await evaluate(send,`window.scrollTo(0,${y}); new Promise(r=>setTimeout(r,200))`)}
await new Promise(r=>setTimeout(r,800));
await evaluate(send,"window.scrollTo(0,0)");
console.log(await evaluate(send,`JSON.stringify([...document.querySelectorAll('main > section')].map(el=>({c:el.className,y:Math.round(el.getBoundingClientRect().top),h:Math.round(el.getBoundingClientRect().height)})).concat([{c:'footer',y:Math.round(document.querySelector('.boj-footer').getBoundingClientRect().top),h:Math.round(document.querySelector('.boj-footer').getBoundingClientRect().height)}]),null,1)`));
close(proc);
