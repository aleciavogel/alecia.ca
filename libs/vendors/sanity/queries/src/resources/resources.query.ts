import { defineQuery } from 'next-sanity'

export const resourceItemQueryPartial = `
  _id,
  label,
  url,
  content,
  'image': image.asset->url,
  'alt': image.alt,
  featured,
  layout
`

export const resourcesIndexQuery = defineQuery(`
{
  'page': *[_type == 'page' && metadata.slug.current == 'resources'][0]{
    ...,
    pretitle,
    title,
    subtitle,
    headerIllustration,
    metadata {
      ...,
      'ogimage': image.asset->url + '?w=1200'
    }
  },
  'resources': *[_type == 'resource.category'] | order(title asc) {
    _id,
    title,
    description,
    icon,
    links[] {
      ${resourceItemQueryPartial}
    }
  }
}`)
