import { defineQuery } from 'next-sanity'

export const courseQueryPartial = `
  ...,
  title,
  subtitle,
  previewText,
  "numChapters": count(chapters),
  difficulty,
  publishDate,
  featured,
  'slug': '/courses/' + metadata.slug.current,
  'imageSrc': mainImage.asset->url,
  'imageAlt': mainImage.alt,
  categories[]-> {
    _key,
    title,
    'slug': '/courses?category=' + slug.current,
    'icon': icon.name
  },
  "metadata": metadata {
    title,
    description,
    image
  }
`

export const CoursesByDifficultyQuery = defineQuery(`
  *[_type == 'course' && difficulty == $difficulty] | order(publishedAt desc) {
    ${courseQueryPartial},
  }
`)

export const courseListPartial = `
  ...,
  heading,
  intro,
  layout,
  limit,
  difficulty,
  displayFilters,
  'courses': *[_type == "course" && difficulty == ^.difficulty] | order(publishDate desc) {
    ${courseQueryPartial}
  }
`

export const courseListQueryPartial = `
  _type == 'course-list' => {
    ${courseListPartial}
  }
`
