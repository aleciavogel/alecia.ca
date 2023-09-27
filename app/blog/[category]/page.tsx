import { type FC } from 'react'
import { type Metadata } from 'next'

import { BLOG_CATEGORIES } from '@/features/blog/constants'
import BlogCategoryPage from '@/features/blog/category/components'

const Page: FC<any> = ({ params: { category } }) => <BlogCategoryPage category={category} />

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { category } = params

  return {
    title: `${BLOG_CATEGORIES[category].title} | Alecia.ca`,
  }
}

export default Page
