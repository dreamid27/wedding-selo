import { GalleryLightbox, useLightbox } from "./lightbox"
import { Reveal, SectionShell } from "../shared"
import type { SectionProps } from "../shared"

/**
 * Galeri strip film horizontal: foto berjajar dalam scroller snap,
 * digeser ke samping seperti gulungan negatif — klik untuk memperbesar.
 */
export function GalleryFilmstrip({ template }: SectionProps) {
  const t = template.theme
  const lightbox = useLightbox(template.gallery.length)
  const altText = (i: number) =>
    `Foto ${template.couple.groom} dan ${template.couple.bride} ${i + 1}`

  return (
    <SectionShell template={template} eyebrow="Momen Kami" title="Galeri">
      <Reveal>
        <div className="-mx-6 snap-x snap-mandatory [scrollbar-width:none] overflow-x-auto px-6 [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-3">
            {template.gallery.map((src, i) => (
              <button
                key={src + i}
                type="button"
                onClick={() => lightbox.open(i)}
                className="group relative shrink-0 cursor-zoom-in snap-center overflow-hidden rounded-2xl"
                aria-label={`Perbesar ${altText(i)}`}
              >
                <img
                  src={src}
                  alt={altText(i)}
                  loading="lazy"
                  className="h-64 w-auto object-cover transition-transform duration-500 group-hover:scale-105 sm:h-80"
                />
                <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
              </button>
            ))}
          </div>
        </div>
        <p className="mt-5 text-xs" style={{ color: t.sub }}>
          geser untuk melihat →
        </p>
      </Reveal>

      <GalleryLightbox
        images={template.gallery}
        altText={altText}
        lightbox={lightbox}
      />
    </SectionShell>
  )
}
