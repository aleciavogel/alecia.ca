import { type FC } from 'react'
// import Link from 'next/link'

import type { PostContent } from '@/types/blog'
import BlogItemContent from './BlogItemContent'
import { cn } from '@/lib/utils'

const BlogItem: FC<PostContent> = (props) => {
  // const { slug } = props

  return (
    <div
      className={cn(
        'bg-white dark:bg-transparent',
        'col-span-6 md:col-span-3',
        'rounded-lg overflow-hidden border shadow-lg',
        'pb-9',
        'relative',
      )}
    >
      {/* <Link
        href="/blog/[...slug]"
        as={`/blog/${slug}`}
        className="h-[300px] block w-full bg-blue-400"
      >
      </Link> */}
      <div className="p-4">
        <BlogItemContent {...props} />
      </div>
    </div>
  )
}

export default BlogItem
