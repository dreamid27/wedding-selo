/**
 * Registry varian layout section hitung mundur.
 *
 * Menambah varian: buat file komponen baru di folder ini, daftarkan di
 * `countdownVariants`, dan tambahkan namanya ke union
 * `TemplateLayout["countdown"]` di lib/templates.ts.
 */
import { CountdownBand } from "./band"
import { CountdownCards } from "./cards"
import { CountdownFlip } from "./flip"
import { CountdownLine } from "./line"
import { CountdownRings } from "./rings"
import type { SectionProps } from "../shared"
import type { TemplateLayout, WeddingTemplate } from "@/lib/templates"

type CountdownVariant = NonNullable<TemplateLayout["countdown"]>

export const countdownVariants = {
  cards: CountdownCards,
  rings: CountdownRings,
  line: CountdownLine,
  flip: CountdownFlip,
  band: CountdownBand,
} satisfies Record<CountdownVariant, (props: SectionProps) => React.ReactNode>

/** Pilih varian hitung mundur milik template (default: "cards"). */
export function resolveCountdown(template: WeddingTemplate) {
  return countdownVariants[template.layout?.countdown ?? "cards"]
}
