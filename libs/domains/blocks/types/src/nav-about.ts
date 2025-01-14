import { NavIcons } from '@alecia/sanity-types'

export interface NavLinksBlockProps {
  _type: 'nav.icons'
  _key: string
  title?: string
  pretitle?: string
  image: string | null
  alt: string | null
  links: NavCardLink[] | null
}

export type NavCardLink = NonNullable<NavIcons['links']>[number]
