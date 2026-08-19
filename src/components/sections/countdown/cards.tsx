import { Reveal } from "../shared"
import { useCountdown } from "./use-countdown"
import type { SectionProps } from "../shared"

/** Hitung mundur sebagai deret kartu angka berjajar. */
export function CountdownCards({ template }: SectionProps) {
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
      <div className="mt-8 flex justify-center gap-3 sm:gap-5">
        {units.map((u, i) => (
          <Reveal key={u} delay={i * 70}>
            <div
              className="w-18 rounded-2xl py-4 sm:w-24 sm:py-5"
              style={{
                backgroundColor: t.surface,
                border: `1px solid ${t.line}`,
              }}
            >
              <p
                className={`${t.headingFont} text-3xl sm:text-4xl`}
                style={{ color: t.accent }}
              >
                {left ? String(left[u]).padStart(2, "0") : "--"}
              </p>
              <p
                className="mt-1 text-xs tracking-widest uppercase"
                style={{ color: t.sub }}
              >
                {u}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
