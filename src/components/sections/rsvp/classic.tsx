import { useState } from "react"
import { Check, Send } from "lucide-react"

import { Reveal, SectionShell } from "../shared"
import type { SectionProps } from "../shared"

/** Contoh ucapan yang tampil di preview (data statis). */
export const sampleWishes = [
  {
    name: "Keluarga Besar Hartono",
    text: "Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.",
  },
  {
    name: "Rina & Dito",
    text: "Akhirnya! Bahagia selalu ya kalian berdua, sampai jumpa di hari H 🤍",
  },
]

/**
 * RSVP klasik: formulir satu kolom di atas, daftar ucapan sebagai kartu
 * bertumpuk di bawahnya.
 */
export function RsvpClassic({ template }: SectionProps) {
  const t = template.theme
  const [sent, setSent] = useState(false)
  const inputStyle = {
    backgroundColor: t.bg,
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
        <form
          className="mx-auto max-w-md space-y-3 text-left"
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
            {sent ? <Check className="size-4" /> : <Send className="size-4" />}
            {sent ? "Terkirim — terima kasih!" : "Kirim Ucapan"}
          </button>
        </form>
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
