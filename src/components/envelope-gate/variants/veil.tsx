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

export function GateVeil({
  template,
  opening,
  onOpen,
  onOpened,
}: GateProps) {
  const t = template.theme
  const guest = useGuestName()
  useGateTimer(opening, onOpened, 3200)
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
  const veilPattern =
    template.decor === "javanese"
      ? kawungPattern(t.ink, 0.045)
      : template.decor === "floral"
        ? roseTrellisPattern(t.ink, 0.035)
        : template.decor === "sundanese"
          ? kujangPattern(t.ink, 0.045)
          : template.decor === "makassar"
            ? paBintangPattern(t.ink, 0.045)
            : undefined

  return (
    <div
      className={`env-gate env-gate--veil fixed inset-0 z-40 overflow-y-auto ${opening ? "is-opening" : ""}`}
      style={{ backgroundColor: t.bg, color: t.ink, backgroundImage: pagePattern }}
    >
      <div className="absolute inset-0">
        <img src={template.hero} alt="" className="absolute inset-0 size-full object-cover" loading="eager" />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background: t.dark
              ? "linear-gradient(to bottom, rgba(12,10,8,0.42), rgba(12,10,8,0.68))"
              : "linear-gradient(to bottom, rgba(26,18,16,0.22), rgba(26,18,16,0.48))",
          }}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 45%, transparent 28%, ${t.ink}14 100%)`,
        }}
      />
      {template.decor === "javanese" ? (
        <div
          className="pointer-events-none absolute inset-3 top-14 bottom-16 z-10 sm:inset-5 sm:top-16"
          aria-hidden="true"
          style={{ color: "rgba(255,255,255,0.60)" }}
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
          style={{ color: "rgba(255,255,255,0.62)" }}
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
          style={{ color: "rgba(255,255,255,0.62)" }}
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
          style={{ color: "rgba(255,255,255,0.60)" }}
        >
          <MakassarCorner className="absolute top-0 left-0 size-14 sm:size-20" />
          <MakassarCorner className="absolute top-0 right-0 size-14 -scale-x-100 sm:size-20" />
          <MakassarCorner className="absolute bottom-0 left-0 size-14 -scale-y-100 sm:size-20" />
          <MakassarCorner className="absolute right-0 bottom-0 size-14 -scale-100 sm:size-20" />
        </div>
      ) : (
        <>
          <div className="pointer-events-none absolute inset-4 z-10 rounded-3xl border border-white/20" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-6 z-10 rounded-2xl border border-white/10" aria-hidden="true" />
        </>
      )}
      <SparkleField count={8} className="z-10" style={{ color: "rgba(255,255,255,0.92)" }} />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-lg flex-col items-center justify-center px-6 pt-14 pb-24">
        <div className="env-hint w-full">
          <div
            className="env-veil-stage relative mx-auto w-full max-w-[360px] overflow-hidden rounded-2xl"
            style={{
              backgroundColor: t.bg,
              border: `1px solid ${t.line}`,
              boxShadow: `0 20px 48px -16px ${t.ink}44, 0 1px 0 rgba(255,255,255,0.85) inset`,
            }}
          >
            <div className="px-6 pt-7 pb-6 text-center sm:px-7">
              <img
                src={template.cover}
                alt=""
                className="mx-auto h-[148px] w-full max-w-[280px] rounded-xl object-cover sm:h-[164px]"
                loading="eager"
                style={{ border: `1px solid ${t.line}` }}
              />
              <p className={`${t.scriptFont} mt-4 text-[1.45rem] leading-none`} style={{ color: t.accent }}>
                {template.couple.groom} &amp; {template.couple.bride}
              </p>
              <div className="ornament-line mx-auto my-2 w-12" style={{ color: t.line }} />
              <p className="text-[0.6rem] tracking-[0.22em] uppercase" style={{ color: t.sub }}>
                {template.dateLabel}
              </p>
              <p className={`${t.bodyFont} mx-auto mt-2 max-w-[28ch] text-xs leading-relaxed`} style={{ color: t.sub }}>
                {template.tagline}
              </p>
              <div className="mt-4 flex justify-center">
                <span
                  className="h-px w-12"
                  style={{ background: `linear-gradient(to right, transparent, ${t.accent}55, transparent)` }}
                />
              </div>
            </div>

            <div
              className="env-veil pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
              style={{
                backgroundColor: `color-mix(in srgb, ${t.surface} 92%, white)`,
                backgroundImage: veilPattern ? `${veilPattern}` : undefined,
                backdropFilter: "blur(10px) saturate(1.06)",
                WebkitBackdropFilter: "blur(10px) saturate(1.06)",
                border: `1px solid color-mix(in srgb, ${t.line} 55%, transparent)`,
              }}
              aria-hidden="true"
            >
              <div className="w-full max-w-[320px]">
                {template.decor === "javanese" ? (
                  <GununganMark className="mx-auto mb-3 h-11 w-auto" style={{ color: t.accent }} />
                ) : template.decor === "floral" ? (
                  <RoseBloomMark className="mx-auto mb-3 h-11 w-auto" style={{ color: t.accent }} />
                ) : template.decor === "sundanese" ? (
                  <SigerMark className="mx-auto mb-3 h-11 w-auto" style={{ color: t.accent }} />
                ) : template.decor === "makassar" ? (
                  <PinisiMark className="mx-auto mb-3 h-10 w-auto sm:h-11" style={{ color: t.accent }} />
                ) : (
                  <div
                    className="mx-auto mb-3 h-px w-10"
                    style={{ background: `linear-gradient(to right, transparent, ${t.accent}, transparent)` }}
                  />
                )}
                <p className={`${t.headingFont} text-[0.58rem] tracking-[0.34em] uppercase`} style={{ color: t.sub }}>
                  Undangan Pernikahan
                </p>
                <p className={`${t.scriptFont} mt-2 text-[1.9rem] leading-none sm:text-[2.1rem]`} style={{ color: t.ink }}>
                  {template.couple.groom} <span style={{ color: t.accent }}>&amp;</span> {template.couple.bride}
                </p>
                <div className="ornament-line mx-auto mt-2.5 w-10" style={{ color: t.line }} />
                <p className={`${t.headingFont} mt-2 text-[0.62rem] tracking-[0.22em]`} style={{ color: t.sub }}>
                  {template.dateLabel}
                </p>
                <div
                  className="mx-auto mt-3 size-1 rounded-full"
                  style={{ backgroundColor: t.accent, opacity: 0.9 }}
                />
              </div>

              <div className="absolute inset-x-6 top-3 flex justify-between opacity-30">
                <span className="size-1 rounded-full" style={{ backgroundColor: t.accent }} />
                <span className="size-1 rounded-full" style={{ backgroundColor: t.accent }} />
              </div>
              <div className="absolute inset-x-6 bottom-3 flex justify-between opacity-30">
                <span className="size-1 rounded-full" style={{ backgroundColor: t.accent }} />
                <span className="size-1 rounded-full" style={{ backgroundColor: t.accent }} />
              </div>

              <div
                className="pointer-events-none absolute inset-3 rounded-xl border"
                aria-hidden="true"
                style={{ borderColor: `color-mix(in srgb, ${t.line} 65%, transparent)` }}
              />
              <div
                className="pointer-events-none absolute inset-[1.05rem] rounded-lg border"
                aria-hidden="true"
                style={{ borderColor: `color-mix(in srgb, ${t.accent} 14%, transparent)` }}
              />
            </div>

            <div className="env-veil-seal absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <SealButton initials={initials} onOpen={onOpen} template={template} className="env-seal" size="size-14 text-base" />
            </div>
          </div>
        </div>

        <div className="env-hint mt-8">
          <div
            className="rounded-full px-5 py-2 text-center text-sm backdrop-blur-md"
            style={{
              backgroundColor: "rgba(0,0,0,0.30)",
              border: "1px solid rgba(255,255,255,0.16)",
              color: "white",
            }}
          >
            <GuestBlock guest={guest} onOpen={onOpen} template={template} light />
          </div>
        </div>
      </div>
    </div>
  )
}
