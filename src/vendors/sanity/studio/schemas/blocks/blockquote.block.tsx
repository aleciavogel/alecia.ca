import { faBlockQuote } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

export const blockQuote = defineType({
  name: 'text.blockquote',
  title: 'Blockquote',
  type: 'object',
  icon: () => <FontAwesomeIcon icon={faBlockQuote} />,
  fields: [
    defineField({
      name: 'quote',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'author',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'quote',
      subtitle: 'author',
    },
  },
})
