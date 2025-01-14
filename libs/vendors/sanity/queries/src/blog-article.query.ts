import { defineQuery } from 'next-sanity'

export const blogArticleQueryPartial = `
    _id,
    title,
    previewText,
    'slug': '/blog/' + metadata.slug.current,
    'estimatedReadingTime': round(length(pt::text(body)) / 5 / 180 ),
    'imageSrc': mainImage.asset->url,
    'imageAlt': mainImage.alt,
    categories[]-> {
      _key,
      title,
      'slug': '/blog?category=' + slug.current,
      'icon': icon.name
    }
`

export const allBlogArticlesQuery = defineQuery(`
  *[ _type == 'blog.article' ] | order(publishedAt desc) {
    ${blogArticleQueryPartial}
  }`)

export const blogArticlesForCategoryQuery = defineQuery(`
  *[ _type == 'blog.article' && references(*[_type == 'blog.category' && slug.current == $slug]._id) ] | order(publishedAt desc) {
    ${blogArticleQueryPartial}
  }`)
