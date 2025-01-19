import { NavIcons } from '@alecia/sanity-types'

export interface NavLink {
  _type: 'page' | 'blog.category'
  _id: string
  label: string
  slug?: string | null
  icon?: string | null
}

export interface NavLinksBlockProps {
  _type: 'nav.icons'
  _key: string
  title?: string
  pretitle?: string
  image: string | null
  alt: string | null
  links?: NavLink[] | null
}

export type NavCardLink = NonNullable<NavIcons['links']>[number]
