import { type FC } from 'react'
import Link from 'next/link'

import type { PostContent } from '@/features/blog/types'
import { BLOG_CATEGORIES } from '@/features/blog/constants'
import { FormattedDate } from '@/features/formatted-text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/pro-regular-svg-icons'

const BlogItemContent: FC<PostContent> = ({
  slug,
  frontMatter: { title, createdAt, description },
  timeToRead,
}) => {
  const categorySlug = slug.split('/')[0]
  const category = BLOG_CATEGORIES[categorySlug].title

  return (
    <div className="dark:text-body space-y-3 h-full">
      <div className="text-sm">
        <Link
          href={`/blog/${categorySlug}`}
          className="zigzag-link uppercase tracking-relaxed font-semibold"
        >
          {category}
        </Link>
        <span className="text-gray-500 mx-2">&mdash;</span>
        <FormattedDate dateString={createdAt} />
      </div>
      <div className="mb-4 space-y-3">
        <Link href="/blog/[...slug]" as={`/blog/${slug}`}>
          <h2 className="line-clamp-3 md:line-clamp-2 text-2xl mb-1 text-primary-600 dark:text-primary-300 hover:text-accent-600 dark:hover:text-accent-300 transition-colors duration-300 ease-in-out">
            {title}
          </h2>
        </Link>
        <p className="line-clamp-4 md:line-clamp-3 max-w-[460px]">{description}</p>
      </div>
      <div className="absolute bottom-4 left-4">
        <p className="text-sm text-body">
          <FontAwesomeIcon icon={faClock} className="mr-2 text-primary-600 dark:text-primary-300" />
          <span>{timeToRead}</span>
        </p>
      </div>
    </div>
  )
}

export default BlogItemContent
