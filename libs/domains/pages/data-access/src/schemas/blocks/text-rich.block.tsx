import { faKeyboard } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

import { imageBlock } from '@alecia/sanity-common'
import { getBlockText } from '@alecia/sanity-util'

export const textRich = defineType({
  name: 'text.rich',
  title: 'Richtext module',
  icon: () => <FontAwesomeIcon icon={faKeyboard} />,
  type: 'object',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'options', title: 'Options' },
  ],
  fields: [
    defineField({
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }, imageBlock],
      group: 'content',
    }),
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare: ({ content }) => ({
      title: getBlockText(content),
      subtitle: 'Richtext module',
    }),
  },
})
