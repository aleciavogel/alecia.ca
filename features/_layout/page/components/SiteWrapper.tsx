'use client'

import { type FC } from 'react'

import { type DefaultColor } from '@/common/types/colors'
import StaticMenu from './StaticMenu'
import SiteHeader from '../../header/components/SiteHeader'
import SiteFooter from '../../footer/components/SiteFooter'
// import HireMeBanner from "@/components/banners/HireMe";
// import UnderConstructionBanner from '../banners/UnderConstruction'

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
  const colorClasses = `primary-${primaryColor} accent-${accentColor} body-${textColor}`

  return (
    <div data-scroll-section id="site-wrapper" className={`${colorClasses}`}>
      <SiteHeader />
      <SiteHeader hover={true} />

      <StaticMenu />
      {/* <SiteMenu /> */}

      {children}

      {/* <HireMeBanner /> */}
      {/* <UnderConstructionBanner /> */}
      <SiteFooter accentColor={accentColor} primaryColor={primaryColor} />
    </div>
  )
}

export default SiteWrapper
