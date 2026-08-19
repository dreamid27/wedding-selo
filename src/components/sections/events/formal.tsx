import { Fragment } from "react"
import { MapPin } from "lucide-react"

import { mapsUrl } from "./grid"
import { Reveal, SectionShell } from "../shared"
import type { SectionProps } from "../shared"

/**
 * Rangkaian acara sebagai kartu undangan formal tunggal: bingkai ganda
 * seperti undangan cetak, kedua acara bertumpuk dipisah garis ornamen.
 */
export function EventsFormal({ template }: SectionProps) {
  const t = template.theme
  return (
    <SectionShell
      template={template}
      eyebrow="Waktu & Tempat"
      title="Rangkaian Acara"
      alt
    >
      <Reveal>
        <div
          className="mx-auto max-w-lg rounded-3xl shadow-sm"
          style={{ backgroundColor: t.bg, border: `1px solid ${t.line}` }}
        >
          <div
            className="m-1.5 rounded-[1.125rem] px-6 py-10 sm:px-10 sm:py-12"
            style={{ border: `1px solid ${t.line}` }}
          >
            {template.events.map((e, i) => (
              <Fragment key={e.name}>
                {i > 0 && (
                  <div
                    className="ornament-line mx-auto my-9 w-16"
                    style={{ color: t.accent }}
                  />
                )}
                <div>
                  <h3
                    className={`${t.headingFont} text-2xl`}
                    style={{ color: t.accent }}
                  >
                    {e.name}
                  </h3>
                  <p
                    className="mt-3 text-sm tracking-[0.08em]"
                    style={{
                      color: t.sub,
                      fontVariant: "small-caps",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {template.dateLabel} · {e.time}
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
              </Fragment>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  )
}
