import { defineQuery } from 'next-sanity'

import { modulesQueryPartial } from './modules.query'

export const projectQueryPartial = `
    ...,
    'slug': '/projects/' + metadata.slug.current,
    mainImage{
      ...,
      'src': asset->url,
      'dimensions': asset->metadata.dimensions,
      'bgColor': asset->metadata.palette.dominant.background
    },
    secondaryImage{
      ...,
      'src': asset->url,
      'dimensions': asset->metadata.dimensions,
      'bgColor': asset->metadata.palette.dominant.background
    },
    tags[]-> {
      ...,
      'slug': '/projects?tag=' + slug.current,
      'icon': icon.name
    }
`

export const allProjectsQuery = defineQuery(`
  *[_type == 'project' && !(_id in path('drafts.**'))] | order(publishDate desc) {
    ${projectQueryPartial},
  }
`)

export const projectIndexQuery = defineQuery(`
{
  'page': *[_type == 'page' && metadata.slug.current == 'projects' && !(_id in path('drafts.**'))][0]{
    ...,
    pretitle,
    title,
    subtitle,
    modules[]{
      ${modulesQueryPartial}
    },
    metadata {
      ...,
      'ogimage': image.asset->url + '?w=1200'
    }
  },
  'projects': *[_type == 'project' && defined(metadata.slug.current) && !(_id in path('drafts.**'))] | order(publishDate desc) {
    ${projectQueryPartial},
  }
}`)

export const projectPageQuery = defineQuery(`
  *[_type == 'project' && metadata.slug.current == $slug && !(_id in path('drafts.**'))] | order(publishDate desc)[0]{
    ...,
    ${projectQueryPartial}
  }
`)

export const projectSlugsQuery = defineQuery(`
  *[_type == 'project' && defined(metadata.slug.current) && !(_id in path('drafts.**'))]{
    'slug': metadata.slug.current
  }
`)
