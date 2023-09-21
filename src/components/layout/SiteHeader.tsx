import { type FC } from 'react'

import SiteLogo from '@/components/pages/shared/Brand'
import ThemeSettings from '@/components/pages/shared/ThemeSettings'
import MenuIcon from './header/MenuIcon'
import SiteSidebar from './sidebar/SiteSidebar'

interface HeaderRightProps {
  children: React.ReactNode
}

const HeaderRight: FC<HeaderRightProps> = ({ children }) => {
  return <div className="visibleChild:mt-6 visibleChild:mb-0">{children}</div>
}

interface SiteHeaderProps {
  hasColor?: boolean
  hover?: boolean
}

const SiteHeader: FC<SiteHeaderProps> = ({ hover = false, hasColor = false }) => {
  const hoverClass = hover ? 'site-header-hover' : ''
  const colorClass = hasColor ? 'site-header-color' : hover ? 'text-transparent' : 'text-white'
  const className = `site-header ${colorClass} ${hoverClass}`

  if (hover) {
    return (
      <div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#site-wrapper"
        aria-hidden={!hover}
        className={className}
      >
        <SiteLogo hover={hover} />
        <HeaderRight>
          <SiteSidebar>
            <MenuIcon hover={hover} />
          </SiteSidebar>
          <ThemeSettings hover={hover} />
        </HeaderRight>
      </div>
    )
  }

  return (
    <div
      data-scroll
      data-scroll-sticky
      data-scroll-target="#site-wrapper"
      aria-hidden={false}
      className={className}
    >
      <SiteLogo hover={hover} />
      <HeaderRight>
        <MenuIcon hover={hover} />
        <ThemeSettings hover={hover} />
      </HeaderRight>
    </div>
  )
}

export default SiteHeader
