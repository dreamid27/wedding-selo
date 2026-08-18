import { useCallback, useEffect, useRef, useState } from "react"
import { Link, createFileRoute, notFound } from "@tanstack/react-router"
import Lenis from "lenis"
import {
  ArrowLeft,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Copy,
  Heart,
  MapPin,
  Send,
  X,
} from "lucide-react"

import { WhatsAppIcon } from "@/components/site"
import {
  CundukMentulIcon,
  GebyokCorner,
  GongIcon,
  GununganMark,
  JasmineIcon,
  LungLunganDivider,
  TruntumFlowerIcon,
  kawungPattern,
  truntumPattern,
} from "@/components/ornaments/javanese"
import {
  CornerSpray,
  DaisyIcon,
  FallingPetals,
  FloralVineDivider,
  RoseBloomMark,
  RosebudIcon,
  petalStripPattern,
  roseTrellisPattern,
} from "@/components/ornaments/floral"
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
    if (!loaderData)
      return { meta: [{ title: `Template — ${siteConfig.name}` }] }
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

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

/** Instance Lenis aktif — di-stop sementara saat lightbox galeri terbuka. */
let lenis: Lenis | null = null

/** Smooth scrolling halus (Lenis) selama halaman preview terbuka. */
function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return
    lenis = new Lenis({ duration: 1.1, autoRaf: true })
    return () => {
      lenis?.destroy()
      lenis = null
    }
  }, [])
}

/** Pembungkus reveal-on-scroll: konten muncul lembut saat masuk viewport. */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}

