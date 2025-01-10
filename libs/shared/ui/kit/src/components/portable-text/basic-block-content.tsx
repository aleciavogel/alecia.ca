import { type FC } from 'react'
import { PortableText, type PortableTextBlock, type PortableTextComponents } from 'next-sanity'

import { AnchorTag, Typography } from '@/components/ui/typography'

interface BasicPortableTextProps {
  value?: PortableTextBlock[]
}

// Move component definitions outside the main component
const basicPortableTextComponents = (): PortableTextComponents => ({
  block: {
    normal: ({ children }) => (
      <Typography className="text-base md:text-lg text-primary-950 dark:text-primary-300 md:leading-relaxed">
        {children}
      </Typography>
    ),
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
  },
  marks: {
    link: ({ children, value }) => (
      <AnchorTag href={value.href as string | undefined}>{children}</AnchorTag>
    ),
  },
})

/**
 * Basic Portable Text component
 * For use with basic text content (no images, code snippets, etc.)
 */
export const BasicBlockContent: FC<BasicPortableTextProps> = ({ value = [] }) => (
  <PortableText components={basicPortableTextComponents()} value={value} />
)
