const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const vercelUrl = vercelHost
  ? vercelHost.startsWith("http")
    ? vercelHost
    : `https://${vercelHost}`
  : null;
const fallbackUrl = vercelUrl ?? "http://localhost:3000";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallbackUrl
).replace(/\/$/, "");

export const siteConfig = {
  name: "Narichy Thailand",
  shortName: "Narichy",
  url: siteUrl,
  locale: "th_TH",
  description:
    "Narichy Thailand is an award-winning feminine intimate care and beauty brand. Shop Finn Spray, Finn Serum, collagen drinks, and gentle daily washes with discreet delivery and Thai FDA-registered formulas.",
  keywords: [
    "Narichy",
    "Narichy Thailand",
    "นาริชชี่",
    "feminine intimate care",
    "Finn Spray",
    "Narichy Finn Serum",
    "นาริชชี่ ฟินสเปรย์",
    "เซรั่มปิ๊เรืองแสง",
    "intimate care Thailand",
    "feminine wash",
    "collagen drink",
    "Thai FDA",
    "THBA 2023",
  ],
  social: {
    instagram: "https://www.instagram.com/narichy.thailand/",
    tiktok: "https://www.tiktok.com/search?q=narichy",
    shopee: "https://shopee.co.th/narichyshop",
    line: "https://line.me/R/ti/p/@narichy",
  },
  founder: "Ning Thannaree Thipthanamonsiri",
  address: {
    addressLocality: "Bangkok",
    addressCountry: "TH",
  },
} as const;
