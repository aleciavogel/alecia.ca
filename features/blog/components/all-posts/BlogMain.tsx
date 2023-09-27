import { type FC } from 'react'

import { getSortedPostsData } from '@/features/blog/utils'
import PageMain from '@/features/_layout/page/components/PageMain'
import BlogItem from './BlogItem'
// import FeaturedBlogItem from './FeaturedBlogItem'

const BlogMain: FC<any> = ({ params }) => {
  const posts = getSortedPostsData()
  const allPostsData = posts.slice(0, 3)
  return (
    <PageMain variant="chevron" className="bg-gray-100">
      <ul className="px-16 md:px-20 grid grid-cols-6 gap-8">
        {allPostsData?.map((post) => (
          <BlogItem key={`${post.slug.split('/')[1]}`} {...post} />
        ))}
      </ul>
    </PageMain>
  )
}

export default BlogMain
