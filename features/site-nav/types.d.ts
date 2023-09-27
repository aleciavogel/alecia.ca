import type { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface NavItem {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
  label?: string
  srOnly?: boolean
  icon?: IconProp
}

export interface NavItemWithChildren extends NavItem {
  items?: NavItemWithChildren[]
  description?: string
}

export interface SidebarNavItem extends Omit<NavItemWithChildren, 'href'> {
  href?: string
}
