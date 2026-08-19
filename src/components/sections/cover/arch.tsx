import { ChevronDown } from "lucide-react"

import { getDecor } from "../decor"
import { Reveal } from "../shared"
import type { SectionProps } from "../shared"

/**
 * Sampul galeri-lengkung: foto hero dalam bingkai arch bercincin ganda di
 * tengah halaman, nama pasangan script besar menimpa tepi bawah foto sehingga
 * terasa berlapis seperti undangan cetak.
 */
export function CoverArch({ template }: SectionProps) {
  const t = template.theme
  const decor = getDecor(template)
  return (
    <section
      className="flex min-h-svh flex-col items-center justify-center px-6 pt-20 pb-24 text-center"
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
      <Reveal delay={100} className="mt-8 w-full max-w-[22rem]">
        {/* Cincin ganda: border luar t.line + bingkai dalam bernuansa aksen */}
        <div
          className="rounded-t-full border p-2.5 sm:p-3"
          style={{ borderColor: t.line }}
        >
          <div
            className="overflow-hidden rounded-t-full border"
            style={{
              borderColor: `color-mix(in srgb, ${t.accent} 45%, ${t.line})`,
            }}
          >
            <img
              src={template.hero}
              alt=""
              className="aspect-3/4 w-full object-cover"
              fetchPriority="high"
            />
          </div>
        </div>
      </Reveal>
      <Reveal delay={200} className="relative z-10 -mt-9 px-2 sm:-mt-11">
        <h1
          className={`${t.scriptFont} text-6xl leading-tight sm:text-7xl`}
          style={{ textShadow: `0 2px 18px ${t.bg}, 0 0 8px ${t.bg}` }}
        >
          {template.couple.groom} <span style={{ color: t.accent }}>&amp;</span>{" "}
          {template.couple.bride}
        </h1>
      </Reveal>
      <Reveal delay={280}>
        <decor.SectionDivider style={{ color: t.accent }} />
        <p
          className={`${t.headingFont} text-sm tracking-[0.3em] uppercase`}
          style={{ color: t.sub }}
        >
          {template.dateLabel}
        </p>
      </Reveal>
      <Reveal delay={360}>
        <ChevronDown
          aria-hidden="true"
          className="mx-auto mt-10 size-6 animate-bounce"
          style={{ color: t.accent }}
        />
      </Reveal>
    </section>
  )
}
