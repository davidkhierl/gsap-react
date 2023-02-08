import { gsap } from 'gsap'
import { MutableRefObject, useMemo } from 'react'

export function useGsapContext<T = any>(scope: MutableRefObject<T>) {
  return useMemo(() => gsap.context(() => {}, scope), [scope])
}
