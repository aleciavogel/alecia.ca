import { type FC } from 'react'
import type { PortableTextBlock, PortableTextComponents } from 'next-sanity'
import { PortableText } from 'next-sanity'

import { BlogSeparator } from '@alecia/blog-ui'
import { InteractiveCodeEditor } from '@alecia/code-snippets'
import { ImageBox } from '@alecia/images-ui'
import type { Code, CustomHtml, Sandpack } from '@alecia/sanity-types'
import { ExtendedImage } from '@alecia/types'
import { AnchorTag, Typography } from '@alecia/ui-kit'

// TODO: move to @alecia/ui-kit
const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <Typography
        variant="p"
        className="w-full max-w-screen-sm mx-auto md:leading-relaxed text-primary-950 dark:text-primary-300"
      >
        {children}
      </Typography>
    ),
    h1: ({ children }) => (
      <Typography variant="h1" className="w-full max-w-screen-sm mx-auto">
        {children}
      </Typography>
    ),
    h2: ({ children }) => (
      <Typography variant="h2" className="w-full max-w-screen-sm mx-auto">
        {children}
      </Typography>
    ),
    h3: ({ children }) => (
      <Typography variant="h3" className="w-full max-w-screen-sm mx-auto">
        {children}
      </Typography>
    ),
    h4: ({ children }) => (
      <Typography variant="h4" className="w-full max-w-screen-sm mx-auto">
        {children}
      </Typography>
    ),
    h5: ({ children }) => (
      <Typography variant="h5" className="w-full max-w-screen-sm mx-auto">
        {children}
      </Typography>
    ),
    h6: ({ children }) => (
      <Typography variant="h6" className="w-full max-w-screen-sm mx-auto">
        {children}
      </Typography>
    ),
    blockquote: ({ children }) => <Typography variant="blockquote">{children}</Typography>,
  },

  marks: {
    // code: ({ children }) => <code className="bg-gray-100 p-1 rounded">{children}</code>,
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
  },

  types: {
    break: () => <BlogSeparator />,
    image: ({ value }: { value: ExtendedImage }) => {
      return (
        <div className="space-y-2">
          <ImageBox image={value} alt={value.alt} classesWrapper="relative aspect-[16/9]" />
          {value.caption ? (
            <div className="font-sans text-sm text-gray-600">{value.caption}</div>
          ) : null}
        </div>
      )
    },
    sandpack: ({ value }) => {
      return (
        <div className="container mx-auto my-10 px-20">
          <div className="max-w-screen-lg mx-auto">
            <InteractiveCodeEditor {...value} />
          </div>
        </div>
      )
    },
  },
}

export type BlogPostBlock = PortableTextBlock | CustomHtml | Sandpack | Code

interface BlogPortableTextProps {
  paragraphClasses?: string
  value?: BlogPostBlock[]
}

export const BlogPortableText: FC<BlogPortableTextProps> = ({ value = [] }) => {
  return <PortableText components={portableTextComponents} value={value} />
}
