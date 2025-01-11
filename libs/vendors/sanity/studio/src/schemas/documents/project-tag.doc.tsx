import { faTag } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

/**
 * Project tag
 */
export const projectTag = defineType({
  name: 'project.tag',
  title: 'Project tag',
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
