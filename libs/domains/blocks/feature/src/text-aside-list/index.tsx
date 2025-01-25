import classNames from 'classnames'
import type { PortableTextBlock } from 'next-sanity'

import { TextAsideListBlockType } from '@alecia/block-types'
import AsideList from '@alecia/blocks-ui/aside-list'
import BlogPortableText from '@alecia/blog/blog-portable-text'

const TextAsideList = ({ reverse = false, text = [], ...rest }: TextAsideListBlockType) => (
  <div className="page-content-block grid md:grid-cols-3 gap-6 md:gap-16">
    <AsideList
      {...rest}
      className={classNames({
        'md:order-last': !reverse,
      })}
    />
    <div className="md:col-span-2 w-full">
      <div className="mx-auto max-w-screen-sm flex flex-col gap-6">
        <BlogPortableText value={text as PortableTextBlock[] | undefined} />
      </div>
    </div>
  </div>
)

export default TextAsideList
