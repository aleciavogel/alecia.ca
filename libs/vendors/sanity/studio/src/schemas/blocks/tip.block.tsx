import { faLightbulb } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

export const tip = defineType({
  name: 'tip',
  title: 'Tip',
  icon: () => <FontAwesomeIcon icon={faLightbulb} />,
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      content: 'content',
    },
    prepare: ({ title }) => ({
      title,
      subtitle: 'Callout',
    }),
  },
})
