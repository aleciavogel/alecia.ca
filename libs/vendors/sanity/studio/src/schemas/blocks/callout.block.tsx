import { faMagnifyingGlass } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

import { getBlockText } from '@alecia/sanity-util'

export const callout = defineType({
  name: 'callout',
  title: 'Callout',
  icon: () => <FontAwesomeIcon icon={faMagnifyingGlass} />,
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'ctas',
      title: 'Call-to-actions',
      type: 'array',
      of: [{ type: 'cta' }],
    }),
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare: ({ content }) => ({
      title: getBlockText(content),
      subtitle: 'Callout',
    }),
  },
})
