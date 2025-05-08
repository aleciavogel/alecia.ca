import * as React from 'react'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import { Image as SanityImage } from 'sanity'

import { Routes, SITE_BASE_URL } from '@alecia/constants/routes'
import BlogList from '@alecia/core/blocks/components/article-list'
import EmptyState from '@alecia/core/layout/components/states/empty'
import PageContents from '@alecia/core/navigation/components/page-contents/page-contents'
import BlogHeader from '@alecia/core/pages/components/blog-header'
import SiteWrapper from '@alecia/core/theming/components/site-wrapper/site-wrapper'
import { blogIndexQuery } from '@alecia/vendors/sanity/queries/blog/blog-article.query'
import { settingsQuery } from '@alecia/vendors/sanity/queries/settings.query'
import {
  BlogIndexQueryResult,
  SettingsQueryResult,
} from '@alecia/vendors/sanity/types/sanity.types'
import { urlForOpenGraphImage } from '@alecia/vendors/sanity/util/client/sanity-image-utils'
import { getData } from '@alecia/vendors/sanity/util/server/get-data'

interface BlogListPageProps {
  searchParams?: Promise<{
    category?: string
  }>
}

const BlogCategoryFilters = dynamic(
  () => import('@alecia/core/blog/components/blog-category-filters'),
)

export async function generateMetadata({ searchParams }: BlogListPageProps): Promise<Metadata> {
  const category = (await searchParams)?.category

  const [{ page }, settings] = await Promise.all([
    getData<BlogIndexQueryResult>(
      blogIndexQuery,
      { slug: category ?? null },
      [`page:blog`, category ? `blog.category:${category}` : ''],
      {
        stega: false,
      },
    ),
    getData<SettingsQueryResult>(settingsQuery, {}, ['settings'], { stega: false }),
  ])

  if (!page) {
    return {}
  }

  const pageKeywords = page.metadata?.keywords ?? []
  const combinedKeywords = [
    'edmonton',
    'web development',
    'full-stack developer',
    'blog',
    ...pageKeywords,
  ]

  return {
    metadataBase: new URL('https://' + SITE_BASE_URL),
    title: page.metadata?.title ?? page.title,
    description: page.metadata?.description,
    applicationName: settings?.title,
    generator: 'Next.js',
    keywords: combinedKeywords,
    openGraph: {
      type: 'website',
      url: 'https://' + SITE_BASE_URL + Routes.Blog.Index,
      title: page.metadata?.title ?? page.title ?? undefined,
      description: page.metadata?.description ?? undefined,
      images: page.metadata?.image
        ? [
            {
              url: urlForOpenGraphImage(page.metadata.image as SanityImage) ?? '',
              width: 1200,
              height: 627,
              alt: page.metadata?.title || page.title || '',
            },
          ]
        : settings?.ogimage
        ? [
            {
              url: urlForOpenGraphImage(settings?.ogimage as SanityImage) ?? '',
              width: 1200,
              height: 627,
              alt: page.metadata?.title || page.title || '',
            },
          ]
        : undefined,
    },
  }
}

export default async function BlogListPage({ searchParams }: BlogListPageProps) {
  const category = (await searchParams)?.category

  const hasCategory = category && category !== 'all' && category !== 'all-posts'

  const { articles, page } = await getData<BlogIndexQueryResult>(
    blogIndexQuery,
    { slug: hasCategory ? category : null },
    [hasCategory ? `blog.category:${category}` : 'page:blog', 'blog.category', 'blog.article'],
  )

  if (!page) {
    notFound()
  }

  const noPosts = !articles || (Array.isArray(articles) && articles.length === 0)

  return (
    <SiteWrapper>
      <BlogHeader {...page} />
      <PageContents className="max-md:pt-56 pb-32 md:pb-48">
        <BlogCategoryFilters />
        {noPosts ? (
          <EmptyState message="Looks like Sadie ate all my blog posts..." />
        ) : (
          <BlogList posts={articles} />
        )}
      </PageContents>
    </SiteWrapper>
  )
}
