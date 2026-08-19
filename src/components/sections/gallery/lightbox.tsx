import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

import { getLenis } from "@/lib/lenis"

/**
 * Lightbox galeri bersama: hook state pratinjau (buka/tutup/geser dengan
 * keyboard, kunci scroll body) + overlay perbesar foto yang dipakai
 * semua varian layout galeri.
 */
export function useLightbox(total: number) {
  const [preview, setPreview] = useState<number | null>(null)

  const open = useCallback((i: number) => setPreview(i), [])
  const close = useCallback(() => setPreview(null), [])
  const step = useCallback(
    (dir: number) =>
      setPreview((p) => (p === null ? p : (p + dir + total) % total)),
    [total]
  )

  useEffect(() => {
    if (preview === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") step(-1)
      if (e.key === "ArrowRight") step(1)
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    getLenis()?.stop()
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
      getLenis()?.start()
    }
  }, [preview, close, step])

  return { preview, open, close, step }
}

export type LightboxState = ReturnType<typeof useLightbox>

/** Overlay pratinjau foto: navigasi panah, tombol tutup, penghitung. */
export function GalleryLightbox({
  images,
  altText,
  lightbox,
}: {
  images: string[]
  altText: (i: number) => string
  lightbox: LightboxState
}) {
  const { preview, close, step } = lightbox
  if (preview === null) return null
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Pratinjau foto galeri"
      onClick={close}
    >
      <img
        src={images[preview]}
        alt={altText(preview)}
        className="max-h-[85svh] max-w-full rounded-xl object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        type="button"
        onClick={close}
        aria-label="Tutup pratinjau"
        className="absolute top-4 right-4 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/25"
      >
        <X className="size-5" />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          step(-1)
        }}
        aria-label="Foto sebelumnya"
        className="absolute left-3 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/25 sm:left-6"
      >
        <ChevronLeft className="size-6" />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          step(1)
        }}
        aria-label="Foto berikutnya"
        className="absolute right-3 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/25 sm:right-6"
      >
        <ChevronRight className="size-6" />
      </button>
      <p
        className="absolute bottom-5 text-sm text-white/80"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {preview + 1} / {images.length}
      </p>
    </div>
  )
}
