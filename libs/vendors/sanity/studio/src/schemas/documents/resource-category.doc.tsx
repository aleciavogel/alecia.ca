import { faFolderOpen } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

import { count } from '@alecia/sanity-util'

import { iconPickerField } from '../fragments'

/**
 * Resource/Link category
 */
export const resourceCategory = defineType({
  name: 'resource.category',
  title: 'Resource category',
  type: 'document',
  icon: () => <FontAwesomeIcon icon={faFolderOpen} />,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'links',
      type: 'array',
      of: [{ type: 'resource' }],
    }),
    iconPickerField,
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
