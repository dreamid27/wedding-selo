import type { SVGProps } from "react"

type OrnamentProps = SVGProps<SVGSVGElement>

export function ScrapbookHeart(props: OrnamentProps) {
  return (
    <svg viewBox="0 0 48 42" fill="none" aria-hidden="true" {...props}>
      <path d="M24 38C20 32 5 25 5 13 5 5 15 2 20 9l4 5 4-5c5-7 15-4 15 4 0 12-15 19-19 25Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export function ScrapbookEnvelope(props: OrnamentProps) {
  return (
    <svg viewBox="0 0 84 62" fill="none" aria-hidden="true" {...props}>
      <rect x="5" y="7" width="74" height="48" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="m6 10 36 27L78 10M7 53l25-21m45 21L52 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M58 3c4 4 7 4 12 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function ScrapbookMusic(props: OrnamentProps) {
  return (
    <svg viewBox="0 0 96 54" fill="none" aria-hidden="true" {...props}>
      <path d="M6 29c6-10 8 10 14 0s8 10 14 0 8 10 14 0 8 10 14 0 8 10 14 0 8 10 14 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 16v19m0 0c0 5-8 6-8 1s8-6 8-1Zm55-17v19m0 0c0 5-8 6-8 1s8-6 8-1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function ScrapbookDivider(props: OrnamentProps) {
  return (
    <svg viewBox="0 0 240 36" fill="none" aria-hidden="true" {...props}>
      <path d="M2 18c22-14 31 14 53 0s31 14 53 0 31 14 53 0 31 14 77 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M108 14c4-6 12-6 16 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function ScrapbookCorner(props: OrnamentProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" {...props}>
      <path d="M4 96C5 48 25 15 74 5M4 72c16-2 28-10 36-25M19 94c17-7 29-18 35-35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M70 5c8 4 17 2 25-3M38 47c7 2 12 0 17-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function scrapbookPattern(color: string, opacity = 0.055) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><g fill="none" stroke="${color}" stroke-width="1.2" opacity="${opacity}"><path d="M12 28c17-12 27 13 44 0s27 13 44 0 27 13 48 0"/><path d="M25 113c12-22 26-22 38 0s26 22 38 0 26-22 46 0"/><path d="M83 21c5-7 13-7 18 0"/><path d="M23 70c7-9 15-9 22 0s15 9 22 0"/></g></svg>`
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}
