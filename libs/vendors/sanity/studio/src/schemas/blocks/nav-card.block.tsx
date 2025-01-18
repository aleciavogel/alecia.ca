import { faAddressCard } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

import { count } from '@alecia/sanity-util'

import { linkableResources } from '../fragments'

export const navCard = defineType({
  name: 'nav.card',
  title: 'Nav Card Block',
  icon: () => <FontAwesomeIcon icon={faAddressCard} />,
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
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description: 'A short description of the image for screen readers',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'links',
      type: 'array',
      of: [{ type: 'reference', to: linkableResources }],
      validation: (Rule) => Rule.required().max(3),
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
