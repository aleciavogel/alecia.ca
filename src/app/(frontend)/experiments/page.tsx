import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Image as SanityImage } from 'sanity'

import { Routes } from '@alecia/constants/routes'
import ExperimentsList from '@alecia/core/blocks/components/experiments-list'
import RenderedBlocks from '@alecia/core/blocks/components/rendered'
import EmptyState from '@alecia/core/layout/components/states/empty'
import PageContents from '@alecia/core/navigation/components/page-contents/page-contents'
import SimpleHeader from '@alecia/core/pages/components/simple-header'
import SiteWrapper from '@alecia/core/theming/components/site-wrapper/site-wrapper'
import { experimentsIndexQuery } from '@alecia/vendors/sanity/queries/experiments/experiments.query'
import { urlForOpenGraphImage } from '@alecia/vendors/sanity/util/client/sanity-image-utils'
import { sanityFetch } from '@alecia/vendors/sanity/util/server/live'

export async function generateMetadata(): Promise<Metadata> {
  const {
    data: { page },
  } = await sanityFetch({ query: experimentsIndexQuery, stega: false })

  if (!page) {
    return {}
  }

  const pageKeywords = page.metadata?.keywords ?? []

  return {
    title: page.metadata?.title ?? page.title,
    description: page.metadata?.description,
    keywords: pageKeywords,
    alternates: {
      canonical: Routes.Experiments.Index,
    },
    openGraph: {
      url: Routes.Experiments.Index,
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

export default async function ExperimentsIndexPage() {
  const {
    data: { page, experiments },
  } = await sanityFetch({ query: experimentsIndexQuery })
  const noExperiments = !experiments || (Array.isArray(experiments) && experiments.length === 0)

  if (!page) notFound()

  return (
    <SiteWrapper>
      <SimpleHeader
        pretitle={page.pretitle}
        title={page.title}
        subtitle={page.subtitle}
        headerIllustration={page.headerIllustration}
      />
      <PageContents className="md:pt-56 lg:pt-64">
        {noExperiments ? <EmptyState /> : <ExperimentsList experiments={experiments} />}

        <RenderedBlocks modules={page.modules} />
      </PageContents>
    </SiteWrapper>
  )
}
