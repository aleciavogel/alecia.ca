import { defineField } from 'sanity'

import { iconPickerOptions } from './fields'

export const linkableResources = [{ type: 'page' }, { type: 'blog.category' }]

export const linkableResourceFields = [
  defineField({
    name: 'title',
    type: 'string',
    group: 'content',
    fieldset: 'heading',
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: 'subtitle',
    description: 'Appears below the title in larger text than the content of the page',
    type: 'string',
    group: 'content',
    fieldset: 'heading',
  }),
  defineField({
    name: 'icon',
    type: 'iconPicker',
    options: iconPickerOptions,
    group: 'content',
  }),
]
