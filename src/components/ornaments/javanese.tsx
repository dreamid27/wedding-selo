/**
 * Ornamen kustom bertema Jawa untuk template "Sekar Keraton".
 *
 * Semua aset digambar tangan sebagai SVG berdasarkan riset motif klasik:
 * - Truntum  : bintang bersudut delapan, dikenakan orang tua mempelai —
 *              lambang cinta yang tumbuh kembali dan restu orang tua.
 * - Kawung   : empat elips mengelilingi satu titik — kesucian & keadilan.
 * - Gunungan : kayon wayang, penanda dibukanya babak baru kehidupan.
 * - Lung-lungan : sulur ukiran Jawa untuk pembatas bagian.
 * - Cunduk mentul, melati ronce, gong ageng, dan sudut gebyok sebagai ikon.
 * Motif Parang sengaja tidak dipakai — pantangan dalam pernikahan adat.
 */

type SvgProps = React.SVGProps<SVGSVGElement>

/* ---------------------------------------------------------------- pattern */

/**
 * Motif Truntum sebagai background-image CSS: taburan bintang delapan
 * kelopak di kisi diagonal, diselingi titik cecek.
 */
export function truntumPattern(color: string, opacity = 0.04): string {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'>
    <defs>
      <path id='p' d='M0 0 C-1.7 -2.4 -1.7 -6.6 0 -10 C1.7 -6.6 1.7 -2.4 0 0 Z'/>
      <g id='s' fill='${color}' fill-opacity='${opacity}'>
        <use href='#p'/>
        <use href='#p' transform='rotate(90)'/>
        <use href='#p' transform='rotate(180)'/>
        <use href='#p' transform='rotate(270)'/>
        <use href='#p' transform='rotate(45) scale(0.55)'/>
        <use href='#p' transform='rotate(135) scale(0.55)'/>
        <use href='#p' transform='rotate(225) scale(0.55)'/>
        <use href='#p' transform='rotate(315) scale(0.55)'/>
        <circle r='1.1'/>
      </g>
    </defs>
    <use href='#s' x='28' y='28'/>
    <use href='#s' x='0' y='0'/>
    <use href='#s' x='56' y='0'/>
    <use href='#s' x='0' y='56'/>
    <use href='#s' x='56' y='56'/>
    <g fill='${color}' fill-opacity='${opacity * 0.8}'>
      <circle cx='14' cy='14' r='0.9'/>
      <circle cx='42' cy='14' r='0.9'/>
      <circle cx='14' cy='42' r='0.9'/>
      <circle cx='42' cy='42' r='0.9'/>
    </g>
  </svg>`
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

/** Motif Kawung sebagai background-image CSS untuk bidang kecil/kartu. */
export function kawungPattern(color: string, opacity = 0.14): string {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'>
    <defs>
      <g id='k' fill='none' stroke='${color}' stroke-opacity='${opacity}' stroke-width='1.2'>
        <ellipse cx='0' cy='-9' rx='4.6' ry='7.6'/>
        <ellipse cx='0' cy='9' rx='4.6' ry='7.6'/>
        <ellipse cx='-9' cy='0' rx='7.6' ry='4.6'/>
        <ellipse cx='9' cy='0' rx='7.6' ry='4.6'/>
        <circle r='1.4' fill='${color}' fill-opacity='${opacity}' stroke='none'/>
      </g>
    </defs>
    <use href='#k' x='18' y='18'/>
    <use href='#k' x='0' y='0'/>
    <use href='#k' x='36' y='0'/>
    <use href='#k' x='0' y='36'/>
    <use href='#k' x='36' y='36'/>
  </svg>`
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

/* ---------------------------------------------------------------- emblem */

/**
 * Gunungan (kayon) — siluet gunung kehidupan wayang kulit dengan pohon
 * hayat di dalamnya. Dipakai sebagai emblem pembuka undangan.
 */
export function GununganMark(props: SvgProps) {
  return (
    <svg viewBox="0 0 120 160" fill="none" aria-hidden="true" {...props}>
      {/* siluet luar */}
      <path
        d="M60 5 C73 25 95 51 102 90 C107 121 90 147 60 155 C30 147 13 121 18 90 C25 51 47 25 60 5 Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* bingkai dalam bertitik — kesan cecek batik */}
      <path
        d="M60 17 C71 34 89 57 95 90 C99 116 85 138 60 145 C35 138 21 116 25 90 C31 57 49 34 60 17 Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="0.5 4.5"
        strokeLinecap="round"
      />
      {/* kuncup puncak */}
      <path
        d="M60 24 C63 29 63 34 60 38 C57 34 57 29 60 24 Z"
        fill="currentColor"
      />
      {/* batang pohon hayat */}
      <path
        d="M60 44 V118"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* tiga pasang dahan bergelung */}
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M60 58 C51 56 44 50 42 42 C41 38 44 36 46 38 C48 40 46 43 43 43" />
        <path d="M60 58 C69 56 76 50 78 42 C79 38 76 36 74 38 C72 40 74 43 77 43" />
        <path d="M60 80 C48 78 39 71 36 61 C35 57 38 55 40 57 C42 59 40 62 37 62" />
        <path d="M60 80 C72 78 81 71 84 61 C85 57 82 55 80 57 C78 59 80 62 83 62" />
        <path d="M60 102 C46 100 36 92 33 81 C32 77 35 75 37 77 C39 79 37 82 34 82" />
        <path d="M60 102 C74 100 84 92 87 81 C88 77 85 75 83 77 C81 79 83 82 86 82" />
      </g>
      {/* daun kecil pada dahan */}
      <g fill="currentColor">
        <path d="M48 49 C50 46 53 45 56 46 C54 49 51 50 48 49 Z" />
        <path d="M72 49 C70 46 67 45 64 46 C66 49 69 50 72 49 Z" />
        <path d="M43 69 C45 66 48 65 51 66 C49 69 46 70 43 69 Z" />
        <path d="M77 69 C75 66 72 65 69 66 C71 69 74 70 77 69 Z" />
        <path d="M40 90 C42 87 45 86 48 87 C46 90 43 91 40 90 Z" />
        <path d="M80 90 C78 87 75 86 72 87 C74 90 77 91 80 90 Z" />
      </g>
      {/* gapura di kaki gunungan */}
      <g stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
        <path d="M46 136 V126 H51 V120 H69 V126 H74 V136" />
        <path d="M55 136 V128 H65 V136" />
      </g>
      {/* sayap penjaga kiri-kanan */}
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M42 132 C36 130 31 125 29 118" />
        <path d="M45 126 C40 124 36 120 34 114" />
        <path d="M78 132 C84 130 89 125 91 118" />
        <path d="M75 126 C80 124 84 120 86 114" />
      </g>
      {/* tanah — garis dasar */}
      <path
        d="M42 136 H78"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* --------------------------------------------------------------- divider */

/**
 * Bunga truntum tunggal — delapan kelopak runcing dengan titik pusat.
 * Dipakai sebagai penanda lini masa dan pusat pembatas lung-lungan.
 */
export function TruntumFlowerIcon(props: SvgProps) {
  return (
    <svg viewBox="-12 -12 24 24" aria-hidden="true" {...props}>
      <g fill="currentColor">
        <path d="M0 -3 C-1.6 -5.2 -1.6 -8.4 0 -11 C1.6 -8.4 1.6 -5.2 0 -3 Z" />
        <path d="M0 3 C-1.6 5.2 -1.6 8.4 0 11 C1.6 8.4 1.6 5.2 0 3 Z" />
        <path d="M-3 0 C-5.2 -1.6 -8.4 -1.6 -11 0 C-8.4 1.6 -5.2 1.6 -3 0 Z" />
        <path d="M3 0 C5.2 -1.6 8.4 -1.6 11 0 C8.4 1.6 5.2 1.6 3 0 Z" />
        <path d="M-2.4 -2.4 C-4.4 -3 -6.2 -4.8 -6.8 -6.8 C-4.8 -6.2 -3 -4.4 -2.4 -2.4 Z" />
        <path d="M2.4 -2.4 C4.4 -3 6.2 -4.8 6.8 -6.8 C4.8 -6.2 3 -4.4 2.4 -2.4 Z" />
        <path d="M-2.4 2.4 C-4.4 3 -6.2 4.8 -6.8 6.8 C-4.8 6.2 -3 4.4 -2.4 2.4 Z" />
        <path d="M2.4 2.4 C4.4 3 6.2 4.8 6.8 6.8 C4.8 6.2 3 4.4 2.4 2.4 Z" />
        <circle r="1.5" />
      </g>
    </svg>
  )
}

/**
 * Pembatas lung-lungan: sulur ukiran Jawa bergelung simetris dengan
 * bunga truntum di tengah.
 */
export function LungLunganDivider({
  className = "",
  ...props
}: SvgProps & { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 28"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <defs>
        <g id="ll-arm" stroke="currentColor" strokeLinecap="round" fill="none">
          <path
            strokeWidth="1.5"
            d="M116 14 C102 6 90 22 74 14 C60 7 48 18 32 14"
          />
          <path
            strokeWidth="1.2"
            d="M94 16 C90 22 82 22 80 17 C79 13 84 11 86 14 C87 16 85 18 83 17"
          />
          <path
            strokeWidth="1.2"
            d="M52 12 C48 6 40 6 38 11 C37 15 42 17 44 14 C45 12 43 10 41 11"
          />
          <path strokeWidth="1.5" d="M32 14 C27 14 23 14 20 14" />
          <circle cx="15" cy="14" r="1.8" fill="currentColor" stroke="none" />
        </g>
      </defs>
      <use href="#ll-arm" />
      <use href="#ll-arm" transform="translate(260 0) scale(-1 1)" />
      {/* bunga truntum di pusat */}
      <g transform="translate(130 14)" fill="currentColor">
        <path d="M0 -3 C-1.6 -5.2 -1.6 -8.4 0 -11 C1.6 -8.4 1.6 -5.2 0 -3 Z" />
        <path d="M0 3 C-1.6 5.2 -1.6 8.4 0 11 C1.6 8.4 1.6 5.2 0 3 Z" />
        <path d="M-3 0 C-5.2 -1.6 -8.4 -1.6 -11 0 C-8.4 1.6 -5.2 1.6 -3 0 Z" />
        <path d="M3 0 C5.2 -1.6 8.4 -1.6 11 0 C8.4 1.6 5.2 1.6 3 0 Z" />
        <path d="M-2.4 -2.4 C-4.4 -3 -6.2 -4.8 -6.8 -6.8 C-4.8 -6.2 -3 -4.4 -2.4 -2.4 Z" />
        <path d="M2.4 -2.4 C4.4 -3 6.2 -4.8 6.8 -6.8 C4.8 -6.2 3 -4.4 2.4 -2.4 Z" />
        <path d="M-2.4 2.4 C-4.4 3 -6.2 4.8 -6.8 6.8 C-4.8 6.2 -3 4.4 -2.4 2.4 Z" />
        <path d="M2.4 2.4 C4.4 3 6.2 4.8 6.8 6.8 C4.8 6.2 3 4.4 2.4 2.4 Z" />
        <circle r="1.5" />
      </g>
    </svg>
  )
}

/* ----------------------------------------------------------------- icons */

/**
 * Cunduk mentul — kembang goyang perhiasan sanggul pengantin putri,
 * lima tangkai melambangkan rukun yang menopang rumah tangga.
 */
export function CundukMentulIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 72 44" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
        <path d="M36 41 V14" />
        <path d="M34 41 C28 32 22 26 16 22" />
        <path d="M38 41 C44 32 50 26 56 22" />
        <path d="M33 41 C24 36 14 34 7 34" />
        <path d="M39 41 C48 36 58 34 65 34" />
      </g>
      <g fill="currentColor">
        {[
          [36, 10],
          [14, 19],
          [58, 19],
          [5, 32],
          [67, 32],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
            <circle r="1.4" />
            <path d="M0 -2.2 C-1 -3.6 -1 -5.4 0 -6.6 C1 -5.4 1 -3.6 0 -2.2 Z" />
            <path
              d="M0 2.2 C-1 3.6 -1 5.4 0 6.6 C1 5.4 1 3.6 0 2.2 Z"
              transform="scale(0.8)"
            />
            <path
              d="M2.2 0 C3.6 -1 5.4 -1 6.6 0 C5.4 1 3.6 1 2.2 0 Z"
              transform="scale(0.8)"
            />
            <path
              d="M-2.2 0 C-3.6 -1 -5.4 -1 -6.6 0 C-5.4 1 -3.6 1 -2.2 0 Z"
              transform="scale(0.8)"
            />
          </g>
        ))}
      </g>
    </svg>
  )
}

