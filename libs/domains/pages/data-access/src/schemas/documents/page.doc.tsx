import { faPage } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'
import { preview } from 'sanity-plugin-icon-picker'

import { iconPickerOptions } from '@alecia/sanity-common'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: <FontAwesomeIcon icon={faPage} />,
  fieldsets: [{ name: 'heading', title: 'Page Heading' }],
  groups: [
    { name: 'content', default: true },
    { name: 'layout', title: 'Layout & Design' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'icon',
      type: 'iconPicker',
      options: iconPickerOptions,
      group: 'content',
    }),
    defineField({
      name: 'pretitle',
      description: 'Appears above the title in small uppercase text',
      type: 'string',
      group: 'content',
      fieldset: 'heading',
      validation: (Rule) => Rule.required(),
    }),
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
          { title: 'Alecia - Couch With All Pets', value: 'AleciaCouchIllustration' },
          { title: 'Alecia - Idea', value: 'AleciaIdeaIllustration' },
          { title: 'Alecia - Laying With Hammond', value: 'AleciaLayingIllustration' },
          { title: 'Alecia - Sitting With Phoebe', value: 'AleciaSitIllustration' },
          { title: 'Alecia - Wave', value: 'AleciaWaveIllustration' },
          { title: 'Hammond - Chemical Spill', value: 'HammondScienceIllustration' },
          { title: 'Hammond - Sleeping On Notes', value: 'HammondSleepingIllustration' },
          { title: 'Phoebe - Random Email', value: 'PhoebeLaptopIllustration' },
          { title: 'Phoebe - Playing With Yarn', value: 'PhoebeYarnIllustration' },
          { title: 'Sadie - Scolded', value: 'SadieAteMyWebsiteIllustration' },
          { title: 'Sadie - Cookie Thief Accomplice', value: 'SadieHammondCookiesIllustration' },
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
      of: [
        { type: 'accordion-list' },
        { type: 'blog-frontpage' },
        { type: 'blog-list' },
        // { type: 'breadcrumbs' },
        { type: 'callout' },
        // { type: 'creative-module' },
        { type: 'custom-html' },

        // Image gallery types
        { type: 'gallery.pets' },

        /** Navigation */
        { type: 'nav.about' },
        { type: 'nav.explore' },
        // { type: 'flag-list' },
        // { type: 'hero' },
        // { type: 'hero.saas' },
        // { type: 'hero.split' },
        { type: 'logo-list' },
        { type: 'sandpack' },
        // { type: 'stat-list' },
        // { type: 'step-list' },

        /**
         * Testimonial modules
         */
        { type: 'testimonial-list' },
        { type: 'testimonial.featured' },

        /**
         * Text Modules
         */
        { type: 'text.cta' }, // Two-column layout with a call to action and heading on the side
        { type: 'text.intro' }, // Intro text for home + about pages
        { type: 'text.rich' }, // Rich text editor
      ],
      options: {
        insertMenu: {
          views: [{ name: 'list' }, { name: 'grid' }],
          groups: [
            { name: 'blog', of: ['blog-frontpage', 'blog-list', 'blog-post-content'] },
            { name: 'navigation', of: ['nav.about', 'nav.explore'] },
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
