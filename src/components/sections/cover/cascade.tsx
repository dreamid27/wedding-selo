import { ChevronDown } from "lucide-react"

import { getDecor } from "../decor"
import { Reveal } from "../shared"
import type { SectionProps } from "../shared"

export function CoverCascade({ template }: SectionProps) {
  const t = template.theme
  const decor = getDecor(template)
  return (
    <section
      className="relative grid min-h-svh overflow-hidden lg:grid-cols-[1.08fr_0.92fr]"
      style={{ backgroundColor: t.bg, color: t.ink }}
    >
      <div className="relative flex flex-col justify-center px-7 py-16 sm:px-10 lg:px-14 lg:py-20">
        <span
          aria-hidden="true"
          className={`${t.scriptFont} pointer-events-none absolute top-6 left-4 hidden text-[11rem] leading-none select-none sm:block lg:text-[13rem]`}
          style={{ color: `color-mix(in srgb, ${t.accent} 7%, transparent)` }}
        >
          &
        </span>

        <div className="relative">
          <Reveal>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-9" style={{ backgroundColor: t.accent }} />
              <p className={`${t.headingFont} text-xs tracking-[0.38em] uppercase`} style={{ color: t.sub }}>
                Undangan Pernikahan
              </p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            {decor.CoverMark && (
              <div className="[&_svg]:mx-0! mt-6">
                <decor.CoverMark accent={t.accent} />
              </div>
            )}
            <h1 className={`${t.scriptFont} mt-4 text-6xl leading-[0.95] sm:text-7xl lg:text-[3.9rem] xl:text-7xl`}>
              <span className="block">{template.couple.groom}</span>
              <span
                className={`${t.headingFont} mt-2 flex items-center gap-3 text-base font-light tracking-[0.5em] lowercase`}
                style={{ color: t.accent }}
              >
                <span aria-hidden="true" className="h-px w-10" style={{ backgroundColor: t.accent }} />
                dan
              </span>
              <span className="block">{template.couple.bride}</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-8 max-w-sm">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-10" style={{ backgroundColor: t.line }} />
                <span className="size-1 rounded-full" style={{ backgroundColor: t.accent }} />
                <span aria-hidden="true" className="h-px flex-1" style={{ backgroundColor: t.line }} />
              </div>
              <p className={`${t.headingFont} mt-5 text-sm tracking-[0.26em] uppercase`} style={{ color: t.sub }}>
                {template.dateLabel}
              </p>
              <p className={`${t.bodyFont} mt-2 text-sm leading-relaxed`} style={{ color: t.sub }}>
                {template.events[0]?.venue}
                <span aria-hidden="true" style={{ color: t.accent }}>
                  {" "}
                  ·{" "}
                </span>
                {template.events[0]?.address.split(",").slice(-2).join(",").trim()}
              </p>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <ChevronDown aria-hidden="true" className="mt-10 size-5 animate-bounce" style={{ color: t.accent }} />
          </Reveal>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 bottom-0 hidden h-40 w-40 opacity-[0.07] lg:block"
          style={{
            background: `radial-gradient(circle at 100% 100%, ${t.accent} 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="relative flex items-center justify-center p-6 sm:p-8 lg:p-10">
        <Reveal delay={120} className="relative w-full max-w-md lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -top-3 -right-3 hidden h-full w-full rounded-[2rem] border sm:block"
            style={{ borderColor: `color-mix(in srgb, ${t.line} 70%, transparent)` }}
          />
          <div
            aria-hidden="true"
            className="absolute -top-6 -right-6 hidden h-full w-full rounded-[2.2rem] border sm:block"
            style={{ borderColor: `color-mix(in srgb, ${t.accent} 12%, transparent)` }}
          />
          <div
            className="relative overflow-hidden rounded-[1.75rem] border bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
            style={{ borderColor: t.line, backgroundColor: t.bg }}
          >
            <img
              src={template.hero}
              alt=""
              className="aspect-[4/5] w-full object-cover sm:aspect-[4/5] lg:aspect-[4/5.2]"
              fetchPriority="high"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[1.75rem] border"
              style={{ borderColor: `color-mix(in srgb, ${t.accent} 0%, transparent)` }}
            />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-4 -left-4 hidden size-20 rounded-full opacity-60 blur-2xl sm:block"
            style={{ background: `radial-gradient(circle, ${t.accent} 0%, transparent 70%)` }}
          />
        </Reveal>
      </div>
    </section>
  )
}
