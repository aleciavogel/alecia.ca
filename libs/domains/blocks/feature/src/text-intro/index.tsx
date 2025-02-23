import { PortableTextBlock } from 'next-sanity'

import { TextIntroBlockType } from '@alecia/block-types'
import BlogPortableText from '@alecia/blog/blog-portable-text'
import Typography from '@alecia/ui-kit/ui/typography'
import { cn } from '@alecia/util/styles'

const TextIntro = ({ leadText = 'Lead text will go here', body = [] }: TextIntroBlockType) => (
  <div
    className={cn(
      'flex items-center justify-items-center px-8 max-md:pt-20 md:px-20 page-container',
    )}
  >
    <div
      className={cn(
        'w-full text-body',
        'grid grid-cols-1 min-[930px]:grid-cols-2',
        'gap-6 md:gap-10 lg:gap-16',
        'px-8 md:px-0',
      )}
    >
      <div
        className={cn(
          'max-md:space-y-6 max-md:max-w-[600px]',
          'md:grid md:gap-6',
          'md:grid-cols-2 min-[930px]:grid-cols-1',
          'text-center md:text-left',
        )}
      >
        <div className="min-[930px]:col-span-2 ">
          <Typography
            variant="p"
            className="text-base md:text-2xl font-light text-primary-950 dark:text-primary-300"
          >
            {leadText}
          </Typography>
        </div>
        <div className="hidden" />
        <div className="col-span-2">
          <BlogPortableText value={body as PortableTextBlock[]} />
        </div>
      </div>
    </div>
  </div>
)

export default TextIntro
