import { faTag } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

import { count } from '@alecia/sanity-util'

export const dropdownBlog = defineType({
  name: 'dropdown.blog',
  title: 'Dropdown Menu (Blog)',
  icon: () => <FontAwesomeIcon icon={faTag} />,
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'links',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'blog.category' }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'label',
      links: 'links',
    },
    prepare: ({ title, links }) => ({
      title,
      subtitle: count(links, 'link'),
    }),
  },
})
