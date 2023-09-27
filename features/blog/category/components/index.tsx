import { type FC } from 'react'

import { StickyLayout } from '@/features/site-layout'
import { UnderConstructionBanner } from '@/features/banners'
import { BlogPosts } from '@/features/blog/_partials'
import BlogCategoryHeader from './category-header'

interface BlogCategoryPageProps {
  category: string
}

const BlogCategoryPage: FC<BlogCategoryPageProps> = ({ category }) => {
  return (
    <StickyLayout
      contentClassName="bg-gray-100"
      preFooter={<UnderConstructionBanner />}
      pageHeader={<BlogCategoryHeader category={category} />}
      variant="chevron"
    >
      <BlogPosts category={category} />
    </StickyLayout>
  )
}

export default BlogCategoryPage
