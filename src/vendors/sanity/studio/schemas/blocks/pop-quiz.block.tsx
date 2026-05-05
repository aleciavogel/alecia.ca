import { faPenCircle } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineArrayMember, defineField, defineType } from 'sanity'

/**
 * A quiz at the end of a course chapter
 */
export const popQuiz = defineType({
  name: 'pop-quiz',
  title: 'Pop quiz',
  icon: () => <FontAwesomeIcon icon={faPenCircle} />,
  type: 'object',
  fields: [
    defineField({
      name: 'question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answers',
      type: 'array',
      validation: (Rule) => Rule.required().min(2),
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'answer',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'correct',
              type: 'boolean',
              initialValue: false,
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'explanation',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'question',
    },
  },
})
