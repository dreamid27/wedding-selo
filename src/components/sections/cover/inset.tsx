import { ChevronDown } from "lucide-react"

import { getDecor } from "../decor"
import { Reveal } from "../shared"
import type { SectionProps } from "../shared"

export function CoverInset({ template }: SectionProps) {
  const t = template.theme
  const decor = getDecor(template)
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden px-6 py-16 sm:px-8 sm:py-20">
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
            ? "linear-gradient(to bottom, rgba(12,10,8,0.38), rgba(12,10,8,0.58))"
            : "linear-gradient(to bottom, rgba(40,28,24,0.18), rgba(40,28,24,0.42))",
        }}
      />
      {decor.CoverCorners && <decor.CoverCorners />}
      <Reveal className="relative w-full max-w-xl">
        <div
          className="relative px-8 pt-10 pb-8 text-center sm:px-12 sm:pt-12 sm:pb-10"
          style={{
            backgroundColor: t.bg,
            boxShadow: `0 24px 64px rgba(0,0,0,0.18), 0 1px 0 ${t.line}`,
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-3 border sm:inset-4"
            style={{ borderColor: `color-mix(in srgb, ${t.line} 85%, transparent)` }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[1.05rem] border sm:inset-[1.35rem]"
            style={{ borderColor: `color-mix(in srgb, ${t.accent} 22%, transparent)` }}
          />
          <div className="relative">
            {decor.CoverMark && <decor.CoverMark accent={t.accent} />}
            <p
              className={`${t.headingFont} text-xs tracking-[0.38em] uppercase`}
              style={{ color: t.sub }}
            >
              Undangan Pernikahan
            </p>
            <decor.CoverDivider />
            <h1 className={`${t.scriptFont} text-5xl leading-[1.05] sm:text-6xl`}>
              <span className="block">{template.couple.groom}</span>
              <span
                className={`${t.headingFont} mx-auto my-1 flex items-center justify-center gap-3 text-sm font-light tracking-[0.45em]`}
                style={{ color: t.accent }}
              >
                <span aria-hidden="true" className="h-px w-8" style={{ backgroundColor: t.line }} />
                &amp;
                <span aria-hidden="true" className="h-px w-8" style={{ backgroundColor: t.line }} />
              </span>
              <span className="block">{template.couple.bride}</span>
            </h1>
            <div className="mx-auto mt-6 flex items-center justify-center gap-3">
              <span aria-hidden="true" className="h-px w-10" style={{ backgroundColor: t.line }} />
              <span className="size-1 rounded-full" style={{ backgroundColor: t.accent }} />
              <span aria-hidden="true" className="h-px w-10" style={{ backgroundColor: t.line }} />
            </div>
            <p
              className={`${t.headingFont} mt-6 text-sm tracking-[0.26em] uppercase`}
              style={{ color: t.sub }}
            >
              {template.dateLabel}
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <ChevronDown
            aria-hidden="true"
            className="mt-6 size-5 animate-bounce text-white/80 drop-shadow"
          />
        </div>
      </Reveal>
    </section>
  )
}
