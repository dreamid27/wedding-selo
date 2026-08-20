import { useEffect, useRef, useState } from "react"
import { Reveal } from "../shared"
import { useCountdown } from "./use-countdown"
import type { SectionProps } from "../shared"
import type { TemplateTheme } from "@/lib/templates"

function FlipTile({ value, theme }: { value: string; theme: TemplateTheme }) {
  const isPlaceholder = value === "--"
  const [curr, setCurr] = useState(value)
  const [prev, setPrev] = useState(value)
  const [key, setKey] = useState(0)
  const prevRef = useRef(value)
  const first = useRef(true)

  useEffect(() => {
    if (first.current) {
      first.current = false
      prevRef.current = value
      setCurr(value)
      setPrev(value)
      return
    }
    if (value === prevRef.current) return
    if (isPlaceholder || prevRef.current === "--") {
      prevRef.current = value
      setCurr(value)
      setPrev(value)
      return
    }
    setPrev(prevRef.current)
    setCurr(value)
    prevRef.current = value
    setKey((k) => k + 1)
  }, [value, isPlaceholder])

  const textCls = `${theme.headingFont} text-3xl leading-none sm:text-4xl`

  if (isPlaceholder || key === 0) {
    return (
      <div
        className="relative h-[68px] overflow-hidden rounded-xl sm:h-[78px]"
        style={{
          backgroundColor: theme.ink,
          color: theme.bg,
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -8px 16px rgba(0,0,0,0.22), 0 14px 24px -16px rgba(0,0,0,0.45)",
        }}
      >
        <div className="absolute inset-x-0 top-0 flex h-1/2 items-end justify-center overflow-hidden rounded-t-xl">
          <span className={textCls} style={{ fontVariantNumeric: "tabular-nums", transform: "translateY(50%)" }}>{curr}</span>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex h-1/2 items-start justify-center overflow-hidden rounded-b-xl">
          <span className={textCls} style={{ fontVariantNumeric: "tabular-nums", transform: "translateY(-50%)" }}>{curr}</span>
        </div>
        <div aria-hidden="true" className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-black/25" />
        <div aria-hidden="true" className="absolute inset-x-0 top-1/2 h-px translate-y-[calc(-50%+1px)] bg-white/10" />
      </div>
    )
  }

  return (
    <div key={key} className="flip-perspective relative h-[68px] sm:h-[78px]" style={{ perspective: "520px" }}>
      <div className="flip-card relative h-full overflow-hidden rounded-xl" style={{ backgroundColor: theme.ink, color: theme.bg, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -8px 16px rgba(0,0,0,0.22), 0 14px 24px -16px rgba(0,0,0,0.45)" }}>
        <div className="absolute inset-x-0 top-0 flex h-1/2 items-end justify-center overflow-hidden rounded-t-xl">
          <span className={textCls} style={{ fontVariantNumeric: "tabular-nums", transform: "translateY(50%)" }}>{curr}</span>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex h-1/2 items-start justify-center overflow-hidden rounded-b-xl">
          <span className={textCls} style={{ fontVariantNumeric: "tabular-nums", transform: "translateY(-50%)" }}>{prev}</span>
        </div>

        <div className="flip-flap flip-flap--top absolute inset-x-0 top-0 flex h-1/2 items-end justify-center overflow-hidden rounded-t-xl" style={{ backgroundColor: theme.ink, color: theme.bg }}>
          <span className={textCls} style={{ fontVariantNumeric: "tabular-nums", transform: "translateY(50%)" }}>{prev}</span>
        </div>
        <div className="flip-flap flip-flap--bottom absolute inset-x-0 bottom-0 flex h-1/2 items-start justify-center overflow-hidden rounded-b-xl" style={{ backgroundColor: theme.ink, color: theme.bg }}>
          <span className={textCls} style={{ fontVariantNumeric: "tabular-nums", transform: "translateY(-50%)" }}>{curr}</span>
        </div>

        <div aria-hidden="true" className="absolute inset-x-0 top-1/2 z-10 h-px -translate-y-1/2 bg-black/30" />
        <div aria-hidden="true" className="absolute inset-x-0 top-1/2 z-10 h-px translate-y-[calc(-50%+1px)] bg-white/10" />
        <div aria-hidden="true" className="absolute top-1/2 left-0 z-10 h-2.5 w-[3px] -translate-y-1/2 rounded-r bg-black/30" />
        <div aria-hidden="true" className="absolute top-1/2 right-0 z-10 h-2.5 w-[3px] -translate-y-1/2 rounded-l bg-black/30" />
      </div>
    </div>
  )
}

/**
 * Hitung mundur bernuansa papan flip-clock: tile tinta pekat dengan garis
 * belah horizontal di tengah — animasi lipat 3D yang berulang tiap detik.
 */
export function CountdownFlip({ template }: SectionProps) {
  const t = template.theme
  const left = useCountdown(template.date)
  const units = ["hari", "jam", "menit", "detik"] as const
  return (
    <section className="px-6 py-16 text-center">
      <Reveal>
        <p className={`${t.headingFont} text-sm tracking-[0.3em] uppercase`} style={{ color: t.sub }}>Menghitung Hari</p>
      </Reveal>
      <div className="mt-9 flex justify-center gap-2.5 sm:gap-4">
        {units.map((u, i) => {
          const raw = left ? String(left[u]).padStart(2, "0") : "--"
          return (
            <Reveal key={u} delay={i * 70}>
              <div className="w-17 sm:w-22">
                <FlipTile value={raw} theme={t} />
                <p className="mt-2.5 text-[10px] tracking-[0.28em] uppercase" style={{ color: t.sub }}>{u}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
      <Reveal delay={320}>
        <p className="mt-8 text-xs tracking-[0.2em]" style={{ color: t.sub }}>{template.dateLabel}</p>
      </Reveal>
    </section>
  )
}
