import * as React from 'react'
import { notFound } from 'next/navigation'

import { RenderedBlocks } from '@alecia/pages'
import { getPage } from '@alecia/pages-data-access/server'
import { ImageHeader } from '@alecia/pages-ui'
import { urlFor } from '@alecia/sanity-util'
import { SiteWrapper } from '@alecia/site-layout'
import { PageContents } from '@alecia/site-navigation'

export const metadata = {
  title: 'About Alecia | alecia.ca',
  description: 'Learn more about Alecia',
}

export default async function AboutPage() {
  const page = await getPage('about')

  if (!page) notFound()

  return (
    <SiteWrapper>
      <ImageHeader
        pretitle={page.pretitle}
        title={page.title}
        imageSrc={page.headerImageSrc ? urlFor(page.headerImageSrc).url() : page.headerImageSrc}
        imageAlt={page.headerImage?.alt}
      />
      <PageContents>
        <RenderedBlocks modules={page.modules} />
      </PageContents>
    </SiteWrapper>
  )
}
