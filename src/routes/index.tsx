import { useState } from "react"
import { Link, createFileRoute } from "@tanstack/react-router"
import {
  ArrowRight,
  Check,
  ChevronDown,
  Eye,
  Heart,
  Leaf,
  Mail,
  MapPin,
  Sparkles,
  Star,
  Users,
  Wallet,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  InstagramIcon,
  Logo,
  SectionHeading,
  WhatsAppIcon,
} from "@/components/site"
import {
  faqs,
  pricing,
  siteConfig,
  testimonials,
  waGeneralMessage,
  waLink,
} from "@/lib/site-config"
import { canonicalLink, jsonLd } from "@/lib/seo"
import { templates } from "@/lib/templates"

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
}

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Undangan Pernikahan Digital",
  serviceType: "Digital Wedding Invitation",
  provider: { "@type": "Organization", name: siteConfig.name },
  areaServed: { "@type": "Country", name: "Indonesia" },
  url: siteConfig.url,
  description: siteConfig.description,
  offers: pricing.map((pkg) => ({
    "@type": "Offer",
    name: `Paket ${pkg.name}`,
    description: pkg.description,
    price: pkg.price.replace(/\D/g, "") + "000",
    priceCurrency: "IDR",
    availability: "https://schema.org/InStock",
  })),
}

export const Route = createFileRoute("/")({
  head: () => ({
    links: [canonicalLink("/")],
    scripts: [jsonLd(faqLd), jsonLd(serviceLd)],
  }),
  component: LandingPage,
})

const navLinks = [
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#fitur", label: "Fitur" },
  { href: "#template", label: "Template" },
  { href: "#harga", label: "Harga" },
  { href: "#faq", label: "FAQ" },
]

