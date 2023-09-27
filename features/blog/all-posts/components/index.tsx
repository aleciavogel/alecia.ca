import { type FC } from 'react'

import { StickyLayout } from '@/features/site-layout'
import { UnderConstructionBanner } from '@/features/banners'
import { PAGE_INFO } from '@/features/blog/all-posts'
import BlogPosts from '../../_partials/components/blog-posts'

const BlogIndexPage: FC = () => {
  const { title, subtitle } = PAGE_INFO

  return (
    <StickyLayout
      contentClassName="bg-gray-100"
      title={title}
      subtitle={subtitle}
      variant="chevron"
      preFooter={<UnderConstructionBanner />}
    >
      <BlogPosts />
    </StickyLayout>
  )
}

export default BlogIndexPage
