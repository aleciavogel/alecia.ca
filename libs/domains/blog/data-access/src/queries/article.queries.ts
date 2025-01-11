import groq from 'groq'

export const blogArticleQueryPartial = `
    title,
    previewText,
    'slug': '/blog/' + metadata.slug.current,
    'estimatedReadingTime': round(length(pt::text(body)) / 5 / 180 ),
    'imageSrc': mainImage.asset->url,
    'imageAlt': mainImage.alt,
    categories[]-> {
      title,
      'slug': '/blog?category=' + slug.current,
      'icon': icon.name
    }
`

export const allBlogArticlesQuery = groq`
  *[ _type == 'blog.article' ] | order(publishedAt desc) {
    ${blogArticleQueryPartial}
  }`

export const blogArticlesForCategoryQuery = groq`
  *[ _type == 'blog.article' && references(*[_type == 'blog.category' && slug.current == $slug]._id) ] | order(publishedAt desc) {
    ${blogArticleQueryPartial}
  }`
