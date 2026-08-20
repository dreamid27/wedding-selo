/**
 * Registry varian layout section kutipan/ayat.
 * Cara menambah varian: lihat catatan di countdown/index.ts.
 */
import { QuoteBanner } from "./banner"
import { QuoteClassic } from "./classic"
import { QuoteFramed } from "./framed"
import { QuoteSplit } from "./split"
import { QuoteVignette } from "./vignette"
import type { SectionProps } from "../shared"
import type { TemplateLayout, WeddingTemplate } from "@/lib/templates"

type QuoteVariant = NonNullable<TemplateLayout["quote"]>

export const quoteVariants = {
  classic: QuoteClassic,
  framed: QuoteFramed,
  banner: QuoteBanner,
  split: QuoteSplit,
  vignette: QuoteVignette,
} satisfies Record<QuoteVariant, (props: SectionProps) => React.ReactNode>

/** Pilih varian kutipan milik template (default: "classic"). */
export function resolveQuote(template: WeddingTemplate) {
  return quoteVariants[template.layout?.quote ?? "classic"]
}
