/**
 * Paket dekorasi per set `template.decor`.
 *
 * Cabang `template.decor === "javanese" ? … : …` yang dulu tersebar di
 * tiap section dikumpulkan di sini sebagai slot bernama. Section cukup
 * mengambil paketnya lewat getDecor() lalu merender slot yang tersedia —
 * varian layout baru otomatis cocok dengan semua set dekorasi.
 */
import { Heart } from "lucide-react"

import {
  CornerSpray,
  DaisyIcon,
  FallingPetals,
  FloralVineDivider,
  RoseBloomMark,
  RosebudIcon,
  petalStripPattern,
} from "@/components/ornaments/floral"
import {
  CundukMentulIcon,
  GebyokCorner,
  GongIcon,
  GununganMark,
  JasmineIcon,
  LungLunganDivider,
  TruntumFlowerIcon,
  kawungPattern,
} from "@/components/ornaments/javanese"
import type { WeddingTemplate } from "@/lib/templates"

/**
 * Slot dekorasi: komponen kecil yang menerima style (warna dari tema)
 * dan, untuk slot tertentu, warna aksen tema secara terpisah.
 */
type Slot = (props: {
  style?: React.CSSProperties
  accent?: string
}) => React.ReactNode

export type DecorPack = {
  /** Pembatas di bawah judul section (dipakai SectionShell) */
  SectionDivider: Slot
  /** Bingkai sudut halaman sampul (di atas foto, teks putih) */
  CoverCorners?: Slot
  /** Hiasan melayang di sampul (mis. kelopak gugur) */
  CoverBackdrop?: Slot
  /** Lambang + salam pembuka di sampul (accent = warna aksen tema) */
  CoverMark?: Slot
  /** Pembatas kecil di sampul (warna putih di atas foto) */
  CoverDivider: Slot
  /** Kalimat pembuka section mempelai */
  coupleIntro: string
  /** Ikon pemisah di antara kedua mempelai */
  CoupleSeparator: Slot
  /** Ikon simpul pada linimasa kisah cinta */
  StoryDot: Slot
  /** Pola strip dekoratif untuk tepi kartu (mis. kartu acara) */
  cardPattern?: (color: string) => string
  /** Ikon kecil di kartu acara */
  EventMark?: Slot
  /** Ikon kecil pembuka section Amplop Digital */
  GiftMark?: Slot
  /** Lambang besar di section penutup */
  ClosingMark?: Slot
  /** Judul ucapan terima kasih di section penutup */
  thanksTitle: string
  /** Baris aksara/doa di bawah judul penutup */
  ClosingScript?: Slot
  /** Hiasan latar section penutup (mis. kelopak gugur) */
  ClosingBackdrop?: Slot
}

const INTRO_DEFAULT =
  "Dengan penuh sukacita dan atas berkat rahmat Tuhan Yang Maha Esa, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di hari pernikahan kami."

const base: DecorPack = {
  SectionDivider: ({ style }) => (
    <div className="ornament-line mx-auto mt-5 mb-10 w-20" style={style} />
  ),
  CoverDivider: ({ style }) => (
    <div
      className="ornament-line mx-auto my-6 w-20 text-white/70"
      style={style}
    />
  ),
  coupleIntro: INTRO_DEFAULT,
  CoupleSeparator: ({ style }) => (
    <Heart className="mx-auto size-8" fill="currentColor" style={style} />
  ),
  StoryDot: ({ style }) => (
    <Heart className="size-3.5" fill="currentColor" style={style} />
  ),
  thanksTitle: "Terima Kasih",
}

