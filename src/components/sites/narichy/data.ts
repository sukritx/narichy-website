export const SHOPEE = "https://shopee.co.th/narichyshop";
export const LINE_OA = "http://line.me/ti/p/~@narichy";
const FINN_SUPPLEMENT = "https://shopee.co.th/narichyshop/29310820621";
const FINN_SPRAY = "https://shopee.co.th/narichyshop/18082240400";
const FINN_SERUM = "https://shopee.co.th/narichyshop/53205125514";
const FINN_SOAP = "https://shopee.co.th/narichyshop/17486677158";

export const announcementMessages = [
  "จัดส่งฟรีเมื่อซื้อครบ ฿500",
  "จัดส่งแบบเรียบง่าย ไม่ระบุชื่อสินค้าบนพัสดุ",
  "Finn Spray ขายไปแล้วกว่า 4,000,000 ขวด",
];

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const leftNav: NavItem[] = [
  {
    label: "สินค้า",
    href: "/collections/products",
    children: [
      { label: "สินค้าขายดี", href: "/collections/best-sellers" },
      { label: "สินค้าทั้งหมด", href: "/collections/products" },
    ],
  },
];

export const rightNav: NavItem[] = [
  { label: "เกี่ยวกับเรา", href: "/pages/about-page" },
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

export type ProductSectionTitles = {
  details?: string;
  benefits?: string;
  ingredients?: string;
  howToUse?: string;
  shipping?: string;
};

const THAI_SECTION_TITLES: ProductSectionTitles = {
  details: "รายละเอียดผลิตภัณฑ์",
  benefits: "คุณประโยชน์",
  ingredients: "สารสกัดสำคัญ",
  howToUse: "วิธีใช้",
  shipping: "การจัดส่งและคืนสินค้า",
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
  details?: string[];
  promoRibbon?: string;
  sectionTitles?: ProductSectionTitles;
};

export const productDetails: ProductDetail[] = [
  {
    slug: "narichy-finn",
    title: "Narichy Finn",
    thaiTitle: "น้ำชงนาริชชี่",
    vendor: "Narichy",
    category: "ดูแลสุขภาพภายใน",
    cutline: "น้ำชง ลดกลิ่น ปรับสมดุลภายใน",
    tagline: "ดูแลภายในทุกวัน จากภายในสู่ภายนอก",
    description:
      "เครื่องดื่มผงรสทับทิมและสตรอว์เบอร์รี ผสมคอลลาเจน วิตามินซี และซิงก์ สำหรับผู้หญิงที่ต้องการความสมดุล สดชื่น และมั่นใจในทุกวัน",
    story: [
      "Narichy Finn คือคำตอบของการดูแลจากภายในสู่ภายนอก ผงสีชมพูละเอียดละลายน้ำใส ให้รสทับทิม–สตรอว์เบอร์รีอ่อน ๆ และไม่มีน้ำตาลเพิ่ม",
      "สูตรที่ผสานสารสกัดทับทิม คอลลาเจนเปปไทด์ วิตามินซี และซิงก์ ช่วยเสริมกิจวัตรการดูแลประจำวัน ให้คุณรู้สึกสบายและมั่นใจจากภายในสู่ภายนอก",
    ],
    rating: "4.8",
    reviews: "1,148 รีวิว",
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
      {
        src: "/images/products/narichy-supplement/IMG_3137.JPG",
        alt: "ภาพโปรโมชัน Narichy Finn 1 แถม 1",
      },
      {
        src: "/images/products/narichy-supplement/IMG_3132.JPG",
        alt: "ภาพรายละเอียดสินค้า Narichy Finn 1",
      },
      {
        src: "/images/products/narichy-supplement/IMG_3133.JPG",
        alt: "ภาพรายละเอียดสินค้า Narichy Finn 2",
      },
      {
        src: "/images/products/narichy-supplement/IMG_3134.JPG",
        alt: "ภาพรายละเอียดสินค้า Narichy Finn 3",
      },
      {
        src: "/images/products/narichy-supplement/IMG_3139.JPG",
        alt: "ภาพรายละเอียดปัญหาและวิธีดูแลด้วย Narichy Finn",
      },
      {
        src: "/images/products/narichy-supplement/IMG_3141.JPG",
        alt: "ภาพรายละเอียดการฟื้นฟูสภาพภายในด้วย Narichy Finn",
      },
    ],
    variants: [
      {
        id: "100g",
        label: "กระปุก 100 ก.",
        price: 169,
        compareAt: 290,
        note: "ประมาณ 10 เสิร์ฟ",
      },
    ],
    bestSeller: true,
    badges: ["ผ่าน อย. ไทย", "ไม่มีน้ำตาลเพิ่ม", "คอลลาเจน 2,000 มก.", "ผลิตในประเทศไทย"],
    benefits: [
      "ช่วยรักษาสมดุลภายในให้รู้สึกสบาย",
      "ช่วยดูแลกลิ่นอับในจุดซ่อนเร้นในทุกวัน",
      "มีคอลลาเจนและวิตามินซีช่วยบำรุงผิว",
      "ไม่มีน้ำตาลเพิ่ม ดื่มง่ายในทุกวัน",
    ],
    ingredients: [
      "สารสกัดผลทับทิม",
      "ผงน้ำสตรอว์เบอร์รี",
      "คอลลาเจนเปปไทด์ไฮโดรไลซ์ 2,000 มก.",
      "วิตามินซี",
      "ซิงก์",
      "ไฟเบอร์พรีไบโอติก",
    ],
    howToUse: [
      "ตักผง 1 ช้อนพูน (ประมาณ 10 ก.) ละลายในน้ำเย็น 150 มล.",
      "คนให้ละลายเข้ากันดี แล้วดื่มวันละ 1 ครั้ง โดยแนะนำช่วงเช้า",
      "ดื่มต่อเนื่องอย่างน้อย 4 สัปดาห์ ร่วมกับการรับประทานอาหารที่สมดุล",
    ],
    details: [
      "เครื่องดื่มผงสำหรับดูแลภายใน กลิ่นหอมรสทับทิมและสตรอว์เบอร์รี",
      "ปริมาณ 100 ก. ต่อกระปุก ประมาณ 10 เสิร์ฟ",
      "มีคอลลาเจน 2,000 มก. วิตามินซี และซิงก์",
      "ไม่มีน้ำตาลเพิ่ม และผ่านการขึ้นทะเบียนอาหารจาก อย. ไทย",
    ],
    size: "100 ก. ต่อกระปุก · ประมาณ 10 เสิร์ฟ",
    madeIn: "Thailand",
    spec: "Powder drink mix",
    specs: [
      { label: "รูปแบบ", value: "เครื่องดื่มผง" },
      { label: "ปริมาณ", value: "100 ก. ต่อกระปุก" },
      { label: "รสชาติ", value: "ทับทิมและสตรอว์เบอร์รี" },
      { label: "สารสำคัญ", value: "คอลลาเจน วิตามินซี ซิงก์" },
    ],
    shopee: FINN_SUPPLEMENT,
    line: LINE_OA,
    promoRibbon: "0% น้ำตาลเพิ่ม",
    sectionTitles: THAI_SECTION_TITLES,
    disclaimer:
      "อาหารเสริมไม่สามารถทดแทนการรับประทานอาหารที่หลากหลายและสมดุลได้ ผลลัพธ์อาจแตกต่างกันในแต่ละบุคคล",
  },
  {
    slug: "finn-spray",
    title: "Finn Spray",
    thaiTitle: "สเปรย์ฟิน",
    vendor: "Narichy",
    category: "ความสดชื่นทุกวัน",
    cutline: "สเปรย์น้องสาวสูตรอ่อนโยน",
    tagline: "ความสดชื่นพกพา พร้อมกลิ่นหอมละมุน",
    description:
      "สเปรย์ดูแลจุดซ่อนเร้นสูตรอาหารเกรด ในกลิ่นวานิลลาคาราเมลและสตรอว์เบอร์รี ฉีด 1–2 ครั้งช่วยลดกลิ่นอับและให้กลิ่นหอมอ่อนโยน",
    story: [
      "Finn Spray คือผลิตภัณฑ์แรกที่ทำให้หลายคนรู้จัก Narichy ละอองสเปรย์ละเอียดทำจากส่วนผสมเกรดอาหาร มีสองกลิ่นให้เลือกคือ วานิลลาคาราเมลหอมนุ่ม และสตรอว์เบอร์รีหอมสดชื่น",
      "สูตรไม่มีแอลกอฮอล์ อ่อนโยนพอสำหรับใช้ทุกวัน ใช้ใต้เสื้อผ้าได้ง่าย และพกพาใส่กระเป๋าได้สะดวก",
    ],
    rating: "4.9",
    reviews: "854 รีวิว",
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
      {
        src: "/images/products/finn-spray-vanilla/IMG_3032.JPG",
        alt: "ภาพรายละเอียด Finn Spray กลิ่นวานิลลาคาราเมล 1",
      },
      {
        src: "/images/products/finn-spray-vanilla/IMG_3049.JPG",
        alt: "ภาพรายละเอียด Finn Spray กลิ่นวานิลลาคาราเมล 2",
      },
      {
        src: "/images/products/finn-spray-both/finn-spray-lifestyle-2.jpg",
        alt: "ภาพไลฟ์สไตล์ Finn Spray ทั้งสองกลิ่น",
      },
      {
        src: "/images/products/finn-spray-strawberry/IMG_3020.JPG",
        alt: "ภาพรายละเอียด Finn Spray กลิ่นสตรอว์เบอร์รี 1",
      },
      {
        src: "/images/products/finn-spray-strawberry/IMG_3021.JPG",
        alt: "ภาพรายละเอียด Finn Spray กลิ่นสตรอว์เบอร์รี 2",
      },
      {
        src: "/images/products/finn-spray-both/IMG_3015.JPG",
        alt: "ภาพรายละเอียด Finn Spray ทั้งสองกลิ่น",
      },
    ],
    variants: [
      {
        id: "vanilla",
        label: "วานิลลาคาราเมล",
        price: 199,
        compareAt: 250,
        image: "/images/products/finn-spray-vanilla/vanilla-bottle.jpg",
        note: "10 มล.",
      },
      {
        id: "strawberry",
        label: "สตรอว์เบอร์รี",
        price: 199,
        compareAt: 250,
        image: "/images/products/finn-spray-strawberry/strawberry-box.jpg",
        note: "10 มล.",
      },
      {
        id: "duo",
        label: "เซ็ตคู่",
        price: 390,
        compareAt: 500,
        image: "/images/products/finn-spray-both/finn-spray-lifestyle.jpg",
        note: "2 × 10 มล.",
      },
    ],
    bestSeller: true,
    badges: ["เกรดอาหาร", "ไม่มีแอลกอฮอล์", "ผ่านการทดสอบจากแพทย์ผิวหนัง", "2 กลิ่น"],
    benefits: [
      "ช่วยลดกลิ่นอับในจุดซ่อนเร้น",
      "สูตรเกรดอาหาร อ่อนโยนต่อผิว",
      "เพิ่มกลิ่นหอมละมุนและความรู้สึกสะอาด",
      "พกพาง่าย ให้ความสดชื่นได้ตลอดวัน",
    ],
    ingredients: [
      "น้ำบริสุทธิ์",
      "กลีเซอรีนเกรดอาหาร",
      "กลิ่นวานิลลาคาราเมลหรือสตรอว์เบอร์รี",
      "สารสกัดคาโมไมล์",
      "ว่านหางจระเข้",
      "กรดแลกติก",
    ],
    howToUse: [
      "เขย่าขวดให้เข้ากันก่อนใช้",
      "หลังอาบน้ำ ฉีด 1–2 ครั้งบริเวณผิวภายนอกที่สะอาดและแห้ง จากระยะประมาณ 15 ซม.",
      "ใช้ซ้ำได้ตามต้องการระหว่างวัน ใช้ภายนอกเท่านั้น",
    ],
    details: [
      "สเปรย์ดูแลจุดซ่อนเร้นสูตรไม่มีแอลกอฮอล์",
      "ขนาด 10 มล. พกพาสะดวก",
      "มี 2 กลิ่น: วานิลลาคาราเมล และสตรอว์เบอร์รี",
      "ผ่านการทดสอบจากแพทย์ผิวหนัง",
    ],
    size: "10 มล.",
    madeIn: "Thailand",
    spec: "Intimate body mist",
    specs: [
      { label: "รูปแบบ", value: "สเปรย์ดูแลจุดซ่อนเร้น" },
      { label: "ปริมาณ", value: "10 มล." },
      { label: "กลิ่น", value: "วานิลลาคาราเมล / สตรอว์เบอร์รี" },
      { label: "ส่วนผสมสำคัญ", value: "กลีเซอรีนเกรดอาหาร" },
    ],
    shopee: FINN_SPRAY,
    line: LINE_OA,
    promoRibbon: "ขายดี 4 ล้านขวด",
    sectionTitles: THAI_SECTION_TITLES,
    disclaimer:
      "ใช้ภายนอกเท่านั้น หลีกเลี่ยงการสัมผัสบริเวณดวงตาและผิวที่แตกเป็นแผล หากเกิดการระคายเคือง ให้หยุดใช้",
  },
  {
    slug: "finn-serum",
    title: "Narichy Finn Serum",
    thaiTitle: "เซรั่มปิ๊เรืองแสง",
    vendor: "Narichy",
    category: "ดูแลผิวกระจ่างใส",
    cutline: "ปรับผิวจุดซ่อนเร้นขาวกระจ่างใส",
    tagline: "ผิวกระจ่างใส นุ่มละมุน ด้วยกลิ่นพีช",
    description:
      "เซรั่มสำหรับผิวจุดซ่อนเร้นและผิวกาย กลิ่นพีช อุดมด้วย Alpha Arbutin จากฝรั่งเศส ช่วยให้ผิวดูกระจ่างใส ชุ่มชื้น และเนียนนุ่ม",
    story: [
      "เซรั่มปิ๊เรืองแสงที่ไวรัลคือเซรั่มเนื้อบางเบา ซึมเร็ว สำหรับผิวที่บอบบางที่สุด Alpha Arbutin จากฝรั่งเศสและไนอาซินาไมด์ช่วยดูแลผิวให้ดูเรียบเนียนสม่ำเสมอ ขณะที่สารสกัดพีชให้กลิ่นหอมสะอาด",
      "ไฮยาลูโรนิกแอซิดและสควาเลนช่วยเติมความชุ่มชื้นให้ผิวรู้สึกนุ่มสบาย ไม่เหนียวเหนอะหนะ",
    ],
    rating: "4.9",
    reviews: "175 รีวิว",
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
      {
        src: "/images/products/narichy-finn-serum/IMG_2997.JPG",
        alt: "ภาพรายละเอียด Narichy Finn Serum 1",
      },
      {
        src: "/images/products/narichy-finn-serum/IMG_2998.JPG",
        alt: "ภาพรายละเอียด Narichy Finn Serum 2",
      },
      {
        src: "/images/products/narichy-finn-serum/IMG_2999.JPG",
        alt: "ภาพรายละเอียด Narichy Finn Serum 3",
      },
      {
        src: "/images/products/narichy-finn-serum/IMG_3001.JPG",
        alt: "ภาพรายละเอียด Narichy Finn Serum 4",
      },
      {
        src: "/images/products/narichy-finn-serum/IMG_3002.JPG",
        alt: "ภาพรายละเอียด Narichy Finn Serum 5",
      },
      {
        src: "/images/products/narichy-finn-serum/IMG_3013.JPG",
        alt: "ภาพรายละเอียดคุณภาพ Narichy Finn Serum",
      },
    ],
    variants: [
      {
        id: "30ml",
        label: "30 มล.",
        price: 490,
        compareAt: 590,
        note: "ผ่านการทดสอบจากแพทย์ผิวหนัง",
      },
    ],
    bestSeller: true,
    badges: ["ผ่านการทดสอบจากแพทย์ผิวหนัง", "Alpha Arbutin จากฝรั่งเศส", "กลิ่นพีช", "30 มล."],
    benefits: [
      "ช่วยให้สีผิวดูกระจ่างใสสม่ำเสมอ",
      "เติมความชุ่มชื้นให้ผิวบอบบาง",
      "มี Alpha Arbutin จากฝรั่งเศสและไนอาซินาไมด์",
      "กลิ่นพีชอ่อนโยน เนื้อบางเบาไม่เหนียว",
    ],
    ingredients: [
      "Alpha Arbutin จากฝรั่งเศส",
      "ไนอาซินาไมด์",
      "สารสกัดพีช",
      "ไฮยาลูโรนิกแอซิด",
      "สควาเลน",
      "วิตามินอี",
    ],
    howToUse: [
      "ทา 1–2 ปั๊มบริเวณผิวภายนอกที่สะอาดและแห้ง เช้าและเย็น",
      "นวดเบา ๆ จนซึมเข้าสู่ผิว",
      "ทดสอบการแพ้ก่อนใช้ครั้งแรก และหลีกเลี่ยงบริเวณผิวที่แตกหรือระคายเคือง",
    ],
    details: [
      "เซรั่มบำรุงผิวจุดซ่อนเร้นและผิวกาย กลิ่นพีช",
      "ขนาด 30 มล.",
      "มี Alpha Arbutin จากฝรั่งเศส ไนอาซินาไมด์ และไฮยาลูโรนิกแอซิด",
      "ผ่านการทดสอบจากแพทย์ผิวหนัง",
    ],
    size: "30 มล.",
    madeIn: "Thailand",
    spec: "Brightening serum",
    specs: [
      { label: "รูปแบบ", value: "เซรั่มบำรุงผิว" },
      { label: "ปริมาณ", value: "30 มล." },
      { label: "กลิ่น", value: "พีชอ่อนโยน" },
      { label: "ส่วนผสมสำคัญ", value: "Alpha Arbutin จากฝรั่งเศส" },
    ],
    shopee: FINN_SERUM,
    line: LINE_OA,
    promoRibbon: "ไวรัลบน TikTok",
    sectionTitles: THAI_SECTION_TITLES,
    disclaimer:
      "ใช้ภายนอกเท่านั้น ทดสอบการแพ้ก่อนใช้ครั้งแรก และหยุดใช้หากเกิดการระคายเคือง",
  },
  {
    slug: "cleansing-mousse-foam",
    title: "Cleansing Mousse Foam",
    thaiTitle: "มูสโฟมล้างทำความสะอาดจุดซ่อนเร้น",
    vendor: "Narichy",
    category: "ทำความสะอาดทุกวัน",
    cutline: "โฟมล้างน้องสาว สูตรอ่อนโยน",
    tagline: "ทำความสะอาดนุ่มละมุนทุกวัน",
    description:
      "มูสล้างทำความสะอาดสูตรอ่อนโยน เปลี่ยนเป็นฟองนุ่ม ช่วยขจัดตกค้าง เหงื่อ และกลิ่นอับ โดยไม่ทำให้ผิวบอบบางแห้งตึง",
    story: [
      "การทำความสะอาดทุกวันควรทำให้รู้สึกสดชื่น ไม่ใช่แห้งตึง มูสฟู่นี้เปลี่ยนเป็นฟองนุ่มที่ช่วยขจัดตกค้าง เหงื่อ และกลิ่นอับ พร้อมเคารพค่า pH ตามธรรมชาติของผิว",
      "สูตร pH 4.5 ไม่มีแอลกอฮอล์และพาราเบน ผสานสารสกัดออร์แกนิกและส่วนผสมจากธรรมชาติ ให้ผิวรู้สึกสะอาด สบาย และได้รับการดูแล",
    ],
    rating: "4.8",
    reviews: "320 รีวิว",
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
      {
        src: "/images/products/cleansing-mousse-foam/IMG_4580.JPG",
        alt: "ภาพรายละเอียด Cleansing Mousse Foam 1",
      },
      {
        src: "/images/products/cleansing-mousse-foam/IMG_4502.JPG",
        alt: "ภาพรายละเอียด Cleansing Mousse Foam 2",
      },
      {
        src: "/images/products/cleansing-mousse-foam/IMG_4503.JPG",
        alt: "ภาพรายละเอียด Cleansing Mousse Foam 3",
      },
      {
        src: "/images/products/cleansing-mousse-foam/IMG_4504.JPG",
        alt: "ภาพรายละเอียด Cleansing Mousse Foam 4",
      },
      {
        src: "/images/products/cleansing-mousse-foam/IMG_4583.JPG",
        alt: "ภาพรายละเอียด Cleansing Mousse Foam 5",
      },
    ],
    variants: [
      {
        id: "100ml",
        label: "100 มล.",
        price: 290,
        compareAt: 350,
        note: "pH 4.5 · ไม่มีแอลกอฮอล์",
      },
    ],
    bestSeller: false,
    badges: ["ไม่มีแอลกอฮอล์", "ไม่มีพาราเบน", "pH 4.5 สมดุล", "เหมาะกับผิวแพ้ง่าย"],
    benefits: [
      "ทำความสะอาดจุดซ่อนเร้นอย่างอ่อนโยน",
      "ช่วยควบคุมกลิ่นอับและตกค้าง",
      "ค่า pH 4.5 สมดุล ไม่มีแอลกอฮอล์",
      "ล้างออกง่าย ไม่ทิ้งความรู้สึกแห้งตึง",
    ],
    ingredients: [
      "สารสกัดออร์แกนิก",
      "ส่วนผสมจากธรรมชาติ",
      "คอมเพล็กซ์ปรับสมดุล pH",
      "เบสทำความสะอาดสูตรอ่อนโยน",
      "น้ำบริสุทธิ์",
    ],
    howToUse: [
      "ทำผิวบริเวณจุดซ่อนเร้นให้เปียกด้วยน้ำอุ่น",
      "กดฟอง 1–2 ปั๊มลงบนมือ แล้วทำความสะอาดอย่างเบามือ",
      "ล้างออกให้สะอาดและซับให้แห้ง ใช้วันละ 1 ครั้ง",
    ],
    details: [
      "มูสล้างทำความสะอาดจุดซ่อนเร้นสูตรอ่อนโยน",
      "ขนาด 100 มล.",
      "ค่า pH 4.5 · ไม่มีแอลกอฮอล์ · ไม่มีพาราเบน",
      "เหมาะสำหรับผิวบอบบางและผิวแพ้ง่าย",
    ],
    size: "100 มล.",
    madeIn: "Thailand",
    spec: "Foaming cleanser",
    specs: [
      { label: "รูปแบบ", value: "โฟมทำความสะอาด" },
      { label: "ปริมาณ", value: "100 มล." },
      { label: "เหมาะสำหรับ", value: "ผิวภายนอกจุดซ่อนเร้น" },
      { label: "สูตร", value: "pH 4.5 · ไม่มีแอลกอฮอล์ · ไม่มีพาราเบน" },
    ],
    shopee: SHOPEE,
    line: LINE_OA,
    promoRibbon: "pH 4.5 อ่อนโยน",
    sectionTitles: THAI_SECTION_TITLES,
    disclaimer:
      "ใช้ภายนอกเท่านั้น หากเกิดการระคายเคืองหรือมีตกขาวผิดปกติต่อเนื่อง ควรปรึกษาแพทย์หรือเภสัชกร",
  },
  {
    slug: "finn-soap",
    title: "Finn Soap",
    thaiTitle: "ฟินน์ สบู่",
    vendor: "Narichy",
    category: "ทำความสะอาดทุกวัน",
    cutline: "สบู่อนามัยสำหรับจุดซ่อนเร้น",
    tagline: "สบู่ก้อนคลาสสิกในรูปแบบใหม่",
    description:
      "สบู่ทำความสะอาดจุดซ่อนเร้นขนาดกะทัดรัด เนื้อครีมนุ่ม ให้ความรู้สึกสดชื่น พร้อมอ่อนโยนต่อผิวบอบบาง",
    story: [
      "เล็กพอพกพา อ่อนโยนพอใช้ทุกวัน Finn Soap ให้ฟองครีมนุ่ม ช่วยล้างกลิ่นอับและสิ่งตกค้างโดยไม่ทำให้ผิวแห้ง",
      "สารสกัดจากธรรมชาติและเบสที่สมดุลค่า pH ทำให้เป็นขั้นตอนง่าย ๆ ในกิจวัตรประจำวัน พร้อมลวดลายกุหลาบน่ารักบนแท่งสบู่",
    ],
    rating: "4.9",
    reviews: "2,256 รีวิว",
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
      {
        src: "/images/products/Finn Soap/IMG_3112.JPG",
        alt: "ภาพรายละเอียด Finn Soap 1",
      },
      {
        src: "/images/products/Finn Soap/IMG_3114.JPG",
        alt: "ภาพรายละเอียด Finn Soap 2",
      },
      {
        src: "/images/products/Finn Soap/IMG_3115.JPG",
        alt: "ภาพรายละเอียด Finn Soap 3",
      },
      {
        src: "/images/products/Finn Soap/IMG_3118.JPG",
        alt: "ภาพรายละเอียด Finn Soap 4",
      },
      {
        src: "/images/products/Finn Soap/IMG_3122.JPG",
        alt: "ภาพรายละเอียด Finn Soap 5",
      },
      {
        src: "/images/products/Finn Soap/IMG_3120.JPG",
        alt: "ภาพรายละเอียด Finn Soap 6",
      },
    ],
    variants: [
      {
        id: "single",
        label: "1 ก้อน",
        price: 69,
        compareAt: 99,
        note: "30 ก.",
      },
      {
        id: "set3",
        label: "เซ็ต 3 ก้อน",
        price: 199,
        compareAt: 297,
        note: "3 × 30 ก.",
      },
    ],
    bestSeller: true,
    badges: ["30 ก.", "สมดุลค่า pH", "สารสกัดจากธรรมชาติ", "ผ่าน อย. ไทย"],
    benefits: [
      "ช่วยลดกลิ่นอับในจุดซ่อนเร้น",
      "อ่อนโยนพอสำหรับใช้ทุกวัน",
      "ช่วยรักษาความสมดุลค่า pH",
      "ขนาดกะทัดรัด พกพาเดินทางง่าย",
    ],
    ingredients: [
      "กลีเซอรีน",
      "น้ำมันรำข้าว",
      "สารสกัดทับทิม",
      "สารสกัดทีทรี",
      "ว่านหางจระเข้",
      "กลิ่นกุหลาบ",
    ],
    howToUse: [
      "ถูสบู่กับน้ำอุ่นให้เกิดฟอง",
      "ทำความสะอาดบริเวณจุดซ่อนเร้นอย่างเบามือ",
      "ล้างออกให้สะอาด และเก็บสบู่ในที่แห้งระหว่างใช้",
    ],
    details: [
      "สบู่ทำความสะอาดจุดซ่อนเร้น ขนาด 30 ก.",
      "กลิ่นกุหลาบอ่อน ๆ",
      "ส่วนผสมจากธรรมชาติและค่า pH ที่สมดุล",
      "ผ่านการขึ้นทะเบียนอาหารจาก อย. ไทย",
    ],
    size: "30 ก.",
    madeIn: "Thailand",
    spec: "Intimate cleansing bar",
    specs: [
      { label: "รูปแบบ", value: "สบู่ทำความสะอาดจุดซ่อนเร้น" },
      { label: "ปริมาณ", value: "30 ก." },
      { label: "กลิ่น", value: "กุหลาบอ่อน ๆ" },
      { label: "ส่วนผสมสำคัญ", value: "สารสกัดทับทิม" },
    ],
    shopee: FINN_SOAP,
    line: LINE_OA,
    promoRibbon: "pH สมดุล",
    sectionTitles: THAI_SECTION_TITLES,
    disclaimer:
      "ใช้ภายนอกเท่านั้น และหยุดใช้หากเกิดการระคายเคือง",
  },
  {
    slug: "narichy-toner",
    title: "Narichy Toner",
    thaiTitle: "นาริชชี่ โทนเนอร์",
    vendor: "Narichy",
    category: "ดูแลผิวกระจ่างใสทุกวัน",
    cutline: "โทนเนอร์เช็ดทำความสะอาด ผิวกระจ่างใส",
    tagline: "ผิวเนียนนุ่ม กระจ่างใส ในทุกวัน",
    description:
      "โทนเนอร์เช็ดทำความสะอาดสูตรอ่อนโยนสำหรับผิวแพ้ง่าย ช่วยขจัดสิ่งสกปรก คราบไขมัน และขุยแห้ง พร้อมบำรุงผิวให้เนียนนุ่มและดูกระจ่างใสขึ้น",
    story: [
      "Narichy Toner คือโทนเนอร์เช็ดทำความสะอาดที่ออกแบบมาเพื่อผิวแพ้ง่ายโดยเฉพาะ ด้วยเนื้อสัมผัสบางเบาและส่วนผสมจากธรรมชาติ ช่วยขจัดสิ่งสกปรก คราบไขมัน และขุยแห้งที่ตกค้างได้อย่างอ่อนโยน",
      "สูตร 0% แอลกอฮอล์ ปราศจากพาราเบน ผสาน Niacinamide, Alpha Arbutin และ Zinc PCA ที่ช่วยดูแลผิวให้เนียนนุ่ม กระจ่างใส พร้อมปรับสมดุลน้ำและน้ำมันให้ผิวรู้สึกสบายในทุกวัน",
    ],
    rating: "5.0",
    reviews: "สินค้าใหม่",
    reviewCount: 0,
    price: 69,
    image: "/images/products/narichy-toner/IMG_7840.png",
    images: [
      {
        src: "/images/products/narichy-toner/IMG_7840.png",
        alt: "Narichy Toner ขนาด 30 ml.",
      },
      {
        src: "/images/products/narichy-toner/IMG_3036.JPG",
        alt: "รายการสารสกัดสำคัญใน Narichy Toner",
      },
      {
        src: "/images/products/narichy-toner/IMG_3045.JPG",
        alt: "คุณประโยชน์ของ Narichy Toner",
      },
      {
        src: "/images/products/narichy-toner/IMG_3047.JPG",
        alt: "ตำแหน่งที่แนะนำให้ใช้ Narichy Toner",
      },
      {
        src: "/images/products/narichy-toner/IMG_3037.JPG",
        alt: "วิธีใช้ Narichy Toner",
      },
      {
        src: "/images/products/narichy-toner/IMG_3038.JPG",
        alt: "รายละเอียดสารสกัดหลักและสรรพคุณของ Narichy Toner",
      },
      {
        src: "/images/products/narichy-toner/IMG_3042.JPG",
        alt: "บริเวณรักแร้ หว่างขา เข่า และผิวที่หมองคล้ำ",
      },
      {
        src: "/images/products/narichy-toner/IMG_3043.JPG",
        alt: "การจดแจ้งเลขที่ 11-1-6600038568",
      },
      {
        src: "/images/products/narichy-toner/IMG_3085.JPG",
        alt: "เนื้อโทนเนอร์ใสบางเบาในจานแก้ว",
      },
      {
        src: "/images/products/narichy-toner/IMG_3046.JPG",
        alt: "ภาพรายละเอียด Narichy Toner",
      },
    ],
    variants: [
      {
        id: "1",
        label: "1 หลอด",
        price: 69,
        note: "30 มล.",
      },
      {
        id: "2",
        label: "2 หลอด",
        price: 138,
        note: "30 มล. × 2",
      },
      {
        id: "3",
        label: "3 หลอด",
        price: 199,
        note: "ประหยัดกว่า",
      },
      {
        id: "5",
        label: "5 หลอด",
        price: 329,
        note: "คุ้มที่สุด",
      },
    ],
    bestSeller: false,
    badges: [
      "ส่วนผสมจากธรรมชาติ",
      "เหมาะกับผิวแพ้ง่าย",
      "0% แอลกอฮอล์",
      "ไม่มีพาราเบน",
    ],
    benefits: [
      "ช่วยขจัดสิ่งสกปรกและขุยแห้งที่ผิว",
      "เช็ดตรงไหนขาวตรงนั้น",
      "ขจัดคราบไขมันและสิ่งสกปรก",
      "รักษาความชุ่มชื้นของผิว",
      "ปรับสมดุลน้ำและน้ำมันในผิว",
      "เหมาะกับผิวทุกประเภท รวมถึงผิวแพ้ง่าย",
    ],
    ingredients: [
      "C12-14 Pareth-15 — ช่วยลดการตึงของผิว ปรับสภาพผิวให้เนียนนุ่ม และเก็บความชุ่มชื้นไว้ในผิว",
      "Glycerin — ปกป้องผิวไม่ให้แห้งตึง เพิ่มความชุ่มชื้นและความสบายให้ผิว",
      "Zinc PCA — ช่วยจัดคราบสกปรกและความมันส่วนเกิน ลดโอกาสการเกิดสิวอุดตัน",
      "Niacinamide — ช่วยลดรอยดำและความหมองคล้ำ เผยผิวเนียนกระจ่างใส",
      "Alpha Arbutin — ยับยั้งการสังเคราะห์เม็ดสีเมลานิน เพิ่มความกระจ่างใสและปรับสีผิวให้สม่ำเสมอ",
      "Sodium Citrate — ช่วยปรับค่า pH ของผิวให้อยู่ในสมดุล",
      "Morus Alba (Mulberry) Root Extract — สารต้านอนุมูลอิสระ ช่วยชะลอริ้วรอยและทำให้ผิวดูกระจ่างใส",
      "Allantoin — ปลอบประโลมผิว ลดอาการระคายเคืองและอาการอักเสบของผิว",
      "Fragrance — กลิ่นหอมอ่อน ๆ ให้ความรู้สึกสดชื่น ไม่ฉุน",
      "Aloe Barbadensis Leaf Extract — ให้ความชุ่มชื้น ปลอบประโลมผิว และช่วยให้ผิวเรียบเนียน",
    ],
    howToUse: [
      "เท Narichy Toner ลงบนสำลีให้ชุ่ม",
      "เช็ดบริเวณที่ต้องการ เช่น ใบหน้า ลำคอ ใต้รักแร้ หว่างขา เข่า ข้อพับ และหลังคอ",
      "ใช้เป็นประจำเช้า–เย็น หลังอาบน้ำ เพื่อให้ผิวเนียนนุ่มสดชื่น",
      "แนะนำให้ใช้ผลิตภัณฑ์กันแดดร่วมด้วยเพื่อผลลัพธ์ที่ดีขึ้น",
      "ใช้ภายนอกเท่านั้น หลีกเลี่ยงการสัมผัสบริเวณดวงตาและผิวที่แตกเป็นแผล",
    ],
    details: [
      "Narichy Toner โทนเนอร์เช็ดทำความสะอาดสูตรอ่อนโยนสำหรับผิวแพ้ง่าย พร้อมส่วนผสมบำรุงผิว 10 ชนิด",
      "ช่วยขจัดสิ่งสกปรก คราบไขมัน และขุยแห้งที่ผิว พร้อมปรับสมดุลน้ำและน้ำมันให้ผิวเนียนนุ่ม กระจ่างใส",
      "ใช้เช็ดได้ทั้งใบหน้า ลำคอ รักแร้ หว่างขา เข่า ข้อพับ และหลังคอ",
      "ปริมาณ 30 มล. · 0% แอลกอฮอล์ · ไม่มีพาราเบน",
      "ผ่านการจดแจ้งจากสำนักงานคณะกรรมการอาหารและยา (อย.) เลขที่ 11-1-6600038568",
    ],
    size: "30 ml.",
    madeIn: "Thailand",
    spec: "Cleansing toner",
    specs: [
      { label: "รูปแบบ", value: "โทนเนอร์เช็ดทำความสะอาด" },
      { label: "ปริมาณ", value: "30 มล." },
      { label: "เหมาะสำหรับ", value: "ผิวแพ้ง่ายและผิวทุกประเภท" },
      { label: "จุดเด่น", value: "0% แอลกอฮอล์ · ปราศจากพาราเบน" },
    ],
    shopee: SHOPEE,
    line: LINE_OA,
    promoRibbon: "โปร 3 หลอด 199.-",
    sectionTitles: THAI_SECTION_TITLES,
    disclaimer:
      "ใช้ภายนอกเท่านั้น หลีกเลี่ยงการสัมผัสบริเวณดวงตาและผิวที่แตกเป็นแผล หากเกิดการระคายเคือง ให้หยุดใช้และปรึกษาแพทย์หรือเภสัชกร",
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
    imageAlt: "แบนเนอร์ผลิตภัณฑ์จาก Narichy Thailand",
  },
];

