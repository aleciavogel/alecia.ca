import { faListDropdown } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

import { count } from '@alecia/sanity-util/client-utils/sanity-text-utils'

export const menu = defineType({
  name: 'menu',
  title: 'Menu',
  icon: () => <FontAwesomeIcon icon={faListDropdown} />,
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      type: 'array',
      of: [{ type: 'link.internal' }, { type: 'link.external' }, { type: 'link.list' }],
    }),
  ],
  preview: {
    select: {
      items: 'items',
    },
    prepare: ({ items }) => ({
      title: 'Menu',
      subtitle: count(items),
    }),
  },
})
