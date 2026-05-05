import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Image as SanityImage } from 'sanity'

import RenderedBlocks from '@alecia/core/blocks/components/rendered'
import PageContents from '@alecia/core/navigation/components/page-contents/page-contents'
import FormHeader from '@alecia/core/pages/components/form-header'
import ResumeDownloadButton from '@alecia/core/resume/components/download-button'
import ResumeTemplate from '@alecia/core/resume/components/resume-template'
import SiteWrapper from '@alecia/core/theming/components/site-wrapper/site-wrapper'
import { pageQuery, pageSlugQuery } from '@alecia/vendors/sanity/queries/pages.query'
import { urlForOpenGraphImage } from '@alecia/vendors/sanity/util/client/sanity-image-utils'
import { sanityClient } from '@alecia/vendors/sanity/util/server/client'
import { sanityFetch } from '@alecia/vendors/sanity/util/server/live'

export async function generateStaticParams() {
  const slugs = await sanityClient.fetch(
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
  const { data: page } = await sanityFetch({
    query: pageQuery,
    params: { slug: 'about/resume' },
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
      canonical: '/about/resume',
    },
    openGraph: {
      url: '/about/resume',
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

export default async function Page() {
  const slug = 'about/resume'
  const { data: page } = await sanityFetch({ query: pageQuery, params: { slug } })

  if (!page) notFound()

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
