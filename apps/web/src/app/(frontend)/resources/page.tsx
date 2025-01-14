import * as React from 'react'
import { notFound } from 'next/navigation'

import { RenderedBlocks } from '@alecia/pages'
import { SimpleHeader } from '@alecia/pages-ui'
import { Resources } from '@alecia/resources'
import { getResourcesPage } from '@alecia/resources-data-access/server'
import { SiteWrapper } from '@alecia/site-layout'
import { EmptyState } from '@alecia/site-layout-ui'
import { PageContents } from '@alecia/site-navigation'

// TODO: pull metadata from sanity
export const metadata = {
  title: 'Resources | alecia.ca',
  description: 'A collection of useful links that developers and designers might find handy.',
}

export default async function ProjectsPage() {
  const { page, resources } = await getResourcesPage()
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
