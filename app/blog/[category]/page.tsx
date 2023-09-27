import { type FC } from 'react'
import { type Metadata } from 'next'

import SiteWrapper from '@/features/page-containers/components/site-wrapper'
import BlogCategoryHeader from '@/features/blog/components/category/BlogCategoryHeader'
import BlogCategoryMain from '@/features/blog/components/category/BlogCategoryMain'
import { BLOG_CATEGORIES } from '@/features/blog/constants'
import UnderConstructionBanner from '@/features/banners/components/under-contruction'

const BlogIndexPage: FC<any> = ({ params }) => {
  return (
    <SiteWrapper>
      <BlogCategoryHeader params={params} />
      <BlogCategoryMain params={params} />
      <UnderConstructionBanner />
    </SiteWrapper>
  )
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { category } = params

  return {
    title: `${BLOG_CATEGORIES[category].title} | Alecia.ca`,
  }
}

export default BlogIndexPage
