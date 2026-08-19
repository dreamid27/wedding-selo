import { useState } from "react"
import { Check, Copy } from "lucide-react"

import { getDecor } from "../decor"
import { Reveal, SectionShell } from "../shared"
import type { SectionProps } from "../shared"

/**
 * Amplop digital tanpa kartu: daftar baris tipografis murni yang dipisah
 * hairline — elegan justru karena kosongnya.
 */
export function GiftMinimal({ template }: SectionProps) {
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
      <div className="mx-auto mt-6 max-w-md">
        {accounts.map((a, i) => (
          <Reveal key={a.bank} delay={i * 120}>
            <div
              className="py-9"
              style={i > 0 ? { borderTop: `1px solid ${t.line}` } : undefined}
            >
              <p
                className="text-[11px] tracking-[0.35em] uppercase"
                style={{ color: t.sub }}
              >
                Bank {a.bank}
              </p>
              <p className="mt-3 font-mono text-2xl tracking-[0.18em] sm:text-3xl">
                {a.number}
              </p>
              <p className="mt-2 text-xs" style={{ color: t.sub }}>
                a.n. {a.owner}
              </p>
              <button
                type="button"
                onClick={() => {
                  void navigator.clipboard.writeText(a.number)
                  setCopied(a.bank)
                  setTimeout(() => setCopied(null), 2000)
                }}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium tracking-wide underline decoration-1 underline-offset-4 transition-opacity hover:opacity-75"
                style={{ color: t.accent }}
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
