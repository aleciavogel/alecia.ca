import { Metadata } from 'next'
import { Image as SanityImage } from 'sanity'

import { Illustrations } from '@alecia/constants/images'
import { Routes, SITE_BASE_URL } from '@alecia/constants/routes'
import RenderedBlocks from '@alecia/core/blocks/components/rendered'
import PageContents from '@alecia/core/navigation/components/page-contents/page-contents'
import WavyHeader from '@alecia/core/pages/components/wavy-header'
import SiteWrapper from '@alecia/core/theming/components/site-wrapper/site-wrapper'
import { homePageQuery } from '@alecia/vendors/sanity/queries/pages.query'
import { settingsQuery } from '@alecia/vendors/sanity/queries/settings.query'
import { HomePageQueryResult, SettingsQueryResult } from '@alecia/vendors/sanity/types/sanity.types'
import { urlForOpenGraphImage } from '@alecia/vendors/sanity/util/client/sanity-image-utils'
import { getData } from '@alecia/vendors/sanity/util/server/get-data'

export async function generateMetadata(): Promise<Metadata> {
  const [page, settings] = await Promise.all([
    getData<HomePageQueryResult>(homePageQuery, {}, [`page:index`], {
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
  const data = await getData<HomePageQueryResult>(homePageQuery, {}, [`page:index`])

  return (
    <SiteWrapper>
      <WavyHeader
        title={data?.title ?? "I'm Alecia Vogel"}
        pretitle={data?.pretitle ?? 'Oh, hey!'}
        subtitle={data?.subtitle ?? 'Welcome to my little corner of the internet.'}
        headerIllustration={(data?.headerIllustration as Illustrations) ?? 'none'}
      />
      <PageContents className="pb-48">
        <RenderedBlocks modules={data?.modules} />
      </PageContents>
    </SiteWrapper>
  )
}
