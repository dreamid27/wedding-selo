/**
 * Blok bersama untuk section halaman undangan.
 *
 * Setiap varian section menerima props `SectionProps` yang sama — kontrak
 * ini yang membuat varian layout mudah ditukar lewat `template.layout`
 * tanpa mengubah halaman pemanggilnya.
 */
import { useEffect, useRef, useState } from "react"

import { getDecor } from "./decor"
import type { WeddingTemplate } from "@/lib/templates"

/** Kontrak props standar semua varian section. */
export type SectionProps = { template: WeddingTemplate }

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

/** Pembungkus reveal-on-scroll: konten muncul lembut saat masuk viewport. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}

/** Kerangka section: eyebrow script + judul + pembatas sesuai set dekorasi. */
export function SectionShell({
  template,
  eyebrow,
  title,
  children,
  alt = false,
}: {
  template: WeddingTemplate
  eyebrow: string
  title: string
  children: React.ReactNode
  alt?: boolean
}) {
  const t = template.theme
  const decor = getDecor(template)
  return (
    <section
      className="px-6 py-16 sm:py-20"
      style={alt ? { backgroundColor: t.surface } : undefined}
    >
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className={`${t.scriptFont} text-3xl`} style={{ color: t.accent }}>
            {eyebrow}
          </p>
          <h2
            className={`${t.headingFont} mt-2 text-2xl tracking-wide sm:text-3xl`}
          >
            {title}
          </h2>
          <decor.SectionDivider style={{ color: t.accent }} />
        </Reveal>
        {children}
      </div>
    </section>
  )
}
