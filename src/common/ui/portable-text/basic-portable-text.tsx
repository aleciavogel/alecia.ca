import classNames from 'classnames'
import { PortableText, type PortableTextBlock, type PortableTextComponents } from 'next-sanity'

import { cn } from '@alecia/util/styles'

import AnchorTag from '../anchor-tag'
import Typography from '../typography'

const BASIC_SPACING_STYLES = 'w-full max-w-screen-sm mx-auto'

const getTypographyClasses = (variant: 'heading' | 'body', changeOnDarkMode: boolean) =>
  classNames({
    'text-primary-800': variant === 'heading',
    'text-primary-950': variant === 'body',
    'dark:text-primary-400': changeOnDarkMode && variant === 'heading',
    'dark:text-primary-300': changeOnDarkMode && variant === 'body',
  })

// Move component definitions outside the main component
const basicPortableTextComponents = (changeOnDarkMode = false): PortableTextComponents => {
  const headingStyles = cn(BASIC_SPACING_STYLES, getTypographyClasses('heading', changeOnDarkMode))
  const listStyles = getTypographyClasses('body', changeOnDarkMode)
  const bodyStyles = cn(BASIC_SPACING_STYLES, listStyles)

  return {
    block: {
      h1: ({ children }) => (
        <Typography variant="h1" className={headingStyles}>
          {children}
        </Typography>
      ),
      h2: ({ children }) => (
        <Typography variant="h2" className={headingStyles}>
          {children}
        </Typography>
      ),
      h3: ({ children }) => (
        <Typography variant="h3" className={headingStyles}>
          {children}
        </Typography>
      ),
      h4: ({ children }) => (
        <Typography variant="h4" className={headingStyles}>
          {children}
        </Typography>
      ),
      h5: ({ children }) => (
        <Typography variant="h5" className={headingStyles}>
          {children}
        </Typography>
      ),
      h6: ({ children }) => (
        <Typography variant="h6" className={headingStyles}>
          {children}
        </Typography>
      ),
      normal: ({ children }) => (
        <Typography variant="p" className={bodyStyles}>
          {children}
        </Typography>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-square list-outside space-y-2 pl-10 max-w-screen-sm mx-auto">
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal list-outside space-y-2 pl-10 max-w-screen-sm mx-auto">
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => (
        <Typography as="li" variant="p" className={listStyles}>
          {children}
        </Typography>
      ),
      number: ({ children }) => (
        <Typography as="li" variant="p" className={listStyles}>
          {children}
        </Typography>
      ),
    },
    marks: {
      link: ({ children, value }) => (
        <AnchorTag href={value.href as string | undefined}>{children}</AnchorTag>
      ),
      code: ({ children }) => (
        <code className={cn('relative px-1 font-mono', 'bg-primary-800', 'text-white')}>
          {children}
        </code>
      ),
      ul: ({ children }) => <ul className="underline">{children}</ul>,
      em: ({ children }) => <em className="font-semibold">{children}</em>,
      strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    },
  }
}

interface BasicPortableTextProps {
  value?: PortableTextBlock[]
  changeOnDarkMode?: boolean
}

/**
 * Basic Portable Text component
 * For use with basic text content (no images, code snippets, etc.)
 */
const BasicPortableText = ({ value = [], changeOnDarkMode = false }: BasicPortableTextProps) => (
  <PortableText components={basicPortableTextComponents(changeOnDarkMode)} value={value} />
)

export default BasicPortableText
