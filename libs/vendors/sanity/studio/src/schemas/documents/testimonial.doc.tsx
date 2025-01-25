import { faMessageQuote } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

import { getBlockText } from '@alecia/sanity-util/client-utils/sanity-text-utils'

import { literallyJustTheDefaultTextBlocks } from '../fragments'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  icon: () => <FontAwesomeIcon icon={faMessageQuote} />,
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      type: 'array',
      of: literallyJustTheDefaultTextBlocks,
    }),
    defineField({
      name: 'author',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          type: 'string',
        }),
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      content: 'content',
      author: 'author',
    },
    prepare: ({ content, author }) => ({
      title: author?.name || author?.title || 'No author',
      subtitle: getBlockText(content),
      media: author?.image,
    }),
  },
})
