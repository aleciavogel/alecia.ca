import type { Metadata } from 'next'

import { IS_VERCEL_PREVIEW, SITE_BASE_URL } from '@alecia/constants'
import { sanityClient } from '@alecia/sanity-client'
import { settingsQuery } from '@alecia/sanity-queries'
import { urlFor } from '@alecia/sanity-util'

interface SiteMetadata {
  title?: string | null
  description?: string | null
  ogimage?: string | null
  noIndex?: boolean | null
}

interface ProcessMetadataArgs {
  metadata?: SiteMetadata | null
  slug: string | null
  fallbackTitle?: string | null
}

export async function processMetadata({
  metadata,
  slug,
  fallbackTitle,
}: ProcessMetadataArgs): Promise<Metadata> {
  const settings = await sanityClient.fetch(settingsQuery)
  const BASE_URL = `https://${SITE_BASE_URL}`
  const DEFAULT_META = {
    metadataBase: new URL(BASE_URL),
  }

  if (!settings) {
    return DEFAULT_META
  }

  const { title = fallbackTitle, description, ogimage, noIndex } = metadata ?? {}

  const currentOgimage = settings.ogimage
    ? { url: urlFor(settings.ogimage).width(1200).height(630).url() }
    : undefined

  return {
    ...DEFAULT_META,
    title: `${title} | ${settings.title}`,
    description,
    openGraph: {
      type: 'website',
      url: DEFAULT_META + (slug ? (slug.includes('/') ? slug : `/${slug}`) : ''),
      title: `${title} | ${settings.title}`,
      description: description ?? undefined,
      images: ogimage
        ? { url: urlFor(ogimage).width(1200).height(630).fit('crop').url() }
        : currentOgimage,
    },
    robots: {
      index: noIndex || IS_VERCEL_PREVIEW ? false : undefined,
    },
  }
}
