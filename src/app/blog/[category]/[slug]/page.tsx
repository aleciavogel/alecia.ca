import type { FC } from 'react'
import type { Metadata } from 'next'

import fs from 'fs'
import path from 'path'
import readingTime from 'reading-time'
import Link from 'next/link'

import MDXWrapper from '@/components/features/mdx'
import ArticleMain from '@/components/pages/blog/ArticleMain'
import ArticleHeader from '@/components/pages/blog/ArticleHeader'
import SiteWrapper from '@/components/layout/SiteWrapper'
import { getPostBySlug } from '@/lib/posts'
import type { DefaultColor } from '@/types/colors'
import MorePostsBanner from '@/components/banners/MorePosts'
// import AuthorInfo from '@/components/pages/blog/post/AuthorInfo'

interface PostProps {
  params: {
    category: string
    frontMatter: {
      title: string
      description: string
      date: string
      slug: string
      textColor: DefaultColor
      primaryColor: DefaultColor
      accentColor: DefaultColor
    }
  }
}

const Post: FC<PostProps> = ({ params }: any) => {
  const { category, slug } = params
  const props = getPostBySlug(category !== undefined ? `${category}/${slug}` : slug)
  const timeToRead = readingTime(props.content).text

  return (
    <SiteWrapper
      textColor={props.frontMatter.textColor}
      primaryColor={props.frontMatter.primaryColor}
      accentColor={props.frontMatter.accentColor}
    >
      <article>
        <ArticleHeader category={category} data={props.frontMatter} />
        <ArticleMain timeToRead={timeToRead} data={props.frontMatter}>
          <MDXWrapper source={props.content} />
          {/* <AuthorInfo /> */}
          <p className="mt-8 content-block">
            <Link href="/" className="">
              <span>← Back to homepage</span>
            </Link>
          </p>
        </ArticleMain>
      </article>
      <MorePostsBanner />
    </SiteWrapper>
  )
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { category, slug } = params
  const props = getPostBySlug(category !== undefined ? `${category}/${slug}` : slug)
  return {
    title: `${props.frontMatter.title} | Alecia.ca`,
    authors: [
      {
        name: 'Alecia Vogel',
        url: 'https://alecia.ca',
      },
    ],
  }
}

interface PathParams {
  slug: string
}

export const generateStaticParams = async (): Promise<PathParams[]> => {
  const files = fs.readdirSync(path.join('_posts'))

  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }))

  return paths
}

export default Post
