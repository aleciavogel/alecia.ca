import { defineQuery } from 'next-sanity'

export const rssMetadataQuery = defineQuery(`
  *[ _type == 'blog.article'
     && defined(publishDate)
     && defined(metadata.slug.current)
  ] | order(publishDate desc)[0...20] {
    "title": select(
      defined(title) => title,
      "Untitled"
    ),
    "description": select(
      defined(previewText) => previewText,
      defined(metadata.description) => metadata.description,
      "No description available"
    ),
    'url': metadata.slug.current,
    'tags': categories[]-> {
      title
    }.title,
    'date': publishDate
  }
`)
