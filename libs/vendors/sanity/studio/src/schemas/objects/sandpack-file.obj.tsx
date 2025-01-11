import { faLinkSimple } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

export const sandpackFile = defineType({
  name: 'sandpack.file',
  title: 'Code Preview File',
  icon: () => <FontAwesomeIcon icon={faLinkSimple} />,
  type: 'object',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'options', title: 'Options' },
  ],
  fields: [
    defineField({
      name: 'code',
      type: 'code',
      group: 'content',
      options: {
        withFilename: true,
      },
    }),
    defineField({
      name: 'readOnly',
      description: 'Set as non-editable, defaults to `false`',
      type: 'boolean',
      initialValue: false,
      group: 'options',
    }),
    defineField({
      name: 'active',
      description: 'Set as main file, defaults to `false`',
      type: 'boolean',
      initialValue: false,
      group: 'options',
    }),
    defineField({
      name: 'hidden',
      description: 'Tab visibility, defaults to `false`',
      type: 'boolean',
      initialValue: false,
      group: 'options',
    }),
  ],
  preview: {
    select: {
      title: 'code.filename',
      subtitle: 'code.language',
    },
  },
})
