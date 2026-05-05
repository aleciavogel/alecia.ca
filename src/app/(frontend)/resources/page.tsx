import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Image as SanityImage } from 'sanity'

import { Routes } from '@alecia/constants/routes'
import RenderedBlocks from '@alecia/core/blocks/components/rendered'
import EmptyState from '@alecia/core/layout/components/states/empty'
import PageContents from '@alecia/core/navigation/components/page-contents/page-contents'
import SimpleHeader from '@alecia/core/pages/components/simple-header'
import ResourcesList from '@alecia/core/resources/components/resources-list'
import SiteWrapper from '@alecia/core/theming/components/site-wrapper/site-wrapper'
import { pageQuery } from '@alecia/vendors/sanity/queries/pages.query'
import { resourcesIndexQuery } from '@alecia/vendors/sanity/queries/resources/resources.query'
import { urlForOpenGraphImage } from '@alecia/vendors/sanity/util/client/sanity-image-utils'
import { sanityFetch } from '@alecia/vendors/sanity/util/server/live'

export async function generateMetadata(): Promise<Metadata> {
  const { data: page } = await sanityFetch({
    query: pageQuery,
    params: { slug: 'resources' },
    stega: false,
  })

  if (!page) {
    return {}
  }

  return {
    title: page.metadata?.title ?? page.title,
    description: page.metadata?.description,
    keywords: page.metadata?.keywords ?? [],
    alternates: {
      canonical: Routes.Resources,
    },
    openGraph: {
      url: Routes.Resources,
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
        : undefined,
    },
  }
}

export default async function ProjectsPage() {
  const {
    data: { page, resources },
  } = await sanityFetch({ query: resourcesIndexQuery })

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
        {noLinks ? <EmptyState /> : <ResourcesList resources={resources} />}
        <RenderedBlocks modules={page.modules} />
      </PageContents>
    </SiteWrapper>
  )
}
