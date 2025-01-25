import { defineQuery } from 'next-sanity'

import { modulesQueryPartial } from './blocks/modules.query'

export const pageQuery = defineQuery(`
  *[_type == 'page' && $slug == metadata.slug.current][0]{
    ...,
    'headerImageSrc': headerImage.asset->url,
    'headerImageAlt': headerImage.alt,
    modules[]{
      ${modulesQueryPartial}
    },
    metadata {
      ...,
      'ogimage': image.asset->url + '?w=1200'
    }
  }
`)

export const pageSlugQuery = defineQuery(`
  *[_type == 'page' && defined(metadata.slug.current) && !(metadata.slug.current in ['index', 'blog/*'])].metadata.slug.current
`)
