import { type FC } from 'react'
// import Link from 'next/link'
import { cn } from '@/common/lib/utils'
import type { PostContent } from '@/features/blog/types'
import BlogItemContent from './blog-item-content'

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