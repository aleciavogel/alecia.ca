import { faLink } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

import {
  authorSlugPartial,
  blogCategorySlugPartial,
  blogPostSlugPartial,
  courseChapterSlugPartial,
  courseSlugPartial,
  experimentSlugPartial,
  pageSlugPartial,
  projectSlugPartial,
} from '../../queries'

export const linkInternal = defineType({
  name: 'link.internal',
  title: 'Internal Link',
  icon: <FontAwesomeIcon icon={faLink} />,
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
    }),
    defineField({
      name: 'item',
      type: 'reference',
      to: [
        { type: 'page' },
        { type: 'blog.post' },
        { type: 'blog.category' },
        { type: 'author' },
        { type: 'course' },
        { type: 'course.chapter' },
        { type: 'project' },
        { type: 'experiment' },
      ],
    }),
    defineField({
      name: 'params',
      title: 'URL parameters',
      placeholder: 'e.g. #jump-link or ?foo=bar',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      label: 'label',
      title: 'item.title',
    },
    prepare: ({ label, title }) => {
      return {
        title: label || title,
      }
    },
  },
})

export const internalLinkQuery = `
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
