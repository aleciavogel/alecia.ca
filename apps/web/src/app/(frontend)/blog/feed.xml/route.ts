import RSS from 'rss'

import { rssMetadataQuery } from '@alecia/sanity-queries/blog/rss.query'
import { RssMetadataQueryResult } from '@alecia/sanity-types/sanity.types'
import { getData } from '@alecia/sanity-util/server-utils/get-data'

export async function GET() {
  const meta = await getData<RssMetadataQueryResult>(rssMetadataQuery, {}, [`blog.article`], {
    stega: false,
  })

  const feed = new RSS({
    title: "Alecia's Code Zone",
    description: "Insights & ideas straight from Alecia Vogel's IDE",
    generator: 'RSS for Node and Next.js',
    feed_url: 'https://alecia.ca/blog/feed.xml',
    site_url: 'https://alecia.ca/',
    managingEditor: 'hello@alecia.ca (Alecia Vogel)',
    webMaster: 'hello@alecia.ca (Alecia Vogel)',
    copyright: `© 2022-${new Date().getFullYear().toString()} Alecia Vogel. All rights reserved.`,
    language: 'en-CA',
    pubDate: new Date().toUTCString(),
    ttl: 60,
  })

  if (meta) {
    meta.map((post) => {
      feed.item({
        title: post.title ?? 'Untitled',
        description: post.description ?? 'No description',
        url: post.url ?? 'https://alecia.ca/blog',
        categories: post.tags?.filter((tag) => tag !== null) || [],
        // TODO: Update if author field is added to blog articles
        author: 'Alecia Vogel',
        date: post.date ?? new Date(),
      })
    })
  }

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
