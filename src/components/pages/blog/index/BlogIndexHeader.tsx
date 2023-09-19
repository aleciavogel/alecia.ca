import { type FC } from 'react'

const BlogIndexHeader: FC = () => {
  return (
    <section className={`blog-index-header`} role="banner" aria-labelledby="page-title">
      <div className={`blog-index-header-wrapper`}>
        <h1 id="page-title">Blog</h1>
        <p className="text-white font-light">
          Stories, tutorials, and project updates straight from my dev environment.
        </p>
      </div>
    </section>
  )
}

export default BlogIndexHeader
