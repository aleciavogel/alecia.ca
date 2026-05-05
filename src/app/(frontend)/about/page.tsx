import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Image as SanityImage } from 'sanity'

import { Routes } from '@alecia/constants/routes'
import RenderedBlocks from '@alecia/core/blocks/components/rendered'
import PageContents from '@alecia/core/navigation/components/page-contents/page-contents'
import ImageHeader from '@alecia/core/pages/components/image-header'
import SiteWrapper from '@alecia/core/theming/components/site-wrapper/site-wrapper'
import { pageQuery } from '@alecia/vendors/sanity/queries/pages.query'
import { urlFor, urlForOpenGraphImage } from '@alecia/vendors/sanity/util/client/sanity-image-utils'
import { sanityFetch } from '@alecia/vendors/sanity/util/server/live'

export async function generateMetadata(): Promise<Metadata> {
  const { data: page } = await sanityFetch({
    query: pageQuery,
    params: { slug: 'about' },
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
      canonical: Routes.About,
    },
    openGraph: {
      url: Routes.About,
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

export default async function AboutPage() {
  const { data: page } = await sanityFetch({ query: pageQuery, params: { slug: 'about' } })

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
