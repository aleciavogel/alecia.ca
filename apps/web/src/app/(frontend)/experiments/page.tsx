import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Image as SanityImage } from 'sanity'

import ExperimentsList from '@alecia/blocks/experiments-list'
import RenderedBlocks from '@alecia/blocks/rendered'
import { Routes, SITE_BASE_URL } from '@alecia/constants/routes'
import SimpleHeader from '@alecia/pages-ui/simple-header'
import { experimentsIndexQuery } from '@alecia/sanity-queries/experiments/experiments.query'
import { settingsQuery } from '@alecia/sanity-queries/settings.query'
import { ExperimentsIndexQueryResult, SettingsQueryResult } from '@alecia/sanity-types/sanity.types'
import { urlForOpenGraphImage } from '@alecia/sanity-util/client-utils/sanity-image-utils'
import { getData } from '@alecia/sanity-util/server-utils/get-data'
import SiteWrapper from '@alecia/site-layout/site-wrapper/site-wrapper'
import EmptyState from '@alecia/site-layout-ui/states/empty'
import PageContents from '@alecia/site-navigation/page-contents/page-contents'

export async function generateMetadata(): Promise<Metadata> {
  const [{ page }, settings] = await Promise.all([
    getData<ExperimentsIndexQueryResult>(experimentsIndexQuery, {}, [`page:experiments`], {
      stega: false,
    }),
    getData<SettingsQueryResult>(settingsQuery, {}, ['settings'], { stega: false }),
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
  const { page, experiments } = await getData<ExperimentsIndexQueryResult>(
    experimentsIndexQuery,
    {},
    [`page:experiments`],
  )
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
