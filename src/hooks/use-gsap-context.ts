import { gsap } from 'gsap'
import { MutableRefObject, useMemo } from 'react'
import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect'

export function useGsapContext<T = any>(
  scope: MutableRefObject<T>,
  autoRevert = true
) {
  const context = useMemo(() => gsap.context(() => {}, scope), [scope])

  useIsomorphicLayoutEffect(() => {
    return () => {
      if (autoRevert) context.revert()
    }
  }, [context])

  return context
}
