import { faFolderOpen } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'
import { preview } from 'sanity-plugin-icon-picker'

import { iconPickerField, iconPickerOptions } from '@alecia/sanity-common'

/**
 * Blog category
 */
export const blogCategory = defineType({
  name: 'blog.category',
  title: 'Blog category',
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
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
    }),
    iconPickerField,
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      iconProvider: 'icon.provider',
      iconName: 'icon.name',
    },
    prepare: ({ title, subtitle, iconProvider, iconName }) => ({
      title,
      subtitle,
      media: preview({ name: iconName, provider: iconProvider, options: iconPickerOptions }),
    }),
  },
})
