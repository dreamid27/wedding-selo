/**
 * Helper SEO: membangun tag meta (judul, deskripsi, Open Graph, Twitter Card)
 * dan data terstruktur Schema.org untuk setiap halaman.
 */

import { siteConfig } from "./site-config"

type SeoInput = {
  title: string
  description: string
  /** Path relatif halaman, mis. "/template/eternal-rose" */
  path?: string
  /** Path gambar OG relatif terhadap situs, mis. "/og.png" */
  image?: string
  imageAlt?: string
}

/** URL absolut dari path relatif situs. */
export function absoluteUrl(path: string): string {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`
}

/** Bangun daftar tag meta lengkap (SEO + Open Graph + Twitter Card). */
export function seoMeta({
  title,
  description,
  path = "/",
  image = "/og.jpg",
  imageAlt = `${siteConfig.name} — ${siteConfig.tagline}`,
}: SeoInput) {
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "undangan pernikahan digital, undangan digital, undangan online, undangan pernikahan online, undangan website, digital wedding invitation, undangan nikah digital, wedding invitation Indonesia",
    },
    { name: "author", content: siteConfig.name },
    { name: "robots", content: "index, follow" },
    { name: "theme-color", content: "#B98A4E" },
    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: siteConfig.name },
    { property: "og:locale", content: "id_ID" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: imageUrl },
    { property: "og:image:alt", content: imageAlt },
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
    { name: "twitter:image:alt", content: imageAlt },
  ]
}

/** Tag <link rel="canonical"> untuk sebuah path. */
export function canonicalLink(path: string) {
  return { rel: "canonical", href: absoluteUrl(path) }
}

/** Bungkus objek Schema.org menjadi tag <script type="application/ld+json">. */
export function jsonLd(data: Record<string, unknown>) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data),
  }
}
