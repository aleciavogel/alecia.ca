import * as React from 'react'
import { notFound } from 'next/navigation'

import { BlogList } from '@alecia/blocks'
import { BlogCategoryFilters } from '@alecia/blog-categories'
import { getBlogIndexPage } from '@alecia/blog-data-access/server'
import { BlogHeader } from '@alecia/pages-ui'
import { BlogIndexQueryResult } from '@alecia/sanity-types'
import { PageContents, SiteWrapper } from '@alecia/site-layout'
import { EmptyState } from '@alecia/site-layout-ui'

const fetchPageData = async (category?: string): Promise<BlogIndexQueryResult | undefined> => {
  return await getBlogIndexPage(category)
}

interface BlogListPageProps {
  searchParams?: {
    category?: string
  }
}

export default async function BlogListPage({ searchParams }: BlogListPageProps) {
  const { articles, page } = (await fetchPageData(searchParams?.category)) ?? {}

  if (!page) {
    notFound()
  }

  const noPosts = !articles || (Array.isArray(articles) && articles.length === 0)

  return (
    <SiteWrapper>
      <BlogHeader {...page} />
      <PageContents>
        <BlogCategoryFilters />
        {noPosts ? <EmptyState /> : <BlogList posts={articles} />}
      </PageContents>
    </SiteWrapper>
  )
}
