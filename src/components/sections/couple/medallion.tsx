import { Fragment } from "react"

import { getDecor } from "../decor"
import { Reveal, SectionShell } from "../shared"
import type { SectionProps } from "../shared"

/**
 * Mempelai medali formal: dua potret bulat sempurna bercincin ganda
 * berdampingan simetris, dipertemukan ampersand script raksasa yang
 * menimpa sedikit tepi kedua foto.
 */
export function CoupleMedallion({ template }: SectionProps) {
  const t = template.theme
  const decor = getDecor(template)
  const people = [
    {
      full: template.couple.brideFull,
      short: template.couple.bride,
      parents: template.couple.brideParents,
      photo: template.couple.bridePhoto,
      alt: `Foto mempelai wanita, ${template.couple.brideFull}`,
    },
    {
      full: template.couple.groomFull,
      short: template.couple.groom,
      parents: template.couple.groomParents,
      photo: template.couple.groomPhoto,
      alt: `Foto mempelai pria, ${template.couple.groomFull}`,
    },
  ]
  return (
    <SectionShell
      template={template}
      eyebrow="Mempelai"
      title="Kedua Mempelai"
      alt
    >
      <Reveal delay={80}>
        <p
          className="mx-auto max-w-xl text-sm leading-relaxed"
          style={{ color: t.sub }}
        >
          {decor.coupleIntro}
        </p>
      </Reveal>
      <div className="mt-12 grid items-start gap-8 sm:grid-cols-[1fr_auto_1fr] sm:gap-0">
        {people.map((p, i) => (
          <Fragment key={p.full}>
            {i === 1 && (
              <Reveal delay={200}>
                <p
                  aria-hidden="true"
                  className={`${t.scriptFont} relative z-10 text-center text-6xl leading-none select-none sm:-mx-8 sm:mt-16 sm:text-8xl`}
                  style={{ color: t.accent }}
                >
                  &amp;
                </p>
              </Reveal>
            )}
            <Reveal delay={i * 140}>
              <img
                src={p.photo}
                alt={p.alt}
                loading="lazy"
                className="mx-auto mb-6 size-44 rounded-full object-cover sm:size-52"
                style={{
                  border: `1px solid ${t.line}`,
                  boxShadow: `0 0 0 6px ${t.bg}, 0 0 0 7px ${t.line}`,
                }}
              />
              <p
                className={`${t.scriptFont} text-4xl`}
                style={{ color: t.accent }}
              >
                {p.short}
              </p>
              <p className={`${t.headingFont} mt-3 text-xl`}>{p.full}</p>
              <p className="mt-2 text-sm" style={{ color: t.sub }}>
                {p.parents}
              </p>
            </Reveal>
          </Fragment>
        ))}
      </div>
    </SectionShell>
  )
}
