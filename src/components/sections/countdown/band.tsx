import { Reveal } from "../shared"
import { useCountdown } from "./use-countdown"
import type { SectionProps } from "../shared"

/**
 * Hitung mundur sebagai pita penuh lebar bergradasi warna aksen —
 * selingan berwarna yang memecah irama halaman yang serba terang.
 */
export function CountdownBand({ template }: SectionProps) {
  const t = template.theme
  const left = useCountdown(template.date)
  const units = ["hari", "jam", "menit", "detik"] as const
  return (
    <section
      className="py-16 text-center sm:py-20"
      style={{
        color: t.accentInk,
        background: `linear-gradient(120deg, color-mix(in srgb, ${t.accent} 88%, #fff) 0%, ${t.accent} 48%, color-mix(in srgb, ${t.accent} 72%, #000) 100%)`,
      }}
    >
      <div className="px-6">
        <Reveal>
          <p className="text-xs tracking-[0.35em] uppercase opacity-80">
            Menghitung Hari
          </p>
          <p className={`${t.scriptFont} mt-3 text-3xl sm:text-4xl`}>
            Menuju Hari Bahagia
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-9 flex items-start justify-center gap-3 sm:gap-6">
            {units.map((u, i) => (
              <div key={u} className="flex items-start gap-3 sm:gap-6">
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className={`${t.headingFont} text-4xl leading-[1.15] opacity-50 sm:text-5xl`}
                  >
                    &middot;
                  </span>
                )}
                <div>
                  <p
                    className={`${t.headingFont} text-4xl leading-none sm:text-6xl`}
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    {left ? String(left[u]).padStart(2, "0") : "--"}
                  </p>
                  <p className="mt-2.5 text-[10px] tracking-[0.3em] uppercase opacity-75">
                    {u}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={260}>
          <p className="mt-9 text-sm tracking-[0.18em] opacity-90">
            {template.dateLabel}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
