import { faGearComplex } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Site settings',
  type: 'document',
  icon: () => <FontAwesomeIcon icon={faGearComplex} />,
  groups: [
    { name: 'general', title: 'General', default: true },
    { name: 'navigation', title: 'Navigation' },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'general',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'announcements',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'announcement' }] }],
      group: 'general',
      description: 'One announcement shown at a time. Top items have higher precedence.',
    }),
    defineField({
      name: 'mainMenu',
      description: 'Appears at the top of the site, sidebars, and fullscreen menus.',
      type: 'menu.main',
      group: 'navigation',
    }),
    defineField({
      name: 'secondaryMenu',
      description: 'Appears in the site footer.',
      type: 'menu',
      group: 'navigation',
    }),
    defineField({
      name: 'fullscreenMenu',
      description: 'Appears when the fullscreen menu is opened.',
      type: 'array',
      group: 'navigation',
      of: [{ type: 'link.internal' }],
    }),
    defineField({
      name: 'wavyAdjectives',
      description: 'Text that appears in the wavy section of the site headers.',
      type: 'array',
      group: 'navigation',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'social',
      description: 'Links to social media profiles. Displays in the footer.',
      type: 'array',
      of: [{ type: 'link.social' }],
      group: 'navigation',
    }),
    defineField({
      name: 'footerName',
      description: 'Name for the site footer',
      type: 'string',
      group: 'navigation',
    }),
    defineField({
      name: 'footerBio',
      description: 'Bio for the site footer',
      type: 'array',
      group: 'navigation',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'copyright',
      type: 'string',
      group: 'general',
    }),
    defineField({
      name: 'ogimage',
      title: 'Open Graph Image (Site-wide)',
      description: 'Used for social sharing previews. Set page-specific images in Page documents.',
      type: 'image',
      group: 'general',
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Site settings',
    }),
  },
})
