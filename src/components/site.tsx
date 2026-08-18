import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-config"

/** Logo Wedding Selo: monogram cincin ganda + nama brand. */
export function Logo({
  className,
  light = false,
}: {
  className?: string
  light?: boolean
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 40 40"
        aria-hidden="true"
        className="size-9 shrink-0"
        fill="none"
      >
        <circle
          cx="16"
          cy="22"
          r="10.5"
          stroke={light ? "#E8C9A0" : "var(--gold)"}
          strokeWidth="2"
        />
        <circle
          cx="25"
          cy="18"
          r="10.5"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.85"
        />
        <path
          d="M25 4.5 27 7l-2 2.5L23 7l2-2.5Z"
          fill={light ? "#E8C9A0" : "var(--gold)"}
        />
      </svg>
      <span className="font-marcellus text-xl leading-none tracking-wide">
        Wedding{" "}
        <span className={light ? "text-[#E8C9A0]" : "text-gold"}>Selo</span>
      </span>
    </span>
  )
}

/** Ikon WhatsApp (tidak tersedia di lucide). */
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("size-5", className)}
    >
      <path d="M12.04 2a9.9 9.9 0 0 0-8.53 14.94L2 22l5.2-1.47A9.9 9.9 0 1 0 12.04 2Zm0 1.67a8.23 8.23 0 1 1-4.2 15.3l-.3-.18-3.08.87.88-3-.2-.31a8.23 8.23 0 0 1 6.9-12.68Zm-3.4 3.83c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.42 1.03 2.59.12.17 1.74 2.8 4.31 3.8 2.14.85 2.57.68 3.04.64.46-.04 1.5-.62 1.71-1.21.21-.6.21-1.1.15-1.21-.06-.11-.23-.17-.48-.3-.25-.12-1.5-.73-1.73-.82-.23-.08-.4-.12-.56.13-.17.25-.65.82-.8.99-.14.16-.29.19-.54.06a6.77 6.77 0 0 1-2-1.23 7.48 7.48 0 0 1-1.39-1.72c-.14-.25-.01-.39.11-.51.12-.12.25-.3.38-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.55-1.36-.77-1.86-.2-.48-.4-.42-.56-.43l-.58-.03Z" />
    </svg>
  )
}

/** Ikon Instagram (ikon brand tidak tersedia di lucide). */
export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-5", className)}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

/** Judul section landing page dengan ornamen. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: string
  className?: string
}) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      <p className="mb-3 text-sm font-medium tracking-[0.25em] text-gold uppercase">
        {eyebrow}
      </p>
      <h2 className="font-marcellus text-3xl text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-pretty text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
      <div className="ornament-line mx-auto mt-6 w-24 text-gold/60" />
    </div>
  )
}

export { siteConfig }
