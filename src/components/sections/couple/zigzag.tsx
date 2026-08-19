import { Fragment } from "react"

import { getDecor } from "../decor"
import { Reveal, SectionShell } from "../shared"
import type { SectionProps } from "../shared"

/**
 * Mempelai zigzag editorial: dua baris penuh berselang-seling — foto
 * besar di satu sisi, blok nama rata ke sisi lain, dicerminkan di baris
 * kedua dengan ornamen pemisah kecil di antaranya.
 */
export function CoupleZigzag({ template }: SectionProps) {
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
      <div className="mt-12 space-y-10">
        {people.map((p, i) => {
          const mirrored = i === 1
          return (
            <Fragment key={p.full}>
              {mirrored && (
                <Reveal delay={120}>
                  <decor.CoupleSeparator style={{ color: t.accent }} />
                </Reveal>
              )}
              <Reveal delay={i * 140}>
                <div className="grid items-center gap-6 sm:grid-cols-2 sm:gap-12">
                  <img
                    src={p.photo}
                    alt={p.alt}
                    loading="lazy"
                    className={`aspect-[4/5] w-full max-w-xs rounded-3xl object-cover ${
                      mirrored
                        ? "justify-self-end sm:order-2"
                        : "justify-self-start"
                    }`}
                    style={{
                      border: `1px solid ${t.line}`,
                      boxShadow: "0 20px 45px -28px rgba(0,0,0,0.35)",
                    }}
                  />
                  <div
                    className={mirrored ? "text-right sm:order-1" : "text-left"}
                  >
                    <p
                      className={`${t.scriptFont} text-4xl sm:text-5xl`}
                      style={{ color: t.accent }}
                    >
                      {p.short}
                    </p>
                    <p className={`${t.headingFont} mt-3 text-xl sm:text-2xl`}>
                      {p.full}
                    </p>
                    <p
                      className="mt-2 text-sm leading-relaxed"
                      style={{ color: t.sub }}
                    >
                      {p.parents}
                    </p>
                  </div>
                </div>
              </Reveal>
            </Fragment>
          )
        })}
      </div>
    </SectionShell>
  )
}
