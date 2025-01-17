import { faGraduationCap } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineArrayMember, defineField, defineType } from 'sanity'

import { imageBlock, limitedBlockTypes } from '../fragments'

/**
 * Blog post
 */
export const course = defineType({
  name: 'course',
  title: 'Course',
  icon: () => <FontAwesomeIcon icon={faGraduationCap} />,
  type: 'document',
  groups: [{ name: 'content', default: true }, { name: 'options' }, { name: 'seo', title: 'SEO' }],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
    }),
    defineField({
      name: 'previewText',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'video',
      title: 'Video file',
      type: 'mux.video',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      group: 'content',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: limitedBlockTypes,
      group: 'content',
    }),
    defineField({
      name: 'chapters',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'course.chapter' }],
        },
      ],
      group: 'content',
    }),
    defineField({
      name: 'difficulty',
      type: 'string',
      options: {
        layout: 'radio',
        list: ['beginner', 'advanced'],
      },
      initialValue: 'beginner',
      group: 'content',
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'course.category' }],
        },
      ],
      group: 'content',
    }),
    defineField({
      name: 'publishDate',
      type: 'date',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      group: 'options',
      initialValue: false,
    }),
    defineField({
      name: 'repoUrl',
      title: 'GitHub Repo URL',
      description: 'The URL to the GitHub repository for this part.',
      type: 'url',
      group: 'options',
    }),
    defineField({
      name: 'metadata',
      type: 'metadata',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      featured: 'featured',
      title: 'title',
      subtitle: 'publishDate',
      media: 'metadata.image',
    },
    prepare: ({ title, subtitle, media, featured }) => ({
      title: [featured && '★', title].filter(Boolean).join(' '),
      subtitle,
      media,
    }),
  },
  orderings: [
    {
      title: 'Date',
      name: 'date',
      by: [{ field: 'publishDate', direction: 'desc' }],
    },
    {
      title: 'Title',
      name: 'metadata.title',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
})
