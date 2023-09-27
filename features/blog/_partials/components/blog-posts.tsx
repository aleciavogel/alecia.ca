import { type FC } from 'react'

import { ContentWrapper } from '@/features/page-layout'
import { getSortedPostsData } from '@/features/blog/utils'
import { BlogItem, EmptyState } from '@/features/blog/_partials'

interface BlogPostsProps {
  category?: string
}

const BlogPosts: FC<BlogPostsProps> = ({ category }) => {
  const posts = getSortedPostsData(category)

  return (
    <ContentWrapper>
      {posts !== undefined ? (
        <ul className="px-16 md:px-20 grid grid-cols-6 gap-8">
          {posts?.map((post, index) => (
            <BlogItem key={`blog-items-display-${index}`} {...post} />
          ))}
        </ul>
      ) : (
        <EmptyState />
      )}
    </ContentWrapper>
  )
}

export default BlogPosts
