import { useState } from "react"
import { Check, Copy } from "lucide-react"

import { getDecor } from "../decor"
import { Reveal, SectionShell } from "../shared"
import type { SectionProps } from "../shared"

/** Kelompokkan nomor rekening per 4 digit agar terbaca seperti kartu. */
const groupDigits = (n: string) => n.replace(/(\d{4})(?=\d)/g, "$1 ")

/**
 * Amplop digital bergaya kartu bank premium: gradasi warna aksen,
 * kilau cahaya lembut, dan nomor rekening tercetak seperti kartu sungguhan.
 */
export function GiftLuxe({ template }: SectionProps) {
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
      <div className="mx-auto mt-10 flex max-w-sm flex-col gap-6">
        {accounts.map((a, i) => (
          <Reveal key={a.bank} delay={i * 140}>
            <div
              className="relative overflow-hidden rounded-3xl p-6 text-left shadow-xl sm:p-7"
              style={{
                color: t.accentInk,
                background: `linear-gradient(135deg, color-mix(in srgb, ${t.accent} 82%, #fff) 0%, ${t.accent} 45%, color-mix(in srgb, ${t.accent} 70%, #000) 100%)`,
              }}
            >
              {/* Kilau lembut di sudut kartu */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 85% -20%, rgba(255,255,255,0.3), transparent 55%)",
                }}
              />
              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <p
                    className={`${t.headingFont} text-lg tracking-[0.15em] uppercase`}
                  >
                    {a.bank}
                  </p>
                  <span className="inline-flex h-8 items-center rounded-lg bg-white/95 px-2.5 shadow-sm">
                    <img
                      src={a.logo}
                      alt={`Logo Bank ${a.bank}`}
                      className="h-3.5 w-auto"
                      loading="lazy"
                    />
                  </span>
                </div>
                <p className="mt-9 font-mono text-xl tracking-[0.16em]">
                  {groupDigits(a.number)}
                </p>
                <div className="mt-7 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[10px] tracking-[0.25em] uppercase opacity-75">
                      Atas Nama
                    </p>
                    <p className="mt-0.5 text-sm font-medium">{a.owner}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      void navigator.clipboard.writeText(a.number)
                      setCopied(a.bank)
                      setTimeout(() => setCopied(null), 2000)
                    }}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/40 bg-white/15 px-4 py-1.5 text-xs font-medium backdrop-blur-sm transition-colors hover:bg-white/30"
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
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}
