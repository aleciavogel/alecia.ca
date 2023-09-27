import type { NavItemWithChildren } from '../types'

export interface SidebarLink extends Omit<NavItemWithChildren, 'href'> {
  href?: string
}
