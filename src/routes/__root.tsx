import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router"

import { Logo } from "@/components/site"
import { seoMeta, jsonLd } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"

import appCss from "../styles.css?url"

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/icon-512.png`,
  description: siteConfig.description,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jakarta",
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: `+${siteConfig.contact.whatsappNumber}`,
    email: siteConfig.contact.email,
    availableLanguage: ["Indonesian"],
  },
  sameAs: [`https://instagram.com/${siteConfig.contact.instagram}`],
}

const webSiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "id-ID",
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      ...seoMeta({
        title: `${siteConfig.name} — Undangan Pernikahan Digital Elegan, Modern & Berkesan`,
        description:
          "Buat undangan pernikahan digital yang elegan dan personal bersama Wedding Selo. Lengkap dengan RSVP, galeri foto, peta lokasi, musik, dan amplop digital. Selesai dalam 24 jam.",
        path: "/",
      }),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/manifest.json" },
    ],
    scripts: [jsonLd(organizationLd), jsonLd(webSiteLd)],
  }),
  notFoundComponent: NotFoundPage,
  errorComponent: ErrorPage,
  shellComponent: RootDocument,
})

/** Halaman 404 bermerek: arahkan pengunjung kembali ke beranda/katalog. */
function NotFoundPage() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background px-6 text-center">
      <Logo />
      <p className="font-marcellus text-7xl tracking-wide text-gold">404</p>
      <div className="space-y-2">
        <h1 className="font-marcellus text-2xl">Halaman tidak ditemukan</h1>
        <p className="max-w-md text-muted-foreground">
          Halaman yang kamu cari mungkin sudah dipindahkan atau tautannya
          salah ketik.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex h-10 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Kembali ke beranda
        </Link>
        <Link
          to="/"
          hash="template"
          className="inline-flex h-10 items-center rounded-full border px-6 text-sm font-medium transition-colors hover:bg-accent"
        >
          Lihat katalog template
        </Link>
      </div>
    </main>
  )
}

/** Halaman error tak terduga. */
function ErrorPage() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background px-6 text-center">
      <Logo />
      <div className="space-y-2">
        <h1 className="font-marcellus text-2xl">Terjadi kesalahan</h1>
        <p className="max-w-md text-muted-foreground">
          Maaf, ada yang tidak beres. Silakan muat ulang halaman atau kembali
          ke beranda.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="inline-flex h-10 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Muat ulang
        </button>
        <Link
          to="/"
          className="inline-flex h-10 items-center rounded-full border px-6 text-sm font-medium transition-colors hover:bg-accent"
        >
          Kembali ke beranda
        </Link>
      </div>
    </main>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
