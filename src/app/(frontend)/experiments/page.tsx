import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Image as SanityImage } from 'sanity'

import { Routes, SITE_BASE_URL } from '@alecia/constants/routes'
import ExperimentsList from '@alecia/core/blocks/components/experiments-list'
import RenderedBlocks from '@alecia/core/blocks/components/rendered'
import EmptyState from '@alecia/core/layout/components/states/empty'
import PageContents from '@alecia/core/navigation/components/page-contents/page-contents'
import SimpleHeader from '@alecia/core/pages/components/simple-header'
import SiteWrapper from '@alecia/core/theming/components/site-wrapper/site-wrapper'
import { experimentsIndexQuery } from '@alecia/vendors/sanity/queries/experiments/experiments.query'
import { settingsQuery } from '@alecia/vendors/sanity/queries/settings.query'
import { urlForOpenGraphImage } from '@alecia/vendors/sanity/util/client/sanity-image-utils'
import { sanityFetch } from '@alecia/vendors/sanity/util/server/live'

export async function generateMetadata(): Promise<Metadata> {
  const [
    {
      data: { page },
    },
    { data: settings },
  ] = await Promise.all([
    sanityFetch({ query: experimentsIndexQuery, stega: false }),
    sanityFetch({ query: settingsQuery, stega: false }),
  ])

  if (!page) {
    return {}
  }

  const pageKeywords = page.metadata?.keywords ?? []
  const combinedKeywords = [
    'edmonton',
    'web development',
    'full-stack developer',
    'blog',
    ...pageKeywords,
  ]

  return {
    metadataBase: new URL('https://' + SITE_BASE_URL),
    title: page.metadata?.title ?? page.title,
    description: page.metadata?.description,
    applicationName: settings?.title,
    generator: 'Next.js',
    keywords: combinedKeywords,
    openGraph: {
      type: 'website',
      url: 'https://' + SITE_BASE_URL + Routes.Experiments.Index,
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
        : settings?.ogimage
        ? [
            {
              url: urlForOpenGraphImage(settings?.ogimage as SanityImage) ?? '',
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
