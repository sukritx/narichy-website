export const SHOPEE = "https://shopee.co.th/narichyshop";
const LINE_OA = "https://line.me/R/ti/p/@narichy";
const FINN_SPRAY = "https://shopee.co.th/narichyshop/18082240400";
const FINN_SERUM = "https://shopee.co.th/narichyshop/53205125514";

export const announcementMessages = [
  "Free shipping on orders over ฿500",
  "Discreet packaging — no product names on the parcel",
  "4,000,000+ Finn Spray bottles sold",
];

export type NavItem = {
  label: string;
  href: string;
};

export const leftNav: NavItem[] = [
  {
    label: "BEST SELLERS",
    href: "https://shopee.co.th/narichyshop",
  },
];

export const rightNav: NavItem[] = [
  { label: "ABOUT", href: "/pages/about-page" },
];

export type Product = {
  title: string;
  cutline: string;
  rating: string;
  reviews: string;
  price: string;
  image: string;
  href: string;
};

export const products: Product[] = [
  {
    title: "Narichy Finn",
    cutline: "น้ำชง ลดกลิ่น ปรับสมดุลย์ภายใน",
    rating: "4.8",
    reviews: "1,148 Reviews",
    price: "169.00",
    image: "/images/best-sellers/bestsellers-supplement-3.jpg",
    href: "https://shopee.co.th/narichyshop/29310820621",
  },
  {
    title: "Finn Spray",
    cutline: "สเปรย์น้องสาวสูตรอ่อนโยน",
    rating: "4.9",
    reviews: "854 Reviews",
    price: "199.00",
    image: "/images/best-sellers/bestsellers-finnspray.jpg",
    href: "https://shopee.co.th/narichyshop/18082240400",
  },
  {
    title: "Narichy Finn Serum",
    cutline: "ปรับผิวจุดซ่อนเร้นขาวกระจ่างใส",
    rating: "4.9",
    reviews: "175 Reviews",
    price: "490.00",
    image: "/images/best-sellers/bestsellers-serum-1.jpg",
    href: "https://shopee.co.th/narichyshop/53205125514",
  },
  {
    title: "Finn Soap",
    cutline: "สบู่อนามัยสำหรับจุดซ่อนเร้น",
    rating: "4.9",
    reviews: "2,256 Reviews",
    price: "69.00",
    image: "/images/best-sellers/bestsellers-finnsoap-1.jpg",
    href: "https://shopee.co.th/narichyshop/17486677158",
  },
];

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
    href: "https://shopee.co.th/narichyshop",
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
    href: FINN_SPRAY,
  },
  {
    title: "Inside-Out Care: Spray, Serum & Collagen Drink",
    image: "/images/best-sellers/bestsellers-serum-1.jpg",
    href: FINN_SERUM,
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
    productImage: "/images/best-sellers/bestsellers-supplement-3.jpg",
    productName: "Narichy Finn",
    price: "THB 169",
    href: "https://shopee.co.th/narichyshop/29310820621",
  },
  spray: {
    productImage: "/images/best-sellers/bestsellers-finnspray.jpg",
    productName: "Finn Spray",
    price: "THB 199",
    href: "https://shopee.co.th/narichyshop/18082240400",
  },
  serum: {
    productImage: "/images/best-sellers/bestsellers-serum-1.jpg",
    productName: "Narichy Finn Serum",
    price: "THB 490",
    href: "https://shopee.co.th/narichyshop/53205125514",
  },
  soap: {
    productImage: "/images/best-sellers/bestsellers-finnsoap-1.jpg",
    productName: "Finn Soap",
    price: "THB 69",
    href: "https://shopee.co.th/narichyshop/17486677158",
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
  { video: `${COMMUNITY_VIDEOS}/muse-foam-video-1.mp4`, ...finn.soap },
];

export const aboutProducts = [
  {
    title: "Finn Spray",
    text: "The hero product that started it all. A gentle intimate spray in Vanilla Caramel and Strawberry that helps eliminate odor and leaves skin feeling fresh and confident all day.",
    price: "THB 199",
    link: SHOPEE,
    image: "/images/best-sellers/bestsellers-finnspray.jpg",
  },
  {
    title: "Narichy Finn Serum",
    text: "A gentle brightening serum powered by French Alpha Arbutin. It moisturizes, smooths, and helps even out the look of delicate skin — the viral เซรั่มปิ๊เรืองแสง.",
    price: "THB 490",
    link: SHOPEE,
    image: "/images/best-sellers/bestsellers-serum-1.jpg",
  },
  {
    title: "Narichy Drink",
    text: "Inside-out care in a sachet. A powdered supplement with 2,000 mg of collagen that helps balance internal odor, reduce discharge, and support firmer-looking skin.",
    price: "THB 169",
    link: SHOPEE,
    image: "/images/best-sellers/bestsellers-supplement-3.jpg",
  },
  {
    title: "Finn Soap",
    text: "A gentle daily intimate wash that helps maintain pH balance and keeps musty odors away, while staying kind to sensitive skin.",
    price: "THB 69",
    link: SHOPEE,
    image: "/images/best-sellers/bestsellers-finnsoap-1.jpg",
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
  { label: "Best Sellers", href: SHOPEE },
  { label: "Finn Spray", href: FINN_SPRAY },
  { label: "Finn Serum", href: FINN_SERUM },
  { label: "About Us", href: "/pages/about-page" },
  { label: "LINE OA (@narichy)", href: LINE_OA },
];
