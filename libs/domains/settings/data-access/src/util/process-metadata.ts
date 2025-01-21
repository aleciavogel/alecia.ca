import type { Metadata } from 'next'

import { IS_VERCEL_PREVIEW, SITE_BASE_URL } from '@alecia/constants'
import { urlFor } from '@alecia/sanity-util'
import { getPlaceholderImage } from '@alecia/util'

import { getSettings } from '../loaders'

interface SiteMetadata {
  title?: string
  description?: string
  ogimage?: string
  noIndex?: boolean | null
}

interface ProcessMetadataArgs {
  metadata?: SiteMetadata
  slug: string
  fallbackTitle?: string
}

export async function processMetadata({
  metadata,
  slug,
  fallbackTitle,
}: ProcessMetadataArgs): Promise<Metadata> {
  const settings = await getSettings()

  if (!settings) {
    return {
      metadataBase: new URL(SITE_BASE_URL),
    }
  }

  const { title = fallbackTitle, description, ogimage, noIndex } = metadata ?? {}
  const url = SITE_BASE_URL + slug
  const currentOgimage = settings.ogimage
    ? { url: urlFor(settings.ogimage).width(1200).height(630).url() }
    : { url: getPlaceholderImage(1200, 630) }

  return {
    metadataBase: new URL(SITE_BASE_URL),
    title: `${title} | ${settings.title}`,
    description,
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      images: ogimage
        ? { url: urlFor(ogimage).width(1200).height(630).fit('crop').url() }
        : currentOgimage,
    },
    robots: {
      index: noIndex || IS_VERCEL_PREVIEW ? false : undefined,
    },
  }
}
