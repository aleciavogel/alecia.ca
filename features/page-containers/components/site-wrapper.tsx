'use client'

import { type FC } from 'react'

import { type DefaultColor } from '@/common/types/colors'
import { StaticNav, StickyHeader } from '@/features/site-nav'
import SiteFooter from '@/features/site-footer'

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
      <StickyHeader />
      <StickyHeader hover={true} />

      <StaticNav />

      {children}

      <SiteFooter />
    </div>
  )
}

export default SiteWrapper
