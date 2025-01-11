import { faCalendar, faMegaphone } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

import { getBlockText } from '@alecia/sanity-util'

export const announcement = defineType({
  name: 'announcement',
  title: 'Announcement',
  icon: () => <FontAwesomeIcon icon={faMegaphone} />,
  type: 'document',
  fieldsets: [{ name: 'schedule', options: { columns: 2 } }],
  fields: [
    defineField({
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
        },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Call-to-action',
      type: 'link.internal',
    }),
    defineField({
      name: 'start',
      title: 'Start',
      type: 'datetime',
      fieldset: 'schedule',
    }),
    defineField({
      name: 'end',
      title: 'End',
      type: 'datetime',
      fieldset: 'schedule',
    }),
  ],
  preview: {
    select: {
      content: 'content',
      cta: 'cta.label',
      start: 'start',
      end: 'end',
    },
    prepare: ({ content, cta, start, end }) => ({
      title: getBlockText(content),
      subtitle: cta,
      media: (start || end) && <FontAwesomeIcon icon={faCalendar} />,
    }),
  },
})
