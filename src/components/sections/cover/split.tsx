import { ChevronDown } from "lucide-react"

import { getDecor } from "../decor"
import { Reveal } from "../shared"
import type { SectionProps } from "../shared"

/**
 * Sampul dua panel editorial: tipografi besar rata kiri di panel latar tema,
 * foto hero penuh tinggi di panel sebelahnya — terasa seperti stationery
 * modern. Di mobile foto duduk di atas dengan sudut bawah melengkung besar.
 */
export function CoverSplit({ template }: SectionProps) {
  const t = template.theme
  const decor = getDecor(template)
  return (
    <section
      className="grid min-h-svh lg:grid-cols-2"
      style={{ backgroundColor: t.bg, color: t.ink }}
    >
      {/* Panel foto: atas di mobile, kanan di desktop */}
      <div className="relative h-[55svh] overflow-hidden rounded-b-[3rem] lg:order-2 lg:h-auto lg:min-h-svh lg:rounded-none">
        <img
          src={template.hero}
          alt=""
          className="absolute inset-0 size-full object-cover"
          fetchPriority="high"
        />
        {/* Bingkai tipis inset agar terasa stationery */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-4 rounded-b-[2.5rem] border lg:inset-5 lg:rounded-none"
          style={{ borderColor: t.line }}
        />
      </div>
      {/* Panel tipografi */}
      <div className="flex items-center px-7 py-14 sm:px-12 lg:order-1 lg:min-h-svh lg:px-16 lg:py-24">
        <div>
          <Reveal>
            <p
              className={`${t.headingFont} text-xs tracking-[0.4em] uppercase`}
              style={{ color: t.sub }}
            >
              Undangan Pernikahan
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h1
              className={`${t.scriptFont} mt-6 text-6xl leading-[1.05] sm:text-7xl xl:text-8xl`}
            >
              {template.couple.groom}
              <span
                aria-hidden="true"
                className="block"
                style={{ color: t.accent }}
              >
                &amp;
              </span>
              <span className="sr-only">dan </span>
              {template.couple.bride}
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <div className="w-fit">
              <decor.SectionDivider style={{ color: t.accent }} />
            </div>
            <p
              className={`${t.headingFont} text-sm tracking-[0.28em] uppercase`}
              style={{ color: t.sub }}
            >
              {template.dateLabel}
            </p>
          </Reveal>
          <Reveal delay={260}>
            <ChevronDown
              aria-hidden="true"
              className="mt-12 size-6 animate-bounce"
              style={{ color: t.accent }}
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
