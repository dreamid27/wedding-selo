import { Link } from "@tanstack/react-router"

import { getDecor } from "../decor"
import { Reveal } from "../shared"
import type { SectionProps } from "../shared"

/**
 * Penutup strip foto: tiga foto kecil saling bertumpuk miring seperti
 * cetakan yang diletakkan di meja, sebagai finale kenangan.
 */
export function ClosingStrip({ template }: SectionProps) {
  const t = template.theme
  const decor = getDecor(template)
  const photos = template.gallery.slice(0, 3)
  const rotations = ["-4deg", "0deg", "4deg"]
  return (
    <section className="relative overflow-hidden px-6 py-20 text-center">
      {decor.ClosingBackdrop && (
        <decor.ClosingBackdrop style={{ color: t.accent }} />
      )}
      <Reveal className="relative mx-auto max-w-2xl">
        {decor.ClosingMark && <decor.ClosingMark style={{ color: t.accent }} />}
        <div className="flex items-center justify-center">
          {photos.map((src, i) => (
            <img
              key={src + i}
              src={src}
              alt={`Foto ${template.couple.groom} dan ${template.couple.bride} ${i + 1}`}
              loading="lazy"
              className={`aspect-[3/4] w-24 rounded-xl object-cover shadow-lg sm:w-32 ${
                i > 0 ? "-ml-4 sm:-ml-5" : ""
              } ${i === 1 ? "relative z-10" : ""}`}
              style={{
                transform: `rotate(${rotations[i]})`,
                border: `3px solid ${t.bg}`,
              }}
            />
          ))}
        </div>
        <p
          className={`${t.scriptFont} mt-10 text-4xl sm:text-5xl`}
          style={{ color: t.accent }}
        >
          {decor.thanksTitle}
        </p>
        {decor.ClosingScript && (
          <decor.ClosingScript style={{ color: t.sub }} />
        )}
        <p
          className="mx-auto mt-5 max-w-md text-sm leading-relaxed"
          style={{ color: t.sub }}
        >
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
        </p>
        <p className={`${t.headingFont} mt-8 text-2xl`}>
          {template.couple.groom} &amp; {template.couple.bride}
        </p>
        <div
          className="ornament-line mx-auto mt-10 mb-6 w-24"
          style={{ color: t.line }}
        />
        <p className="pb-16 text-xs" style={{ color: t.sub }}>
          Undangan digital oleh{" "}
          <Link
            to="/"
            className="underline underline-offset-2"
            style={{ color: t.accent }}
          >
            Wedding Selo
          </Link>
        </p>
      </Reveal>
    </section>
  )
}
