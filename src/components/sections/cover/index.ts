/**
 * Registry varian layout sampul undangan.
 * Cara menambah varian: lihat catatan di countdown/index.ts.
 */
import { CoverArch } from "./arch"
import { CoverCascade } from "./cascade"
import { CoverClassic } from "./classic"
import { CoverEditorial } from "./editorial"
import { CoverHalo } from "./halo"
import { CoverHorizon } from "./horizon"
import { CoverInset } from "./inset"
import { CoverSplit } from "./split"
import { CoverVeil } from "./veil"
import type { SectionProps } from "../shared"
import type { TemplateLayout, WeddingTemplate } from "@/lib/templates"

type CoverVariant = NonNullable<TemplateLayout["cover"]>

export const coverVariants = {
  classic: CoverClassic,
  split: CoverSplit,
  arch: CoverArch,
  editorial: CoverEditorial,
  halo: CoverHalo,
  inset: CoverInset,
  veil: CoverVeil,
  cascade: CoverCascade,
  horizon: CoverHorizon,
} satisfies Record<CoverVariant, (props: SectionProps) => React.ReactNode>

/** Pilih varian sampul milik template (default: "classic"). */
export function resolveCover(template: WeddingTemplate) {
  return coverVariants[template.layout?.cover ?? "classic"]
}
