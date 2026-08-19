import { useState } from "react"
import { Check, Heart, Send } from "lucide-react"

import { sampleWishes } from "./classic"
import { Reveal, SectionShell } from "../shared"
import type { SectionProps } from "../shared"

/**
 * RSVP buku tamu: formulir tipis di atas, lalu dinding ucapan berupa
 * kolase catatan yang sedikit miring bergantian seperti sticky note.
 */
export function RsvpGuestbook({ template }: SectionProps) {
  const t = template.theme
  const [sent, setSent] = useState(false)
  const inputStyle = {
    backgroundColor: t.surface,
    border: `1px solid ${t.line}`,
    color: t.ink,
  }
  const wall = Array.from({ length: 2 }).flatMap((_, dup) =>
    sampleWishes.map((w, i) => ({ ...w, key: `${dup}-${w.name}-${i}` }))
  )
  return (
    <SectionShell
      template={template}
      eyebrow="Doa & Kehadiran"
      title="RSVP & Ucapan"
      alt
    >
      <Reveal delay={80}>
        <form
          className="mx-auto max-w-md space-y-3 rounded-2xl p-5 text-left"
          style={{ backgroundColor: t.bg, border: `1px solid ${t.line}` }}
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
        >
          <div className="grid gap-3 sm:grid-cols-2">
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
          </div>
          <textarea
            rows={2}
            placeholder="Tinggalkan pesanmu di buku tamu…"
            className="w-full resize-none rounded-xl px-4 py-3 text-sm outline-none"
            style={inputStyle}
          />
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium transition-opacity hover:opacity-85"
            style={{ backgroundColor: t.accent, color: t.accentInk }}
          >
            {sent ? <Check className="size-4" /> : <Send className="size-4" />}
            {sent ? "Terkirim — terima kasih!" : "Kirim Ucapan"}
          </button>
        </form>
      </Reveal>
      <Reveal delay={160}>
        <div className="mx-auto mt-10 max-w-xl columns-2 gap-4 text-left">
          {wall.map((w, i) => (
            <div
              key={w.key}
              className="relative mb-4 break-inside-avoid rounded-xl p-4 shadow-sm"
              style={{
                backgroundColor: t.bg,
                border: `1px solid ${t.line}`,
                transform: `rotate(${i % 2 === 0 ? "-1.5deg" : "1deg"})`,
              }}
            >
              <Heart
                aria-hidden="true"
                className="absolute top-3 right-3 size-3"
                fill="currentColor"
                style={{ color: t.accent }}
              />
              <p
                className={`${t.headingFont} pr-5 text-xs`}
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
