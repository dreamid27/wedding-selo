/**
 * Ornamen kustom bertema floral untuk template "Fleurette".
 *
 * Semua aset digambar tangan sebagai SVG bergaya taman mawar Inggris:
 * - Rose trellis : taburan mawar lima kelopak & daun di kisi diagonal —
 *                  latar halaman yang halus seperti kertas bermotif.
 * - Petal strip  : barisan kelopak kecil untuk kepala kartu acara.
 * - Rose bloom   : emblem mawar mekar tampak depan, lambang cinta yang
 *                  sedang bersemi penuh.
 * - Vine divider : sulur daun simetris dengan mawar kecil di pusat.
 * - Corner spray : rangkaian mawar, kuncup, dan daun pembingkai sampul.
 * - Ikon kuncup mawar, bunga daisy, dan ranting daun sebagai aksen.
 * Ornamen animasi (kelopak gugur, mawar mekar, ranting bergoyang)
 * membuat bunga terasa hidup — dinonaktifkan saat reduced motion.
 */

type SvgProps = React.SVGProps<SVGSVGElement>

/* ---------------------------------------------------------------- pattern */

/**
 * Motif rose trellis sebagai background-image CSS: mawar lima kelopak
 * besar-kecil berselang di kisi diagonal, diselingi daun dan titik serbuk.
 */
export function roseTrellisPattern(color: string, opacity = 0.035): string {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'>
    <defs>
      <path id='pt' d='M0 -2.5 C-2.6 -4.4 -3 -8 -1 -10.6 C0 -11.9 1.6 -11.5 2.2 -10 C3.4 -7 2.4 -3.8 0 -2.5 Z'/>
      <g id='rose' fill='${color}' fill-opacity='${opacity}'>
        <use href='#pt'/>
        <use href='#pt' transform='rotate(72)'/>
        <use href='#pt' transform='rotate(144)'/>
        <use href='#pt' transform='rotate(216)'/>
        <use href='#pt' transform='rotate(288)'/>
        <circle r='1.6'/>
      </g>
      <path id='leaf' fill='${color}' fill-opacity='${opacity * 0.9}'
        d='M0 0 C2.8 -1 5.8 -0.6 8 1.2 C5.8 3 2.8 3.4 0 2.4 C-0.8 1.6 -0.8 0.8 0 0 Z'/>
    </defs>
    <use href='#rose' x='16' y='16'/>
    <use href='#rose' x='48' y='48' transform-origin='48 48' transform='rotate(30) scale(0.72)'/>
    <use href='#leaf' x='40' y='14' transform='rotate(-35 40 14)'/>
    <use href='#leaf' x='12' y='46' transform='rotate(140 12 46)'/>
    <g fill='${color}' fill-opacity='${opacity * 0.8}'>
      <circle cx='34' cy='34' r='0.9'/>
      <circle cx='58' cy='20' r='0.9'/>
      <circle cx='6' cy='60' r='0.9'/>
    </g>
  </svg>`
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

/** Barisan kelopak kecil sebagai background-image CSS untuk bidang sempit. */
export function petalStripPattern(color: string, opacity = 0.16): string {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'>
    <g fill='none' stroke='${color}' stroke-opacity='${opacity}' stroke-width='1.1' stroke-linecap='round'>
      <path d='M15 9 C12.4 6.8 12.4 3 15 1 C17.6 3 17.6 6.8 15 9 Z'/>
      <path d='M15 29 C12.4 26.8 12.4 23 15 21 C17.6 23 17.6 26.8 15 29 Z'/>
      <path d='M0 19 C2 16.4 5.8 16.4 8 19 C5.8 21.6 2 21.6 0 19 Z'/>
      <path d='M22 19 C24 16.4 27.8 16.4 30 19 C27.8 21.6 24 21.6 22 19 Z'/>
      <circle cx='15' cy='15' r='0.9' fill='${color}' fill-opacity='${opacity}' stroke='none'/>
    </g>
  </svg>`
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

/* ---------------------------------------------------------------- emblem */

/**
 * Rose bloom — mawar taman mekar tampak depan dengan tiga lapis kelopak
 * dan gelung di pusat. Emblem pembuka & penutup undangan.
 */
export function RoseBloomMark(props: SvgProps) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      {/* lapis terluar — lima kelopak lebar */}
      <g stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
        {[0, 72, 144, 216, 288].map((deg) => (
          <path
            key={deg}
            transform={`rotate(${deg} 48 48)`}
            d="M48 44 C38 40 32 30 34 19 C36 12 44 9 48 15 C52 9 60 12 62 19 C64 30 58 40 48 44 Z"
          />
        ))}
      </g>
      {/* lapis tengah — lima kelopak diputar setengah langkah */}
      <g stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
        {[36, 108, 180, 252, 324].map((deg) => (
          <path
            key={deg}
            transform={`rotate(${deg} 48 48)`}
            d="M48 45 C42 41.5 39 35 41 28.5 C42.5 24 47 23 48 27 C49 23 53.5 24 55 28.5 C57 35 54 41.5 48 45 Z"
          />
        ))}
      </g>
      {/* gelung pusat mawar */}
      <path
        d="M48 55 C43.6 55 40.5 51.4 41.6 47.4 C42.6 44 46.6 42.6 49.4 44.7 C51.6 46.3 51.8 49.5 49.8 51.2 C48.2 52.5 45.8 52 45 50.2 C44.4 48.8 45.4 47.3 46.9 47.3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* dua daun penopang */}
      <g stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
        <path d="M40 62 C33 66 24.5 65.5 18.5 60.5 C24 55 32.5 54.5 40 58.5 C40.8 59.8 40.8 60.9 40 62 Z" />
        <path d="M56 62 C63 66 71.5 65.5 77.5 60.5 C72 55 63.5 54.5 56 58.5 C55.2 59.8 55.2 60.9 56 62 Z" />
        <path d="M24 60.4 C29.5 59.6 34.5 59.7 39 60.3" strokeWidth="0.9" />
        <path d="M72 60.4 C66.5 59.6 61.5 59.7 57 60.3" strokeWidth="0.9" />
      </g>
      {/* tangkai & titik embun */}
      <path
        d="M48 58 C48 66 48 73 48 80"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <g fill="currentColor">
        <circle cx="48" cy="85" r="1.5" />
        <circle cx="27" cy="30" r="1.1" />
        <circle cx="69" cy="30" r="1.1" />
      </g>
    </svg>
  )
}

