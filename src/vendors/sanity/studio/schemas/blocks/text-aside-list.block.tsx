import { faNewspaper } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

export const textAsideList = defineType({
  name: 'text.aside-list',
  title: 'Text With List',
  icon: () => <FontAwesomeIcon icon={faNewspaper} />,
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      description: 'Heading for the aside',
      type: 'string',
    }),
    defineField({
      name: 'listItems',
      description: 'List items to display in the aside',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'reverse',
      description: 'Reverse the order of the text and list',
      type: 'boolean',
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Text With List',
    }),
  },
})
