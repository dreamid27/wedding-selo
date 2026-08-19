import { getDecor } from "../decor"
import { Reveal, SectionShell } from "../shared"
import type { SectionProps } from "../shared"

/**
 * Mempelai kolase artistik: dua foto polaroid saling menimpa diagonal
 * dengan rotasi ringan, didampingi blok nama bertumpuk yang diikat
 * ampersand script warna aksen.
 */
export function CoupleOverlap({ template }: SectionProps) {
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
  const frame = {
    backgroundColor: t.bg,
    border: `1px solid ${t.line}`,
    boxShadow: "0 22px 45px -28px rgba(0,0,0,0.35)",
  }
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
      <div className="mt-14 grid items-center gap-12 sm:grid-cols-[auto_1fr] sm:gap-14">
        <Reveal delay={120}>
          <div className="mx-auto w-fit">
            <figure
              className="w-44 -rotate-3 rounded-lg p-2 pb-7 sm:w-52"
              style={frame}
            >
              <img
                src={people[0].photo}
                alt={people[0].alt}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-sm object-cover"
              />
            </figure>
            <figure
              className="relative z-10 -mt-20 ml-16 w-44 rotate-2 rounded-lg p-2 pb-7 sm:-mt-24 sm:ml-24 sm:w-52"
              style={frame}
            >
              <img
                src={people[1].photo}
                alt={people[1].alt}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-sm object-cover"
              />
            </figure>
          </div>
        </Reveal>
        <Reveal delay={240}>
          <div className="text-center sm:text-left">
            <p
              className={`${t.scriptFont} text-4xl`}
              style={{ color: t.accent }}
            >
              {people[0].short}
            </p>
            <p className={`${t.headingFont} mt-2 text-xl`}>{people[0].full}</p>
            <p
              className="mt-1.5 text-sm leading-relaxed"
              style={{ color: t.sub }}
            >
              {people[0].parents}
            </p>
            <p
              aria-hidden="true"
              className={`${t.scriptFont} my-5 text-5xl leading-none select-none`}
              style={{ color: t.accent }}
            >
              &amp;
            </p>
            <p
              className={`${t.scriptFont} text-4xl`}
              style={{ color: t.accent }}
            >
              {people[1].short}
            </p>
            <p className={`${t.headingFont} mt-2 text-xl`}>{people[1].full}</p>
            <p
              className="mt-1.5 text-sm leading-relaxed"
              style={{ color: t.sub }}
            >
              {people[1].parents}
            </p>
            <div className="mt-8">
              <decor.CoupleSeparator style={{ color: t.accent }} />
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  )
}
