import { FC } from 'react'
import * as React from 'react'
import { PortableTextBlock } from 'next-sanity'

import { BlogPortableText } from '@alecia/blog'
import { ResourcesIndexQueryResult } from '@alecia/sanity-types'

type SingleResourceCategory = NonNullable<ResourcesIndexQueryResult['resources']>[number]
type SingleResourceLink = NonNullable<SingleResourceCategory['links']>[number]

export const ResourceLinkContent: FC<SingleResourceLink> = (link) => (
  <div className="text-sm p-6">
    <BlogPortableText value={link.content as PortableTextBlock[]} />
  </div>
)
