import { launch, connect, evaluate, close } from "./cdp.mjs";
const proc=await launch(); const {send}=await connect();
await send("Page.enable"); await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride",{width:390,height:844,deviceScaleFactor:1,mobile:true});
await send("Page.navigate",{url:"http://localhost:3000/"});
await new Promise(r=>setTimeout(r,4000));
for(let y=0;y<7000;y+=700){await evaluate(send,`window.scrollTo(0,${y}); new Promise(r=>setTimeout(r,200))`)}
await new Promise(r=>setTimeout(r,1000));
await evaluate(send,"window.scrollTo(0,0)");
console.log(await evaluate(send,`(() => {
  const out=[...document.querySelectorAll('main > *')].map(el=>({c:el.className,y:Math.round(el.getBoundingClientRect().top),h:Math.round(el.getBoundingClientRect().height)}));
  const ig=document.querySelector('.boj-instagram-heading').getBoundingClientRect();
  const gal=document.querySelector('.boj-gallery').getBoundingClientRect();
  const foot=document.querySelector('.boj-footer').getBoundingClientRect();
  return JSON.stringify({out, ig:[Math.round(ig.y),Math.round(ig.height)], gal:[Math.round(gal.y),Math.round(gal.height)], footer:[Math.round(foot.y),Math.round(foot.height)], total:document.documentElement.scrollHeight},null,1);
})()`));
close(proc);
