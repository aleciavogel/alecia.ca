import { type FC } from 'react'
import { type Metadata } from 'next'

import SiteWrapper from '@/components/layout/SiteWrapper'
import BlogCategoryHeader from '@/components/pages/blog/category/BlogCategoryHeader'
import BlogCategoryMain from '@/components/pages/blog/category/BlogCategoryMain'
import { BLOG_CATEGORIES } from '@/config/blog-categories'
import UnderConstructionBanner from '@/components/layout/banners/UnderConstruction'

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
