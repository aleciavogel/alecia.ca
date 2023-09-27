import type { FC } from 'react'
import type { Metadata } from 'next'

import { getPostBySlug } from '@/features/blog/utils'
import BlogPostPage from '@/features/blog/article'
import ArticleProvider from '@/features/blog/article/providers/article-provider'

interface PostProps {
  params: {
    category: string
    slug: string
  }
}

const Page: FC<PostProps> = ({ params }: any) => {
  const { category, slug } = params
  const props = getPostBySlug(category !== undefined ? `${category}/${slug}` : slug)

  return (
    <ArticleProvider category={category} {...props}>
      <BlogPostPage />
    </ArticleProvider>
  )
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
