import { useEffect, useState } from "react"

/** Sisa waktu menuju `target` (ISO), diperbarui tiap detik. */
export function useCountdown(target: string) {
  const [now, setNow] = useState<number | null>(null)
  useEffect(() => {
    setNow(Date.now())
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])
  if (now === null) return null
  const diff = Math.max(0, new Date(target).getTime() - now)
  return {
    hari: Math.floor(diff / 86_400_000),
    jam: Math.floor(diff / 3_600_000) % 24,
    menit: Math.floor(diff / 60_000) % 60,
    detik: Math.floor(diff / 1000) % 60,
  }
}
