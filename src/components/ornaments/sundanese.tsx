/**
 * Ornamen kustom bertema Sunda untuk template "Parahyangan".
 *
 * Semua aset digambar tangan sebagai SVG berdasarkan riset ikon budaya Sunda:
 * - Mega mendung : motif awan berundak dari batik Cirebon (Jawa Barat) —
 *                  lambang keteduhan dan kesabaran, dipakai sebagai latar.
 * - Siger        : mahkota pengantin Sunda, lambang kehormatan & kebesaran.
 * - Kujang       : senjata/pusaka khas Pasundan, lambang kewibawaan.
 * - Angklung     : alat musik bambu khas Sunda, lambang kebersamaan.
 * - Cempaka      : kembang cempaka/kantil — wewangian pengantin Sunda.
 * - Sulur        : ukiran sulur-suluran kayu Sunda untuk pembatas bagian.
 * Ornamen animasi (kembang cempaka gugur, mega mendung berarak, sulur
 * bergoyang) menghidupkan suasana — dinonaktifkan saat reduced motion.
 */

type SvgProps = React.SVGProps<SVGSVGElement>

/* ---------------------------------------------------------------- pattern */

/**
 * Motif mega mendung sebagai background-image CSS: awan berundak tiga
 * tingkat di kisi diagonal, diselingi titik cecek batik.
 */
