import type { MetadataRoute } from 'next'

import { SITE_BASE_URL } from '@alecia/constants/routes'
import { articleSlugsQuery } from '@alecia/vendors/sanity/queries/blog/blog-article.query'
import { projectSlugsQuery } from '@alecia/vendors/sanity/queries/projects/projects.query'
import { sanityFetch } from '@alecia/vendors/sanity/util/server/live'

const baseUrl = `https://${SITE_BASE_URL}`

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about/resume`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/projects`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/experiments`,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  const [{ data: articleSlugs }, { data: projectSlugs }] = await Promise.all([
    sanityFetch({ query: articleSlugsQuery, stega: false }),
    sanityFetch({ query: projectSlugsQuery, stega: false }),
  ])

  const blogPages: MetadataRoute.Sitemap = (articleSlugs ?? []).map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const projectPages: MetadataRoute.Sitemap = (projectSlugs ?? []).map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages, ...projectPages]
}
