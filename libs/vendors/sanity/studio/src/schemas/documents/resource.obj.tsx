import { faGlobePointer } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

export const resource = defineType({
  name: 'resource',
  title: 'Resource',
  icon: () => <FontAwesomeIcon icon={faGlobePointer} />,
  type: 'object',
  groups: [{ name: 'content', default: true }, { name: 'options' }],
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      placeholder: 'https://example.com',
      type: 'url',
      group: 'content',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
          allowRelative: true,
        }),
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'content',
    }),
    defineField({
      name: 'image',
      description: 'Shown in the hover card with the description.',
      type: 'image',
      group: 'content',
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      group: 'options',
      initialValue: false,
    }),
    defineField({
      name: 'layout',
      type: 'string',
      description: 'How the image and text should be laid out in the hover card.',
      options: {
        layout: 'radio',
        list: ['vertical', 'horizontal'],
      },
      initialValue: 'vertical',
      group: 'options',
    }),
  ],
  preview: {
    select: {
      featured: 'featured',
      title: 'label',
      subtitle: 'url',
      media: 'image',
    },
    prepare: ({ title, subtitle, media, featured }) => ({
      title: [featured && '★', title].filter(Boolean).join(' '),
      subtitle,
      media,
    }),
  },
})
