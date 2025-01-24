import { defineQuery } from 'next-sanity'

import { modulesQueryPartial } from './modules.query'

export const pageQuery =
  defineQuery(`*[_type == 'page' && metadata.slug.current == $slug && !(metadata.slug.current in ['404', 'blog/*', 'courses/*', 'projects/*', 'experiments/*'])][0]{
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
  }`)

export const pageSlugQuery = defineQuery(`
  *[_type == 'page' && defined(metadata.slug.current) && !(metadata.slug.current in ['index', '404', 'blog/*', 'courses/*', 'projects/*', 'experiments/*'])].metadata.slug.current`)
