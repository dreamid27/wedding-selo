import { Reveal } from "../shared"
import { useCountdown } from "./use-countdown"
import type { SectionProps } from "../shared"
import type { TemplateTheme } from "@/lib/templates"

const RADIUS = 46
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

function Ring({
  value,
  max,
  label,
  theme,
}: {
  value: number | null
  max: number
  label: string
  theme: TemplateTheme
}) {
  const frac = value === null ? 0 : Math.min(1, value / max)
  return (
    <div className="relative size-19 sm:size-27">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 size-full -rotate-90"
        aria-hidden="true"
      >
        <circle
          cx="50"
          cy="50"
          r={RADIUS}
          fill="none"
          stroke={theme.line}
          strokeWidth="1.5"
        />
        <circle
          cx="50"
          cy="50"
          r={RADIUS}
          fill="none"
          stroke={theme.accent}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - frac)}
          className="transition-[stroke-dashoffset] duration-700 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`${theme.headingFont} text-2xl sm:text-3xl`}>
          {value === null ? "--" : String(value).padStart(2, "0")}
        </span>
        <span
          className="mt-0.5 text-[9px] tracking-[0.25em] uppercase sm:text-[10px]"
          style={{ color: theme.sub }}
        >
          {label}
        </span>
      </div>
    </div>
  )
}

/**
 * Hitung mundur sebagai cincin progres tipis: setiap satuan waktu adalah
 * lingkaran yang perlahan terisi — detiknya berdetak seperti jarum jam.
 */
export function CountdownRings({ template }: SectionProps) {
  const t = template.theme
  const left = useCountdown(template.date)
  const units = [
    { key: "hari", max: 365 },
    { key: "jam", max: 24 },
    { key: "menit", max: 60 },
    { key: "detik", max: 60 },
  ] as const
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
      <div className="mt-9 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
        {units.map((u, i) => (
          <Reveal key={u.key} delay={i * 70}>
            <Ring
              value={left ? left[u.key] : null}
              max={u.max}
              label={u.key}
              theme={t}
            />
          </Reveal>
        ))}
      </div>
      <Reveal delay={320}>
        <p
          className={`${t.scriptFont} mt-9 text-2xl`}
          style={{ color: t.accent }}
        >
          {template.dateLabel}
        </p>
      </Reveal>
    </section>
  )
}
