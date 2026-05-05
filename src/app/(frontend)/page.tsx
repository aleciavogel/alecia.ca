import { Metadata } from 'next'
import { Image as SanityImage } from 'sanity'

import { Illustrations } from '@alecia/constants/images'
import { Routes } from '@alecia/constants/routes'
import RenderedBlocks from '@alecia/core/blocks/components/rendered'
import PageContents from '@alecia/core/navigation/components/page-contents/page-contents'
import WavyHeader from '@alecia/core/pages/components/wavy-header'
import SiteWrapper from '@alecia/core/theming/components/site-wrapper/site-wrapper'
import { homePageQuery } from '@alecia/vendors/sanity/queries/pages.query'
import { urlForOpenGraphImage } from '@alecia/vendors/sanity/util/client/sanity-image-utils'
import { sanityFetch } from '@alecia/vendors/sanity/util/server/live'

export async function generateMetadata(): Promise<Metadata> {
  const { data: page } = await sanityFetch({ query: homePageQuery, stega: false })

  if (!page) {
    return {}
  }

  const pageKeywords = page.metadata?.keywords ?? []

  return {
    title: page.metadata?.title ?? page.title,
    description: page.metadata?.description,
    keywords: pageKeywords,
    alternates: {
      canonical: Routes.Home,
    },
    openGraph: {
      url: Routes.Home,
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

export default async function HomePage() {
  const { data } = await sanityFetch({ query: homePageQuery })

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
