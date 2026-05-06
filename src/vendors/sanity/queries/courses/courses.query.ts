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

export const coursePageQuery = defineQuery(`
  *[_type == 'course' && metadata.slug.current == $slug][0]{
    ...,
    ${courseQueryPartial},
    body,
    repoUrl,
    video,
    "metadata": metadata {
      ...,
    },
    chapters[]-> {
      _id,
      title,
      subtitle,
      publishDate,
      'slug': metadata.slug.current,
    },
  }
`)

export const courseSlugsQuery = defineQuery(`
  *[_type == 'course' && defined(metadata.slug.current)]{
    'slug': metadata.slug.current
  }
`)

export const courseChapterPageQuery = defineQuery(`
  *[_type == 'course' && metadata.slug.current == $slug][0]{
    'courseTitle': title,
    'courseSlug': metadata.slug.current,
    'chapter': chapters[_ref in *[_type == 'course.chapter' && metadata.slug.current == $chapter]._id][0]->{
      ...,
      body,
      sectionQuiz,
      nextSectionText,
      repoUrl,
      video,
      metadata {
        ...,
      },
    },
    'nextChapter': chapters[
      @._ref in *[_type == 'course.chapter']._id
    ]->{
      _id,
      title,
      'slug': metadata.slug.current,
    },
  }
`)

export const courseChapterSlugsQuery = defineQuery(`
  *[_type == 'course' && defined(metadata.slug.current)]{
    'slug': metadata.slug.current,
    'chapters': chapters[]->{
      'chapter': metadata.slug.current
    }
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
