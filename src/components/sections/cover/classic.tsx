import { useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"

import { getDecor } from "../decor"
import { prefersReducedMotion } from "../shared"
import type { SectionProps } from "../shared"

/**
 * Sampul klasik: foto hero layar penuh dengan parallax lembut — foto
 * bergeser lebih lambat dari scroll dan teks memudar perlahan.
 */
export function CoverClassic({ template }: SectionProps) {
  const t = template.theme
  const decor = getDecor(template)
  const imgRef = useRef<HTMLImageElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    let raf = 0
    const update = () => {
      raf = 0
      const y = window.scrollY
      const vh = window.innerHeight
      if (y > vh * 1.2) return
      if (imgRef.current) {
        imgRef.current.style.transform = `translate3d(0, ${y * 0.22}px, 0)`
      }
      if (textRef.current) {
        textRef.current.style.transform = `translate3d(0, ${y * 0.1}px, 0)`
        textRef.current.style.opacity = String(Math.max(0, 1 - y / (vh * 0.75)))
      }
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden text-center">
      <img
        ref={imgRef}
        src={template.hero}
        alt=""
        className="absolute inset-x-0 -top-[12%] h-[124%] w-full object-cover will-change-transform"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0"
        style={{
          background: t.dark
            ? "linear-gradient(to bottom, rgba(10,8,5,0.55), rgba(10,8,5,0.8))"
            : "linear-gradient(to bottom, rgba(30,20,20,0.35), rgba(30,20,20,0.6))",
        }}
      />
      {decor.CoverCorners && <decor.CoverCorners />}
      {decor.CoverBackdrop && <decor.CoverBackdrop />}
      <div ref={textRef} className="animate-fade-up relative px-6 text-white">
        {decor.CoverMark && <decor.CoverMark accent={t.accent} />}
        <p className={`${t.headingFont} text-sm tracking-[0.35em] uppercase`}>
          Undangan Pernikahan
        </p>
        <decor.CoverDivider />
        <h1
          className={`${t.scriptFont} text-6xl leading-tight sm:text-7xl md:text-8xl`}
        >
          {template.couple.groom} <span style={{ color: t.accent }}>&amp;</span>{" "}
          {template.couple.bride}
        </h1>
        <p className={`${t.headingFont} mt-8 text-lg tracking-widest`}>
          {template.dateLabel}
        </p>
        <ChevronDown className="mx-auto mt-12 size-7 animate-bounce text-white/80" />
      </div>
    </section>
  )
}
