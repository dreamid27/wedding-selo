import { Link } from "@tanstack/react-router"

import { getDecor } from "../decor"
import { Reveal } from "../shared"
import type { SectionProps } from "../shared"

/**
 * Penutup potret: foto pasangan memenuhi layar sebagai latar, ucapan
 * terima kasih tampil putih di atasnya — penutup yang sinematik.
 */
export function ClosingPortrait({ template }: SectionProps) {
  const t = template.theme
  const decor = getDecor(template)
  return (
    <section className="relative flex min-h-[82svh] items-center justify-center overflow-hidden px-6 py-24 text-center text-white">
      <img
        src={template.hero}
        alt=""
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background: t.dark
            ? "linear-gradient(to bottom, rgba(10,8,5,0.55), rgba(10,8,5,0.82))"
            : "linear-gradient(to bottom, rgba(24,14,18,0.45), rgba(24,14,18,0.72))",
        }}
      />
      {decor.ClosingBackdrop && (
        <decor.ClosingBackdrop style={{ color: "rgba(255,255,255,0.5)" }} />
      )}
      <Reveal className="relative max-w-2xl">
        {decor.ClosingMark && (
          <decor.ClosingMark style={{ color: "rgba(255,255,255,0.9)" }} />
        )}
        <p className={`${t.scriptFont} text-5xl sm:text-6xl`}>
          {decor.thanksTitle}
        </p>
        {decor.ClosingScript && (
          <decor.ClosingScript style={{ color: "rgba(255,255,255,0.75)" }} />
        )}
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/85">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
        </p>
        <div className="ornament-line mx-auto mt-10 w-24 text-white/60" />
        <p className={`${t.scriptFont} mt-8 text-4xl sm:text-5xl`}>
          {template.couple.groom} <span style={{ color: t.accent }}>&amp;</span>{" "}
          {template.couple.bride}
        </p>
        <p className="mt-12 pb-12 text-xs text-white/70">
          Undangan digital oleh{" "}
          <Link to="/" className="text-white underline underline-offset-2">
            Wedding Selo
          </Link>
        </p>
      </Reveal>
    </section>
  )
}
