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
import {
  DriftingClouds,
  FallingCempaka,
  SigerCorner,
  SigerMark,
  kujangPattern,
  megamendungPattern,
} from "@/components/ornaments/sundanese"
import {
  DriftingPinisi,
  FallingBintang,
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

export function GateClassic({
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
  const flapPattern =
    template.decor === "javanese"
      ? kawungPattern(t.ink, 0.07)
      : template.decor === "floral"
        ? roseTrellisPattern(t.ink, 0.06)
        : template.decor === "sundanese"
          ? kujangPattern(t.ink, 0.08)
          : template.decor === "makassar"
            ? paBintangPattern(t.ink, 0.07)
            : undefined
  const paperEdge = `color-mix(in srgb, ${t.surface} 88%, ${t.ink})`
  const paperDeep = `color-mix(in srgb, ${t.surface} 72%, ${t.ink})`
  const interior = `color-mix(in srgb, ${t.surface} 62%, ${t.ink})`

  return (
    <div
      className={`env-gate env-gate--classic fixed inset-0 z-40 overflow-y-auto ${opening ? "is-opening" : ""}`}
      style={{ backgroundColor: t.bg, color: t.ink, backgroundImage: pagePattern }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `radial-gradient(ellipse 85% 60% at 50% 40%, ${t.accent}1A, transparent 70%)`,
        }}
      />
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
      ) : template.decor === "sundanese" ? (
        <div
          className="pointer-events-none absolute inset-x-3 top-15 bottom-18 sm:inset-x-5 sm:top-16"
          aria-hidden="true"
          style={{ color: `${t.accent}73` }}
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
          style={{ color: `${t.accent}66` }}
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
            style={{ borderColor: `${t.accent}2E` }}
          />
          <div
            className="pointer-events-none absolute inset-6 rounded-2xl border"
            aria-hidden="true"
            style={{ borderColor: `${t.accent}1F` }}
          />
        </>
      )}
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
      {template.decor === "sundanese" && (
        <>
          <DriftingClouds count={5} style={{ color: `${t.accent}40` }} />
          <FallingCempaka count={8} style={{ color: `${t.accent}59` }} />
        </>
      )}
      {template.decor === "makassar" && (
        <>
          <DriftingPinisi count={3} style={{ color: `${t.accent}38` }} />
          <FallingBintang count={9} style={{ color: `${t.accent}52` }} />
        </>
      )}
      <SparkleField count={9} style={{ color: t.accent }} />
      <div className="relative mx-auto flex min-h-svh max-w-xl flex-col items-center justify-center px-6 pt-16 pb-24 text-center">
        <div className="env-hint">
          {template.decor === "javanese" ? (
            <GununganMark className="mx-auto mb-4 h-14 w-auto" style={{ color: t.accent }} />
          ) : template.decor === "floral" ? (
            <RoseBloomMark
              className="animate-bloom mx-auto mb-4 h-14 w-auto"
              style={{ color: t.accent }}
            />
          ) : template.decor === "sundanese" ? (
            <SigerMark
              className="animate-bloom mx-auto mb-4 h-14 w-auto"
              style={{ color: t.accent }}
            />
          ) : template.decor === "makassar" ? (
            <PinisiMark
              className="animate-bloom mx-auto mb-4 h-[3.2rem] w-auto sm:h-14"
              style={{ color: t.accent }}
            />
          ) : null}
          <p className={`${t.headingFont} text-xs tracking-[0.35em] uppercase`} style={{ color: t.sub }}>
            Undangan Pernikahan
          </p>
          <p className={`${t.scriptFont} mt-3 text-5xl leading-tight sm:text-6xl`}>
            {template.couple.groom} <span style={{ color: t.accent }}>&amp;</span>{" "}
            {template.couple.bride}
          </p>
          <p className={`${t.headingFont} mt-3 text-sm tracking-[0.2em]`} style={{ color: t.sub }}>
            {template.dateLabel}
          </p>
        </div>
        <div className="env-float mt-9 mb-10 w-full" style={{ maxWidth: "min(84vw, 380px)" }}>
          <div style={{ perspective: "1200px" }}>
            <div className="relative" style={{ aspectRatio: "10 / 7" }}>
              <div
                className="absolute inset-0 z-[1] rounded-xl"
                style={{ backgroundColor: interior, boxShadow: `0 26px 50px -14px ${t.ink}4D` }}
              />
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
                <img src={template.cover} alt="" className="h-[52%] w-full object-cover" loading="eager" />
                <p className={`${t.scriptFont} mt-2 text-[1.35rem] leading-none`} style={{ color: t.accent }}>
                  {template.couple.groom} &amp; {template.couple.bride}
                </p>
                <div className="ornament-line mx-auto my-1.5 w-12" style={{ color: t.line }} />
                <p className="text-[0.6rem] tracking-[0.22em] uppercase" style={{ color: t.sub }}>
                  {template.dateLabel}
                </p>
              </div>
              <div
                className="absolute inset-0 z-[3] rounded-xl"
                style={{
                  clipPath: "polygon(0 0, 50% 46%, 100% 0, 100% 100%, 0 100%)",
                  background: `linear-gradient(to bottom, ${paperDeep}, ${t.surface} 62%)`,
                  filter: `drop-shadow(0 -1.5px 1px ${t.ink}1F)`,
                }}
              />
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
              <div
                className="absolute z-[5]"
                style={{ left: "50%", top: "56%", transform: "translate(-50%, -50%)" }}
              >
                <SealButton initials={initials} onOpen={onOpen} template={template} className="env-seal" />
              </div>
            </div>
          </div>
        </div>
        <div className="env-hint">
          <GuestBlock guest={guest} onOpen={onOpen} template={template} />
        </div>
      </div>
    </div>
  )
}