function LandingPage() {
  return (
    <div className="h-svh bg-frame p-2">
      {/* Kartu membulat: div luar memegang latar bingkai, div dalam ini yang membulat dan menggulirkan kontennya sendiri */}
      <div className="h-full overflow-y-auto scroll-smooth rounded-2xl bg-background">
        <Navbar />
        <main>
          <Hero />
          <StatsBar />
          <WhyDigital />
          <Features />
          <TemplateGallery />
          <HowItWorks />
          <Pricing />
          <Testimonials />
          <Faq />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="text-foreground">
          <Logo />
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button
            nativeButton={false}
            render={
              <a
                href={waLink(waGeneralMessage)}
                target="_blank"
                rel="noreferrer"
              />
            }
          >
            <WhatsAppIcon className="size-4" />
            Konsultasi Gratis
          </Button>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
          aria-label="Buka menu"
        >
          <ChevronDown
            className={`size-6 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      {open ? (
        <nav className="border-t px-4 pt-2 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button
            nativeButton={false}
            className="mt-2 w-full"
            render={
              <a
                href={waLink(waGeneralMessage)}
                target="_blank"
                rel="noreferrer"
              />
            }
          >
            <WhatsAppIcon className="size-4" />
            Konsultasi Gratis
          </Button>
        </nav>
      ) : null}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blush/60 via-transparent to-transparent" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="relative">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold-strong">
            <Sparkles className="size-4 text-gold" />
            Dipercaya 1.200+ pasangan di seluruh Indonesia
          </p>
          <h1 className="mt-6 font-marcellus text-4xl leading-tight text-balance sm:text-5xl lg:text-[3.4rem]">
            Undangan Pernikahan Digital yang{" "}
            <span className="font-script text-5xl text-primary sm:text-6xl lg:text-[4.2rem]">
              Elegan
            </span>{" "}
            &amp; Berkesan
          </h1>
          <p className="mt-6 max-w-xl text-lg text-pretty text-muted-foreground">
            Sambut hari bahagiamu dengan undangan yang secantik momenmu. Pilih
            template favorit, kirim detail acara, dan undanganmu siap dibagikan
            dalam 24 jam — lengkap dengan RSVP, galeri foto, peta lokasi, dan
            amplop digital.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              nativeButton={false}
              size="lg"
              className="h-12 px-7 text-base"
              render={<a href="#template" />}
            >
              Lihat Template
              <ArrowRight className="size-4" />
            </Button>
            <Button
              nativeButton={false}
              size="lg"
              variant="outline"
              className="h-12 px-7 text-base"
              render={
                <a
                  href={waLink(waGeneralMessage)}
                  target="_blank"
                  rel="noreferrer"
                />
              }
            >
              <WhatsAppIcon className="size-5 text-[#25D366]" />
              Chat WhatsApp
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-4 text-gold" /> Selesai &lt; 24 jam
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-4 text-gold" /> Gratis revisi
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="size-4 text-gold" /> Tanpa aplikasi
            </span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-t-[10rem] rounded-b-3xl border-8 border-gold/30 shadow-2xl">
            <img
              src="/images/hero.jpg"
              alt="Pasangan pengantin berbahagia di hari pernikahan"
              className="aspect-[3/4] w-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="animate-float-slow absolute -bottom-5 -left-4 rounded-2xl border bg-card p-4 shadow-lg sm:-left-8">
            <p className="text-xs text-muted-foreground">RSVP Terkonfirmasi</p>
            <p className="font-marcellus text-2xl">248 tamu</p>
            <div className="mt-1 flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-current" />
              ))}
            </div>
          </div>
          <div
            className="animate-float-slow absolute -top-4 -right-4 rounded-2xl border bg-card p-4 shadow-lg sm:-right-6"
            style={{ animationDelay: "1.5s" }}
          >
            <p className="text-xs text-muted-foreground">Menuju Hari Bahagia</p>
            <p className="font-marcellus text-2xl text-primary">32 hari lagi</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const stats = [
  { value: "1.200+", label: "Undangan dibuat" },
  { value: "4.9/5", label: "Rating kepuasan" },
  { value: "< 24 jam", label: "Waktu pengerjaan" },
  { value: String(templates.length), label: "Koleksi kurasi desain" },
]

function StatsBar() {
  return (
    <section className="border-y">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-4 py-10 sm:px-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-marcellus text-3xl text-primary">{s.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const reasons = [
  {
    icon: Zap,
    title: "Praktis & Cepat Tersebar",
    text: "Cukup satu tautan untuk mengundang semua orang — kirim lewat WhatsApp atau Instagram, sampai dalam hitungan detik ke keluarga di mana pun.",
  },
  {
    icon: Wallet,
    title: "Hemat Hingga Jutaan Rupiah",
    text: "Tanpa biaya cetak dan ongkos kirim. Alihkan anggaran undangan fisik untuk hal lain yang lebih penting di hari bahagiamu.",
  },
  {
    icon: Users,
    title: "Tahu Siapa yang Hadir",
    text: "Fitur RSVP membuat tamu bisa konfirmasi kehadiran langsung dari undangan — kamu bisa memperkirakan konsumsi dan kursi dengan akurat.",
  },
  {
    icon: Leaf,
    title: "Berkesan & Ramah Lingkungan",
    text: "Foto, musik, dan cerita cintamu dalam satu halaman indah yang tidak berakhir di tempat sampah — kenangan yang bisa dibuka kapan saja.",
  },
]

function WhyDigital() {
  return (
    <section id="keunggulan" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Kenapa Undangan Digital?"
          title="Persiapan nikah itu melelahkan. Urusan undangan tidak harus ikut melelahkan."
          description="Kami tahu daftar persiapanmu panjang. Undangan digital memangkas satu urusan besar — tanpa antre percetakan, tanpa keliling membagikan, tanpa takut salah cetak."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="inline-flex size-12 items-center justify-center rounded-full bg-blush text-primary">
                <r.icon className="size-6" />
              </div>
              <h3 className="mt-4 font-marcellus text-lg">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Ilustrasi wireframe untuk tiap fitur di section "Fitur Lengkap" */
function FeatArtCountdown() {
  return (
    <svg viewBox="0 0 96 96" aria-hidden="true" className="h-auto w-full">
      <rect width="96" height="96" fill="var(--color-blush)" opacity="0.4" />
      <rect
        x="26"
        y="18"
        width="44"
        height="4"
        rx="2"
        fill="var(--color-border)"
      />
      <g
        fill="var(--color-card)"
        stroke="var(--color-border)"
        strokeWidth="1.5"
      >
        <rect x="14" y="34" width="16" height="24" rx="4" />
        <rect x="40" y="34" width="16" height="24" rx="4" />
        <rect x="66" y="34" width="16" height="24" rx="4" />
      </g>
      <rect
        x="19"
        y="41"
        width="6"
        height="10"
        rx="2"
        fill="var(--color-primary)"
        opacity="0.4"
      />
      <rect
        x="45"
        y="41"
        width="6"
        height="10"
        rx="2"
        fill="var(--color-border)"
      />
      <rect
        x="71"
        y="41"
        width="6"
        height="10"
        rx="2"
        fill="var(--color-border)"
      />
      <g fill="var(--color-gold)">
        <circle cx="35" cy="42" r="1.5" />
        <circle cx="35" cy="50" r="1.5" />
        <circle cx="61" cy="42" r="1.5" />
        <circle cx="61" cy="50" r="1.5" />
      </g>
      <rect
        x="34"
        y="68"
        width="28"
        height="4"
        rx="2"
        fill="var(--color-gold)"
        opacity="0.5"
      />
    </svg>
  )
}

function FeatArtRsvp() {
  return (
    <svg viewBox="0 0 96 96" aria-hidden="true" className="h-auto w-full">
      <rect width="96" height="96" fill="var(--color-blush)" opacity="0.4" />
      <rect
        x="14"
        y="20"
        width="52"
        height="26"
        rx="8"
        fill="var(--color-card)"
        stroke="var(--color-border)"
        strokeWidth="1.5"
      />
      <rect
        x="22"
        y="28"
        width="32"
        height="3.5"
        rx="1.75"
        fill="var(--color-border)"
      />
      <rect
        x="22"
        y="36"
        width="20"
        height="3.5"
        rx="1.75"
        fill="var(--color-border)"
      />
      <rect
        x="36"
        y="54"
        width="46"
        height="24"
        rx="8"
        fill="var(--color-primary)"
        fillOpacity="0.08"
        stroke="var(--color-primary)"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <circle
        cx="48"
        cy="66"
        r="6.5"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="1.5"
      />
      <path
        d="m45 66 2 2 4.5-4.5"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="59"
        y="64"
        width="16"
        height="3.5"
        rx="1.75"
        fill="var(--color-primary)"
        opacity="0.4"
      />
    </svg>
  )
}

function FeatArtGaleri() {
  return (
    <svg viewBox="0 0 96 96" aria-hidden="true" className="h-auto w-full">
      <rect width="96" height="96" fill="var(--color-blush)" opacity="0.4" />
      <rect
        x="16"
        y="18"
        width="42"
        height="34"
        rx="5"
        fill="var(--color-card)"
        stroke="var(--color-border)"
        strokeWidth="1.5"
      />
      <rect
        x="22"
        y="24"
        width="18"
        height="3.5"
        rx="1.75"
        fill="var(--color-border)"
      />
      <circle
        cx="66"
        cy="28"
        r="9"
        fill="var(--color-primary)"
        fillOpacity="0.1"
        stroke="var(--color-primary)"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <path
        d="m63.5 24.5 7 3.5-7 3.5 Z"
        fill="var(--color-primary)"
        opacity="0.7"
      />
      <rect
        x="34"
        y="40"
        width="46"
        height="38"
        rx="5"
        fill="var(--color-card)"
        stroke="var(--color-gold)"
        strokeWidth="1.5"
      />
      <circle cx="46" cy="52" r="3.5" fill="var(--color-gold)" opacity="0.8" />
      <path
        d="M38 74 L50 60 L57 67 L64 59 L76 74 Z"
        fill="var(--color-blush)"
        stroke="var(--color-gold)"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function FeatArtPeta() {
  return (
    <svg viewBox="0 0 96 96" aria-hidden="true" className="h-auto w-full">
      <rect width="96" height="96" fill="var(--color-blush)" opacity="0.4" />
      <rect
        x="14"
        y="22"
        width="68"
        height="54"
        rx="8"
        fill="var(--color-card)"
        stroke="var(--color-border)"
        strokeWidth="1.5"
      />
      <line
        x1="37"
        y1="22"
        x2="37"
        y2="76"
        stroke="var(--color-border)"
        strokeWidth="1"
        opacity="0.6"
      />
      <line
        x1="60"
        y1="22"
        x2="60"
        y2="76"
        stroke="var(--color-border)"
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M22 66 C32 50 46 64 54 46 S64 34 66 32"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="1.5"
        strokeDasharray="3 4"
        strokeLinecap="round"
      />
      <circle cx="22" cy="66" r="3" fill="var(--color-gold)" />
      <path
        d="M68 14 a9 9 0 0 1 9 9 c0 6.5 -9 15 -9 15 s-9 -8.5 -9 -15 a9 9 0 0 1 9 -9 Z"
        fill="var(--color-primary)"
      />
      <circle cx="68" cy="23" r="3.25" fill="white" />
    </svg>
  )
}

function FeatArtMusik() {
  return (
    <svg viewBox="0 0 96 96" aria-hidden="true" className="h-auto w-full">
      <rect width="96" height="96" fill="var(--color-blush)" opacity="0.4" />
      <rect
        x="14"
        y="26"
        width="68"
        height="44"
        rx="8"
        fill="var(--color-card)"
        stroke="var(--color-border)"
        strokeWidth="1.5"
      />
      <circle cx="26" cy="58" r="4" fill="var(--color-primary)" />
      <line
        x1="30"
        y1="58"
        x2="30"
        y2="40"
        stroke="var(--color-primary)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M30 40 q6 1 8 5"
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <g fill="var(--color-gold)">
        <rect x="46" y="44" width="3.5" height="10" rx="1.75" opacity="0.55" />
        <rect x="52" y="38" width="3.5" height="20" rx="1.75" opacity="0.75" />
        <rect x="58" y="42" width="3.5" height="14" rx="1.75" opacity="0.55" />
        <rect x="64" y="36" width="3.5" height="24" rx="1.75" opacity="0.9" />
        <rect x="70" y="44" width="3.5" height="10" rx="1.75" opacity="0.55" />
      </g>
    </svg>
  )
}

function FeatArtKisah() {
  return (
    <svg viewBox="0 0 96 96" aria-hidden="true" className="h-auto w-full">
      <rect width="96" height="96" fill="var(--color-blush)" opacity="0.4" />
      <line
        x1="30"
        y1="18"
        x2="30"
        y2="78"
        stroke="var(--color-border)"
        strokeWidth="1.5"
      />
      <circle cx="30" cy="26" r="4" fill="var(--color-gold)" />
      <rect
        x="40"
        y="21"
        width="28"
        height="3.5"
        rx="1.75"
        fill="var(--color-border)"
      />
      <rect
        x="40"
        y="28"
        width="18"
        height="3"
        rx="1.5"
        fill="var(--color-border)"
        opacity="0.7"
      />
      <path
        d="M30 53 c-3.6 -2.7 -6.3 -4.9 -6.3 -7.6 a3.15 3.15 0 0 1 6.3 -0.9 a3.15 3.15 0 0 1 6.3 0.9 c0 2.7 -2.7 4.9 -6.3 7.6 Z"
        fill="var(--color-primary)"
      />
      <rect
        x="40"
        y="43"
        width="24"
        height="3.5"
        rx="1.75"
        fill="var(--color-primary)"
        opacity="0.4"
      />
      <rect
        x="40"
        y="50"
        width="16"
        height="3"
        rx="1.5"
        fill="var(--color-border)"
        opacity="0.7"
      />
      <circle
        cx="30"
        cy="70"
        r="4"
        fill="var(--color-card)"
        stroke="var(--color-gold)"
        strokeWidth="1.5"
      />
      <rect
        x="40"
        y="65"
        width="28"
        height="3.5"
        rx="1.75"
        fill="var(--color-border)"
      />
      <rect
        x="40"
        y="72"
        width="14"
        height="3"
        rx="1.5"
        fill="var(--color-border)"
        opacity="0.7"
      />
    </svg>
  )
}

function FeatArtAmplop() {
  return (
    <svg viewBox="0 0 96 96" aria-hidden="true" className="h-auto w-full">
      <rect width="96" height="96" fill="var(--color-blush)" opacity="0.4" />
      <rect
        x="28"
        y="18"
        width="28"
        height="20"
        rx="3"
        fill="var(--color-card)"
        stroke="var(--color-gold)"
        strokeWidth="1.25"
      />
      <rect
        x="33"
        y="24"
        width="18"
        height="3"
        rx="1.5"
        fill="var(--color-border)"
      />
      <rect
        x="33"
        y="30"
        width="12"
        height="3"
        rx="1.5"
        fill="var(--color-border)"
      />
      <rect
        x="16"
        y="34"
        width="52"
        height="36"
        rx="5"
        fill="var(--color-card)"
        stroke="var(--color-border)"
        strokeWidth="1.5"
      />
      <path
        d="M17 36 L42 56 L67 36"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="68" cy="64" r="11" fill="var(--color-gold)" opacity="0.9" />
      <circle
        cx="68"
        cy="64"
        r="6.5"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function FeatArtNamaTamu() {
  return (
    <svg viewBox="0 0 96 96" aria-hidden="true" className="h-auto w-full">
      <rect width="96" height="96" fill="var(--color-blush)" opacity="0.4" />
      <rect
        x="20"
        y="14"
        width="56"
        height="68"
        rx="6"
        fill="var(--color-card)"
        stroke="var(--color-border)"
        strokeWidth="1.5"
      />
      <path
        d="M40 40 V32 a8 8 0 0 1 16 0 v8 Z"
        fill="var(--color-blush)"
        stroke="var(--color-gold)"
        strokeWidth="1"
      />
      <rect
        x="30"
        y="48"
        width="36"
        height="3.5"
        rx="1.75"
        fill="var(--color-border)"
      />
      <rect
        x="28"
        y="56"
        width="40"
        height="11"
        rx="5.5"
        fill="var(--color-primary)"
        fillOpacity="0.1"
        stroke="var(--color-primary)"
        strokeOpacity="0.35"
        strokeWidth="1.25"
      />
      <rect
        x="35"
        y="59.5"
        width="26"
        height="4"
        rx="2"
        fill="var(--color-primary)"
        opacity="0.5"
      />
      <rect
        x="34"
        y="72"
        width="28"
        height="3.5"
        rx="1.75"
        fill="var(--color-border)"
      />
      <path
        transform="translate(82 20) scale(0.55)"
        d="M0 -6 C0.6 -1.8 1.8 -0.6 6 0 C1.8 0.6 0.6 1.8 0 6 C-0.6 1.8 -1.8 0.6 -6 0 C-1.8 -0.6 -0.6 -1.8 0 -6 Z"
        fill="var(--color-gold)"
      />
    </svg>
  )
}

const features = [
  {
    art: FeatArtCountdown,
    title: "Hitung Mundur Acara",
    text: "Penghitung waktu otomatis menuju hari H yang membuat tamu ikut menantikan momenmu.",
  },
  {
    art: FeatArtRsvp,
    title: "RSVP & Buku Tamu",
    text: "Tamu konfirmasi kehadiran dan menulis doa restu langsung dari undangan.",
  },
  {
    art: FeatArtGaleri,
    title: "Galeri Foto & Video",
    text: "Pajang foto prewedding terbaikmu dalam galeri yang elegan, bisa disertai video.",
  },
  {
    art: FeatArtPeta,
    title: "Peta Lokasi Terintegrasi",
    text: "Tombol menuju Google Maps memastikan tidak ada tamu yang tersasar.",
  },
  {
    art: FeatArtMusik,
    title: "Musik Latar",
    text: "Iringi undanganmu dengan lagu yang punya arti khusus bagi kalian berdua.",
  },
  {
    art: FeatArtKisah,
    title: "Kisah Cinta",
    text: "Bagikan perjalanan cintamu dalam linimasa yang menyentuh hati para tamu.",
  },
  {
    art: FeatArtAmplop,
    title: "Amplop Digital",
    text: "Terima tanda kasih tanpa repot — nomor rekening dan e-wallet dengan tombol salin.",
  },
  {
    art: FeatArtNamaTamu,
    title: "Nama Tamu Personal",
    text: "Setiap tautan bisa menyapa tamu dengan namanya — terasa istimewa sejak dibuka.",
  },
]

function Features() {
  return (
    <section id="fitur" className="scroll-mt-20 bg-blush/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Fitur Lengkap"
          title="Semua yang tamu butuhkan, dalam satu tautan"
          description="Setiap undangan Wedding Selo bukan sekadar kartu digital — melainkan halaman acara lengkap yang memandu tamu dari sebelum hingga sesudah hari H."
        />
        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="flex gap-4">
              <div className="w-20 shrink-0 self-start overflow-hidden rounded-xl border">
                <f.art />
              </div>
              <div>
                <h3 className="font-medium">{f.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {f.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TemplateGallery() {
  return (
    <section id="template" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Koleksi Template"
          title="Temukan desain yang menceritakan kisahmu"
          description="Setiap template dirancang dengan karakter berbeda — klasik, rustic, mewah, hingga minimalis. Klik untuk melihat preview undangan lengkapnya."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((t) => (
            <Link
              key={t.slug}
              to="/template/$slug"
              params={{ slug: t.slug }}
              className="group overflow-hidden rounded-3xl border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={t.cover}
                  alt={`Template undangan ${t.name}`}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {t.category}
                </span>
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-sm font-medium text-neutral-900 shadow-lg">
                    <Eye className="size-4" />
                    Preview Undangan
                  </span>
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-marcellus text-xl">{t.name}</h3>
                  <ArrowRight className="size-5 text-gold transition-transform group-hover:translate-x-1" />
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {t.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Belum menemukan yang pas?{" "}
          <a
            href={waLink(
              "Halo Wedding Selo! Saya ingin diskusi desain undangan custom sesuai tema pernikahan saya."
            )}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-primary underline underline-offset-4"
          >
            Konsultasikan desain custom
          </a>{" "}
          sesuai tema pernikahanmu.
        </p>
      </div>
    </section>
  )
}

/* Ilustrasi wireframe untuk tiap langkah "Cara Pemesanan" */
function StepArtPilihTemplate() {
  return (
    <svg viewBox="0 0 220 140" aria-hidden="true" className="h-auto w-full">
      <rect width="220" height="140" fill="var(--color-blush)" opacity="0.4" />
      <g opacity="0.6">
        <rect
          x="22"
          y="38"
          width="48"
          height="68"
          rx="6"
          fill="var(--color-card)"
          stroke="var(--color-border)"
          strokeWidth="1.5"
        />
        <path
          d="M36 66 V56 a10 10 0 0 1 20 0 v10 Z"
          fill="var(--color-blush)"
        />
        <rect
          x="34"
          y="74"
          width="24"
          height="3.5"
          rx="1.75"
          fill="var(--color-border)"
        />
        <rect
          x="38"
          y="82"
          width="16"
          height="3.5"
          rx="1.75"
          fill="var(--color-border)"
        />
      </g>
      <g opacity="0.6">
        <rect
          x="150"
          y="38"
          width="48"
          height="68"
          rx="6"
          fill="var(--color-card)"
          stroke="var(--color-border)"
          strokeWidth="1.5"
        />
        <path
          d="M164 66 V56 a10 10 0 0 1 20 0 v10 Z"
          fill="var(--color-blush)"
        />
        <rect
          x="162"
          y="74"
          width="24"
          height="3.5"
          rx="1.75"
          fill="var(--color-border)"
        />
        <rect
          x="166"
          y="82"
          width="16"
          height="3.5"
          rx="1.75"
          fill="var(--color-border)"
        />
      </g>
      <rect
        x="81"
        y="21"
        width="58"
        height="90"
        rx="10"
        fill="none"
        stroke="var(--color-primary)"
        strokeOpacity="0.3"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <rect
        x="86"
        y="26"
        width="48"
        height="80"
        rx="6"
        fill="var(--color-card)"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      <path
        d="M98 62 V50 a12 12 0 0 1 24 0 v12 Z"
        fill="var(--color-blush)"
        stroke="var(--color-gold)"
        strokeWidth="1.25"
      />
      <rect
        x="96"
        y="72"
        width="28"
        height="3.5"
        rx="1.75"
        fill="var(--color-primary)"
        opacity="0.4"
      />
      <rect
        x="101"
        y="80"
        width="18"
        height="3.5"
        rx="1.75"
        fill="var(--color-border)"
      />
      <rect
        x="98"
        y="90"
        width="24"
        height="8"
        rx="4"
        fill="var(--color-primary)"
        opacity="0.15"
      />
      <circle cx="137" cy="27" r="9" fill="var(--color-gold)" />
      <path
        d="m133 27 3 3 6-6"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StepArtKirimDetail() {
  return (
    <svg viewBox="0 0 220 140" aria-hidden="true" className="h-auto w-full">
      <rect width="220" height="140" fill="var(--color-blush)" opacity="0.4" />
      <rect
        x="28"
        y="22"
        width="110"
        height="46"
        rx="10"
        fill="var(--color-card)"
        stroke="var(--color-border)"
        strokeWidth="1.5"
      />
      <rect
        x="38"
        y="32"
        width="50"
        height="4"
        rx="2"
        fill="var(--color-primary)"
        opacity="0.35"
      />
      <rect
        x="38"
        y="42"
        width="88"
        height="4"
        rx="2"
        fill="var(--color-border)"
      />
      <rect
        x="38"
        y="52"
        width="64"
        height="4"
        rx="2"
        fill="var(--color-border)"
      />
      <rect
        x="100"
        y="78"
        width="92"
        height="38"
        rx="10"
        fill="var(--color-primary)"
        fillOpacity="0.08"
        stroke="var(--color-primary)"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <rect
        x="108"
        y="85"
        width="24"
        height="24"
        rx="5"
        fill="var(--color-blush)"
        stroke="var(--color-gold)"
        strokeWidth="1.25"
      />
      <path
        d="M120 102 c-4 -3 -6.5 -5.2 -6.5 -8 a3.25 3.25 0 0 1 6.5 -0.9 a3.25 3.25 0 0 1 6.5 0.9 c0 2.8 -2.5 5 -6.5 8 Z"
        fill="var(--color-primary)"
        opacity="0.7"
      />
      <rect
        x="140"
        y="88"
        width="44"
        height="4"
        rx="2"
        fill="var(--color-primary)"
        opacity="0.35"
      />
      <rect
        x="140"
        y="98"
        width="30"
        height="4"
        rx="2"
        fill="var(--color-border)"
      />
      <g
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m170 124 3 3 6-6" />
        <path d="m177 124 3 3 6-6" />
      </g>
    </svg>
  )
}

function StepArtKamiBuatkan() {
  return (
    <svg viewBox="0 0 220 140" aria-hidden="true" className="h-auto w-full">
      <rect width="220" height="140" fill="var(--color-blush)" opacity="0.4" />
      <rect
        x="82"
        y="18"
        width="56"
        height="94"
        rx="8"
        fill="var(--color-card)"
        stroke="var(--color-border)"
        strokeWidth="1.5"
      />
      <path
        d="M96 58 V44 a14 14 0 0 1 28 0 v14"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="1.25"
      />
      <path
        d="M110 51 c-3.2 -2.4 -5.6 -4.4 -5.6 -6.8 a2.8 2.8 0 0 1 5.6 -0.8 a2.8 2.8 0 0 1 5.6 0.8 c0 2.4 -2.4 4.4 -5.6 6.8 Z"
        fill="var(--color-primary)"
      />
      <rect
        x="94"
        y="66"
        width="32"
        height="3.5"
        rx="1.75"
        fill="var(--color-border)"
      />
      <rect
        x="100"
        y="74"
        width="20"
        height="3.5"
        rx="1.75"
        fill="var(--color-border)"
      />
      <line
        x1="94"
        y1="92"
        x2="112"
        y2="92"
        stroke="var(--color-primary)"
        strokeOpacity="0.5"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="118"
        y1="92"
        x2="126"
        y2="92"
        stroke="var(--color-border)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="1 6"
      />
      <g transform="translate(114 92) rotate(45)">
        <path d="M0 0 L-3.2 -6 h6.4 Z" fill="var(--color-gold)" />
        <rect
          x="-3.2"
          y="-20"
          width="6.4"
          height="14"
          rx="1.5"
          fill="var(--color-primary)"
        />
      </g>
      <g fill="var(--color-gold)">
        <path
          transform="translate(62 36)"
          d="M0 -6 C0.6 -1.8 1.8 -0.6 6 0 C1.8 0.6 0.6 1.8 0 6 C-0.6 1.8 -1.8 0.6 -6 0 C-1.8 -0.6 -0.6 -1.8 0 -6 Z"
        />
        <path
          transform="translate(158 52) scale(0.7)"
          d="M0 -6 C0.6 -1.8 1.8 -0.6 6 0 C1.8 0.6 0.6 1.8 0 6 C-0.6 1.8 -1.8 0.6 -6 0 C-1.8 -0.6 -0.6 -1.8 0 -6 Z"
        />
        <path
          transform="translate(66 96) scale(0.55)"
          d="M0 -6 C0.6 -1.8 1.8 -0.6 6 0 C1.8 0.6 0.6 1.8 0 6 C-0.6 1.8 -1.8 0.6 -6 0 C-1.8 -0.6 -0.6 -1.8 0 -6 Z"
        />
        <path
          transform="translate(154 100) scale(0.8)"
          fill="var(--color-primary)"
          opacity="0.45"
          d="M0 -6 C0.6 -1.8 1.8 -0.6 6 0 C1.8 0.6 0.6 1.8 0 6 C-0.6 1.8 -1.8 0.6 -6 0 C-1.8 -0.6 -0.6 -1.8 0 -6 Z"
        />
      </g>
    </svg>
  )
}

function StepArtSebarkan() {
  return (
    <svg viewBox="0 0 220 140" aria-hidden="true" className="h-auto w-full">
      <rect width="220" height="140" fill="var(--color-blush)" opacity="0.4" />
      <rect
        x="34"
        y="42"
        width="46"
        height="62"
        rx="6"
        fill="var(--color-card)"
        stroke="var(--color-border)"
        strokeWidth="1.5"
      />
      <path
        d="M47 68 V58 a10 10 0 0 1 20 0 v10 Z"
        fill="var(--color-blush)"
        stroke="var(--color-gold)"
        strokeWidth="1"
      />
      <rect
        x="44"
        y="76"
        width="26"
        height="3.5"
        rx="1.75"
        fill="var(--color-border)"
      />
      <rect
        x="49"
        y="84"
        width="16"
        height="3.5"
        rx="1.75"
        fill="var(--color-border)"
      />
      <path
        d="M44 32 c-2.6 -2 -4.5 -3.6 -4.5 -5.5 a2.25 2.25 0 0 1 4.5 -0.6 a2.25 2.25 0 0 1 4.5 0.6 c0 1.9 -1.9 3.5 -4.5 5.5 Z"
        fill="var(--color-primary)"
        opacity="0.55"
      />
      <g
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="1.5"
        strokeDasharray="3 4"
        strokeLinecap="round"
      >
        <path d="M84 66 Q118 46 140 36" />
        <path d="M84 74 Q120 72 160 70" />
        <path d="M84 82 Q118 100 140 106" />
      </g>
      <g>
        <circle
          cx="154"
          cy="34"
          r="12"
          fill="var(--color-card)"
          stroke="var(--color-gold)"
          strokeWidth="1.5"
        />
        <circle
          cx="176"
          cy="70"
          r="12"
          fill="var(--color-card)"
          stroke="var(--color-gold)"
          strokeWidth="1.5"
        />
        <circle
          cx="154"
          cy="106"
          r="12"
          fill="var(--color-card)"
          stroke="var(--color-gold)"
          strokeWidth="1.5"
        />
      </g>
      <g
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <circle cx="154" cy="30.5" r="3" />
        <path d="M149 42 a5 5 0 0 1 10 0" />
        <circle cx="176" cy="66.5" r="3" />
        <path d="M171 78 a5 5 0 0 1 10 0" />
        <circle cx="154" cy="102.5" r="3" />
        <path d="M149 114 a5 5 0 0 1 10 0" />
      </g>
      <path
        transform="translate(196 42) scale(0.6)"
        d="M0 -6 C0.6 -1.8 1.8 -0.6 6 0 C1.8 0.6 0.6 1.8 0 6 C-0.6 1.8 -1.8 0.6 -6 0 C-1.8 -0.6 -0.6 -1.8 0 -6 Z"
        fill="var(--color-gold)"
      />
    </svg>
  )
}

const steps = [
  {
    art: StepArtPilihTemplate,
    title: "Pilih Template",
    text: "Jelajahi koleksi kami dan pilih desain yang paling menggambarkan kalian berdua.",
  },
  {
    art: StepArtKirimDetail,
    title: "Kirim Detail Acara",
    text: "Isi formulir sederhana lewat WhatsApp: nama, jadwal, lokasi, dan foto pilihan.",
  },
  {
    art: StepArtKamiBuatkan,
    title: "Kami Buatkan",
    text: "Tim kami merangkai undanganmu dalam waktu kurang dari 24 jam, lalu kirim preview untukmu.",
  },
  {
    art: StepArtSebarkan,
    title: "Revisi & Sebarkan",
    text: "Setelah kamu puas dengan hasilnya, undangan siap dibagikan ke seluruh tamu.",
  },
]

function HowItWorks() {
  return (
    <section className="bg-blush/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Cara Pemesanan"
          title="Empat langkah mudah menuju undangan impian"
          description="Tanpa proses rumit — dari pilih desain sampai undangan tersebar, semuanya bisa selesai dalam sehari."
        />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center">
              <div className="relative mx-auto max-w-[240px]">
                <div className="overflow-hidden rounded-2xl border">
                  <s.art />
                </div>
                <span className="absolute -top-2.5 -right-2.5 flex size-7 items-center justify-center rounded-full bg-gold text-xs font-semibold text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-marcellus text-lg">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="harga" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Paket Harga"
          title="Investasi kecil untuk kesan pertama yang tak terlupakan"
          description="Harga transparan tanpa biaya tersembunyi. Semua paket sudah termasuk pengerjaan oleh desainer kami — bukan template isi sendiri."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {pricing.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-3xl border bg-card p-8 shadow-sm ${
                p.highlight
                  ? "border-primary shadow-lg ring-4 ring-primary/20"
                  : ""
              }`}
            >
              {p.highlight ? (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold tracking-wide text-primary-foreground">
                  PALING LARIS
                </span>
              ) : null}
              <h3 className="font-marcellus text-xl">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-marcellus text-4xl">{p.price}</span>
                <span className="text-sm text-muted-foreground line-through">
                  {p.originalPrice}
                </span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                nativeButton={false}
                variant={p.highlight ? "default" : "outline"}
                className="mt-8 h-11 w-full"
                render={
                  <a
                    href={waLink(
                      `Halo Wedding Selo! Saya ingin memesan undangan digital paket ${p.name} (${p.price}). Bagaimana langkah selanjutnya?`
                    )}
                    target="_blank"
                    rel="noreferrer"
                  />
                }
              >
                <WhatsAppIcon className="size-4" />
                Pilih Paket {p.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="bg-blush/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Kata Mereka"
          title="Cerita bahagia dari pasangan Wedding Selo"
          description="Kepercayaan pasangan yang telah kami temani adalah alasan kami terus berkarya."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border bg-card p-8 shadow-sm"
            >
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-pretty">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t pt-4">
                <p className="font-marcellus">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.city}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Pertanyaan Umum"
          title="Masih ragu? Mungkin ini jawabannya"
        />
        <div className="mt-12 space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border bg-card shadow-sm open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-medium [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Pertanyaan lain?{" "}
          <a
            href={waLink(waGeneralMessage)}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-primary underline underline-offset-4"
          >
            Tanyakan langsung lewat WhatsApp
          </a>{" "}
          — kami balas cepat.
        </p>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/images/table.jpg"
        alt=""
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-neutral-950/70" />
      <div className="relative mx-auto max-w-3xl px-4 py-24 text-center text-white sm:px-6">
        <p className="font-script text-4xl text-gold sm:text-5xl">
          Hari bahagiamu semakin dekat
        </p>
        <h2 className="mt-4 font-marcellus text-3xl text-balance sm:text-4xl">
          Wujudkan undangan impianmu hari ini
        </h2>
        <p className="mt-4 text-pretty text-white/80">
          Konsultasi gratis, tanpa komitmen. Ceritakan rencana pernikahanmu dan
          kami bantu memilih desain serta paket yang paling pas.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            nativeButton={false}
            size="lg"
            className="h-12 bg-[#25D366] px-7 text-base text-white hover:bg-[#1fb457]"
            render={
              <a
                href={waLink(waGeneralMessage)}
                target="_blank"
                rel="noreferrer"
              />
            }
          >
            <WhatsAppIcon className="size-5" />
            Chat WhatsApp Sekarang
          </Button>
          <Button
            nativeButton={false}
            size="lg"
            variant="outline"
            className="h-12 border-white/40 bg-transparent px-7 text-base text-white hover:bg-white/10 hover:text-white"
            render={<a href="#template" />}
          >
            Lihat Template Dulu
          </Button>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo light className="text-background" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed opacity-70">
            {siteConfig.description}
          </p>
        </div>
        <div>
          <h3 className="font-marcellus text-lg">Navigasi</h3>
          <ul className="mt-4 space-y-2.5 text-sm opacity-80">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:opacity-100">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-marcellus text-lg">Hubungi Kami</h3>
          <ul className="mt-4 space-y-3 text-sm opacity-80">
            <li>
              <a
                href={waLink(waGeneralMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 hover:opacity-100"
              >
                <WhatsAppIcon className="size-4" />
                {siteConfig.contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2.5 hover:opacity-100"
              >
                <Mail className="size-4" />
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a
                href={`https://instagram.com/${siteConfig.contact.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 hover:opacity-100"
              >
                <InstagramIcon className="size-4" />@
                {siteConfig.contact.instagram}
              </a>
            </li>
            <li className="inline-flex items-center gap-2.5">
              <MapPin className="size-4" />
              {siteConfig.contact.address}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs opacity-60 sm:px-6">
          © {new Date().getFullYear()} {siteConfig.name}. Dibuat dengan{" "}
          <Heart className="inline size-3 fill-current" /> untuk setiap pasangan
          berbahagia.
        </p>
      </div>
    </footer>
  )
}
