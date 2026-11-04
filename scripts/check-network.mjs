import { launch, connect, evaluate, close } from "./cdp.mjs";
const proc = await launch();
const { send, ws } = await connect();
const failures=[];
ws.addEventListener("message", (e)=>{ const m=JSON.parse(e.data); if(m.method==='Network.responseReceived'){const r=m.params.response; if(r.status>=400) failures.push({status:r.status,url:r.url});} if(m.method==='Network.loadingFailed'){failures.push({failed:m.params.errorText, url:m.params.requestId});}});
await send("Network.enable");
await send("Page.enable"); await send("Runtime.enable");
for (const [url,w,h] of [["http://localhost:3000/",1440,1000],["http://localhost:3000/",390,844],["http://localhost:3000/pages/about-page",1440,1000],["http://localhost:3000/pages/about-page",390,844]]) {
  await send("Emulation.setDeviceMetricsOverride",{width:w,height:h,deviceScaleFactor:1,mobile:w<600});
  await send("Page.navigate",{url});
  await new Promise(r=>setTimeout(r,3500));
  for (let y=0;y<7000;y+=800){ await evaluate(send,`window.scrollTo(0,${y}); new Promise(r=>setTimeout(r,200))`); }
  await new Promise(r=>setTimeout(r,800));
}
console.log(JSON.stringify(failures, null, 1).slice(0,5000));
console.log("count", failures.length);
close(proc);
