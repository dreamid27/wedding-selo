/**
 * Ornamen kustom bertema Makassar untuk template "Karaeng Losari".
 *
 * Semua aset digambar tangan sebagai SVG berdasarkan riset budaya Bugis-Makassar:
 * - Lipa Sabbe    : sutra sarung sarung Makassar — kisi belah ketupat & kotak
 *                   tenun dengan cecek benang emas, latar halaman utama.
 * - Pa'bintang    : motif bintang belah ketupat khas sarung, untuk kartu acara.
 * - Pinisi        : perahu layar legendaris 7 layar, lambang pelayaran & kebesaran.
 * - Pakarena      : kipas tari Pakarena dengan rumbai — lambang kelembutan & kehormatan.
 * - Badik         : pusaka badik Makassar dengan hulu kayu kaleo — lambang penjaga.
 * - Balla Lompoa  : ukiran sudut rumah adat Gowa dengan belah ketupat bertumpuk.
 * Ornamen animasi (bintang gugur, pinisi berayar, kipas bergoyang) menghidupkan
 * suasana pesisir Losari — dinonaktifkan saat reduced motion.
 */

type SvgProps = React.SVGProps<SVGSVGElement>

/* ---------------------------------------------------------------- pattern */

export function lipaSabbePattern(color: string, opacity = 0.045): string {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'>
    <defs>
      <g id='ls' fill='none' stroke='${color}' stroke-opacity='${opacity}' stroke-width='1.15' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M0 -8 L8 0 L0 8 L-8 0 Z'/>
        <path d='M0 -4.2 L4.2 0 L0 4.2 L-4.2 0 Z' opacity='0.65'/>
        <circle r='1.15' fill='${color}' fill-opacity='${opacity * 0.9}' stroke='none'/>
      </g>
      <g id='ls2' fill='${color}' fill-opacity='${opacity * 0.55}'>
        <circle r='0.9'/>
      </g>
    </defs>
    <use href='#ls' x='16' y='16'/>
    <use href='#ls' x='48' y='48' transform='rotate(90 48 48)'/>
    <use href='#ls' x='48' y='16' transform='rotate(180 48 16)'/>
    <use href='#ls' x='16' y='48' transform='rotate(270 16 48)'/>
    <use href='#ls2' x='32' y='0'/>
    <use href='#ls2' x='0' y='32'/>
    <use href='#ls2' x='64' y='32'/>
    <use href='#ls2' x='32' y='64'/>
    <g stroke='${color}' stroke-opacity='${opacity * 0.7}' stroke-width='0.7' stroke-dasharray='0.5 3' stroke-linecap='round'>
      <path d='M0 32 H64'/>
      <path d='M32 0 V64'/>
    </g>
  </svg>`
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

export function paBintangPattern(color: string, opacity = 0.16): string {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'>
    <defs>
      <g id='pb' fill='none' stroke='${color}' stroke-opacity='${opacity}' stroke-width='1.15' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M0 -7 L2.2 0 L0 7 L-2.2 0 Z'/>
        <path d='M0 -7 L2.2 0 L0 7 L-2.2 0 Z' transform='rotate(90)'/>
        <path d='M0 -5.2 L1.6 0 L0 5.2 L-1.6 0 Z' transform='rotate(45)' opacity='0.55'/>
        <path d='M0 -5.2 L1.6 0 L0 5.2 L-1.6 0 Z' transform='rotate(135)' opacity='0.55'/>
        <circle r='1.15' fill='${color}' fill-opacity='${opacity}' stroke='none'/>
      </g>
    </defs>
    <use href='#pb' x='10' y='10'/>
    <use href='#pb' x='30' y='30' transform='rotate(180 30 30)'/>
    <circle cx='20' cy='20' r='0.8' fill='${color}' fill-opacity='${opacity * 0.7}'/>
  </svg>`
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

/* ---------------------------------------------------------------- emblem */

export function PinisiMark(props: SvgProps) {
  return (
    <svg viewBox="0 0 140 76" fill="none" aria-hidden="true" {...props}>
      <path
        d="M10 48 C32 54 96 56 127 48 L122 60 C96 66 36 66 14 60 Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M14 60 Q70 68 122 60"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeDasharray="1.2 3.2"
        strokeLinecap="round"
        opacity="0.72"
      />
      <g stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round">
        <path d="M48 48 V14.5" />
        <path d="M82 48 V18.5" />
        <path d="M116 48 V10" />
      </g>
      <g stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" fill="none">
        <path d="M48 16.5 L26 26.5 L48 45 L66 28 Z" />
        <path d="M48 22 L48 45" strokeWidth="0.9" opacity="0.55" />
        <path d="M82 20 L61 29 L82 45 L100 30 Z" />
        <path d="M82 27 L82 45" strokeWidth="0.9" opacity="0.55" />
        <path d="M116 12 L99 24 L116 45 L130 27 Z" />
        <path d="M116 20 L116 45" strokeWidth="0.9" opacity="0.55" />
      </g>
      <g stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" opacity="0.75">
        <path d="M26 26.5 L32 30" />
        <path d="M61 29 L67 32.5" />
        <path d="M99 24 L106 28.5" />
      </g>
      <path
        d="M8 54 C18 50 26 52 32 56"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinecap="round"
        opacity="0.72"
      />
      <path
        d="M110 54 C118 50 126 51 132 55"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinecap="round"
        opacity="0.72"
      />
      <g fill="currentColor">
        <circle cx="48" cy="12.5" r="1.25" />
        <circle cx="82" cy="16.5" r="1.25" />
        <circle cx="116" cy="8.5" r="1.25" />
        <circle cx="28" cy="50.5" r="1.05" />
        <circle cx="110" cy="51" r="1.05" />
      </g>
    </svg>
  )
}

/* --------------------------------------------------------------- divider */

export function PakarenaDivider({ className = "", ...props }: SvgProps & { className?: string }) {
  return (
    <svg viewBox="0 0 260 28" fill="none" aria-hidden="true" className={className} {...props}>
      <defs>
        <g id="pk-arm" stroke="currentColor" strokeLinecap="round" fill="none">
          <path strokeWidth="1.55" d="M118 14 C104 6 90 21 72 14 C60 8 46 18 30 14 C27 13.2 24 13.2 22 14" />
          <path strokeWidth="1.05" d="M88 17.5 C85 21.8 80.5 22.6 77.5 18.2 C78.9 13.8 83.6 12.6 86.5 15.2 C87.3 16 87 17.6 85.5 18" />
          <path strokeWidth="1.05" d="M54 12.2 C51 7.8 46.5 7 43.5 11.4 C44.9 15.8 49.6 17 52.5 14.2 C53.2 13.4 52.8 11.8 51.2 11.4" />
          <path strokeWidth="1.25" d="M30 14 C26 14 23 14 19 14" />
          <g strokeWidth="1.05">
            <path d="M78 14 L84 9.2" />
            <path d="M78 14 L86.5 13.2" />
            <path d="M78 14 L85.5 17.8" />
            <path d="M44 12 L49 7.6" />
            <path d="M44 12 L51.5 11.2" />
            <path d="M44 12 L50.5 15.8" />
          </g>
          <circle cx="14" cy="14" r="1.7" fill="currentColor" stroke="none" />
        </g>
      </defs>
      <use href="#pk-arm" />
      <use href="#pk-arm" transform="translate(260 0) scale(-1 1)" />
      <g transform="translate(130 14)" fill="currentColor">
        <path d="M0 -7 L2.1 0 L0 7 L-2.1 0 Z" />
        <path d="M0 -7 L2.1 0 L0 7 L-2.1 0 Z" transform="rotate(90)" />
        <path d="M0 -5 L1.55 0 L0 5 L-1.55 0 Z" transform="rotate(45)" opacity="0.7" />
        <path d="M0 -5 L1.55 0 L0 5 L-1.55 0 Z" transform="rotate(135)" opacity="0.7" />
        <circle r="1.35" />
        <circle r="5.8" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.42" />
        <circle r="8.4" fill="none" stroke="currentColor" strokeWidth="0.55" opacity="0.22" strokeDasharray="1 2.4" />
      </g>
    </svg>
  )
}

export function LipaWaveDivider({ className = "", ...props }: SvgProps & { className?: string }) {
  return (
    <svg viewBox="0 0 240 18" fill="none" aria-hidden="true" className={className} {...props}>
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path
          strokeWidth="1.2"
          d="M10 9 L16 3 L22 9 L28 3 L34 9 L40 3 L46 9 L52 3 L58 9 L64 3 L70 9 L76 3 L82 9 L88 3 L94 9 L100 3 L106 9 L112 3 L118 9 L124 3 L130 9 L136 3 L142 9 L148 3 L154 9 L160 3 L166 9 L172 3 L178 9 L184 3 L190 9 L196 3 L202 9 L208 3 L214 9 L220 3 L226 9"
        />
        <g strokeWidth="0.9" opacity="0.5">
          <circle cx="22" cy="9" r="1.15" fill="currentColor" stroke="none" />
          <circle cx="46" cy="9" r="1.15" fill="currentColor" stroke="none" />
          <circle cx="70" cy="9" r="1.15" fill="currentColor" stroke="none" />
          <circle cx="94" cy="9" r="1.15" fill="currentColor" stroke="none" />
          <circle cx="118" cy="9" r="1.15" fill="currentColor" stroke="none" />
          <circle cx="142" cy="9" r="1.15" fill="currentColor" stroke="none" />
          <circle cx="166" cy="9" r="1.15" fill="currentColor" stroke="none" />
          <circle cx="190" cy="9" r="1.15" fill="currentColor" stroke="none" />
          <circle cx="214" cy="9" r="1.15" fill="currentColor" stroke="none" />
        </g>
      </g>
    </svg>
  )
}

/* ----------------------------------------------------------------- frame */

export function MakassarCorner(props: SvgProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeLinecap="round" fill="none">
        <path strokeWidth="2" d="M78 3 H12 Q3 3 3 12 V78" />
        <path strokeWidth="1" d="M70 9 H16 Q9 9 9 16 V70" />
        <path strokeWidth="1.35" d="M30 30 L18 18 L30 6 L42 18 Z" />
        <path strokeWidth="1" d="M30 30 L22 22 L30 14 L38 22 Z" opacity="0.75" />
        <path strokeWidth="1.2" d="M30 30 C22 22 20 15 25 13 C29 11.5 32 16 29 19 C27 21 24 19 25 17" />
        <path strokeWidth="1.2" d="M30 30 C22 22 15 20 13 25 C11.5 29 16 32 19 29 C21 27 19 24 17 25" />
        <path strokeWidth="1.1" d="M30 30 C36 36 40 44 41 52" />
        <path strokeWidth="1.1" d="M30 30 C36 36 44 40 52 41" />
        <circle cx="30" cy="18" r="1.05" fill="currentColor" stroke="none" />
        <circle cx="18" cy="30" r="1.05" fill="currentColor" stroke="none" />
        <circle cx="42" cy="30" r="1.05" fill="currentColor" stroke="none" />
        <circle cx="30" cy="42" r="1.05" fill="currentColor" stroke="none" />
      </g>
      <g fill="currentColor">
        <circle cx="57" cy="6" r="1.15" />
        <circle cx="66" cy="6" r="1.15" />
        <circle cx="6" cy="57" r="1.15" />
        <circle cx="6" cy="66" r="1.15" />
        <path d="M38 44 C40 41 43 40 46 41 C44 44 41 45 38 44 Z" />
        <path d="M44 38 C41 40 40 43 41 46 C44 44 45 41 44 38 Z" />
      </g>
    </svg>
  )
}

