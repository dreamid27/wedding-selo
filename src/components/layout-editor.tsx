import { useState } from "react"
import { Check, Copy, RotateCcw, SlidersHorizontal, X } from "lucide-react"

import { defaultLayout, sectionRegistry } from "@/components/sections/registry"
import type { TemplateLayout } from "@/lib/templates"

/**
 * Panel editor layout melayang di halaman preview: bereksperimen menukar
 * varian layout tiap section secara langsung. Pilihan hanya hidup di
 * memori halaman — tombol salin menghasilkan potongan `layout` yang bisa
 * ditempel ke templates.ts.
 */
export function LayoutEditor({
  baseLayout,
  override,
  onChange,
}: {
  /** Layout bawaan template (dari templates.ts) */
  baseLayout?: TemplateLayout
  /** Override pilihan pengguna di sesi ini */
  override: TemplateLayout
  onChange: (layout: TemplateLayout) => void
}) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const current = (key: keyof TemplateLayout) =>
    override[key] ?? baseLayout?.[key] ?? defaultLayout[key]

  const dirty = Object.keys(override).length > 0

  const copyConfig = () => {
    const entries = sectionRegistry
      .map((s) => [s.key, current(s.key)] as const)
      .filter(([key, value]) => value !== defaultLayout[key])
      .map(([key, value]) => `${key}: "${value}"`)
    const snippet =
      entries.length > 0
        ? `layout: { ${entries.join(", ")} },`
        : "// semua section memakai varian default — field layout tidak perlu"
    void navigator.clipboard.writeText(snippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed right-4 bottom-20 z-50 flex flex-col items-end gap-3 sm:bottom-24">
      {open && (
        <div
          data-lenis-prevent
          className="w-72 overflow-y-auto rounded-2xl bg-neutral-950/92 p-4 text-white shadow-2xl ring-1 ring-white/15 backdrop-blur-md"
          style={{ maxHeight: "min(30rem, calc(100svh - 14rem))" }}
        >
          <div className="mb-1 flex items-center justify-between">
            <p className="text-sm font-medium">Editor Layout</p>
            <div className="flex items-center gap-1">
              {dirty && (
                <button
                  type="button"
                  onClick={() => onChange({})}
                  title="Kembalikan ke layout bawaan template"
                  className="rounded-full p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <RotateCcw className="size-4" />
                </button>
              )}
              <button
                type="button"
                onClick={copyConfig}
                title="Salin konfigurasi layout untuk templates.ts"
                className="rounded-full p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                {copied ? (
                  <Check className="size-4 text-emerald-400" />
                ) : (
                  <Copy className="size-4" />
                )}
              </button>
            </div>
          </div>
          <p className="mb-3 text-xs text-white/55">
            Coba-coba varian layout tiap section. Perubahan hanya untuk sesi
            ini.
          </p>
          <div className="space-y-3.5">
            {sectionRegistry.map((s) => (
              <div key={s.key}>
                <p className="mb-1.5 text-[11px] tracking-[0.14em] text-white/60 uppercase">
                  {s.label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {s.variants.map((v) => {
                    const active = current(s.key) === v
                    return (
                      <button
                        key={v}
                        type="button"
                        onClick={() =>
                          onChange({
                            ...override,
                            [s.key]: v as never,
                          })
                        }
                        className={`rounded-full px-3 py-1 text-xs capitalize transition-colors ${
                          active
                            ? "bg-white font-medium text-neutral-900"
                            : "bg-white/10 text-white/80 hover:bg-white/20"
                        }`}
                      >
                        {v}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-full bg-neutral-950/92 px-4 py-2.5 text-sm font-medium text-white shadow-xl ring-1 ring-white/15 backdrop-blur-md transition-colors hover:bg-neutral-800"
      >
        {open ? (
          <X className="size-4" />
        ) : (
          <SlidersHorizontal className="size-4" />
        )}
        {open ? "Tutup" : "Layout"}
      </button>
    </div>
  )
}
