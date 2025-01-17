import * as React from 'react'
import { notFound } from 'next/navigation'

import { RenderedBlocks } from '@alecia/pages'
import { getPage } from '@alecia/pages-data-access/server'
import { SimpleHeader } from '@alecia/pages-ui'
import type { PageQueryResult } from '@alecia/sanity-types'
import { SiteWrapper } from '@alecia/site-layout'
import { PageContents } from '@alecia/site-navigation'

interface PageProps {
  params: { slug?: string[] }
}

// export async function generateStaticParams() {
//   const slugs = (await getPageSlugs()) ?? []
//   return slugs.map((slug) => ({ slug: slug.split('/') }))
// }

const fetchPageData = async (slug: string): Promise<PageQueryResult | undefined> => {
  return await getPage(slug)
}

const Page = async ({ params }: PageProps) => {
  const slug = params.slug?.join('/') ?? '404'
  const page = await fetchPageData(slug)

  if (!page || slug === '404') notFound()

  return (
    <SiteWrapper>
      <SimpleHeader {...page} />
      <PageContents className="pt-48">
        <RenderedBlocks modules={page.modules} />
      </PageContents>
    </SiteWrapper>
  )
}

export default Page