/* ----------------------------------------------------------------- icons */

export function BadikIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path strokeWidth="1.55" d="M17 42 C17 28 23 15 33.5 8 C36.2 6.2 39.2 7.6 37.8 10.6 C30.2 18 24.6 26.2 21.5 33.8" />
        <path strokeWidth="1.35" d="M21.5 33.8 C22.4 36.6 24.2 38.6 27 40.2" />
        <path strokeWidth="1.2" d="M33.5 8 C31.8 11.2 30 14 28.5 17" opacity="0.65" />
        <path strokeWidth="1.05" d="M26 13 C26 13 27.6 16.2 29.2 18.6" opacity="0.55" />
      </g>
      <g fill="currentColor">
        <circle cx="18" cy="43.5" r="1.45" />
        <circle cx="26.2" cy="12.2" r="1" opacity="0.95" />
        <circle cx="30.2" cy="16.5" r="1" opacity="0.95" />
        <circle cx="34" cy="21.2" r="1" opacity="0.95" />
      </g>
      <path
        d="M15.5 37.2 L13 43.8 L19.6 41.3"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function PakarenaFanIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path strokeWidth="1.45" d="M12 26 A12 12 0 0 1 36 26 Z" />
        <path strokeWidth="1.05" d="M24 26 L14.5 18.2" />
        <path strokeWidth="1.05" d="M24 26 L18.2 15.2" />
        <path strokeWidth="1.05" d="M24 26 L24 14" />
        <path strokeWidth="1.05" d="M24 26 L29.8 15.2" />
        <path strokeWidth="1.05" d="M24 26 L33.5 18.2" />
        <circle cx="24" cy="26" r="1.35" fill="currentColor" stroke="none" />
        <path strokeWidth="1.35" d="M24 27.5 V41" />
        <path strokeWidth="0.9" d="M22.5 34 C20.8 33.4 19.6 32 19.2 30" opacity="0.6" />
        <path strokeWidth="0.9" d="M25.5 34 C27.2 33.4 28.4 32 28.8 30" opacity="0.6" />
      </g>
      <g fill="currentColor">
        <circle cx="24" cy="43.5" r="1.15" />
        <circle cx="16" cy="22" r="0.85" opacity="0.75" />
        <circle cx="32" cy="22" r="0.85" opacity="0.75" />
      </g>
    </svg>
  )
}

