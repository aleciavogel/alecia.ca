import { PortableTextBlock } from 'next-sanity'

import { BlogPortableText } from '@alecia/blog/blog-portable-text'
import { ResourcesIndexQueryResult } from '@alecia/sanity-types/sanity.types'

type SingleResourceCategory = NonNullable<ResourcesIndexQueryResult['resources']>[number]
type SingleResourceLink = NonNullable<SingleResourceCategory['links']>[number]

const ResourceLinkContent = (link: SingleResourceLink) => (
  <div className="text-sm p-6">
    <BlogPortableText value={link.content as PortableTextBlock[]} />
  </div>
)

export default ResourceLinkContent
