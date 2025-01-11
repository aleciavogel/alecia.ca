import { faHandWave } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

export const textIntro = defineType({
  name: 'text.intro',
  title: 'Text Intro',
  icon: () => <FontAwesomeIcon icon={faHandWave} />,
  type: 'object',
  fields: [
    defineField({
      name: 'leadText',
      title: 'Lead text',
      description: 'Appears in a larger, bolder font',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'leadText',
    },
    prepare: ({ title }) => ({
      title,
      subtitle: 'Intro Text',
    }),
  },
})
