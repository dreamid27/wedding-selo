import { useEffect, useState } from "react"
import { Link, createFileRoute, notFound } from "@tanstack/react-router"
import {
  ArrowLeft,
  Check,
  ChevronDown,
  Copy,
  Gift,
  Heart,
  MapPin,
  Send,
} from "lucide-react"

import { WhatsAppIcon } from "@/components/site"
import { siteConfig, waLink, waTemplateMessage } from "@/lib/site-config"
import { absoluteUrl, canonicalLink, jsonLd, seoMeta } from "@/lib/seo"
import { getTemplate } from "@/lib/templates"
import type { WeddingTemplate } from "@/lib/templates"

export const Route = createFileRoute("/template/$slug")({
  loader: ({ params }) => {
    const template = getTemplate(params.slug)
    if (!template) throw notFound()
    return { template }
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: `Template — ${siteConfig.name}` }] }
    const { template } = loaderData
    const path = `/template/${template.slug}`
    return {
      meta: seoMeta({
        title: `Template ${template.name} (${template.category}) — ${siteConfig.name}`,
        description: `${template.tagline}. ${template.description} Lihat preview lengkap template undangan pernikahan digital ${template.name} dari ${siteConfig.name}.`,
        path,
        image: template.cover,
        imageAlt: `Template undangan digital ${template.name} — ${siteConfig.name}`,
      }),
      links: [canonicalLink(path)],
      scripts: [
        jsonLd({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Beranda",
              item: siteConfig.url,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: `Template ${template.name}`,
              item: absoluteUrl(path),
            },
          ],
        }),
      ],
    }
  },
  component: TemplatePreviewPage,
})

function TemplatePreviewPage() {
  const { template } = Route.useLoaderData()
  const t = template.theme

  return (
    <div
      className={`${t.bodyFont} min-h-svh`}
      style={{ backgroundColor: t.bg, color: t.ink }}
    >
      <PreviewBar template={template} />
      <Cover template={template} />
      <Countdown template={template} />
      <CoupleSection template={template} />
      <StorySection template={template} />
      <EventsSection template={template} />
      <GallerySection template={template} />
      <RsvpSection template={template} />
      <GiftSection template={template} />
      <ClosingSection template={template} />
      <CtaBar template={template} />
    </div>
  )
}

/** Bar atas: identitas preview + kembali ke katalog. */
function PreviewBar({ template }: { template: WeddingTemplate }) {
  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-neutral-950/85 text-white backdrop-blur-sm">
      <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-4 text-sm">
        <Link
          to="/"
          hash="template"
          className="inline-flex items-center gap-2 opacity-90 hover:opacity-100"
        >
          <ArrowLeft className="size-4" />
          <span className="hidden sm:inline">Kembali ke katalog</span>
          <span className="sm:hidden">Kembali</span>
        </Link>
        <p className="opacity-90">
          Preview: <span className="font-medium">{template.name}</span>
        </p>
      </div>
    </div>
  )
}

function Cover({ template }: { template: WeddingTemplate }) {
  const t = template.theme
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden text-center">
      <img
        src={template.hero}
        alt=""
        className="absolute inset-0 size-full object-cover"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0"
        style={{
          background: t.dark
            ? "linear-gradient(to bottom, rgba(10,8,5,0.55), rgba(10,8,5,0.8))"
            : "linear-gradient(to bottom, rgba(30,20,20,0.35), rgba(30,20,20,0.6))",
        }}
      />
      <div className="animate-fade-up relative px-6 text-white">
        <p className={`${t.headingFont} text-sm tracking-[0.35em] uppercase`}>
          Undangan Pernikahan
        </p>
        <div className="ornament-line mx-auto my-6 w-20 text-white/70" />
        <h1
          className={`${t.scriptFont} text-6xl leading-tight sm:text-7xl md:text-8xl`}
        >
          {template.couple.groom} <span style={{ color: t.accent }}>&amp;</span>{" "}
          {template.couple.bride}
        </h1>
        <p className={`${t.headingFont} mt-8 text-lg tracking-widest`}>
          {template.dateLabel}
        </p>
        <ChevronDown className="mx-auto mt-12 size-7 animate-bounce text-white/80" />
      </div>
    </section>
  )
}

