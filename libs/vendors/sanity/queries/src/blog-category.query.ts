import { defineQuery } from 'next-sanity'

export const blogCategoriesQuery = defineQuery(`
  *[ _type == 'blog.category' ] {
    ...,
    'slug': '/blog/' + metadata.slug.current,
    'href': '/blog?category=' + metadata.slug.current,
    'icon': icon.name
  }`)
