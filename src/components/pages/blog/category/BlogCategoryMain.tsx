import { type FC } from 'react'

import { getSortedPostsData } from '@/lib/posts'
import PageMain from '../../PageMain'
import BlogItem from '../../../features/blog/BlogItem'
import EmptyCategory from '@/components/features/blog/EmptyCategory'

const BlogCategoryMain: FC<any> = ({ params }) => {
  const { category } = params
  const posts = getSortedPostsData(category as string)
  // const allPostsData = posts.slice(0, 3)

  if (posts === undefined || posts.length === 0) {
    return (
      <PageMain variant="chevron">
        <div className="about-intro">
          <EmptyCategory />
        </div>
      </PageMain>
    )
  }

  return (
    <PageMain variant="chevron">
      <div className="about-intro">
        <ul className="grid grid-cols-6 gap-8">
          {posts.map((post) => (
            <BlogItem key={`${post.slug.split('/')[1]}`} {...post} />
          ))}
        </ul>
      </div>
    </PageMain>
  )
}

export default BlogCategoryMain