function useCountdown(target: string) {
  const [now, setNow] = useState<number | null>(null)
  useEffect(() => {
    setNow(Date.now())
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])
  if (now === null) return null
  const diff = Math.max(0, new Date(target).getTime() - now)
  return {
    hari: Math.floor(diff / 86_400_000),
    jam: Math.floor(diff / 3_600_000) % 24,
    menit: Math.floor(diff / 60_000) % 60,
    detik: Math.floor(diff / 1000) % 60,
  }
}

function Countdown({ template }: { template: WeddingTemplate }) {
  const t = template.theme
  const left = useCountdown(template.date)
  const units = ["hari", "jam", "menit", "detik"] as const
  return (
    <section className="px-6 py-16 text-center">
      <p
        className={`${t.headingFont} text-sm tracking-[0.3em] uppercase`}
        style={{ color: t.sub }}
      >
        Menghitung Hari
      </p>
      <div className="mt-8 flex justify-center gap-3 sm:gap-5">
        {units.map((u) => (
          <div
            key={u}
            className="w-18 rounded-2xl py-4 sm:w-24 sm:py-5"
            style={{
              backgroundColor: t.surface,
              border: `1px solid ${t.line}`,
            }}
          >
            <p
              className={`${t.headingFont} text-3xl sm:text-4xl`}
              style={{ color: t.accent }}
            >
              {left ? String(left[u]).padStart(2, "0") : "--"}
            </p>
            <p
              className="mt-1 text-xs tracking-widest uppercase"
              style={{ color: t.sub }}
            >
              {u}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function SectionShell({
  template,
  eyebrow,
  title,
  children,
  alt = false,
}: {
  template: WeddingTemplate
  eyebrow: string
  title: string
  children: React.ReactNode
  alt?: boolean
}) {
  const t = template.theme
  return (
    <section
      className="px-6 py-16 sm:py-20"
      style={alt ? { backgroundColor: t.surface } : undefined}
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className={`${t.scriptFont} text-3xl`} style={{ color: t.accent }}>
          {eyebrow}
        </p>
        <h2
          className={`${t.headingFont} mt-2 text-2xl tracking-wide sm:text-3xl`}
        >
          {title}
        </h2>
        <div
          className="ornament-line mx-auto mt-5 mb-10 w-20"
          style={{ color: t.accent }}
        />
        {children}
      </div>
    </section>
  )
}

function CoupleSection({ template }: { template: WeddingTemplate }) {
  const t = template.theme
  const people = [
    {
      full: template.couple.brideFull,
      short: template.couple.bride,
      parents: template.couple.brideParents,
    },
    {
      full: template.couple.groomFull,
      short: template.couple.groom,
      parents: template.couple.groomParents,
    },
  ]
  return (
    <SectionShell
      template={template}
      eyebrow="Mempelai"
      title="Kedua Mempelai"
      alt
    >
      <p
        className="mx-auto max-w-xl text-sm leading-relaxed"
        style={{ color: t.sub }}
      >
        Dengan penuh sukacita dan atas berkat rahmat Tuhan Yang Maha Esa, kami
        mengundang Bapak/Ibu/Saudara/i untuk hadir di hari pernikahan kami.
      </p>
      <div className="mt-10 grid gap-10 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        {people.map((p, i) => (
          <div key={p.full} className={i === 1 ? "sm:order-3" : ""}>
            <p
              className={`${t.scriptFont} text-4xl`}
              style={{ color: t.accent }}
            >
              {p.short}
            </p>
            <p className={`${t.headingFont} mt-3 text-xl`}>{p.full}</p>
            <p className="mt-2 text-sm" style={{ color: t.sub }}>
              {p.parents}
            </p>
          </div>
        ))}
        <Heart
          className="order-2 mx-auto size-8"
          style={{ color: t.accent }}
          fill="currentColor"
        />
      </div>
    </SectionShell>
  )
}

function StorySection({ template }: { template: WeddingTemplate }) {
  const t = template.theme
  return (
    <SectionShell
      template={template}
      eyebrow="Perjalanan Kami"
      title="Kisah Cinta"
    >
      <div className="space-y-8 text-left">
        {template.story.map((s) => (
          <div key={s.title} className="flex gap-5">
            <div className="flex flex-col items-center">
              <span
                className={`${t.headingFont} flex size-14 shrink-0 items-center justify-center rounded-full text-sm`}
                style={{
                  backgroundColor: t.surface,
                  border: `1px solid ${t.line}`,
                  color: t.accent,
                }}
              >
                {s.when}
              </span>
              <span
                className="mt-2 w-px flex-1"
                style={{ backgroundColor: t.line }}
              />
            </div>
            <div className="pb-2">
              <h3 className={`${t.headingFont} text-lg`}>{s.title}</h3>
              <p
                className="mt-1.5 text-sm leading-relaxed"
                style={{ color: t.sub }}
              >
                {s.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}

function EventsSection({ template }: { template: WeddingTemplate }) {
  const t = template.theme
  return (
    <SectionShell
      template={template}
      eyebrow="Waktu & Tempat"
      title="Rangkaian Acara"
      alt
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {template.events.map((e) => (
          <div
            key={e.name}
            className="rounded-3xl p-8"
            style={{ backgroundColor: t.bg, border: `1px solid ${t.line}` }}
          >
            <h3
              className={`${t.headingFont} text-2xl`}
              style={{ color: t.accent }}
            >
              {e.name}
            </h3>
            <p className={`${t.headingFont} mt-4`}>{template.dateLabel}</p>
            <p className="mt-1 text-sm" style={{ color: t.sub }}>
              {e.time}
            </p>
            <div
              className="ornament-line mx-auto my-5 w-16"
              style={{ color: t.line }}
            />
            <p className="font-medium">{e.venue}</p>
            <p className="mt-1 text-sm" style={{ color: t.sub }}>
              {e.address}
            </p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(`${e.venue} ${e.address}`)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-85"
              style={{ backgroundColor: t.accent, color: t.accentInk }}
            >
              <MapPin className="size-4" />
              Lihat Lokasi
            </a>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}

function GallerySection({ template }: { template: WeddingTemplate }) {
  return (
    <SectionShell template={template} eyebrow="Momen Kami" title="Galeri">
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {template.gallery.map((src, i) => (
          <img
            key={src + i}
            src={src}
            alt={`Foto ${template.couple.groom} dan ${template.couple.bride} ${i + 1}`}
            loading="lazy"
            className={`w-full rounded-2xl object-cover ${i % 3 === 0 ? "aspect-[4/5]" : "aspect-square"}`}
          />
        ))}
      </div>
    </SectionShell>
  )
}

const sampleWishes = [
  {
    name: "Keluarga Besar Hartono",
    text: "Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.",
  },
  {
    name: "Rina & Dito",
    text: "Akhirnya! Bahagia selalu ya kalian berdua, sampai jumpa di hari H 🤍",
  },
]

function RsvpSection({ template }: { template: WeddingTemplate }) {
  const t = template.theme
  const [sent, setSent] = useState(false)
  const inputStyle = {
    backgroundColor: t.bg,
    border: `1px solid ${t.line}`,
    color: t.ink,
  }
  return (
    <SectionShell
      template={template}
      eyebrow="Doa & Kehadiran"
      title="RSVP & Ucapan"
      alt
    >
      <form
        className="mx-auto max-w-md space-y-3 text-left"
        onSubmit={(e) => {
          e.preventDefault()
          setSent(true)
        }}
      >
        <input
          required
          placeholder="Nama kamu"
          className="w-full rounded-xl px-4 py-3 text-sm outline-none"
          style={inputStyle}
        />
        <select
          required
          defaultValue=""
          className="w-full rounded-xl px-4 py-3 text-sm outline-none"
          style={inputStyle}
        >
          <option value="" disabled>
            Konfirmasi kehadiran
          </option>
          <option>Hadir</option>
          <option>Berhalangan hadir</option>
          <option>Masih ragu</option>
        </select>
        <textarea
          rows={3}
          placeholder="Tulis doa & ucapan untuk kedua mempelai…"
          className="w-full resize-none rounded-xl px-4 py-3 text-sm outline-none"
          style={inputStyle}
        />
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium transition-opacity hover:opacity-85"
          style={{ backgroundColor: t.accent, color: t.accentInk }}
        >
          {sent ? <Check className="size-4" /> : <Send className="size-4" />}
          {sent ? "Terkirim — terima kasih!" : "Kirim Ucapan"}
        </button>
      </form>
      <div className="mx-auto mt-10 max-w-md space-y-4 text-left">
        {sampleWishes.map((w) => (
          <div
            key={w.name}
            className="rounded-2xl p-5"
            style={{ backgroundColor: t.bg, border: `1px solid ${t.line}` }}
          >
            <p
              className={`${t.headingFont} text-sm`}
              style={{ color: t.accent }}
            >
              {w.name}
            </p>
            <p
              className="mt-1.5 text-sm leading-relaxed"
              style={{ color: t.sub }}
            >
              {w.text}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}

function GiftSection({ template }: { template: WeddingTemplate }) {
  const t = template.theme
  const [copied, setCopied] = useState<string | null>(null)
  const accounts = [
    { bank: "BCA", number: "1234567890", owner: template.couple.groomFull },
    { bank: "Mandiri", number: "0987654321", owner: template.couple.brideFull },
  ]
  return (
    <SectionShell
      template={template}
      eyebrow="Tanda Kasih"
      title="Amplop Digital"
    >
      <p
        className="mx-auto max-w-md text-sm leading-relaxed"
        style={{ color: t.sub }}
      >
        Kehadiran dan doa restu adalah hadiah terindah bagi kami. Namun bila
        ingin memberikan tanda kasih, kami sediakan amplop digital berikut.
      </p>
      <div className="mx-auto mt-8 grid max-w-lg gap-4 sm:grid-cols-2">
        {accounts.map((a) => (
          <div
            key={a.bank}
            className="rounded-2xl p-6 text-left"
            style={{
              backgroundColor: t.surface,
              border: `1px solid ${t.line}`,
            }}
          >
            <div className="flex items-center justify-between">
              <p className={`${t.headingFont} text-lg`}>{a.bank}</p>
              <Gift className="size-5" style={{ color: t.accent }} />
            </div>
            <p className="mt-3 font-mono text-lg tracking-wider">{a.number}</p>
            <p className="mt-1 text-xs" style={{ color: t.sub }}>
              a.n. {a.owner}
            </p>
            <button
              type="button"
              onClick={() => {
                void navigator.clipboard.writeText(a.number)
                setCopied(a.bank)
                setTimeout(() => setCopied(null), 2000)
              }}
              className="mt-4 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-opacity hover:opacity-85"
              style={{ backgroundColor: t.accent, color: t.accentInk }}
            >
              {copied === a.bank ? (
                <Check className="size-3.5" />
              ) : (
                <Copy className="size-3.5" />
              )}
              {copied === a.bank ? "Tersalin!" : "Salin Nomor"}
            </button>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}

function ClosingSection({ template }: { template: WeddingTemplate }) {
  const t = template.theme
  return (
    <section className="relative overflow-hidden px-6 py-20 text-center">
      <div className="relative mx-auto max-w-2xl">
        <p
          className={`${t.scriptFont} text-4xl sm:text-5xl`}
          style={{ color: t.accent }}
        >
          Terima Kasih
        </p>
        <p className="mt-5 text-sm leading-relaxed" style={{ color: t.sub }}>
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
        </p>
        <p className={`${t.headingFont} mt-8 text-2xl`}>
          {template.couple.groom} &amp; {template.couple.bride}
        </p>
        <div
          className="ornament-line mx-auto mt-10 mb-6 w-24"
          style={{ color: t.line }}
        />
        <p className="pb-16 text-xs" style={{ color: t.sub }}>
          Undangan digital oleh{" "}
          <Link
            to="/"
            className="underline underline-offset-2"
            style={{ color: t.accent }}
          >
            Wedding Selo
          </Link>
        </p>
      </div>
    </section>
  )
}

/** Bar bawah melayang: ajakan memesan template ini. */
function CtaBar({ template }: { template: WeddingTemplate }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-neutral-950/85 text-white backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <p className="hidden text-sm opacity-90 sm:block">
          Suka desain <span className="font-medium">{template.name}</span>?
          Jadikan ini undanganmu.
        </p>
        <div className="flex w-full items-center gap-3 sm:w-auto">
          <Link
            to="/"
            hash="template"
            className="flex-1 rounded-full border border-white/30 px-5 py-2.5 text-center text-sm hover:bg-white/10 sm:flex-none"
          >
            Template Lain
          </Link>
          <a
            href={waLink(waTemplateMessage(template.name))}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium hover:bg-[#1fb457] sm:flex-none"
          >
            <WhatsAppIcon className="size-4" />
            Pesan Template Ini
          </a>
        </div>
      </div>
    </div>
  )
}