export const galleryImages = [
  {
    src: "/images/instagram/narichy-ig-1.jpg",
    alt: "ผู้ประกาศถือผลิตภัณฑ์ Narichy Finn ในชุดสีแดง",
  },
  {
    src: "/images/instagram/narichy-ig-2.jpg",
    alt: "ผู้โชคดีจากกิจกรรม Narichy Thailand ในชุดสีแดง",
  },
  {
    src: "/images/instagram/narichy-ig-3.jpg",
    alt: "รีลแคมเปญ Narichy กับคู่รักที่กำลังหัวเราะด้วยกัน",
  },
  {
    src: "/images/instagram/narichy-ig-4.jpg",
    alt: "ผู้ประกาศที่บูธกิจกรรม Narichy Thailand",
  },
  {
    src: "/images/instagram/narichy-ig-5.jpg",
    alt: "ผู้ประกาศ Narichy ถือผลิตภัณฑ์ Finn Spray",
  },
  {
    src: "/images/instagram/narichy-ig-6.jpg",
    alt: "ผู้ประกาศ Narichy อธิบายอินโฟกราฟิกดีท็อกซ์ร่างกาย",
  },
];

export const communityAccordions = [
  {
    title: "ค้นพบผลิตภัณฑ์ของเรา",
    icon: "leaf" as const,
    body: "ดูแลผิวที่บอบบางที่สุดในทุกวัน ตั้งแต่ Finn Spray ไปจนถึงเครื่องดื่มคอลลาเจนและเซรั่มของเรา",
    href: SHOPEE,
    linkLabel: "ช้อปเลย",
  },
  {
    title: "ไม่แน่ใจว่าจะเลือกอะไร?",
    icon: "heart" as const,
    body: "มีคำถามที่อยากถามแบบส่วนตัว? แชทหนึ่งต่อหนึ่งกับทีมงานของเราบน LINE OA เพื่อรับคำแนะนำที่จริงใจและเป็นส่วนตัว",
    href: LINE_OA,
    linkLabel: "แชทผ่าน LINE",
  },
];

