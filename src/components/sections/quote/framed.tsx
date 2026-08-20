import { getDecor } from "../decor"
import { Reveal } from "../shared"
import type { SectionProps } from "../shared"
import { defaultQuote } from "@/lib/templates"

/**
 * Kutipan berbingkai: kartu dengan border ganda dan sudut ornamen halus,
 * terasa seperti kutipan yang dicetak dan dibingkai.
 */
export function QuoteFramed({ template }: SectionProps) {
  const t = template.theme
  const decor = getDecor(template)
  const q = template.quote ?? defaultQuote
  return (
    <section className="px-6 py-16 sm:py-20" style={{ backgroundColor: t.surface }}>
      <Reveal className="mx-auto max-w-2xl">
        <div
          className="relative rounded-3xl p-1.5"
          style={{ border: `1px solid ${t.line}` }}
        >
          <div
            className="rounded-[1.25rem] px-7 py-10 text-center sm:px-10 sm:py-12"
            style={{
              backgroundColor: t.bg,
              border: `1px solid color-mix(in srgb, ${t.line} 65%, transparent)`,
            }}
          >
            <span
              aria-hidden="true"
              className="mx-auto mb-4 block h-px w-10"
              style={{ backgroundColor: t.accent, opacity: 0.55 }}
            />
            {decor.GiftMark && (
              <decor.GiftMark
                style={{ color: t.accent }}
              />
            )}
            <p
              className="font-cormorant text-lg leading-relaxed italic sm:text-[1.35rem]"
              style={{ color: t.ink }}
            >
              {"\u201C"}
              {q.text}
              {"\u201D"}
            </p>
            {q.source && (
              <p
                className={`${t.headingFont} mt-6 text-xs tracking-[0.24em] uppercase`}
                style={{ color: t.sub }}
              >
                — {q.source}
              </p>
            )}
            <span
              aria-hidden="true"
              className="mx-auto mt-6 block h-px w-10"
              style={{ backgroundColor: t.accent, opacity: 0.35 }}
            />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
