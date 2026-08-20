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

export function GateCurtain({
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
  const curtainPattern =
    template.decor === "javanese"
      ? kawungPattern(t.accent, 0.1)
      : template.decor === "floral"
        ? roseTrellisPattern(t.accent, 0.08)
        : template.decor === "sundanese"
          ? kujangPattern(t.accent, 0.09)
          : template.decor === "makassar"
            ? paBintangPattern(t.accent, 0.09)
            : undefined

  const pleat = `repeating-linear-gradient(90deg, transparent 0 18px, ${t.ink}0A 18px 19px, transparent 19px 36px)`

  return (
    <div
      className={`env-gate env-gate--curtain fixed inset-0 z-40 overflow-hidden ${opening ? "is-opening" : ""}`}
      style={{ backgroundColor: t.bg, color: t.ink, backgroundImage: pagePattern }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `radial-gradient(ellipse 80% 58% at 50% 38%, ${t.accent}14, transparent 70%)`,
        }}
      />
      {template.decor === "javanese" ? (
        <div
          className="pointer-events-none absolute inset-x-3 top-15 bottom-18 z-20 sm:inset-x-5 sm:top-16"
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
          className="pointer-events-none absolute inset-x-3 top-15 bottom-18 z-20 sm:inset-x-5 sm:top-16"
          aria-hidden="true"
          style={{ color: `${t.accent}60` }}
        >
          <CornerSpray className="absolute top-0 left-0 size-14 sm:size-20" />
          <CornerSpray className="absolute top-0 right-0 size-14 -scale-x-100 sm:size-20" />
          <CornerSpray className="absolute bottom-0 left-0 size-14 -scale-y-100 sm:size-20" />
          <CornerSpray className="absolute right-0 bottom-0 size-14 -scale-100 sm:size-20" />
        </div>
      ) : template.decor === "sundanese" ? (
        <div
          className="pointer-events-none absolute inset-x-3 top-15 bottom-18 z-20 sm:inset-x-5 sm:top-16"
          aria-hidden="true"
          style={{ color: `${t.accent}60` }}
        >
          <SigerCorner className="absolute top-0 left-0 size-14 sm:size-20" />
          <SigerCorner className="absolute top-0 right-0 size-14 -scale-x-100 sm:size-20" />
          <SigerCorner className="absolute bottom-0 left-0 size-14 -scale-y-100 sm:size-20" />
          <SigerCorner className="absolute right-0 bottom-0 size-14 -scale-100 sm:size-20" />
        </div>
      ) : template.decor === "makassar" ? (
        <div
          className="pointer-events-none absolute inset-x-3 top-15 bottom-18 z-20 sm:inset-x-5 sm:top-16"
          aria-hidden="true"
          style={{ color: `${t.accent}60` }}
        >
          <MakassarCorner className="absolute top-0 left-0 size-14 sm:size-20" />
          <MakassarCorner className="absolute top-0 right-0 size-14 -scale-x-100 sm:size-20" />
          <MakassarCorner className="absolute bottom-0 left-0 size-14 -scale-y-100 sm:size-20" />
          <MakassarCorner className="absolute right-0 bottom-0 size-14 -scale-100 sm:size-20" />
        </div>
      ) : (
        <>
          <div
            className="pointer-events-none absolute inset-4 z-20 rounded-3xl border"
            aria-hidden="true"
            style={{ borderColor: `${t.accent}1E` }}
          />
          <div
            className="pointer-events-none absolute inset-6 z-20 rounded-2xl border"
            aria-hidden="true"
            style={{ borderColor: `${t.accent}14` }}
          />
        </>
      )}
      <SparkleField count={7} style={{ color: t.accent }} />

      <div className="relative flex min-h-svh flex-col items-center justify-center px-6 pt-14 pb-24">
        <div className="env-hint text-center">
          {template.decor === "javanese" ? (
            <GununganMark className="mx-auto mb-4 h-11 w-auto" style={{ color: t.accent }} />
          ) : template.decor === "floral" ? (
            <RoseBloomMark className="mx-auto mb-4 h-11 w-auto" style={{ color: t.accent }} />
          ) : template.decor === "sundanese" ? (
            <SigerMark className="mx-auto mb-4 h-11 w-auto" style={{ color: t.accent }} />
          ) : template.decor === "makassar" ? (
            <PinisiMark className="mx-auto mb-4 h-10 w-auto sm:h-11" style={{ color: t.accent }} />
          ) : null}
          <p className={`${t.headingFont} text-[0.62rem] tracking-[0.36em] uppercase`} style={{ color: t.sub }}>
            Undangan Pernikahan
          </p>
          <p className={`${t.scriptFont} mt-2.5 text-[2rem] leading-none sm:text-[2.45rem]`}>
            {template.couple.groom} <span style={{ color: t.accent }}>&amp;</span> {template.couple.bride}
          </p>
          <p className={`${t.headingFont} mt-2 text-[0.7rem] tracking-[0.2em]`} style={{ color: t.sub }}>
            {template.dateLabel}
          </p>
        </div>

        <div className="relative mt-8 w-full max-w-[360px]">
          <div
            className="relative overflow-hidden rounded-2xl border bg-white text-center"
            style={{
              backgroundColor: t.bg,
              borderColor: t.line,
              boxShadow: `0 22px 48px -18px ${t.ink}45`,
            }}
          >
            <div className="env-curtain-card relative">
              <img src={template.cover} alt="" className="h-[168px] w-full object-cover sm:h-[190px]" loading="eager" />
              <div className="px-6 pt-5 pb-6">
                <p className={`${t.scriptFont} text-[1.35rem] leading-none`} style={{ color: t.accent }}>
                  {template.couple.groom} &amp; {template.couple.bride}
                </p>
                <div className="ornament-line mx-auto my-2 w-12" style={{ color: t.line }} />
                <p className="text-[0.6rem] tracking-[0.22em] uppercase" style={{ color: t.sub }}>
                  {template.dateLabel}
                </p>
              </div>
            </div>

            <div
              className="env-curtain env-curtain--left pointer-events-none absolute inset-y-0 left-0 w-1/2 overflow-hidden border-r"
              style={{
                backgroundColor: `color-mix(in srgb, ${t.surface} 96%, ${t.accent} 4%)`,
                backgroundImage: curtainPattern ? `${curtainPattern}, ${pleat}` : pleat,
                borderColor: `color-mix(in srgb, ${t.accent} 18%, ${t.line})`,
                boxShadow: `inset -8px 0 16px ${t.ink}0F, 6px 0 12px ${t.ink}0D`,
              }}
              aria-hidden="true"
            >
              <div
                className="absolute inset-y-0 right-0 w-px"
                style={{ background: `linear-gradient(to bottom, transparent, ${t.accent}55, transparent)` }}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.07]">
                <span className={`${t.scriptFont} -rotate-90 text-5xl whitespace-nowrap`} style={{ color: t.accent }}>
                  {template.couple.groom}
                </span>
              </div>
            </div>
            <div
              className="env-curtain env-curtain--right pointer-events-none absolute inset-y-0 right-0 w-1/2 overflow-hidden border-l"
              style={{
                backgroundColor: `color-mix(in srgb, ${t.surface} 96%, ${t.accent} 4%)`,
                backgroundImage: curtainPattern ? `${curtainPattern}, ${pleat}` : pleat,
                borderColor: `color-mix(in srgb, ${t.accent} 18%, ${t.line})`,
                boxShadow: `inset 8px 0 16px ${t.ink}0F, -6px 0 12px ${t.ink}0D`,
              }}
              aria-hidden="true"
            >
              <div
                className="absolute inset-y-0 left-0 w-px"
                style={{ background: `linear-gradient(to bottom, transparent, ${t.accent}55, transparent)` }}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.07]">
                <span className={`${t.scriptFont} rotate-90 text-5xl whitespace-nowrap`} style={{ color: t.accent }}>
                  {template.couple.bride}
                </span>
              </div>
            </div>

            <div
              className="env-curtain-seal absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ filter: `drop-shadow(0 4px 10px ${t.ink}28)` }}
            >
              <SealButton initials={initials} onOpen={onOpen} template={template} className="env-seal" size="size-14 text-base" />
            </div>

            <div
              className="env-curtain-rod pointer-events-none absolute inset-x-0 top-0 h-[7px]"
              style={{
                background: `linear-gradient(to bottom, color-mix(in srgb, ${t.accent} 85%, white), color-mix(in srgb, ${t.accent} 55%, ${t.ink}))`,
                boxShadow: `0 2px 6px ${t.ink}22`,
              }}
              aria-hidden="true"
            />
            <div
              className="env-curtain-rod pointer-events-none absolute inset-x-0 bottom-0 h-[3px] opacity-40"
              style={{ backgroundColor: t.line }}
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="env-hint mt-8">
          <GuestBlock guest={guest} onOpen={onOpen} template={template} />
        </div>
      </div>
    </div>
  )
}
