export const SITE = {
  name: "MYK",
  fullName: "محمد یاسین کرمی",
  tagline: "در حال یادگیری، رشد و ساختن آینده‌ای که برای خودم تصور کرده‌ام.",
  quote: "بهترین سرمایه‌گذاری، سرمایه‌گذاری روی خودت است.",
  quoteEn: "The best investment you can make is in yourself.",
  domain: "bymyk.ir",
} as const;

export type NavItem = {
  to: string;
  label: string;
  primary?: boolean;
};

export const NAV: NavItem[] = [
  { to: "/", label: "خانه", primary: true },
  { to: "/about", label: "داستان من", primary: true },
  { to: "/promptlibrary", label: "کتابخانه پرامپت", primary: true },
  { to: "/live", label: "لایو", primary: true },
  { to: "/courses", label: "دوره‌ها" },
  { to: "/projects", label: "پروژه‌ها" },
  { to: "/blog", label: "بلاگ" },
  { to: "/library", label: "کتابخانه" },
  { to: "/achievements", label: "دستاوردها" },
  { to: "/LINKS", label: "لینک‌ها" },
  { to: "/contact", label: "تماس", primary: true },
];

export const SOCIAL = [
  {
    name: "اینستاگرام",
    handle: "@officialbymyk",
    href: "https://instagram.com/officialbymyk",
    key: "instagram",
  },
  {
    name: "یوتیوب",
    handle: "@officialbymyk",
    href: "https://youtube.com/@officialbymyk",
    key: "youtube",
  },
  {
    name: "تلگرام",
    handle: "t.me/officialbymyk",
    href: "https://t.me/officialbymyk",
    key: "telegram",
  },
  {
    name: "ربات تلگرام",
    handle: "t.me/mykofficialbot",
    href: "https://t.me/mykofficialbot",
    key: "bot",
  },
  {
    name: "گیت‌هاب",
    handle: "officialbymyk",
    href: "https://github.com/officialbymyk",
    key: "github",
  },
  {
    name: "ایمیل",
    handle: "officialbymyk@proton.me",
    href: "mailto:officialbymyk@proton.me",
    key: "email",
  },
] as const;

export const PILLARS = [
  { en: "FOCUS", hint: "On your goal", icon: "focus" },
  { en: "GROWTH", hint: "Everyday", icon: "growth" },
  { en: "MINDSET", hint: "Is everything", icon: "mindset" },
  { en: "DISCIPLINE", hint: "Creates freedom", icon: "discipline" },
  { en: "SUCCESS", hint: "Is a journey", icon: "success" },
] as const;

export const WORLD = [
  {
    to: "/promptlibrary",
    kicker: "PROMPT LIBRARY",
    title: "کتابخانه پرامپت",
    body: "منتخب پرامپت‌هایی که با آن‌ها کار می‌کنم — مهندسی پرامپت و لوپ، به زبان ساده.",
  },
  {
    to: "/courses",
    kicker: "COURSES",
    title: "دوره‌ها",
    body: "مسیرهای یادگیری برای ساختن مهارت، نه جمع کردن مدرک.",
  },
  {
    to: "/live",
    kicker: "LIVE",
    title: "لایو و وبینار",
    body: "جلسه‌های زنده برای رشد، تکنولوژی و کسب‌وکار.",
  },
  {
    to: "/LINKS",
    kicker: "LINKS",
    title: "رسانه‌ها",
    body: "همه لینک‌های رسمی MYK در یک صفحه.",
  },
] as const;
