import { faPaw } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineArrayMember, defineField, defineType } from 'sanity'

/**
 * A collection of pet images to display on the about page
 */
export const galleryPets = defineType({
  name: 'gallery.pets',
  title: 'Pet Image Gallery',
  icon: () => <FontAwesomeIcon icon={faPaw} />,
  type: 'object',
  fields: [
    defineField({
      name: 'pretitle',
      type: 'string',
      validation: (Rule) => Rule.required().max(20),
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().max(20),
    }),
    defineField({
      name: 'images',
      type: 'array',
      validation: (Rule) => Rule.required().max(3).min(1),
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'name',
              type: 'string',
              title: 'Pet Name',
              description: 'The name of the pet in the image',
              validation: (Rule) => Rule.required().max(20),
            }),
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt text',
              description: 'A short description of the image for screen readers',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({ title }) => ({
      title,
      subtitle: 'Pet Image Gallery',
    }),
  },
})
