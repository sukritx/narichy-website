export const SRC = "https://beautyofjoseon.com";
export const asset = (path: string) => `/sites/beautyofjoseon/${path}`;
export const srcUrl = (path: string) => `${SRC}${path}`;

export const announcementMessages = [
  "Free shipping on orders over $70",
  "New to BOJ? Sign up & Save 20%!",
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
  priceLabel: string;
  priceStatus: string;
  image: string;
  href: string;
  sizes?: string[];
};

export const products: Product[] = [
  {
    title: "Narichy Finn",
    cutline: "น้ำชง ลดกลิ่น ปรับสมดุลย์ภายใน",
    rating: "4.8",
    reviews: "1,148 Reviews",
    priceLabel: "Save 25%",
    priceStatus: "Sold Out",
    image: "/images/best-sellers/bestsellers-supplement-3.jpg",
    href: srcUrl("/products/revive-ritual-eye-duo-global"),
  },
  {
    title: "Finn Spray",
    cutline: "สเปรย์น้องสาวสูตรอ่อนโยน",
    rating: "4.9",
    reviews: "854 Reviews",
    priceLabel: "Save 25%",
    priceStatus: "Sold Out",
    image: "/images/best-sellers/bestsellers-finnspray.jpg",
    href: srcUrl("/products/deep-double-cleansing-duo"),
    sizes: ["Large", "Original"],
  },
  {
    title: "Narichy Finn Serum",
    cutline: "ปรับผิวจุดซ่อนเร้นขาวกระจ่างใส",
    rating: "4.9",
    reviews: "175 Reviews",
    priceLabel: "Save 20%",
    priceStatus: "Sold Out",
    image: "/images/best-sellers/bestsellers-serum-1.jpg",
    href: srcUrl("/products/glass-skin-duo"),
    sizes: ["Large", "Original"],
  },
  {
    title: "Finn Soap",
    cutline: "สบู่อนามัยสำหรับจุดซ่อนเร้น",
    rating: "4.9",
    reviews: "2,256 Reviews",
    priceLabel: "SHOP",
    priceStatus: "Sold Out",
    image: "/images/best-sellers/bestsellers-finnspray.jpg",
    href: srcUrl("/products/get-glowing-ritual-skincare-set-global"),
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

export type Shade = {
  code: string;
  description: string;
  image: string;
  background: string;
  textColor: string;
};

export const shades: Shade[] = [
  { code: "15C", description: "Fair shade with cool undertones", image: asset("images/shade-15C.png"), background: "#e9cfc2", textColor: "#000000" },
  { code: "17N", description: "Fair shade with neutral undertones", image: asset("images/shade-17N.png"), background: "#e7c8b0", textColor: "#000000" },
  { code: "21W", description: "Light shade with warm undertones", image: asset("images/shade-21W.png"), background: "#dfb994", textColor: "#000000" },
  { code: "23N", description: "Light shade with neutral undertones", image: asset("images/shade-23N.png"), background: "#d8ad8d", textColor: "#000000" },
  { code: "25W", description: "Light-medium shade with warm undertones", image: asset("images/shade-25W.png"), background: "#ce9d72", textColor: "#000000" },
  { code: "29N", description: "Light-medium shade with neutral undertones", image: asset("images/shade-29N.png"), background: "#c18e6c", textColor: "#000000" },
  { code: "33N", description: "Medium shade with neutral undertones", image: asset("images/shade-33N.png"), background: "#b17a57", textColor: "#000000" },
  { code: "39W", description: "Medium-tan shade with warm undertones", image: asset("images/shade-39W.png"), background: "#9a6547", textColor: "#ffffff" },
  { code: "43W", description: "Tan shade with warm undertones", image: asset("images/shade-43W.png"), background: "#89553d", textColor: "#ffffff" },
  { code: "45N", description: "Tan shade with neutral undertones", image: asset("images/shade-45N.png"), background: "#7c4d3d", textColor: "#ffffff" },
  { code: "47N", description: "Tan-deep shade with neutral undertones", image: asset("images/shade-47N.png"), background: "#70473d", textColor: "#ffffff" },
  { code: "51N", description: "Deep shade with neutral undertones", image: asset("images/shade-51N.png"), background: "#603b34", textColor: "#ffffff" },
  { code: "54N", description: "Deep shade with neutral undertones", image: asset("images/shade-54N.png"), background: "#52332e", textColor: "#ffffff" },
  { code: "59N", description: "Rich-deep shade with neutral undertones", image: asset("images/shade-59N.png"), background: "#422a27", textColor: "#ffffff" },
];

export const ingredientCards = [
  { name: "Ginseng", label: "Anti-Aging Hero", image: asset("images/ing-ginseng.jpg"), hover: asset("images/ing-ginseng-hover.webp"), href: srcUrl("/collections/ginseng") },
  { name: "Rice", label: "The Brightening Hydrator", image: asset("images/ing-rice.jpg"), hover: asset("images/ing-rice-hover.webp"), href: srcUrl("/collections/rice-bran") },
  { name: "Green Tea", label: "The Soothing Defender", image: asset("images/ing-green-tea.jpg"), hover: asset("images/ing-green-tea-hover.webp"), href: srcUrl("/collections/green-tea") },
  { name: "Red Bean", label: "The Gentle Refiner", image: asset("images/ing-red-bean.jpg"), hover: asset("images/ing-red-bean-hover.webp"), href: srcUrl("/collections/red-bean") },
  { name: "Propolis", label: "The Healing Shield", image: asset("images/ing-propolis.jpg"), hover: asset("images/ing-propolis-hover.webp"), href: srcUrl("/collections/propolis") },
  { name: "Green Plum", label: "The Radiance Refresher", image: asset("images/ing-green-plum.jpg"), hover: asset("images/ing-green-plum-hover.webp"), href: srcUrl("/collections/green-plum-plum-flower") },
  { name: "Centella", label: "The Calming Healer", image: asset("images/ing-centella.jpg"), hover: asset("images/ing-centella-hover.webp"), href: srcUrl("/collections/centella-asiatica") },
];

export const galleryImages = [
  "ig-1.webp", "ig-2.webp", "ig-3.webp", "ig-4.webp", "ig-5.webp", "ig-6.webp",
].map((name, i) => ({
  src: asset(`images/${name}`),
  alt: [
    "A cream smear on a white surface",
    "A woman touching her face",
    "A group of cream bottles",
    "A close up of a yogurt texture",
    "A basket of root vegetables",
    "A woman holding a cream tube",
  ][i],
}));

export const communityAccordions = [
  {
    title: "DISCOVER OUR INGREDIENTS",
    icon: "leaf" as const,
    body: "Explore the benefits of our key Hanbang ingredients and find the best products for your skin.",
    href: srcUrl("/pages/ingredients"),
    linkLabel: "LEARN MORE",
  },
  {
    title: "TAKE THE SKIN QUIZ",
    icon: "heart" as const,
    body: "Find your perfect routine in under a minute. Take the skin quiz and get personalized product picks just for you.",
    href: srcUrl("/pages/quiz-03-17-2025"),
    linkLabel: "TAKE THE QUIZ",
  },
];

export const communityPosts = [
  {
    title: "The Right Order for Your Full Revive Routine",
    image: asset("images/blog-revive.png"),
    href: srcUrl("/blogs/news/the-right-order-for-your-full-revive-routine"),
  },
  {
    title: "The Simplest Guide to Double Cleansing",
    image: asset("images/blog-cleansing.jpg"),
    href: srcUrl("/blogs/news/the-simplest-guide-to-double-cleansing"),
  },
];

export type UgcCard = {
  poster: string;
  video: string;
  productImage: string;
  productName: string;
  price: string;
  href: string;
};

export const ugcCards: UgcCard[] = [
  { poster: asset("ugc/poster-1.webp"), video: asset("ugc/video-1.mp4"), productImage: asset("ugc/product-1.jpg"), productName: "Tinted Mineral Dayscreen SPF 30", price: "THB 686", href: srcUrl("/products/tinted-mineral-dayscreen-spf-30-global") },
  { poster: asset("ugc/poster-2.webp"), video: asset("ugc/video-2.mp4"), productImage: asset("ugc/product-2.jpg"), productName: "Tinted Mineral Dayscreen SPF 30", price: "THB 686", href: srcUrl("/products/tinted-mineral-dayscreen-spf-30-global") },
  { poster: asset("ugc/poster-3.webp"), video: asset("ugc/video-3.mp4"), productImage: asset("ugc/product-3.jpg"), productName: "Glow Replenishing Rice Milk", price: "THB 618", href: srcUrl("/products/glow-replenishing-rice-milk") },
  { poster: asset("ugc/poster-4.webp"), video: asset("ugc/video-4.mp4"), productImage: asset("ugc/product-4.jpg"), productName: "Ginseng Essence Water", price: "THB 618", href: srcUrl("/products/ginseng-essence-water") },
  { poster: asset("ugc/poster-5.webp"), video: asset("ugc/video-5.mp4"), productImage: asset("ugc/product-5.jpg"), productName: "Revive Eye Serum : Ginseng + Retinal", price: "THB 583", href: srcUrl("/products/revive-eye-serum-ginseng-retinal") },
  { poster: asset("ugc/poster-6.webp"), video: asset("ugc/video-6.mp4"), productImage: asset("ugc/product-6.jpg"), productName: "Red Bean Refreshing Pore Mask", price: "THB 686", href: srcUrl("/products/red-bean-refreshing-pore-mask") },
  { poster: asset("ugc/poster-7.webp"), video: asset("ugc/video-7.mp4"), productImage: asset("ugc/product-7.jpg"), productName: "Glow Serum : Propolis + Niacinamide", price: "THB 583", href: srcUrl("/products/glow-serum-propolis-niacinamide") },
  { poster: asset("ugc/poster-8.webp"), video: asset("ugc/video-8.mp4"), productImage: asset("ugc/product-8.jpg"), productName: "Ground Rice and Honey Glow Mask", price: "THB 618", href: srcUrl("/products/ground-rice-and-honey-glow-mask") },
  { poster: asset("ugc/poster-9.webp"), video: asset("ugc/video-9.mp4"), productImage: asset("ugc/product-9.jpg"), productName: "Tinted Mineral Dayscreen SPF 30", price: "THB 686", href: srcUrl("/products/tinted-mineral-dayscreen-spf-30-global") },
  { poster: asset("ugc/poster-10.webp"), video: asset("ugc/video-10.mp4"), productImage: asset("ugc/product-10.jpg"), productName: "Tinted Mineral Dayscreen SPF 30", price: "THB 686", href: srcUrl("/products/tinted-mineral-dayscreen-spf-30-global") },
];

export const aboutIngredients = [
  { title: "Ginseng", text: "A centuries-old herbal remedy, this beloved ingredient is rich in saponins that provide long-lasting hydration.", link: srcUrl("/collections/ginseng"), image: asset("images/about-ingredient-1.png") },
  { title: "Rice", text: "This precious ingredient is packed with essential nutrients to nourish skin, improve texture, and boost glow.", link: srcUrl("/collections/rice-bran"), image: asset("images/about-ingredient-2.png") },
  { title: "Green Plum", text: "Used in traditional Korean medicine, this fruit is said to detoxify, lower body temperature, and treat stomach aches. In skincare, it effectively softens and sweeps away dead skin cells.", link: srcUrl("/collections/green-plum-plum-flower"), image: asset("images/about-ingredient-3.png") },
  { title: "Propolis", text: "Women in the Joseon Dynasty mixed honey with grain powder to care for their complexions. This ingredient and its extract (propolis) are known for their anti-inflammatory properties.", link: srcUrl("/collections/propolis"), image: asset("images/about-ingredient-4.png") },
  { title: "Green Tea", text: "Noted in the Donguibogam, a Joseon-era medical record, green tea was said to refresh the head, eyes, and energy. Its high antioxidant content is key to protecting against environmental aggressors.", link: srcUrl("/collections/green-tea"), image: asset("images/about-ingredient-5.png") },
  { title: "Centella Asiatica", text: "You may know this medicinal plant as “tiger grass” because wounded tigers heal their injuries by rolling in it. Applied to your complexion, it intensely soothes, calms, and improves tone.", link: srcUrl("/collections/centella-asiatica"), image: asset("images/about-ingredient-6.png") },
  { title: "Red Bean", text: "Joseon-era women combined red bean and mung bean to cleanse their skin. Used throughout Korean history in traditional foods and medicine, it helps absorb excess sebum and boost elasticity.", link: srcUrl("/collections/red-bean"), image: asset("images/about-ingredient-7.png") },
  { title: "Mugwort", text: "Used in traditional Korean medicine to lower body temperature, this powerful plant soothes while providing antioxidant benefits from vitamins A and C.", link: srcUrl("/collections/mugwort"), image: asset("images/about-ingredient-8.png") },
];

export const pressItems = [
  { outlet: "BOF", title: "TikTok’s Hit Korean Sunscreen Brand Makes Big US Push​", link: "https://www.businessoffashion.com/articles/beauty/tiktoks-favourite-sunscreen-brand-pushes-further-into-the-us/", image: asset("images/about-press-1.png") },
  { outlet: "ALLURE", title: "18 Best Korean Beauty Gifts of 2024, According to Allure's Resident Expert​", link: "https://www.allure.com/story/best-korean-beauty-gifts", image: asset("images/about-press-2.png") },
  { outlet: "VOGUE", title: "The Best Hydrating Eye Creams to Keep Fine Lines, Dark Circles, and Puffiness at Bay​", link: "https://www.vogue.com/article/best-hydrating-eye-cream", image: asset("images/about-press-3.png") },
  { outlet: "BYRDIE", title: "The 15 Most Viral TikTok Beauty Products of 2024​", link: "https://www.byrdie.com/most-viral-beauty-products-2024-8720533", image: asset("images/about-press-4.png") },
  { outlet: "GLAMOUR", title: "18 Best Korean Moisturizers, According to Dermatologists & Estheticians​", link: "https://www.glamour.com/gallery/best-korean-moisturizers", image: asset("images/about-press-5.png") },
];

export const footerMenu = [
  { label: "Need Help?", href: srcUrl("/pages/need-help") },
  { label: "Gift 20% Off & Get 150 Gems", href: srcUrl("/pages/rewards") },
  { label: "BOJ Creator Club", href: srcUrl("/pages/creator-club") },
  { label: "Retailers", href: srcUrl("/pages/retailers") },
  { label: "Shipping", href: srcUrl("/pages/shipping") },
  { label: "Return & Refund", href: srcUrl("/pages/return-refund") },
  { label: "Privacy Policy", href: srcUrl("/pages/privacy-policy") },
  { label: "Terms & Conditions", href: srcUrl("/pages/terms-conditions") },
  { label: "Modern Slavery Act", href: srcUrl("/pages/modern-slavery-act") },
];
