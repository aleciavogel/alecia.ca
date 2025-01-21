import type { Metadata } from 'next'

import { IS_VERCEL_PREVIEW, SITE_BASE_URL } from '@alecia/constants'
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
    ? { url: settings.ogimage }
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
      images: ogimage ? { url: ogimage } : currentOgimage,
    },
    robots: {
      index: noIndex || IS_VERCEL_PREVIEW ? false : undefined,
    },
  }
}
