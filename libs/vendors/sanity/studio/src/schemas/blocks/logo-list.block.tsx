import { faBadgeCheck } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

import { getBlockText } from '@alecia/sanity-util/client-utils/sanity-text-utils'

export const logoList = defineType({
  name: 'logo-list',
  title: 'Logo list',
  icon: () => <FontAwesomeIcon icon={faBadgeCheck} />,
  type: 'object',
  groups: [{ name: 'content', default: true }, { name: 'options' }],
  fields: [
    defineField({
      name: 'pretitle',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'intro',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'content',
    }),
    defineField({
      name: 'logos',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'logo' }] }],
      description: 'Leave empty to display all logos',
      group: 'content',
    }),
    defineField({
      name: 'logoType',
      type: 'string',
      options: {
        layout: 'radio',
        list: ['default', 'light', 'dark'],
      },
      initialValue: 'default',
      group: 'options',
    }),
    defineField({
      name: 'autoScroll',
      type: 'boolean',
      initialValue: false,
      group: 'options',
    }),
  ],
  preview: {
    select: {
      pretitle: 'pretitle',
      intro: 'intro',
    },
    prepare: ({ pretitle, intro }) => ({
      title: getBlockText(intro) || pretitle,
      subtitle: 'Logo list',
    }),
  },
})
