import { useEffect, useState } from "react"
import { MailOpen } from "lucide-react"
import type { WeddingTemplate } from "@/lib/templates"

export type GateProps = {
  template: WeddingTemplate
  opening: boolean
  onOpen: () => void
  onOpened: () => void
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

export function useGateTimer(
  opening: boolean,
  onOpened: () => void,
  ms = 3000,
) {
  useEffect(() => {
    if (!opening) return
    if (prefersReducedMotion()) {
      onOpened()
      return
    }
    const id = setTimeout(onOpened, ms)
    return () => clearTimeout(id)
  }, [opening, onOpened, ms])
}

export function useGuestName() {
  const [guest, setGuest] = useState<string | null>(null)
  useEffect(() => {
    const to = new URLSearchParams(window.location.search).get("to")
    if (to?.trim()) setGuest(to.trim())
  }, [])
  return guest
}

export function SparkleField({
  count = 10,
  className = "",
  style,
}: {
  count?: number
  className?: string
  style?: React.CSSProperties
}) {
  const stars = Array.from({ length: count }, (_, i) => ({
    left: `${(i * 89) % 100}%`,
    top: `${8 + ((i * 61) % 84)}%`,
    delay: `${((i * 47) % 80) / 10}s`,
    duration: `${5 + ((i * 31) % 40) / 10}s`,
    size: 6 + ((i * 37) % 8),
  }))
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={style}
      aria-hidden="true"
    >
      {stars.map((s, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="animate-sparkle absolute"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        >
          <path d="M12 0 C13 7 17 11 24 12 C17 13 13 17 12 24 C11 17 7 13 0 12 C7 11 11 7 12 0 Z" />
        </svg>
      ))}
    </div>
  )
}

export function GuestBlock({
  guest,
  onOpen,
  template,
  light = false,
}: {
  guest: string | null
  onOpen: () => void
  template: WeddingTemplate
  light?: boolean
}) {
  const t = template.theme
  return (
    <div className="text-center">
      <p
        className="text-[0.65rem] tracking-[0.28em] uppercase"
        style={{ color: light ? "rgba(255,255,255,0.72)" : t.sub }}
      >
        Kepada Yth. Bapak/Ibu/Saudara/i
      </p>
      <p
        className={`${template.theme.headingFont} mt-2 text-xl`}
        style={{ color: light ? "#fff" : t.ink }}
      >
        {guest ?? "Tamu Undangan"}
      </p>
      <button
        type="button"
        onClick={onOpen}
        className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full px-8 py-3 text-sm font-medium transition-transform duration-300 hover:scale-[1.04]"
        style={{
          backgroundColor: t.accent,
          color: t.accentInk,
          boxShadow: `0 12px 26px -10px ${t.accent}B3`,
        }}
      >
        <MailOpen className="size-4" />
        Buka Undangan
      </button>
    </div>
  )
}

export function SealButton({
  initials,
  onOpen,
  template,
  className = "",
  size = "size-16 text-xl",
}: {
  initials: string
  onOpen: () => void
  template: WeddingTemplate
  className?: string
  size?: string
}) {
  const t = template.theme
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label="Buka segel undangan"
      className={`${t.scriptFont} flex cursor-pointer items-center justify-center pt-1 ${size} ${className}`}
      style={{
        backgroundColor: t.accent,
        color: t.accentInk,
        borderRadius: "48% 52% 51% 49% / 52% 47% 53% 48%",
        boxShadow: `0 0 0 5px ${t.accent}26, 0 5px 16px ${t.accent}66, inset 0 2px 6px rgba(255,255,255,0.35), inset 0 -3px 6px rgba(0,0,0,0.28)`,
      }}
    >
      {initials}
    </button>
  )
}
