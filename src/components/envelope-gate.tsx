/**
 * Gerbang amplop — sampul undangan yang tampil pertama kali di halaman
 * preview. Undangan "tersegel" di dalam amplop 3D bersegel lilin; menekan
 * "Buka Undangan" (atau segelnya) memutar choreography membuka surat:
 *
 *   segel lilin pecah → tutup amplop berputar terbuka → surat terangkat
 *   keluar dari amplop → overlay memudar ke isi undangan.
 *
 * Ornamen mengambang (kelopak, melati, kerlip) dan pola kertas mengikuti
 * set dekorasi template. Nama tamu bisa dipersonalisasi lewat query `?to=`.
 * Seluruh animasi dinonaktifkan saat prefers-reduced-motion.
 */
import { useEffect, useState } from "react"
import { MailOpen } from "lucide-react"

import {
  GebyokCorner,
  GununganMark,
  JasmineIcon,
  kawungPattern,
  truntumPattern,
} from "@/components/ornaments/javanese"
import {
  CornerSpray,
  FallingPetals,
  RoseBloomMark,
  roseTrellisPattern,
} from "@/components/ornaments/floral"
import type { WeddingTemplate } from "@/lib/templates"

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

/** Kerlip bintang kecil yang melayang naik — hiasan ambient sampul. */
function SparkleField({
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

export function EnvelopeGate({
  template,
  opening,
  onOpen,
  onOpened,
}: {
  template: WeddingTemplate
  /** true saat choreography pembukaan sedang berjalan */
  opening: boolean
  /** Dipanggil saat pengguna menekan tombol/segel */
  onOpen: () => void
  /** Dipanggil setelah animasi selesai — gerbang boleh dilepas */
  onOpened: () => void
}) {
  const t = template.theme
  const [guest, setGuest] = useState<string | null>(null)

  // Personalisasi nama tamu dari query (?to=Nama) — hanya di klien agar
  // hasil render server dan klien tetap sama saat hydration.
  useEffect(() => {
    const to = new URLSearchParams(window.location.search).get("to")
    if (to?.trim()) setGuest(to.trim())
  }, [])

  useEffect(() => {
    if (!opening) return
    if (prefersReducedMotion()) {
      onOpened()
      return
    }
    const id = setTimeout(onOpened, 3000)
    return () => clearTimeout(id)
  }, [opening, onOpened])

  const initials = `${template.couple.groom[0]} & ${template.couple.bride[0]}`
  const pagePattern =
    template.decor === "javanese"
      ? truntumPattern(t.ink)
      : template.decor === "floral"
        ? roseTrellisPattern(t.ink)
        : undefined
  const flapPattern =
    template.decor === "javanese"
      ? kawungPattern(t.ink, 0.07)
      : template.decor === "floral"
        ? roseTrellisPattern(t.ink, 0.06)
        : undefined
  // Kertas amplop diturunkan dari warna tema agar setiap template serasi
  const paperEdge = `color-mix(in srgb, ${t.surface} 88%, ${t.ink})`
  const paperDeep = `color-mix(in srgb, ${t.surface} 72%, ${t.ink})`
  const interior = `color-mix(in srgb, ${t.surface} 62%, ${t.ink})`

  return (
    <div
      className={`env-gate fixed inset-0 z-40 overflow-y-auto ${opening ? "is-opening" : ""}`}
      style={{
        backgroundColor: t.bg,
        color: t.ink,
        backgroundImage: pagePattern,
      }}
    >
      {/* Cahaya lembut di belakang amplop */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `radial-gradient(ellipse 85% 60% at 50% 40%, ${t.accent}1A, transparent 70%)`,
        }}
      />

      {/* Bingkai sudut sesuai dekorasi template */}
      {template.decor === "javanese" ? (
        <div
          className="pointer-events-none absolute inset-x-3 top-15 bottom-18 sm:inset-x-5 sm:top-16"
          aria-hidden="true"
          style={{ color: `${t.accent}66` }}
        >
          <GebyokCorner className="absolute top-0 left-0 size-14 sm:size-20" />
          <GebyokCorner className="absolute top-0 right-0 size-14 -scale-x-100 sm:size-20" />
          <GebyokCorner className="absolute bottom-0 left-0 size-14 -scale-y-100 sm:size-20" />
          <GebyokCorner className="absolute right-0 bottom-0 size-14 -scale-100 sm:size-20" />
        </div>
      ) : template.decor === "floral" ? (
        <div
          className="pointer-events-none absolute inset-x-3 top-15 bottom-18 sm:inset-x-5 sm:top-16"
          aria-hidden="true"
          style={{ color: `${t.accent}73` }}
        >
          <CornerSpray className="absolute top-0 left-0 size-14 sm:size-20" />
          <CornerSpray className="absolute top-0 right-0 size-14 -scale-x-100 sm:size-20" />
          <CornerSpray className="absolute bottom-0 left-0 size-14 -scale-y-100 sm:size-20" />
          <CornerSpray className="absolute right-0 bottom-0 size-14 -scale-100 sm:size-20" />
        </div>
      ) : (
        <>
          <div
            className="pointer-events-none absolute inset-4 rounded-3xl border"
            aria-hidden="true"
            style={{ borderColor: `${t.accent}2E` }}
          />
          <div
            className="pointer-events-none absolute inset-6 rounded-2xl border"
            aria-hidden="true"
            style={{ borderColor: `${t.accent}1F` }}
          />
        </>
      )}

      {/* Ornamen melayang */}
      {template.decor === "floral" && (
        <FallingPetals count={14} style={{ color: `${t.accent}59` }} />
      )}
      {template.decor === "javanese" && (
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ color: `${t.accent}55` }}
        >
          <JasmineIcon className="animate-float-slow absolute top-[20%] left-[12%] size-6" />
          <JasmineIcon
            className="animate-float-slow absolute top-[30%] right-[14%] size-4"
            style={{ animationDelay: "1.4s" }}
          />
          <JasmineIcon
            className="animate-float-slow absolute bottom-[18%] left-[18%] size-5"
            style={{ animationDelay: "2.6s" }}
          />
          <JasmineIcon
            className="animate-float-slow absolute right-[20%] bottom-[24%] size-6"
            style={{ animationDelay: "3.8s" }}
          />
        </div>
      )}
      <SparkleField count={9} style={{ color: t.accent }} />

      <div className="relative mx-auto flex min-h-svh max-w-xl flex-col items-center justify-center px-6 pt-16 pb-24 text-center">
        {/* Kepala sampul */}
        <div className="env-hint">
          {template.decor === "javanese" ? (
            <GununganMark
              className="mx-auto mb-4 h-14 w-auto"
              style={{ color: t.accent }}
            />
          ) : template.decor === "floral" ? (
            <RoseBloomMark
              className="animate-bloom mx-auto mb-4 h-14 w-auto"
              style={{ color: t.accent }}
            />
          ) : null}
          <p
            className={`${t.headingFont} text-xs tracking-[0.35em] uppercase`}
            style={{ color: t.sub }}
          >
            Undangan Pernikahan
          </p>
          <p
            className={`${t.scriptFont} mt-3 text-5xl leading-tight sm:text-6xl`}
          >
            {template.couple.groom}{" "}
            <span style={{ color: t.accent }}>&amp;</span>{" "}
            {template.couple.bride}
          </p>
          <p
            className={`${t.headingFont} mt-3 text-sm tracking-[0.2em]`}
            style={{ color: t.sub }}
          >
            {template.dateLabel}
          </p>
        </div>

        {/* Amplop 3D */}
        <div
          className="env-float mt-9 mb-10 w-full"
          style={{ maxWidth: "min(84vw, 380px)" }}
        >
          <div style={{ perspective: "1200px" }}>
            <div className="relative" style={{ aspectRatio: "10 / 7" }}>
              {/* Bagian dalam amplop */}
              <div
                className="absolute inset-0 z-[1] rounded-xl"
                style={{
                  backgroundColor: interior,
                  boxShadow: `0 26px 50px -14px ${t.ink}4D`,
                }}
              />
              {/* Surat di dalam amplop — terangkat keluar saat dibuka */}
              <div
                className="env-letter absolute z-[2] overflow-hidden rounded-md text-center"
                style={{
                  left: "7%",
                  right: "7%",
                  top: "7%",
                  bottom: "6%",
                  backgroundColor: t.bg,
                  border: `1px solid ${t.line}`,
                  boxShadow: `0 8px 22px -10px ${t.ink}59`,
                }}
              >
                <img
                  src={template.cover}
                  alt=""
                  className="h-[52%] w-full object-cover"
                  loading="eager"
                />
                <p
                  className={`${t.scriptFont} mt-2 text-[1.35rem] leading-none`}
                  style={{ color: t.accent }}
                >
                  {template.couple.groom} &amp; {template.couple.bride}
                </p>
                <div
                  className="ornament-line mx-auto my-1.5 w-12"
                  style={{ color: t.line }}
                />
                <p
                  className="text-[0.6rem] tracking-[0.22em] uppercase"
                  style={{ color: t.sub }}
                >
                  {template.dateLabel}
                </p>
              </div>
              {/* Kantong depan amplop dengan takik V */}
              <div
                className="absolute inset-0 z-[3] rounded-xl"
                style={{
                  clipPath: "polygon(0 0, 50% 46%, 100% 0, 100% 100%, 0 100%)",
                  background: `linear-gradient(to bottom, ${paperDeep}, ${t.surface} 62%)`,
                  filter: `drop-shadow(0 -1.5px 1px ${t.ink}1F)`,
                }}
              />
              {/* Tutup amplop — berputar membuka pada engsel atas */}
              <div
                className="env-flap absolute inset-x-0 top-0 z-[4] h-[56%] rounded-t-xl"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  backgroundImage: flapPattern
                    ? `${flapPattern}, linear-gradient(to bottom, ${paperEdge}, ${paperDeep})`
                    : `linear-gradient(to bottom, ${paperEdge}, ${paperDeep})`,
                  transformOrigin: "top center",
                  filter: `drop-shadow(0 3px 4px ${t.ink}33)`,
                }}
              />
              {/* Segel lilin dengan monogram pasangan */}
              <div
                className="absolute z-[5]"
                style={{
                  left: "50%",
                  top: "56%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <button
                  type="button"
                  onClick={onOpen}
                  aria-label="Buka segel undangan"
                  className={`${t.scriptFont} env-seal flex size-16 cursor-pointer items-center justify-center pt-1 text-xl`}
                  style={{
                    backgroundColor: t.accent,
                    color: t.accentInk,
                    borderRadius: "48% 52% 51% 49% / 52% 47% 53% 48%",
                    boxShadow: `0 0 0 5px ${t.accent}26, 0 5px 16px ${t.accent}66, inset 0 2px 6px rgba(255,255,255,0.35), inset 0 -3px 6px rgba(0,0,0,0.28)`,
                  }}
                >
                  {initials}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Alamat tamu + tombol buka */}
        <div className="env-hint">
          <p
            className="text-[0.65rem] tracking-[0.28em] uppercase"
            style={{ color: t.sub }}
          >
            Kepada Yth. Bapak/Ibu/Saudara/i
          </p>
          <p className={`${t.headingFont} mt-2 text-xl`}>
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
      </div>
    </div>
  )
}
