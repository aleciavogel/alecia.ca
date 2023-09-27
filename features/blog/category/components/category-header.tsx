import { type FC } from 'react'
import Link from 'next/link'

import { BLOG_CATEGORIES } from '@/features/blog/constants'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BlogCategoryHeader: FC<any> = ({ params }) => {
  const { category } = params
  const { title, description } = BLOG_CATEGORIES[category]

  return (
    <section className={`blog-index-header`} role="banner" aria-labelledby="page-title">
      <div className={`blog-index-header-wrapper`}>
        <div>
          <Link
            href="/blog"
            className="text-xl md:text-3xl text-accent-300 font-bold hover:text-accent-500 transition-colors duration-300 underline"
          >
            Blog
          </Link>
        </div>
        <h1 id="page-title">
          {/* {icon !== undefined && <FontAwesomeIcon icon={icon} className="mr-10" />} */}
          {title}
        </h1>
        <p className="text-white w-full md:text-center mx-auto font-light">{description}</p>
      </div>
    </section>
  )
}

export default BlogCategoryHeader
