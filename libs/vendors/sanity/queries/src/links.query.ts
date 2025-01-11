import {
  authorSlugPartial,
  blogCategorySlugPartial,
  blogPostSlugPartial,
  courseChapterSlugPartial,
  courseSlugPartial,
  experimentSlugPartial,
  pageSlugPartial,
  projectSlugPartial,
} from './slugs.query'

export const externalLinkQueryPartial = `
  ...,
`

export const socialLinkQueryPartial = `
  ...,
`

export const internalLinkQueryPartial = `
  _type == 'link.internal' => {
    ...,
    'icon': item->icon.name,
    'slug': item->{
      'slug': select(
        ${authorSlugPartial},
        ${blogPostSlugPartial},
        ${blogCategorySlugPartial},
        ${courseSlugPartial},
        ${courseChapterSlugPartial},
        ${pageSlugPartial},
        ${projectSlugPartial},
        ${experimentSlugPartial},
        null
      )
    }.slug,
  }
`

export const linkListQueryPartial = `
  _type == 'link.list' => {
    links[]{
      ${internalLinkQueryPartial}
    }
  }
`
