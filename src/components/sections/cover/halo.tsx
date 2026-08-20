import { ChevronDown } from "lucide-react"

import { getDecor } from "../decor"
import { Reveal } from "../shared"
import type { SectionProps } from "../shared"

export function CoverHalo({ template }: SectionProps) {
  const t = template.theme
  const decor = getDecor(template)
  return (
    <section
      className="flex min-h-svh flex-col items-center justify-center px-6 pt-16 pb-16 text-center"
      style={{ backgroundColor: t.bg, color: t.ink }}
    >
      <Reveal>
        <p
          className={`${t.headingFont} text-xs tracking-[0.4em] uppercase`}
          style={{ color: t.sub }}
        >
          Undangan Pernikahan
        </p>
      </Reveal>

      <Reveal delay={110} className="relative mt-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -m-6 rounded-full opacity-35 blur-2xl sm:-m-8"
          style={{ background: `radial-gradient(circle, ${t.accent} 0%, transparent 70%)` }}
        />
        <div
          className="relative rounded-full p-1.5 sm:p-2"
          style={{
            background: `linear-gradient(135deg, ${t.accent}, color-mix(in srgb, ${t.accent} 30%, ${t.line}))`,
          }}
        >
          <div className="rounded-full bg-white p-1.5 sm:p-2" style={{ backgroundColor: t.bg }}>
            <img
              src={template.hero}
              alt=""
              className="aspect-square w-64 rounded-full object-cover sm:w-80 lg:w-88"
              fetchPriority="high"
            />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full border"
          style={{ borderColor: `color-mix(in srgb, ${t.accent} 18%, transparent)` }}
        />
      </Reveal>

      <Reveal delay={210} className="relative z-10 -mt-6 sm:-mt-8">
        <div
          className="mx-auto rounded-full px-8 pt-5 pb-2 sm:px-10"
          style={{
            backgroundColor: `color-mix(in srgb, ${t.bg} 88%, transparent)`,
            backdropFilter: "blur(6px)",
          }}
        >
          {decor.CoverMark && <decor.CoverMark accent={t.accent} />}
          <h1 className={`${t.scriptFont} text-5xl leading-none sm:text-6xl lg:text-7xl`}>
            {template.couple.groom}{" "}
            <span className={`${t.headingFont} text-xl font-light tracking-[0.2em] sm:text-2xl`} style={{ color: t.accent }}>
              &amp;
            </span>{" "}
            {template.couple.bride}
          </h1>
        </div>
      </Reveal>

      <Reveal delay={300}>
        <decor.SectionDivider style={{ color: t.accent }} />
        <p className={`${t.headingFont} text-sm tracking-[0.28em] uppercase`} style={{ color: t.sub }}>
          {template.dateLabel}
        </p>
      </Reveal>

      <Reveal delay={380}>
        <ChevronDown aria-hidden="true" className="mx-auto mt-10 size-6 animate-bounce" style={{ color: t.accent }} />
      </Reveal>
    </section>
  )
}
