'use client'

import { ReactNode, useEffect, useRef } from 'react'
import gsap from 'gsap'

interface ExperimentWrapperProps {
  children: ReactNode
}

export function InterceptedExperimentWrapper({ children }: ExperimentWrapperProps) {
  const wrapperRef = useRef(null)
  const contentRef = useRef(null)

  // Animate entrance
  useEffect(() => {
    const tl = gsap.timeline()

    // Wrapper scaling effect
    tl.fromTo(
      wrapperRef.current,
      { scale: 1.05, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: 'power3.out' },
    )

    // Fade in content after wrapper animation
    tl.to(contentRef.current, { opacity: 1, duration: 0.4 }, '-=0.2')
  }, [])

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div ref={contentRef} className="opacity-0">
        {children}
      </div>
    </div>
  )
}
