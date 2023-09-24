import { cn } from '@/lib/utils'
import { type FC } from 'react'

interface ComingSoonHeaderProps {
  pageTitle: string
}

const ComingSoonHeader: FC<ComingSoonHeaderProps> = ({ pageTitle }) => {
  return (
    <section
      className={cn(
        'relative z-0 flex items-center justify-items-center px-20 pt-28 sm:pt-32',
        'transition-colors duration-300 ease-in-out',
        'bg-primary-800 dark:primary-900',
        'pb-[var(--triangleHeight)]',
      )}
      role="banner"
      aria-labelledby="page-title"
    >
      <div
        className={cn(
          'mx-auto space-y-2 md:space-y-4 text-left lg:text-center sm:max-w-screen-sm md:max-w-screen-md',
        )}
      >
        <h1
          id="page-title"
          className={cn(
            'font-serif text-3xl md:text-5xl lg:text-8xl capitalize text-white leading-snug',
          )}
        >
          {pageTitle}
        </h1>
      </div>
    </section>
  )
}

export default ComingSoonHeader
