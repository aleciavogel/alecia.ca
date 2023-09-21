import { type FC } from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'

import CodeSnippet from './Code'
import Link from 'next/link'
import { preToCodeSnippetProps } from './Code/utils'

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
  return <MDXRemote source={source} components={components} />
}

export default MDXWrapper
