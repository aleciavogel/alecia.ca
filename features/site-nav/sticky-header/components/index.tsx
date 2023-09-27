import { type FC } from 'react'

import { cn } from '@/common/lib/utils'
import { Sidebar } from '@/features/site-nav'
import { DarkModeToggle } from '@/features/site-theme'
import Search, { SearchIcon } from '@/features/site-search'
import BrandLink from './brand-link'
import MenuButton from './menu-button'

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
        <BrandLink hover={hover} />
        <HeaderRight>
          <Sidebar>
            <MenuButton hover={hover} />
          </Sidebar>
          <Search />
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
      <BrandLink hover={hover} />
      <HeaderRight>
        <MenuButton hover={hover} />
        <SearchIcon />
        <DarkModeToggle hover={hover} />
      </HeaderRight>
    </div>
  )
}

export default SiteHeader
