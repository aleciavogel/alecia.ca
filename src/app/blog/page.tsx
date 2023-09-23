import { type FC } from 'react'
import { type Metadata } from 'next'

import SiteWrapper from '@/components/layout/SiteWrapper'
import BlogIndexHeader from '@/components/pages/blog/list/BlogIndexHeader'
import BlogMain from '@/components/pages/blog/list/BlogMain'

const BlogIndexPage: FC = () => {
  return (
    <SiteWrapper>
      <BlogIndexHeader />
      <BlogMain />
    </SiteWrapper>
  )
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: `Blog | Alecia.ca`,
  }
}

export default BlogIndexPage
