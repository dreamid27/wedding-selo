import { ChevronDown } from "lucide-react"

import { Reveal } from "../shared"
import type { SectionProps } from "../shared"

/**
 * Sampul tipografis ala majalah: nama mempelai ditumpuk tiga baris raksasa
 * dengan ampersand script beraksen dan foto oval kecil di baris tengah —
 * white space dermawan, hairline penuh di atas dan bawah.
 */
export function CoverEditorial({ template }: SectionProps) {
  const t = template.theme
  const city =
    template.events[0]?.address.split(",").pop()?.trim() ??
    template.events[0]?.venue
  return (
    <section
      className="flex min-h-svh flex-col justify-center px-6 pt-20 pb-24 sm:px-10"
      style={{ backgroundColor: t.bg, color: t.ink }}
    >
      <div className="mx-auto w-full max-w-4xl text-center">
        <Reveal>
          <div className="flex items-center gap-5">
            <div
              aria-hidden="true"
              className="h-px min-w-6 flex-1"
              style={{ backgroundColor: t.line }}
            />
            <p
              className={`${t.headingFont} text-[11px] tracking-[0.45em] uppercase`}
              style={{ color: t.sub }}
            >
              Undangan Pernikahan
            </p>
            <div
              aria-hidden="true"
              className="h-px min-w-6 flex-1"
              style={{ backgroundColor: t.line }}
            />
          </div>
        </Reveal>
        <Reveal delay={90}>
          <h1
            className={`${t.headingFont} mt-12 text-[clamp(3rem,11vw,7rem)] leading-[0.95] tracking-[0.12em] uppercase sm:mt-16`}
          >
            <span className="block">{template.couple.groom}</span>
            <span className="my-4 flex items-center justify-center gap-5 sm:my-5 sm:gap-8">
              <img
                src={template.hero}
                alt=""
                className="aspect-3/4 w-24 shrink-0 rounded-full object-cover sm:w-32"
              />
              <span
                aria-hidden="true"
                className={`${t.scriptFont} text-[clamp(3.5rem,9vw,6rem)] leading-none tracking-normal normal-case`}
                style={{ color: t.accent }}
              >
                &amp;
              </span>
              <span className="sr-only">dan</span>
            </span>
            <span className="block">{template.couple.bride}</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-12 flex items-center gap-5 sm:mt-16">
            <div
              aria-hidden="true"
              className="h-px min-w-6 flex-1"
              style={{ backgroundColor: t.line }}
            />
            <p
              className={`${t.headingFont} text-xs tracking-[0.3em] uppercase`}
              style={{ color: t.sub }}
            >
              {template.dateLabel}{" "}
              <span aria-hidden="true" style={{ color: t.accent }}>
                &bull;
              </span>{" "}
              {city}
            </p>
            <div
              aria-hidden="true"
              className="h-px min-w-6 flex-1"
              style={{ backgroundColor: t.line }}
            />
          </div>
        </Reveal>
        <Reveal delay={280}>
          <ChevronDown
            aria-hidden="true"
            className="mx-auto mt-14 size-6 animate-bounce"
            style={{ color: t.accent }}
          />
        </Reveal>
      </div>
    </section>
  )
}
