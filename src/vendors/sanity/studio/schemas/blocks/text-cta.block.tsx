import { faLineColumns } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

import { iconPickerOptions } from '../fragments'

export const textCta = defineType({
  name: 'text.cta',
  title: 'CTA Text',
  icon: () => <FontAwesomeIcon icon={faLineColumns} />,
  type: 'object',
  fieldsets: [
    { name: 'content', title: 'Content' },
    { name: 'layout', title: 'Layout' },
  ],
  fields: [
    defineField({
      name: 'layout',
      type: 'string',
      fieldset: 'layout',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'left',
    }),
    defineField({
      name: 'pretitle',
      type: 'string',
      fieldset: 'content',
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      fieldset: 'content',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
      fieldset: 'content',
    }),
    defineField({
      name: 'shouldUseLinkIcon',
      type: 'boolean',
      title: 'Use icon from link',
      description:
        'If checked, the icon will be taken from the linked page. Leave unchecked to use a custom icon.',
    }),
    defineField({
      name: 'icon',
      type: 'iconPicker',
      description:
        "Select an icon to display next to the CTA text. If 'Use icon from link' is checked, this icon will be ignored.",
      options: iconPickerOptions,
      hidden: ({ parent }) => parent?.shouldUseLinkIcon,
    }),
    defineField({
      name: 'link',
      type: 'link.internal',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({ title }) => ({
      title,
      subtitle: 'CTA Text',
    }),
  },
})
