import { Reveal, SectionShell } from "../shared"
import type { SectionProps } from "../shared"

/**
 * Kisah cinta sebagai surat cinta: satu kartu stationery rata kiri
 * dengan drop-cap script, tiap milestone mengalir jadi paragraf yang
 * dibuka tahun italic, ditutup tanda tangan script pasangan.
 */
export function StoryLetter({ template }: SectionProps) {
  const t = template.theme
  return (
    <SectionShell
      template={template}
      eyebrow="Perjalanan Kami"
      title="Kisah Cinta"
    >
      <Reveal delay={80}>
        <div
          className="mx-auto mt-2 max-w-xl rounded-2xl p-8 text-left sm:p-10"
          style={{
            backgroundColor: t.surface,
            border: `1px solid ${t.line}`,
            boxShadow: "0 24px 50px -32px rgba(0,0,0,0.35)",
          }}
        >
          <p className={`${t.headingFont} text-base tracking-wide`}>
            Kepada para tamu terkasih,
          </p>
          {template.story.map((s, i) => (
            <p
              key={s.title}
              className="mt-5 text-sm leading-relaxed"
              style={{ color: t.sub }}
            >
              {i === 0 ? (
                <>
                  <span
                    className={`${t.scriptFont} float-left mt-1 mr-2.5 text-[3.4rem] leading-[0.75]`}
                    style={{ color: t.accent }}
                  >
                    {s.when.charAt(0)}
                  </span>
                  <span
                    className="font-cormorant text-base italic"
                    style={{ color: t.accent }}
                  >
                    {s.when.slice(1)} —{" "}
                  </span>
                </>
              ) : (
                <span
                  className="font-cormorant text-base italic"
                  style={{ color: t.accent }}
                >
                  {s.when} —{" "}
                </span>
              )}
              {s.text}
            </p>
          ))}
          <p className="mt-8 text-sm" style={{ color: t.sub }}>
            Dengan cinta,
          </p>
          <p
            className={`${t.scriptFont} mt-3 text-3xl sm:text-4xl`}
            style={{ color: t.accent }}
          >
            {template.couple.bride} &amp; {template.couple.groom}
          </p>
        </div>
      </Reveal>
    </SectionShell>
  )
}
