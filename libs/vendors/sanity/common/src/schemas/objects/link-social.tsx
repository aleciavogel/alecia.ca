import { faLinkSimple } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'
import { preview } from 'sanity-plugin-icon-picker'

import { SOCIAL_ICON_MAP } from '@alecia/sanity-constants'

import { socialIconPickerOptions } from '../../fragments'

export const linkSocial = defineType({
  name: 'link.social',
  title: 'Social Link',
  icon: <FontAwesomeIcon icon={faLinkSimple} />,
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      placeholder: 'https://example.com',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
          allowRelative: true,
        }),
    }),
  ],
  preview: {
    select: {
      title: 'label',
      url: 'url',
    },
    prepare: ({ title, url }) => {
      const social = (url as string).replace(/https?:\/\/(?:www\.)?/, '').split('/')[0]

      const iconName = SOCIAL_ICON_MAP[social]
      const iconProvider = 'fa-brand'

      if (iconName) {
        return {
          title,
          media: preview({
            name: iconName,
            provider: iconProvider,
            options: socialIconPickerOptions,
          }),
        }
      }

      return {
        title,
        subtitle: url,
      }
    },
  },
})

export const socialLinkQuery = `
  ...,
`
