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
import {
  AngklungIcon,
  CempakaIcon,
  DriftingClouds,
  FallingCempaka,
  KujangIcon,
  MegaMendungDivider,
  SigerCorner,
  SigerMark,
  SulurDivider,
  kujangPattern,
} from "@/components/ornaments/sundanese"
import {
  BadikIcon,
  BintangIcon,
  DriftingPinisi,
  FallingBintang,
  LipaWaveDivider,
  MakassarCorner,
  PakarenaDivider,
  PakarenaFanIcon,
  PinisiMark,
  paBintangPattern,
} from "@/components/ornaments/makassar"
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

const sundanese: DecorPack = {
  SectionDivider: ({ style }) => (
    <SulurDivider className="mx-auto mt-4 mb-10 w-56" style={style} />
  ),
  CoverCorners: ({ style }) => (
    <div
      className="pointer-events-none absolute inset-3 z-10 text-white/65 sm:inset-5"
      aria-hidden="true"
      style={style}
    >
      <SigerCorner className="absolute top-0 left-0 size-16 sm:size-24" />
      <SigerCorner className="absolute top-0 right-0 size-16 -scale-x-100 sm:size-24" />
      <SigerCorner className="absolute bottom-0 left-0 size-16 -scale-y-100 sm:size-24" />
      <SigerCorner className="absolute right-0 bottom-0 size-16 -scale-100 sm:size-24" />
    </div>
  ),
  CoverBackdrop: ({ style }) => (
    <>
      <DriftingClouds count={4} className="z-10 text-white/40" style={style} />
      <FallingCempaka count={8} className="z-10 text-white/50" style={style} />
    </>
  ),
  CoverMark: ({ accent }) => (
    <>
      <SigerMark
        className="animate-bloom mx-auto mb-4 h-20 w-auto"
        style={{ color: accent }}
      />
      <p
        className="mb-4 font-sundanese text-lg text-white/85"
        lang="su"
        title="Wilujeng Sumping — Selamat Datang"
      >
        ᮝᮤᮜᮥᮏᮨᮀ ᮞᮥᮙ᮪ᮕᮤᮀ
      </p>
    </>
  ),
  CoverDivider: ({ style }) => (
    <MegaMendungDivider className="mx-auto my-4 w-52 text-white/80" style={style} />
  ),
  coupleIntro:
    "Kalayan rahmat sareng widi ti Gusti Nu Maha Suci, kami badé ngayakeun patepung lawung ngariung sareng ngahaturkeun uleman ka Bapak/Ibu/Sadérék pikeun nyaksénan milangkala kabagjaan kami.",
  CoupleSeparator: ({ style }) => (
    <KujangIcon className="mx-auto h-11 w-auto" style={style} />
  ),
  StoryDot: ({ style }) => (
    <CempakaIcon className="size-5.5" style={style} />
  ),
  cardPattern: kujangPattern,
  EventMark: ({ style }) => (
    <AngklungIcon className="mx-auto mb-3 size-10" style={style} />
  ),
  GiftMark: ({ style }) => (
    <CempakaIcon className="mx-auto mb-4 size-7" style={style} />
  ),
  ClosingMark: ({ style }) => (
    <SigerMark className="mx-auto mb-6 h-24 w-auto" style={style} />
  ),
  thanksTitle: "Hatur Nuhun",
  ClosingScript: ({ style }) => (
    <p
      className="mt-3 font-sundanese text-base"
      lang="su"
      title="Hatur nuhun — Terima kasih"
      style={style}
    >
      ᮠᮒᮥᮁ ᮔᮥᮠᮥᮔ᮪
    </p>
  ),
  ClosingBackdrop: ({ style }) => (
    <FallingCempaka count={8} className="opacity-60" style={style} />
  ),
}

const makassar: DecorPack = {
  SectionDivider: ({ style }) => (
    <PakarenaDivider className="mx-auto mt-4 mb-10 w-56" style={style} />
  ),
  CoverCorners: ({ style }) => (
    <div
      className="pointer-events-none absolute inset-3 z-10 text-white/68 sm:inset-5"
      aria-hidden="true"
      style={style}
    >
      <MakassarCorner className="absolute top-0 left-0 size-16 sm:size-24" />
      <MakassarCorner className="absolute top-0 right-0 size-16 -scale-x-100 sm:size-24" />
      <MakassarCorner className="absolute bottom-0 left-0 size-16 -scale-y-100 sm:size-24" />
      <MakassarCorner className="absolute right-0 bottom-0 size-16 -scale-100 sm:size-24" />
    </div>
  ),
  CoverBackdrop: ({ style }) => (
    <>
      <DriftingPinisi count={3} className="z-10 text-white/38" style={style} />
      <FallingBintang count={9} className="z-10 text-white/50" style={style} />
    </>
  ),
  CoverMark: ({ accent }) => (
    <>
      <PinisiMark
        className="animate-bloom mx-auto mb-4 h-[4.4rem] w-auto sm:h-20"
        style={{ color: accent }}
      />
      <p
        className="mb-4 font-makassar text-[1.05rem] tracking-[0.18em] text-white/88"
        lang="mak"
        title="Salamakki — Selamat Datang"
      >
        ᨔᨒᨆᨀᨗ
      </p>
    </>
  ),
  CoverDivider: ({ style }) => (
    <LipaWaveDivider className="mx-auto my-4 w-52 text-white/80" style={style} />
  ),
  coupleIntro:
    "Dengan memohon rahmat dan rida Allah Subhanahu wa Ta'ala, kami bermaksud menyelenggarakan walimatul 'ursy seraya memohon doa dan kehadiran Bapak/Ibu/Saudara/i — salamakki' tapada salama'.",
  CoupleSeparator: ({ style }) => (
    <PakarenaFanIcon className="animate-sway mx-auto h-11 w-auto" style={style} />
  ),
  StoryDot: ({ style }) => <BintangIcon className="size-5.5" style={style} />,
  cardPattern: paBintangPattern,
  EventMark: ({ style }) => (
    <BadikIcon className="mx-auto mb-3 size-10" style={style} />
  ),
  GiftMark: ({ style }) => (
    <BintangIcon className="mx-auto mb-4 size-7" style={style} />
  ),
  ClosingMark: ({ style }) => (
    <PinisiMark className="mx-auto mb-6 h-24 w-auto" style={style} />
  ),
  thanksTitle: "Tarima Kasi'",
  ClosingScript: ({ style }) => (
    <p
      className="mt-3 font-makassar text-base tracking-wide"
      lang="mak"
      title="Tarima Kasi' — Terima Kasih"
      style={style}
    >
      ᨈᨑᨗᨆ ᨀᨔᨗ
    </p>
  ),
  ClosingBackdrop: ({ style }) => (
    <FallingBintang count={8} className="opacity-60" style={style} />
  ),
}

const packs: Record<NonNullable<WeddingTemplate["decor"]>, DecorPack> = {
  javanese,
  floral,
  sundanese,
  makassar,
}

export function getDecor(template: WeddingTemplate): DecorPack {
  return template.decor ? packs[template.decor] : base
}
