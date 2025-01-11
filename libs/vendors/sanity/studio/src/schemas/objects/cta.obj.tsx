import { faPhone } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

export const cta = defineType({
  name: 'cta',
  title: 'Call-to-action',
  icon: <FontAwesomeIcon icon={faPhone} />,
  type: 'object',
  fields: [
    defineField({
      name: 'link',
      type: 'link.internal',
    }),
    defineField({
      name: 'style',
      type: 'string',
      options: {
        list: ['primary', 'secondary', 'outline', 'destructive', 'ghost', 'link'],
      },
    }),
  ],
  preview: {
    select: {
      label: 'link.label',
      pageTitle: 'link.internal.title',
      internal: 'link.internal.metadata.slug.current',
      external: 'link.external',
    },
    prepare: ({ label, pageTitle, internal, external }) => ({
      title: label || pageTitle,
      subtitle: external || (internal && (internal === 'index' ? '/' : `/${internal as string}`)),
    }),
  },
})
