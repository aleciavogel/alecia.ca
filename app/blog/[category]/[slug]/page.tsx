import type { FC } from 'react'
import type { Metadata } from 'next'

import { getPostBySlug } from '@/features/blog/utils'
import BlogPostPage from '@/features/blog/article'
// import AuthorInfo from '@/components/pages/blog/post/AuthorInfo'

interface PostProps {
  params: {
    category: string
    slug: string
  }
}

const Page: FC<PostProps> = ({ params }: any) => {
  const { category, slug } = params
  const props = getPostBySlug(category !== undefined ? `${category}/${slug}` : slug)

  return <BlogPostPage category={category} {...props} />
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { category, slug } = params
  const {
    frontMatter: { title, description, seoTitle, seoDescription },
  } = getPostBySlug(category !== undefined ? `${category}/${slug}` : slug)
  return {
    title: `${seoTitle ?? title} | Alecia.ca`,
    description: seoDescription ?? description,
    authors: [
      {
        name: 'Alecia Vogel',
        url: 'https://alecia.ca',
      },
    ],
  }
}

export default Page
