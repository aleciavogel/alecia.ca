import DarkModeToggle from '@alecia/dark-mode/toggle'
import MenuToggle from '@alecia/site-layout-ui/menu-toggle/menu-toggle'
import SiteLogo from '@alecia/site-layout-ui/site-logo/site-logo'
import StickyHeader from '@alecia/site-layout-ui/sticky-header'
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
