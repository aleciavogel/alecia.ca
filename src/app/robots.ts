import type { MetadataRoute } from 'next'

import { SITE_BASE_URL } from '@alecia/constants/routes'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/hq/', '/api/'],
      },
    ],
    sitemap: `https://${SITE_BASE_URL}/sitemap.xml`,
  }
}
