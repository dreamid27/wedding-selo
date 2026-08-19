import { Fragment } from "react"

import { Reveal, SectionShell } from "../shared"
import type { SectionProps } from "../shared"

/**
 * Kisah cinta sebagai bab editorial: nomor bab besar samar di balik
 * setiap judul, tahun small-caps, dan whitespace dermawan dengan
 * garis ornamen pendek sebagai jeda antar bab.
 */
export function StoryChapters({ template }: SectionProps) {
  const t = template.theme
  return (
    <SectionShell
      template={template}
      eyebrow="Perjalanan Kami"
      title="Kisah Cinta"
    >
      <div className="mt-2">
        {template.story.map((s, i) => {
          const last = i === template.story.length - 1
          return (
            <Fragment key={s.title}>
              <Reveal delay={i * 100}>
                <div className="mx-auto max-w-xl">
                  <p
                    aria-hidden="true"
                    className={`${t.headingFont} text-8xl leading-none select-none sm:text-9xl`}
                    style={{ color: t.accent, opacity: 0.35 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div className="relative -mt-7 sm:-mt-9">
                    <p
                      className="text-xs tracking-[0.3em] uppercase"
                      style={{ color: t.accent }}
                    >
                      {s.when}
                    </p>
                    <h3 className={`${t.headingFont} mt-3 text-2xl`}>
                      {s.title}
                    </h3>
                    <p
                      className="mx-auto mt-3 max-w-md text-sm leading-relaxed"
                      style={{ color: t.sub }}
                    >
                      {s.text}
                    </p>
                  </div>
                </div>
              </Reveal>
              {!last && (
                <div
                  aria-hidden="true"
                  className="ornament-line mx-auto my-14 w-12"
                  style={{ color: t.accent }}
                />
              )}
            </Fragment>
          )
        })}
      </div>
    </SectionShell>
  )
}
