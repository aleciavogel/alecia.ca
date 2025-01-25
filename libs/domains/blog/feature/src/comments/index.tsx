'use client'

import { stegaClean } from '@sanity/client/stega'

import GiscusComments from '@alecia/giscus-ui'

interface BlogCommentsProps {
  title?: string | null
}

const BlogComments = ({ title }: BlogCommentsProps) => (
  <div className="mx-auto w-full px-16 md:max-w-screen-sm lg:max-w-screen-md">
    <GiscusComments title={stegaClean(title) ?? 'Untitled'} />
  </div>
)

export default BlogComments
