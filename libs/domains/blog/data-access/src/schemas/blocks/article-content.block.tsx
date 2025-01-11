import { faNewspaper } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

/**
 * Content of a blog post in a structured format
 */
export const blogPostContent = defineType({
  name: 'blog-post-content',
  title: 'Blog post content',
  icon: () => <FontAwesomeIcon icon={faNewspaper} />,
  type: 'object',
  fields: [
    defineField({
      name: 'uid',
      title: 'Unique Identifier',
      type: 'uid',
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Blog post content',
    }),
  },
})
