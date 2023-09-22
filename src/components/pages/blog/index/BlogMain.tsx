import { type FC } from 'react'

import { getSortedPostsData } from '@/lib/posts'
import PageMain from '../../PageMain'
import BlogItem from './BlogItem'
// import FeaturedBlogItem from './FeaturedBlogItem'

const BlogMain: FC<any> = ({ params }) => {
  const posts = getSortedPostsData()
  const allPostsData = posts.slice(0, 3)
  return (
    <PageMain variant="chevron">
      <ul className="grid grid-cols-6 gap-8">
        {allPostsData?.map((post) => (
          <BlogItem key={`${post.slug.split('/')[1]}`} {...post} />
        ))}
      </ul>
    </PageMain>
  )
}

export default BlogMain
