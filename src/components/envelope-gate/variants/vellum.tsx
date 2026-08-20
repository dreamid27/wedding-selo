import {
  GebyokCorner,
  GununganMark,
  kawungPattern,
  truntumPattern,
} from "@/components/ornaments/javanese"
import {
  CornerSpray,
  RoseBloomMark,
  roseTrellisPattern,
} from "@/components/ornaments/floral"
import {
  SigerCorner,
  SigerMark,
  kujangPattern,
  megamendungPattern,
} from "@/components/ornaments/sundanese"
import {
  MakassarCorner,
  PinisiMark,
  lipaSabbePattern,
  paBintangPattern,
} from "@/components/ornaments/makassar"
import {
  type GateProps,
  GuestBlock,
  SealButton,
  SparkleField,
  useGateTimer,
  useGuestName,
} from "../shared"

export function GateVellum({
  template,
  opening,
  onOpen,
  onOpened,
}: GateProps) {
  const t = template.theme
  const guest = useGuestName()
  useGateTimer(opening, onOpened, 3000)
  const initials = `${template.couple.groom[0]} & ${template.couple.bride[0]}`
  const pagePattern =
    template.decor === "javanese"
      ? truntumPattern(t.ink)
      : template.decor === "floral"
        ? roseTrellisPattern(t.ink)
        : template.decor === "sundanese"
          ? megamendungPattern(t.ink)
          : template.decor === "makassar"
            ? lipaSabbePattern(t.ink)
            : undefined
  const vellumPattern =
    template.decor === "javanese"
      ? kawungPattern(t.ink, 0.06)
      : template.decor === "floral"
        ? roseTrellisPattern(t.ink, 0.045)
        : template.decor === "sundanese"
          ? kujangPattern(t.ink, 0.055)
          : template.decor === "makassar"
            ? paBintangPattern(t.ink, 0.055)
            : undefined

  return (
    <div
      className={`env-gate env-gate--vellum fixed inset-0 z-40 overflow-y-auto ${opening ? "is-opening" : ""}`}
      style={{ backgroundColor: t.bg, color: t.ink, backgroundImage: pagePattern }}
    >
      <img
        src={template.hero}
        alt=""
        className="env-vellum-photo absolute inset-0 size-full object-cover"
        loading="eager"
        style={{ opacity: 0.92 }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: t.dark
            ? "linear-gradient(to bottom, rgba(10,8,6,0.48), rgba(10,8,6,0.72))"
            : "linear-gradient(to bottom, rgba(28,18,16,0.32), rgba(28,18,16,0.58))",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `radial-gradient(ellipse 70% 52% at 50% 46%, transparent 30%, ${t.ink}18 100%)`,
        }}
      />
      {template.decor === "javanese" ? (
        <div
          className="pointer-events-none absolute inset-3 top-14 bottom-16 z-10 sm:inset-5 sm:top-16"
          aria-hidden="true"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          <GebyokCorner className="absolute top-0 left-0 size-14 sm:size-20" />
          <GebyokCorner className="absolute top-0 right-0 size-14 -scale-x-100 sm:size-20" />
          <GebyokCorner className="absolute bottom-0 left-0 size-14 -scale-y-100 sm:size-20" />
          <GebyokCorner className="absolute right-0 bottom-0 size-14 -scale-100 sm:size-20" />
        </div>
      ) : template.decor === "floral" ? (
        <div
          className="pointer-events-none absolute inset-3 top-14 bottom-16 z-10 sm:inset-5 sm:top-16"
          aria-hidden="true"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          <CornerSpray className="absolute top-0 left-0 size-14 sm:size-20" />
          <CornerSpray className="absolute top-0 right-0 size-14 -scale-x-100 sm:size-20" />
          <CornerSpray className="absolute bottom-0 left-0 size-14 -scale-y-100 sm:size-20" />
          <CornerSpray className="absolute right-0 bottom-0 size-14 -scale-100 sm:size-20" />
        </div>
      ) : template.decor === "sundanese" ? (
        <div
          className="pointer-events-none absolute inset-3 top-14 bottom-16 z-10 sm:inset-5 sm:top-16"
          aria-hidden="true"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          <SigerCorner className="absolute top-0 left-0 size-14 sm:size-20" />
          <SigerCorner className="absolute top-0 right-0 size-14 -scale-x-100 sm:size-20" />
          <SigerCorner className="absolute bottom-0 left-0 size-14 -scale-y-100 sm:size-20" />
          <SigerCorner className="absolute right-0 bottom-0 size-14 -scale-100 sm:size-20" />
        </div>
      ) : template.decor === "makassar" ? (
        <div
          className="pointer-events-none absolute inset-3 top-14 bottom-16 z-10 sm:inset-5 sm:top-16"
          aria-hidden="true"
          style={{ color: "rgba(255,255,255,0.58)" }}
        >
          <MakassarCorner className="absolute top-0 left-0 size-14 sm:size-20" />
          <MakassarCorner className="absolute top-0 right-0 size-14 -scale-x-100 sm:size-20" />
          <MakassarCorner className="absolute bottom-0 left-0 size-14 -scale-y-100 sm:size-20" />
          <MakassarCorner className="absolute right-0 bottom-0 size-14 -scale-100 sm:size-20" />
        </div>
      ) : (
        <>
          <div
            className="pointer-events-none absolute inset-4 z-10 rounded-3xl border border-white/20"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-6 z-10 rounded-2xl border border-white/10"
            aria-hidden="true"
          />
        </>
      )}
      <SparkleField count={8} className="z-10" style={{ color: "rgba(255,255,255,0.9)" }} />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-lg flex-col items-center justify-center px-6 pt-14 pb-24">
        <div className="env-hint flex w-full justify-center">
          <div
            className="env-vellum-card relative w-full max-w-[360px] overflow-hidden rounded-2xl px-7 pt-9 pb-8 text-center"
            style={{
              backgroundColor: `color-mix(in srgb, ${t.bg} 78%, white 92%)`,
              backgroundImage: vellumPattern ? `${vellumPattern}` : undefined,
              border: `1px solid color-mix(in srgb, ${t.line} 65%, white)`,
              boxShadow: `0 24px 56px -16px ${t.ink}55, 0 1px 0 rgba(255,255,255,0.9) inset`,
              backdropFilter: "blur(14px) saturate(1.08)",
              WebkitBackdropFilter: "blur(14px) saturate(1.08)",
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-3 rounded-xl border"
              style={{ borderColor: `color-mix(in srgb, ${t.line} 55%, transparent)` }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-[1.05rem] rounded-lg border"
              style={{ borderColor: `color-mix(in srgb, ${t.accent} 16%, transparent)` }}
            />
            <div className="relative">
              {template.decor === "javanese" ? (
                <GununganMark className="mx-auto mb-4 h-12 w-auto" style={{ color: t.accent }} />
              ) : template.decor === "floral" ? (
                <RoseBloomMark className="mx-auto mb-4 h-12 w-auto" style={{ color: t.accent }} />
              ) : template.decor === "sundanese" ? (
                <SigerMark className="mx-auto mb-4 h-12 w-auto" style={{ color: t.accent }} />
              ) : template.decor === "makassar" ? (
                <PinisiMark className="mx-auto mb-4 h-10 w-auto sm:h-12" style={{ color: t.accent }} />
              ) : (
                <div
                  className="mx-auto mb-4 h-px w-12"
                  style={{ background: `linear-gradient(to right, transparent, ${t.accent}, transparent)` }}
                />
              )}
              <p className={`${t.headingFont} text-[0.62rem] tracking-[0.38em] uppercase`} style={{ color: t.sub }}>
                Undangan Pernikahan
              </p>
              <p className={`${t.scriptFont} mt-3 text-[2rem] leading-tight sm:text-[2.3rem]`} style={{ color: t.ink }}>
                {template.couple.groom} <span style={{ color: t.accent }}>&amp;</span> {template.couple.bride}
              </p>
              <div className="ornament-line mx-auto mt-3 mb-2 w-16" style={{ color: t.line }} />
              <p className={`${t.headingFont} text-[0.7rem] tracking-[0.2em]`} style={{ color: t.sub }}>
                {template.dateLabel}
              </p>
              <div className="mt-5 flex justify-center">
                <img
                  src={template.cover}
                  alt=""
                  className="h-20 w-20 rounded-full object-cover"
                  style={{ border: `2px solid ${t.line}`, boxShadow: `0 4px 12px ${t.ink}22` }}
                />
              </div>
            </div>
            <div className="absolute -bottom-7 left-1/2 z-10 -translate-x-1/2">
              <SealButton initials={initials} onOpen={onOpen} template={template} className="env-seal" size="size-14 text-lg" />
            </div>
          </div>
        </div>
        <div className="env-hint mt-12">
          <div
            className="rounded-full px-6 py-2 text-center backdrop-blur-md"
            style={{
              backgroundColor: "rgba(0,0,0,0.28)",
              border: "1px solid rgba(255,255,255,0.16)",
            }}
          >
            <GuestBlock guest={guest} onOpen={onOpen} template={template} light />
          </div>
        </div>
      </div>
    </div>
  )
}
