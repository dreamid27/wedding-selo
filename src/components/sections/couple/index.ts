/**
 * Registry varian layout section mempelai.
 * Cara menambah varian: lihat catatan di countdown/index.ts.
 */
import { CoupleClassic } from "./classic"
import { CoupleMedallion } from "./medallion"
import { CoupleOverlap } from "./overlap"
import { CoupleZigzag } from "./zigzag"
import type { SectionProps } from "../shared"
import type { TemplateLayout, WeddingTemplate } from "@/lib/templates"

type CoupleVariant = NonNullable<TemplateLayout["couple"]>

export const coupleVariants = {
  classic: CoupleClassic,
  zigzag: CoupleZigzag,
  medallion: CoupleMedallion,
  overlap: CoupleOverlap,
} satisfies Record<CoupleVariant, (props: SectionProps) => React.ReactNode>

/** Pilih varian mempelai milik template (default: "classic"). */
export function resolveCouple(template: WeddingTemplate) {
  return coupleVariants[template.layout?.couple ?? "classic"]
}
