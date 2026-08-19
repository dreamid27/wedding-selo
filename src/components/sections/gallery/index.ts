/**
 * Registry varian layout section galeri.
 * Cara menambah varian: lihat catatan di countdown/index.ts.
 */
import { GalleryFilmstrip } from "./filmstrip"
import { GalleryMasonry } from "./masonry"
import { GalleryMosaic } from "./mosaic"
import { GalleryPolaroid } from "./polaroid"
import type { SectionProps } from "../shared"
import type { TemplateLayout, WeddingTemplate } from "@/lib/templates"

type GalleryVariant = NonNullable<TemplateLayout["gallery"]>

export const galleryVariants = {
  masonry: GalleryMasonry,
  filmstrip: GalleryFilmstrip,
  mosaic: GalleryMosaic,
  polaroid: GalleryPolaroid,
} satisfies Record<GalleryVariant, (props: SectionProps) => React.ReactNode>

/** Pilih varian galeri milik template (default: "masonry"). */
export function resolveGallery(template: WeddingTemplate) {
  return galleryVariants[template.layout?.gallery ?? "masonry"]
}
