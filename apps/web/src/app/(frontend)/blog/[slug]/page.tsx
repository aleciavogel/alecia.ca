import React from 'react'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import { PortableTextBlock } from 'next-sanity'
import { Image as SanityImage } from 'sanity'

import { Routes, SITE_BASE_URL } from '@alecia/constants/routes'
import HeroHeader from '@alecia/pages-ui/hero-header'
import {
  articleSlugsQuery,
  blogArticlePageQuery,
} from '@alecia/sanity-queries/blog/blog-article.query'
import { settingsQuery } from '@alecia/sanity-queries/settings.query'
import { BlogArticlePageQueryResult, SettingsQueryResult } from '@alecia/sanity-types/sanity.types'
import {
  getCroppedImageSrc,
  urlForOpenGraphImage,
} from '@alecia/sanity-util/client-utils/sanity-image-utils'
import { client } from '@alecia/sanity-util/server-utils/client'
import { getData } from '@alecia/sanity-util/server-utils/get-data'
import ReadingProgress from '@alecia/scroll/components/reading-progress'
import SiteWrapper from '@alecia/site-layout/site-wrapper/site-wrapper'
import PageContents from '@alecia/site-navigation/page-contents/page-contents'
import { getPlaceholderImage } from '@alecia/util/images'
import { buildRoute } from '@alecia/util/routes'

const ArticleInfo = dynamic(() => import('@alecia/blog-ui/article-info'))
const BlogComments = dynamic(() => import('@alecia/blog/comments'))
const BlogPortableText = dynamic(() => import('@alecia/blog/blog-portable-text'))

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return await client.fetch(
    articleSlugsQuery,
    {},
    {
      next: {
        tags: ['blog.article'],
      },
    },
  )
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const [article, settings] = await Promise.all([
    getData<BlogArticlePageQueryResult>(
      blogArticlePageQuery,
      params,
      [`blog.article:${params.slug}`],
      { stega: false },
    ),
    getData<SettingsQueryResult>(settingsQuery, {}, ['settings'], { stega: false }),
  ])

  if (!article) {
    return {}
  }

  const articleTags =
    article.categories?.map((category) => category.title).filter((cat) => cat !== null) ?? []
  const articleKeywords = article.metadata?.keywords ?? []
  const combinedKeywords = [
    'edmonton',
    'web development',
    'full-stack developer',
    'blog',
    ...articleKeywords,
    ...articleTags,
  ]
  const authors = [
    {
      // TODO: if I have guest authors, will need to make this dynamic
      name: 'Alecia Vogel',
      url: 'https://alecia.ca/about',
    },
  ]

  return {
    metadataBase: new URL('https://' + SITE_BASE_URL),
    title: article.metadata?.title ?? article.title,
    description: article.metadata?.description ?? article.previewText,
    applicationName: settings?.title,
    authors,
    generator: 'Next.js',
    keywords: combinedKeywords,
    openGraph: {
      authors: authors.map((author) => author.name),
      type: 'article',
      section: articleTags[0] ?? 'Uncategorized',
      url:
        'https://' +
        SITE_BASE_URL +
        buildRoute(Routes.Blog.Article, { slug: article.metadata?.slug?.current ?? '/' }),
      publishedTime: article._createdAt,
      modifiedTime: article._updatedAt,
      title: article.metadata?.title ?? article.title ?? undefined,
      description: article.metadata?.description ?? article.previewText ?? undefined,
      tags: combinedKeywords,
      // TODO: iterate through image blocks to retrieve image URLs
      images: article.metadata?.image
        ? [
            {
              url: urlForOpenGraphImage(article.metadata.image as SanityImage) ?? '',
              width: 1200,
              height: 627,
              alt: article.metadata?.title || article.title || '',
            },
          ]
        : article.mainImage
        ? [
            {
              url: urlForOpenGraphImage(article.mainImage as SanityImage) ?? '',
              width: 1200,
              height: 627,
              alt: article.mainImage.alt || article.title || '',
            },
          ]
        : settings?.ogimage
        ? [
            {
              url: urlForOpenGraphImage(settings?.ogimage as SanityImage) ?? '',
              width: 1200,
              height: 627,
              alt: article.metadata?.title || article.title || '',
            },
          ]
        : undefined,
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getData<BlogArticlePageQueryResult>(blogArticlePageQuery, params, [
    `blog.article:${params.slug}`,
    'blog.article',
  ])

  if (!article) {
    notFound()
  }

  const articleCategory = article.categories?.[0]
  const tag = {
    text: articleCategory?.title ?? 'Untitled Category',
    href: articleCategory?.slug ?? '#',
  }
  const { src = getPlaceholderImage(800, 600) } =
    article.mainImage !== undefined && article.mainImage !== null
      ? getCroppedImageSrc(article.mainImage as SanityImage) ?? {}
      : {}

  return (
    <SiteWrapper>
      <HeroHeader title={article.title} subtitle={article.subtitle} coverImage={src} tag={tag} />
      <ReadingProgress />
      <PageContents className="pt-48 md:pt-56 lg:pt-64 pb-48">
        <ArticleInfo
          date={article.publishDate ?? new Date().toDateString()}
          timeToRead={article.estimatedReadingTime}
        />
        <div
          id="post-content"
          // TODO: instead of page-content-block, use a custom class in the portable text incase there
          // are components that I want to style differently. For now this works...
          className="flex flex-col gap-6 drop-cap page-content-block"
        >
          <BlogPortableText value={article.body as PortableTextBlock[] | undefined} />
        </div>
        <BlogComments title={article.title} />
      </PageContents>
    </SiteWrapper>
  )
}
