/**
 * Registry varian layout sampul undangan.
 * Cara menambah varian: lihat catatan di countdown/index.ts.
 */
import { CoverArch } from "./arch"
import { CoverClassic } from "./classic"
import { CoverEditorial } from "./editorial"
import { CoverSplit } from "./split"
import type { SectionProps } from "../shared"
import type { TemplateLayout, WeddingTemplate } from "@/lib/templates"

type CoverVariant = NonNullable<TemplateLayout["cover"]>

export const coverVariants = {
  classic: CoverClassic,
  split: CoverSplit,
  arch: CoverArch,
  editorial: CoverEditorial,
} satisfies Record<CoverVariant, (props: SectionProps) => React.ReactNode>

/** Pilih varian sampul milik template (default: "classic"). */
export function resolveCover(template: WeddingTemplate) {
  return coverVariants[template.layout?.cover ?? "classic"]
}
