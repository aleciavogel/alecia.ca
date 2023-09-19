import { type FC } from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'

import { parsePreBlock } from './Code'
import Link from 'next/link'

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
