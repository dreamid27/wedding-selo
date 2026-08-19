import { GalleryLightbox, useLightbox } from "./lightbox"
import { Reveal, SectionShell } from "../shared"
import type { SectionProps } from "../shared"

/** Pola span bento yang berulang setiap 6 foto. */
const SPANS = [
  "col-span-2 row-span-2",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-2",
  "col-span-2 row-span-1",
]

/**
 * Galeri bento mosaic: grid rapat dengan ukuran sel bervariasi mengikuti
 * pola berulang — foto besar dan kecil saling mengunci seperti ubin.
 */
export function GalleryMosaic({ template }: SectionProps) {
  const lightbox = useLightbox(template.gallery.length)
  const altText = (i: number) =>
    `Foto ${template.couple.groom} dan ${template.couple.bride} ${i + 1}`

  return (
    <SectionShell template={template} eyebrow="Momen Kami" title="Galeri">
      <div className="grid auto-rows-[90px] grid-cols-4 gap-2 sm:auto-rows-[120px] sm:gap-3">
        {template.gallery.map((src, i) => (
          <Reveal
            key={src + i}
            delay={(i % 4) * 70}
            className={SPANS[i % SPANS.length]}
          >
            <button
              type="button"
              onClick={() => lightbox.open(i)}
              className="group relative block size-full cursor-zoom-in overflow-hidden rounded-xl"
              aria-label={`Perbesar ${altText(i)}`}
            >
              <img
                src={src}
                alt={altText(i)}
                loading="lazy"
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
            </button>
          </Reveal>
        ))}
      </div>

      <GalleryLightbox
        images={template.gallery}
        altText={altText}
        lightbox={lightbox}
      />
    </SectionShell>
  )
}
