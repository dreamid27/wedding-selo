import { getDecor } from "../decor"
import { Reveal } from "../shared"
import type { SectionProps } from "../shared"
import { defaultQuote } from "@/lib/templates"

/**
 * Kutipan split editorial: kutip besar di kiri, garis vertikal,
 * teks kutipan di kanan — terasa seperti halaman buku.
 */
export function QuoteSplit({ template }: SectionProps) {
  const t = template.theme
  const decor = getDecor(template)
  const q = template.quote ?? defaultQuote
  return (
    <section className="px-6 py-16 sm:py-20">
      <Reveal className="mx-auto max-w-3xl">
        <div className="grid items-center gap-6 sm:grid-cols-[auto_1fr] sm:gap-8">
          <div className="hidden sm:block">
            <span
              aria-hidden="true"
              className={`${t.scriptFont} text-7xl leading-none select-none sm:text-8xl`}
              style={{ color: t.accent, opacity: 0.22 }}
            >
              {"\u201C"}
            </span>
          </div>
          <div
            className="text-left sm:border-l sm:pl-8"
            style={{ borderColor: t.line }}
          >
            <p
              className="font-cormorant text-lg leading-relaxed italic sm:text-xl"
              style={{ color: t.ink }}
            >
              {"\u201C"}
              {q.text}
              {"\u201D"}
            </p>
            {q.source && (
              <p
                className={`${t.headingFont} mt-4 text-xs tracking-[0.24em] uppercase`}
                style={{ color: t.sub }}
              >
                — {q.source}
              </p>
            )}
            {decor.GiftMark && (
              <span
                aria-hidden="true"
                className="mt-5 inline-flex opacity-60"
                style={{ color: t.accent }}
              >
                <span className="scale-[0.7] origin-left">
                  <decor.GiftMark />
                </span>
              </span>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
