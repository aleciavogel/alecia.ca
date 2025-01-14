import { faBookBookmark } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineField, defineType } from 'sanity'

import { imageBlock, limitedBlockTypes } from '../fragments'

/**
 * Course chapter
 */
export const courseChapter = defineType({
  name: 'course.chapter',
  title: 'Course Chapter',
  icon: () => <FontAwesomeIcon icon={faBookBookmark} />,
  type: 'document',
  groups: [
    { name: 'content', default: true },
    { name: 'options' },
    { name: 'nextSection', title: 'Next Section' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
    }),
    defineField({
      name: 'video',
      title: 'Video file',
      type: 'mux.video',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: limitedBlockTypes,
      group: 'content',
    }),
    defineField({
      name: 'publishDate',
      type: 'date',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'hideTableOfContents',
      type: 'boolean',
      group: 'options',
      initialValue: false,
    }),
    defineField({
      name: 'repoUrl',
      title: 'GitHub Repo URL',
      description: 'The URL to the GitHub repository for this chapter.',
      type: 'url',
      group: 'options',
    }),
    defineField({
      name: 'sectionQuiz',
      title: 'Section Quiz',
      type: 'pop-quiz',
      group: 'nextSection',
    }),
    defineField({
      name: 'nextSectionText',
      description: 'Displays when the user has completed the quiz for the preceding section.',
      type: 'string',
      group: 'nextSection',
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
      subtitle: 'publishDate',
      media: 'metadata.image',
    },
  },
  orderings: [
    {
      title: 'Date',
      name: 'date',
      by: [{ field: 'publishDate', direction: 'desc' }],
    },
    {
      title: 'Title',
      name: 'metadata.title',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
})
