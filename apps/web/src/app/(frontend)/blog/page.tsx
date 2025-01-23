import * as React from 'react'
import { notFound } from 'next/navigation'

import { BlogList } from '@alecia/blocks'
import { BlogCategoryFilters } from '@alecia/blog-categories'
import { BlogHeader } from '@alecia/pages-ui'
import { blogIndexQuery } from '@alecia/sanity-queries'
import { BlogIndexQueryResult } from '@alecia/sanity-types'
import { getData } from '@alecia/sanity-util/server'
import { SiteWrapper } from '@alecia/site-layout'
import { EmptyState } from '@alecia/site-layout-ui'
import { PageContents } from '@alecia/site-navigation'

interface BlogListPageProps {
  searchParams?: {
    category?: string
  }
}

export default async function BlogListPage({ searchParams }: BlogListPageProps) {
  const hasCategory =
    searchParams?.category &&
    searchParams.category !== 'all' &&
    searchParams.category !== 'all-posts'

  const { articles, page } = await getData<BlogIndexQueryResult>(
    blogIndexQuery,
    { slug: hasCategory ? searchParams?.category : null },
    [
      hasCategory ? `blog.category:${searchParams?.category}` : 'page:blog',
      'blog.category',
      'blog.article',
    ],
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
