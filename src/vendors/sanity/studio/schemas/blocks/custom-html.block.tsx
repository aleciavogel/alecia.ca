import { faCode } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

export const customHtml = defineType({
  name: 'custom-html',
  title: 'Custom HTML',
  icon: () => <FontAwesomeIcon icon={faCode} />,
  type: 'object',
  groups: [{ name: 'content', default: true }, { name: 'options' }],
  fields: [
    defineField({
      name: 'uid',
      title: 'Unique Identifier',
      type: 'uid',
      group: 'options',
    }),
    defineField({
      name: 'className',
      type: 'string',
      group: 'options',
    }),
    defineField({
      name: 'html',
      title: 'HTML',
      type: 'code',
      options: {
        language: 'html',
        languageAlternatives: [{ title: 'HTML', value: 'html' }],
      },
      group: 'content',
    }),
  ],
  preview: {
    select: {
      code: 'html.code',
    },
    prepare: ({ code }) => ({
      title: code,
      subtitle: 'Custom HTML',
    }),
  },
})
