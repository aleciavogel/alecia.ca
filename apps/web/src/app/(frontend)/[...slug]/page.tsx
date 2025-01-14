import * as React from 'react'
import { notFound } from 'next/navigation'

import { RenderedBlocks } from '@alecia/pages'
import { getPage } from '@alecia/pages-data-access/server'
import type { PageQueryResult } from '@alecia/sanity-types'
import { PageContents, SiteWrapper } from '@alecia/site-layout'

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
      <p>Header will go here uwu</p>
      <PageContents>
        <RenderedBlocks modules={page.modules} />
      </PageContents>
    </SiteWrapper>
  )
}

export default Page
