/**
 * Registry varian layout section kisah cinta.
 * Cara menambah varian: lihat catatan di countdown/index.ts.
 */
import { StoryCards } from "./cards"
import { StoryChapters } from "./chapters"
import { StoryLetter } from "./letter"
import { StoryTimeline } from "./timeline"
import type { SectionProps } from "../shared"
import type { TemplateLayout, WeddingTemplate } from "@/lib/templates"

type StoryVariant = NonNullable<TemplateLayout["story"]>

export const storyVariants = {
  timeline: StoryTimeline,
  chapters: StoryChapters,
  cards: StoryCards,
  letter: StoryLetter,
} satisfies Record<StoryVariant, (props: SectionProps) => React.ReactNode>

/** Pilih varian kisah cinta milik template (default: "timeline"). */
export function resolveStory(template: WeddingTemplate) {
  return storyVariants[template.layout?.story ?? "timeline"]
}
