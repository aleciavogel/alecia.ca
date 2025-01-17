import { faBinoculars } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

import { count } from '@alecia/sanity-util'

export const navIcons = defineType({
  name: 'nav.icons',
  title: 'Nav Icons Block',
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
      links: 'links',
    },
    prepare: ({ title, links }) => ({
      title,
      subtitle: count(links, 'link'),
    }),
  },
})