/* --------------------------------------------------------------- divider */

/**
 * Pembatas sulur bunga: ranting daun bergelung simetris dengan mawar
 * lima kelopak di tengah dan kuncup di kedua ujung.
 */
export function FloralVineDivider({
  className = "",
  ...props
}: SvgProps & { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 30"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <defs>
        <g id="fv-arm" stroke="currentColor" strokeLinecap="round" fill="none">
          {/* sulur utama */}
          <path
            strokeWidth="1.4"
            d="M112 15 C92 8 74 22 54 15 C42 11 30 15 22 15"
          />
          {/* daun berpasangan */}
          <path
            strokeWidth="1.1"
            d="M96 12.5 C93 8.5 93.5 4.5 97.5 3 C99.5 6.8 98.8 10.4 96 12.5 Z"
          />
          <path
            strokeWidth="1.1"
            d="M76 17.8 C79 21.8 78.5 25.8 74.5 27.3 C72.5 23.5 73.2 19.9 76 17.8 Z"
          />
          <path
            strokeWidth="1.1"
            d="M56 12.8 C53 8.8 53.5 4.8 57.5 3.3 C59.5 7.1 58.8 10.7 56 12.8 Z"
          />
          {/* kuncup di ujung */}
          <path
            strokeWidth="1.2"
            d="M17 15 C14.8 12.5 15 9 17.5 7 C20 9 20.2 12.5 18 15 C17.7 15.3 17.3 15.3 17 15 Z"
          />
        </g>
      </defs>
      <use href="#fv-arm" />
      <use href="#fv-arm" transform="translate(260 0) scale(-1 1)" />
      {/* mawar kecil di pusat */}
      <g
        stroke="currentColor"
        strokeWidth="1.1"
        fill="none"
        strokeLinejoin="round"
      >
        {[0, 72, 144, 216, 288].map((deg) => (
          <path
            key={deg}
            transform={`rotate(${deg} 130 15)`}
            d="M130 12.6 C127.8 10.8 127.5 7.6 129.2 5.4 C129.7 4.9 130.3 4.9 130.8 5.4 C132.5 7.6 132.2 10.8 130 12.6 Z"
          />
        ))}
        <circle cx="130" cy="15" r="1.6" fill="currentColor" stroke="none" />
      </g>
    </svg>
  )
}

