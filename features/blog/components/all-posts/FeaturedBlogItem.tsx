import { type FC } from 'react'

import type { PostContent } from '@/features/blog/types'
import Link from 'next/link'
import BlogItemContent from './BlogItemContent'

const FeaturedBlogItem: FC<PostContent> = (props) => {
  const { slug } = props

  return (
    <div className="col-span-6 rounded-lg overflow-hidden border dark:border-body shadow-lg grid grid-cols-10 gap-8">
      <Link href="/blog/[...slug]" as={`/blog/${slug}`} className="h-full col-span-4 bg-blue-400">
        {/* This is where the cover image will go */}
      </Link>
      <div className="p-4 col-span-6">
        <BlogItemContent {...props} />
      </div>
    </div>
  )
}

export default FeaturedBlogItem
