import { defineQuery } from 'next-sanity'

export const blogArticleQueryPartial = `
    _id,
    title,
    previewText,
    mainImage,
    'slug': '/blog/' + metadata.slug.current,
    'estimatedReadingTime': round(length(pt::text(body)) / 5 / 180 ),
    categories[]-> {
      _key,
      title,
      'slug': '/blog?category=' + metadata.slug.current,
      'icon': icon.name
    },
    metadata {
      ...,
    }
`

export const allBlogArticlesQuery = defineQuery(`
  *[ _type == 'blog.article' ] | order(publishedAt desc) {
    ${blogArticleQueryPartial}
  }`)

export const blogArticlesForCategoryQuery = defineQuery(`
  *[ _type == 'blog.article' && references(*[_type == 'blog.category' && metadata.slug.current == $slug]._id) ] | order(publishedAt desc) {
    ${blogArticleQueryPartial}
  }`)

export const articleSlugsQuery = defineQuery(`
  *[_type == 'blog.article' && defined(metadata.slug.current)]{
    'slug': metadata.slug.current
  }
`)

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
  'articles': *[_type == 'blog.article' && (!defined($slug) || references(*[_type == 'blog.category' && metadata.slug.current == $slug]._id))] | order(publishDate desc) {
    ${blogArticleQueryPartial},
  }
}`)

export const blogArticlePageQuery = defineQuery(`
  *[_type == 'blog.article' && metadata.slug.current == $slug][0]{
    ...,
    ${blogArticleQueryPartial}
  }
`)