export function megamendungPattern(color: string, opacity = 0.04): string {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'>
    <defs>
      <g id='c' fill='none' stroke='${color}' stroke-opacity='${opacity}' stroke-width='1.1' stroke-linecap='round'>
        <path d='M-15 8 a8 8 0 0 1 16 0 a8 8 0 0 1 16 0'/>
        <path d='M-8 0 a6.5 6.5 0 0 1 13 0 a6.5 6.5 0 0 1 13 0' opacity='0.6'/>
        <path d='M-3 -6.5 a5 5 0 0 1 10 0' opacity='0.32'/>
      </g>
    </defs>
    <use href='#c' x='32' y='32'/>
    <use href='#c' x='0' y='0'/>
    <use href='#c' x='64' y='0'/>
    <use href='#c' x='0' y='64'/>
    <use href='#c' x='64' y='64'/>
    <g fill='${color}' fill-opacity='${opacity * 0.8}'>
      <circle cx='16' cy='16' r='0.9'/>
      <circle cx='48' cy='16' r='0.9'/>
      <circle cx='16' cy='48' r='0.9'/>
      <circle cx='48' cy='48' r='0.9'/>
    </g>
  </svg>`
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

/**
 * Motif kujang kecil sebagai background-image CSS untuk kartu acara —
 * taburan siluet kujang berpasangan dengan titik cecek.
 */
export function kujangPattern(color: string, opacity = 0.16): string {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='44' height='44' viewBox='0 0 44 44'>
    <defs>
      <g id='kj' fill='none' stroke='${color}' stroke-opacity='${opacity}' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M6 2 C5 10 8 14 12 17 C16 20 21 21 25 20 C20 25 15 27 10 27'/>
        <path d='M10 27 C10 33 12 37 17 40'/>
        <circle cx='9' cy='9' r='1'/>
        <circle cx='14' cy='13' r='1'/>
      </g>
    </defs>
    <use href='#kj' x='4' y='4'/>
    <use href='#kj' x='40' y='40' transform='translate(44 44) scale(-1 -1)'/>
    <circle cx='24' cy='24' r='0.9' fill='${color}' fill-opacity='${opacity * 0.8}' stroke='none'/>
  </svg>`
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

/* ---------------------------------------------------------------- emblem */

/**
 * Siger — mahkota pengantin Sunda. Lambang pembuka & penutup undangan:
 * menara kembang di tengah, sayap melengkung, dan permata di dudukan.
 */
export function SigerMark(props: SvgProps) {
  return (
    <svg viewBox="0 0 120 100" fill="none" aria-hidden="true" {...props}>
      {/* dudukan mahkota (band) */}
      <path
        d="M20 84 C40 74 80 74 100 84"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M29 89 C43 81 77 81 91 89"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* menara kembang di pusat */}
      <path
        d="M60 78 V40"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M60 42 C54.5 49 54.5 58 60 66 C65.5 58 65.5 49 60 42 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M60 40 C57 43 57 46 60 49 C63 46 63 43 60 40 Z"
        fill="currentColor"
      />
      {/* sayap melengkung kiri-kanan */}
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M47 82 C42 64 40 46 44 31" />
        <path d="M73 82 C78 64 80 46 76 31" />
        <path d="M34 84 C28 71 25 56 29 44" />
        <path d="M86 84 C92 71 95 56 91 44" />
      </g>
      {/* gelung di ujung sayap */}
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M44 31 C45 27 48 25 51 27 C52.5 28.2 52 30.5 50 31 C48.6 31.3 46.8 30.2 45 31" />
        <path d="M76 31 C75 27 72 25 69 27 C67.5 28.2 68 30.5 70 31 C71.4 31.3 73.2 30.2 75 31" />
        <path d="M29 44 C27 41 27 37.5 30 36 C32 35 34 37 33.5 39.5 C33 41.3 30.6 41.8 29 44" />
        <path d="M91 44 C93 41 93 37.5 90 36 C88 35 86 37 86.5 39.5 C87 41.3 89.4 41.8 91 44" />
      </g>
      {/* permata pada dudukan */}
      <g fill="currentColor">
        <circle cx="30" cy="84" r="1.6" />
        <circle cx="45" cy="86.5" r="1.6" />
        <circle cx="60" cy="88" r="1.9" />
        <circle cx="75" cy="86.5" r="1.6" />
        <circle cx="90" cy="84" r="1.6" />
        <circle cx="44" cy="28" r="1.1" />
        <circle cx="76" cy="28" r="1.1" />
      </g>
    </svg>
  )
}

/* --------------------------------------------------------------- divider */

/**
 * Pembatas sulur-suluran: sulur ukiran kayu Sunda bergelung simetris
 * dengan kembang cempaka di tengah dan kuncup di kedua ujung.
 */
export function SulurDivider({
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
        <g id="sl-arm" stroke="currentColor" strokeLinecap="round" fill="none">
          <path
            strokeWidth="1.5"
            d="M118 14 C104 7 92 21 76 14 C64 8 50 17 34 14 C30 13 27 14 25 14"
          />
          <path
            strokeWidth="1.2"
            d="M92 17 C88 23 80 23 78 18 C77 14 82 12 84 15 C85 17 83 19 81 18"
          />
          <path
            strokeWidth="1.2"
            d="M56 12 C52 6 44 6 42 11 C41 15 46 17 48 14 C49 12 47 10 45 11"
          />
          <path strokeWidth="1.5" d="M34 14 C29 14 25 14 20 14" />
          <circle cx="15" cy="14" r="1.8" fill="currentColor" stroke="none" />
        </g>
      </defs>
      <use href="#sl-arm" />
      <use href="#sl-arm" transform="translate(260 0) scale(-1 1)" />
      {/* kembang cempaka di pusat */}
      <g transform="translate(130 14)" fill="currentColor">
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <path
            key={deg}
            transform={`rotate(${deg})`}
            d="M0 -2.4 C-1.5 -4 -1.5 -6.6 0 -9 C1.5 -6.6 1.5 -4 0 -2.4 Z"
          />
        ))}
        <circle r="1.6" />
      </g>
    </svg>
  )
}

/**
 * Pembatas mega mendung: barisan awan berundak kecil untuk sampul,
 * dipakai dalam warna putih di atas foto.
 */
