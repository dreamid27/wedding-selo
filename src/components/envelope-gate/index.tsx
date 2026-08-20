import { GateClassic } from "./variants/classic"
import { GateCurtain } from "./variants/curtain"
import { GateDoors } from "./variants/doors"
import { GateScroll } from "./variants/scroll"
import { GateVeil } from "./variants/veil"
import { GateVellum } from "./variants/vellum"
import type { WeddingTemplate } from "@/lib/templates"
import type { GateProps } from "./shared"

export type GateVariant = keyof typeof gateVariants

export const gateVariants = {
  classic: GateClassic,
  vellum: GateVellum,
  curtain: GateCurtain,
  scroll: GateScroll,
  doors: GateDoors,
  veil: GateVeil,
} satisfies Record<string, (props: GateProps) => React.ReactNode>

export function resolveGate(template: WeddingTemplate) {
  const key = template.layout?.gate ?? "classic"
  return gateVariants[key] ?? GateClassic
}

export function EnvelopeGate(props: GateProps) {
  const Comp = resolveGate(props.template)
  return <Comp {...props} />
}
