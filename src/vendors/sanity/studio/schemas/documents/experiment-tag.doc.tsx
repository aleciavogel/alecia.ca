import { faTag } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

/**
 * Experiment tag
 */
export const experimentTag = defineType({
  name: 'experiment.tag',
  title: 'Experiment tag',
  type: 'document',
  icon: () => <FontAwesomeIcon icon={faTag} />,
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'slug.current',
    },
  },
})