export function MegaMendungDivider({
  className = "",
  ...props
}: SvgProps & { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 20"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <g stroke="currentColor" strokeLinecap="round" fill="none">
        <path
          strokeWidth="1.3"
          d="M12 15 a6 6 0 0 1 12 0 a6 6 0 0 1 12 0 a6 6 0 0 1 12 0 a6 6 0 0 1 12 0 a6 6 0 0 1 12 0 a6 6 0 0 1 12 0 a6 6 0 0 1 12 0 a6 6 0 0 1 12 0 a6 6 0 0 1 12 0 a6 6 0 0 1 12 0 a6 6 0 0 1 12 0 a6 6 0 0 1 12 0 a6 6 0 0 1 12 0 a6 6 0 0 1 12 0 a6 6 0 0 1 12 0 a6 6 0 0 1 12 0 a6 6 0 0 1 12 0 a6 6 0 0 1 12 0"
        />
        <path
          strokeWidth="1"
          opacity="0.55"
          d="M24 10 a4.5 4.5 0 0 1 9 0 a4.5 4.5 0 0 1 9 0 a4.5 4.5 0 0 1 9 0 a4.5 4.5 0 0 1 9 0 a4.5 4.5 0 0 1 9 0 a4.5 4.5 0 0 1 9 0 a4.5 4.5 0 0 1 9 0 a4.5 4.5 0 0 1 9 0 a4.5 4.5 0 0 1 9 0 a4.5 4.5 0 0 1 9 0 a4.5 4.5 0 0 1 9 0 a4.5 4.5 0 0 1 9 0 a4.5 4.5 0 0 1 9 0 a4.5 4.5 0 0 1 9 0 a4.5 4.5 0 0 1 9 0 a4.5 4.5 0 0 1 9 0 a4.5 4.5 0 0 1 9 0 a4.5 4.5 0 0 1 9 0 a4.5 4.5 0 0 1 9 0 a4.5 4.5 0 0 1 9 0"
        />
      </g>
    </svg>
  )
}

/* ----------------------------------------------------------------- frame */

/**
 * Sudut siger — bingkai sudut berukir dengan gelung sulur dan titik
 * permata, membingkai sampul undangan. Orientasi diatur lewat scale.
 */
export function SigerCorner(props: SvgProps) {
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
      {/* daun, permata, dan titik aksen */}
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

/* ----------------------------------------------------------------- icons */

/**
 * Kujang — pusaka khas Pasundan dengan bilah melengkung dan lubang
 * kembang kacang. Ikon pemisah di antara kedua mempelai.
 */
export function KujangIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {/* bilah melengkung */}
        <path d="M18 40 C18 26 24 14 34 7 C37 5 40 7 38.5 10.5 C30 18 24.5 26 22 34" />
        <path d="M22 34 C22.5 37 24 39 27 40.5" />
        {/* lubang kembang kacang */}
        <circle cx="26" cy="13" r="1.6" />
        <circle cx="30.5" cy="17" r="1.6" />
        <circle cx="35" cy="21.5" r="1.6" />
      </g>
      <circle cx="19" cy="43" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Angklung — sepasang tabung bambu pada rangka, alat musik khas Sunda.
 * Ikon pembuka kartu rangkaian acara.
 */
export function AngklungIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      {/* rangka bawah */}
      <path
        d="M12 40 H36"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* tiga tabung bambu berpasangan */}
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M15 40 V14" />
        <path d="M20 40 V14" />
        <path d="M24 40 V10" />
        <path d="M28 40 V10" />
        <path d="M32 40 V16" />
        <path d="M37 40 V16" />
      </g>
      {/* gelang pengikat tabung */}
      <g stroke="currentColor" strokeWidth="1.2">
        <line x1="14" y1="24" x2="21" y2="24" />
        <line x1="23" y1="21" x2="29" y2="21" />
        <line x1="31" y1="26" x2="38" y2="26" />
      </g>
      <circle cx="17.5" cy="11" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="26" cy="7" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="34.5" cy="13" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Kembang cempaka — bunga enam kelopak runcing dengan putik di pusat.
 * Ikon simpul linimasa kisah cinta & pembuka amplop digital.
 */
