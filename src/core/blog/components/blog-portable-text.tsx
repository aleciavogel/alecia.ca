import { type FC } from 'react'
import type { PortableTextBlock, PortableTextComponents } from 'next-sanity'
import { PortableText } from 'next-sanity'

import AnchorTag from '@alecia/common/ui/anchor-tag'
import IdeaCallout, { type IdeaCalloutProps } from '@alecia/common/ui/idea-callout'
import Separator from '@alecia/common/ui/separator'
import Typography from '@alecia/common/ui/typography'
import CopyableCodeBlock from '@alecia/core/code-editor/components/copyable-code-block'
import InteractiveCodeEditor from '@alecia/core/code-editor/components/interactive-code-editor'
import ImageBox from '@alecia/core/images/components/image-box'
import { ExtendedImage } from '@alecia/types/images'
import { cn } from '@alecia/util/styles'
import type {
  Code,
  CustomHtml,
  IdeaCallout as SanityIdeaCallout,
  Sandpack,
} from '@alecia/vendors/sanity/types/sanity.types'

// TODO: move to @alecia/common/ui
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

  list: {
    bullet: ({ children }) => (
      <ul className="w-full max-w-screen-sm mx-auto space-y-2 text-primary-950 dark:text-primary-300">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="w-full max-w-screen-sm mx-auto space-y-2 text-primary-950 dark:text-primary-300">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li className="md:leading-relaxed pl-6 relative">
        <span
          className="absolute left-0 text-primary-600 dark:text-primary-400"
          aria-hidden
        >{`\u2022`}</span>
        {children}
      </li>
    ),
    number: ({ children, index }) => (
      <li className="md:leading-relaxed pl-6 relative">
        <span className="absolute left-0 text-primary-600 dark:text-primary-400" aria-hidden>
          {index + 1}.
        </span>
        {children}
      </li>
    ),
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
    code: ({ children }) => (
      <code className={cn('relative px-1 font-mono', 'bg-primary-800', 'text-white')}>
        {children}
      </code>
    ),
  },

  types: {
    break: () => <Separator />,
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
      const hidePreview = value.options?.showPreview === false
      return (
        <div
          className={
            hidePreview ? 'w-full max-w-screen-sm mx-auto my-10' : 'container mx-auto my-10 px-20'
          }
        >
          <div className={hidePreview ? undefined : 'max-w-screen-lg mx-auto'}>
            <InteractiveCodeEditor {...value} />
          </div>
        </div>
      )
    },
    code: ({ value }: { value: Code }) => {
      if (!value.code) return null

      return (
        <CopyableCodeBlock code={value.code} language={value.language} filename={value.filename} />
      )
    },
    'idea-callout': ({ value }: { value: SanityIdeaCallout }) => (
      <div className="container mx-auto my-10 px-20">
        <div className="max-w-screen-lg mx-auto">
          <IdeaCallout label={value.label} content={value.content as IdeaCalloutProps['content']} />
        </div>
      </div>
    ),
  },
}

export type BlogPostBlock = PortableTextBlock | CustomHtml | Sandpack | Code | SanityIdeaCallout

interface BlogPortableTextProps {
  paragraphClasses?: string
  value?: BlogPostBlock[]
}

const BlogPortableText: FC<BlogPortableTextProps> = ({ value = [] }) => {
  return <PortableText components={portableTextComponents} value={value} />
}

export default BlogPortableText
