import { faLightbulb } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

import { getBlockText } from '@alecia/vendors/sanity/util/client/sanity-text-utils'

export const ideaCallout = defineType({
  name: 'idea-callout',
  title: 'Idea Callout',
  icon: () => <FontAwesomeIcon icon={faLightbulb} />,
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      description: 'e.g. "Did you know?", "Don\'t forget!", "Pro tip:"',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  preview: {
    select: {
      label: 'label',
      content: 'content',
    },
    prepare: ({ label, content }) => ({
      title: label ?? getBlockText(content),
      subtitle: 'Idea Callout',
    }),
  },
})
