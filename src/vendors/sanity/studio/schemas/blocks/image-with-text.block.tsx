import { faImage } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

/**
 * A collection of pet images to display on the about page
 */
export const imageWithTextBlock = defineType({
  name: 'image-with-text',
  title: 'Image With Text',
  icon: () => <FontAwesomeIcon icon={faImage} />,
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          description: 'A short description of the image for screen readers',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'caption',
          type: 'string',
          title: 'Image caption',
          description: 'A caption for the image that will appear below it',
        }),
      ],
    }),
    {
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [{ type: 'block' }], // Supports Portable Text for rich text
    },
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Float', value: 'float' },
          { title: 'Column', value: 'column' },
        ],
        layout: 'radio', // Use radio buttons for better UX
      },
      initialValue: 'column',
    },
    {
      name: 'side',
      title: 'Image Side',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
      },
      initialValue: 'left',
    },
    {
      name: 'centeredText',
      title: 'Centered Text',
      description: 'Center the text content in the column layout.',
      type: 'boolean',
      options: {
        hidden: ({ parent }: any) => parent?.layout !== 'column',
      },
    },
    {
      name: 'reverseMargin',
      title: 'Reverse Margin',
      type: 'boolean',
      description: 'Enable reverse margin to adjust spacing in specific layouts.',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      subtitle: 'image.caption',
      media: 'image',
    },
    prepare: ({ media, subtitle }) => ({
      title: 'Image With Text Block',
      subtitle,
      media,
    }),
  },
})
