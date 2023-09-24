import { type FC } from 'react'

import SiteLogo from '@/components/layout/Brand'
import DarkModeToggle from '@/components/features/site-theme/DarkModeToggle'
import MenuToggle from '@/components/layout/header/MenuToggle'
import SiteSidebar from '@/components/layout/sidebar/SiteSidebar'
import { cn } from '@/lib/utils'
import SearchTrigger from '../features/site-search/SearchTrigger'
import SearchDialog from '../features/site-search/SearchDialog'

interface HeaderRightProps {
  children: React.ReactNode
}

const HeaderRight: FC<HeaderRightProps> = ({ children }) => {
  return <div className="visibleChild:mt-2 visibleChild:mb-0">{children}</div>
}

interface SiteHeaderProps {
  hasColor?: boolean
  hover?: boolean
}

const SiteHeader: FC<SiteHeaderProps> = ({ hover = false, hasColor = false }) => {
  const hoverClass = hover ? 'site-header-hover' : ''
  const colorClass = hasColor ? 'site-header-color' : hover ? 'text-transparent' : 'text-white'

  if (hover) {
    return (
      <div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#site-wrapper"
        aria-hidden={!hover}
        className={cn('site-header', colorClass, hoverClass)}
      >
        <SiteLogo hover={hover} />
        <HeaderRight>
          <SiteSidebar>
            <MenuToggle hover={hover} />
          </SiteSidebar>
          <SearchDialog />
          <DarkModeToggle hover={hover} />
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
      className={cn('site-header', colorClass, hoverClass)}
    >
      <SiteLogo hover={hover} />
      <HeaderRight>
        <MenuToggle hover={hover} />
        <SearchTrigger hover={hover} />
        <DarkModeToggle hover={hover} />
      </HeaderRight>
    </div>
  )
}

export default SiteHeader
