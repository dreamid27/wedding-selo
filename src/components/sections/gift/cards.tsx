import { useState } from "react"
import { Check, Copy } from "lucide-react"

import { getDecor } from "../decor"
import { Reveal, SectionShell } from "../shared"
import type { SectionProps } from "../shared"

/** Amplop digital sebagai kartu rekening berdampingan. */
export function GiftCards({ template }: SectionProps) {
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
      <div className="mx-auto mt-8 grid max-w-lg gap-4 sm:grid-cols-2">
        {accounts.map((a, i) => (
          <Reveal key={a.bank} delay={i * 120}>
            <div
              className="h-full rounded-2xl p-6 text-left"
              style={{
                backgroundColor: t.surface,
                border: `1px solid ${t.line}`,
              }}
            >
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
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}
