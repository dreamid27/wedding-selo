import { useState } from "react"
import { Check, Copy } from "lucide-react"

import { getDecor } from "../decor"
import { Reveal, SectionShell } from "../shared"
import type { SectionProps } from "../shared"

/**
 * Amplop digital sebagai satu kartu keepsake berbingkai ganda seperti
 * undangan cetak: dua rekening berdampingan di dalam satu pigura.
 */
export function GiftFrame({ template }: SectionProps) {
  const t = template.theme
  const decor = getDecor(template)
  const [copied, setCopied] = useState<string | null>(null)
  const accounts = [
    {
      bank: "BCA",
      logo: "/images/banks/bca.svg",
      number: "1234567890",
      owner: template.couple.groomFull,
    },
    {
      bank: "Mandiri",
      logo: "/images/banks/mandiri.svg",
      number: "0987654321",
      owner: template.couple.brideFull,
    },
  ]
  return (
    <SectionShell
      template={template}
      eyebrow="Tanda Kasih"
      title="Amplop Digital"
    >
      <Reveal delay={120}>
        <div
          className="mx-auto mt-2 max-w-lg rounded-2xl p-2 shadow-sm sm:p-2.5"
          style={{
            backgroundColor: t.surface,
            border: `1px solid ${t.line}`,
          }}
        >
          {/* Bingkai kedua ala undangan cetak */}
          <div
            className="rounded-xl px-6 py-8 sm:px-8"
            style={{ border: `1px solid ${t.line}` }}
          >
            {decor.GiftMark && <decor.GiftMark style={{ color: t.accent }} />}
            <p
              className="mx-auto max-w-sm text-sm leading-relaxed"
              style={{ color: t.sub }}
            >
              Kehadiran dan doa restu adalah hadiah terindah bagi kami. Namun
              bila ingin memberikan tanda kasih, kami sediakan amplop digital
              berikut.
            </p>
            <div className="mt-7 grid gap-6 sm:grid-cols-[1fr_1px_1fr] sm:gap-7">
              {accounts.map((a, i) => (
                <div key={a.bank} className="contents">
                  {i > 0 && (
                    <div
                      aria-hidden="true"
                      className="h-px w-full sm:h-full sm:w-px"
                      style={{ backgroundColor: t.line }}
                    />
                  )}
                  <div>
                    <span className="inline-flex h-9 items-center rounded-full bg-white px-4 shadow-sm ring-1 ring-black/5">
                      <img
                        src={a.logo}
                        alt={`Logo Bank ${a.bank}`}
                        className="h-4 w-auto"
                        loading="lazy"
                      />
                    </span>
                    <p className="mt-4 font-mono text-base tracking-[0.14em]">
                      {a.number}
                    </p>
                    <p className="mt-1.5 text-xs" style={{ color: t.sub }}>
                      a.n. {a.owner}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        void navigator.clipboard.writeText(a.number)
                        setCopied(a.bank)
                        setTimeout(() => setCopied(null), 2000)
                      }}
                      className="mt-4 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-opacity hover:opacity-85"
                      style={{ backgroundColor: t.accent, color: t.accentInk }}
                    >
                      {copied === a.bank ? (
                        <Check className="size-3.5" />
                      ) : (
                        <Copy className="size-3.5" />
                      )}
                      {copied === a.bank ? "Tersalin!" : "Salin"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  )
}
