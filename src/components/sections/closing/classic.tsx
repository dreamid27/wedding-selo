import { Link } from "@tanstack/react-router"

import { getDecor } from "../decor"
import { Reveal } from "../shared"
import type { SectionProps } from "../shared"

/** Penutup klasik: ucapan terima kasih, nama pasangan, dan kredit. */
export function ClosingClassic({ template }: SectionProps) {
  const t = template.theme
  const decor = getDecor(template)
  return (
    <section className="relative overflow-hidden px-6 py-20 text-center">
      {decor.ClosingBackdrop && (
        <decor.ClosingBackdrop style={{ color: t.accent }} />
      )}
      <Reveal className="relative mx-auto max-w-2xl">
        {decor.ClosingMark && <decor.ClosingMark style={{ color: t.accent }} />}
        <p
          className={`${t.scriptFont} text-4xl sm:text-5xl`}
          style={{ color: t.accent }}
        >
          {decor.thanksTitle}
        </p>
        {decor.ClosingScript && (
          <decor.ClosingScript style={{ color: t.sub }} />
        )}
        <p className="mt-5 text-sm leading-relaxed" style={{ color: t.sub }}>
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
