/**
 * Registry varian layout section RSVP & ucapan.
 * Cara menambah varian: lihat catatan di countdown/index.ts.
 */
import { RsvpClassic } from "./classic"
import { RsvpEnvelope } from "./envelope"
import { RsvpGuestbook } from "./guestbook"
import { RsvpSplit } from "./split"
import type { SectionProps } from "../shared"
import type { TemplateLayout, WeddingTemplate } from "@/lib/templates"

type RsvpVariant = NonNullable<TemplateLayout["rsvp"]>

export const rsvpVariants = {
  classic: RsvpClassic,
  envelope: RsvpEnvelope,
  split: RsvpSplit,
  guestbook: RsvpGuestbook,
} satisfies Record<RsvpVariant, (props: SectionProps) => React.ReactNode>

/** Pilih varian RSVP milik template (default: "classic"). */
export function resolveRsvp(template: WeddingTemplate) {
  return rsvpVariants[template.layout?.rsvp ?? "classic"]
}
