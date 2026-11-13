export const SHOPEE = "https://shopee.co.th/narichyshop";
export const LINE_OA = "http://line.me/ti/p/~@narichy";
const FINN_SUPPLEMENT = "https://shopee.co.th/narichyshop/29310820621";
const FINN_SPRAY = "https://shopee.co.th/narichyshop/18082240400";
const FINN_SERUM = "https://shopee.co.th/narichyshop/53205125514";
const FINN_SOAP = "https://shopee.co.th/narichyshop/17486677158";

export const announcementMessages = [
  "Free shipping on orders over ฿500",
  "Discreet packaging — no product names on the parcel",
  "4,000,000+ Finn Spray bottles sold",
];

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const leftNav: NavItem[] = [
  {
    label: "SHOP",
    href: "/collections/products",
    children: [
      { label: "BEST SELLERS", href: "/collections/best-sellers" },
      { label: "ALL PRODUCTS", href: "/collections/products" },
    ],
  },
];

export const rightNav: NavItem[] = [
  { label: "ABOUT", href: "/pages/about-page" },
];

export type ProductVariant = {
  id: string;
  label: string;
  price: number;
  compareAt?: number;
  image?: string;
  note?: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductDetail = {
  slug: string;
  title: string;
  thaiTitle: string;
  vendor: string;
  category: string;
  cutline: string;
  tagline: string;
  description: string;
  story: string[];
  rating: string;
  reviews: string;
  reviewCount: number;
  price: number;
  compareAt?: number;
  image: string;
  images: { src: string; alt: string }[];
  variants: ProductVariant[];
  bestSeller: boolean;
  badges: string[];
  benefits: string[];
  ingredients: string[];
  howToUse: string[];
  size: string;
  madeIn: string;
  spec: string;
  specs: ProductSpec[];
  shopee: string;
  line: string;
  disclaimer?: string;
};

export const productDetails: ProductDetail[] = [
  {
    slug: "narichy-finn",
    title: "Narichy Finn",
    thaiTitle: "น้ำชงนาริชชี่",
    vendor: "Narichy",
    category: "Inner wellness",
    cutline: "น้ำชง ลดกลิ่น ปรับสมดุลย์ภายใน",
    tagline: "Daily inner wellness, from the inside out",
    description:
      "A pomegranate and strawberry drink mix with collagen, vitamin C and zinc — created for women who want to feel balanced, fresh and confident every day.",
    story: [
      "Narichy Finn is our inside-out answer to everyday feminine freshness. The fine pink powder dissolves clear in water and delivers a light pomegranate-strawberry flavour with 0% added sugar.",
      "Formulated around pomegranate extract, collagen peptides, vitamin C and zinc, it supports your daily wellness routine and helps you feel comfortable and confident from the inside out.",
    ],
    rating: "4.8",
    reviews: "1,148 Reviews",
    reviewCount: 1148,
    price: 169,
    compareAt: 290,
    image: "/images/products/narichy-supplement/finn-drink-1.jpg",
    images: [
      {
        src: "/images/products/narichy-supplement/finn-drink-1.jpg",
        alt: "Narichy Finn drink mix jar with pomegranate artwork",
      },
      {
        src: "/images/products/narichy-supplement/finn-drink-100g.jpg",
        alt: "Narichy Finn 100 g jar with the No.1 badge",
      },
      {
        src: "/images/products/narichy-supplement/finn-drink-lifestyle.jpg",
        alt: "Narichy Finn drink served in a glass with pomegranate and strawberries",
      },
      {
        src: "/images/products/narichy-supplement/finn-drink-ingredients.jpg",
        alt: "Narichy Finn ingredient breakdown graphic",
      },
    ],
    variants: [
      {
        id: "100g",
        label: "100 g jar",
        price: 169,
        compareAt: 290,
        note: "About 10 servings",
      },
    ],
    bestSeller: true,
    badges: ["Thai FDA registered", "0% added sugar", "2,000 mg collagen", "Made in Thailand"],
    benefits: [
      "Supports a balanced inner environment",
      "Helps manage everyday intimate odour",
      "Collagen and vitamin C for skin support",
      "0% added sugar and easy to drink daily",
    ],
    ingredients: [
      "Pomegranate fruit extract",
      "Strawberry juice powder",
      "Hydrolysed collagen peptides (2,000 mg)",
      "Vitamin C",
      "Zinc",
      "Prebiotic fibre",
    ],
    howToUse: [
      "Add one heaped scoop (about 10 g) to 150 ml of cool water.",
      "Stir until fully dissolved and drink once daily, preferably in the morning.",
      "Use consistently for at least four weeks as part of a balanced diet.",
    ],
    size: "100 g jar · about 10 servings",
    madeIn: "Thailand",
    spec: "Powder drink mix",
    specs: [
      { label: "Format", value: "Powder drink mix" },
      { label: "Size", value: "100 g jar" },
      { label: "Flavour", value: "Pomegranate & strawberry" },
      { label: "Key actives", value: "Collagen, vitamin C, zinc" },
    ],
    shopee: FINN_SUPPLEMENT,
    line: LINE_OA,
    disclaimer:
      "Food supplements should not replace a varied, balanced diet and a healthy lifestyle. Results vary from person to person.",
  },
  {
    slug: "finn-spray",
    title: "Finn Spray",
    thaiTitle: "สเปรย์ฟิน",
    vendor: "Narichy",
    category: "Daily freshness",
    cutline: "สเปรย์น้องสาวสูตรอ่อนโยน",
    tagline: "Pocket-sized freshness with a sweet finish",
    description:
      "A food-grade intimate body spray in Vanilla Caramel and Strawberry. One or two pumps help neutralise odour and leave a soft, sweet scent.",
    story: [
      "Finn Spray is the product that started it all. Its fine mist is made with food-grade ingredients and comes in two comforting scents: creamy Vanilla Caramel and juicy Strawberry.",
      "The alcohol-free formula is gentle enough for daily use, layers easily under clothes and slips discreetly into your bag for freshness whenever you need it.",
    ],
    rating: "4.9",
    reviews: "854 Reviews",
    reviewCount: 854,
    price: 199,
    compareAt: 250,
    image: "/images/products/finn-spray-vanilla/vanilla-bottle.jpg",
    images: [
      {
        src: "/images/products/finn-spray-vanilla/vanilla-bottle.jpg",
        alt: "Finn Spray Vanilla Caramel 10 ml bottle",
      },
      {
        src: "/images/products/finn-spray-vanilla/vanilla-box.jpg",
        alt: "Finn Spray Vanilla Caramel carton and bottle",
      },
      {
        src: "/images/products/finn-spray-strawberry/strawberry-box.jpg",
        alt: "Finn Spray Strawberry carton and bottle",
      },
      {
        src: "/images/products/finn-spray-both/finn-spray-lifestyle.jpg",
        alt: "Finn Spray bottles styled in a bathroom basket",
      },
    ],
    variants: [
      {
        id: "vanilla",
        label: "Vanilla Caramel",
        price: 199,
        compareAt: 250,
        image: "/images/products/finn-spray-vanilla/vanilla-bottle.jpg",
        note: "10 ml",
      },
      {
        id: "strawberry",
        label: "Strawberry",
        price: 199,
        compareAt: 250,
        image: "/images/products/finn-spray-strawberry/strawberry-box.jpg",
        note: "10 ml",
      },
      {
        id: "duo",
        label: "Duo set",
        price: 390,
        compareAt: 500,
        image: "/images/products/finn-spray-both/finn-spray-lifestyle.jpg",
        note: "2 × 10 ml",
      },
    ],
    bestSeller: true,
    badges: ["Food-grade", "Alcohol-free", "Dermatologically tested", "2 scents"],
    benefits: [
      "Helps reduce intimate odour",
      "Food-grade, gentle formula",
      "Adds a soft scent and taste",
      "Fits in your bag for all-day freshness",
    ],
    ingredients: [
      "Purified water",
      "Food-grade glycerin",
      "Vanilla caramel or strawberry flavour",
      "Chamomile extract",
      "Aloe vera",
      "Lactic acid",
    ],
    howToUse: [
      "Shake well before use.",
      "After showering, spray one or two pumps onto clean, dry external intimate skin from about 15 cm away.",
      "Reapply as needed throughout the day. For external use only.",
    ],
    size: "10 ml",
    madeIn: "Thailand",
    spec: "Intimate body mist",
    specs: [
      { label: "Format", value: "Intimate body mist" },
      { label: "Size", value: "10 ml" },
      { label: "Scents", value: "Vanilla Caramel / Strawberry" },
      { label: "Key ingredient", value: "Food-grade glycerin" },
    ],
    shopee: FINN_SPRAY,
    line: LINE_OA,
    disclaimer:
      "For external use only. Avoid contact with eyes and broken skin. Stop using if irritation occurs.",
  },
  {
    slug: "finn-serum",
    title: "Narichy Finn Serum",
    thaiTitle: "เซรั่มปิ๊เรืองแสง",
    vendor: "Narichy",
    category: "Brightening care",
    cutline: "ปรับผิวจุดซ่อนเร้นขาวกระจ่างใส",
    tagline: "Bright, soft and peach-kissed",
    description:
      "A peach-scented intimate and body serum with French Alpha Arbutin that moisturises, smooths and helps brighten the look of delicate skin.",
    story: [
      "The viral เซรั่มปิ๊เรืองแสง is a lightweight, fast-absorbing serum made for the most delicate skin. French Alpha Arbutin and niacinamide help improve the look of uneven tone, while peach extract leaves a soft, clean scent.",
      "Hyaluronic acid and squalane cushion the skin with lasting moisture, so it feels smooth and comfortable rather than tight or sticky.",
    ],
    rating: "4.9",
    reviews: "175 Reviews",
    reviewCount: 175,
    price: 490,
    compareAt: 590,
    image: "/images/products/narichy-finn-serum/serum-box.jpg",
    images: [
      {
        src: "/images/products/narichy-finn-serum/serum-box.jpg",
        alt: "Narichy Finn Serum White & Bright carton and tube",
      },
      {
        src: "/images/products/narichy-finn-serum/serum-tube.jpg",
        alt: "Narichy Finn Serum 30 ml tube",
      },
      {
        src: "/images/products/narichy-finn-serum/serum-lifestyle.jpg",
        alt: "Narichy Finn Serum campaign visual with peach artwork",
      },
      {
        src: "/images/products/narichy-finn-serum/serum-ingredients.jpg",
        alt: "Narichy Finn Serum key ingredients graphic",
      },
    ],
    variants: [
      {
        id: "30ml",
        label: "30 ml",
        price: 490,
        compareAt: 590,
        note: "Dermatologically tested",
      },
    ],
    bestSeller: true,
    badges: ["Dermatologically tested", "French Alpha Arbutin", "Peach scent", "30 ml"],
    benefits: [
      "Helps even the look of skin tone",
      "Deeply moisturises delicate skin",
      "French Alpha Arbutin and niacinamide",
      "Soft peach scent, non-sticky finish",
    ],
    ingredients: [
      "French Alpha Arbutin",
      "Niacinamide",
      "Peach extract",
      "Hyaluronic acid",
      "Squalane",
      "Vitamin E",
    ],
    howToUse: [
      "Apply one or two pumps to clean, dry external skin morning and night.",
      "Massage gently until absorbed.",
      "Patch-test before first use and avoid broken or irritated skin.",
    ],
    size: "30 ml",
    madeIn: "Thailand",
    spec: "Brightening serum",
    specs: [
      { label: "Format", value: "Brightening serum" },
      { label: "Size", value: "30 ml" },
      { label: "Scent", value: "Soft peach" },
      { label: "Key ingredient", value: "French Alpha Arbutin" },
    ],
    shopee: FINN_SERUM,
    line: LINE_OA,
    disclaimer:
      "For external use only. Patch-test before first use. Stop using if irritation occurs.",
  },
  {
    slug: "cleansing-mousse-foam",
    title: "Cleansing Mousse Foam",
    thaiTitle: "มูสโฟมล้างทำความสะอาดจุดซ่อนเร้น",
    vendor: "Narichy",
    category: "Daily cleansing",
    cutline: "โฟมล้างน้องสาว สูตรอ่อนโยน",
    tagline: "Cloud-soft cleansing, every day",
    description:
      "A gentle cleansing mousse that turns into a soft foam to lift away discharge, sweat and odour without stripping sensitive skin.",
    story: [
      "A daily cleanser should leave you feeling fresh, never tight. This airy mousse turns into a soft foam that lifts away discharge, sweat and odour while respecting your natural pH.",
      "The pH 4.5 formula is alcohol-free, paraben-free and made with organic extract and natural ingredients, so delicate skin feels clean, comfortable and cared for.",
    ],
    rating: "4.8",
    reviews: "320 Reviews",
    reviewCount: 320,
    price: 199,
    compareAt: 260,
    image: "/images/products/cleansing-mousse-foam/mousse-box.jpg",
    images: [
      {
        src: "/images/products/cleansing-mousse-foam/mousse-box.jpg",
        alt: "Narichy Cleansing Mousse Foam carton and 100 ml pump bottle",
      },
      {
        src: "/images/products/cleansing-mousse-foam/mousse-texture.jpg",
        alt: "Narichy Cleansing Mousse Foam bottle nestled in soft foam",
      },
      {
        src: "/images/products/cleansing-mousse-foam/mousse-care.jpg",
        alt: "Narichy Cleansing Mousse Foam gentle daily cleansing visual",
      },
      {
        src: "/images/products/cleansing-mousse-foam/mousse-benefits.jpg",
        alt: "Narichy Cleansing Mousse Foam pH and ingredient benefits",
      },
      {
        src: "/images/products/cleansing-mousse-foam/mousse-howto.jpg",
        alt: "Narichy Cleansing Mousse Foam three-step how to use guide",
      },
    ],
    variants: [
      {
        id: "100ml",
        label: "100 ml",
        price: 199,
        compareAt: 260,
        note: "pH 4.5 · alcohol-free",
      },
    ],
    bestSeller: false,
    badges: ["0% alcohol", "Paraben-free", "pH 4.5 balanced", "For sensitive skin"],
    benefits: [
      "Gentle daily intimate cleanse",
      "Helps control odour and discharge",
      "pH 4.5 balanced and alcohol-free",
      "Rinses clean without a tight feeling",
    ],
    ingredients: [
      "Organic extract",
      "Natural ingredients",
      "pH-balancing complex",
      "Gentle cleansing base",
      "Purified water",
    ],
    howToUse: [
      "Wet the external intimate area with warm water.",
      "Pump one or two doses of foam onto your hand and cleanse gently.",
      "Rinse thoroughly and pat dry. Use once daily.",
    ],
    size: "100 ml",
    madeIn: "Thailand",
    spec: "Foaming cleanser",
    specs: [
      { label: "Format", value: "Foaming cleanser" },
      { label: "Size", value: "100 ml" },
      { label: "Skin", value: "External intimate skin" },
      { label: "Formula", value: "pH 4.5 · alcohol-free · paraben-free" },
    ],
    shopee: SHOPEE,
    line: LINE_OA,
    disclaimer:
      "For external use only. If irritation or unusual discharge persists, consult a healthcare professional.",
  },
  {
    slug: "finn-soap",
    title: "Finn Soap",
    thaiTitle: "สบู่ฟิน",
    vendor: "Narichy",
    category: "Daily cleansing",
    cutline: "สบู่อนามัยสำหรับจุดซ่อนเร้น",
    tagline: "The classic bar, reimagined",
    description:
      "A compact intimate cleansing bar with a soft rose finish that keeps you fresh while staying kind to sensitive skin.",
    story: [
      "Small enough to travel with, gentle enough for every day. Finn Soap creates a soft, creamy lather that rinses away odour and residue without leaving skin dry.",
      "Natural extracts and a pH-balanced base make it a simple, satisfying step in your daily routine — and the rose emboss looks lovely on the shelf too.",
    ],
    rating: "4.9",
    reviews: "2,256 Reviews",
    reviewCount: 2256,
    price: 69,
    compareAt: 99,
    image: "/images/products/Finn Soap/soap-box.jpg",
    images: [
      {
        src: "/images/products/Finn Soap/soap-box.jpg",
        alt: "Finn Soap carton and rose-embossed cleansing bar",
      },
      {
        src: "/images/products/Finn Soap/soap-lifestyle.jpg",
        alt: "Finn Soap styled on a bathroom tray",
      },
      {
        src: "/images/products/Finn Soap/soap-ingredients.jpg",
        alt: "Finn Soap benefits and ingredients graphic",
      },
      {
        src: "/images/products/Finn Soap/soap-set.jpg",
        alt: "Finn Soap bars styled with bathroom accessories",
      },
    ],
    variants: [
      {
        id: "single",
        label: "Single bar",
        price: 69,
        compareAt: 99,
        note: "30 g",
      },
      {
        id: "set3",
        label: "Set of 3",
        price: 199,
        compareAt: 297,
        note: "3 × 30 g",
      },
    ],
    bestSeller: true,
    badges: ["30 g", "pH-balanced", "Natural extracts", "Thai FDA registered"],
    benefits: [
      "Helps reduce intimate odour",
      "Gentle enough for daily use",
      "Maintains a comfortable pH balance",
      "Compact size for travel and gym bags",
    ],
    ingredients: [
      "Glycerin",
      "Rice bran oil",
      "Pomegranate extract",
      "Tea tree extract",
      "Aloe vera",
      "Rose fragrance",
    ],
    howToUse: [
      "Lather the bar with warm water.",
      "Cleanse the external intimate area gently.",
      "Rinse thoroughly and store the bar in a dry dish between uses.",
    ],
    size: "30 g",
    madeIn: "Thailand",
    spec: "Intimate cleansing bar",
    specs: [
      { label: "Format", value: "Intimate cleansing bar" },
      { label: "Size", value: "30 g" },
      { label: "Scent", value: "Soft rose" },
      { label: "Key ingredient", value: "Pomegranate extract" },
    ],
    shopee: FINN_SOAP,
    line: LINE_OA,
    disclaimer:
      "For external use only. Stop using if irritation occurs.",
  },
  {
    slug: "finy-secret",
    title: "Finy Secret",
    thaiTitle: "ฟินนี่ ซีเคร็ท",
    vendor: "Narichy",
    category: "Overnight care",
    cutline: "แคปซูลดูแลจุดซ่อนเร้น",
    tagline: "Your quiet little secret",
    description:
      "Soft, pre-measured intimate care capsules designed to support freshness and comfort as part of your evening routine.",
    story: [
      "Finy Secret — formerly Finn for Lady — is a discreet overnight capsule made for moments when you want a little extra support. Each capsule is pre-measured, individually wrapped and easy to use.",
      "The pH-friendly blend of herbal extracts, lactic acid and aloe vera helps maintain a fresh, comfortable feeling. Use it as part of your routine, always following the directions.",
    ],
    rating: "4.8",
    reviews: "96 Reviews",
    reviewCount: 96,
    price: 390,
    compareAt: 490,
    image: "/images/products/finy-secret/finy-secret-box.svg",
    images: [
      {
        src: "/images/products/finy-secret/finy-secret-box.svg",
        alt: "Finy Secret intimate care capsules carton",
      },
      {
        src: "/images/products/finy-secret/finy-secret-capsules.svg",
        alt: "Finy Secret intimate care capsules on a red background",
      },
    ],
    variants: [
      {
        id: "6",
        label: "6 capsules",
        price: 390,
        compareAt: 490,
        note: "Start with one box",
      },
      {
        id: "12",
        label: "12 capsules",
        price: 690,
        compareAt: 980,
        note: "Best value",
      },
    ],
    bestSeller: false,
    badges: ["6 capsules", "pH-friendly", "Discreet", "Made in Thailand"],
    benefits: [
      "Supports everyday intimate comfort",
      "Helps maintain freshness",
      "Pre-measured and easy to use",
      "Individually wrapped for discretion",
    ],
    ingredients: [
      "Herbal extract blend",
      "Lactic acid",
      "Aloe vera",
      "Glycerin",
      "Purified water",
    ],
    howToUse: [
      "Insert one capsule at night while lying down, as part of your routine.",
      "Use every two to three days, or as advised by your healthcare professional.",
      "Do not use during pregnancy, breastfeeding or if you have an active infection without medical advice.",
    ],
    size: "6 capsules",
    madeIn: "Thailand",
    spec: "Intimate care capsules",
    specs: [
      { label: "Format", value: "Intimate care capsules" },
      { label: "Size", value: "6 capsules" },
      { label: "Use", value: "Evening routine" },
      { label: "Key ingredient", value: "Herbal extract blend" },
    ],
    shopee: SHOPEE,
    line: LINE_OA,
    disclaimer:
      "If you are pregnant, breastfeeding or have a medical condition, consult a healthcare professional before use. This product is not a medicine and does not treat infections.",
  },
];

export type Product = {
  slug: string;
  title: string;
  cutline: string;
  rating: string;
  reviews: string;
  price: string;
  image: string;
  href: string;
};

export const products: Product[] = productDetails
  .filter((product) => product.bestSeller)
  .map((product) => ({
    slug: product.slug,
    title: product.title,
    cutline: product.cutline,
    rating: product.rating,
    reviews: product.reviews,
    price: product.price.toFixed(2),
    image: product.image,
    href: `/products/${product.slug}`,
  }));

export const allProducts = productDetails.map((product) => ({
  slug: product.slug,
  title: product.title,
  thaiTitle: product.thaiTitle,
  cutline: product.cutline,
  rating: product.rating,
  reviews: product.reviews,
  price: product.price,
  compareAt: product.compareAt,
  image: product.image,
  href: `/products/${product.slug}`,
  bestSeller: product.bestSeller,
  badges: product.badges,
  category: product.category,
}));

export function getProduct(slug: string) {
  return productDetails.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 4) {
  const current = getProduct(slug);
  return productDetails
    .filter((product) => product.slug !== slug)
    .sort((a, b) => {
      if (a.bestSeller !== b.bestSeller) return a.bestSeller ? -1 : 1;
      if (current && a.category === current.category) return -1;
      if (current && b.category === current.category) return 1;
      return 0;
    })
    .slice(0, limit);
}

export type HeroSlide = {
  title?: string;
  description?: string;
  href: string;
  desktop: string;
  mobile: string;
  align: "left" | "right";
  imageAlt: string;
};

export const heroSlides: HeroSlide[] = [
  {
    href: "/collections/products",
    desktop: "/images/hero/hero-slider-2.jpg",
    mobile: "/images/hero/hero-slider-2.jpg",
    align: "left",
    imageAlt: "Narichy Thailand product range banner",
  },
];

export const galleryImages = [
  {
    src: "/images/instagram/narichy-ig-1.jpg",
    alt: "Narichy Finn supplement held by a presenter in red",
  },
  {
    src: "/images/instagram/narichy-ig-2.jpg",
    alt: "Narichy Thailand giveaway winners in red outfits",
  },
  {
    src: "/images/instagram/narichy-ig-3.jpg",
    alt: "Narichy campaign reel with a couple laughing together",
  },
  {
    src: "/images/instagram/narichy-ig-4.jpg",
    alt: "Presenter at a Narichy Thailand event booth",
  },
  {
    src: "/images/instagram/narichy-ig-5.jpg",
    alt: "Narichy presenter holding a Finn Spray product",
  },
  {
    src: "/images/instagram/narichy-ig-6.jpg",
    alt: "Narichy presenter explaining a body detox infographic",
  },
];

export const communityAccordions = [
  {
    title: "DISCOVER OUR PRODUCTS",
    icon: "leaf" as const,
    body: "Explore gentle everyday care for your most delicate skin, from Finn Spray to our collagen drink and serum.",
    href: SHOPEE,
    linkLabel: "SHOP NOW",
  },
  {
    title: "NEED HELP CHOOSING?",
    icon: "heart" as const,
    body: "Have a question you'd rather ask in private? Chat one-on-one with our team on LINE OA for honest, discreet advice.",
    href: LINE_OA,
    linkLabel: "CHAT ON LINE",
  },
];

export const communityPosts = [
  {
    title: "How to Build a Daily Feminine Care Routine",
    image: "/images/best-sellers/bestsellers-finnspray.jpg",
    href: "/products/finn-spray",
  },
  {
    title: "Inside-Out Care: Spray, Serum & Collagen Drink",
    image: "/images/best-sellers/bestsellers-serum-1.jpg",
    href: "/products/finn-serum",
  },
];

export type CleanBeautySlide = {
  title: string;
  lines: readonly [string, string];
  image: string;
  alt: string;
};

export const cleanBeautySlides: CleanBeautySlide[] = [
  {
    title: "Nature's Roots",
    lines: [
      "นาริชชี่เชื่อในพลังของธรรมชาติที่หล่อเลี้ยงและฟื้นฟู",
      "เราคัดสรรส่วนผสมอ่อนโยนจากธรรมชาติมาดูแลผู้หญิง",
    ],
    image: "/images/clean-beauty/clean-beauty-1.jpg",
    alt: "Natural botanicals that inspire Narichy gentle feminine care",
  },
  {
    title: "Gentle by Nature",
    lines: [
      "ความอ่อนโยนคือหัวใจของการดูแลจุดซ่อนเร้น",
      "ปราศจากสารที่ระคายเคือง ให้ทุกสัมผัสสบายใจ",
    ],
    image: "/images/clean-beauty/clean-beauty-2.jpg",
    alt: "Soft green landscape representing Narichy gentle formulas",
  },
  {
    title: "Pure Balance",
    lines: [
      "สมดุลที่ดีเริ่มจากความสดชื่นและเบาสบายจากภายใน",
      "เผยความมั่นใจอย่างเป็นธรรมชาติในทุกวัน",
    ],
    image: "/images/clean-beauty/clean-beauty-3.jpg",
    alt: "Clear water and calm beach representing freshness and pH balance",
  },
];

export type UgcCard = {
  poster?: string;
  video: string;
  productImage: string;
  productName: string;
  price: string;
  href: string;
};

const COMMUNITY_VIDEOS = "/videos/loved-by-the-community";

const finn = {
  supplement: {
    productImage: "/images/products/narichy-supplement/finn-drink-1.jpg",
    productName: "Narichy Finn",
    price: "THB 169",
    href: "/products/narichy-finn",
  },
  spray: {
    productImage: "/images/products/finn-spray-vanilla/vanilla-bottle.jpg",
    productName: "Finn Spray",
    price: "THB 199",
    href: "/products/finn-spray",
  },
  serum: {
    productImage: "/images/products/narichy-finn-serum/serum-box.jpg",
    productName: "Narichy Finn Serum",
    price: "THB 490",
    href: "/products/finn-serum",
  },
  mousse: {
    productImage: "/images/products/cleansing-mousse-foam/mousse-box.jpg",
    productName: "Cleansing Mousse Foam",
    price: "THB 199",
    href: "/products/cleansing-mousse-foam",
  },
};

export const ugcCards: UgcCard[] = [
  { video: `${COMMUNITY_VIDEOS}/narichy-supplement-video-1.mp4`, ...finn.supplement },
  { video: `${COMMUNITY_VIDEOS}/narichy-supplement-video-2.mp4`, ...finn.supplement },
  { video: `${COMMUNITY_VIDEOS}/narichy-supplement-video-3.mp4`, ...finn.supplement },
  { video: `${COMMUNITY_VIDEOS}/narichy-supplement-video-4.mp4`, ...finn.supplement },
  { video: `${COMMUNITY_VIDEOS}/narichy-finn-spray-video-1.mp4`, ...finn.spray },
  { video: `${COMMUNITY_VIDEOS}/narichy-finn-spray-video-2.mp4`, ...finn.spray },
  { video: `${COMMUNITY_VIDEOS}/narichy-finn-serum-video-1.mp4`, ...finn.serum },
  { video: `${COMMUNITY_VIDEOS}/narichy-finn-serum-video-2.mp4`, ...finn.serum },
  { video: `${COMMUNITY_VIDEOS}/narichy-finn-serum-video-3.mp4`, ...finn.serum },
  { video: `${COMMUNITY_VIDEOS}/muse-foam-video-1.mp4`, ...finn.mousse },
];

export const aboutProducts = [
  {
    title: "Finn Spray",
    text: "The hero product that started it all. A gentle intimate spray in Vanilla Caramel and Strawberry that helps eliminate odor and leaves skin feeling fresh and confident all day.",
    price: "THB 199",
    link: "/products/finn-spray",
    image: "/images/products/finn-spray-vanilla/vanilla-bottle.jpg",
  },
  {
    title: "Narichy Finn Serum",
    text: "A gentle brightening serum powered by French Alpha Arbutin. It moisturizes, smooths, and helps even out the look of delicate skin — the viral เซรั่มปิ๊เรืองแสง.",
    price: "THB 490",
    link: "/products/finn-serum",
    image: "/images/products/narichy-finn-serum/serum-box.jpg",
  },
  {
    title: "Narichy Finn",
    text: "Inside-out care in a daily drink. A pomegranate and strawberry blend with collagen, vitamin C and zinc to support balance, freshness and skin from within.",
    price: "THB 169",
    link: "/products/narichy-finn",
    image: "/images/products/narichy-supplement/finn-drink-1.jpg",
  },
  {
    title: "Cleansing Mousse Foam",
    text: "A cloud-soft daily cleanser that lifts away discharge, sweat and odour while respecting sensitive skin. Soap-free, SLS-free and pH-balanced.",
    price: "THB 199",
    link: "/products/cleansing-mousse-foam",
    image: "/images/products/cleansing-mousse-foam/mousse-box.jpg",
  },
  {
    title: "Finn Soap",
    text: "A gentle daily intimate bar that helps maintain pH balance and keeps musty odors away, while staying kind to sensitive skin.",
    price: "THB 69",
    link: "/products/finn-soap",
    image: "/images/products/Finn Soap/soap-box.jpg",
  },
  {
    title: "Finy Secret",
    text: "Soft, pre-measured overnight capsules for extra freshness and comfort. Individually wrapped, pH-friendly and easy to use as part of your routine.",
    price: "THB 390",
    link: "/products/finy-secret",
    image: "/images/products/finy-secret/finy-secret-box.svg",
  },
];

export const promiseItems = [
  {
    outlet: "THBA 2023",
    title: "Rising Star Business of Feminine Care",
    link: SHOPEE,
    image: "/images/best-sellers/bestsellers-finnspray.jpg",
  },
  {
    outlet: "SOCIAL PROOF",
    title: "Over 4,000,000 bottles of Finn Spray sold",
    link: SHOPEE,
    image: "/images/best-sellers/bestsellers-supplement-3.jpg",
  },
  {
    outlet: "SAFETY",
    title: "Thai FDA (อย.) registered formulas",
    link: SHOPEE,
    image: "/images/best-sellers/bestsellers-serum-1.jpg",
  },
  {
    outlet: "DISCREET",
    title: "Plain parcels with no product names on the box",
    link: LINE_OA,
    image: "/images/instagram/narichy-ig-2.jpg",
  },
  {
    outlet: "INGREDIENTS",
    title: "French Alpha Arbutin and imported extracts",
    link: LINE_OA,
    image: "/images/instagram/narichy-ig-1.jpg",
  },
];

export const footerMenu = [
  { label: "All Products", href: "/collections/products" },
  { label: "Best Sellers", href: "/collections/best-sellers" },
  { label: "About Us", href: "/pages/about-page" },
  { label: "Shopee", href: SHOPEE },
  { label: "LINE OA (@narichy)", href: LINE_OA },
];
