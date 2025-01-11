import { faNewspaper } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

export const blogFrontpage = defineType({
  name: 'blog-frontpage',
  title: 'Blog frontpage',
  icon: () => <FontAwesomeIcon icon={faNewspaper} />,
  type: 'object',
  fields: [
    defineField({
      name: 'mainPost',
      description: 'Choose which post to display as the main post',
      type: 'string',
      options: {
        list: [
          { title: 'Most recent post', value: 'recent' },
          { title: 'Featured post', value: 'featured' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'showFeaturedPostsFirst',
      type: 'boolean',
      initialValue: true,
      hidden: ({ parent }) => parent?.mainPost === 'featured',
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Blog frontpage',
    }),
  },
})
