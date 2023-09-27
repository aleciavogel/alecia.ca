import { type FC } from 'react'

import { StickyLayout } from '@/features/page-layout'
import { UnderConstructionBanner } from '@/features/banners'
import { PAGE_INFO } from '@/features/blog/all-posts'
import BlogPosts from '../../_partials/components/blog-posts'

const BlogIndexPage: FC = () => {
  const { title, subtitle } = PAGE_INFO

  return (
    <StickyLayout
      contentClassName="bg-gray-100"
      preFooter={() => <UnderConstructionBanner />}
      title={title}
      subtitle={subtitle}
    >
      <BlogPosts />
    </StickyLayout>
  )
}

export default BlogIndexPage
