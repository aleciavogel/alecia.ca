import classNames from 'classnames'
import type { PortableTextBlock } from 'next-sanity'

import { AsideList } from '@alecia/blocks-ui'
import { BlogPortableText } from '@alecia/blog'

interface TextAsideListProps {
  heading?: string | null
  listItems?: string[] | null
  body?: PortableTextBlock[] | null
  reverse?: boolean
}

const TextAsideList = ({ reverse = false, body = [], ...rest }: TextAsideListProps) => (
  <div className="page-content-block grid md:grid-cols-3 gap-6 md:gap-16">
    <AsideList
      {...rest}
      className={classNames({
        'md:order-last': !reverse,
      })}
    />
    <div className="md:col-span-2 w-full">
      <div className="mx-auto max-w-screen-sm flex flex-col gap-6">
        <BlogPortableText value={body as PortableTextBlock[] | undefined} />
      </div>
    </div>
  </div>
)

export default TextAsideList
