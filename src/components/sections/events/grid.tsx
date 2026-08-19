import { MapPin } from "lucide-react"

import { getDecor } from "../decor"
import { Reveal, SectionShell } from "../shared"
import type { SectionProps } from "../shared"

/** Tautan Google Maps untuk sebuah venue acara. */
export const mapsUrl = (venue: string, address: string) =>
  `https://maps.google.com/?q=${encodeURIComponent(`${venue} ${address}`)}`

/**
 * Rangkaian acara sebagai kartu berdampingan: strip pola dekoratif di
 * atas, ikon, waktu, venue, dan tombol lokasi.
 */
export function EventsGrid({ template }: SectionProps) {
  const t = template.theme
  const decor = getDecor(template)
  return (
    <SectionShell
      template={template}
      eyebrow="Waktu & Tempat"
      title="Rangkaian Acara"
      alt
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {template.events.map((e, i) => (
          <Reveal key={e.name} delay={i * 120}>
            <div
              className="h-full overflow-hidden rounded-3xl"
              style={{ backgroundColor: t.bg, border: `1px solid ${t.line}` }}
            >
              {decor.cardPattern && (
                <div
                  className="h-9 border-b"
                  style={{
                    backgroundImage: decor.cardPattern(t.accent),
                    borderColor: t.line,
                  }}
                  aria-hidden="true"
                />
              )}
              <div className="p-8">
                {decor.EventMark && (
                  <decor.EventMark style={{ color: t.accent }} />
                )}
                <h3
                  className={`${t.headingFont} text-2xl`}
                  style={{ color: t.accent }}
                >
                  {e.name}
                </h3>
                <p className={`${t.headingFont} mt-4`}>{template.dateLabel}</p>
                <p className="mt-1 text-sm" style={{ color: t.sub }}>
                  {e.time}
                </p>
                <div
                  className="ornament-line mx-auto my-5 w-16"
                  style={{ color: t.line }}
                />
                <p className="font-medium">{e.venue}</p>
                <p className="mt-1 text-sm" style={{ color: t.sub }}>
                  {e.address}
                </p>
                <a
                  href={mapsUrl(e.venue, e.address)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-85"
                  style={{ backgroundColor: t.accent, color: t.accentInk }}
                >
                  <MapPin className="size-4" />
                  Lihat Lokasi
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}
