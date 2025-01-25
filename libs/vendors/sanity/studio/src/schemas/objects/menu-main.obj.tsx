import { faListDropdown } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

import { count } from '@alecia/sanity-util/client-utils/sanity-text-utils'

export const mainMenu = defineType({
  name: 'menu.main',
  title: 'Main Menu',
  icon: () => <FontAwesomeIcon icon={faListDropdown} />,
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      type: 'array',
      of: [
        { type: 'link.internal' },
        { type: 'dropdown.about' },
        { type: 'dropdown.blog' },
        { type: 'dropdown.promo' },
        { type: 'dropdown.quote' },
      ],
    }),
  ],
  preview: {
    select: {
      items: 'items',
    },
    prepare: ({ items }) => ({
      title: 'Main Menu',
      subtitle: count(items),
    }),
  },
})
