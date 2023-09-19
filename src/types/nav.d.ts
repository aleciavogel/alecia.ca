export interface NavItem {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
  label?: string
  srOnly?: boolean
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}
