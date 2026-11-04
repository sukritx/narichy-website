import { launch, connect, evaluate, close } from "./cdp.mjs";
import { writeFileSync } from "node:fs";
const proc=await launch(); const {send,ws}=await connect();
const failures=[]; ws.addEventListener("message",e=>{const m=JSON.parse(e.data);if(m.method==="Network.responseReceived"){const r=m.params.response;if(r.status>=400)failures.push({status:r.status,url:r.url})}});
await send("Network.enable"); await send("Page.enable"); await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride",{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
for (const [url,file] of [["http://localhost:3001/","docs/design-references/prod-home.png"],["http://localhost:3001/pages/about-page","docs/design-references/prod-about.png"]]) {
  await send("Page.navigate",{url});
  await new Promise(r=>setTimeout(r,3500));
  const res=await send("Page.captureScreenshot",{format:"png"});
  writeFileSync(file, Buffer.from(res.data,"base64"));
  console.log("prod", url, await evaluate(send,`({title:document.title,h:document.documentElement.scrollHeight,hero:!!document.querySelector('main section')})`));
}
console.log("failures", failures);
close(proc);
