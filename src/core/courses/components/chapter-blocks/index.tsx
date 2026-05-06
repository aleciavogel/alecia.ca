import dynamic from 'next/dynamic'
import { type PortableTextBlock } from 'next-sanity'

import Typography from '@alecia/common/ui/typography'

import CoursePortableText from '../course-portable-text'
import type { CourseBlock } from '../course-portable-text/portable-text-components'

const InteractiveCodeEditor = dynamic(
  () => import('@alecia/core/code-editor/components/interactive-code-editor'),
)
const ImageWithText = dynamic(() => import('@alecia/core/blocks/components/image-with-text'))

interface ChapterBlocksProps {
  blocks?: any[] | null
}

const ChapterBlocks = ({ blocks }: ChapterBlocksProps) => {
  if (!blocks || blocks.length === 0) return null

  return (
    <>
      {blocks.map((block) => {
        switch (block._type) {
          case 'chapter-section':
            return (
              <section key={block._key} className="flex flex-col gap-6 page-content-block">
                <CoursePortableText value={block.content as CourseBlock[] | undefined} />
              </section>
            )
          case 'sandpack':
            return (
              <div key={block._key} className="container mx-auto my-10 px-20">
                <div className="max-w-screen-lg mx-auto">
                  <InteractiveCodeEditor {...block} />
                </div>
              </div>
            )
          case 'custom-html':
            return block.html?.code ? (
              <div
                key={block._key}
                id={block.uid}
                className={block.className}
                dangerouslySetInnerHTML={{ __html: block.html.code }}
              />
            ) : null
          case 'image-with-text':
            return (
              <ImageWithText key={block._key} {...block} body={block.body as PortableTextBlock[]} />
            )
          case 'callout':
            return (
              <div key={block._key} className="page-content-block">
                <div className="w-full max-w-screen-sm mx-auto rounded-lg border border-primary-200 dark:border-primary-700 bg-primary-50 dark:bg-primary-900 p-6">
                  <CoursePortableText value={block.content as CourseBlock[] | undefined} />
                </div>
              </div>
            )
          case 'tip':
            return (
              <div key={block._key} className="page-content-block">
                <div className="w-full max-w-screen-sm mx-auto rounded-lg border border-accent-200 dark:border-accent-700 bg-accent-50 dark:bg-accent-900 p-6">
                  {block.title ? (
                    <Typography variant="h4" className="mb-3 text-accent-700 dark:text-accent-300">
                      {block.title}
                    </Typography>
                  ) : null}
                  <CoursePortableText value={block.content as CourseBlock[] | undefined} />
                </div>
              </div>
            )
          default:
            return null
        }
      })}
    </>
  )
}

export default ChapterBlocks
