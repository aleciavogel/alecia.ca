import { faGrid } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

/**
 * List of blog posts, either in carousel or grid format
 */
export const blogList = defineType({
  name: 'blog-list',
  title: 'Blog list',
  icon: () => <FontAwesomeIcon icon={faGrid} />,
  type: 'object',
  groups: [{ name: 'content', default: true }, { name: 'filtering' }, { name: 'options' }],
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'intro',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'content',
    }),
    defineField({
      name: 'layout',
      type: 'string',
      options: {
        list: ['grid', 'carousel'],
        layout: 'radio',
      },
      initialValue: 'carousel',
      group: 'options',
    }),
    defineField({
      name: 'displayFilters',
      title: 'Display category filter buttons',
      description: 'Allows for on-page filtering of posts by category',
      type: 'boolean',
      initialValue: false,
      group: 'filtering',
      hidden: ({ parent }) => Boolean(parent.filteredCategory),
    }),
    defineField({
      name: 'limit',
      title: 'Number of posts to show',
      description: 'Leave empty to show all posts',
      type: 'number',
      validation: (Rule) => Rule.min(1).integer(),
      group: 'filtering',
    }),
    defineField({
      name: 'filteredCategory',
      title: 'Filter posts by a category',
      description: 'Leave empty to show all posts',
      type: 'reference',
      to: [{ type: 'blog.category' }],
      group: 'filtering',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      layout: 'layout',
    },
    prepare: ({ title, layout }) => ({
      title,
      subtitle: `Blog list (${layout as string})`,
    }),
  },
})
