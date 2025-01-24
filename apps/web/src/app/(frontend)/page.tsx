import { Metadata } from 'next'
import { Image as SanityImage } from 'sanity'

import { Routes, SITE_BASE_URL } from '@alecia/constants'
import { RenderedBlocks } from '@alecia/pages'
import { WavyHeader } from '@alecia/pages-ui'
import { pageQuery, settingsQuery } from '@alecia/sanity-queries'
import { PageQueryResult, SettingsQueryResult } from '@alecia/sanity-types'
import { urlForOpenGraphImage } from '@alecia/sanity-util'
import { getData } from '@alecia/sanity-util/server'
import { SiteWrapper } from '@alecia/site-layout'
import { PageContents } from '@alecia/site-navigation'

export async function generateMetadata(): Promise<Metadata> {
  const [page, settings] = await Promise.all([
    getData<PageQueryResult>(pageQuery, { slug: 'index' }, [`page:index`], {
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
      url: 'https://' + SITE_BASE_URL + Routes.Home,
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

export default async function HomePage() {
  const data = await getData<PageQueryResult>(pageQuery, { slug: 'index' }, [`page:index`])

  return (
    <SiteWrapper>
      <WavyHeader
        title={data?.title ?? "I'm Alecia Vogel"}
        pretitle={data?.pretitle ?? 'Oh, hey!'}
        subtitle={data?.subtitle ?? 'Welcome to my little corner of the internet.'}
      />
      <PageContents className="pb-48">
        <RenderedBlocks modules={data?.modules} />
      </PageContents>
    </SiteWrapper>
  )
}