export function CempakaIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g fill="currentColor">
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <path
            key={deg}
            transform={`rotate(${deg} 12 12)`}
            d="M12 10.2 C10.4 8.4 9.8 5.6 10.8 3.2 C11.2 2.4 12.8 2.4 13.2 3.2 C14.2 5.6 13.6 8.4 12 10.2 Z"
          />
        ))}
        <circle cx="12" cy="12" r="1.7" />
      </g>
    </svg>
  )
}

/* -------------------------------------------------------------- animated */

/** Satu kelopak kembang cempaka — bentuk dasar animasi gugur. */
function CempakaPetal(props: SvgProps) {
  return (
    <svg viewBox="0 0 20 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M10 1 C15 4.5 18.5 10.5 17.5 16 C16.7 20.4 12.4 22.8 10 22 C7.6 22.8 3.3 20.4 2.5 16 C1.5 10.5 5 4.5 10 1 Z" />
    </svg>
  )
}

/**
 * Kembang cempaka gugur — taburan kelopak yang jatuh melayang dari atas
 * bingkai. Posisi, ukuran, durasi, dan jeda tiap kelopak bervariasi.
 * Murni dekoratif; berhenti saat prefers-reduced-motion.
 */
export function FallingCempaka({
  count = 10,
  className = "",
  style,
}: {
  count?: number
  className?: string
  style?: React.CSSProperties
}) {
  const petals = Array.from({ length: count }, (_, i) => ({
    left: `${(i * 97) % 100}%`,
    delay: `${((i * 137) % 90) / 10}s`,
    duration: `${9 + ((i * 53) % 60) / 10}s`,
    size: 9 + ((i * 71) % 11),
    flip: i % 2 === 0,
  }))
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={style}
      aria-hidden="true"
    >
      {petals.map((p, i) => (
        <CempakaPetal
          key={i}
          className="animate-petal-fall absolute -top-8"
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

/** Satu gumpal mega mendung kecil untuk animasi berarak. */
function CloudPuff({ className = "", ...props }: SvgProps & { className?: string }) {
  return (
    <svg viewBox="0 0 60 28" fill="none" aria-hidden="true" className={className} {...props}>
      <g stroke="currentColor" strokeLinecap="round">
        <path
          strokeWidth="1.4"
          d="M8 22 a9 9 0 0 1 18 0 a9 9 0 0 1 18 0 a9 9 0 0 1 18 0"
        />
        <path
          strokeWidth="1"
          opacity="0.55"
          d="M17 16 a6 6 0 0 1 12 0 a6 6 0 0 1 12 0 a6 6 0 0 1 12 0"
        />
      </g>
    </svg>
  )
}

/**
 * Mega mendung berarak — gumpal awan bergerak perlahan dari kiri ke
 * kanan secara berulang, memberi kesan langit yang hidup di sampul.
 * Murni dekoratif; berhenti saat prefers-reduced-motion.
 */
export function DriftingClouds({
  count = 4,
  className = "",
  style,
}: {
  count?: number
  className?: string
  style?: React.CSSProperties
}) {
  const clouds = Array.from({ length: count }, (_, i) => ({
    top: `${6 + ((i * 37) % 64)}%`,
    delay: `${((i * 53) % 70) / 10}s`,
    duration: `${22 + ((i * 41) % 60) / 10}s`,
    size: 70 + ((i * 61) % 60),
  }))
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={style}
      aria-hidden="true"
    >
      {clouds.map((c, i) => (
        <CloudPuff
          key={i}
          className="animate-cloud-drift absolute"
          style={{
            top: c.top,
            left: `-${c.size}px`,
            width: c.size,
            animationDelay: c.delay,
            animationDuration: c.duration,
          }}
        />
      ))}
    </div>
  )
}