const javanese: DecorPack = {
  SectionDivider: ({ style }) => (
    <LungLunganDivider className="mx-auto mt-4 mb-10 w-56" style={style} />
  ),
  CoverCorners: ({ style }) => (
    <div
      className="pointer-events-none absolute inset-3 z-10 text-white/60 sm:inset-5"
      aria-hidden="true"
      style={style}
    >
      <GebyokCorner className="absolute top-0 left-0 size-16 sm:size-24" />
      <GebyokCorner className="absolute top-0 right-0 size-16 -scale-x-100 sm:size-24" />
      <GebyokCorner className="absolute bottom-0 left-0 size-16 -scale-y-100 sm:size-24" />
      <GebyokCorner className="absolute right-0 bottom-0 size-16 -scale-100 sm:size-24" />
    </div>
  ),
  CoverMark: ({ accent }) => (
    <>
      <GununganMark
        className="mx-auto mb-5 h-20 w-auto"
        style={{ color: accent }}
      />
      <p
        className="mb-4 font-javanese text-lg text-white/85"
        lang="jv"
        title="Sugeng Rawuh — Selamat Datang"
      >
        ꧁ ꦱꦸꦒꦼꦁꦫꦮꦸꦃ ꧂
      </p>
    </>
  ),
  CoverDivider: ({ style }) => (
    <LungLunganDivider
      className="mx-auto my-4 w-52 text-white/80"
      style={style}
    />
  ),
  coupleIntro:
    "Kanthi raos syukur dhumateng Gusti Ingkang Maha Agung, kami bermaksud menyelenggarakan pawiwahan dan memohon kerawuhan Bapak/Ibu/Saudara/i untuk paring donga pangestu.",
  CoupleSeparator: ({ style }) => (
    <CundukMentulIcon className="mx-auto h-12 w-auto" style={style} />
  ),
  StoryDot: ({ style }) => (
    <TruntumFlowerIcon className="size-5.5" style={style} />
  ),
  cardPattern: kawungPattern,
  EventMark: ({ style }) => (
    <GongIcon className="mx-auto mb-3 size-9" style={style} />
  ),
  GiftMark: ({ style }) => (
    <JasmineIcon className="mx-auto mb-4 size-7" style={style} />
  ),
  ClosingMark: ({ style }) => (
    <GununganMark className="mx-auto mb-6 h-24 w-auto" style={style} />
  ),
  thanksTitle: "Matur Nuwun",
  ClosingScript: ({ style }) => (
    <p
      className="mt-3 font-javanese text-base"
      lang="jv"
      title="Mugi Gusti tansah paring berkah — Semoga Tuhan senantiasa melimpahkan berkah"
      style={style}
    >
      ꧅ ꦩꦸꦒꦶꦒꦸꦱ꧀ꦠꦶꦠꦤ꧀ꦱꦃꦥꦫꦶꦁꦧꦼꦂꦏꦃ ꧅
    </p>
  ),
}

const floral: DecorPack = {
  SectionDivider: ({ style }) => (
    <FloralVineDivider className="mx-auto mt-4 mb-10 w-56" style={style} />
  ),
  CoverCorners: ({ style }) => (
    <div
      className="pointer-events-none absolute inset-3 z-10 text-white/70 sm:inset-5"
      aria-hidden="true"
      style={style}
    >
      <CornerSpray className="absolute top-0 left-0 size-16 sm:size-24" />
      <CornerSpray className="absolute top-0 right-0 size-16 -scale-x-100 sm:size-24" />
      <CornerSpray className="absolute bottom-0 left-0 size-16 -scale-y-100 sm:size-24" />
      <CornerSpray className="absolute right-0 bottom-0 size-16 -scale-100 sm:size-24" />
    </div>
  ),
  CoverBackdrop: ({ style }) => (
    <FallingPetals count={12} className="z-10 text-white/55" style={style} />
  ),
  CoverMark: ({ style }) => (
    <RoseBloomMark
      className="animate-bloom mx-auto mb-5 h-20 w-auto text-white/90"
      style={style}
    />
  ),
  CoverDivider: ({ style }) => (
    <FloralVineDivider
      className="mx-auto my-4 w-56 text-white/80"
      style={style}
    />
  ),
  coupleIntro: INTRO_DEFAULT,
  CoupleSeparator: ({ style }) => (
    <RosebudIcon className="animate-sway mx-auto h-12 w-auto" style={style} />
  ),
  StoryDot: ({ style }) => <RosebudIcon className="h-5 w-auto" style={style} />,
  cardPattern: petalStripPattern,
  EventMark: ({ style }) => (
    <DaisyIcon className="mx-auto mb-3 size-9" style={style} />
  ),
  GiftMark: ({ style }) => (
    <RosebudIcon className="mx-auto mb-4 h-9 w-auto" style={style} />
  ),
  ClosingMark: ({ style }) => (
    <RoseBloomMark
      className="animate-sway mx-auto mb-6 h-24 w-auto"
      style={style}
    />
  ),
  thanksTitle: "Terima Kasih",
  ClosingBackdrop: ({ style }) => (
    <FallingPetals count={8} className="opacity-60" style={style} />
  ),
}

const packs: Record<NonNullable<WeddingTemplate["decor"]>, DecorPack> = {
  javanese,
  floral,
}

export function getDecor(template: WeddingTemplate): DecorPack {
  return template.decor ? packs[template.decor] : base
}
