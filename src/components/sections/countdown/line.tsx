import { Reveal } from "../shared"
import { useCountdown } from "./use-countdown"
import type { SectionProps } from "../shared"

/**
 * Hitung mundur editorial ultra-minimal: satu baris angka besar diapit dua
 * hairline panjang seperti ticker klasik, tanpa kartu atau ornamen apa pun.
 */
export function CountdownLine({ template }: SectionProps) {
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
      <Reveal delay={120}>
        <div
          className="mx-auto mt-9 flex max-w-xl items-stretch justify-center border-y py-7 sm:py-9"
          style={{ borderColor: t.line }}
        >
          {units.map((u, i) => (
            <div key={u} className="flex items-stretch">
              {i > 0 && (
                <div
                  aria-hidden="true"
                  className="w-px self-stretch"
                  style={{ backgroundColor: t.line }}
                />
              )}
              <div className="w-18 sm:w-26">
                <p
                  className={`${t.headingFont} text-4xl leading-none sm:text-5xl`}
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {left ? String(left[u]).padStart(2, "0") : "--"}
                </p>
                <p
                  className="mt-2.5 text-[10px] tracking-[0.3em] uppercase"
                  style={{ color: t.sub }}
                >
                  {u}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={220}>
        <p className="mt-6 text-xs tracking-[0.2em]" style={{ color: t.sub }}>
          {template.dateLabel}
        </p>
      </Reveal>
    </section>
  )
}