export function BintangIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g fill="currentColor">
        <path d="M12 4.8 L13.5 9.2 L12 10.6 L10.5 9.2 Z" />
        <path d="M12 19.2 L10.5 14.8 L12 13.4 L13.5 14.8 Z" />
        <path d="M4.8 12 L9.2 10.5 L10.6 12 L9.2 13.5 Z" />
        <path d="M19.2 12 L14.8 13.5 L13.4 12 L14.8 10.5 Z" />
        <path d="M6.4 6.4 L9.4 8.2 L8.2 9.4 L6.4 6.4 Z" opacity="0.9" />
        <path d="M17.6 6.4 L15.8 9.4 L14.6 8.2 L17.6 6.4 Z" opacity="0.9" />
        <path d="M6.4 17.6 L8.2 14.6 L9.4 15.8 L6.4 17.6 Z" opacity="0.9" />
        <path d="M17.6 17.6 L14.6 15.8 L15.8 14.6 L17.6 17.6 Z" opacity="0.9" />
        <circle cx="12" cy="12" r="1.45" />
      </g>
    </svg>
  )
}

/* -------------------------------------------------------------- animated */

function BintangPetal(props: SvgProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M10 2.2 L11.2 7.4 L10 8.8 L8.8 7.4 Z" />
      <path d="M10 17.8 L8.8 12.6 L10 11.2 L11.2 12.6 Z" />
      <path d="M2.2 10 L7.4 8.8 L8.8 10 L7.4 11.2 Z" />
      <path d="M17.8 10 L12.6 11.2 L11.2 10 L12.6 8.8 Z" />
      <path d="M4.4 4.4 L7.4 6.4 L6.4 7.4 L4.4 4.4 Z" opacity="0.92" />
      <path d="M15.6 4.4 L13.6 7.4 L12.6 6.4 L15.6 4.4 Z" opacity="0.92" />
      <path d="M4.4 15.6 L6.4 12.6 L7.4 13.6 L4.4 15.6 Z" opacity="0.92" />
      <path d="M15.6 15.6 L12.6 13.6 L13.6 12.6 L15.6 15.6 Z" opacity="0.92" />
      <circle cx="10" cy="10" r="1.2" />
    </svg>
  )
}

