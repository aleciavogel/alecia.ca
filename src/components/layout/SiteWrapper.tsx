'use client'

import { type FC, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

import { type DefaultColor } from '@/types/colors'
import StaticMenu from './StaticMenu'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
// import HireMeBanner from "@/components/banners/HireMe";
import UnderConstructionBanner from '../banners/UnderConstruction'

interface Props {
  primaryColor?: DefaultColor
  accentColor?: DefaultColor
  textColor?: DefaultColor
  children?: React.ReactNode
}

const SiteWrapper: FC<Props> = ({
  primaryColor = 'indigo',
  accentColor = 'pink',
  textColor = 'gray',
  children,
}) => {
  const pathname = usePathname()
  const containerRef = useRef(null)
  const colorClasses = `primary-${primaryColor} accent-${accentColor} body-${textColor}`

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: false,
        tablet: {
          smooth: false,
          breakpoint: 768,
        },
      }}
      containerRef={containerRef}
      location={pathname}
      watch={[pathname]}
      onLocationChange={(scroll: any) => scroll.scrollTo(0, { duration: 0, disableLerp: true })} // If you want to reset the scroll position to 0 for example
    >
      <div data-scroll-container ref={containerRef}>
        <div id="site-wrapper" className={`${colorClasses}`}>
          <SiteHeader />
          <SiteHeader hover={true} />

          <StaticMenu />
          {/* <SiteMenu /> */}

          {children}

          {/* <HireMeBanner /> */}
          <UnderConstructionBanner />
          <SiteFooter accentColor={accentColor} primaryColor={primaryColor} />
        </div>
      </div>
    </LocomotiveScrollProvider>
  )
}

export default SiteWrapper
