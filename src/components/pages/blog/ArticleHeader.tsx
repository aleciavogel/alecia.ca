import { type FC } from 'react'
import Link from 'next/link'

import { BLOG_CATEGORIES } from '@/config/blog-categories'
import ReadMoreArrowIcon from '@/components/icons/ReadMoreIcon'

interface Props {
  data: any
  category: keyof typeof BLOG_CATEGORIES
}

const ArticleHeader: FC<Props> = ({ data, category }) => {
  const { title, description } = data

  return (
    <section className={`hero`}>
      <div className={`hero-wrapper`}>
        <Link
          href={`/blog/${category}`}
          className={'article-category hover:text-accent-500 transition-colors duration-300'}
        >
          {BLOG_CATEGORIES[category]}
        </Link>
        <h1>{title}</h1>
        <p className="text-white/60">{description}</p>
      </div>

      <ReadMoreArrowIcon />
    </section>
  )
}

export default ArticleHeader
