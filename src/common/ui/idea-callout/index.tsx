import { type PortableTextBlock, type PortableTextComponents } from 'next-sanity'
import { PortableText } from 'next-sanity'

import AleciaIdeaIllustration from '@alecia/common/graphics/illustrations/alecia/idea'
import AnchorTag from '@alecia/common/ui/anchor-tag'
import Typography from '@alecia/common/ui/typography'
import { cn } from '@alecia/util/styles'

const ideaCalloutComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <Typography variant="p" className="text-primary-950 dark:text-primary-200">
        {children}
      </Typography>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const isExternal = !value.href.startsWith('/')
      const rel = isExternal ? 'noreferrer noopener' : undefined
      const target = isExternal ? '_blank' : undefined

      return (
        <AnchorTag href={value.href} rel={rel} target={target}>
          {children}
        </AnchorTag>
      )
    },
    code: ({ children }) => (
      <code className={cn('relative px-1 font-mono', 'bg-primary-800', 'text-white')}>
        {children}
      </code>
    ),
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
  },
}

export interface IdeaCalloutProps {
  label?: string | null
  content?: PortableTextBlock[]
  className?: string
}

/**
 * IdeaCallout — a rectangular "Did you know?" / "Don't forget!" banner
 * featuring the AleciaIdea illustration overflowing outside the banner on the
 * left on desktop, or below on mobile.
 */
const IdeaCallout = ({ label, content = [], className }: IdeaCalloutProps) => (
  <div
    className={cn(
      'relative w-full my-6',
      'rounded-lg border border-primary-300 dark:border-primary-700',
      'bg-primary-200 dark:bg-primary-950',
      // Left padding must be at least as wide as the illustration to prevent text overlap
      'px-6 py-6 md:pl-72',
      className,
    )}
  >
    {/* Text area */}
    <div className="space-y-2">
      {label ? (
        <Typography
          variant="h5"
          className="text-lg md:text-xl text-primary-800 dark:text-primary-300 mb-1"
        >
          {label}
        </Typography>
      ) : null}
      {content.length > 0 ? (
        <PortableText value={content} components={ideaCalloutComponents} />
      ) : null}
    </div>

    {/* Illustration */}
    {/* Mobile: in normal flow, centered below text */}
    {/* Desktop: absolutely positioned, overflowing to the right */}
    <div
      className={cn(
        'mt-6 mx-auto w-52',
        'md:mt-0 md:mx-0 md:absolute md:-left-10 md:top-1/2 md:-translate-y-1/2 md:w-72',
      )}
    >
      <AleciaIdeaIllustration className="w-full h-auto" />
    </div>
  </div>
)

export default IdeaCallout
