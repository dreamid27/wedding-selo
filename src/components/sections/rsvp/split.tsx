import { useState } from "react"
import { Check, Send } from "lucide-react"

import { sampleWishes } from "./classic"
import { Reveal, SectionShell } from "../shared"
import type { SectionProps } from "../shared"

/**
 * RSVP dua kolom: kartu formulir di kiri, panel ucapan bergaya percakapan
 * yang bisa discroll sendiri di kanan — terasa hidup seperti ruang obrolan.
 */
export function RsvpSplit({ template }: SectionProps) {
  const t = template.theme
  const [sent, setSent] = useState(false)
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
      <div className="grid gap-8 text-left lg:grid-cols-2">
        <Reveal delay={80}>
          <div
            className="rounded-3xl p-6"
            style={{ backgroundColor: t.bg, border: `1px solid ${t.line}` }}
          >
            <p
              className={`${t.headingFont} text-xs tracking-[0.25em] uppercase`}
              style={{ color: t.accent }}
            >
              Konfirmasi Kehadiran
            </p>
            <form
              className="mt-5 space-y-3"
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
          <div>
            <p
              className={`${t.headingFont} text-xs tracking-[0.25em] uppercase`}
              style={{ color: t.accent }}
            >
              Ucapan Hangat
            </p>
            <div
              data-lenis-prevent
              className="mt-5 max-h-80 space-y-3 overflow-y-auto pr-1"
            >
              {Array.from({ length: 3 }).flatMap((_, dup) =>
                sampleWishes.map((w) => (
                  <div
                    key={`${dup}-${w.name}`}
                    className="rounded-2xl rounded-tl-sm p-4"
                    style={{
                      backgroundColor: t.bg,
                      border: `1px solid ${t.line}`,
                    }}
                  >
                    <p
                      className={`${t.headingFont} text-xs`}
                      style={{ color: t.accent }}
                    >
                      {w.name}
                    </p>
                    <p
                      className="mt-1 text-sm leading-relaxed"
                      style={{ color: t.sub }}
                    >
                      {w.text}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  )
}
