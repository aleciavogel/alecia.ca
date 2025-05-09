'use client'

import { stegaClean } from '@sanity/client/stega'

import GiscusComments from '@alecia/vendors/giscus/components/giscus-comments'

interface BlogCommentsProps {
  title?: string | null
}

const BlogComments = ({ title }: BlogCommentsProps) => (
  <div className="mx-auto w-full px-16 md:max-w-screen-sm lg:max-w-screen-md">
    <GiscusComments title={stegaClean(title) ?? 'Untitled'} />
  </div>
)

export default BlogComments
