import { Reveal } from "../shared"
import type { SectionProps } from "../shared"
import { defaultQuote } from "@/lib/templates"

/**
 * Kutipan vignette: di atas foto hero yang diredupkan, teks melayang
 * di atas overlay — intim dan sinematik, cocok setelah cover/couple.
 */
export function QuoteVignette({ template }: SectionProps) {
  const t = template.theme
  const q = template.quote ?? defaultQuote
  return (
    <section className="relative overflow-hidden px-6 py-20 text-center sm:py-24">
      <img
        src={template.hero}
        alt=""
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background: t.dark
            ? "linear-gradient(to bottom, rgba(10,8,5,0.58), rgba(10,8,5,0.78))"
            : "linear-gradient(to bottom, rgba(24,14,18,0.48), rgba(24,14,18,0.72))",
        }}
      />
      <Reveal className="relative mx-auto max-w-2xl">
        <span
          aria-hidden="true"
          className="font-cormorant mx-auto block text-5xl leading-none text-white/30 sm:text-6xl"
        >
          {"\u201C"}
        </span>
        <p className="font-cormorant mt-2 text-xl leading-relaxed italic text-white sm:text-2xl">
          {q.text}
        </p>
        {q.source && (
          <p className="mt-5 text-xs tracking-[0.28em] uppercase text-white/80">
            — {q.source}
          </p>
        )}
        <span
          aria-hidden="true"
          className="mx-auto mt-7 block h-px w-14 bg-white/35"
        />
      </Reveal>
    </section>
  )
}
