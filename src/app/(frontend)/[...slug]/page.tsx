import * as React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Image as SanityImage } from 'sanity'

import RenderedBlocks from '@alecia/core/blocks/components/rendered'
import PageContents from '@alecia/core/navigation/components/page-contents/page-contents'
import SimpleHeader from '@alecia/core/pages/components/simple-header'
import SiteWrapper from '@alecia/core/theming/components/site-wrapper/site-wrapper'
import { pageQuery, pageSlugQuery } from '@alecia/vendors/sanity/queries/pages.query'
import { urlForOpenGraphImage } from '@alecia/vendors/sanity/util/client/sanity-image-utils'
import { sanityClient } from '@alecia/vendors/sanity/util/server/client'
import { sanityFetch } from '@alecia/vendors/sanity/util/server/live'

interface PageProps {
  params: Promise<{ slug?: string[] }>
}

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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const slugPath = slug?.join('/') ?? ''

  const { data: page } = await sanityFetch({
    query: pageQuery,
    params: { slug: slugPath },
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
      canonical: '/' + slugPath,
    },
    openGraph: {
      url: '/' + slugPath,
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

export default async function Page({ params }: PageProps) {
  const awaitedParams = await params
  const slug = awaitedParams.slug?.join('/') ?? '404'
  const { data: page } = await sanityFetch({ query: pageQuery, params: { slug } })

  if (!page || slug === '404') notFound()

  return (
    <SiteWrapper>
      <SimpleHeader {...page} />
      <PageContents className="pt-48">
        <RenderedBlocks modules={page.modules} />
      </PageContents>
    </SiteWrapper>
  )
}
