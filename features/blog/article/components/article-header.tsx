'use client'

import { type FC } from 'react'
import Link from 'next/link'

import { BLOG_CATEGORIES } from '@/features/blog/constants'
import ReadMoreArrowIcon from './read-more-icon'
import { useArticle } from '../hooks'

const ArticleHeader: FC = () => {
  const {
    frontMatter: { title, description },
    category,
  } = useArticle()

  return (
    <section className={`hero`}>
      <div className={`hero-wrapper`}>
        <Link
          href={`/blog/${category}`}
          className={'article-category hover:text-accent-500 transition-colors duration-300'}
        >
          {BLOG_CATEGORIES[category].title}
        </Link>
        <h1>{title}</h1>
        <p className="text-white/80">{description}</p>
      </div>

      <ReadMoreArrowIcon />
    </section>
  )
}

export default ArticleHeader
