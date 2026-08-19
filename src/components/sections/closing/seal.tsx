import { Link } from "@tanstack/react-router"

import { getDecor } from "../decor"
import { Reveal } from "../shared"
import type { SectionProps } from "../shared"

/** Tepi bergelombang segel lilin (ruang koordinat 80×80px, sesuai size-20). */
const WAX_PATH = (() => {
  const N = 12
  const cx = 40
  const inner = 35
  const outer = 40
  const pt = (angle: number, radius: number) =>
    `${(cx + Math.cos(angle) * radius).toFixed(2)} ${(cx + Math.sin(angle) * radius).toFixed(2)}`
  let d = `M ${pt(0, inner)}`
  for (let i = 1; i <= N; i++) {
    const a = (i / N) * Math.PI * 2
    const mid = ((i - 0.5) / N) * Math.PI * 2
    d += ` Q ${pt(mid, outer)} ${pt(a, inner)}`
  }
  return `${d} Z`
})()

/**
 * Penutup surat: pesan perpisahan bergaya akhir surat dengan tanda tangan
 * script besar dan segel lilin bergelombang berisi inisial pasangan.
 */
export function ClosingSeal({ template }: SectionProps) {
  const t = template.theme
  const decor = getDecor(template)
  return (
    <section className="relative overflow-hidden px-6 py-20 text-center">
      {decor.ClosingBackdrop && (
        <decor.ClosingBackdrop style={{ color: t.accent }} />
      )}
      <Reveal className="relative mx-auto max-w-2xl">
        <p
          className="mx-auto max-w-md text-sm leading-relaxed"
          style={{ color: t.sub }}
        >
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
        </p>
        <p
          className="mt-8 font-cormorant text-base italic"
          style={{ color: t.sub }}
        >
          Dengan penuh cinta,
        </p>
        <p
          className={`${t.scriptFont} mt-3 text-5xl sm:text-6xl`}
          style={{ color: t.accent }}
        >
          {template.couple.groom} &amp; {template.couple.bride}
        </p>
        <div
          aria-hidden="true"
          className="mx-auto mt-10 w-fit -rotate-6"
          style={{ filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.25))" }}
        >
          <div
            className="relative flex size-20 items-center justify-center"
            style={{
              clipPath: `path("${WAX_PATH}")`,
              background: `radial-gradient(circle at 38% 32%, ${t.accent} 0%, color-mix(in srgb, ${t.accent} 70%, #000) 100%)`,
            }}
          >
            <div
              className="absolute inset-2 rounded-full"
              style={{
                border: `1px solid color-mix(in srgb, ${t.accentInk} 35%, transparent)`,
              }}
            />
            <p
              className={`${t.scriptFont} text-2xl`}
              style={{ color: t.accentInk }}
            >
              {template.couple.groom.charAt(0)}
              {template.couple.bride.charAt(0)}
            </p>
          </div>
        </div>
        <p
          className={`${t.headingFont} mt-10 text-xs tracking-[0.3em] uppercase`}
          style={{ color: t.ink }}
        >
          {decor.thanksTitle}
        </p>
        {decor.ClosingScript && (
          <decor.ClosingScript style={{ color: t.sub }} />
        )}
        <div
          className="ornament-line mx-auto mt-10 mb-6 w-24"
          style={{ color: t.line }}
        />
        <p className="pb-16 text-xs" style={{ color: t.sub }}>
          Undangan digital oleh{" "}
          <Link
            to="/"
            className="underline underline-offset-2"
            style={{ color: t.accent }}
          >
            Wedding Selo
          </Link>
        </p>
      </Reveal>
    </section>
  )
}
