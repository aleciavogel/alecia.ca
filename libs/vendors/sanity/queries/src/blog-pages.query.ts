import { defineQuery } from 'next-sanity'

import { blogArticleQueryPartial } from './blog-article.query'

export const blogIndexQuery = defineQuery(`
{
  'page': *[_type == 'page' && metadata.slug.current == 'blog'][0]{
    pretitle,
    title,
    subtitle,
    metadata {
      ...,
      'ogimage': image.asset->url + '?w=1200'
    }
  },
  'articles': *[_type == 'blog.article' && (!defined($slug) || references(*[_type == 'blog.category' && slug.current == $slug]._id))] | order(publishedAt desc) {
    ${blogArticleQueryPartial},
  }
}`)

export const blogArticlePageQuery = defineQuery(`
  *[_type == 'blog.article' && metadata.slug.current == $slug][0]{
    ...,
    ${blogArticleQueryPartial}
  }
`)
