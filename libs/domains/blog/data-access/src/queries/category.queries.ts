import groq from 'groq'

export const blogCategoriesQuery = groq`
  *[ _type == 'blog.category' ] {
    ...,
    "slug": slug.current,
    "href": '/blog?category=' + slug.current,
    "icon": icon.name
  }`
