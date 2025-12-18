import Image from "next/image";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

const PhoneIcon = ({
  className,
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.37 1.6.72 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.29a2 2 0 0 1 2.11-.45c.74.35 1.53.6 2.34.72A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MessageCircleIcon = ({
  className,
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 11.5a8.5 8.5 0 0 1 13.86-6.5 8.5 8.5 0 0 1 2.64 6.12 8.5 8.5 0 0 1-8.5 8.5 8.45 8.45 0 0 1-4.12-1.07L3 21l1.45-3.82A8.48 8.48 0 0 1 3 11.5z" />
  </svg>
);

const InstagramIcon = ({
  className,
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const PHONE_NUMBER = "+919946673211";
const WHATSAPP_LINK = "https://wa.me/919946673211";

const featureBlocks = [
  {
    title: "Signature Celebration Cakes",
    copy: "Tiered cakes, character cakes, and elegant florals handcrafted for birthdays, weddings, and every milestone.",
    image: "/images/IMG-20251218-WA0302.jpg",
  },
  {
    title: "Dessert Tables & Hampers",
    copy: "Cupcakes, cake-sicles, pops, jar cakes, and festive hampers tailored to your theme.",
    image: "/images/IMG-20251218-WA0307.jpg",
  },
  {
    title: "Breads & Rolls",
    copy: "Soft buns, stuffed rolls, and artisanal loaves baked fresh for brunches and gatherings.",
    image: "/images/IMG-20251218-WA0309.jpg",
  },
  {
    title: "Brownies & Tea Cakes",
    copy: "Dense chocolate brownies, marble loaves, and everyday tea cakes with balanced sweetness.",
    image: "/images/IMG-20251218-WA0318.jpg",
  },
];

const galleryImages = [
  "/images/image-1.jpg",
  "/images/image-2.jpg",
  "/images/image-3.jpg",
  "/images/IMG-20251218-WA0305.jpg",
  "/images/IMG-20251218-WA0306.jpg",
  "/images/IMG-20251218-WA0307.jpg",
  "/images/IMG-20251218-WA0308.jpg",
  "/images/IMG-20251218-WA0319.jpg",
  "/images/IMG-20251218-WA0315.jpg",
  "/images/IMG-20251218-WA0303.jpg",
  "/images/IMG-20251218-WA0301.jpg",
  "/images/IMG-20251218-WA0310.jpg",
];

function ActionButtons({
  tone = "light",
  minimal = false,
  border = ""
}: {
  tone?: "light" | "dark" | "hero" | "neutral";
  minimal?: boolean;
  border?: "white" | ""
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition";

  const styles: Record<string, string> = {
    hero: "bg-transparent text-white hover:text-white/80 shadow-none",
    light:
      "bg-amber-600 text-white shadow-lg shadow-black/20 hover:-translate-y-0.5 hover:bg-amber-500",
    dark:
      "bg-amber-700 text-white shadow-md shadow-black/10 hover:-translate-y-0.5 hover:bg-amber-600",
    neutral:
      "bg-transparent text-slate-900 hover:-translate-y-0.5 hover:text-amber-700",
  };

  const iconColor =
    tone === "hero" ? "text-white" : tone === "neutral" ? "text-black" : "text-white";

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={`tel:${PHONE_NUMBER}`}
        className={`${base} ${minimal ? "px-0 py-0" : ""} ${border == "white" ? "border-[2px] border-white" : ""} ${
          minimal ? "bg-transparent text-white hover:text-white/80" : styles[tone]
        }`}
      >
        <PhoneIcon className={`h-4 w-4 ${minimal ? "text-white" : iconColor}`} />
        <span className={minimal ? "text-white" : ""}>Call us</span>
      </a>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${minimal ? "px-0 py-0" : ""} ${border == "white" ? "border-[2px] border-white pt-2" : ""} ${
          minimal
            ? "bg-transparent text-white hover:text-white/80"
            : tone === "neutral"
              ? "bg-transparent text-slate-900 hover:-translate-y-0.5 hover:text-amber-700"
              : tone === "hero"
                ? "bg-transparent text-white hover:text-white/80"
                : "bg-emerald-600 text-white shadow-md shadow-black/10 hover:-translate-y-0.5 hover:bg-emerald-500"
        }`}
      >
        <MessageCircleIcon
          className={`h-4 w-4 ${minimal ? "text-white" : iconColor}`}
        />
        <span className={minimal ? "text-white" : ""}>WhatsApp us</span>
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9f4ee] text-slate-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-header.png"
              alt="Lalees Home Cakes logo"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
            {/* <p className="text-[11px] uppercase tracking-[0.25em] text-gray-100">
              Lalees Home Cakes
            </p> */}
          </div>
          <div className="hidden md:flex">
            <ActionButtons tone="hero" minimal />
          </div>
        </div>
      </header>

      <main>
        <section className="relative isolate overflow-hidden">
          <Image
            src="/images/hero.jpg"
            alt="Signature Lalees creation"
            width={1800}
            height={1100}
            priority
            className="h-screen w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-white mt-20">
              <p className={`${pacifico.className} text-xl font-thin tracking-[0.25em]`}>
                Baking sweet memories
              </p>
              <h1 className={`max-w-2xl text-4xl font-thin leading-tight sm:text-5xl`}>
                Double the deliciousness for every celebration.
              </h1>
              <p className="max-w-xl text-md text-white/85">
                Homemade cakes and desserts, baked with love and care, 
                for the moments that matter most.
              </p>
              <ActionButtons tone="hero" border="white" />
            </div>
          </div>
        </section>

        <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
          <div className="grid gap-12">
            {featureBlocks.map((block, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={block.title}
                  className={`grid items-center gap-8 md:grid-cols-2 ${
                    isEven ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl bg-white shadow-md shadow-black/5">
                    <Image
                      src={block.image}
                      alt={block.title}
                      width={800}
                      height={600}
                      className="h-80 w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                      Lalees special
                    </p>
                    <h2 className={`${pacifico.className} text-2xl font-bold text-slate-900`}>
                      {block.title}
                    </h2>
                    <p className="text-base text-slate-700">{block.copy}</p>
                    <div className="pt-2">
                      <ActionButtons tone="neutral" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className={`${pacifico.className} text-4xl font-bold text-amber-700 md:text-5xl`}>
              Eat Well. Do Good.
            </p>
            <p className="mt-6 text-md text-slate-700">
              A home bakery dedicated to thoughtful flavors, mindful sweetness,
              and joyful design.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2">
            {galleryImages.slice(0, 6).map((src) => (
              <div
                key={src}
                className="overflow-hidden rounded-2xl bg-white shadow-md shadow-black/5"
              >
                <Image
                  src={src}
                  alt="Lalees Home Cakes creation"
                  width={900}
                  height={700}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-amber-600 text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em]">
              Ready to order
            </p>
            <h2 className={`${pacifico.className} text-3xl font-bold leading-tight sm:text-4xl`}>
              The heart and soul of home-baked goodness
            </h2>
            <p className="max-w-2xl text-md text-white/85">
              Share your date, servings, flavors, and theme. We will confirm
              availability, pricing, and delivery or pickup.
            </p>
            <ActionButtons tone="dark" />
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="grid gap-6 md:grid-cols-3">
              {galleryImages.slice(6, 12).map((src) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-2xl bg-[#f9f4ee] shadow-inner shadow-black/5"
                >
                  <Image
                    src={src}
                    alt="Lalees Home Cakes selection"
                    width={700}
                    height={520}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-[#f1e7d8]">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 py-12 text-center">
            <h3 className={`${pacifico.className} text-2xl font-bold text-slate-900`}>
              Subscribe for fresh bakes & festive drops
            </h3>
            <p className="text-sm text-slate-700">
              No spam, just seasonal menus and limited hampers.
            </p>
            <div className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-full border border-amber-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
              />
              <button className="rounded-full bg-amber-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-amber-200 transition hover:-translate-y-0.5 hover:bg-amber-600">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Lalees Home Cakes logo"
                width={60}
                height={60}
                className="h-14 w-14 object-contain"
              />
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Lalees Home Cakes
                </p>
                <p className="text-sm text-slate-600">Kattanam, Kayamkulam</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 text-sm text-slate-700 md:items-end">
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/laleehomecake"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-slate-200 px-2 py-2 text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-300"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-slate-600">
                <span>Call/WhatsApp: {PHONE_NUMBER}</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
