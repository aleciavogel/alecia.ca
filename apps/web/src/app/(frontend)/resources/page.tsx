import * as React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Image as SanityImage } from 'sanity'

import { Routes, SITE_BASE_URL } from '@alecia/constants'
import { RenderedBlocks } from '@alecia/pages'
import { SimpleHeader } from '@alecia/pages-ui'
import { Resources } from '@alecia/resources'
import { pageQuery, resourcesIndexQuery, settingsQuery } from '@alecia/sanity-queries'
import {
  PageQueryResult,
  ResourcesIndexQueryResult,
  SettingsQueryResult,
} from '@alecia/sanity-types'
import { urlForOpenGraphImage } from '@alecia/sanity-util'
import { getData } from '@alecia/sanity-util/server'
import { SiteWrapper } from '@alecia/site-layout'
import { EmptyState } from '@alecia/site-layout-ui'
import { PageContents } from '@alecia/site-navigation'

export async function generateMetadata(): Promise<Metadata> {
  const [page, settings] = await Promise.all([
    getData<PageQueryResult>(pageQuery, { slug: 'resources' }, [`page:resources`], {
      stega: false,
    }),
    getData<SettingsQueryResult>(settingsQuery, {}, ['settings'], { stega: false }),
  ])

  if (!page) {
    return {}
  }

  const pageKeywords = page.metadata?.keywords ?? []
  const combinedKeywords = ['edmonton', 'web development', 'full-stack developer', ...pageKeywords]

  return {
    metadataBase: new URL('https://' + SITE_BASE_URL),
    title: page.metadata?.title ?? page.title,
    description: page.metadata?.description,
    applicationName: settings?.title,
    generator: 'Next.js',
    keywords: combinedKeywords,
    openGraph: {
      type: 'website',
      url: 'https://' + SITE_BASE_URL + Routes.Resources,
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
