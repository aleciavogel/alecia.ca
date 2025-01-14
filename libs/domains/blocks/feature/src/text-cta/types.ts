import type { PortableTextBlock } from 'next-sanity'

import type { InternalLinkProps } from '@alecia/types'

export interface TextCTAProps {
  _type: 'text.cta'
  _key: string
  layout?: 'left' | 'right'
  title?: string
  pretitle?: string
  body?: PortableTextBlock[]
  shouldUseLinkIcon?: boolean
  icon?: {
    name?: string
  }
  linkIcon?: string | null
  link: InternalLinkProps | null
}
