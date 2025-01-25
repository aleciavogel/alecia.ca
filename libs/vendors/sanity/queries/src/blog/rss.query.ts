import { defineQuery } from 'next-sanity'

export const rssMetadataQuery = defineQuery(`
*[ _type == 'blog.article' ] | order(publishDate desc)[0...20] {
    title,
    'description': previewText,
    'url': 'https://alecia.ca/blog/' + metadata.slug.current,
    'tags': categories[]-> {
      title
    }.title,
    'date': publishDate,
}
`)
