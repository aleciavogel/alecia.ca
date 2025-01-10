import { faEyes } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

import { internalLinkQuery } from '@alecia/sanity-common'
import { count } from '@alecia/sanity-util'

export const dropdownPromo = defineType({
  name: 'dropdown.promo',
  title: 'Dropdown Menu (HLB Promo)',
  icon: <FontAwesomeIcon icon={faEyes} />,
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    // defineField({
    //   name: 'image',
    //   type: 'image',
    // }),
    // defineField({
    //   name: 'url',
    //   type: 'url',
    //   validation: (Rule) => Rule.required(),
    // }),
    defineField({
      name: 'links',
      type: 'array',
      of: [{ type: 'link.internal' }],
    }),
  ],
  preview: {
    select: {
      title: 'label',
      link: 'link',
      links: 'links',
    },
    prepare: ({ title, links }) => ({
      title,
      subtitle: count(links, 'link'),
    }),
  },
})

export const promoDropdownQuery = `
  _type == 'dropdown.promo' => {
    ...,
    links[]{
      ${internalLinkQuery}
    }
  }
`
