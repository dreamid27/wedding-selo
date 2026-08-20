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

export function GateScroll({
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
  const scrollPattern =
    template.decor === "javanese"
      ? kawungPattern(t.accent, 0.08)
      : template.decor === "floral"
        ? roseTrellisPattern(t.accent, 0.07)
        : template.decor === "sundanese"
          ? kujangPattern(t.accent, 0.08)
          : template.decor === "makassar"
            ? paBintangPattern(t.accent, 0.08)
            : undefined

  return (
    <div
      className={`env-gate env-gate--scroll fixed inset-0 z-40 overflow-y-auto ${opening ? "is-opening" : ""}`}
      style={{ backgroundColor: t.bg, color: t.ink, backgroundImage: pagePattern }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `radial-gradient(ellipse 78% 56% at 50% 42%, ${t.accent}10, transparent 68%)`,
        }}
      />
      {template.decor === "javanese" ? (
        <div
          className="pointer-events-none absolute inset-x-3 top-15 bottom-18 sm:inset-x-5 sm:top-16"
          aria-hidden="true"
          style={{ color: `${t.accent}60` }}
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
          style={{ color: `${t.accent}60` }}
        >
          <CornerSpray className="absolute top-0 left-0 size-14 sm:size-20" />
          <CornerSpray className="absolute top-0 right-0 size-14 -scale-x-100 sm:size-20" />
          <CornerSpray className="absolute bottom-0 left-0 size-14 -scale-y-100 sm:size-20" />
          <CornerSpray className="absolute right-0 bottom-0 size-14 -scale-100 sm:size-20" />
        </div>
      ) : template.decor === "sundanese" ? (
        <div
          className="pointer-events-none absolute inset-x-3 top-15 bottom-18 sm:inset-x-5 sm:top-16"
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
          className="pointer-events-none absolute inset-x-3 top-15 bottom-18 sm:inset-x-5 sm:top-16"
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
            className="pointer-events-none absolute inset-4 rounded-3xl border"
            aria-hidden="true"
            style={{ borderColor: `${t.accent}18` }}
          />
          <div
            className="pointer-events-none absolute inset-6 rounded-2xl border"
            aria-hidden="true"
            style={{ borderColor: `${t.accent}12` }}
          />
        </>
      )}
      <SparkleField count={7} style={{ color: t.accent }} />

      <div className="relative mx-auto flex min-h-svh max-w-xl flex-col items-center justify-center px-6 pt-14 pb-24">
        <div className="env-hint text-center">
          {template.decor === "javanese" ? (
            <GununganMark className="mx-auto mb-3 h-11 w-auto" style={{ color: t.accent }} />
          ) : template.decor === "floral" ? (
            <RoseBloomMark className="mx-auto mb-3 h-11 w-auto" style={{ color: t.accent }} />
          ) : template.decor === "sundanese" ? (
            <SigerMark className="mx-auto mb-3 h-11 w-auto" style={{ color: t.accent }} />
          ) : template.decor === "makassar" ? (
            <PinisiMark className="mx-auto mb-3 h-10 w-auto sm:h-11" style={{ color: t.accent }} />
          ) : null}
          <p className={`${t.headingFont} text-[0.62rem] tracking-[0.36em] uppercase`} style={{ color: t.sub }}>
            Undangan Pernikahan
          </p>
          <p className={`${t.scriptFont} mt-2 text-[2.05rem] leading-none sm:text-[2.4rem]`}>
            {template.couple.groom} <span style={{ color: t.accent }}>&amp;</span> {template.couple.bride}
          </p>
          <p className={`${t.headingFont} mt-2 text-[0.7rem] tracking-[0.2em]`} style={{ color: t.sub }}>
            {template.dateLabel}
          </p>
        </div>

        <div className="relative mt-7 w-full" style={{ maxWidth: "min(84vw, 400px)" }}>
          <div className="relative overflow-hidden rounded-xl" style={{ paddingTop: 18, paddingBottom: 18 }}>
            <div
              className="env-scroll-rod pointer-events-none absolute inset-x-3 top-0 h-[22px] rounded-full"
              aria-hidden="true"
              style={{
                background: `linear-gradient(to bottom, color-mix(in srgb, ${t.accent} 92%, white), color-mix(in srgb, ${t.accent} 62%, ${t.ink}))`,
                boxShadow: `0 2px 8px ${t.ink}28, inset 0 1px 0 rgba(255,255,255,0.55)`,
              }}
            >
              <span
                className="absolute top-1/2 size-[9px] -translate-y-1/2 rounded-full border"
                style={{
                  left: 10,
                  backgroundColor: t.accentInk,
                  borderColor: `${t.accent}55`,
                  boxShadow: `0 1px 3px ${t.ink}22`,
                }}
              />
              <span
                className="absolute top-1/2 size-[9px] -translate-y-1/2 rounded-full border"
                style={{
                  right: 10,
                  backgroundColor: t.accentInk,
                  borderColor: `${t.accent}55`,
                  boxShadow: `0 1px 3px ${t.ink}22`,
                }}
              />
            </div>
            <div
              className="env-scroll-rod pointer-events-none absolute inset-x-3 bottom-0 h-[22px] rounded-full"
              aria-hidden="true"
              style={{
                background: `linear-gradient(to bottom, color-mix(in srgb, ${t.accent} 92%, white), color-mix(in srgb, ${t.accent} 62%, ${t.ink}))`,
                boxShadow: `0 2px 8px ${t.ink}28, inset 0 1px 0 rgba(255,255,255,0.55)`,
              }}
            >
              <span
                className="absolute top-1/2 size-[9px] -translate-y-1/2 rounded-full border"
                style={{
                  left: 10,
                  backgroundColor: t.accentInk,
                  borderColor: `${t.accent}55`,
                  boxShadow: `0 1px 3px ${t.ink}22`,
                }}
              />
              <span
                className="absolute top-1/2 size-[9px] -translate-y-1/2 rounded-full border"
                style={{
                  right: 10,
                  backgroundColor: t.accentInk,
                  borderColor: `${t.accent}55`,
                  boxShadow: `0 1px 3px ${t.ink}22`,
                }}
              />
            </div>

            <div
              className="env-scroll-paper relative overflow-hidden rounded-lg"
              style={{
                marginLeft: 14,
                marginRight: 14,
                backgroundColor: t.bg,
                backgroundImage: scrollPattern ? `${scrollPattern}` : undefined,
                border: `1px solid ${t.line}`,
                boxShadow: `0 14px 36px -14px ${t.ink}42`,
              }}
            >
              <div
                className="env-scroll-top pointer-events-none absolute inset-x-0 top-0 z-10"
                aria-hidden="true"
                style={{
                  height: "50%",
                  backgroundColor: `color-mix(in srgb, ${t.surface} 98%, white)`,
                  backgroundImage: scrollPattern ? `${scrollPattern}` : undefined,
                  borderBottom: `1px solid ${t.line}`,
                  boxShadow: `0 4px 10px ${t.ink}10`,
                  transformOrigin: "top center",
                }}
              >
                <div
                  className="absolute inset-x-0 bottom-0 h-px"
                  style={{ background: `linear-gradient(to right, transparent, ${t.accent}55, transparent)` }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className={`${t.headingFont} text-[0.6rem] tracking-[0.32em] uppercase`}
                    style={{ color: t.sub }}
                  >
                    — Gulung ke atas —
                  </span>
                </div>
              </div>
              <div
                className="env-scroll-bottom pointer-events-none absolute inset-x-0 bottom-0 z-10"
                aria-hidden="true"
                style={{
                  height: "50%",
                  backgroundColor: `color-mix(in srgb, ${t.surface} 98%, white)`,
                  backgroundImage: scrollPattern ? `${scrollPattern}` : undefined,
                  borderTop: `1px solid ${t.line}`,
                  boxShadow: `0 -4px 10px ${t.ink}10`,
                  transformOrigin: "bottom center",
                }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-px"
                  style={{ background: `linear-gradient(to right, transparent, ${t.accent}55, transparent)` }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className={`${t.headingFont} text-[0.6rem] tracking-[0.32em] uppercase`}
                    style={{ color: t.sub }}
                  >
                    — Gulung ke bawah —
                  </span>
                </div>
              </div>

              <div className="px-4 pt-6 pb-5 text-center sm:px-6">
                <img
                  src={template.cover}
                  alt=""
                  className="mx-auto h-[148px] w-full max-w-[280px] rounded-lg object-cover sm:h-[164px]"
                  loading="eager"
                  style={{ border: `1px solid ${t.line}` }}
                />
                <p className={`${t.scriptFont} mt-4 text-[1.35rem] leading-none`} style={{ color: t.accent }}>
                  {template.couple.groom} &amp; {template.couple.bride}
                </p>
                <div className="ornament-line mx-auto my-2 w-12" style={{ color: t.line }} />
                <p className="text-[0.6rem] tracking-[0.22em] uppercase" style={{ color: t.sub }}>
                  {template.dateLabel}
                </p>
                <div
                  className="mx-auto mt-3 h-px w-16"
                  style={{ background: `linear-gradient(to right, transparent, ${t.accent}55, transparent)` }}
                />
                <p className={`${t.bodyFont} mx-auto mt-3 max-w-[30ch] text-xs leading-relaxed`} style={{ color: t.sub }}>
                  {template.tagline}
                </p>
              </div>
            </div>

            <div className="env-scroll-seal absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              <SealButton initials={initials} onOpen={onOpen} template={template} className="env-seal" size="size-14 text-base" />
            </div>
          </div>
        </div>

        <div className="env-hint mt-7">
          <GuestBlock guest={guest} onOpen={onOpen} template={template} />
        </div>
      </div>
    </div>
  )
}
