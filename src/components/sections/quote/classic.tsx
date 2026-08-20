import { getDecor } from "../decor"
import { Reveal } from "../shared"
import type { SectionProps } from "../shared"
import { defaultQuote } from "@/lib/templates"

/**
 * Kutipan klasik: centered, tanda kutip besar yang samar di belakang,
 * teks italic lembut, sumber kecil di bawah — elegan dan tenang.
 */
export function QuoteClassic({ template }: SectionProps) {
  const t = template.theme
  const decor = getDecor(template)
  const q = template.quote ?? defaultQuote
  return (
    <section className="px-6 py-16 text-center sm:py-20">
      <Reveal className="relative mx-auto max-w-2xl">
        <span
          aria-hidden="true"
          className="font-cormorant pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 text-[9rem] leading-none font-light select-none sm:text-[12rem]"
          style={{ color: t.line, opacity: 0.7 }}
        >
          {"\u201C"}
        </span>
        <div className="relative">
          <decor.SectionDivider
            style={{ color: t.accent, opacity: 0.9 }}
          />
          <p
            className="font-cormorant mx-auto max-w-xl text-lg leading-relaxed italic sm:text-xl"
            style={{ color: t.ink }}
          >
            {"\u201C"}
            {q.text}
            {"\u201D"}
          </p>
          {q.source && (
            <>
              <span
                aria-hidden="true"
                className="ornament-line mx-auto mt-6 block w-12"
                style={{ color: t.line }}
              />
              <p
                className={`${t.headingFont} mt-4 text-xs tracking-[0.24em] uppercase`}
                style={{ color: t.sub }}
              >
                — {q.source}
              </p>
            </>
          )}
        </div>
      </Reveal>
    </section>
  )
}
