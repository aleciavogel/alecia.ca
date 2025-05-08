import { faPage } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'
import { preview } from 'sanity-plugin-icon-picker'

import { Illustrations } from '@alecia/constants/images'

import { blockTypes, iconPickerOptions, linkableResourceFields } from '../fragments'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: () => <FontAwesomeIcon icon={faPage} />,
  fieldsets: [{ name: 'heading', title: 'Page Heading' }],
  groups: [
    { name: 'content', default: true },
    { name: 'layout', title: 'Layout & Design' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    ...linkableResourceFields,
    defineField({
      name: 'pretitle',
      description: 'Appears above the title in small uppercase text',
      type: 'string',
      group: 'content',
      fieldset: 'heading',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headerBorder',
      title: 'Header Border Type',
      type: 'string',
      group: 'layout',
      options: {
        list: [
          { title: 'Angled Right', value: 'angled' },
          { title: 'Angled Left', value: 'angled-inverse' },
          { title: 'Rectangular', value: 'rectangular' },
          { title: 'Chevron', value: 'chevron' },
        ],
      },
      initialValue: 'angled',
    }),
    defineField({
      name: 'headerIllustration',
      title: 'Header illustration',
      description: 'SVG Illustration to display at the top of the page',
      type: 'string',
      group: 'layout',
      options: {
        list: [
          { title: 'N/A', value: 'none' },
          { title: 'Alecia - Couch With All Pets', value: Illustrations.AleciaCouch },
          { title: 'Alecia - Idea', value: Illustrations.AleciaIdea },
          { title: 'Alecia - Laying With Hammond', value: Illustrations.AleciaLaying },
          { title: 'Alecia - Sitting With Phoebe', value: Illustrations.AleciaSit },
          { title: 'Alecia - Wave', value: Illustrations.AleciaWave },
          { title: 'Hammond - Chemical Spill', value: Illustrations.HammondScience },
          { title: 'Hammond - Sleeping On Notes', value: Illustrations.HammondSleeping },
          { title: 'Phoebe - Random Email', value: Illustrations.PhoebeLaptop },
          { title: 'Phoebe - Playing With Yarn', value: Illustrations.PhoebeYarn },
          { title: 'Phoebe - Sleeping On Blanket', value: Illustrations.PhoebeSleeping },
          { title: 'Sadie - Scolded', value: Illustrations.SadieAteMyWebsite },
          { title: 'Sadie - Cookie Thief Accomplice', value: Illustrations.SadieHammondCookies },
        ],
      },
      hidden: ({ parent }) => parent?.metadata?.slug?.current === 'about',
    }),
    defineField({
      name: 'headerImage',
      title: 'Header Image',
      description: 'Photo to display at the top of the page',
      type: 'image',
      group: 'layout',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          description: 'Descriptive text for screen readers',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
      hidden: ({ parent }) => parent?.metadata?.slug?.current !== 'about',
    }),
    defineField({
      name: 'modules',
      description: 'Page content',
      type: 'array',
      of: blockTypes,
      options: {
        insertMenu: {
          views: [{ name: 'list' }, { name: 'grid' }],
          groups: [
            { name: 'blog', of: ['blog-frontpage', 'blog-list', 'blog-post-content'] },
            { name: 'navigation', of: ['nav.card', 'nav.icons'] },
            {
              name: 'testimonial',
              of: ['testimonial-list', 'testimonial.featured'],
            },
            {
              name: 'text',
              of: ['text.cta', 'text.intro', 'text.rich'],
            },
          ],
        },
      },
      group: 'content',
    }),
    defineField({
      name: 'metadata',
      type: 'metadata',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      metaTitle: 'metadata.title',
      slug: 'metadata.slug.current',
      iconName: 'icon.name',
      iconProvider: 'icon.provider',
    },
    prepare: ({ title, metaTitle, slug, iconName, iconProvider }) => {
      return {
        title: metaTitle ?? title,
        subtitle: slug && (slug === 'index' ? '/' : `/${String(slug)}`),
        media: preview({ name: iconName, provider: iconProvider, options: iconPickerOptions }),
      }
    },
  },
})
