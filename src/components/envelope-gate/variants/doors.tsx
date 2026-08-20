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

export function GateDoors({
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
  const doorPattern =
    template.decor === "javanese"
      ? kawungPattern(t.accent, 0.07)
      : template.decor === "floral"
        ? roseTrellisPattern(t.accent, 0.055)
        : template.decor === "sundanese"
          ? kujangPattern(t.accent, 0.07)
          : template.decor === "makassar"
            ? paBintangPattern(t.accent, 0.07)
            : undefined

  return (
    <div
      className={`env-gate env-gate--doors fixed inset-0 z-40 overflow-hidden ${opening ? "is-opening" : ""}`}
      style={{ backgroundColor: t.bg, color: t.ink, backgroundImage: pagePattern }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 40%, ${t.accent}12, transparent 70%)`,
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
            style={{ borderColor: `${t.accent}18` }}
          />
          <div
            className="pointer-events-none absolute inset-6 z-20 rounded-2xl border"
            aria-hidden="true"
            style={{ borderColor: `${t.accent}10` }}
          />
        </>
      )}
      <SparkleField count={7} style={{ color: t.accent }} />

      <div className="relative flex min-h-svh flex-col items-center justify-center px-6 pt-14 pb-24">
        <div className="env-hint text-center">
          {template.decor === "javanese" ? (
            <GununganMark className="mx-auto mb-3 h-10 w-auto" style={{ color: t.accent }} />
          ) : template.decor === "floral" ? (
            <RoseBloomMark className="mx-auto mb-3 h-10 w-auto" style={{ color: t.accent }} />
          ) : template.decor === "sundanese" ? (
            <SigerMark className="mx-auto mb-3 h-10 w-auto" style={{ color: t.accent }} />
          ) : template.decor === "makassar" ? (
            <PinisiMark className="mx-auto mb-3 h-9 w-auto sm:h-10" style={{ color: t.accent }} />
          ) : null}
          <p className={`${t.headingFont} text-[0.62rem] tracking-[0.36em] uppercase`} style={{ color: t.sub }}>
            Undangan Pernikahan
          </p>
          <p className={`${t.scriptFont} mt-2 text-[2rem] leading-none sm:text-[2.4rem]`}>
            {template.couple.groom} <span style={{ color: t.accent }}>&amp;</span> {template.couple.bride}
          </p>
          <p className={`${t.headingFont} mt-2 text-[0.7rem] tracking-[0.2em]`} style={{ color: t.sub }}>
            {template.dateLabel}
          </p>
        </div>

        <div className="relative mt-8 w-full max-w-[380px]">
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              aspectRatio: "4 / 3",
              border: `1px solid ${t.line}`,
              boxShadow: `0 20px 48px -16px ${t.ink}44`,
              backgroundColor: t.bg,
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
              <img
                src={template.hero}
                alt=""
                className="absolute inset-0 size-full object-cover"
                loading="eager"
              />
              <div
                className="absolute inset-0"
                aria-hidden="true"
                style={{
                  background: t.dark
                    ? "linear-gradient(to bottom, rgba(10,8,6,0.38), rgba(10,8,6,0.52))"
                    : "linear-gradient(to bottom, rgba(26,18,16,0.28), rgba(26,18,16,0.48))",
                }}
              />
              <div className="relative">
                <p className={`${t.headingFont} text-[0.58rem] tracking-[0.32em] uppercase text-white/80`}>
                  Undangan Pernikahan
                </p>
                <p className={`${t.scriptFont} mt-2 text-3xl leading-none text-white drop-shadow sm:text-4xl`}>
                  {template.couple.groom} &amp; {template.couple.bride}
                </p>
                <div className="mx-auto mt-2 h-px w-10 bg-white/60" />
                <p className={`${t.headingFont} mt-2 text-[0.68rem] tracking-[0.22em] uppercase text-white/85`}>
                  {template.dateLabel}
                </p>
              </div>
            </div>

            <div className="absolute inset-0 flex" style={{ perspective: "1200px" }}>
              <div
                className="env-door env-door--left relative w-1/2 overflow-hidden border-r"
                style={{
                  backgroundColor: `color-mix(in srgb, ${t.surface} 98%, white)`,
                  backgroundImage: doorPattern ? `${doorPattern}` : undefined,
                  borderColor: `color-mix(in srgb, ${t.accent} 22%, ${t.line})`,
                  transformOrigin: "left center",
                  boxShadow: `inset -6px 0 12px ${t.ink}0C, 4px 0 10px ${t.ink}10`,
                }}
                aria-hidden="true"
              >
                <div className="absolute inset-3 rounded-xl border sm:inset-4" style={{ borderColor: `${t.line}` }} />
                <div
                  className="absolute inset-[1.05rem] rounded-lg border sm:inset-[1.35rem]"
                  style={{ borderColor: `color-mix(in srgb, ${t.accent} 18%, transparent)` }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <span className={`${t.scriptFont} text-[1.6rem] leading-none`} style={{ color: t.accent }}>
                    {template.couple.groom}
                  </span>
                  <span className="mt-1 h-px w-8" style={{ backgroundColor: t.line }} />
                  <span className={`${t.headingFont} mt-1 text-[0.55rem] tracking-[0.28em] uppercase`} style={{ color: t.sub }}>
                    {template.events[0]?.venue.split(" ").slice(0, 2).join(" ")}
                  </span>
                  <span
                    className="mt-6 size-2 rounded-full border"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${t.accent} 85%, white)`,
                      borderColor: `${t.accent}40`,
                      boxShadow: `0 1px 4px ${t.ink}22`,
                    }}
                  />
                </div>
              </div>
              <div
                className="env-door env-door--right relative w-1/2 overflow-hidden border-l"
                style={{
                  backgroundColor: `color-mix(in srgb, ${t.surface} 98%, white)`,
                  backgroundImage: doorPattern ? `${doorPattern}` : undefined,
                  borderColor: `color-mix(in srgb, ${t.accent} 22%, ${t.line})`,
                  transformOrigin: "right center",
                  boxShadow: `inset 6px 0 12px ${t.ink}0C, -4px 0 10px ${t.ink}10`,
                }}
                aria-hidden="true"
              >
                <div className="absolute inset-3 rounded-xl border sm:inset-4" style={{ borderColor: `${t.line}` }} />
                <div
                  className="absolute inset-[1.05rem] rounded-lg border sm:inset-[1.35rem]"
                  style={{ borderColor: `color-mix(in srgb, ${t.accent} 18%, transparent)` }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <span className={`${t.scriptFont} text-[1.6rem] leading-none`} style={{ color: t.accent }}>
                    {template.couple.bride}
                  </span>
                  <span className="mt-1 h-px w-8" style={{ backgroundColor: t.line }} />
                  <span className={`${t.headingFont} mt-1 text-[0.55rem] tracking-[0.28em] uppercase`} style={{ color: t.sub }}>
                    {template.dateLabel.split(",").slice(-1)[0]?.trim()}
                  </span>
                  <span
                    className="mt-6 size-2 rounded-full border"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${t.accent} 85%, white)`,
                      borderColor: `${t.accent}40`,
                      boxShadow: `0 1px 4px ${t.ink}22`,
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              className="env-door-seal absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ filter: `drop-shadow(0 4px 10px ${t.ink}26)` }}
            >
              <SealButton initials={initials} onOpen={onOpen} template={template} className="env-seal" size="size-14 text-base" />
            </div>

            <div
              className="env-door-frame pointer-events-none absolute inset-0 rounded-2xl border-2"
              aria-hidden="true"
              style={{ borderColor: `color-mix(in srgb, ${t.ink} 12%, transparent)`, boxShadow: `inset 0 1px 0 rgba(255,255,255,0.7)` }}
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
