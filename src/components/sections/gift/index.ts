/**
 * Registry varian layout section amplop digital.
 * Cara menambah varian: lihat catatan di countdown/index.ts.
 */
import { GiftCards } from "./cards"
import { GiftEnvelope } from "./envelope"
import { GiftFrame } from "./frame"
import { GiftLuxe } from "./luxe"
import { GiftMinimal } from "./minimal"
import type { SectionProps } from "../shared"
import type { TemplateLayout, WeddingTemplate } from "@/lib/templates"

type GiftVariant = NonNullable<TemplateLayout["gift"]>

export const giftVariants = {
  cards: GiftCards,
  luxe: GiftLuxe,
  minimal: GiftMinimal,
  envelope: GiftEnvelope,
  frame: GiftFrame,
} satisfies Record<GiftVariant, (props: SectionProps) => React.ReactNode>

/** Pilih varian amplop digital milik template (default: "cards"). */
export function resolveGift(template: WeddingTemplate) {
  return giftVariants[template.layout?.gift ?? "cards"]
}
