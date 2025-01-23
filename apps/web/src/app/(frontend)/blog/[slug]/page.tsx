import React from 'react'
import { notFound } from 'next/navigation'
import { Image as SanityImage } from 'sanity'

import { BlogPortableText, BlogPostBlock } from '@alecia/blog'
import { getBlogArticlePage } from '@alecia/blog-data-access/server'
import { ArticleInfo, BlogComments } from '@alecia/blog-ui'
import { Routes } from '@alecia/constants'
import { HeroHeader } from '@alecia/pages-ui'
import { articleSlugsQuery, blogArticlePageQuery } from '@alecia/sanity-queries'
import { BlogArticlePageQueryResult } from '@alecia/sanity-types'
import { getCroppedImageSrc } from '@alecia/sanity-util'
import { client, getData } from '@alecia/sanity-util/server'
import { processMetadata } from '@alecia/settings-data-access/server'
import { ReadingProgress, SiteWrapper } from '@alecia/site-layout'
import { PageContents } from '@alecia/site-navigation'
import { buildRoute, getPlaceholderImage } from '@alecia/util'

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

// Combine settings data and project data to generate metadata
export async function generateMetadata({ params }: ArticlePageProps) {
  const article = await getData<BlogArticlePageQueryResult>(blogArticlePageQuery, params, [
    `blog.article:${params.slug}`,
  ])
  if (!article) notFound()
  const meta = await processMetadata({
    metadata: article.metadata,
    slug: buildRoute(Routes.Blog.Article, params),
    fallbackTitle: article.title,
  })

  return {
    ...meta,
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
      <PageContents className="pt-32 md:pt-56 lg:pt-64">
        <ArticleInfo
          date={article.publishDate ?? new Date().toDateString()}
          timeToRead={article.estimatedReadingTime}
        />
        <div id="post-content" className="flex flex-col gap-6 drop-cap">
          <BlogPortableText value={article.body as BlogPostBlock[] | undefined} />
        </div>
        <BlogComments title={article.title} />
      </PageContents>
    </SiteWrapper>
  )
}
