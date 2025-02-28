import { defineQuery } from 'next-sanity'

import { modulesQueryPartial } from './blocks/modules.query'

export const pageQuery = defineQuery(`
  *[_type == 'page' && $slug == metadata.slug.current && !(metadata.slug.current in [
    'index',
    '404'
  ])][0]{
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

export const homePageQuery = defineQuery(`
  *[_type == 'page' && metadata.slug.current == 'index'][0]{
    ...,
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
  *[_type == 'page' && defined(metadata.slug.current) && !(metadata.slug.current in [
    'index',
    '404'
  ])].metadata.slug.current
`)
