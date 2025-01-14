import { faAddressCard } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

export const navIcons = defineType({
  name: 'nav.icons',
  title: 'About Nav',
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
      of: [{ type: 'link.internal' }],
      validation: (Rule) => Rule.required().max(3),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({ title }) => ({
      title,
      subtitle: 'About Nav',
    }),
  },
})
