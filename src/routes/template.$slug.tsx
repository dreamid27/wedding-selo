import { useEffect, useState } from "react"
import { Link, createFileRoute, notFound } from "@tanstack/react-router"
import Lenis from "lenis"
import { ArrowLeft } from "lucide-react"

import { WhatsAppIcon } from "@/components/site"
import { EnvelopeGate } from "@/components/envelope-gate"
import { LayoutEditor } from "@/components/layout-editor"
import { resolveClosing } from "@/components/sections/closing"
import { resolveCountdown } from "@/components/sections/countdown"
import { resolveCouple } from "@/components/sections/couple"
import { resolveCover } from "@/components/sections/cover"
import { resolveEvents } from "@/components/sections/events"
import { resolveGallery } from "@/components/sections/gallery"
import { resolveGift } from "@/components/sections/gift"
import { resolveQuote } from "@/components/sections/quote"
import { resolveRsvp } from "@/components/sections/rsvp"
import { resolveStory } from "@/components/sections/story"
import { prefersReducedMotion } from "@/components/sections/shared"
import { roseTrellisPattern } from "@/components/ornaments/floral"
import { truntumPattern } from "@/components/ornaments/javanese"
import { megamendungPattern } from "@/components/ornaments/sundanese"
import { lipaSabbePattern } from "@/components/ornaments/makassar"
import { setLenis } from "@/lib/lenis"
import { siteConfig, waLink, waTemplateMessage } from "@/lib/site-config"
import { absoluteUrl, canonicalLink, jsonLd, seoMeta } from "@/lib/seo"
import { getTemplate } from "@/lib/templates"
import type { TemplateLayout, WeddingTemplate } from "@/lib/templates"

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

/**
 * Smooth scrolling halus (Lenis) selama halaman preview terbuka.
 * Baru diaktifkan setelah gerbang amplop dibuka — sebelum itu halaman
 * terkunci di sampul undangan.
 */
function useSmoothScroll(enabled: boolean) {
  useEffect(() => {
    if (!enabled || prefersReducedMotion()) return
    const lenis = new Lenis({ duration: 1.1, autoRaf: true })
    setLenis(lenis)
    return () => {
      lenis.destroy()
      setLenis(null)
    }
  }, [enabled])
}

function TemplatePreviewPage() {
  const { template: baseTemplate } = Route.useLoaderData()
  // Override layout dari panel editor — dimulai dari layout bawaan template.
  const [layoutOverride, setLayoutOverride] = useState<TemplateLayout>({})
  const template: WeddingTemplate = {
    ...baseTemplate,
    layout: { ...baseTemplate.layout, ...layoutOverride },
  }
  const t = template.theme
  // Varian layout section sesuai template.layout (fallback ke default).
  const Cover = resolveCover(template)
  const Countdown = resolveCountdown(template)
  const CoupleSection = resolveCouple(template)
  const QuoteSection = resolveQuote(template)
  const StorySection = resolveStory(template)
  const EventsSection = resolveEvents(template)
  const GallerySection = resolveGallery(template)
  const RsvpSection = resolveRsvp(template)
  const GiftSection = resolveGift(template)
  const ClosingSection = resolveClosing(template)
  // Gerbang amplop: "closed" → sampul tampil, "opening" → animasi
  // pembukaan berjalan, "open" → gerbang dilepas dan undangan aktif.
  const [gate, setGate] = useState<"closed" | "opening" | "open">("closed")
  useSmoothScroll(gate === "open")

  // Kunci scroll halaman selama sampul amplop masih menutupi undangan.
  useEffect(() => {
    if (gate === "open") return
    const el = document.documentElement
    el.style.overflow = "hidden"
    return () => {
      el.style.overflow = ""
    }
  }, [gate])

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
              : template.decor === "sundanese"
                ? megamendungPattern(t.ink)
                : template.decor === "makassar"
                  ? lipaSabbePattern(t.ink)
                  : undefined,
      }}
    >
      {gate !== "open" && (
        <EnvelopeGate
          template={template}
          opening={gate === "opening"}
          onOpen={() => setGate("opening")}
          onOpened={() => setGate("open")}
        />
      )}
      <PreviewBar template={template} />
      <Cover template={template} />
      <Countdown template={template} />
      <CoupleSection template={template} />
      <QuoteSection template={template} />
      <StorySection template={template} />
      <EventsSection template={template} />
      <GallerySection template={template} />
      <RsvpSection template={template} />
      <GiftSection template={template} />
      <ClosingSection template={template} />
      <LayoutEditor
        baseLayout={baseTemplate.layout}
        override={layoutOverride}
        onChange={(next) => {
          const prevGate = layoutOverride.gate ?? baseTemplate.layout?.gate
          const nextGate = next.gate ?? baseTemplate.layout?.gate
          setLayoutOverride(next)
          if (prevGate !== nextGate && gate === "open") setGate("closed")
        }}
      />
      {gate === "open" && (
        <button
          type="button"
          onClick={() => setGate("closed")}
          className="fixed bottom-36 left-4 z-50 rounded-full bg-white px-4 py-2 text-xs font-medium text-neutral-900 shadow-lg ring-1 ring-black/10 hover:bg-neutral-50 sm:bottom-40"
        >
          Lihat Gerbang Lagi
        </button>
      )}
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
