export const authorSlugPartial = `
  _type == 'author' => '/authors/' + metadata.slug.current
`

export const blogPostSlugPartial = `
  _type == 'blog.article' => '/blog/' + metadata.slug.current
`

export const blogCategorySlugPartial = `
  _type == 'blog.category' => '/blog?category=' + metadata.slug.current
`

export const courseSlugPartial = `
  _type == 'course' => '/courses/' + metadata.slug.current
`

export const courseChapterSlugPartial = `
  _type == 'course.chapter' => {
    'slug':
      "/courses/" +
      coalesce(
        *[_type == "course" && references(^._id)][0].metadata.slug.current,
        "unknown-course"
      ) +
      "/" + metadata.slug.current
  }.slug
`

export const pageSlugPartial = `
  _type == 'page' => '/' + metadata.slug.current
`

export const projectSlugPartial = `
  _type == 'project' => '/projects/' + metadata.slug.current
`

export const experimentSlugPartial = `
  _type == 'experiment' => '/experiments/' + metadata.slug.current
`
