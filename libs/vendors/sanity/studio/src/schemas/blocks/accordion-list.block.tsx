import { faSquareChevronDown } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineArrayMember, defineField, defineType } from 'sanity'

import { getBlockText } from '@alecia/sanity-util'

/**
 * List of accordion items, each with a trigger and content
 */
export const accordionList = defineType({
  name: 'accordion-list',
  title: 'Accordion list',
  type: 'object',
  icon: () => <FontAwesomeIcon icon={faSquareChevronDown} />,
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'options', title: 'Options' },
  ],
  fields: [
    defineField({
      name: 'heading',
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
      name: 'items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          icon: () => <FontAwesomeIcon icon={faSquareChevronDown} />,
          fields: [
            defineField({
              name: 'trigger',
              type: 'string',
            }),
            defineField({
              name: 'content',
              type: 'array',
              of: [{ type: 'block' }],
            }),
            defineField({
              name: 'open',
              type: 'boolean',
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: 'trigger',
              content: 'content',
            },
            prepare: ({ title, content }) => ({
              title,
              subtitle: getBlockText(content),
            }),
          },
        }),
      ],
      group: 'content',
    }),
    defineField({
      name: 'layout',
      type: 'string',
      options: {
        layout: 'radio',
        list: ['vertical', 'horizontal'],
      },
      initialValue: 'vertical',
      group: 'options',
    }),
    defineField({
      name: 'uid',
      title: 'Unique Identifier',
      type: 'uid',
      group: 'options',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare: ({ title }) => ({
      title,
      subtitle: 'Accordion list',
    }),
  },
})
