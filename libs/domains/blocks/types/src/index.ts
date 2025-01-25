import { PageQueryResult } from '@alecia/sanity-types/sanity.types'

export type ModulesType = NonNullable<PageQueryResult>['modules']
export type BlockType = NonNullable<ModulesType>[number]

export type AccordionListBlockType = Extract<BlockType, { _type: 'accordion-list' }>
export type ArticleListBlockType = Extract<BlockType, { _type: 'article-list' }>
export type CourseListBlockType = Extract<BlockType, { _type: 'course-list' }>
export type GalleryPetsBlockType = Extract<BlockType, { _type: 'gallery.pets' }>
export type ImageWithTextBlockType = Extract<BlockType, { _type: 'image-with-text' }>
export type NavCardBlockType = Extract<BlockType, { _type: 'nav.card' }>
export type NavIconsBlockType = Extract<BlockType, { _type: 'nav.icons' }>
export type ProjectListBlockType = Extract<BlockType, { _type: 'project-list' }>
export type TextAsideListBlockType = Extract<BlockType, { _type: 'text.aside-list' }>
export type TextBlockquoteBlockType = Extract<BlockType, { _type: 'text.blockquote' }>
export type TextCTABlockType = Extract<BlockType, { _type: 'text.cta' }>
export type TextIntroBlockType = Extract<BlockType, { _type: 'text.intro' }>
