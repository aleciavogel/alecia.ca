'use client'

import { usePathname } from 'next/navigation'
import { type FC, useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

interface ScrollProviderProps {
  children?: React.ReactNode
}

const ScrollProvider: FC<ScrollProviderProps> = ({ children }) => {
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
      onLocationChange={(scroll: any) => scroll.scrollTo(0, { duration: 0, disableLerp: true })} // If you want to reset the scroll position to 0 for example
    >
      <div data-scroll-container ref={containerRef}>
        {children}
      </div>
    </LocomotiveScrollProvider>
  )
}

export default ScrollProvider
