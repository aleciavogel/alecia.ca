import * as React from 'react'
import { notFound } from 'next/navigation'

import { Routes } from '@alecia/constants'
import { RenderedBlocks } from '@alecia/pages'
import { SimpleHeader } from '@alecia/pages-ui'
import { Resources } from '@alecia/resources'
import { resourcesIndexQuery } from '@alecia/sanity-queries'
import { ResourcesIndexQueryResult } from '@alecia/sanity-types'
import { getData } from '@alecia/sanity-util/server'
import { processMetadata } from '@alecia/settings-data-access/server'
import { SiteWrapper } from '@alecia/site-layout'
import { EmptyState } from '@alecia/site-layout-ui'
import { PageContents } from '@alecia/site-navigation'

export async function generateMetadata() {
  const { page } = await getData<ResourcesIndexQueryResult>(resourcesIndexQuery, {}, [
    'page:resources',
    'resource',
  ])
  if (!page) notFound()
  const meta = await processMetadata({
    metadata: page.metadata,
    slug: Routes.Resources,
    fallbackTitle: page.title,
  })

  return {
    ...meta,
  }
}

export default async function ProjectsPage() {
  const { page, resources } = await getData<ResourcesIndexQueryResult>(resourcesIndexQuery, {}, [
    'page:resources',
    'resource',
  ])

  const noLinks = !resources || (Array.isArray(resources) && resources.length === 0)

  if (!page) notFound()

  return (
    <SiteWrapper>
      <SimpleHeader
        pretitle={page.pretitle}
        title={page.title}
        subtitle={page.subtitle}
        headerIllustration={page.headerIllustration ?? 'none'}
      />
      <PageContents className="pt-56 lg:pb-36">
        {noLinks ? <EmptyState /> : <Resources resources={resources} />}
        <RenderedBlocks modules={page.modules} />
      </PageContents>
    </SiteWrapper>
  )
}