/* ----------------------------------------------------------------- frame */

/**
 * Corner spray — rangkaian sudut berisi satu mawar mekar, kuncup, dan
 * ranting daun untuk membingkai sampul. Orientasi diatur lewat scale.
 */
export function CornerSpray(props: SvgProps) {
  return (
    <svg viewBox="0 0 90 90" fill="none" aria-hidden="true" {...props}>
      {/* garis bingkai tipis */}
      <g stroke="currentColor" strokeLinecap="round" fill="none">
        <path strokeWidth="1.6" d="M88 2 H14 Q2 2 2 14 V88" />
        {/* mawar mekar di sudut */}
        <g strokeWidth="1.2" strokeLinejoin="round">
          {[0, 72, 144, 216, 288].map((deg) => (
            <path
              key={deg}
              transform={`rotate(${deg} 22 22)`}
              d="M22 17.6 C18.6 15 18.2 10 20.8 6.8 C21.5 6 22.5 6 23.2 6.8 C25.8 10 25.4 15 22 17.6 Z"
            />
          ))}
          <circle cx="22" cy="22" r="2.4" />
        </g>
        {/* ranting daun menjuntai ke kanan */}
        <path strokeWidth="1.2" d="M34 26 C46 30 56 30 68 26" />
        <path
          strokeWidth="1"
          d="M44 28.6 C43 24.6 44.6 21 48.4 20 C49.4 24 47.8 27.6 44 28.6 Z"
        />
        <path
          strokeWidth="1"
          d="M56 28.8 C57 32.8 55.4 36.4 51.6 37.4 C50.6 33.4 52.2 29.8 56 28.8 Z"
        />
        {/* ranting daun menjuntai ke bawah */}
        <path strokeWidth="1.2" d="M26 34 C30 46 30 56 26 68" />
        <path
          strokeWidth="1"
          d="M28.6 44 C24.6 43 21 44.6 20 48.4 C24 49.4 27.6 47.8 28.6 44 Z"
        />
        <path
          strokeWidth="1"
          d="M28.8 56 C32.8 57 36.4 55.4 37.4 51.6 C33.4 50.6 29.8 52.2 28.8 56 Z"
        />
        {/* kuncup penutup ranting */}
        <path
          strokeWidth="1.1"
          d="M72 26 C70.2 23.8 70.4 20.8 72.6 19 C74.8 20.8 75 23.8 73.2 26 C72.8 26.4 72.4 26.4 72 26 Z"
        />
        <path
          strokeWidth="1.1"
          d="M26 72 C23.8 70.2 20.8 70.4 19 72.6 C20.8 74.8 23.8 75 26 73.2 C26.4 72.8 26.4 72.4 26 72 Z"
        />
      </g>
      {/* titik serbuk */}
      <g fill="currentColor">
        <circle cx="62" cy="18" r="1.1" />
        <circle cx="18" cy="62" r="1.1" />
        <circle cx="42" cy="40" r="1" />
      </g>
    </svg>
  )
}

/* ----------------------------------------------------------------- icons */

