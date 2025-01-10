import { faFolderOpen } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

import { count } from '@alecia/sanity-util'

import { internalLinkQuery } from './link-internal'

export const linkList = defineType({
  name: 'link.list',
  title: 'Link list',
  icon: <FontAwesomeIcon icon={faFolderOpen} />,
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
    }),
    defineField({
      name: 'links',
      type: 'array',
      of: [{ type: 'link.internal' }],
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

export const linkListQuery = `
  _type == 'link.list' => {
    links[]{
      ${internalLinkQuery}
    }
  }
`
