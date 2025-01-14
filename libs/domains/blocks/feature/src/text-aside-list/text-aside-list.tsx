import { FC } from 'react'
import type { PortableTextBlock } from 'next-sanity'

import { AsideList } from '@alecia/blocks-ui'
import { BlogPortableText } from '@alecia/blog'

interface TextAsideListProps {
  heading?: string | null
  listItems?: string[] | null
  body?: PortableTextBlock[] | null
  reverse?: boolean
}

export const TextAsideList: FC<TextAsideListProps> = ({ reverse = false, body = [], ...rest }) => (
  <div className="grid grid-cols-3">
    {reverse && <AsideList {...rest} />}
    <div className="col-span-2 w-full">
      <div className="mx-auto max-w-screen-sm flex flex-col gap-6">
        <BlogPortableText value={body as PortableTextBlock[] | undefined} />
      </div>
    </div>
    {!reverse && <AsideList {...rest} />}
  </div>
)