/** Kuncup mawar bertangkai — aksen kecil pengganti ikon hati. */
export function RosebudIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 32 40" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {/* kelopak kuncup */}
        <path
          strokeWidth="1.4"
          d="M16 18 C10.5 15 9 8.5 12.5 4 C14 2.2 18 2.2 19.5 4 C23 8.5 21.5 15 16 18 Z"
        />
        <path strokeWidth="1.1" d="M13 6.5 C14.8 9.5 15.6 13 16 17" />
        <path strokeWidth="1.1" d="M19 6.5 C17.9 9 17.3 11.5 17 14" />
        {/* kelopak hijau (sepal) */}
        <path strokeWidth="1.2" d="M12 14 C11 17 12.5 19.5 16 20.5" />
        <path strokeWidth="1.2" d="M20 14 C21 17 19.5 19.5 16 20.5" />
        {/* tangkai & daun */}
        <path strokeWidth="1.4" d="M16 20.5 V37" />
        <path
          strokeWidth="1.1"
          d="M16 27 C12.6 27.4 9.8 25.8 8.8 22.6 C12.2 22.2 15 23.8 16 27 Z"
        />
        <path
          strokeWidth="1.1"
          d="M16 31 C19.4 31.4 22.2 29.8 23.2 26.6 C19.8 26.2 17 27.8 16 31 Z"
        />
      </g>
    </svg>
  )
}

/** Bunga daisy lima kelopak — aksen bagian amplop & acara. */
export function DaisyIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
        {[0, 72, 144, 216, 288].map((deg) => (
          <path
            key={deg}
            transform={`rotate(${deg} 12 12)`}
            d="M12 9.4 C9.8 7.6 9.4 4.4 11.2 2.2 C11.6 1.7 12.4 1.7 12.8 2.2 C14.6 4.4 14.2 7.6 12 9.4 Z"
          />
        ))}
        <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      </g>
    </svg>
  )
}

/** Ranting daun kecil — penghias sisi judul. */
export function LeafSprigIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 48 24" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeLinecap="round" fill="none">
        <path strokeWidth="1.3" d="M2 20 C16 18 32 12 46 4" />
        <path
          strokeWidth="1"
          d="M12 18.2 C10.6 14.8 11.6 11.4 14.8 9.6 C16.2 13 15.2 16.4 12 18.2 Z"
        />
        <path
          strokeWidth="1"
          d="M22 15.4 C20.6 12 21.6 8.6 24.8 6.8 C26.2 10.2 25.2 13.6 22 15.4 Z"
        />
        <path
          strokeWidth="1"
          d="M32 11.8 C30.6 8.4 31.6 5 34.8 3.2 C36.2 6.6 35.2 10 32 11.8 Z"
        />
        <path
          strokeWidth="1"
          d="M15 19.6 C17.4 22.4 20.8 23.2 24 21.6 C21.6 18.8 18.2 18 15 19.6 Z"
        />
        <path
          strokeWidth="1"
          d="M25 16.6 C27.4 19.4 30.8 20.2 34 18.6 C31.6 15.8 28.2 15 25 16.6 Z"
        />
      </g>
    </svg>
  )
}

/* -------------------------------------------------------------- animated */

/** Satu kelopak mawar — bentuk dasar untuk animasi kelopak gugur. */
function Petal(props: SvgProps) {
  return (
    <svg viewBox="0 0 20 22" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M10 1 C15 4 18 9.5 17 15 C16.2 19.4 12 21.8 10 21 C8 21.8 3.8 19.4 3 15 C2 9.5 5 4 10 1 Z" />
    </svg>
  )
}

/**
 * Kelopak gugur — taburan kelopak yang jatuh melayang dari atas bingkai.
 * Posisi, ukuran, durasi, dan jeda tiap kelopak dibuat bervariasi agar
 * terasa alami. Murni dekoratif; berhenti saat prefers-reduced-motion.
 */
export function FallingPetals({
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
    size: 10 + ((i * 71) % 12),
    flip: i % 2 === 0,
  }))
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={style}
      aria-hidden="true"
    >
      {petals.map((p, i) => (
        <Petal
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
