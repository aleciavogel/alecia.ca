import { faQuoteLeft } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

import { internalLinkQuery } from '@alecia/sanity-common'
import { count } from '@alecia/sanity-util'

export const dropdownQuote = defineType({
  name: 'dropdown.quote',
  title: 'Dropdown Menu (Quote)',
  icon: <FontAwesomeIcon icon={faQuoteLeft} />,
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quote',
      type: 'string',
      validation: (Rule) => Rule.required(),
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

export const quoteDropdownQuery = `
  _type == 'dropdown.quote' => {
    ...,
    links[]{
      ${internalLinkQuery}
    }
  }
`
