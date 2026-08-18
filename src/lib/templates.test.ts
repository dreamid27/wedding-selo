import { existsSync } from "node:fs"
import { join } from "node:path"
import { describe, expect, it } from "vitest"

import { absoluteUrl, canonicalLink, seoMeta } from "./seo"
import { siteConfig, waLink } from "./site-config"
import { getTemplate, templates } from "./templates"

const publicDir = join(__dirname, "../../public")

describe("templates", () => {
  it("memiliki slug yang unik", () => {
    const slugs = templates.map((t) => t.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it("bisa dicari lewat getTemplate", () => {
    for (const t of templates) {
      expect(getTemplate(t.slug)).toBe(t)
    }
    expect(getTemplate("tidak-ada")).toBeUndefined()
  })

  it("semua gambar yang dirujuk ada di public/", () => {
    for (const t of templates) {
      for (const img of [
        t.cover,
        t.hero,
        t.couple.groomPhoto,
        t.couple.bridePhoto,
        ...t.gallery,
      ]) {
        expect(existsSync(join(publicDir, img)), `${t.slug}: ${img}`).toBe(true)
      }
    }
  })
})

describe("seo", () => {
  it("membangun URL absolut", () => {
    expect(absoluteUrl("/template/x")).toBe(`${siteConfig.url}/template/x`)
    expect(canonicalLink("/").href).toBe(`${siteConfig.url}/`)
  })

  it("menghasilkan meta OG & Twitter yang konsisten", () => {
    const meta = seoMeta({ title: "Judul", description: "Deskripsi" })
    const og = Object.fromEntries(
      meta
        .filter((m) => "property" in m)
        .map((m) => [(m as { property: string }).property, m.content])
    )
    expect(og["og:title"]).toBe("Judul")
    expect(og["og:image"]).toBe(`${siteConfig.url}/og.jpg`)
    expect(og["og:url"]).toBe(`${siteConfig.url}/`)
  })

  it("gambar OG default tersedia di public/", () => {
    expect(existsSync(join(publicDir, "og.jpg"))).toBe(true)
  })
})

describe("kontak", () => {
  it("waLink mengarah ke nomor WhatsApp yang benar", () => {
    const link = waLink("Halo")
    expect(link).toBe(
      `https://wa.me/${siteConfig.contact.whatsappNumber}?text=Halo`
    )
  })
})
