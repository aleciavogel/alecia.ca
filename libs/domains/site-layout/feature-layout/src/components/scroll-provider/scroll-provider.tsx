'use client'

import type { FC } from 'react'
import React, { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import type LocomotiveScroll from 'locomotive-scroll'
import { usePathname } from 'next/navigation'

interface ScrollProviderProps {
  children?: React.ReactNode
}

export const ScrollProvider: FC<ScrollProviderProps> = ({ children }) => {
  const pathname = usePathname()
  const containerRef = useRef(null)

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        tablet: {
          smooth: false,
          breakpoint: 768,
        },
      }}
      watch={[]}
      containerRef={containerRef}
      location={pathname}
      onLocationChange={(scroll: LocomotiveScroll) =>
        scroll.scrollTo(0, { duration: 0, disableLerp: true })
      } // If you want to reset the scroll position to 0 for example
    >
      <React.StrictMode>
        <div data-scroll-container ref={containerRef}>
          {children}
        </div>
      </React.StrictMode>
    </LocomotiveScrollProvider>
  )
}
