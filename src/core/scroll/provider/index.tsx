import type { FC } from 'react'
import type { ReactNode } from 'react'

interface ScrollProviderProps {
  children?: ReactNode
}

/**
 * ScrollProvider is now a passthrough wrapper.
 * Parallax effects are handled by the useParallax hook (GSAP ScrollTrigger).
 */
const ScrollProvider: FC<ScrollProviderProps> = ({ children }) => {
  return <>{children}</>
}

export default ScrollProvider