export const communityPosts = [
  {
    title: "วิธีสร้างกิจวัตรดูแลจุดซ่อนเร้นในทุกวัน",
    image: "/images/best-sellers/bestsellers-finnspray.jpg",
    href: "/products/finn-spray",
  },
  {
    title: "ดูแลจากภายในสู่ภายนอก: สเปรย์ เซรั่ม และเครื่องดื่มคอลลาเจน",
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
    title: "รากฐานจากธรรมชาติ",
    lines: [
      "นาริชชี่เชื่อในพลังของธรรมชาติที่หล่อเลี้ยงและฟื้นฟู",
      "เราคัดสรรส่วนผสมอ่อนโยนจากธรรมชาติมาดูแลผู้หญิง",
    ],
    image: "/images/clean-beauty/clean-beauty-1.jpg",
    alt: "พฤกษชาติจากธรรมชาติที่เป็นแรงบันดาลใจในการดูแลจุดซ่อนเร้นสูตรอ่อนโยนของ Narichy",
  },
  {
    title: "อ่อนโยนโดยธรรมชาติ",
    lines: [
      "ความอ่อนโยนคือหัวใจของการดูแลจุดซ่อนเร้น",
      "ปราศจากสารที่ระคายเคือง ให้ทุกสัมผัสสบายใจ",
    ],
    image: "/images/clean-beauty/clean-beauty-2.jpg",
    alt: "ทิวทัศน์สีเขียวนุ่มแทนสูตรอ่อนโยนของ Narichy",
  },
  {
    title: "สมดุลที่บริสุทธิ์",
    lines: [
      "สมดุลที่ดีเริ่มจากความสดชื่นและเบาสบายจากภายใน",
      "เผยความมั่นใจอย่างเป็นธรรมชาติในทุกวัน",
    ],
    image: "/images/clean-beauty/clean-beauty-3.jpg",
    alt: "น้ำใสและชายหาดที่สงบแทนความสดชื่นและสมดุลค่า pH",
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
    price: "฿169",
    href: "/products/narichy-finn",
  },
  spray: {
    productImage: "/images/products/finn-spray-vanilla/vanilla-bottle.jpg",
    productName: "Finn Spray",
    price: "฿199",
    href: "/products/finn-spray",
  },
  serum: {
    productImage: "/images/products/narichy-finn-serum/serum-box.jpg",
    productName: "Narichy Finn Serum",
    price: "฿490",
    href: "/products/finn-serum",
  },
  mousse: {
    productImage: "/images/products/cleansing-mousse-foam/mousse-box.jpg",
    productName: "Cleansing Mousse Foam",
    price: "฿199",
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
  { label: "สินค้าทั้งหมด", href: "/collections/products" },
  { label: "สินค้าขายดี", href: "/collections/best-sellers" },
  { label: "เกี่ยวกับเรา", href: "/pages/about-page" },
  { label: "Shopee", href: SHOPEE },
  { label: "LINE OA (@narichy)", href: LINE_OA },
];
