import { faFolderOpen } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'
import { preview } from 'sanity-plugin-icon-picker'

import { iconPickerOptions, linkableResourceFields } from '../fragments'

/**
 * Blog category
 */
export const blogCategory = defineType({
  name: 'blog.category',
  title: 'Blog category',
  type: 'document',
  icon: () => <FontAwesomeIcon icon={faFolderOpen} />,
  fieldsets: [{ name: 'heading', title: 'Page Heading' }],
  groups: [
    { name: 'content', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    ...linkableResourceFields,
    defineField({
      name: 'metadata',
      type: 'metadata',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
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