function TemplatePreviewPage() {
  const { template } = Route.useLoaderData()
  const t = template.theme
  useSmoothScroll()

  return (
    <div
      className={`${t.bodyFont} min-h-svh`}
      style={{
        backgroundColor: t.bg,
        color: t.ink,
        // Latar bermotif halus sesuai set dekorasi template
        backgroundImage:
          template.decor === "javanese"
            ? truntumPattern(t.ink)
            : template.decor === "floral"
              ? roseTrellisPattern(t.ink)
              : undefined,
      }}
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
  const imgRef = useRef<HTMLImageElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  // Parallax lembut: foto bergeser lebih lambat dari scroll, teks memudar.
  useEffect(() => {
    if (prefersReducedMotion()) return
    let raf = 0
    const update = () => {
      raf = 0
      const y = window.scrollY
      const vh = window.innerHeight
      if (y > vh * 1.2) return
      if (imgRef.current) {
        imgRef.current.style.transform = `translate3d(0, ${y * 0.22}px, 0)`
      }
      if (textRef.current) {
        textRef.current.style.transform = `translate3d(0, ${y * 0.1}px, 0)`
        textRef.current.style.opacity = String(Math.max(0, 1 - y / (vh * 0.75)))
      }
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden text-center">
      <img
        ref={imgRef}
        src={template.hero}
        alt=""
        className="absolute inset-x-0 -top-[12%] h-[124%] w-full object-cover will-change-transform"
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
      {template.decor === "javanese" && (
        <div
          className="pointer-events-none absolute inset-3 z-10 text-white/60 sm:inset-5"
          aria-hidden="true"
        >
          <GebyokCorner className="absolute top-0 left-0 size-16 sm:size-24" />
          <GebyokCorner className="absolute top-0 right-0 size-16 -scale-x-100 sm:size-24" />
          <GebyokCorner className="absolute bottom-0 left-0 size-16 -scale-y-100 sm:size-24" />
          <GebyokCorner className="absolute right-0 bottom-0 size-16 -scale-100 sm:size-24" />
        </div>
      )}
      {template.decor === "floral" && (
        <>
          <div
            className="pointer-events-none absolute inset-3 z-10 text-white/70 sm:inset-5"
            aria-hidden="true"
          >
            <CornerSpray className="absolute top-0 left-0 size-16 sm:size-24" />
            <CornerSpray className="absolute top-0 right-0 size-16 -scale-x-100 sm:size-24" />
            <CornerSpray className="absolute bottom-0 left-0 size-16 -scale-y-100 sm:size-24" />
            <CornerSpray className="absolute right-0 bottom-0 size-16 -scale-100 sm:size-24" />
          </div>
          {/* Kelopak mawar gugur melayang di atas foto sampul */}
          <FallingPetals count={12} className="z-10 text-white/55" />
        </>
      )}
      <div ref={textRef} className="animate-fade-up relative px-6 text-white">
        {template.decor === "javanese" && (
          <>
            <GununganMark
              className="mx-auto mb-5 h-20 w-auto"
              style={{ color: t.accent }}
            />
            <p
              className="mb-4 font-javanese text-lg text-white/85"
              lang="jv"
              title="Sugeng Rawuh — Selamat Datang"
            >
              ꧁ ꦱꦸꦒꦼꦁꦫꦮꦸꦃ ꧂
            </p>
          </>
        )}
        {template.decor === "floral" && (
          <RoseBloomMark className="animate-bloom mx-auto mb-5 h-20 w-auto text-white/90" />
        )}
        <p className={`${t.headingFont} text-sm tracking-[0.35em] uppercase`}>
          Undangan Pernikahan
        </p>
        {template.decor === "javanese" ? (
          <LungLunganDivider className="mx-auto my-4 w-52 text-white/80" />
        ) : template.decor === "floral" ? (
          <FloralVineDivider className="mx-auto my-4 w-56 text-white/80" />
        ) : (
          <div className="ornament-line mx-auto my-6 w-20 text-white/70" />
        )}
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
      <Reveal>
        <p
          className={`${t.headingFont} text-sm tracking-[0.3em] uppercase`}
          style={{ color: t.sub }}
        >
          Menghitung Hari
        </p>
      </Reveal>
      <div className="mt-8 flex justify-center gap-3 sm:gap-5">
        {units.map((u, i) => (
          <Reveal key={u} delay={i * 70}>
            <div
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
          </Reveal>
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
        <Reveal>
          <p className={`${t.scriptFont} text-3xl`} style={{ color: t.accent }}>
            {eyebrow}
          </p>
          <h2
            className={`${t.headingFont} mt-2 text-2xl tracking-wide sm:text-3xl`}
          >
            {title}
          </h2>
          {template.decor === "javanese" ? (
            <LungLunganDivider
              className="mx-auto mt-4 mb-10 w-56"
              style={{ color: t.accent }}
            />
          ) : template.decor === "floral" ? (
            <FloralVineDivider
              className="mx-auto mt-4 mb-10 w-56"
              style={{ color: t.accent }}
            />
          ) : (
            <div
              className="ornament-line mx-auto mt-5 mb-10 w-20"
              style={{ color: t.accent }}
            />
          )}
        </Reveal>
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
      photo: template.couple.bridePhoto,
      alt: `Foto mempelai wanita, ${template.couple.brideFull}`,
    },
    {
      full: template.couple.groomFull,
      short: template.couple.groom,
      parents: template.couple.groomParents,
      photo: template.couple.groomPhoto,
      alt: `Foto mempelai pria, ${template.couple.groomFull}`,
    },
  ]
  return (
    <SectionShell
      template={template}
      eyebrow="Mempelai"
      title="Kedua Mempelai"
      alt
    >
      <Reveal delay={80}>
        <p
          className="mx-auto max-w-xl text-sm leading-relaxed"
          style={{ color: t.sub }}
        >
          {template.decor === "javanese"
            ? "Kanthi raos syukur dhumateng Gusti Ingkang Maha Agung, kami bermaksud menyelenggarakan pawiwahan dan memohon kerawuhan Bapak/Ibu/Saudara/i untuk paring donga pangestu."
            : "Dengan penuh sukacita dan atas berkat rahmat Tuhan Yang Maha Esa, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di hari pernikahan kami."}
        </p>
      </Reveal>
      <div className="mt-10 grid gap-10 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        {people.map((p, i) => (
          <Reveal
            key={p.full}
            delay={i * 140}
            className={i === 1 ? "sm:order-3" : ""}
          >
            <img
              src={p.photo}
              alt={p.alt}
              loading="lazy"
              className="mx-auto mb-6 aspect-[4/5] w-48 rounded-t-full rounded-b-[2rem] object-cover sm:w-52"
              style={{
                border: `1px solid ${t.line}`,
                boxShadow: `0 0 0 6px ${t.bg}, 0 0 0 7px ${t.line}`,
              }}
            />
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
          </Reveal>
        ))}
        <Reveal delay={260} className="order-2">
          {template.decor === "javanese" ? (
            <CundukMentulIcon
              className="mx-auto h-12 w-auto"
              style={{ color: t.accent }}
            />
          ) : template.decor === "floral" ? (
            <RosebudIcon
              className="animate-sway mx-auto h-12 w-auto"
              style={{ color: t.accent }}
            />
          ) : (
            <Heart
              className="mx-auto size-8"
              style={{ color: t.accent }}
              fill="currentColor"
            />
          )}
        </Reveal>
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
      <div>
        {template.story.map((s, i) => {
          const left = i % 2 === 0
          const last = i === template.story.length - 1
          return (
            <Reveal
              key={s.title}
              delay={i * 90}
              className="grid grid-cols-[3.5rem_1fr] sm:grid-cols-[1fr_4rem_1fr]"
            >
              <div className="relative col-start-1 row-start-1 flex justify-center sm:col-start-2">
                {!last && (
                  <span
                    className={`absolute bottom-0 left-1/2 w-px ${i === 0 ? "top-2.5" : "top-0"}`}
                    style={{ backgroundColor: t.line }}
                  />
                )}
                <span
                  className="relative z-10 mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: t.surface,
                    border: `1px solid ${t.line}`,
                    color: t.accent,
                  }}
                >
                  {template.decor === "javanese" ? (
                    <TruntumFlowerIcon className="size-5.5" />
                  ) : template.decor === "floral" ? (
                    <RosebudIcon className="h-5 w-auto" />
                  ) : (
                    <Heart className="size-3.5" fill="currentColor" />
                  )}
                </span>
              </div>
              <div
                className={`col-start-2 row-start-1 text-left ${last ? "pb-2" : "pb-10"} ${
                  left
                    ? "sm:col-start-1 sm:text-right"
                    : "sm:col-start-3 sm:text-left"
                }`}
              >
                <p
                  className="font-cormorant text-3xl leading-none italic"
                  style={{ color: t.accent }}
                >
                  {s.when}
                </p>
                <h3 className={`${t.headingFont} mt-2 text-lg`}>{s.title}</h3>
                <p
                  className="mt-1.5 text-sm leading-relaxed"
                  style={{ color: t.sub }}
                >
                  {s.text}
                </p>
              </div>
              <div
                aria-hidden="true"
                className={`hidden sm:block ${left ? "sm:col-start-3" : "sm:col-start-1"} sm:row-start-1`}
              />
            </Reveal>
          )
        })}
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
        {template.events.map((e, i) => (
          <Reveal key={e.name} delay={i * 120}>
            <div
              className="h-full overflow-hidden rounded-3xl"
              style={{ backgroundColor: t.bg, border: `1px solid ${t.line}` }}
            >
              {template.decor === "javanese" && (
                <div
                  className="h-9 border-b"
                  style={{
                    backgroundImage: kawungPattern(t.accent),
                    borderColor: t.line,
                  }}
                  aria-hidden="true"
                />
              )}
              {template.decor === "floral" && (
                <div
                  className="h-9 border-b"
                  style={{
                    backgroundImage: petalStripPattern(t.accent),
                    borderColor: t.line,
                  }}
                  aria-hidden="true"
                />
              )}
              <div className="p-8">
                {template.decor === "javanese" && (
                  <GongIcon
                    className="mx-auto mb-3 size-9"
                    style={{ color: t.accent }}
                  />
                )}
                {template.decor === "floral" && (
                  <DaisyIcon
                    className="mx-auto mb-3 size-9"
                    style={{ color: t.accent }}
                  />
                )}
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
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}

function GallerySection({ template }: { template: WeddingTemplate }) {
  const [preview, setPreview] = useState<number | null>(null)
  const total = template.gallery.length
  const altText = (i: number) =>
    `Foto ${template.couple.groom} dan ${template.couple.bride} ${i + 1}`

  const close = useCallback(() => setPreview(null), [])
  const step = useCallback(
    (dir: number) =>
      setPreview((p) => (p === null ? p : (p + dir + total) % total)),
    [total]
  )

  useEffect(() => {
    if (preview === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") step(-1)
      if (e.key === "ArrowRight") step(1)
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    lenis?.stop()
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
      lenis?.start()
    }
  }, [preview, close, step])

  return (
    <SectionShell template={template} eyebrow="Momen Kami" title="Galeri">
      <div className="columns-2 gap-3 sm:columns-3 sm:gap-4">
        {template.gallery.map((src, i) => (
          <Reveal
            key={src + i}
            delay={(i % 3) * 80}
            className="mb-3 break-inside-avoid sm:mb-4"
          >
            <button
              type="button"
              onClick={() => setPreview(i)}
              className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl"
              aria-label={`Perbesar ${altText(i)}`}
            >
              <img
                src={src}
                alt={altText(i)}
                loading="lazy"
                className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
            </button>
          </Reveal>
        ))}
      </div>

      {preview !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Pratinjau foto galeri"
          onClick={close}
        >
          <img
            src={template.gallery[preview]}
            alt={altText(preview)}
            className="max-h-[85svh] max-w-full rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={close}
            aria-label="Tutup pratinjau"
            className="absolute top-4 right-4 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/25"
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
            aria-label="Foto sebelumnya"
            className="absolute left-3 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/25 sm:left-6"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
            aria-label="Foto berikutnya"
            className="absolute right-3 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/25 sm:right-6"
          >
            <ChevronRight className="size-6" />
          </button>
          <p
            className="absolute bottom-5 text-sm text-white/80"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {preview + 1} / {total}
          </p>
        </div>
      )}
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
      <Reveal delay={80}>
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
      </Reveal>
      <Reveal delay={160}>
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
      </Reveal>
    </SectionShell>
  )
}

function GiftSection({ template }: { template: WeddingTemplate }) {
  const t = template.theme
  const [copied, setCopied] = useState<string | null>(null)
  const accounts = [
    {
      bank: "BCA",
      logo: "/images/banks/bca.svg",
      number: "1234567890",
      owner: template.couple.groomFull,
    },
    {
      bank: "Mandiri",
      logo: "/images/banks/mandiri.svg",
      number: "0987654321",
      owner: template.couple.brideFull,
    },
  ]
  return (
    <SectionShell
      template={template}
      eyebrow="Tanda Kasih"
      title="Amplop Digital"
    >
      <Reveal delay={80}>
        {template.decor === "javanese" && (
          <JasmineIcon
            className="mx-auto mb-4 size-7"
            style={{ color: t.accent }}
          />
        )}
        {template.decor === "floral" && (
          <RosebudIcon
            className="mx-auto mb-4 h-9 w-auto"
            style={{ color: t.accent }}
          />
        )}
        <p
          className="mx-auto max-w-md text-sm leading-relaxed"
          style={{ color: t.sub }}
        >
          Kehadiran dan doa restu adalah hadiah terindah bagi kami. Namun bila
          ingin memberikan tanda kasih, kami sediakan amplop digital berikut.
        </p>
      </Reveal>
      <div className="mx-auto mt-8 grid max-w-lg gap-4 sm:grid-cols-2">
        {accounts.map((a, i) => (
          <Reveal key={a.bank} delay={i * 120}>
            <div
              className="h-full rounded-2xl p-6 text-left"
              style={{
                backgroundColor: t.surface,
                border: `1px solid ${t.line}`,
              }}
            >
              <div className="flex items-center justify-between gap-3">
                <p className={`${t.headingFont} text-lg`}>{a.bank}</p>
                <span className="inline-flex h-9 items-center rounded-lg bg-white px-3 shadow-sm ring-1 ring-black/5">
                  <img
                    src={a.logo}
                    alt={`Logo Bank ${a.bank}`}
                    className="h-4 w-auto"
                    loading="lazy"
                  />
                </span>
              </div>
              <p className="mt-3 font-mono text-lg tracking-wider">
                {a.number}
              </p>
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
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}

function ClosingSection({ template }: { template: WeddingTemplate }) {
  const t = template.theme
  return (
    <section className="relative overflow-hidden px-6 py-20 text-center">
      {template.decor === "floral" && (
        <FallingPetals
          count={8}
          style={{ color: t.accent }}
          className="opacity-60"
        />
      )}
      <Reveal className="relative mx-auto max-w-2xl">
        {template.decor === "javanese" && (
          <GununganMark
            className="mx-auto mb-6 h-24 w-auto"
            style={{ color: t.accent }}
          />
        )}
        {template.decor === "floral" && (
          <RoseBloomMark
            className="animate-sway mx-auto mb-6 h-24 w-auto"
            style={{ color: t.accent }}
          />
        )}
        <p
          className={`${t.scriptFont} text-4xl sm:text-5xl`}
          style={{ color: t.accent }}
        >
          {template.decor === "javanese" ? "Matur Nuwun" : "Terima Kasih"}
        </p>
        {template.decor === "javanese" && (
          <p
            className="mt-3 font-javanese text-base"
            style={{ color: t.sub }}
            lang="jv"
            title="Mugi Gusti tansah paring berkah — Semoga Tuhan senantiasa melimpahkan berkah"
          >
            ꧅ ꦩꦸꦒꦶꦒꦸꦱ꧀ꦠꦶꦠꦤ꧀ꦱꦃꦥꦫꦶꦁꦧꦼꦂꦏꦃ ꧅
          </p>
        )}
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
      </Reveal>
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
