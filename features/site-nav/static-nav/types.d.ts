import type { FunctionComponent } from 'react'

import type { NavItemWithChildren } from '../types'

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
