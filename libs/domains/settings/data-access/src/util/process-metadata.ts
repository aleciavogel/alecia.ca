import type { Metadata } from 'next'

import { IS_VERCEL_PREVIEW, SITE_BASE_URL } from '@alecia/constants'
import { urlFor } from '@alecia/sanity-util'

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
      url: DEFAULT_META + (slug.includes('/') ? slug : `/${slug}`),
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
