import { type FC } from 'react'
import { type Metadata } from 'next'

import BlogIndexPage, { PAGE_INFO } from '@/features/blog/all-posts'

const Page: FC = () => {
  return <BlogIndexPage />
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: `${PAGE_INFO.title} | Alecia.ca`,
  }
}

export default Page
