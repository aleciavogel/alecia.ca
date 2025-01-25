import { faAddressCard } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

import { count } from '@alecia/sanity-util/client-utils/sanity-text-utils'

export const dropdownAbout = defineType({
  name: 'dropdown.about',
  title: 'Dropdown Menu (About)',
  icon: () => <FontAwesomeIcon icon={faAddressCard} />,
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      description: 'Displayed above the author info',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'links',
      type: 'array',
      of: [{ type: 'link.internal' }],
    }),
  ],
  preview: {
    select: {
      title: 'label',
      links: 'links',
      media: 'image',
    },
    prepare: ({ title, links, media }) => ({
      title,
      subtitle: count(links, 'link'),
      media,
    }),
  },
})
