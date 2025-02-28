import { defineField, defineType } from 'sanity'

export const metadata = defineType({
  name: 'metadata',
  title: 'Metadata',
  description: 'For search engines',
  type: 'object',
  fields: [
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'URL path / permalink. Use "index" for the homepage.',
      options: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- no types for doc
        source: (doc: any) => doc.title ?? doc.metadata.title,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.max(60).warning(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(160).warning(),
    }),
    defineField({
      name: 'image',
      description: 'Used for social sharing previews',
      type: 'image',
    }),
    defineField({
      name: 'keywords',
      description: 'List of keywords for search engines',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'noIndex',
      description: 'Prevent search engines from indexing this page',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
