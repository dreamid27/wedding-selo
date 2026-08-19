/**
 * Registry varian layout section rangkaian acara.
 * Cara menambah varian: lihat catatan di countdown/index.ts.
 */
import { EventsFormal } from "./formal"
import { EventsGrid } from "./grid"
import { EventsItinerary } from "./itinerary"
import { EventsTickets } from "./tickets"
import type { SectionProps } from "../shared"
import type { TemplateLayout, WeddingTemplate } from "@/lib/templates"

type EventsVariant = NonNullable<TemplateLayout["events"]>

export const eventsVariants = {
  grid: EventsGrid,
  itinerary: EventsItinerary,
  tickets: EventsTickets,
  formal: EventsFormal,
} satisfies Record<EventsVariant, (props: SectionProps) => React.ReactNode>

/** Pilih varian rangkaian acara milik template (default: "grid"). */
export function resolveEvents(template: WeddingTemplate) {
  return eventsVariants[template.layout?.events ?? "grid"]
}
