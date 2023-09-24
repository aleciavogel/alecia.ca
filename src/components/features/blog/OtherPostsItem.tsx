import { type FC } from 'react'
import Link from 'next/link'

import type { PostContent } from '@/types/blog'
import { BLOG_CATEGORIES } from '@/config/blog-categories'
import FormattedDate from '@/components/features/blog/FormattedDate'

const OtherPostsItem: FC<PostContent> = ({ slug, frontMatter: { title, date, description } }) => {
  const categorySlug = slug.split('/')[0]
  const category = BLOG_CATEGORIES[categorySlug].title

  return (
    <div className="w-full bg-white col-span-3 rounded-lg overflow-hidden border shadow-lg relative">
      <div className="p-4">
        <div className="space-y-3 h-full">
          <div className="text-sm text-gray-600">
            <Link
              href={`/blog/${categorySlug}`}
              className="zigzag-link uppercase tracking-relaxed font-semibold"
            >
              {category}
            </Link>
            <span className="text-gray-500 mx-2">&mdash;</span>
            <FormattedDate dateString={date} />
          </div>
          <div className="mb-4 space-y-3">
            <Link href="/blog/[...slug]" as={`/blog/${slug}`}>
              <h2 className="line-clamp-2 text-2xl mb-1 text-primary-600 hover:text-accent-600 transition-colors duration-300 ease-in-out">
                {title}
              </h2>
            </Link>
            <p className="line-clamp-2 max-w-[460px] text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherPostsItem
