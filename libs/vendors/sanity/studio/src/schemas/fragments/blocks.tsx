import { imageBlock } from './image-block'

/**
 * This file is used to define the blocks that are available to the user in the studio.
 */
export const blockTypes = [
  { type: 'accordion-list' },
  { type: 'blog-frontpage' },
  { type: 'blog-list' },
  // { type: 'breadcrumbs' },
  { type: 'callout' },
  // { type: 'creative-module' },
  { type: 'course-list' },
  { type: 'custom-html' },

  // Image gallery types
  { type: 'gallery.pets' },
  { type: 'image-with-text' },

  /** Navigation */
  { type: 'nav.card' },
  { type: 'nav.icons' },
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
  { type: 'text.aside-list' }, // Text with an unordered list on the side
  { type: 'text.blockquote' }, // Blockquote
]

export const limitedBlockTypes = [
  { type: 'block' },
  imageBlock,
  { type: 'sandpack' },
  { type: 'custom-html' },
]

export const literallyJustTheDefaultTextBlocks = [{ type: 'block' }]
