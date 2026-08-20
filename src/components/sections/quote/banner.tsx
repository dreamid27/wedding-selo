import { Reveal } from "../shared"
import type { SectionProps } from "../shared"
import { defaultQuote } from "@/lib/templates"

/**
 * Kutipan pita: background aksen penuh lebar dengan teks terang,
 * aksen tipis di atas-bawah — jeda berwarna di halaman terang.
 */
export function QuoteBanner({ template }: SectionProps) {
  const t = template.theme
  const q = template.quote ?? defaultQuote
  return (
    <section
      className="px-6 py-16 text-center sm:py-20"
      style={{
        background: `linear-gradient(135deg, color-mix(in srgb, ${t.accent} 86%, #fff) 0%, ${t.accent} 52%, color-mix(in srgb, ${t.accent} 68%, #000) 100%)`,
        color: t.accentInk,
      }}
    >
      <Reveal className="mx-auto max-w-2xl">
        <span
          aria-hidden="true"
          className="mx-auto mb-6 block h-px w-14 bg-white/35"
        />
        <p
          className="font-cormorant text-xl leading-relaxed italic sm:text-2xl"
          style={{ textWrap: "balance" as const }}
        >
          {"\u201C"}
          {q.text}
          {"\u201D"}
        </p>
        {q.source && (
          <p className="mt-6 text-xs tracking-[0.28em] uppercase opacity-80">
            — {q.source}
          </p>
        )}
        <span
          aria-hidden="true"
          className="mx-auto mt-6 block h-px w-14 bg-white/35"
        />
      </Reveal>
    </section>
  )
}
