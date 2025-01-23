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
