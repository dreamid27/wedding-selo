import { GalleryLightbox, useLightbox } from "./lightbox"
import { Reveal, SectionShell } from "../shared"
import type { SectionProps } from "../shared"

/**
 * Galeri masonry (kolom bata) dengan lightbox: klik foto untuk
 * memperbesar, navigasi panah/keyboard, smooth scroll dijeda sementara.
 */
export function GalleryMasonry({ template }: SectionProps) {
  const lightbox = useLightbox(template.gallery.length)
  const altText = (i: number) =>
    `Foto ${template.couple.groom} dan ${template.couple.bride} ${i + 1}`

  return (
    <SectionShell template={template} eyebrow="Momen Kami" title="Galeri">
      <div className="columns-2 gap-3 sm:columns-3 sm:gap-4">
        {template.gallery.map((src, i) => (
          <Reveal
            key={src + i}
            delay={(i % 3) * 80}
            className="mb-3 break-inside-avoid sm:mb-4"
          >
            <button
              type="button"
              onClick={() => lightbox.open(i)}
              className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl"
              aria-label={`Perbesar ${altText(i)}`}
            >
              <img
                src={src}
                alt={altText(i)}
                loading="lazy"
                className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
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
