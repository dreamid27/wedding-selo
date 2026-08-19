/**
 * Registry varian layout section penutup.
 * Cara menambah varian: lihat catatan di countdown/index.ts.
 */
import { ClosingClassic } from "./classic"
import { ClosingMonogram } from "./monogram"
import { ClosingPortrait } from "./portrait"
import { ClosingSeal } from "./seal"
import { ClosingStrip } from "./strip"
import type { SectionProps } from "../shared"
import type { TemplateLayout, WeddingTemplate } from "@/lib/templates"

type ClosingVariant = NonNullable<TemplateLayout["closing"]>

export const closingVariants = {
  classic: ClosingClassic,
  portrait: ClosingPortrait,
  monogram: ClosingMonogram,
  seal: ClosingSeal,
  strip: ClosingStrip,
} satisfies Record<ClosingVariant, (props: SectionProps) => React.ReactNode>

/** Pilih varian penutup milik template (default: "classic"). */
export function resolveClosing(template: WeddingTemplate) {
  return closingVariants[template.layout?.closing ?? "classic"]
}
