import groq from 'groq'

import { modulesQueryPartial } from './modules.query'

export const homePageQuery = groq`
*[_type == 'page' && metadata.slug.current == 'index'][0]{
  ...,
  modules[]{
    ${modulesQueryPartial}
  },
  metadata {
    ...,
    'ogimage': image.asset->url + '?w=1200'
  }
}`

export const pageQuery = groq`*[_type == 'page' && metadata.slug.current == $slug && !(metadata.slug.current in ['index', '404', 'blog/*', 'courses/*', 'projects/*', 'experiments/*'])][0]{
    ...,
    modules[]{
      ${modulesQueryPartial}
    },
    metadata {
      ...,
      'ogimage': image.asset->url + '?w=1200'
    }
  }`

export const pageSlugQuery = groq`
  *[_type == 'page' && defined(metadata.slug.current) && !(metadata.slug.current in ['index', '404', 'blog/*', 'courses/*', 'projects/*', 'experiments/*'])].metadata.slug.current`