/** Melati ronce — bunga melati lima kelopak, wewangian pengantin Jawa. */
export function JasmineIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g fill="currentColor">
        {[0, 72, 144, 216, 288].map((deg) => (
          <path
            key={deg}
            transform={`rotate(${deg} 12 12)`}
            d="M12 10.5 C10.2 8.6 9.8 5.6 11 3.2 C11.4 2.4 12.6 2.4 13 3.2 C14.2 5.6 13.8 8.6 12 10.5 Z"
          />
        ))}
        <circle cx="12" cy="12" r="1.8" />
      </g>
    </svg>
  )
}

/** Gong ageng — medali lingkar gamelan penanda dimulainya hajatan. */
export function GongIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.6" />
      <circle
        cx="16"
        cy="16"
        r="8.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="0.5 3"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="3.6" fill="currentColor" />
    </svg>
  )
}

/**
 * Sudut gebyok — ukiran sudut bingkai kayu jati dengan gelung sulur,
 * dipakai membingkai sampul undangan. Orientasi diatur lewat rotate.
 */
export function GebyokCorner(props: SvgProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeLinecap="round" fill="none">
        <path strokeWidth="2" d="M78 3 H12 Q3 3 3 12 V78" />
        <path strokeWidth="1" d="M70 9 H16 Q9 9 9 16 V70" />
        {/* gelung sulur di sudut */}
        <path
          strokeWidth="1.4"
          d="M30 30 C22 22 20 15 25 13 C29 11.5 32 16 29 19 C27 21 24 19 25 17"
        />
        <path
          strokeWidth="1.4"
          d="M30 30 C22 22 15 20 13 25 C11.5 29 16 32 19 29 C21 27 19 24 17 25"
        />
        <path strokeWidth="1.2" d="M30 30 C36 36 40 44 41 52" />
        <path strokeWidth="1.2" d="M30 30 C36 36 44 40 52 41" />
      </g>
      {/* daun & titik aksen */}
      <g fill="currentColor">
        <path d="M38 44 C40 41 43 40 46 41 C44 44 41 45 38 44 Z" />
        <path d="M44 38 C41 40 40 43 41 46 C44 44 45 41 44 38 Z" />
        <circle cx="57" cy="6" r="1.2" />
        <circle cx="66" cy="6" r="1.2" />
        <circle cx="6" cy="57" r="1.2" />
        <circle cx="6" cy="66" r="1.2" />
      </g>
    </svg>
  )
}
