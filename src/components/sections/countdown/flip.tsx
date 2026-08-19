import { Reveal } from "../shared"
import { useCountdown } from "./use-countdown"
import type { SectionProps } from "../shared"

/**
 * Hitung mundur bernuansa papan flip-clock: tile tinta pekat dengan garis
 * belah horizontal di tengah — kontras dramatis namun tetap elegan.
 */
export function CountdownFlip({ template }: SectionProps) {
  const t = template.theme
  const left = useCountdown(template.date)
  const units = ["hari", "jam", "menit", "detik"] as const
  return (
    <section className="px-6 py-16 text-center">
      <Reveal>
        <p
          className={`${t.headingFont} text-sm tracking-[0.3em] uppercase`}
          style={{ color: t.sub }}
        >
          Menghitung Hari
        </p>
      </Reveal>
      <div className="mt-9 flex justify-center gap-2.5 sm:gap-4">
        {units.map((u, i) => (
          <Reveal key={u} delay={i * 70}>
            <div className="w-17 sm:w-22">
              <div
                className="relative overflow-hidden rounded-xl py-4.5 sm:py-6"
                style={{
                  backgroundColor: t.ink,
                  color: t.bg,
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -8px 16px rgba(0,0,0,0.2), 0 14px 24px -16px rgba(0,0,0,0.45)",
                }}
              >
                <p
                  className={`${t.headingFont} relative text-3xl leading-none sm:text-4xl`}
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {left ? String(left[u]).padStart(2, "0") : "--"}
                </p>
                {/* Garis belah khas papan flip */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-black/25"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-1/2 h-px translate-y-[calc(-50%+1px)] bg-white/10"
                />
              </div>
              <p
                className="mt-2.5 text-[10px] tracking-[0.28em] uppercase"
                style={{ color: t.sub }}
              >
                {u}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={320}>
        <p className="mt-8 text-xs tracking-[0.2em]" style={{ color: t.sub }}>
          {template.dateLabel}
        </p>
      </Reveal>
    </section>
  )
}
