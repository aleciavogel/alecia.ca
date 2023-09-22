import { type FC } from 'react'
import Link from 'next/link'

import type { PostContent } from '@/types/blog'

const OtherPostsItem: FC<PostContent> = (props) => {
  const { slug } = props

  return (
    <div className="col-span-3 rounded-lg overflow-hidden border shadow-lg pb-9 relative">
      <Link
        href="/blog/[...slug]"
        as={`/blog/${slug}`}
        className="h-[300px] block w-full bg-blue-400"
      >
        {/* This is where the cover image will go */}
      </Link>
      <div className="p-4">Beep</div>
    </div>
  )
}

export default OtherPostsItem
