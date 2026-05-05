import React from 'react'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import { PortableTextBlock } from 'next-sanity'
import { Image as SanityImage } from 'sanity'

import { Routes } from '@alecia/constants/routes'
import PageContents from '@alecia/core/navigation/components/page-contents/page-contents'
import HeroHeader from '@alecia/core/pages/components/hero-header'
import ReadingProgress from '@alecia/core/scroll/components/reading-progress'
import SiteWrapper from '@alecia/core/theming/components/site-wrapper/site-wrapper'
import { getPlaceholderImage } from '@alecia/util/images'
import { buildRoute } from '@alecia/util/routes'
import {
  articleSlugsQuery,
  blogArticlePageQuery,
} from '@alecia/vendors/sanity/queries/blog/blog-article.query'
import {
  getCroppedImageSrc,
  urlForOpenGraphImage,
} from '@alecia/vendors/sanity/util/client/sanity-image-utils'
import { sanityClient } from '@alecia/vendors/sanity/util/server/client'
import { sanityFetch } from '@alecia/vendors/sanity/util/server/live'

const ArticleInfo = dynamic(() => import('@alecia/core/blog/components/article-info'))
const BlogComments = dynamic(() => import('@alecia/core/blog/components/comments'))
const BlogPortableText = dynamic(() => import('@alecia/core/blog/components/blog-portable-text'))

interface ArticlePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return await sanityClient.fetch(
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
  const awaitedParams = await params

  const { data: article } = await sanityFetch({
    query: blogArticlePageQuery,
    params: awaitedParams,
    stega: false,
  })

  if (!article) {
    return {}
  }

  const articleTags =
    article.categories?.map((category) => category.title).filter((cat) => cat !== null) ?? []
  const articleKeywords = article.metadata?.keywords ?? []
  const articleUrl = buildRoute(Routes.Blog.Article, {
    slug: article.metadata?.slug?.current ?? '/',
  })
  const authors = [
    {
      // TODO: if I have guest authors, will need to make this dynamic
      name: 'Alecia Vogel',
      url: 'https://alecia.ca/about',
    },
  ]

  return {
    title: article.metadata?.title ?? article.title,
    description: article.metadata?.description ?? article.previewText,
    authors,
    keywords: ['blog', ...articleKeywords, ...articleTags],
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      authors: authors.map((author) => author.name),
      type: 'article',
      section: articleTags[0] ?? 'Uncategorized',
      url: articleUrl,
      publishedTime: article._createdAt,
      modifiedTime: article._updatedAt,
      title: article.metadata?.title ?? article.title ?? undefined,
      description: article.metadata?.description ?? article.previewText ?? undefined,
      tags: ['blog', ...articleKeywords, ...articleTags],
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
        : undefined,
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const { data: article } = await sanityFetch({
    query: blogArticlePageQuery,
    params: { slug },
  })

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
