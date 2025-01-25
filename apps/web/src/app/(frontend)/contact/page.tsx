import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Image as SanityImage } from 'sanity'

import RenderedBlocks from '@alecia/blocks/rendered'
import CalendlyScheduleButton from '@alecia/calendly-ui/schedule-button'
import { Routes, SITE_BASE_URL } from '@alecia/constants/routes'
import ContactFormCard from '@alecia/contact/components/contact-form-card'
import FormHeader from '@alecia/pages-ui/form-header'
import { pageQuery } from '@alecia/sanity-queries/pages.query'
import { settingsQuery } from '@alecia/sanity-queries/settings.query'
import { PageQueryResult, SettingsQueryResult } from '@alecia/sanity-types/sanity.types'
import { urlForOpenGraphImage } from '@alecia/sanity-util/client-utils/sanity-image-utils'
import { getData } from '@alecia/sanity-util/server-utils/get-data'
import SiteWrapper from '@alecia/site-layout/site-wrapper/site-wrapper'
import FooterSocialLinks from '@alecia/site-navigation/footer-nav/bottom/social-links'
import PageContents from '@alecia/site-navigation/page-contents/page-contents'
import Typography from '@alecia/ui-kit/ui/typography'

export async function generateMetadata(): Promise<Metadata> {
  const [page, settings] = await Promise.all([
    getData<PageQueryResult>(pageQuery, { slug: 'contact' }, [`page:contact`], {
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
      url: 'https://' + SITE_BASE_URL + Routes.Contact,
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

export default async function ContactPage() {
  const page = await getData<PageQueryResult>(pageQuery, { slug: 'contact' }, [`page:contact`])

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
        <div className="space-y-6 page-content max-lg:hidden">
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
