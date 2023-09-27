'use client'
import { type FC } from 'react'
import { MDXProvider } from '@mdx-js/react'

import CodeSnippet from './code-wrapper'
import Link from 'next/link'
import { preToCodeSnippetProps } from './code-wrapper/utils'

export const parsePreBlock = (preProps: any): JSX.Element => {
  const props = preToCodeSnippetProps(preProps)
  if (props !== undefined) {
    return <CodeSnippet {...props} />
  } else {
    return <pre {...preProps} />
  }
}

const components = {
  pre: parsePreBlock,
  a: ({ href, ...rest }: any) => <Link href={href ?? ''} {...rest} />,
}

interface MDXWrapperProps {
  source: any
}

const MDXWrapper: FC<MDXWrapperProps> = ({ source }) => {
  return <MDXProvider components={components}>{source}</MDXProvider>
}

export default MDXWrapper
