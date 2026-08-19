import { getDecor } from "../decor"
import { Reveal, SectionShell } from "../shared"
import type { SectionProps } from "../shared"

/**
 * Mempelai klasik: dua foto lengkung berdampingan dengan ikon pemisah
 * di tengah, nama script besar, dan nama orang tua di bawahnya.
 */
export function CoupleClassic({ template }: SectionProps) {
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
      <div className="mt-10 grid gap-10 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        {people.map((p, i) => (
          <Reveal
            key={p.full}
            delay={i * 140}
            className={i === 1 ? "sm:order-3" : ""}
          >
            <img
              src={p.photo}
              alt={p.alt}
              loading="lazy"
              className="mx-auto mb-6 aspect-[4/5] w-48 rounded-t-full rounded-b-[2rem] object-cover sm:w-52"
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
        ))}
        <Reveal delay={260} className="order-2">
          <decor.CoupleSeparator style={{ color: t.accent }} />
        </Reveal>
      </div>
    </SectionShell>
  )
}
