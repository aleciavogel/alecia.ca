import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Image as SanityImage } from 'sanity'

import { SITE_BASE_URL } from '@alecia/constants/routes'
import RenderedBlocks from '@alecia/core/blocks/components/rendered'
import PageContents from '@alecia/core/navigation/components/page-contents/page-contents'
import FormHeader from '@alecia/core/pages/components/form-header'
import SimpleHeader from '@alecia/core/pages/components/simple-header'
import ResumeDownloadButton from '@alecia/core/resume/components/download-button'
import ResumeTemplate from '@alecia/core/resume/components/resume-template'
import SiteWrapper from '@alecia/core/theming/components/site-wrapper/site-wrapper'
import { pageQuery, pageSlugQuery } from '@alecia/vendors/sanity/queries/pages.query'
import { settingsQuery } from '@alecia/vendors/sanity/queries/settings.query'
import { PageQueryResult, SettingsQueryResult } from '@alecia/vendors/sanity/types/sanity.types'
import { urlForOpenGraphImage } from '@alecia/vendors/sanity/util/client/sanity-image-utils'
import { client } from '@alecia/vendors/sanity/util/server/client'
import { getData } from '@alecia/vendors/sanity/util/server/get-data'

export async function generateStaticParams() {
  const slugs = await client.fetch(
    pageSlugQuery,
    {},
    {
      next: {
        tags: ['page'],
      },
    },
  )

  return slugs.map((item: any) => ({ slug: item?.split('/') }))
}

export async function generateMetadata(): Promise<Metadata> {
  const slug = ['about', 'resume']

  const [page, settings] = await Promise.all([
    getData<PageQueryResult>(pageQuery, { slug: slug?.join('/') }, [`page:${slug}`], {
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
      url: 'https://' + SITE_BASE_URL + '/' + slug,
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

export default async function Page() {
  const params = { slug: ['about', 'resume'] }
  const slug = params.slug?.join('/') ?? '404'
  const page = await getData<PageQueryResult>(pageQuery, { slug }, [`page:${params.slug}`])

  if (!page || slug === '404') notFound()

  return (
    <SiteWrapper>
      <FormHeader {...page} buttons={<ResumeDownloadButton />}>
        <ResumeTemplate />
      </FormHeader>
      <PageContents className="pt-48">
        <RenderedBlocks modules={page.modules} />
      </PageContents>
    </SiteWrapper>
  )
}
