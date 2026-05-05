import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Image as SanityImage } from 'sanity'

import Typography from '@alecia/common/ui/typography'
import { Routes } from '@alecia/constants/routes'
import RenderedBlocks from '@alecia/core/blocks/components/rendered'
import ContactFormCard from '@alecia/core/contact/components/contact-form-card'
import FooterSocialLinks from '@alecia/core/navigation/components/footer-nav/bottom/social-links'
import PageContents from '@alecia/core/navigation/components/page-contents/page-contents'
import FormHeader from '@alecia/core/pages/components/form-header'
import SiteWrapper from '@alecia/core/theming/components/site-wrapper/site-wrapper'
import CalendlyScheduleButton from '@alecia/vendors/calendly/components/schedule-button'
import { pageQuery } from '@alecia/vendors/sanity/queries/pages.query'
import { urlForOpenGraphImage } from '@alecia/vendors/sanity/util/client/sanity-image-utils'
import { sanityFetch } from '@alecia/vendors/sanity/util/server/live'

export async function generateMetadata(): Promise<Metadata> {
  const { data: page } = await sanityFetch({
    query: pageQuery,
    params: { slug: 'contact' },
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
      canonical: Routes.Contact,
    },
    openGraph: {
      url: Routes.Contact,
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

export default async function ContactPage() {
  const { data: page } = await sanityFetch({ query: pageQuery, params: { slug: 'contact' } })

  if (!page) notFound()

  return (
    <SiteWrapper>
      <FormHeader
        pretitle={page.pretitle}
        title={page.title}
        subtitle={page.subtitle}
        buttons={<CalendlyScheduleButton label="Book a time" />}
      >
        <ContactFormCard />
      </FormHeader>
      <PageContents className="pt-80 lg:pt-28 pb-32 lg:pb-48">
        <div className="space-y-6 page-content-block max-lg:hidden">
          <Typography variant="blockPretitle" className="text-primary-900">
            Connect with me
          </Typography>
          <div className="space-x-6 text-4xl text-primary-600 dark:text-primary-300 max-md:text-center">
            <FooterSocialLinks />
          </div>
        </div>
        <RenderedBlocks modules={page.modules} />
      </PageContents>
    </SiteWrapper>
  )
}
