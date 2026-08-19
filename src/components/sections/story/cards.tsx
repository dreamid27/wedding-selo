import { getDecor } from "../decor"
import { Reveal, SectionShell } from "../shared"
import type { SectionProps } from "../shared"

/**
 * Kisah cinta sebagai kartu milestone: scroller horizontal ber-snap di
 * mobile, berjajar rapi tiga kolom di desktop — tiap kartu berbadge
 * tahun dan ikon simpul kisah.
 */
export function StoryCards({ template }: SectionProps) {
  const t = template.theme
  const decor = getDecor(template)
  return (
    <SectionShell
      template={template}
      eyebrow="Perjalanan Kami"
      title="Kisah Cinta"
    >
      <div className="-mx-6 mt-2 overflow-x-auto px-6 pb-2 sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0">
        <div className="flex snap-x snap-mandatory gap-4 sm:grid sm:grid-cols-3 sm:gap-5">
          {template.story.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 100}
              className="w-[80%] shrink-0 snap-center sm:w-auto sm:shrink"
            >
              <div
                className="flex h-full flex-col rounded-3xl p-6 text-left"
                style={{
                  backgroundColor: t.surface,
                  border: `1px solid ${t.line}`,
                  boxShadow: "0 16px 40px -30px rgba(0,0,0,0.3)",
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className="inline-flex items-center rounded-full px-3 py-1 font-cormorant text-sm italic"
                    style={{ backgroundColor: t.accent, color: t.accentInk }}
                  >
                    {s.when}
                  </span>
                  <span aria-hidden="true" style={{ color: t.accent }}>
                    <decor.StoryDot />
                  </span>
                </div>
                <h3 className={`${t.headingFont} mt-5 text-lg`}>{s.title}</h3>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: t.sub }}
                >
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
