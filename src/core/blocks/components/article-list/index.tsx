import BlogCard from '@alecia/core/blog/components/blog-card'
import type { AllBlogArticlesQueryResult } from '@alecia/vendors/sanity/types/sanity.types'

interface BlogListProps {
  posts?: AllBlogArticlesQueryResult
}

const BlogList = ({ posts }: BlogListProps) => {
  return (
    <div className="page-content-block grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts?.map((post) => (
        <BlogCard key={post._id} {...post} changeOnDarkMode />
      ))}
    </div>
  )
}

export default BlogList
