import { faMessageQuote } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

import { getBlockText } from '@alecia/sanity-util/client-utils/sanity-text-utils'

export const testimonialFeatured = defineType({
  name: 'testimonial.featured',
  title: 'Testimonial (featured)',
  icon: () => <FontAwesomeIcon icon={faMessageQuote} />,
  type: 'object',
  fields: [
    defineField({
      name: 'testimonial',
      type: 'reference',
      to: [{ type: 'testimonial' }],
    }),
  ],
  preview: {
    select: {
      testimonial: 'testimonial.content',
    },
    prepare: ({ testimonial }) => {
      return {
        title: getBlockText(testimonial),
        subtitle: 'Testimonial (featured)',
      }
    },
  },
})
