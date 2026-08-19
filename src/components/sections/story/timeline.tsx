import { getDecor } from "../decor"
import { Reveal, SectionShell } from "../shared"
import type { SectionProps } from "../shared"

/**
 * Kisah cinta sebagai linimasa poros tengah: simpul berselang-seling
 * kiri–kanan di desktop, satu kolom dengan garis di kiri pada mobile.
 */
export function StoryTimeline({ template }: SectionProps) {
  const t = template.theme
  const decor = getDecor(template)
  return (
    <SectionShell
      template={template}
      eyebrow="Perjalanan Kami"
      title="Kisah Cinta"
    >
      <div>
        {template.story.map((s, i) => {
          const left = i % 2 === 0
          const last = i === template.story.length - 1
          return (
            <Reveal
              key={s.title}
              delay={i * 90}
              className="grid grid-cols-[3.5rem_1fr] sm:grid-cols-[1fr_4rem_1fr]"
            >
              <div className="relative col-start-1 row-start-1 flex justify-center sm:col-start-2">
                {!last && (
                  <span
                    className={`absolute bottom-0 left-1/2 w-px ${i === 0 ? "top-2.5" : "top-0"}`}
                    style={{ backgroundColor: t.line }}
                  />
                )}
                <span
                  className="relative z-10 mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: t.surface,
                    border: `1px solid ${t.line}`,
                    color: t.accent,
                  }}
                >
                  <decor.StoryDot />
                </span>
              </div>
              <div
                className={`col-start-2 row-start-1 text-left ${last ? "pb-2" : "pb-10"} ${
                  left
                    ? "sm:col-start-1 sm:text-right"
                    : "sm:col-start-3 sm:text-left"
                }`}
              >
                <p
                  className="font-cormorant text-3xl leading-none italic"
                  style={{ color: t.accent }}
                >
                  {s.when}
                </p>
                <h3 className={`${t.headingFont} mt-2 text-lg`}>{s.title}</h3>
                <p
                  className="mt-1.5 text-sm leading-relaxed"
                  style={{ color: t.sub }}
                >
                  {s.text}
                </p>
              </div>
              <div
                aria-hidden="true"
                className={`hidden sm:block ${left ? "sm:col-start-3" : "sm:col-start-1"} sm:row-start-1`}
              />
            </Reveal>
          )
        })}
      </div>
    </SectionShell>
  )
}
