import { faVial } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

import { imageBlock } from '../fragments'

/**
 * Blog post
 */
export const experiment = defineType({
  name: 'experiment',
  title: 'Experiment',
  icon: () => <FontAwesomeIcon icon={faVial} />,
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
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }, imageBlock, { type: 'sandpack' }, { type: 'custom-html' }],
      group: 'content',
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'experiment.tag' }],
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
