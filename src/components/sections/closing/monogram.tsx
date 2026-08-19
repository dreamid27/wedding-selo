import { Link } from "@tanstack/react-router"

import { getDecor } from "../decor"
import { Reveal } from "../shared"
import type { SectionProps } from "../shared"

/**
 * Penutup monogram: lingkaran besar berisi inisial pasangan sebagai
 * titik hening penutup — minimal, lapang, dan tenang.
 */
export function ClosingMonogram({ template }: SectionProps) {
  const t = template.theme
  const decor = getDecor(template)
  return (
    <section className="relative overflow-hidden px-6 py-20 text-center sm:py-24">
      <Reveal className="relative mx-auto max-w-2xl">
        <div className="relative mx-auto flex size-40 items-center justify-center rounded-full sm:size-48">
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full"
            style={{ border: `1px solid ${t.line}` }}
          />
          <div
            aria-hidden="true"
            className="absolute -inset-2.5 rounded-full"
            style={{
              border: `1px solid color-mix(in srgb, ${t.line} 55%, transparent)`,
            }}
          />
          <p
            className={`${t.scriptFont} text-6xl sm:text-7xl`}
            style={{ color: t.accent }}
          >
            {template.couple.groom.charAt(0)}
            <span
              className="mx-1 text-3xl sm:text-4xl"
              style={{ color: t.sub }}
            >
              &amp;
            </span>
            {template.couple.bride.charAt(0)}
          </p>
        </div>
        <p
          className={`${t.scriptFont} mt-12 text-4xl sm:text-5xl`}
          style={{ color: t.accent }}
        >
          {decor.thanksTitle}
        </p>
        {decor.ClosingScript && (
          <decor.ClosingScript style={{ color: t.sub }} />
        )}
        <p
          className="mx-auto mt-6 max-w-md text-sm leading-relaxed"
          style={{ color: t.sub }}
        >
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
        </p>
        <p
          className={`${t.headingFont} mt-10 text-sm tracking-[0.3em] uppercase`}
          style={{ color: t.ink }}
        >
          {template.couple.groomFull} &amp; {template.couple.brideFull}
        </p>
        <div
          className="ornament-line mx-auto mt-12 mb-6 w-24"
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
