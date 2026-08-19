/**
 * Smoke test semua varian layout section: setiap varian di registry harus
 * bisa dirender tanpa error untuk template ber-dekorasi (floral/jawa),
 * template polos, dan tema gelap. Varian baru otomatis ikut teruji.
 */
// @vitest-environment jsdom
import { cleanup, render } from "@testing-library/react"
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest"

import { sectionRegistry } from "./registry"
import { closingVariants } from "./closing"
import { countdownVariants } from "./countdown"
import { coupleVariants } from "./couple"
import { coverVariants } from "./cover"
import { eventsVariants } from "./events"
import { galleryVariants } from "./gallery"
import { giftVariants } from "./gift"
import { rsvpVariants } from "./rsvp"
import { storyVariants } from "./story"
import { getTemplate, templates } from "@/lib/templates"
import type { SectionProps } from "./shared"

// TanStack <Link> butuh router context — cukup di-mock jadi anchor biasa.
vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, ...props }: { children?: React.ReactNode }) => (
    <a {...props}>{children}</a>
  ),
}))

const variantsByKey: Record<
  string,
  Record<string, (props: SectionProps) => React.ReactNode>
> = {
  cover: coverVariants,
  countdown: countdownVariants,
  couple: coupleVariants,
  story: storyVariants,
  events: eventsVariants,
  gallery: galleryVariants,
  rsvp: rsvpVariants,
  gift: giftVariants,
  closing: closingVariants,
}

beforeAll(() => {
  // jsdom tidak punya IntersectionObserver/matchMedia yang dipakai Reveal.
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      observe() {}
      disconnect() {}
      unobserve() {}
    }
  )
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      onchange: null,
      dispatchEvent: () => false,
    }) as MediaQueryList
})

afterEach(cleanup)

// Satu template per karakter: floral, adat jawa, polos, dan tema gelap.
const sampleSlugs = [
  "fleurette",
  "sekar-keraton",
  "azure-minimal",
  "noir-elegante",
] as const

describe("registry varian section", () => {
  it("registry editor mencakup semua section dan variannya", () => {
    for (const s of sectionRegistry) {
      expect(variantsByKey[s.key], s.key).toBeDefined()
      expect(s.variants).toEqual(Object.keys(variantsByKey[s.key]))
    }
  })

  for (const [section, variants] of Object.entries(variantsByKey)) {
    for (const [name, Variant] of Object.entries(variants)) {
      it(`${section}/${name} dirender tanpa error`, () => {
        for (const slug of sampleSlugs) {
          const template = getTemplate(slug)
          expect(template, slug).toBeDefined()
          const { unmount } = render(<Variant template={template!} />)
          unmount()
        }
      })
    }
  }

  it("layout semua template menunjuk varian yang terdaftar", () => {
    for (const t of templates) {
      for (const [key, value] of Object.entries(t.layout ?? {})) {
        expect(
          Object.keys(variantsByKey[key] ?? {}),
          `${t.slug}: ${key}`
        ).toContain(value)
      }
    }
  })
})
