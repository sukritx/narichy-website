import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const port = 9333 + Math.floor(Math.random() * 500);

export async function launch() {
  const profileRoot = process.env.TEMP || process.env.TMP || "C:\\Users\\Queen\\AppData\\Local\\Temp";
  const profile = resolve(profileRoot, "kilo", `chrome-profile-${process.pid}-${port}`);
  mkdirSync(profile, { recursive: true });
  const proc = spawn(chromePath, [
    "--headless=new",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profile}`,
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "about:blank",
  ], { stdio: "ignore" });
  for (let i = 0; i < 50; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (res.ok) break;
    } catch {}
    await new Promise((r) => setTimeout(r, 200));
  }
  return proc;
}

export async function connect() {
  const list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
  const target = list.find((t) => t.type === "page");
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((r, j) => {
    ws.onopen = r;
    ws.onerror = j;
  });
  let id = 0;
  const pending = new Map();
  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const { res, rej } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) rej(new Error(JSON.stringify(msg.error)));
      else res(msg.result);
    }
  };
  const send = (method, params = {}) =>
    new Promise((res, rej) => {
      const mid = ++id;
      pending.set(mid, { res, rej });
      ws.send(JSON.stringify({ id: mid, method, params }));
    });
  return { send, ws };
}

export async function evaluate(send, expression, awaitPromise = true) {
  const r = await send("Runtime.evaluate", {
    expression,
    returnByValue: true,
    awaitPromise,
  });
  if (r.exceptionDetails) throw new Error(r.exceptionDetails.text + " " + (r.exceptionDetails.exception?.description ?? ""));
  return r.result.value;
}

export async function shot(send, url, file, { width = 1440, height = 1000, full = true, wait = 3000, prep = "", mobile = false } = {}) {
  await send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile,
  });
  await send("Page.navigate", { url });
  await new Promise((r) => setTimeout(r, wait));
  if (prep) {
    await evaluate(send, prep);
    await new Promise((r) => setTimeout(r, 1200));
  }
  const metrics = await evaluate(send, `({h: document.documentElement.scrollHeight, w: document.documentElement.scrollWidth})`);
  let clip;
  if (full) {
    const maxH = Math.min(metrics.h, 12000);
    clip = { x: 0, y: 0, width: Math.min(metrics.w, width), height: maxH, scale: 1 };
    await send("Emulation.setDeviceMetricsOverride", { width, height: maxH, deviceScaleFactor: 1, mobile });
    await new Promise((r) => setTimeout(r, 1500));
  }
  const r = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: full, ...(full ? { clip } : {}) });
  writeFileSync(file, Buffer.from(r.data, "base64"));
  return metrics;
}

export function close(proc) {
  try {
    spawn("taskkill", ["/PID", String(proc.pid), "/T", "/F"], { stdio: "ignore" });
  } catch {}
  try {
    proc.kill();
  } catch {}
}

if (process.argv[1] && process.argv[1].endsWith("cdp.mjs")) {
  const proc = await launch();
  console.log("launched");
  setTimeout(() => proc.kill(), 1000);
}
