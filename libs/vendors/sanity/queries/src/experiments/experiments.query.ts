import { defineQuery } from 'next-sanity'

import { modulesQueryPartial } from '../blocks/modules.query'

export const experimentQueryPartial = `
    ...,
    'slug': '/experiments/' + coalesce(metadata.slug.current, ''),
    'imageSrc': coalesce(mainImage.asset->url, ''),
    'imageAlt': coalesce(mainImage.alt, 'No alt text'),
    tags[]-> {
      ...,
      label,
      'slug': '/experiments?tag=' + slug.current,
      'icon': icon.name
    }
`

export const allExperimentsQuery = defineQuery(`
  *[_type == 'experiment'] | order(publishedAt desc) {
    ${experimentQueryPartial},
  }
`)

export const experimentsIndexQuery = defineQuery(`
{
  'page': *[_type == 'page' && metadata.slug.current == 'experiments'][0]{
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
  'experiments': *[_type == 'experiment'] | order(publishedAt desc) {
    ${experimentQueryPartial},
  }
}`)

export const experimentPageQuery = defineQuery(`
  *[_type == 'experiment' && metadata.slug.current == $slug][0]{
    ...,
    ${experimentQueryPartial}
  }
`)
