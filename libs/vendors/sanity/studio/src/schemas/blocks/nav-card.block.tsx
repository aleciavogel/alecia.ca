import { faBinoculars } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

export const navCard = defineType({
  name: 'nav.card',
  title: 'Nav Links Card',
  icon: () => <FontAwesomeIcon icon={faBinoculars} />,
  type: 'object',
  fields: [
    defineField({
      name: 'pretitle',
      type: 'string',
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
    defineField({
      name: 'links',
      type: 'array',
      of: [{ type: 'link.internal' }],
      validation: (Rule) => Rule.required().max(4),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({ title }) => ({
      title,
      subtitle: 'Explore Links',
    }),
  },
})
