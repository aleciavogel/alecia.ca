import { BlogCard } from '@alecia/blog-ui'
import type { AllBlogArticlesQueryResult } from '@alecia/sanity-types'
import { cn } from '@alecia/util'

interface BlogListProps {
  posts?: AllBlogArticlesQueryResult
}

const BlogList = ({ posts }: BlogListProps) => {
  return (
    <div
      className={cn(
        'page-content-block',
        'grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3',
        // 'px-8 md:px-20',
      )}
    >
      {posts?.map((post) => (
        <BlogCard key={post._id} {...post} changeOnDarkMode />
      ))}
    </div>
  )
}

export default BlogList
