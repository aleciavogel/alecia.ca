import * as React from 'react'
import { notFound } from 'next/navigation'

import { RenderedBlocks } from '@alecia/pages'
import { getPage } from '@alecia/pages-data-access/server'
import { SimpleHeader } from '@alecia/pages-ui'
import { SiteWrapper } from '@alecia/site-layout'
import { PageContents } from '@alecia/site-navigation'

export const metadata = {
  title: 'My Resumé',
  description: 'Generate a custom version of my CV.',
}

export default async function ResumePage() {
  const page = await getPage('about/resume')

  if (!page) notFound()

  return (
    <SiteWrapper>
      <SimpleHeader pretitle={page.pretitle} title={page.title} />
      <PageContents variant="chevron">
        <RenderedBlocks modules={page.modules} />
      </PageContents>
    </SiteWrapper>
  )
}
