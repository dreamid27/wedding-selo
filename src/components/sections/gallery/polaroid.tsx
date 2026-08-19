import { GalleryLightbox, useLightbox } from "./lightbox"
import { Reveal, SectionShell } from "../shared"
import type { SectionProps } from "../shared"

/** Rotasi kecil bergantian agar dinding polaroid terasa organik. */
const TILTS = [-2, 1.5, 3, -1]

/**
 * Galeri dinding polaroid: tiap foto berbingkai putih khas polaroid,
 * miring sedikit bergantian dan menegak saat disentuh.
 */
export function GalleryPolaroid({ template }: SectionProps) {
  const t = template.theme
  const lightbox = useLightbox(template.gallery.length)
  const altText = (i: number) =>
    `Foto ${template.couple.groom} dan ${template.couple.bride} ${i + 1}`

  return (
    <SectionShell template={template} eyebrow="Momen Kami" title="Galeri">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8">
        {template.gallery.map((src, i) => (
          <Reveal key={src + i} delay={(i % 3) * 90}>
            {/* Bingkai polaroid sengaja tetap putih di semua tema agar autentik */}
            <button
              type="button"
              onClick={() => lightbox.open(i)}
              className="relative block w-full rotate-[var(--tilt)] cursor-zoom-in bg-white p-2 pb-8 shadow-md transition-transform duration-300 hover:rotate-0"
              style={
                {
                  "--tilt": `${TILTS[i % TILTS.length]}deg`,
                } as React.CSSProperties
              }
              aria-label={`Perbesar ${altText(i)}`}
            >
              <img
                src={src}
                alt={altText(i)}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              <span
                className={`${t.scriptFont} absolute inset-x-0 bottom-1 text-center text-sm text-neutral-600`}
                aria-hidden="true"
              >
                Momen {String(i + 1).padStart(2, "0")}
              </span>
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