export function FallingBintang({
  count = 10,
  className = "",
  style,
}: {
  count?: number
  className?: string
  style?: React.CSSProperties
}) {
  const items = Array.from({ length: count }, (_, i) => ({
    left: `${(i * 97) % 100}%`,
    delay: `${((i * 137) % 90) / 10}s`,
    duration: `${9 + ((i * 53) % 60) / 10}s`,
    size: 9 + ((i * 71) % 10),
    flip: i % 2 === 0,
  }))
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={style}
      aria-hidden="true"
    >
      {items.map((p, i) => (
        <BintangPetal
          key={i}
          className="animate-bintang-fall absolute -top-8"
          style={{
            left: p.left,
            width: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
            transform: p.flip ? "scaleX(-1)" : undefined,
          }}
        />
      ))}
    </div>
  )
}

function SailPuff({ className = "", ...props }: SvgProps & { className?: string }) {
  return (
    <svg viewBox="0 0 88 34" fill="none" aria-hidden="true" className={className} {...props}>
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path strokeWidth="1.35" d="M6 26 L82 26" />
        <path strokeWidth="1.15" d="M14 26 L14 12 L30 18 L14 26 Z" fill="currentColor" fillOpacity="0.12" />
        <path strokeWidth="1.15" d="M38 26 L38 8 L58 16 L38 26 Z" fill="currentColor" fillOpacity="0.12" />
        <path strokeWidth="1.15" d="M62 26 L62 10 L78 17 L62 26 Z" fill="currentColor" fillOpacity="0.12" />
        <path strokeWidth="1.1" d="M14 12 V26 M38 8 V26 M62 10 V26" />
      </g>
    </svg>
  )
}

export function DriftingPinisi({
  count = 3,
  className = "",
  style,
}: {
  count?: number
  className?: string
  style?: React.CSSProperties
}) {
  const boats = Array.from({ length: count }, (_, i) => ({
    top: `${8 + ((i * 41) % 58)}%`,
    delay: `${((i * 53) % 70) / 10}s`,
    duration: `${24 + ((i * 37) % 60) / 10}s`,
    size: 78 + ((i * 53) % 52),
  }))
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={style}
      aria-hidden="true"
    >
      {boats.map((b, i) => (
        <SailPuff
          key={i}
          className="animate-pinisi-drift absolute"
          style={{
            top: b.top,
            left: `-${b.size}px`,
            width: b.size,
            animationDelay: b.delay,
            animationDuration: b.duration,
          }}
        />
      ))}
    </div>
  )
}
