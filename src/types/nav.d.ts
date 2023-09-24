import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import type { FunctionComponent } from 'react'

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

export interface MainNavItemWithChildren extends Omit<NavItemWithChildren, 'href'> {
  href?: string
}

export interface MainNavItem extends MainNavItemWithChildren {
  DropdownContent?:
    | FunctionComponent<any>
    | {
        Left?: FunctionComponent<any>
        Right?: FunctionComponent<any>
      }
}

export interface SidebarNavItem extends NavItemWithChildren {}
