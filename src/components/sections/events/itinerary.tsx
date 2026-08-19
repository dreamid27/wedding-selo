import { MapPin } from "lucide-react"

import { mapsUrl } from "./grid"
import { Reveal, SectionShell } from "../shared"
import type { SectionProps } from "../shared"

/** Pisahkan jam mulai dan selesai dari string waktu acara. */
const splitTime = (time: string) => time.split(/\s*[–—-]\s*/)

/**
 * Rangkaian acara sebagai agenda vertikal elegan: kolom waktu di kiri
 * dengan garis konektor putus-putus yang mengalir ke acara berikutnya.
 */
export function EventsItinerary({ template }: SectionProps) {
  const t = template.theme
  return (
    <SectionShell
      template={template}
      eyebrow="Waktu & Tempat"
      title="Rangkaian Acara"
      alt
    >
      <div className="mx-auto max-w-lg text-left">
        {template.events.map((e, i) => {
          const [start, end] = splitTime(e.time)
          const last = i === template.events.length - 1
          return (
            <Reveal key={e.name} delay={i * 120}>
              <div className="flex gap-6 sm:gap-8">
                <div className="flex w-20 shrink-0 flex-col items-end text-right sm:w-24">
                  <p
                    className={`${t.headingFont} text-xl leading-tight sm:text-2xl`}
                    style={{
                      color: t.accent,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {start}
                  </p>
                  {end && (
                    <p
                      className="mt-0.5 text-sm"
                      style={{
                        color: t.sub,
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {end}
                    </p>
                  )}
                  {!last && (
                    <div
                      aria-hidden="true"
                      className="mt-3 w-0 flex-1 self-center border-l border-dashed"
                      style={{ borderColor: t.line }}
                    />
                  )}
                </div>
                <div className={last ? "" : "pb-12"}>
                  <h3 className={`${t.headingFont} text-2xl`}>{e.name}</h3>
                  <p
                    className="mt-1.5 text-xs tracking-[0.18em] uppercase"
                    style={{ color: t.sub }}
                  >
                    {template.dateLabel}
                  </p>
                  <p className="mt-4 font-medium">{e.venue}</p>
                  <p className="mt-1 text-sm" style={{ color: t.sub }}>
                    {e.address}
                  </p>
                  <a
                    href={mapsUrl(e.venue, e.address)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-75"
                    style={{ color: t.accent }}
                  >
                    <MapPin className="size-4" />
                    Lihat Lokasi
                  </a>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </SectionShell>
  )
}
