import DarkModeToggle from '@alecia/core/dark-mode/components/toggle'
import MenuToggle from '@alecia/core/layout/components/menu-toggle/menu-toggle'
import SiteLogo from '@alecia/core/layout/components/site-logo/site-logo'
import StickyHeader from '@alecia/core/layout/components/sticky-header'
import { cn } from '@alecia/util/styles'

export interface StickyNavProps {
  className?: string
}

const StickyNav = ({ className }: StickyNavProps) => (
  <StickyHeader className={cn('text-white', className)}>
    <SiteLogo />
    <div className="space-y-3">
      <MenuToggle />
      <DarkModeToggle />
    </div>
  </StickyHeader>
)

export default StickyNav
