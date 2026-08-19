import { MapPin } from "lucide-react"

import { mapsUrl } from "./grid"
import { Reveal, SectionShell } from "../shared"
import type { SectionProps } from "../shared"

/** Jam mulai dari string waktu acara (sebelum tanda pisah). */
const startTime = (time: string) => time.split(/\s*[–—-]\s*/)[0]

/**
 * Rangkaian acara sebagai tiket undangan: stub jam di kiri, garis
 * perforasi putus-putus dengan lubang sobekan, lalu detail acara.
 */
export function EventsTickets({ template }: SectionProps) {
  const t = template.theme
  return (
    <SectionShell
      template={template}
      eyebrow="Waktu & Tempat"
      title="Rangkaian Acara"
      alt
    >
      <div className="mx-auto flex max-w-xl flex-col gap-6">
        {template.events.map((e, i) => (
          <Reveal key={e.name} delay={i * 140}>
            <div
              className="relative flex overflow-hidden rounded-2xl text-left shadow-sm"
              style={{ backgroundColor: t.bg, border: `1px solid ${t.line}` }}
            >
              {/* Stub tiket: jam & tanggal */}
              <div
                className="flex w-28 shrink-0 flex-col items-center justify-center gap-3 px-3 py-8 text-center sm:w-32"
                style={{
                  backgroundColor: `color-mix(in srgb, ${t.accent} 12%, ${t.bg})`,
                }}
              >
                <p
                  className={`${t.headingFont} text-2xl sm:text-3xl`}
                  style={{
                    color: t.accent,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {startTime(e.time)}
                </p>
                <p
                  className="text-[10px] leading-relaxed tracking-[0.14em] uppercase"
                  style={{ color: t.sub }}
                >
                  {template.dateLabel.split(", ").map((part) => (
                    <span key={part} className="block">
                      {part}
                    </span>
                  ))}
                </p>
              </div>

              {/* Garis perforasi + lubang sobekan */}
              <div
                aria-hidden="true"
                className="relative w-0 border-l border-dashed"
                style={{ borderColor: t.line }}
              >
                <span
                  className="absolute -top-2 -left-2 size-4 rounded-full"
                  style={{
                    backgroundColor: t.surface,
                    border: `1px solid ${t.line}`,
                  }}
                />
                <span
                  className="absolute -bottom-2 -left-2 size-4 rounded-full"
                  style={{
                    backgroundColor: t.surface,
                    border: `1px solid ${t.line}`,
                  }}
                />
              </div>

              {/* Badan tiket: detail acara */}
              <div className="flex min-w-0 flex-1 flex-col items-start justify-center p-5 sm:p-7">
                <h3
                  className={`${t.headingFont} text-xl sm:text-2xl`}
                  style={{ color: t.accent }}
                >
                  {e.name}
                </h3>
                <p className="mt-2 text-sm font-medium">{e.venue}</p>
                <p className="mt-1 text-xs" style={{ color: t.sub }}>
                  {e.address}
                </p>
                <a
                  href={mapsUrl(e.venue, e.address)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-opacity hover:opacity-85"
                  style={{ backgroundColor: t.accent, color: t.accentInk }}
                >
                  <MapPin className="size-3.5" />
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
