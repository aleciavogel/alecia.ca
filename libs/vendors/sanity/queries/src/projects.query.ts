import { defineQuery } from 'next-sanity'

import { modulesQueryPartial } from './modules.query'

export const projectQueryPartial = `
    ...,
    'slug': '/projects/' + metadata.slug.current,
    'imageSrc': mainImage.asset->url,
    'imageAlt': mainImage.alt,
    tags[]-> {
      _key,
      title,
      'slug': '/projects?tag=' + slug.current,
      'icon': icon.name
    }
`

export const allProjectsQuery = defineQuery(`
  *[_type == 'project'] | order(publishedAt desc) {
    ${projectQueryPartial},
  }
`)

export const projectIndexQuery = defineQuery(`
{
  'page': *[_type == 'page' && metadata.slug.current == 'projects'][0]{
    ...,
    pretitle,
    title,
    subtitle,
    'imageSrc': mainImage.asset->url,
    'imageAlt': mainImage.alt,
    modules[]{
      ${modulesQueryPartial}
    },
    metadata {
      ...,
      'ogimage': image.asset->url + '?w=1200'
    }
  },
  'projects': *[_type == 'project'] | order(publishedAt desc) {
    ${projectQueryPartial},
  }
}`)

export const projectPageQuery = defineQuery(`
  *[_type == 'project' && metadata.slug.current == $slug][0]{
    ...,
    ${projectQueryPartial}
  }
`)
