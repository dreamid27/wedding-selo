import { useState } from "react"
import { Check, Copy } from "lucide-react"

import { getDecor } from "../decor"
import { Reveal, SectionShell } from "../shared"
import type { SectionProps } from "../shared"

/**
 * Amplop digital yang benar-benar berbentuk amplop: tutup segitiga
 * dengan segel inisial pasangan di ujungnya, isi surat berupa rekening.
 */
export function GiftEnvelope({ template }: SectionProps) {
  const t = template.theme
  const decor = getDecor(template)
  const [copied, setCopied] = useState<string | null>(null)
  const initials = `${template.couple.groom[0]}&${template.couple.bride[0]}`
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
      <Reveal delay={80}>
        {decor.GiftMark && <decor.GiftMark style={{ color: t.accent }} />}
        <p
          className="mx-auto max-w-md text-sm leading-relaxed"
          style={{ color: t.sub }}
        >
          Kehadiran dan doa restu adalah hadiah terindah bagi kami. Namun bila
          ingin memberikan tanda kasih, kami sediakan amplop digital berikut.
        </p>
      </Reveal>
      <div className="mx-auto mt-10 flex max-w-sm flex-col gap-7">
        {accounts.map((a, i) => (
          <Reveal key={a.bank} delay={i * 140}>
            <div
              className="relative overflow-hidden rounded-2xl shadow-sm"
              style={{
                backgroundColor: t.surface,
                border: `1px solid ${t.line}`,
              }}
            >
              {/* Tutup amplop segitiga */}
              <svg
                viewBox="0 0 100 26"
                preserveAspectRatio="none"
                className="block h-13 w-full"
                aria-hidden="true"
              >
                <polygon
                  points="-1,-1 101,-1 50,26"
                  fill={`color-mix(in srgb, ${t.accent} 20%, ${t.surface})`}
                  stroke={t.line}
                  strokeWidth="0.7"
                />
              </svg>
              {/* Segel inisial pasangan di ujung tutup */}
              <div
                aria-hidden="true"
                className={`${t.headingFont} absolute top-13 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-xs tracking-wide`}
                style={{
                  backgroundColor: t.accent,
                  color: t.accentInk,
                  boxShadow: `0 0 0 3px ${t.surface}`,
                }}
              >
                {initials}
              </div>
              <div className="px-6 pt-9 pb-6 text-left sm:px-7">
                <div className="flex items-center justify-between gap-3">
                  <p className={`${t.headingFont} text-lg`}>{a.bank}</p>
                  <span className="inline-flex h-9 items-center rounded-lg bg-white px-3 shadow-sm ring-1 ring-black/5">
                    <img
                      src={a.logo}
                      alt={`Logo Bank ${a.bank}`}
                      className="h-4 w-auto"
                      loading="lazy"
                    />
                  </span>
                </div>
                <p className="mt-3 font-mono text-lg tracking-wider">
                  {a.number}
                </p>
                <p className="mt-1 text-xs" style={{ color: t.sub }}>
                  a.n. {a.owner}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    void navigator.clipboard.writeText(a.number)
                    setCopied(a.bank)
                    setTimeout(() => setCopied(null), 2000)
                  }}
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-opacity hover:opacity-85"
                  style={{ backgroundColor: t.accent, color: t.accentInk }}
                >
                  {copied === a.bank ? (
                    <Check className="size-3.5" />
                  ) : (
                    <Copy className="size-3.5" />
                  )}
                  {copied === a.bank ? "Tersalin!" : "Salin Nomor"}
                </button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}
