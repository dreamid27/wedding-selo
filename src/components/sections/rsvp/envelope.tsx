import { useState } from "react"
import { Check, Send } from "lucide-react"

import { sampleWishes } from "./classic"
import { Reveal, SectionShell } from "../shared"
import type { SectionProps } from "../shared"

/**
 * RSVP amplop: formulir berada di dalam kartu bergaya amplop surat —
 * tutup segitiga di atas dengan segel inisial pasangan di puncaknya,
 * ucapan tampil sebagai kartu kecil di bawahnya.
 */
export function RsvpEnvelope({ template }: SectionProps) {
  const t = template.theme
  const [sent, setSent] = useState(false)
  const initials = `${template.couple.groom.charAt(0)}${template.couple.bride.charAt(0)}`
  const flapFill = `color-mix(in srgb, ${t.accent} 14%, ${t.bg})`
  const inputStyle = {
    backgroundColor: t.surface,
    border: `1px solid ${t.line}`,
    color: t.ink,
  }
  return (
    <SectionShell
      template={template}
      eyebrow="Doa & Kehadiran"
      title="RSVP & Ucapan"
      alt
    >
      <Reveal delay={80}>
        <div
          className="mx-auto max-w-md overflow-hidden rounded-2xl text-left shadow-sm"
          style={{ backgroundColor: t.bg, border: `1px solid ${t.line}` }}
        >
          {/* Tutup amplop: segitiga lebar + segel inisial di puncaknya */}
          <div className="relative" aria-hidden="true">
            <svg
              viewBox="0 0 100 30"
              preserveAspectRatio="none"
              className="block h-20 w-full"
            >
              <path
                d="M0 0 L50 29 L100 0"
                fill={flapFill}
                stroke={t.line}
                strokeWidth="0.6"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <span
              className={`${t.scriptFont} absolute bottom-0 left-1/2 flex size-12 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full text-lg shadow-md`}
              style={{ backgroundColor: t.accent, color: t.accentInk }}
            >
              {initials}
            </span>
          </div>
          <form
            className="space-y-3 px-6 pt-12 pb-6 sm:px-7"
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
          >
            <input
              required
              placeholder="Nama kamu"
              className="w-full rounded-xl px-4 py-3 text-sm outline-none"
              style={inputStyle}
            />
            <select
              required
              defaultValue=""
              className="w-full rounded-xl px-4 py-3 text-sm outline-none"
              style={inputStyle}
            >
              <option value="" disabled>
                Konfirmasi kehadiran
              </option>
              <option>Hadir</option>
              <option>Berhalangan hadir</option>
              <option>Masih ragu</option>
            </select>
            <textarea
              rows={3}
              placeholder="Tulis doa & ucapan untuk kedua mempelai…"
              className="w-full resize-none rounded-xl px-4 py-3 text-sm outline-none"
              style={inputStyle}
            />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium transition-opacity hover:opacity-85"
              style={{ backgroundColor: t.accent, color: t.accentInk }}
            >
              {sent ? (
                <Check className="size-4" />
              ) : (
                <Send className="size-4" />
              )}
              {sent ? "Terkirim — terima kasih!" : "Kirim Ucapan"}
            </button>
          </form>
        </div>
      </Reveal>
      <Reveal delay={160}>
        <div className="mx-auto mt-10 max-w-md space-y-4 text-left">
          {sampleWishes.map((w) => (
            <div
              key={w.name}
              className="rounded-2xl p-5"
              style={{ backgroundColor: t.bg, border: `1px solid ${t.line}` }}
            >
              <p
                className={`${t.headingFont} text-sm`}
                style={{ color: t.accent }}
              >
                {w.name}
              </p>
              <p
                className="mt-1.5 text-sm leading-relaxed"
                style={{ color: t.sub }}
              >
                {w.text}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  )
}
