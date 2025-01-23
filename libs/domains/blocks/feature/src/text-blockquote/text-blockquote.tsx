import { Blockquote } from '@alecia/blocks-ui'

interface TextBlockquoteProps {
  author?: string | null
  quote?: string | null
}

export const TextBlockquote = ({ author, quote }: TextBlockquoteProps) => (
  <div className="page-content-block">
    <Blockquote author={author} quote={quote} />
  </div>
)
