import { type FC } from 'react'
import { type Metadata } from 'next'

import SiteWrapper from '@/features/page-containers/components/site-wrapper'
import BlogIndexHeader from '@/features/blog/components/all-posts/BlogIndexHeader'
import BlogMain from '@/features/blog/components/all-posts/BlogMain'
import UnderConstructionBanner from '@/features/banners/components/under-contruction'

const BlogIndexPage: FC = () => {
  return (
    <SiteWrapper>
      <BlogIndexHeader />
      <BlogMain />
      <UnderConstructionBanner />
    </SiteWrapper>
  )
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: `Blog | Alecia.ca`,
  }
}

export default BlogIndexPage
