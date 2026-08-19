import type Lenis from "lenis"

/**
 * Pemegang instance Lenis aktif di halaman preview. Dipisah ke modul kecil
 * agar section (mis. lightbox galeri) bisa menghentikan smooth scroll
 * sementara tanpa bergantung pada file route.
 */
let instance: Lenis | null = null

export function setLenis(l: Lenis | null) {
  instance = l
}

export function getLenis() {
  return instance
}
