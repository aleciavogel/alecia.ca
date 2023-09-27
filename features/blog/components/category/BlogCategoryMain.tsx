import { type FC } from 'react'

import { getSortedPostsData } from '@/features/blog/utils'
import PageMain from '@/features/page-containers/components/page-main'
import BlogItem from '../all-posts/BlogItem'
import EmptyCategory from './EmptyCategory'

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
        <ul className="px-16 md:px-20 grid grid-cols-6 gap-8">
          {posts.map((post) => (
            <BlogItem key={`${post.slug.split('/')[1]}`} {...post} />
          ))}
        </ul>
      </div>
    </PageMain>
  )
}

export default BlogCategoryMain
