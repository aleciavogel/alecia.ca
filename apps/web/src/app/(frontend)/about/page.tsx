import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Image as SanityImage } from 'sanity'

import RenderedBlocks from '@alecia/blocks/rendered'
import { Routes, SITE_BASE_URL } from '@alecia/constants/routes'
import ImageHeader from '@alecia/pages-ui/image-header'
import { pageQuery } from '@alecia/sanity-queries/pages.query'
import { settingsQuery } from '@alecia/sanity-queries/settings.query'
import { PageQueryResult, SettingsQueryResult } from '@alecia/sanity-types/sanity.types'
import { urlFor, urlForOpenGraphImage } from '@alecia/sanity-util/client-utils/sanity-image-utils'
import { getData } from '@alecia/sanity-util/server-utils/get-data'
import SiteWrapper from '@alecia/site-layout/site-wrapper/site-wrapper'
import PageContents from '@alecia/site-navigation/page-contents/page-contents'

export async function generateMetadata(): Promise<Metadata> {
  const [page, settings] = await Promise.all([
    getData<PageQueryResult>(pageQuery, { slug: 'about' }, [`page:about`], {
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
      url: 'https://' + SITE_BASE_URL + Routes.About,
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

export default async function AboutPage() {
  const page = await getData<PageQueryResult>(pageQuery, { slug: 'about' }, [`page:about`])

  if (!page) notFound()

  return (
    <SiteWrapper>
      <ImageHeader
        pretitle={page.pretitle}
        title={page.title}
        imageSrc={page.headerImageSrc ? urlFor(page.headerImageSrc).url() : page.headerImageSrc}
        imageAlt={page.headerImage?.alt}
      />
      <PageContents className="max-md:pt-56 pb-32 md:pb-48">
        <RenderedBlocks modules={page.modules} />
      </PageContents>
    </SiteWrapper>
  )
}
