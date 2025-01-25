import { type FC } from 'react'
import classNames from 'classnames'
import { PortableText, type PortableTextBlock, type PortableTextComponents } from 'next-sanity'

import AnchorTag from '../anchor-tag'
import Typography from '../typography'

// Move component definitions outside the main component
const basicPortableTextComponents = (changeOnDarkMode = false): PortableTextComponents => ({
  block: {
    h1: ({ children }) => (
      <Typography
        variant="h1"
        className={classNames('w-full max-w-screen-sm mx-auto text-primary-800', {
          'dark:text-primary-400': changeOnDarkMode,
        })}
      >
        {children}
      </Typography>
    ),
    h2: ({ children }) => (
      <Typography
        variant="h2"
        className={classNames('w-full max-w-screen-sm mx-auto text-primary-800', {
          'dark:text-primary-400': changeOnDarkMode,
        })}
      >
        {children}
      </Typography>
    ),
    h3: ({ children }) => (
      <Typography
        variant="h3"
        className={classNames('w-full max-w-screen-sm mx-auto text-primary-800', {
          'dark:text-primary-400': changeOnDarkMode,
        })}
      >
        {children}
      </Typography>
    ),
    h4: ({ children }) => (
      <Typography
        variant="h4"
        className={classNames('w-full max-w-screen-sm mx-auto text-primary-800', {
          'dark:text-primary-400': changeOnDarkMode,
        })}
      >
        {children}
      </Typography>
    ),
    h5: ({ children }) => (
      <Typography
        variant="h5"
        className={classNames('w-full max-w-screen-sm mx-auto text-primary-800', {
          'dark:text-primary-400': changeOnDarkMode,
        })}
      >
        {children}
      </Typography>
    ),
    h6: ({ children }) => (
      <Typography
        variant="h6"
        className={classNames('w-full max-w-screen-sm mx-auto text-primary-800', {
          'dark:text-primary-400': changeOnDarkMode,
        })}
      >
        {children}
      </Typography>
    ),
    normal: ({ children }) => (
      <Typography
        variant="p"
        className={classNames('w-full max-w-screen-sm mx-auto text-primary-950', {
          'dark:text-primary-300': changeOnDarkMode,
        })}
      >
        {children}
      </Typography>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-square list-outside space-y-2 pl-10">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-outside space-y-2 pl-10">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <Typography
        as="li"
        variant="p"
        className={classNames('w-full max-w-screen-sm mx-auto text-primary-800', {
          'dark:text-primary-300': changeOnDarkMode,
        })}
      >
        {children}
      </Typography>
    ),
    number: ({ children }) => (
      <Typography
        as="li"
        variant="p"
        className={classNames('w-full max-w-screen-sm mx-auto text-primary-800', {
          'dark:text-primary-300': changeOnDarkMode,
        })}
      >
        {children}
      </Typography>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <AnchorTag href={value.href as string | undefined}>{children}</AnchorTag>
    ),
    ul: ({ children }) => <ul className="underline">{children}</ul>,
    em: ({ children }) => <em className="font-semibold">{children}</em>,
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
  },
})

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
