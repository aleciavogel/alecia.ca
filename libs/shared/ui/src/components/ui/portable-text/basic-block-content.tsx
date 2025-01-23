import { type FC } from 'react'
import { PortableText, type PortableTextBlock, type PortableTextComponents } from 'next-sanity'

import { AnchorTag, Typography } from '../typography'

interface BasicPortableTextProps {
  value?: PortableTextBlock[]
}

// Move component definitions outside the main component
const basicPortableTextComponents = (): PortableTextComponents => ({
  block: {
    h1: ({ children }) => (
      <Typography
        variant="h1"
        className="w-full max-w-screen-sm mx-auto text-primary-800 dark:text-primary-300"
      >
        {children}
      </Typography>
    ),
    h2: ({ children }) => (
      <Typography
        variant="h2"
        className="w-full max-w-screen-sm mx-auto text-primary-800 dark:text-primary-300"
      >
        {children}
      </Typography>
    ),
    h3: ({ children }) => (
      <Typography
        variant="h3"
        className="w-full max-w-screen-sm mx-auto text-primary-800 dark:text-primary-300"
      >
        {children}
      </Typography>
    ),
    h4: ({ children }) => (
      <Typography
        variant="h4"
        className="w-full max-w-screen-sm mx-auto text-primary-800 dark:text-primary-300"
      >
        {children}
      </Typography>
    ),
    h5: ({ children }) => (
      <Typography
        variant="h5"
        className="w-full max-w-screen-sm mx-auto text-primary-800 dark:text-primary-300"
      >
        {children}
      </Typography>
    ),
    h6: ({ children }) => (
      <Typography
        variant="h6"
        className="w-full max-w-screen-sm mx-auto text-primary-800 dark:text-primary-300"
      >
        {children}
      </Typography>
    ),
    normal: ({ children }) => (
      <Typography
        variant="p"
        className=" w-full max-w-screen-sm mx-auto md:leading-relaxed text-primary-950 dark:text-primary-300"
      >
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
