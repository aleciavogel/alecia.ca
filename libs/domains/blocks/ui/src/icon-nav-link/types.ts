import type { HTMLProps } from 'react'

export interface IconNavLinkProps extends HTMLProps<HTMLAnchorElement> {
  icon?: string | null
  label?: string
  subtitle?: string
  slug: string | null
}
