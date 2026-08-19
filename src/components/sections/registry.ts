/**
 * Daftar terpusat semua section + varian layoutnya — dipakai panel editor
 * layout di halaman preview untuk menampilkan pilihan secara dinamis.
 * Varian baru yang didaftarkan di registry section otomatis muncul di sini.
 */
import { closingVariants } from "./closing"
import { countdownVariants } from "./countdown"
import { coupleVariants } from "./couple"
import { coverVariants } from "./cover"
import { eventsVariants } from "./events"
import { galleryVariants } from "./gallery"
import { giftVariants } from "./gift"
import { rsvpVariants } from "./rsvp"
import { storyVariants } from "./story"
import type { TemplateLayout } from "@/lib/templates"

/** Varian bawaan tiap section (dipakai saat template tidak memilih). */
export const defaultLayout: Required<TemplateLayout> = {
  cover: "classic",
  countdown: "cards",
  couple: "classic",
  story: "timeline",
  events: "grid",
  gallery: "masonry",
  rsvp: "classic",
  gift: "cards",
  closing: "classic",
}

export type SectionKey = keyof TemplateLayout

export const sectionRegistry: {
  key: SectionKey
  label: string
  variants: string[]
}[] = [
  { key: "cover", label: "Sampul", variants: Object.keys(coverVariants) },
  {
    key: "countdown",
    label: "Hitung Mundur",
    variants: Object.keys(countdownVariants),
  },
  { key: "couple", label: "Mempelai", variants: Object.keys(coupleVariants) },
  { key: "story", label: "Kisah Cinta", variants: Object.keys(storyVariants) },
  {
    key: "events",
    label: "Rangkaian Acara",
    variants: Object.keys(eventsVariants),
  },
  { key: "gallery", label: "Galeri", variants: Object.keys(galleryVariants) },
  { key: "rsvp", label: "RSVP & Ucapan", variants: Object.keys(rsvpVariants) },
  { key: "gift", label: "Amplop Digital", variants: Object.keys(giftVariants) },
  { key: "closing", label: "Penutup", variants: Object.keys(closingVariants) },
]
