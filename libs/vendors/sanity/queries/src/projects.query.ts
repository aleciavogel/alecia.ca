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
  'page': *[_type == 'page' && metadata.slug.current == 'projects'][0]{
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
  'projects': *[_type == 'project'] | order(publishDate desc) {
    ${projectQueryPartial},
  }
}`)

export const projectPageQuery = defineQuery(`
  *[_type == 'project' && metadata.slug.current == $slug] | order(publishDate desc)[0]{
    ...,
    ${projectQueryPartial},
    "prevProject": coalesce(
      *[_type == "project" && ^.publishDate > publishDate && _id != ^._id] | order(publishDate desc)[0]{
        ${projectQueryPartial}
      },
      *[_type == "project" && _id != ^._id] | order(publishDate asc)[0]{
        ${projectQueryPartial}
      }
    ),
    "nextProject": coalesce(
      *[_type == "project" && ^.publishDate < publishDate && _id != ^._id] | order(publishDate asc)[0]{
        ${projectQueryPartial}
      },
      *[_type == "project" && _id != ^._id] | order(publishDate desc)[0]{
        ${projectQueryPartial}
      }
    )
  }
`)

export const projectSlugsQuery = defineQuery(`
  *[_type == 'project' && defined(metadata.slug.current)]{
    'slug': metadata.slug.current
  }
`)
