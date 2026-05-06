import { faRectangleList } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

import { getBlockText } from '@alecia/vendors/sanity/util/client/sanity-text-utils'

import { limitedBlockTypes } from '../fragments'

export const chapterSection = defineType({
  name: 'chapter-section',
  title: 'Chapter Section',
  icon: () => <FontAwesomeIcon icon={faRectangleList} />,
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Optional heading for this section',
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: limitedBlockTypes,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      content: 'content',
    },
    prepare: ({ title, content }) => ({
      title: title || getBlockText(content) || 'Untitled Section',
      subtitle: 'Chapter Section',
    }),
  },
})
