import { type FC } from 'react'
import { type Metadata } from 'next'

import SiteWrapper from '@/components/pages/shared/layout/SiteWrapper'
import BlogIndexHeader from '@/components/pages/blog/index/BlogIndexHeader'
import AboutMain from '@/components/pages/about/AboutMain'

const BlogIndexPage: FC = () => {
  return (
    <SiteWrapper>
      <BlogIndexHeader />
      <AboutMain />
    </SiteWrapper>
  )
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: `Blog | Alecia.ca`,
  }
}

export default BlogIndexPage
