import { ChevronDown } from "lucide-react"

import { getDecor } from "../decor"
import { Reveal } from "../shared"
import type { SectionProps } from "../shared"

export function CoverHorizon({ template }: SectionProps) {
  const t = template.theme
  const decor = getDecor(template)
  const city =
    template.events[0]?.address.split(",").pop()?.trim() ?? template.events[0]?.venue
  return (
    <section
      className="flex min-h-svh flex-col justify-center px-6 py-16 sm:px-8 sm:py-20"
      style={{ backgroundColor: t.bg, color: t.ink }}
    >
      <div className="mx-auto w-full max-w-5xl text-center">
        <Reveal>
          <p
            className={`${t.headingFont} text-xs tracking-[0.42em] uppercase`}
            style={{ color: t.sub }}
          >
            Undangan Pernikahan
          </p>
        </Reveal>

        <Reveal delay={90}>
          {decor.CoverMark && <decor.CoverMark accent={t.accent} />}
          <h1
            className={`${t.scriptFont} mt-4 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl`}
          >
            {template.couple.groom}{" "}
            <span
              className={`${t.headingFont} align-middle text-2xl font-light tracking-[0.3em] sm:text-3xl`}
              style={{ color: t.accent }}
            >
              —
            </span>{" "}
            <span className="sr-only"> dan </span>
            {template.couple.bride}
          </h1>
          <div className="mx-auto mt-6 flex max-w-md items-center justify-center gap-4">
            <span
              aria-hidden="true"
              className="h-px flex-1"
              style={{ backgroundColor: `color-mix(in srgb, ${t.line} 85%, transparent)` }}
            />
            <span
              aria-hidden="true"
              className={`${t.headingFont} text-[10px] tracking-[0.45em] uppercase`}
              style={{ color: t.accent }}
            >
              &amp;
            </span>
            <span
              aria-hidden="true"
              className="h-px flex-1"
              style={{ backgroundColor: `color-mix(in srgb, ${t.line} 85%, transparent)` }}
            />
          </div>
        </Reveal>

        <Reveal delay={180} className="mt-10 sm:mt-12">
          <div
            className="relative overflow-hidden rounded-[1.75rem] border p-1.5 sm:rounded-[2rem] sm:p-2"
            style={{
              borderColor: `color-mix(in srgb, ${t.line} 75%, transparent)`,
              boxShadow: `0 18px 48px color-mix(in srgb, ${t.ink} 10%, transparent)`,
            }}
          >
            <div
              className="overflow-hidden rounded-[1.35rem] border sm:rounded-[1.6rem]"
              style={{ borderColor: `color-mix(in srgb, ${t.accent} 18%, transparent)` }}
            >
              <img
                src={template.hero}
                alt=""
                className="aspect-[16/10] w-full object-cover sm:aspect-[21/9]"
                fetchPriority="high"
              />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[1.75rem] sm:rounded-[2rem]"
              style={{
                boxShadow: `inset 0 1px 0 color-mix(in srgb, white 55%, transparent)`,
              }}
            />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none mx-auto -mt-1 hidden h-6 w-[78%] items-center gap-3 sm:flex"
          >
            <span className="h-px flex-1" style={{ backgroundColor: `color-mix(in srgb, ${t.line} 55%, transparent)` }} />
            <span className="size-1 rounded-full" style={{ backgroundColor: t.accent }} />
            <span className="h-px flex-1" style={{ backgroundColor: `color-mix(in srgb, ${t.line} 55%, transparent)` }} />
          </div>
        </Reveal>

        <Reveal delay={270}>
          <p
            className={`${t.headingFont} mt-8 text-sm tracking-[0.28em] uppercase sm:mt-10`}
            style={{ color: t.sub }}
          >
            {template.dateLabel}
            <span aria-hidden="true" className="mx-2" style={{ color: t.accent }}>
              ·
            </span>
            {city}
          </p>
          <decor.SectionDivider style={{ color: t.accent }} />
        </Reveal>

        <Reveal delay={340}>
          <ChevronDown
            aria-hidden="true"
            className="mx-auto mt-2 size-6 animate-bounce"
            style={{ color: t.accent }}
          />
        </Reveal>
      </div>
    </section>
  )
}
