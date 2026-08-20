import { ChevronDown } from "lucide-react"

import { getDecor } from "../decor"
import { Reveal } from "../shared"
import type { SectionProps } from "../shared"

export function CoverVeil({ template }: SectionProps) {
  const t = template.theme
  const decor = getDecor(template)
  return (
    <section className="relative flex min-h-svh overflow-hidden">
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
            ? "linear-gradient(90deg, rgba(10,8,6,0.22) 0%, rgba(10,8,6,0.45) 55%, rgba(10,8,6,0.62) 100%)"
            : "linear-gradient(90deg, rgba(30,20,18,0.08) 0%, rgba(30,20,18,0.28) 55%, rgba(30,20,18,0.45) 100%)",
        }}
      />
      {decor.CoverBackdrop && <decor.CoverBackdrop />}
      <div
        className="absolute inset-x-0 bottom-0 h-[58%] sm:h-[54%] lg:inset-y-0 lg:right-auto lg:left-0 lg:h-auto lg:w-[52%] lg:max-w-[560px]"
        style={{
          backgroundColor: `color-mix(in srgb, ${t.bg} 82%, transparent)`,
          backdropFilter: "blur(18px) saturate(1.08)",
          WebkitBackdropFilter: "blur(18px) saturate(1.08)",
          borderTop: `1px solid color-mix(in srgb, ${t.line} 65%, transparent)`,
        }}
      >
        <div
          aria-hidden="true"
          className="hidden h-full w-px shrink-0 lg:absolute lg:top-0 lg:right-0 lg:block"
          style={{ backgroundColor: `color-mix(in srgb, ${t.line} 45%, transparent)` }}
        />
        <div className="flex h-full flex-col justify-center px-7 py-8 sm:px-10 lg:justify-center lg:px-12 lg:py-20">
          <Reveal>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0"
                style={{ backgroundColor: t.accent }}
              />
              <p className={`${t.headingFont} text-xs tracking-[0.38em] uppercase`} style={{ color: t.sub }}>
                Undangan Pernikahan
              </p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            {decor.CoverMark && (
              <div className="mt-5 [&_svg]:mx-0!">
                <decor.CoverMark accent={t.accent} />
              </div>
            )}
            <h1 className={`${t.scriptFont} mt-5 text-5xl leading-[0.95] sm:text-6xl lg:text-[3.6rem] xl:text-6xl`}>
              <span className="block">{template.couple.groom}</span>
              <span className="mt-1 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className={`${t.headingFont} text-lg font-light tracking-[0.4em]`}
                  style={{ color: t.accent }}
                >
                  —
                </span>
                <span className={`${t.scriptFont} text-3xl italic`} style={{ color: t.accent }}>
                  &amp;
                </span>
                <span className="sr-only"> dan </span>
              </span>
              <span className="block">{template.couple.bride}</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-6 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-12" style={{ backgroundColor: t.line }} />
              <span className="size-1 rounded-full" style={{ backgroundColor: t.accent }} />
            </div>
            <p className={`${t.headingFont} mt-5 text-sm tracking-[0.24em] uppercase`} style={{ color: t.sub }}>
              {template.dateLabel}
            </p>
            <p className={`${t.bodyFont} mt-2 max-w-sm text-sm leading-relaxed`} style={{ color: t.sub }}>
              {template.events[0]?.venue} · {template.events[0]?.address.split(",").slice(-2).join(", ").trim()}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <ChevronDown aria-hidden="true" className="mt-8 size-5 animate-bounce lg:mt-10" style={{ color: t.accent }} />
          </Reveal>
        </div>
      </div>

      {decor.CoverCorners && (
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <decor.CoverCorners />
        </div>
      )}
    </section>
  )
}
